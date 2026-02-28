import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'customers.json');

    if (!fs.existsSync(filePath)) {
      return NextResponse.json([]);
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const customers = JSON.parse(fileContent);
    return NextResponse.json(customers);
  } catch (error: any) {
    console.error("取得エラー:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}