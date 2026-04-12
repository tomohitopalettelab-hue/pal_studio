import { NextRequest, NextResponse } from 'next/server';
import { readCustomers } from '../../api/_lib/customer-store';
import {
  buildTopBlogSectionHtml,
  buildTopNewsSectionHtml,
  getCustomerPagesForNav,
  replaceSectionContent,
  syncNavWithSitePagesHtml,
  ensureHtmlDocument,
  applyContactEmail,
  applyLogoToHeader,
  buildFooterHtml,
  applyFooterToHtml,
} from '../_lib/post-templates';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const resolvePublishPath = (customer: any) => {
  const raw = String(customer?.publishPathTemplate || '').trim();
  if (!raw) return '';

  const identifier = String(customer?.customer_id || customer?.id || '').trim();
  if (!identifier) return '';

  const replaced = raw
    .replaceAll('{id}', encodeURIComponent(identifier))
    .replaceAll('{customer_id}', encodeURIComponent(identifier));

  const fromUrl = /^https?:\/\//i.test(replaced)
    ? (() => {
        try {
          return new URL(replaced).pathname;
        } catch {
          return replaced;
        }
      })()
    : replaced;

  return fromUrl.startsWith('/') ? fromUrl : `/${fromUrl}`;
};

const normalizePageSlug = (raw: string) => String(raw || '').trim().toLowerCase().replace(/^\/+/, '');

const getCustomerPageHtml = (customer: any, slug: string) => {
  const target = normalizePageSlug(slug || 'top') || 'top';
  const pages = Array.isArray(customer?.pages) ? customer.pages : [];
  const found = pages.find((page: any) => normalizePageSlug(page?.slug || '') === target);
  if (found && found.htmlCode) return String(found.htmlCode);
  if (target === 'top' && customer?.htmlCode) return String(customer.htmlCode);
  return '';
};

const replaceSectionBlock = (source: string, sectionId: string, nextSection: string) => {
  if (!source || !nextSection) return source;
  const re = new RegExp(`(<section[^>]*id=["']${sectionId}["'][^>]*>)[\s\S]*?(</section>)`, 'i');
  if (!re.test(source)) return source;
  return source.replace(re, nextSection);
};


const insertSectionBeforeMainClose = (source: string, sectionHtml: string) => {
  if (!sectionHtml) return source;
  if (/<\/main>/i.test(source)) {
    return source.replace(/<\/main>/i, `${sectionHtml}</main>`);
  }
  return `${source}${sectionHtml}`;
};

const insertSectionAfterId = (source: string, afterId: string, sectionHtml: string) => {
  if (!sectionHtml) return source;
  const re = new RegExp(`(<section[^>]*id=["']${afterId}["'][^>]*>[\s\S]*?</section>)`, 'i');
  if (re.test(source)) {
    return source.replace(re, `$1${sectionHtml}`);
  }
  return insertSectionBeforeMainClose(source, sectionHtml);
};

const hasSectionId = (source: string, sectionId: string) => {
  const re = new RegExp(`<section[^>]*id=["']${sectionId}["']`, 'i');
  return re.test(source);
};

const removeAutoPlaceholderSections = (source: string) => {
  const patterns = [
    '最新情報は公開投稿から自動生成されます。',
    'ブログ記事は公開投稿から自動生成されます。'
  ];
  let output = source;
  patterns.forEach((text) => {
    const re = new RegExp(`<section[^>]*>[\\s\\S]*?${text}[\\s\\S]*?</section>`, 'i');
    output = output.replace(re, '');
  });
  return output;
};

const hideSection = (source: string, sectionId: string) => {
  const re = new RegExp(`(<section[^>]*id=["']${sectionId}["'])`, 'i');
  if (!re.test(source)) return source;
  return source.replace(re, `$1 hidden style="display: none !important;"`);
};

const getPublishedPosts = (customer: any, postType: 'news' | 'blog') => {
  const posts = Array.isArray(customer?.posts)
    ? customer.posts
    : Array.isArray(customer?.payload?.posts)
      ? customer.payload.posts
      : [];
  const now = new Date();
  return posts
    .filter((post: any) => String(post.status || '') === 'published')
    .filter((post: any) => String(post.postType || postType) === postType)
    .filter((post: any) => {
      if (!post.publishedAt) return true;
      const date = new Date(post.publishedAt);
      if (Number.isNaN(date.getTime())) return true;
      return date <= now;
    })
    .sort((a: any, b: any) => String(b.publishedAt || '').localeCompare(String(a.publishedAt || '')));
};

export async function GET(
  request: NextRequest,
  props: { params: Promise<{ ID: string }> }
) {
  const params = await props.params;
  const { ID: id } = params; // rename to keep existing logic

  try {
    const customers = await readCustomers();
    const requestPath = `/${id}/pages`;

    // 顧客データは内部ID/外部IDに加え、送信先パスのカスタムスラッグでも解決する。
    const customer = customers.find((c: any) => {
      if (c.id === id || c.customer_id === id) return true;
      const publishPath = resolvePublishPath(c);
      return publishPath === requestPath || `${publishPath}/pages` === requestPath;
    });

    const topHtml = customer ? getCustomerPageHtml(customer, 'top') : '';
    if (!customer || !topHtml) {
      return new NextResponse('Page not found', { status: 404 });
    }

    const basePath = resolvePublishPath(customer) || requestPath;
    const baseForPosts = basePath.endsWith('/pages') ? basePath.replace(/\/pages$/, '') : basePath;
    const linkSyncScript = `<script id="palette-link-sync">(function(){var basePath=${JSON.stringify(basePath)};function normalize(s){return String(s||'').replace(/^\\/+/, '')}function build(slug){slug=normalize(slug);if(!slug||slug==='top')return basePath||'/';var baseForSubpages=basePath.endsWith('/pages')?basePath.replace(/\\/pages$/,''):basePath;if(!baseForSubpages)return '/'+slug;return baseForSubpages.replace(/\\/$/,'')+'/'+slug}var links=document.querySelectorAll('a[data-page-slug]');links.forEach(function(link){var slug=link.getAttribute('data-page-slug');if(!slug)return;var hash=link.getAttribute('data-page-hash')||'';hash=hash.replace(/^#/, '');var href=build(slug);link.setAttribute('href', hash?href+'#'+hash:href)});})();</script>`;

    let html = String(topHtml);
    const newsPosts = getPublishedPosts(customer, 'news');
    const blogPosts = getPublishedPosts(customer, 'blog');
    const newsSection = buildTopNewsSectionHtml(
      newsPosts,
      baseForPosts,
      customer?.defaultEyecatchUrl
    );
    const blogSection = buildTopBlogSectionHtml(
      blogPosts,
      baseForPosts,
      customer?.defaultEyecatchUrl
    );
    if (newsSection) {
      const afterNews = hasSectionId(html, 'news')
        ? replaceSectionBlock(html, 'news', newsSection)
        : insertSectionAfterId(html, 'top', newsSection);
      html = afterNews;
    } else {
      html = hideSection(html, 'news');
    }
    if (blogSection) {
      const afterBlog = hasSectionId(html, 'blog')
        ? replaceSectionBlock(html, 'blog', blogSection)
        : insertSectionAfterId(html, 'news', blogSection);
      html = afterBlog;
    } else {
      html = hideSection(html, 'blog');
    }
    html = removeAutoPlaceholderSections(html);
    html = syncNavWithSitePagesHtml(html, getCustomerPagesForNav(customer), baseForPosts);
    html = applyContactEmail(html, customer?.contactEmail);
    html = applyLogoToHeader(html, customer?.logoUrl);
    // Apply footer if footerData exists
    if (customer?.footerData?.companyName) {
      const footerHtml = buildFooterHtml(customer.selectedTemplateId || '', customer.footerData);
      html = applyFooterToHtml(html, footerHtml);
    }
    const output = ensureHtmlDocument(html, {
      faviconUrl: customer?.faviconUrl,
      headHtml: linkSyncScript,
      paletteId: customer?.customer_id || id,
    });

    return new NextResponse(output, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
