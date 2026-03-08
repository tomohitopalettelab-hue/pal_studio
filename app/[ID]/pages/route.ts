import { NextRequest, NextResponse } from 'next/server';
import { readCustomers } from '../../api/_lib/customer-store';
import {
  buildPostListHtml,
  getCustomerPagesForNav,
  replaceSectionContent,
  syncNavWithSitePagesHtml,
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

const hideSection = (source: string, sectionId: string) => {
  const re = new RegExp(`(<section[^>]*id=["']${sectionId}["'])`, 'i');
  if (!re.test(source)) return source;
  return source.replace(re, `$1 hidden style="display: none !important;"`);
};

const getPublishedPosts = (customer: any, postType: 'news' | 'blog') => {
  const posts = Array.isArray(customer?.posts) ? customer.posts : [];
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
    const newsHtml = buildPostListHtml(newsPosts, `${baseForPosts}/news`, 'ニュース');
    const blogHtml = buildPostListHtml(blogPosts, `${baseForPosts}/blog`, 'ブログ');
    if (newsHtml) {
      html = replaceSectionContent(html, 'news', newsHtml);
    } else {
      html = hideSection(html, 'news');
    }
    if (blogHtml) {
      html = replaceSectionContent(html, 'blog', blogHtml);
    } else {
      html = hideSection(html, 'blog');
    }
    html = syncNavWithSitePagesHtml(html, getCustomerPagesForNav(customer), baseForPosts);

    // 出力するHTMLに <html> タグが含まれていない場合、自前でラップする。
    // 同時に charset と Tailwind CDN を挿入し、文字化けとスタイル未適用を防止する。
    if (!/<html[\s>]/i.test(html)) {
            html = `<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8" />` +
              `<meta name="viewport" content="width=device-width, initial-scale=1" />` +
              `<script src="https://cdn.tailwindcss.com"></script>${linkSyncScript}</head><body>${html}</body></html>`;
    } else {
      // charset が指定されていない場合は挿入
      if (!/<meta[^>]+charset=/i.test(html)) {
        html = html.replace(/<head([^>]*)>/i, `<head$1><meta charset="utf-8" />`);
      }
      // viewport が指定されていない場合は挿入
      if (!/<meta[^>]+name=["']viewport["']/i.test(html)) {
        html = html.replace(/<head([^>]*)>/i, `<head$1><meta name="viewport" content="width=device-width, initial-scale=1" />`);
      }
      // Tailwind CDN が含まれていなければ追加
      if (!/cdn\.tailwindcss\.com/i.test(html)) {
        html = html.replace(/<head([^>]*)>/i, `<head$1><script src="https://cdn.tailwindcss.com"></script>`);
      }
      if (!/palette-link-sync/i.test(html)) {
        html = html.replace(/<head([^>]*)>/i, `<head$1>${linkSyncScript}`);
      }
    }

    return new NextResponse(html, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
