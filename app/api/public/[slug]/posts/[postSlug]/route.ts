import { NextResponse } from 'next/server';
import {
  buildCacheHeaders,
  buildCorsHeaders,
  getPostCategory,
  isPublishedAndDue,
  resolveCustomerByPublicSlug,
  toDetailItem,
} from '../../../_lib/resolve-customer';

export const runtime = 'edge';
export const revalidate = 60;

export async function OPTIONS(
  req: Request,
  { params }: { params: Promise<{ slug: string; postSlug: string }> },
) {
  const { slug } = await params;
  const customer = await resolveCustomerByPublicSlug(slug);
  const cors = buildCorsHeaders(req, customer?.publicOrigins ?? []);
  return new Response(null, { status: 204, headers: cors });
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string; postSlug: string }> },
) {
  const { slug, postSlug } = await params;
  const customer = await resolveCustomerByPublicSlug(slug);

  if (!customer) {
    return NextResponse.json(
      { error: 'customer not found' },
      { status: 404, headers: buildCorsHeaders(req, []) },
    );
  }

  const cors = buildCorsHeaders(req, customer.publicOrigins);
  const target = String(postSlug || '').trim().toLowerCase();

  const post = customer.posts.find(
    (p) => String(p.slug || '').trim().toLowerCase() === target,
  );

  if (!post || !isPublishedAndDue(post)) {
    return NextResponse.json(
      { error: 'post not found' },
      { status: 404, headers: cors },
    );
  }

  const targetCategory = getPostCategory(post).toLowerCase();
  const relatedSlugs = customer.posts
    .filter(isPublishedAndDue)
    .filter((p) => p.slug !== post.slug && p.postType === post.postType)
    .sort((a, b) => {
      const aMatch = targetCategory && getPostCategory(a).toLowerCase() === targetCategory ? 1 : 0;
      const bMatch = targetCategory && getPostCategory(b).toLowerCase() === targetCategory ? 1 : 0;
      if (aMatch !== bMatch) return bMatch - aMatch;
      const ta = Date.parse(a.publishedAt) || 0;
      const tb = Date.parse(b.publishedAt) || 0;
      return tb - ta;
    })
    .slice(0, 3)
    .map((p) => p.slug);

  return NextResponse.json(toDetailItem(post, relatedSlugs), {
    headers: { ...cors, ...buildCacheHeaders() },
  });
}
