import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// キャッシュさせない設定（常に最新のDBデータを取るため）
export const revalidate = 0;

export async function GET() {
  try {
    const { rows } = await sql`SELECT * FROM customers ORDER BY updated_at DESC`;
    
    // DBのカラム名（html_codeなど）を、今のコードで使っている（htmlCodeなど）に変換
    const formattedRows = rows.map(row => ({
      id: row.customer_id,
      name: row.name,
      status: row.status,
      answers: row.answers,
      htmlCode: row.html_code,
      updatedAt: new Date(row.updated_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }));

    return NextResponse.json(formattedRows);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}