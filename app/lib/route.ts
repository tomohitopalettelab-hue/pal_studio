import { GoogleGenAI } from "@google/genai";
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ text: "Gemini APIキーが設定されていません。" }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });
    const body = await req.json();
    const { message, history } = body;

    // 生成用のシステムプロンプト
    // フロントエンドから送られてくる message には systemContext (テンプレート情報など) が含まれている前提
    // 必要に応じてここで追加の指示を挟むことも可能

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        // システム指示として、historyの前に配置する
        ...(history || []).map((m: any) => ({
          role: m.role === 'ai' ? 'model' : 'user',
          parts: [{ text: String(m.content) }],
        })),
        { role: 'user', parts: [{ text: String(message) }] },
      ],
    });

    // レスポンスのテキストを取得（SDKのバージョンによってメソッドかプロパティか異なるため両対応）
    const text = typeof response.text === 'function' ? response.text() : (response as any).text;

    return NextResponse.json({ text });

  } catch (error: any) {
    console.error("--- Gemini API (Generate) 実行エラー ---");
    console.error(error);
    return NextResponse.json({ text: `生成エラーが発生しました: ${error.message}` }, { status: 500 });
import { GoogleGenAI } from "@google/genai";
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ text: "Gemini APIキーが設定されていません。" }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });
    const body = await req.json();
    const { message, history } = body;

    // 生成用のシステムプロンプト
    // フロントエンドから送られてくる message には systemContext (テンプレート情報など) が含まれている前提
    // 必要に応じてここで追加の指示を挟むことも可能

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        // システム指示として、historyの前に配置する
        ...(history || []).map((m: any) => ({
          role: m.role === 'ai' ? 'model' : 'user',
          parts: [{ text: String(m.content) }],
        })),
        { role: 'user', parts: [{ text: String(message) }] },
      ],
    });

    // レスポンスのテキストを取得（SDKのバージョンによってメソッドかプロパティか異なるため両対応）
    const text = typeof response.text === 'function' ? response.text() : (response as any).text;

    return NextResponse.json({ text });

  } catch (error: any) {
    console.error("--- Gemini API (Generate) 実行エラー ---");
    console.error(error);
    return NextResponse.json({ text: `生成エラーが発生しました: ${error.message}` }, { status: 500 });
  }
}
  }
}