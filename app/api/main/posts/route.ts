import { NextResponse } from 'next/server';
import { readCustomers, upsertCustomer } from '../../_lib/customer-store';
import { cookies } from 'next/headers';
import { parseSessionValue, MAIN_SESSION_COOKIE_NAME, SESSION_COOKIE_NAME, isExpired } from '../../../../lib/auth-session';

type PostStatus = 'draft' | 'published';

type PostItem = {
  id: string;
  title: string;
  slug: string;
  slugAuto?: boolean;
  bodyHtml: string;
  bodyText?: string;
  excerpt: string;
  status: PostStatus;
  postType: 'blog' | 'news';
  tags?: string[];
  publishedAt: string;
  imageUrl?: string;
  imageAlt?: string;
  createdAt: string;
  updatedAt: string;
};

const normalizePost = (input: Partial<PostItem>, fallbackId: string): PostItem => {
  const nowIso = new Date().toISOString();
  const tags = Array.isArray(input.tags)
    ? input.tags.map((tag) => String(tag || '').trim()).filter(Boolean)
    : undefined;
  return {
    id: String(input.id || fallbackId),
    title: String(input.title || ''),
    slug: String(input.slug || '').trim().toLowerCase(),
    slugAuto: typeof input.slugAuto === 'boolean' ? input.slugAuto : undefined,
    bodyHtml: String(input.bodyHtml || ''),
    bodyText: input.bodyText ? String(input.bodyText) : undefined,
    excerpt: String(input.excerpt || ''),
    status: input.status === 'published' ? 'published' : 'draft',
    postType: input.postType === 'blog' ? 'blog' : 'news',
    tags,
    publishedAt: String(input.publishedAt || ''),
    imageUrl: input.imageUrl ? String(input.imageUrl) : undefined,
    imageAlt: input.imageAlt ? String(input.imageAlt) : undefined,
    createdAt: String(input.createdAt || nowIso),
    updatedAt: String(input.updatedAt || nowIso),
  };
};

const getSessionCustomer = async (req: Request) => {
  const cookieHeader = req.headers.get('cookie') || '';
  const store = await cookies();
  const mainCookie = store.get(MAIN_SESSION_COOKIE_NAME)?.value;
  const legacyCookie = store.get(SESSION_COOKIE_NAME)?.value;
  const fallbackValue = (() => {
    const parts = cookieHeader.split(';').map((part) => part.trim());
    const mainMatch = parts.find((part) => part.startsWith(`${MAIN_SESSION_COOKIE_NAME}=`));
    const legacyMatch = parts.find((part) => part.startsWith(`${SESSION_COOKIE_NAME}=`));
    return mainMatch
      ? mainMatch.split('=').slice(1).join('=')
      : legacyMatch
        ? legacyMatch.split('=').slice(1).join('=')
        : '';
  })();
  const session = parseSessionValue(mainCookie || legacyCookie || fallbackValue);

  if (!session || session.role !== 'customer' || isExpired(session)) {
    return null;
  }

  const customers = await readCustomers();
  return customers.find(
    (item: any) => item.id === session.customerId || item.customer_id === session.customerId,
  );
};

export async function GET(req: Request) {
  try {
    const customer = await getSessionCustomer(req);
    if (!customer) {
      return NextResponse.json({ success: false, error: 'unauthorized' }, { status: 401 });
    }

    const posts = Array.isArray(customer.posts) ? customer.posts : [];
    return NextResponse.json({ success: true, posts });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || 'failed to load posts' }, { status: 500 });
  }
}

/**
 * 公開状態や公開中の投稿の中身が変化した場合のみ、顧客ごとに登録された
 * Vercel Deploy Hook を呼び出して公開サイトを再ビルドする。
 *
 * NOTE: Vercel serverless では レスポンス送信後に fire-and-forget Promise が
 * 終了前に kill されるため、この関数は await で同期待ちする必要がある。
 */
const POST_COMPARE_KEYS: (keyof PostItem)[] = [
  'title', 'slug', 'bodyHtml', 'bodyText', 'excerpt',
  'status', 'postType', 'tags', 'publishedAt', 'imageUrl', 'imageAlt',
];

const postContentChanged = (prev: PostItem, next: PostItem): boolean => {
  for (const key of POST_COMPARE_KEYS) {
    if (JSON.stringify(prev[key] ?? null) !== JSON.stringify(next[key] ?? null)) return true;
  }
  return false;
};

const triggerDeployHookIfNeeded = async (
  previousPosts: PostItem[],
  nextPosts: PostItem[],
  deployHookUrl: string | undefined,
): Promise<{ triggered: boolean; status?: number; error?: string }> => {
  if (!deployHookUrl) return { triggered: false };
  const prevMap = new Map(previousPosts.map((p) => [p.id, p]));
  const changed = nextPosts.some((p) => {
    const prev = prevMap.get(p.id);
    if (!prev) return p.status === 'published';
    // どちらかが published で、内容に差分があれば再ビルド
    if (prev.status === 'published' || p.status === 'published') {
      return postContentChanged(prev, p);
    }
    return false;
  });
  const removed = previousPosts.some((p) => p.status === 'published' && !nextPosts.find((n) => n.id === p.id));
  if (!changed && !removed) return { triggered: false };

  try {
    const res = await fetch(deployHookUrl, { method: 'POST' });
    if (!res.ok) {
      console.error(`[deploy-hook] non-OK response: ${res.status}`);
      return { triggered: true, status: res.status, error: `HTTP ${res.status}` };
    }
    console.log('[deploy-hook] triggered successfully');
    return { triggered: true, status: res.status };
  } catch (err: any) {
    console.error('[deploy-hook] failed:', err?.message || err);
    return { triggered: true, error: err?.message || String(err) };
  }
};

export async function POST(req: Request) {
  try {
    const customer = await getSessionCustomer(req);
    if (!customer) {
      return NextResponse.json({ success: false, error: 'unauthorized' }, { status: 401 });
    }

    const body = await req.json().catch(() => ({}));
    const inputPosts = Array.isArray(body?.posts) ? body.posts : null;
    if (!inputPosts) {
      return NextResponse.json({ success: false, error: 'posts must be an array' }, { status: 400 });
    }

    const normalized = inputPosts.map((post: Partial<PostItem>, index: number) =>
      normalizePost(post, `post-${Date.now()}-${index}`),
    );

    const previousPosts: PostItem[] = Array.isArray((customer as any).posts) ? (customer as any).posts : [];
    const updatedCustomer = {
      ...customer,
      posts: normalized,
      updatedAt: new Date().toISOString(),
    };

    const saved = await upsertCustomer(updatedCustomer);
    const posts = Array.isArray(saved.posts) ? saved.posts : [];

    const hookResult = await triggerDeployHookIfNeeded(previousPosts, normalized, (saved as any).deployHookUrl);

    return NextResponse.json({ success: true, posts, deployHook: hookResult });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || 'failed to save posts' }, { status: 500 });
  }
}
