import { NextResponse } from 'next/server';
import { upsertCustomer } from '../_lib/customer-store';
import { findPalStudioAccountByPaletteId } from '../_lib/pal-studio-accounts';
import { palDbPost } from '../_lib/pal-db-client';

const PALETTE_ID_PATTERN = /^[A-Z][0-9]{4}$/;

const normalizeIncomingName = (raw: unknown): string => String(raw || '').trim();

const isSyntheticName = (name: string, paletteId: string): boolean => {
  if (!name) return true;
  if (PALETTE_ID_PATTERN.test(name)) return true;
  if (name.toUpperCase() === paletteId.toUpperCase()) return true;
  if (/\(\s*\d{1,2}:\d{2}(?::\d{2})?(?:\s*[AP]M)?\s*\)$/i.test(name)) return true;
  return false;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const explicitPaletteId = String(body?.customer_id || body?.paletteId || '').trim().toUpperCase();
    const fallbackId = String(body?.id || '').trim().toUpperCase();
    const paletteId = explicitPaletteId || (PALETTE_ID_PATTERN.test(fallbackId) ? fallbackId : '');

    if (!paletteId) {
      return NextResponse.json({ success: false, error: 'customer_id（Palette ID）が必要です。' }, { status: 400 });
    }

    const studioAccount = await findPalStudioAccountByPaletteId(paletteId);

    if (!studioAccount) {
      return NextResponse.json({ success: false, error: 'Pal Studio契約中の顧客IDのみ保存できます。' }, { status: 403 });
    }

    const incomingName = normalizeIncomingName(body?.name);
    const normalizedAccountName = normalizeIncomingName(studioAccount.name);
    const effectiveName = isSyntheticName(incomingName, paletteId)
      ? (normalizedAccountName || '顧客名未設定')
      : incomingName;

    console.log("=== /api/save-customer received ===", JSON.stringify(body, null, 2));
    const newCustomer = {
      ...body,
      id: body.id || `cust-${Date.now()}`,
      customer_id: paletteId || body.customer_id || `custsrv-${Date.now()}`,
      name: effectiveName,
      updatedAt: new Date().toISOString(),
      status: body.status || 'hearing',
    };

    const saved = await upsertCustomer(newCustomer);

    const syncRes = await palDbPost('/api/accounts', {
      id: studioAccount.id,
      paletteId: studioAccount.paletteId,
      name: effectiveName,
      status: studioAccount.status || 'active',
      chatLoginId: studioAccount.chatLoginId || studioAccount.paletteId,
      ...(body?.loginPassword ? { chatPassword: String(body.loginPassword) } : {}),
    });

    if (!syncRes.ok) {
      const syncBody = await syncRes.json().catch(() => ({}));
      return NextResponse.json({ success: false, error: syncBody?.error || 'pal_db同期に失敗しました。' }, { status: 500 });
    }

    return NextResponse.json({ success: true, customer: saved });
  } catch (error) {
    console.error('Save API Error:', error);
    const message = error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}