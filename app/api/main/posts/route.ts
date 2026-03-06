import { NextResponse } from 'next/server';
import { readCustomers, upsertCustomer } from '../../_lib/customer-store';
import { parseSessionValue, MAIN_SESSION_COOKIE_NAME, SESSION_COOKIE_NAME, isExpired } from '../../../../lib/auth-session';

type PostStatus = 'draft' | 'published';

type PostItem = {
  id: string;
  title: string;
  slug: string;
  bodyHtml: string;
  bodyText?: string;
  excerpt: string;
  status: PostStatus;
  postType: 'blog' | 'news';
  publishedAt: string;
  imageUrl?: string;
  imageAlt?: string;
  createdAt: string;
  updatedAt: string;
};

const normalizePost = (input: Partial<PostItem>, fallbackId: string): PostItem => {
  const nowIso = new Date().toISOString();
  return {
    id: String(input.id || fallbackId),
    title: String(input.title || ''),
    slug: String(input.slug || '').trim().toLowerCase(),
    bodyHtml: String(input.bodyHtml || ''),
    bodyText: input.bodyText ? String(input.bodyText) : undefined,
    excerpt: String(input.excerpt || ''),
    status: input.status === 'published' ? 'published' : 'draft',
    postType: input.postType === 'blog' ? 'blog' : 'news',
    publishedAt: String(input.publishedAt || ''),
    imageUrl: input.imageUrl ? String(input.imageUrl) : undefined,
    imageAlt: input.imageAlt ? String(input.imageAlt) : undefined,
    createdAt: String(input.createdAt || nowIso),
    updatedAt: String(input.updatedAt || nowIso),
  };
};

const getSessionCustomer = async (req: Request) => {
  const cookieHeader = req.headers.get('cookie') || '';
  const parts = cookieHeader.split(';').map((part) => part.trim());
  const mainMatch = parts.find((part) => part.startsWith(`${MAIN_SESSION_COOKIE_NAME}=`));
  const legacyMatch = parts.find((part) => part.startsWith(`${SESSION_COOKIE_NAME}=`));
  const value = mainMatch
    ? mainMatch.split('=').slice(1).join('=')
    : legacyMatch
      ? legacyMatch.split('=').slice(1).join('=')
      : '';
  const session = parseSessionValue(value);

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

    const updatedCustomer = {
      ...customer,
      posts: normalized,
      updatedAt: new Date().toISOString(),
    };

    const saved = await upsertCustomer(updatedCustomer);
    const posts = Array.isArray(saved.posts) ? saved.posts : [];

    return NextResponse.json({ success: true, posts });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || 'failed to save posts' }, { status: 500 });
  }
}
