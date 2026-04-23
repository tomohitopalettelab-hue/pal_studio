import { NextResponse } from 'next/server';
import {
  buildCacheHeaders,
  buildCorsHeaders,
  getPostCategory,
  isPublishedAndDue,
  resolveCustomerByPublicSlug,
  toListItem,
  type PublicPostType,
} from '../../_lib/resolve-customer';

export const runtime = 'edge';
export const revalidate = 60;

const parseType = (value: string | null): PublicPostType | null => {
  const v = String(value || '').trim().toLowerCase();
  if (v === 'news' || v === 'blog') return v;
  return null;
};

const parseInteger = (value: string | null, fallback: number, min: number, max: number): number => {
  const n = Number.parseInt(String(value || ''), 10);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(Math.max(n, min), max);
};

export async function OPTIONS(
  req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const customer = await resolveCustomerByPublicSlug(slug);
  const cors = buildCorsHeaders(req, customer?.publicOrigins ?? []);
  return new Response(null, { status: 204, headers: cors });
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const customer = await resolveCustomerByPublicSlug(slug);

  if (!customer) {
    return NextResponse.json(
      { error: 'customer not found' },
      { status: 404, headers: buildCorsHeaders(req, []) },
    );
  }

  const cors = buildCorsHeaders(req, customer.publicOrigins);

  const url = new URL(req.url);
  const typeFilter = parseType(url.searchParams.get('type'));
  const categoryFilter = String(url.searchParams.get('category') || '').trim();
  const limit = parseInteger(url.searchParams.get('limit'), 20, 1, 100);
  const offset = parseInteger(url.searchParams.get('offset'), 0, 0, 10000);

  const allPublished = customer.posts
    .filter(isPublishedAndDue)
    .filter((post) => (typeFilter ? post.postType === typeFilter : true))
    .filter((post) => {
      if (!categoryFilter) return true;
      return getPostCategory(post).toLowerCase() === categoryFilter.toLowerCase();
    })
    .sort((a, b) => {
      const ta = Date.parse(a.publishedAt) || 0;
      const tb = Date.parse(b.publishedAt) || 0;
      return tb - ta;
    });

  const total = allPublished.length;
  const sliced = allPublished.slice(offset, offset + limit).map(toListItem);

  return NextResponse.json(
    { posts: sliced, total, limit, offset },
    { headers: { ...cors, ...buildCacheHeaders() } },
  );
}
