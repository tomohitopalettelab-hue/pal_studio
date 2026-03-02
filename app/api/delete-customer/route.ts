import { NextResponse } from 'next/server';
import { deleteCustomerById } from '../_lib/customer-store';

export async function POST(req: Request) {
  try {
    const { id } = await req.json();
    await deleteCustomerById(String(id));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
