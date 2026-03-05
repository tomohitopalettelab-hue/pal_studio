import { NextResponse } from 'next/server';
import { readCustomers, upsertCustomer } from '../_lib/customer-store';
import { listPalStudioAccountsFromPalDb } from '../_lib/pal-studio-accounts';

export async function GET() {
  try {
    const studioAccounts = await listPalStudioAccountsFromPalDb();
    const existingCustomers = await readCustomers();
    const existingByCustomerId = new Set(
      existingCustomers
        .map((customer) => String(customer.customer_id || customer.id || '').trim().toUpperCase())
        .filter(Boolean),
    );

    const missingAccounts = studioAccounts.filter((account) => {
      const paletteId = String(account.paletteId || '').trim().toUpperCase();
      return paletteId && !existingByCustomerId.has(paletteId);
    });

    if (missingAccounts.length > 0) {
      await Promise.all(
        missingAccounts.map((account) => {
          const paletteId = String(account.paletteId || '').trim().toUpperCase();
          return upsertCustomer({
            id: paletteId,
            customer_id: paletteId,
            name: String(account.name || '名称未設定'),
            status: 'hearing',
            answers: [],
            description: '',
            htmlCode: '',
            updatedAt: account.updatedAt || new Date().toISOString(),
          });
        }),
      );
    }

    const customers = await readCustomers();
    return NextResponse.json(customers);
  } catch (error: any) {
    console.error("取得エラー:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}