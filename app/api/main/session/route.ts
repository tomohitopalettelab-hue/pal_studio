import { NextResponse } from 'next/server';
import { readCustomers } from '../../_lib/customer-store';
import { parseSessionValue, SESSION_COOKIE_NAME, isExpired } from '../../../../lib/auth-session';

export async function GET(req: Request) {
  try {
    const cookieHeader = req.headers.get('cookie') || '';
    const match = cookieHeader
      .split(';')
      .map((part) => part.trim())
      .find((part) => part.startsWith(`${SESSION_COOKIE_NAME}=`));
    const value = match ? match.split('=').slice(1).join('=') : '';
    const session = parseSessionValue(value);

    if (!session || session.role !== 'customer' || isExpired(session)) {
      return NextResponse.json({ authenticated: false });
    }

    const customers = await readCustomers();
    const customer = customers.find(
      (item: any) => item.id === session.customerId || item.customer_id === session.customerId,
    );

    if (!customer) {
      return NextResponse.json({ authenticated: false });
    }

    const posts = Array.isArray(customer.posts) ? customer.posts : [];

    return NextResponse.json({
      authenticated: true,
      customer: {
        id: customer.id,
        customerId: customer.customer_id,
        name: customer.name,
      },
      posts,
    });
  } catch (error: any) {
    return NextResponse.json({ authenticated: false, error: error?.message || 'session error' }, { status: 500 });
  }
}
