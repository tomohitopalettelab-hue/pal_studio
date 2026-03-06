import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { cookies } from 'next/headers';
import { parseSessionValue, MAIN_SESSION_COOKIE_NAME, SESSION_COOKIE_NAME, isExpired } from '../../../../lib/auth-session';

export const runtime = 'nodejs';

const getSession = (cookieHeader: string) => {
  const store = cookies();
  const mainCookie = store.get(MAIN_SESSION_COOKIE_NAME)?.value;
  const legacyCookie = store.get(SESSION_COOKIE_NAME)?.value;
  if (mainCookie) return parseSessionValue(mainCookie);
  if (legacyCookie) return parseSessionValue(legacyCookie);

  const parts = cookieHeader.split(';').map((part) => part.trim());
  const mainMatch = parts.find((part) => part.startsWith(`${MAIN_SESSION_COOKIE_NAME}=`));
  const legacyMatch = parts.find((part) => part.startsWith(`${SESSION_COOKIE_NAME}=`));
  const value = mainMatch
    ? mainMatch.split('=').slice(1).join('=')
    : legacyMatch
      ? legacyMatch.split('=').slice(1).join('=')
      : '';
  return parseSessionValue(value);
};

type GenerateBody = {
  title?: string;
  excerpt?: string;
  postType?: 'blog' | 'news';
  length?: number;
};

export async function POST(req: Request) {
  try {
    const session = getSession(req.headers.get('cookie') || '');
    if (!session || session.role !== 'customer' || isExpired(session)) {
      return NextResponse.json({ success: false, error: 'unauthorized' }, { status: 401 });
    }

    const body = (await req.json()) as GenerateBody;
    const title = String(body?.title || '').trim();
    const excerpt = String(body?.excerpt || '').trim();
    const postType = body?.postType === 'blog' ? 'ブログ' : '最新情報';
    const length = Math.max(200, Number(body?.length || 0));

    if (!title || !excerpt) {
      return NextResponse.json({ success: false, error: 'タイトルと概要（抜粋）が必要です。' }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY || '';
    if (!apiKey) {
      return NextResponse.json({ success: false, error: 'OPENAI_API_KEY が設定されていません。' }, { status: 500 });
    }

    const client = new OpenAI({ apiKey });
    const prompt = `あなたは日本語でニュース記事を書く編集者です。\n\n条件:\n- タイプ: ${postType}\n- タイトル: ${title}\n- 概要(抜粋): ${excerpt}\n- 文字数の目安: ${length} 文字\n- 見出しや箇条書きを適度に使う\n- 誇張や断定は避ける\n\n本文のみを書いてください。`;

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      input: prompt,
    });

    const text = response.output_text || '';
    return NextResponse.json({ success: true, text });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || 'generate failed' }, { status: 500 });
  }
}
