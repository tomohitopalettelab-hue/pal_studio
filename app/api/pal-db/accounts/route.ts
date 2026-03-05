import { NextResponse } from 'next/server';
import { listPalStudioAccountsFromPalDb } from '../../_lib/pal-studio-accounts';

export async function GET() {
  try {
    const accounts = await listPalStudioAccountsFromPalDb();
    return NextResponse.json({ success: true, accounts });
  } catch (error) {
    console.error('GET /api/pal-db/accounts Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch pal-db accounts' }, { status: 500 });
  }
}
