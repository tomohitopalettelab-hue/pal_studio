import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const isRetryableError = (error: unknown): boolean => {
  const status = (error as Record<string, unknown>)?.status as number | undefined;
  if (status === 429 || status === 500 || status === 503) return true;
  const message = String((error as Record<string, unknown>)?.message || '').toLowerCase();
  return message.includes('rate limit') || message.includes('overloaded') || message.includes('timeout');
};

const extractErrorMessage = (error: unknown): string => {
  const status = (error as Record<string, unknown>)?.status;
  const raw = String((error as Record<string, unknown>)?.message || '不明なエラー');
  const compact = raw.replace(/\s+/g, ' ').trim();
  return status ? `[${status}] ${compact}` : compact;
};

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY || process.env.OPENAI_KEY_API || '';

    if (!apiKey) {
      return NextResponse.json(
        { text: 'OpenAI APIキーが設定されていません。（OPENAI_API_KEY）' },
        { status: 500 },
      );
    }

    const body = await req.json();
    const { message, history, images, system } = body;

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

    // OpenAI メッセージ配列を構築
    const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      { role: 'system', content: systemPrompt },
    ];

    // 会話履歴を追加
    if (Array.isArray(history)) {
      for (const m of history) {
        const role = m.role === 'ai' ? 'assistant' : 'user';
        messages.push({ role, content: String(m.content) });
      }
    }

    // 現在のユーザーメッセージを構築（テキスト + 画像）
    if (message !== undefined && message !== null && String(message).trim() !== '') {
      if (images && Array.isArray(images) && images.length > 0) {
        // 画像付きメッセージ
        const contentParts: OpenAI.Chat.ChatCompletionContentPart[] = [
          { type: 'text', text: String(message) },
        ];
        for (const img of images as { data: string; mimeType: string }[]) {
          contentParts.push({
            type: 'image_url',
            image_url: { url: `data:${img.mimeType};base64,${img.data}` },
          });
        }
        messages.push({ role: 'user', content: contentParts });
      } else {
        messages.push({ role: 'user', content: String(message) });
      }
    } else if (messages.length === 1) {
      // system のみの場合は空メッセージを追加
      messages.push({ role: 'user', content: '' });
    }

    const model = process.env.OPENAI_MODEL || 'gpt-4o';
    const openai = new OpenAI({ apiKey });

    let responseText: string | null = null;
    let lastError: unknown = null;

    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const completion = await openai.chat.completions.create({
          model,
          messages,
        });
        responseText = completion.choices[0]?.message?.content || '';
        lastError = null;
        break;
      } catch (error) {
        lastError = error;
        if (!isRetryableError(error) || attempt === 3) break;
        await sleep(500 * attempt);
      }
    }

    if (responseText === null) {
      throw lastError || new Error('モデルからのレスポンスを取得できませんでした');
    }

    return NextResponse.json({ text: responseText });
  } catch (error) {
    console.error('--- OpenAI API (Generate) 実行エラー ---', error);
    return NextResponse.json(
      { text: `生成エラーが発生しました: ${extractErrorMessage(error)}` },
      { status: 500 },
    );
  }
}
