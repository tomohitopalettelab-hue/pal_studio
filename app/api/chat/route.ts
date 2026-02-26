import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, history } = body;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + process.env.OPENAI_API_KEY,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          { 
            role: "system", 
            content: "あなたは Awwwards 受賞歴のある、クライアントの個性を引き出す天才デザイナーです。\n\n" +
            "【運用ルール】\n" +
            "1. 必ず1問1答で10問ヒアリングを行い、クライアントの業種、強み、好みの雰囲気を深く理解してください。完了までコード出力は厳禁。\n" +
            "2. 10問完了後、ヒアリング内容に基づき「コンセプト・配色・フォント」をゼロから定義し、GlamappleスタイルのHTMLを出力してください。\n\n" +
            "【基本構成（Glamappleスタイル）】\n" +
            "- Hero: 巨大なタイポグラフィ（英語）と、あえて位置をずらしたメイン画像、繊細な日本語コピーをレイヤー状に重ねる。\n" +
            "- Section: 均一なグリッドを避け、画像とテキストを「ズレ」や「余白」を活かして配置。雑誌の誌面のようなレイアウト。\n" +
            "- Detail: 縦書きの小さな文字、細いライン、飾り文字など、高級感を高める細部装飾を散りばめる。\n\n" +
            "【デザインの自由領域】\n" +
            "- フォント・配色・質感（ぼかし、影、彩度）は、10問の回答から導き出されるブランドイメージに合わせてAIが最適に選定すること。\n\n" +
            "完了の挨拶の後、htmlコードブロックで1ファイルで完結するHTMLを出力してください。"
          },
          ...(history || [])
            .filter((m: any) => m.content && m.content.trim() !== "") 
            .map((m: any) => ({
              role: m.role === 'ai' ? 'assistant' : 'user',
              content: String(m.content)
            })),
          { role: "user", content: String(message) }
        ],
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error("OpenAI Error:", data);
      return NextResponse.json({ text: "APIエラーが発生しました。" }, { status: 500 });
    }

    return NextResponse.json({ text: data.choices[0].message.content });

  } catch (error: any) {
    console.error("Server Error:", error);
    return NextResponse.json({ text: "サーバーでエラーが発生しました。" }, { status: 500 });
  }
}