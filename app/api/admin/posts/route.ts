import { NextResponse } from 'next/server';
import { readCustomers, upsertCustomer } from '../../_lib/customer-store';

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

const normalizeSlug = (value: string): string => {
  const raw = String(value || '').trim().toLowerCase();
  if (!raw) return '';
  return raw
    .replace(/[^a-z0-9-_]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

const htmlToText = (value: string): string => {
  const raw = String(value || '')
    .replace(/<\s*br\s*\/?>/gi, '\n')
    .replace(/<\s*\/p\s*>/gi, '\n\n')
    .replace(/<[^>]+>/g, '');
  return raw.replace(/\n{3,}/g, '\n\n').trim();
};

const buildExcerpt = (html: string, maxLength = 160): string => {
  const text = htmlToText(html).replace(/\s+/g, ' ').trim();
  if (!text) return '';
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

const ensureUniqueSlug = (
  base: string,
  posts: PostItem[],
  postType: PostItem['postType'],
  currentId: string,
): string => {
  let slug = base || 'post';
  let suffix = 2;
  while (
    posts.some(
      (post) =>
        post.id !== currentId &&
        post.postType === postType &&
        String(post.slug || '').toLowerCase() === slug,
    )
  ) {
    slug = `${base || 'post'}-${suffix}`;
    suffix += 1;
  }
  return slug;
};

const isAuthorized = (req: Request): boolean => {
  const provided = String(req.headers.get('x-studio-admin-key') || '');
  const expected = process.env.PAL_STUDIO_ADMIN_API_KEY || process.env.STUDIO_ADMIN_API_KEY || '';
  return Boolean(provided && expected && provided === expected);
};

export async function POST(req: Request) {
  try {
    if (!isAuthorized(req)) {
      return NextResponse.json({ success: false, error: 'unauthorized' }, { status: 401 });
    }

    const body = await req.json().catch(() => ({}));
    const paletteId = String(body?.paletteId || '').trim();
    const input = body?.post || {};

    if (!paletteId) {
      return NextResponse.json({ success: false, error: 'paletteId が必要です。' }, { status: 400 });
    }

    const customers = await readCustomers();
    const customer = customers.find(
      (item: any) => String(item.id || '') === paletteId || String(item.customer_id || '') === paletteId,
    );

    if (!customer) {
      return NextResponse.json({ success: false, error: '顧客が見つかりません。' }, { status: 404 });
    }

    const posts: PostItem[] = Array.isArray(customer.posts) ? customer.posts : [];

    const nowIso = new Date().toISOString();
    const incomingId = String(input.id || '').trim() || `post-${Date.now()}`;
    const incomingType = input.postType === 'news' ? 'news' : 'blog';
    const baseSlug = normalizeSlug(input.slug || input.title || incomingId);
    const slug = ensureUniqueSlug(baseSlug, posts, incomingType, incomingId);

    const existing = posts.find((post) => post.id === incomingId);
    const status: PostStatus = input.status === 'draft' ? 'draft' : 'published';
    const bodyHtml = String(input.bodyHtml || '').trim();
    const excerpt = String(input.excerpt || '').trim() || buildExcerpt(bodyHtml);

    const nextPost: PostItem = {
      id: incomingId,
      title: String(input.title || existing?.title || ''),
      slug,
      slugAuto: typeof input.slugAuto === 'boolean' ? input.slugAuto : existing?.slugAuto,
      bodyHtml,
      bodyText: String(input.bodyText || existing?.bodyText || ''),
      excerpt,
      status,
      postType: incomingType,
      tags: Array.isArray(input.tags)
        ? input.tags.map((tag: string) => String(tag || '').trim()).filter(Boolean)
        : existing?.tags,
      publishedAt: String(input.publishedAt || existing?.publishedAt || (status === 'published' ? nowIso : '')),
      imageUrl: input.imageUrl ? String(input.imageUrl) : existing?.imageUrl,
      imageAlt: input.imageAlt ? String(input.imageAlt) : existing?.imageAlt,
      createdAt: String(existing?.createdAt || nowIso),
      updatedAt: nowIso,
    };

    const mergedPosts = existing
      ? posts.map((post) => (post.id === existing.id ? nextPost : post))
      : [nextPost, ...posts];

    const updatedCustomer = {
      ...customer,
      posts: mergedPosts,
      updatedAt: nowIso,
    };

    const saved = await upsertCustomer(updatedCustomer);

    return NextResponse.json({
      success: true,
      post: nextPost,
      posts: Array.isArray(saved.posts) ? saved.posts : mergedPosts,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || 'failed to save post' },
      { status: 500 },
    );
  }
}
