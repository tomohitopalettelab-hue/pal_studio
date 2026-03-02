import { NextResponse } from 'next/server';
import { upsertCustomer } from '../_lib/customer-store';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("=== /api/save-customer received ===", JSON.stringify(body, null, 2));
    const newCustomer = {
      ...body,
      id: body.id || `cust-${Date.now()}`,
      customer_id: body.customer_id || `custsrv-${Date.now()}`,
      updatedAt: new Date().toISOString(),
      status: body.status || 'hearing',
    };

    const saved = await upsertCustomer(newCustomer);
    return NextResponse.json({ success: true, customer: saved });
  } catch (error) {
    console.error('Save API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}