import { NextRequest, NextResponse } from 'next/server';
import { readCustomers } from '../../api/_lib/customer-store';
import {
  PostItem,
  resolvePublishPath,
  ensureHtmlDocument,
  getCustomerPagesForNav,
  getCustomerTemplateId,
  selectVariantHtml,
  replaceSectionContent,
  buildPostListHtml,
  syncNavWithSitePagesHtml,
  applyContactEmail,
  applyLogoToHeader,
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

    const posts = (Array.isArray(customer.posts)
      ? customer.posts
      : Array.isArray(customer?.payload?.posts)
        ? customer.payload.posts
        : []) as PostItem[];
    const now = new Date();
    const tagFilter = String(request.nextUrl?.searchParams.get('tag') || '').trim();
    const published = posts
      .filter((post) => String(post.status || '') === 'published')
      .filter((post) => String(post.postType || 'blog') === 'blog')
      .filter((post) => {
        if (!tagFilter) return true;
        const tags = Array.isArray(post.tags) ? post.tags.map((tag) => String(tag || '').trim()) : [];
        return tags.includes(tagFilter);
      })
      .filter((post) => {
        if (!post.publishedAt) return true;
        const date = new Date(post.publishedAt);
        if (Number.isNaN(date.getTime())) return true;
        return date <= now;
      })
      .sort((a, b) => String(b.publishedAt || '').localeCompare(String(a.publishedAt || '')));

    const templateId = getCustomerTemplateId(customer);
    const publishBasePath = resolvePublishPath(customer) || basePath;
    const baseHtml = selectVariantHtml('blog', templateId);
    const listHtml = buildPostListHtml(
      published,
      `${publishBasePath}/blog`,
      'ブログ',
      customer?.defaultEyecatchUrl,
      templateId,
    );
    const injected = listHtml ? replaceSectionContent(baseHtml, 'top', listHtml) : baseHtml;
    const withNav = syncNavWithSitePagesHtml(
      injected,
      getCustomerPagesForNav(customer),
      publishBasePath,
    );
    const withEmail = applyContactEmail(withNav || listHtml || injected, customer?.contactEmail);
    const withLogo = applyLogoToHeader(withEmail, customer?.logoUrl);
    const output = ensureHtmlDocument(withLogo, { faviconUrl: customer?.faviconUrl, paletteId: customer?.customer_id || id });

    return new NextResponse(output, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  } catch {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
