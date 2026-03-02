import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { upsertCustomer } from '../_lib/customer-store';

type CustomerRecord = Record<string, any>;

const parseCustomersJson = (raw: string): CustomerRecord[] => {
  const normalized = raw.replace(/^\uFEFF/, '').trim();
  if (!normalized) return [];
  const parsed = JSON.parse(normalized);
  return Array.isArray(parsed) ? parsed : [];
};

export async function POST(req: Request) {
  try {
    const migrationToken = process.env.MIGRATION_TOKEN?.trim();
    if (migrationToken) {
      const authHeader = req.headers.get('authorization') || '';
      const bearerToken = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : '';
      if (bearerToken !== migrationToken) {
        return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
      }
    }

    const dataPath = process.env.CUSTOMER_DATA_PATH?.trim() || path.join(process.cwd(), 'data', 'customers.json');
    if (!fs.existsSync(dataPath)) {
      return NextResponse.json({ success: false, error: `customers.json not found: ${dataPath}` }, { status: 404 });
    }

    const raw = fs.readFileSync(dataPath, 'utf-8');
    const customers = parseCustomersJson(raw);

    let migrated = 0;
    const errors: Array<{ index: number; id?: string; reason: string }> = [];

    for (let i = 0; i < customers.length; i++) {
      const row = customers[i];
      try {
        await upsertCustomer({
          ...row,
          id: row?.id || `cust-migrated-${Date.now()}-${i}`,
          customer_id: row?.customer_id || `custsrv-migrated-${Date.now()}-${i}`,
          updatedAt: row?.updatedAt || new Date().toISOString(),
          status: row?.status || 'hearing',
        });
        migrated++;
      } catch (error: any) {
        errors.push({
          index: i,
          id: row?.id,
          reason: error?.message || 'Unknown migration error',
        });
      }
    }

    return NextResponse.json({
      success: true,
      source: dataPath,
      total: customers.length,
      migrated,
      failed: errors.length,
      errors,
    });
  } catch (error: any) {
    console.error('Migrate API Error:', error);
    return NextResponse.json({ success: false, error: error?.message || 'Internal Server Error' }, { status: 500 });
  }
}
