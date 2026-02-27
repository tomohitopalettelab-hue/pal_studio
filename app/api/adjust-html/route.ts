import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export async function POST(req: Request) {
  const { instruction, currentHtml } = await req.json();

  const { text } = await generateText({
    model: google('gemini-1.5-flash'),
    system: `あなたはWebデザイナーです。提供されたHTMLコードを、ユーザーの指示に従って正確に修正してください。
    
    【厳守事項】
    1. 返答は修正後のHTMLコードのみを出力してください。説明や「\`\`\`html」などの装飾は一切不要です。
    2. HTMLの基本構造（div#palette-template-softなどのIDや、data-id属性）は絶対に維持してください。
    3. Tailwind CSSのクラスを使用してスタイルを調整してください。`,
    prompt: `現在のHTML:\n${currentHtml}\n\n指示:\n${instruction}`,
  });

  return Response.json({ updatedHtml: text });
}