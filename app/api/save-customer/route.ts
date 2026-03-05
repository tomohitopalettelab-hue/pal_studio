import { NextResponse } from 'next/server';
import { upsertCustomer } from '../_lib/customer-store';
import { findPalStudioAccountByPaletteId } from '../_lib/pal-studio-accounts';
import { palDbPost } from '../_lib/pal-db-client';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const paletteId = String(body?.customer_id || body?.id || '').trim().toUpperCase();
    const studioAccount = await findPalStudioAccountByPaletteId(paletteId);

    if (!studioAccount) {
      return NextResponse.json({ success: false, error: 'Pal Studio契約中の顧客IDのみ保存できます。' }, { status: 403 });
    }

    console.log("=== /api/save-customer received ===", JSON.stringify(body, null, 2));
    const newCustomer = {
      ...body,
      id: body.id || `cust-${Date.now()}`,
      customer_id: paletteId || body.customer_id || `custsrv-${Date.now()}`,
      name: String(body?.name || studioAccount.name || '新規顧客'),
      updatedAt: new Date().toISOString(),
      status: body.status || 'hearing',
    };

    const saved = await upsertCustomer(newCustomer);

    const syncRes = await palDbPost('/api/accounts', {
      id: studioAccount.id,
      paletteId: studioAccount.paletteId,
      name: String(saved?.name || studioAccount.name || '顧客名未設定'),
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