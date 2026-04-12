import { NextRequest, NextResponse } from 'next/server';
import { readCustomers } from '../../../api/_lib/customer-store';
import {
  PostItem,
  resolvePublishPath,
  ensureHtmlDocument,
  getCustomerPagesForNav,
  getCustomerTopHtml,
  extractHeaderHtml,
  getCustomerTemplateId,
  selectVariantHtml,
  replaceSectionContent,
  buildPostDetailTopHtml,
  buildPostDetailBodyHtml,
  buildPostArchiveListHtml,
  replaceHeaderHtml,
  syncNavWithSitePagesHtml,
  applyContactEmail,
  applyLogoToHeader,
  buildFooterHtml,
  applyFooterToHtml,
} from '../../_lib/post-templates';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(
  request: NextRequest,
  props: { params: Promise<{ ID: string; slug: string }> }
) {
  const params = await props.params;
  const id = String(params.ID || '');
  const slug = String(params.slug || '').trim().toLowerCase();

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
    const post = posts.find((item) => String(item.slug || '').trim().toLowerCase() === slug);
    if (!post || post.status !== 'published' || String(post.postType || 'blog') !== 'blog') {
      return new NextResponse('Page not found', { status: 404 });
    }
    if (post.publishedAt) {
      const date = new Date(post.publishedAt);
      if (!Number.isNaN(date.getTime()) && date > new Date()) {
        return new NextResponse('Page not found', { status: 404 });
      }
    }

    const templateId = getCustomerTemplateId(customer);
    const publishBasePath = resolvePublishPath(customer) || basePath;
    const baseHtml = selectVariantHtml('blog-page', templateId);
    const headerHtml = extractHeaderHtml(getCustomerTopHtml(customer));
    const withHeader = replaceHeaderHtml(baseHtml, headerHtml) || baseHtml;
    const topHtml = buildPostDetailTopHtml(post, customer?.defaultEyecatchUrl);
    const bodyHtml = buildPostDetailBodyHtml(post);
    const withTop = replaceSectionContent(withHeader, 'top', topHtml);
    const withBody = replaceSectionContent(withTop, 'concept', bodyHtml);
      const archivePosts = posts
        .filter((item) => item.id !== post.id && String(item.postType || 'blog') === 'blog')
        .filter((item) => String(item.status || '') === 'published');
      const archiveHtml = buildPostArchiveListHtml(archivePosts, `${publishBasePath}/blog`);
      const withArchive = archiveHtml
        ? replaceSectionContent(withBody, 'archive', archiveHtml)
        : withBody;
    const withNav = syncNavWithSitePagesHtml(
        withArchive || withHeader,
      getCustomerPagesForNav(customer),
      publishBasePath,
    );
    const withEmail = applyContactEmail(withNav || bodyHtml, customer?.contactEmail);
    const withLogo = applyLogoToHeader(withEmail, customer?.logoUrl);
    // Apply footer if footerData exists
    let withFooter = withLogo;
    if (customer?.footerData?.companyName) {
      const footerHtml = buildFooterHtml(customer.selectedTemplateId || '', customer.footerData);
      withFooter = applyFooterToHtml(withLogo, footerHtml);
    }
    const output = ensureHtmlDocument(withFooter, { faviconUrl: customer?.faviconUrl, paletteId: customer?.customer_id || id });

    return new NextResponse(output, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  } catch {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
