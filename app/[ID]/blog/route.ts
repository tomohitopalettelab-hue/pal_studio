import { NextRequest, NextResponse } from 'next/server';
import { readCustomers } from '../../api/_lib/customer-store';
import {
  PostItem,
  resolvePublishPath,
  ensureHtmlDocument,
  getCustomerTemplateId,
  selectVariantHtml,
  replaceSectionContent,
  buildPostListHtml,
} from '../_lib/post-templates';

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

    const posts = (Array.isArray(customer.posts) ? customer.posts : []) as PostItem[];
    const now = new Date();
    const published = posts
      .filter((post) => String(post.status || '') === 'published')
      .filter((post) => String(post.postType || 'blog') === 'blog')
      .filter((post) => {
        if (!post.publishedAt) return true;
        const date = new Date(post.publishedAt);
        if (Number.isNaN(date.getTime())) return true;
        return date <= now;
      })
      .sort((a, b) => String(b.publishedAt || '').localeCompare(String(a.publishedAt || '')));

    const templateId = getCustomerTemplateId(customer);
    const baseHtml = selectVariantHtml('blog', templateId);
    const listHtml = buildPostListHtml(published, `/${encodeURIComponent(id)}/blog`, 'ブログ');
    const injected = replaceSectionContent(baseHtml, 'top', listHtml);
    const output = ensureHtmlDocument(injected || listHtml);

    return new NextResponse(output, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  } catch {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
