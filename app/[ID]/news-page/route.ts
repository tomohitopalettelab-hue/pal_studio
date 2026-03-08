import { NextRequest, NextResponse } from 'next/server';
import { readCustomers } from '../../api/_lib/customer-store';
import { resolvePublishPath } from '../_lib/post-templates';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(
  request: NextRequest,
  props: { params: Promise<{ ID: string }> }
) {
  const params = await props.params;
  const id = String(params.ID || '');

  try {
    const customers = await readCustomers();
    const basePath = `/${id}`;
    const customer = customers.find((c: any) => {
      if (c.id === id || c.customer_id === id) return true;
      const publishPath = resolvePublishPath(c);
      return publishPath === basePath;
    });

    if (!customer) {
      return new NextResponse('Page not found', { status: 404 });
    }

    const publishBasePath = resolvePublishPath(customer) || basePath;
    const posts = Array.isArray(customer.posts) ? customer.posts : [];
    const now = new Date();
    const published = posts
      .filter((post: any) => String(post.status || '') === 'published')
      .filter((post: any) => String(post.postType || 'news') === 'news')
      .filter((post: any) => {
        if (!post.publishedAt) return true;
        const date = new Date(post.publishedAt);
        if (Number.isNaN(date.getTime())) return true;
        return date <= now;
      })
      .sort((a: any, b: any) => String(b.publishedAt || '').localeCompare(String(a.publishedAt || '')));

    const target = published[0];
    const location = target
      ? `${publishBasePath}/news/${encodeURIComponent(String(target.slug || '').trim())}`
      : `${publishBasePath}/news`;

    return NextResponse.redirect(new URL(location, request.url));
  } catch {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
