import { GoogleGenAI } from "@google/genai";
import { NextResponse } from 'next/server';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getErrorCode = (error: unknown): number | null => {
  const code = (error as any)?.status || (error as any)?.code || (error as any)?.error?.code;
  const normalized = Number(code);
  return Number.isFinite(normalized) ? normalized : null;
};

const isRetryableError = (error: unknown): boolean => {
  const code = getErrorCode(error);
  if (code === 429 || code === 500 || code === 503 || code === 504) return true;
  const message = String((error as any)?.message || '').toLowerCase();
  return (
    message.includes('high demand') ||
    message.includes('unavailable') ||
    message.includes('temporarily') ||
    message.includes('timeout') ||
    message.includes('rate limit')
  );
};

const extractErrorMessage = (error: unknown): string => {
  const code = getErrorCode(error);
  const raw = String((error as any)?.message || 'Unknown generation error');
  const compact = raw.replace(/\s+/g, ' ').trim();
  return code ? `[${code}] ${compact}` : compact;
};

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ text: "Gemini APIキーが設定されていません。" }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });
    const body = await req.json();
    // message: 通常のユーザー入力、system: システム指示（管理画面からの高度なプロンプトなど）
    const { message, history, images, system } = body;

    // ユーザーメッセージの構築
    const userParts: any[] = [];
    if (message !== undefined && message !== null && String(message).trim() !== "") {
      userParts.push({ text: String(message) });
    }

    // 画像がある場合に追加
    if (images && Array.isArray(images)) {
      images.forEach((img: { data: string, mimeType: string }) => {
        userParts.push({
          inlineData: {
            data: img.data,
            mimeType: img.mimeType
          }
        });
      });
    }

    // システムプロンプトの定義
    const defaultSystemPrompt = `
あなたはWebサイト制作のプロフェッショナルなヒアリング担当者です。
ユーザーからWebサイトの要望を聞き出し、最終的にHTMLのワイヤーフレームを作成することが目標です。

【ヒアリングの進め方】
以下の【必須ヒアリング項目】を埋めるために、不足している情報をユーザーに質問してください。
一度にすべて聞かず、会話の流れに合わせて1つずつ、あるいは関連するものをまとめて質問してください。

【必須ヒアリング項目】
1. **Top**: ヒーローエリア（キャッチコピー、メインビジュアルのイメージ）
2. **Section 1**: コンセプト / 想い
3. **Section 2**: 3つの強み / 特徴（3カラムレイアウト）
4. **Section 3**: サービス内容 / 料金（リスト・カード型）
5. **Section 4**: 制作実績 / ギャラリー（グリッドレイアウト）
6. **Section 5**: 会社概要 / アクセス（表形式。住所、電話番号、営業時間、定休日など詳細を聞いてください）
7. **Footer**: コピーライト等

【画像・ロゴについて】
ヒアリングの途中で必ず「使いたい画像はありますか？ロゴ画像があれば送ってください。」と確認し、ユーザーが画像をアップロードできることを伝えてください。

【ワイヤーフレーム（HTML）作成のルール】
- ヒアリングが完了した、またはユーザーから作成の指示があった場合、HTMLコードを出力してください。
- **構成順序**: 上記の【必須ヒアリング項目】の順番（Top -> Section 1 -> ... -> Section 5 -> Footer）を厳守してください。
- **未確認情報の扱い**: ヒアリングできていない情報（不明な情報）は、**絶対に**ダミーテキストで埋めないでください。そのセクションはHTMLに含めず住所や電話番号などの具体的な情報を絶対に捏造しないか、追加で詳細をヒアリングしてください。
- デザイン: Tailwind CSSを使用し、モダンで洗練されたものにしてください。
- 画像: \`https://placehold.co/600x400\` などのプレースホルダーを使用してください。

回答は親しみやすく、丁寧な口調でお願いします。
`;
    const systemPrompt = system ? String(system) : defaultSystemPrompt;

    // Build contents array and guarantee at least one entry.
    const contentsArray: any[] = [];
    contentsArray.push(
      // history goes first
      ...(history || []).map((m: any) => ({
        role: m.role === 'ai' ? 'model' : 'user',
        parts: [{ text: String(m.content) }],
      }))
    );
    if (userParts.length) {
      contentsArray.push({ role: 'user', parts: userParts });
    }
    // If nothing was added (system-only prompt), add an empty user message to satisfy API
    if (contentsArray.length === 0) {
      contentsArray.push({ role: 'user', parts: [{ text: '' }] });
    }

    const models = (
      process.env.GENERATE_MODEL_LIST ||
      process.env.GENERATE_MODEL ||
      'gemini-2.5-flash,gemini-2.5-flash-lite,gemini-3-flash-preview'
    )
      .split(',')
      .map((m) => m.trim())
      .filter(Boolean);

    let response: any = null;
    let lastError: unknown = null;

    for (const mdl of models) {
      const maxAttempts = 2;
      for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
          response = await ai.models.generateContent({
            model: mdl,
            config: {
              systemInstruction: systemPrompt,
            },
            contents: contentsArray,
          });
          lastError = null;
          break;
        } catch (error) {
          lastError = error;
          const retryable = isRetryableError(error);
          console.warn(`generate model ${mdl} attempt ${attempt} failed`, extractErrorMessage(error));
          if (!retryable || attempt === maxAttempts) {
            break;
          }
          await sleep(250 * attempt);
        }
      }
      if (response) break;
    }

    if (!response) {
      throw lastError || new Error('Unable to generate response from any model');
    }

    // レスポンスのテキストを取得（SDKのバージョンによってメソッドかプロパティか異なるため両対応）
    const text = typeof response.text === 'function' ? response.text : (response as any).text;

    return NextResponse.json({ text });

  } catch (error) {
    console.error("--- Gemini API (Generate) 実行エラー ---");
    console.error(error);
    return NextResponse.json({ text: `生成エラーが発生しました: ${extractErrorMessage(error)}` }, { status: 500 });
  }
}
