import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { cookies } from 'next/headers';
import { parseSessionValue, MAIN_SESSION_COOKIE_NAME, SESSION_COOKIE_NAME, isExpired } from '../../../../lib/auth-session';

export const runtime = 'nodejs';

const getSession = async (cookieHeader: string) => {
  const store = await cookies();
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
    const session = await getSession(req.headers.get('cookie') || '');
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
    const prompt = `以下の条件で日本語の${postType}本文HTMLを作成してください。\n\nタイトル: ${title}\n概要(抜粋): ${excerpt}\n文字数の目安: ${length} 文字\n\n要件:\n- h2を2〜3個含める\n- 1段落は短め（3〜4文）\n- 箇条書き（ul/li）を適度に使う\n- 企業サイト向けのトーン\n- 誇張や断定は避ける\n- HTMLのみで返す（p, h2, h3, ul, li, strong などのタグを使う）\n- Markdownや説明文は一切含めない`;

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      input: prompt,
    });

    const html = response.output_text || '';
    return NextResponse.json({ success: true, html });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || 'generate failed' }, { status: 500 });
  }
}
