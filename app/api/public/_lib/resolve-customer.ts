import { readCustomers } from '../../_lib/customer-store';

export type PublicPostType = 'news' | 'blog';
export type PublicPostStatus = 'draft' | 'published';

export type PublicPost = {
  id: string;
  title: string;
  slug: string;
  bodyHtml: string;
  excerpt: string;
  status: PublicPostStatus;
  postType: PublicPostType;
  tags?: string[];
  publishedAt: string;
  imageUrl?: string;
  imageAlt?: string;
  createdAt: string;
  updatedAt: string;
};

export type ResolvedCustomer = {
  id: string;
  customerId: string;
  name: string;
  publicSlug: string;
  publicOrigins: string[];
  posts: PublicPost[];
};

const normalizeSlugKey = (value: unknown): string =>
  String(value || '').trim().toLowerCase();

export const resolveCustomerByPublicSlug = async (
  slug: string,
): Promise<ResolvedCustomer | null> => {
  const target = normalizeSlugKey(slug);
  if (!target) return null;

  const customers = await readCustomers();
  const match = customers.find((customer: any) => {
    const publicSlug = normalizeSlugKey(customer?.publicSlug);
    if (publicSlug && publicSlug === target) return true;
    const paletteId = normalizeSlugKey(customer?.customer_id);
    const id = normalizeSlugKey(customer?.id);
    return paletteId === target || id === target;
  });

  if (!match) return null;

  const publicOrigins = Array.isArray(match.publicOrigins)
    ? match.publicOrigins.map((value: unknown) => String(value || '').trim()).filter(Boolean)
    : [];

  const posts = Array.isArray(match.posts) ? (match.posts as PublicPost[]) : [];

  return {
    id: String(match.id || ''),
    customerId: String(match.customer_id || match.id || ''),
    name: String(match.name || ''),
    publicSlug: String(match.publicSlug || match.customer_id || match.id || ''),
    publicOrigins,
    posts,
  };
};

const wildcardToRegex = (pattern: string): RegExp => {
  const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*');
  return new RegExp(`^${escaped}$`, 'i');
};

export const matchOrigin = (origin: string, allowedOrigins: string[]): string | null => {
  const candidate = String(origin || '').trim();
  if (!candidate) return null;
  for (const allowed of allowedOrigins) {
    if (allowed === '*') return candidate;
    if (allowed === candidate) return candidate;
    if (allowed.includes('*') && wildcardToRegex(allowed).test(candidate)) return candidate;
  }
  return null;
};

export const buildCorsHeaders = (
  request: Request,
  allowedOrigins: string[],
): Record<string, string> => {
  const origin = request.headers.get('origin') || '';
  const allowed = matchOrigin(origin, allowedOrigins);
  const headers: Record<string, string> = {
    'Vary': 'Origin',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
  if (allowed) {
    headers['Access-Control-Allow-Origin'] = allowed;
  }
  return headers;
};

export const buildCacheHeaders = (): Record<string, string> => ({
  'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
});

export const isPublishedAndDue = (post: PublicPost): boolean => {
  if (post.status !== 'published') return false;
  if (!post.publishedAt) return true;
  const t = Date.parse(post.publishedAt);
  if (Number.isNaN(t)) return true;
  return t <= Date.now();
};

export const getPostCategory = (post: PublicPost): string => {
  const tag = Array.isArray(post.tags) && post.tags.length > 0 ? String(post.tags[0] || '').trim() : '';
  return tag;
};

export const toListItem = (post: PublicPost) => ({
  slug: post.slug,
  title: post.title,
  excerpt: post.excerpt,
  category: getPostCategory(post),
  imageUrl: post.imageUrl || '',
  imageAlt: post.imageAlt || '',
  tags: Array.isArray(post.tags) ? post.tags : [],
  postType: post.postType,
  publishedAt: post.publishedAt,
});

export const toDetailItem = (post: PublicPost, relatedSlugs: string[]) => ({
  slug: post.slug,
  title: post.title,
  bodyHtml: post.bodyHtml,
  excerpt: post.excerpt,
  category: getPostCategory(post),
  imageUrl: post.imageUrl || '',
  imageAlt: post.imageAlt || '',
  tags: Array.isArray(post.tags) ? post.tags : [],
  postType: post.postType,
  publishedAt: post.publishedAt,
  relatedSlugs,
});
