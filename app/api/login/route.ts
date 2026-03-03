import { NextResponse } from 'next/server';
import { readCustomers } from '../_lib/customer-store';
import { createSessionValue, SESSION_COOKIE_NAME, type SessionPayload } from '../../../lib/auth-session';

type LoginBody = {
  role?: 'admin' | 'customer';
  id?: string;
  password?: string;
  next?: string;
};

const resolveNextPath = (next?: string, fallback: string = '/main') => {
  if (!next) return fallback;
  if (!next.startsWith('/')) return fallback;
  if (next.startsWith('//')) return fallback;
  return next;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as LoginBody;
    const role = body.role;
    const id = String(body.id || '').trim();
    const password = String(body.password || '');

    if (!role || !id || !password) {
      return NextResponse.json({ success: false, error: 'IDとパスワードを入力してください。' }, { status: 400 });
    }

    let session: SessionPayload | null = null;
    let redirectTo = '/main';

    if (role === 'admin') {
      const adminUser = process.env.ADMIN_USERNAME?.trim() || process.env.ADMIN_USER?.trim();
      const adminPass = process.env.ADMIN_PASSWORD?.trim();
      if (!adminUser || !adminPass) {
        return NextResponse.json({ success: false, error: '管理者ログイン設定が未構成です。' }, { status: 500 });
      }
      if (id !== adminUser || password !== adminPass) {
        return NextResponse.json({ success: false, error: 'IDまたはパスワードが違います。' }, { status: 401 });
      }

      session = {
        role: 'admin',
        exp: Date.now() + 1000 * 60 * 60 * 12,
      };
      redirectTo = resolveNextPath(body.next, '/admin');
    }

    if (role === 'customer') {
      const customers = await readCustomers();
      const matched = customers.find((c: any) => {
        const loginId = String(c?.loginId || '').trim();
        const loginPassword = String(c?.loginPassword || '');
        return loginId === id && loginPassword === password;
      });

      if (!matched) {
        return NextResponse.json({ success: false, error: 'IDまたはパスワードが違います。' }, { status: 401 });
      }

      const customerId = String((matched as any).customer_id || (matched as any).id || '').trim();
      session = {
        role: 'customer',
        customerId,
        exp: Date.now() + 1000 * 60 * 60 * 8,
      };
      redirectTo = resolveNextPath(body.next, `/main?cid=${encodeURIComponent(customerId)}`);
    }

    if (!session) {
      return NextResponse.json({ success: false, error: 'ログイン情報が不正です。' }, { status: 400 });
    }

    const res = NextResponse.json({ success: true, redirectTo });
    res.cookies.set({
      name: SESSION_COOKIE_NAME,
      value: createSessionValue(session),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 12,
    });

    return res;
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || 'ログインに失敗しました。' }, { status: 500 });
  }
}
