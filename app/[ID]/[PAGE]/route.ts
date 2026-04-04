import { NextRequest, NextResponse } from 'next/server';
import { readCustomers } from '../../api/_lib/customer-store';
import { ensureHtmlDocument, applyContactEmail, applyLogoToHeader, syncNavFromTopPage, getCustomerTopHtml, applyCustomerName } from '../_lib/post-templates';

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

export async function GET(
  request: NextRequest,
  props: { params: Promise<{ ID: string; PAGE: string }> }
) {
  const params = await props.params;
  const id = String(params.ID || '');
  const pageSlug = normalizePageSlug(String(params.PAGE || ''));

  // /{id}/pages は既存ルートに任せる
  if (pageSlug === 'pages') {
    return new NextResponse('Not found', { status: 404 });
  }

  try {
    const customers = await readCustomers();
    const basePath = `/${id}`;
    const customer = customers.find((c: any) => {
      if (c.id === id || c.customer_id === id) return true;
      const publishPath = resolvePublishPath(c);
      return publishPath === basePath;
    });

    const html = customer ? getCustomerPageHtml(customer, pageSlug) : '';
    if (!customer || !html) {
      return new NextResponse('Page not found', { status: 404 });
    }

    // navリンクをTOPページと同期
    const publishBasePath = resolvePublishPath(customer) || basePath;
    const topHtml = getCustomerTopHtml(customer);
    const withNav = syncNavFromTopPage(html, topHtml);
    const linkSyncScript = `<script id="palette-link-sync">(function(){var basePath=${JSON.stringify(publishBasePath)};function normalize(s){return String(s||'').replace(/^\\/+/, '')}function build(slug){slug=normalize(slug);if(!slug||slug==='top')return basePath||'/';var baseForSubpages=basePath.endsWith('/pages')?basePath.replace(/\\/pages$/,''):basePath;if(!baseForSubpages)return '/'+slug;return baseForSubpages.replace(/\\/$/,'')+'/'+slug}var links=document.querySelectorAll('a[data-page-slug]');links.forEach(function(link){var slug=link.getAttribute('data-page-slug');if(!slug)return;var hash=link.getAttribute('data-page-hash')||'';hash=hash.replace(/^#/, '');var href=build(slug);link.setAttribute('href', hash?href+'#'+hash:href)});})();</script>`;

    const withName = applyCustomerName(withNav || html, customer?.name);
    const withEmail = applyContactEmail(withName, customer?.contactEmail);
    const withLogo = applyLogoToHeader(withEmail, customer?.logoUrl);
    const output = ensureHtmlDocument(withLogo, {
      faviconUrl: customer?.faviconUrl,
      headHtml: linkSyncScript,
      paletteId: customer?.customer_id || id,
    });

    return new NextResponse(output, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  } catch {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
