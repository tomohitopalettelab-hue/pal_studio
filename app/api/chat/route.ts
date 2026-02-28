import { GoogleGenAI } from "@google/genai";
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ text: "APIキーが設定されていません。" }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });
    const body = await req.json();
    const { message, history } = body;

    // --- 修正点1: 判定の厳格化 ---
    // 文中にOKが含まれるだけで反応しないよう、完全一致に近い判定に変更
    const isApproved = /^(OK|いいよ|進めて|お願い|完璧|確定|大丈夫です)$/i.test(message.trim());

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

    // --- 修正点2: プロンプトの受け渡し ---
    // フロント側から届く message (systemContext) を AI への命令として優先的に組み込む
    const systemInstruction = isApproved 
      ? `あなたはディレクターです。以下の案内メッセージのみを、HTMLを含めずプレーンテキストで返してください。
          「ありがとうございます！ヒアリング内容をLabに保存しました。管理画面で確認できます。」`
      : `${message}

         あなたは超一流のWebディレクターです。構造的で美しいワイヤーフレームをHTMLで作成してください。
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