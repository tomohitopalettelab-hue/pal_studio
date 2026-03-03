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
    const { message, history, system } = body;

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
    const baseSystem = system && String(system).trim().length > 0
      ? String(system)
      : 'あなたはプロのWebデザイナーです。ユーザーの要望を丁寧にヒアリングし、必要に応じてHTMLワイヤーフレームを作成します。';

    const systemInstruction = isApproved 
      ? `あなたはディレクターです。以下の案内メッセージのみを、HTMLを含めずプレーンテキストで返してください。
          「ありがとうございます！ヒアリング内容をLabに保存しました。管理画面で確認できます。」`
      : `${baseSystem}

         あなたは超一流のWebディレクターです。構造的で美しいワイヤーフレームをHTMLで作成してください。
         【ルール】
        1. 1問1答で進行し、質問は最大10問まで。必要情報が揃えば10問未満で完了してください。
        2. 屋号名（会社名・法人名）は必須です。未確認のままワイヤーフレーム作成に進まないでください。
        3. ワイヤーフレームに含める要素に応じて追加ヒアリングを行ってください。
          - 会社概要/アクセス: 住所・電話・営業時間・定休日
          - お問い合わせフォーム: 必須項目・送信先メール・注意事項
          - 採用情報: 募集職種・雇用形態・勤務地・応募方法
          - 実績紹介: 実績ジャンル・件数感・見せ方
        4. 不足情報はダミーで埋めず、必ず質問で回収してください。
        5. ワイヤーフレーム作成時は以下のスタイルガイド（${wireframeStyle}）を含め、グレー・白・黒・点線・実線のみで設計図として表現してください。
        6. 最後は必ず「こちらの構成でよろしいでしょうか？（OKであればその旨お伝えください）」と質問してください。`;

    // チャット専用モデルリスト（重い場合に自動で軽量モデルへフォールバック）
    const models = (
      process.env.CHAT_MODEL_LIST ||
      process.env.CHAT_MODEL ||
      "gemini-2.5-flash-lite,gemini-2.5-flash"
    )
      .split(",")
      .map(m => m.trim())
      .filter(Boolean);
    let response;
    let lastError: any = null;

    // テキスト送信内容を構築。OK承認時は履歴も元のメッセージも含めず、
    // シンプルな「お礼メッセージだけを返す」指示を確実に優先させる。
    const contentsBase: any[] = [];
    if (!isApproved) {
      contentsBase.push(
        ...(history || []).map((m: any) => ({
          role: m.role === 'ai' ? 'model' : 'user',
          parts: [{ text: String(m.content) }],
        })),
        { role: 'user', parts: [{ text: String(message || '') }] }
      );
    } else {
      contentsBase.push({ role: 'user', parts: [{ text: 'OK' }] });
    }

    // 複数モデルで順に試す（速度優先のため各モデル1回のみ）
    for (const mdl of models) {
      try {
        response = await ai.models.generateContent({
          model: mdl,
          config: {
            systemInstruction,
          },
          contents: contentsBase,
        });
        lastError = null;
        break; // success with this model
      } catch (err: any) {
        lastError = err;
        console.warn(`chat generate model ${mdl} failed`, err?.message || err);
      }
      if (!lastError) break; // succeeded
      // else try next model
    }
    if (lastError || !response) throw lastError || new Error("Unable to generate response from any model");

    const text = (response as any).text;
    return NextResponse.json({ text });

  } catch (error: any) {
    console.error("--- Gemini API 実行エラー ---");
    return NextResponse.json({ text: "現在AIが混み合っています。少し時間をおいてもう一度お試しください。" }, { status: 200 });
  }
}
