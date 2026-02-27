import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, answers, htmlCode } = await request.json();

    // 顧客IDをランダムに生成（例: C-12345）
    const customerId = `C-${Math.floor(10000 + Math.random() * 90000)}`;

    // データベースに保存
    const result = await sql`
      INSERT INTO customers (customer_id, name, status, answers, html_code)
      VALUES (${customerId}, ${name}, 'hearing', ${JSON.stringify(answers)}, ${htmlCode})
      ON CONFLICT (customer_id) DO UPDATE SET
        name = EXCLUDED.name,
        answers = EXCLUDED.answers,
        html_code = EXCLUDED.html_code,
        updated_at = CURRENT_TIMESTAMP
      RETURNING *;
    `;

    console.log("DB保存成功:", result.rows[0]);
    return NextResponse.json({ success: true, data: result.rows[0] });
  } catch (error: any) {
    console.error("DB保存エラー詳細:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}