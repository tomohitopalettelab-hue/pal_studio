import { GoogleGenAI } from "@google/genai";
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ text: "APIキーが設定されていません。" }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });
    const body = await req.json();
    const { message, history } = body;

    // 1. ユーザーの承諾（OKなど）を判定
    const isApproved = /OK|いいよ|進めて|お願い|完璧|確定/.test(message);

    // --- ★【lab連携：データ保存ロジックの復元】 ---
    if (isApproved) {
      try {
        // ヒアリング内容を answers 配列の形式に整形
        const answers = (history || [])
          .filter((m: any) => m.role === 'user')
          .map((m: any) => ({
            q: "ヒアリング要望",
            a: m.content
          }));
        
        // 最後のユーザーメッセージも追加
        answers.push({ q: "確定時メッセージ", a: message });

        // 顧客名（とりあえずプロジェクト名として生成）
        const projectName = `Project_${new Date().toLocaleDateString('ja-JP')}_${Math.floor(Math.random() * 1000)}`;

        // すでにある save-customer API を叩く
        const origin = new URL(req.url).origin;
        await fetch(`${origin}/api/save-customer`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: projectName,
            answers: answers,
            htmlCode: "" // 初期生成はlab画面側のボタンで行うため、まずは空で保存
          })
        });
        
        console.log("Lab（DB）への保存に成功しました");
      } catch (dbError) {
        console.error("Lab保存中の通信エラー:", dbError);
      }
    }
    // ---------------------------------------------

    const wireframeStyle = `
      <style>
        .wf-container { font-family: 'Inter', sans-serif; color: #333; background: #fff; line-height: 1.6; }
        .wf-section { border: 2px dashed #ccc; margin: 20px 0; padding: 40px 20px; text-align: center; background: #f9f9f9; position: relative; }
        .wf-section::before { content: attr(data-label); position: absolute; top: 5px; left: 10px; font-size: 10px; color: #999; text-transform: uppercase; letter-spacing: 1px; }
        .wf-box { border: 1px solid #ddd; background: #eee; min-height: 100px; display: flex; align-items: center; justify-content: center; margin: 10px auto; }
        .wf-heading { font-size: 24px; font-weight: bold; border-bottom: 2px solid #333; display: inline-block; margin-bottom: 20px; padding-bottom: 5px; }
        .wf-text { color: #666; max-width: 600px; margin: 0 auto; }
        .wf-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 20px; }
        .wf-btn { border: 2px solid #333; padding: 10px 20px; display: inline-block; font-weight: bold; margin-top: 15px; }
      </style>
    `;

    const systemInstruction = isApproved 
      ? `あなたはディレクターです。以下の案内メッセージのみを、HTMLを含めずプレーンテキストで返してください。
         「ありがとうございます！ヒアリング内容を承りました。
         それでは、5営業日以内にヒアリング内容を元に制作担当が初稿を制作いたします！
         今しばらくお待ちくださいませ。」`
      : `あなたは超一流のWebディレクターです。構造的で美しいワイヤーフレームをHTMLで作成してください。
         【ルール】
         1. 以下のスタイルガイド（${wireframeStyle}）を必ず含め、classを利用して構成してください。
         2. 色は使わず、グレー・白・黒・点線・実線のみで設計図として美しく表現してください。
         3. 最後は必ず「こちらの構成でよろしいでしょうか？（OKであればその旨お伝えください）」と質問してください。`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        { role: 'user', parts: [{ text: systemInstruction }] },
        ...(history || []).map((m: any) => ({
          role: m.role === 'ai' ? 'model' : 'user',
          parts: [{ text: String(m.content) }],
        })),
        { role: 'user', parts: [{ text: String(message) }] },
      ],
    });

    return NextResponse.json({ text: response.text });

  } catch (error: any) {
    console.error("--- Gemini API 実行エラー ---");
    return NextResponse.json({ text: `エラーが発生しました: ${error.message}` }, { status: 500 });
  }
}