import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // データ保存用ディレクトリとファイルパス
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'customers.json');

    // ディレクトリがなければ作成
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // 既存データを読み込み
    let customers = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      try {
        customers = JSON.parse(fileContent);
      } catch (e) {
        console.error("JSON parse error", e);
        customers = [];
      }
    }

    // 新規データか更新か
    // IDがない場合は新規作成とみなす
    const newCustomer = {
      ...body,
      id: body.id || `cust-${Date.now()}`,
      updatedAt: new Date().toISOString(),
      status: body.status || 'hearing',
    };

    // IDで検索して更新、なければ追加
    const existingIndex = customers.findIndex((c: any) => c.id === newCustomer.id);
    if (existingIndex >= 0) {
      customers[existingIndex] = { ...customers[existingIndex], ...newCustomer };
    } else {
      // 新しいものを先頭に
      customers.unshift(newCustomer);
    }

    // 保存
    fs.writeFileSync(filePath, JSON.stringify(customers, null, 2), 'utf-8');

    return NextResponse.json({ success: true, customer: newCustomer });
  } catch (error) {
    console.error('Save API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}