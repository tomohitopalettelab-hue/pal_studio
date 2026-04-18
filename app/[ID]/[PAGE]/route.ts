import { NextRequest, NextResponse } from 'next/server';
import { readCustomers } from '../../api/_lib/customer-store';
import { ensureHtmlDocument, applyContactEmail, applyLogoToHeader, buildFooterHtml, applyFooterToHtml, syncNavFromTopPage, getCustomerTopHtml, applyCustomerName, extractHeaderHtml, replaceHeaderHtml } from '../_lib/post-templates';

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

    // TOPページのheader全体をサブページに注入（屋号・ナビ・色をTOPと完全一致）
    const publishBasePath = resolvePublishPath(customer) || basePath;
    const topHtml = getCustomerTopHtml(customer);
    let withNav = html;
    if (topHtml) {
      // 1. TOPのheaderを注入
      const topHeader = extractHeaderHtml(topHtml);
      if (topHeader) {
        withNav = replaceHeaderHtml(withNav, topHeader);
        // position:fixedならスペーサー追加
        const topStyleRaw = topHtml.match(/<style[\s\S]*?<\/style>/i)?.[0] || '';
        const isFixedHeader = /\.header\s*\{[^}]*position\s*:\s*fixed/i.test(topStyleRaw);
        if (isFixedHeader) {
          withNav = withNav.replace(/(<\/header>)/i, `$1\n<div style="height:80px;" data-header-spacer></div>`);
        }
      }
      // 2. TOPのstyleをサブページのstyleの前に追加（後勝ちルールで維持）
      const topStyleMatch = topHtml.match(/<style[\s\S]*?<\/style>/i);
      if (topStyleMatch) {
        const subStyleMatch = withNav.match(/<style[\s\S]*?<\/style>/i);
        if (subStyleMatch) {
          withNav = withNav.replace(subStyleMatch[0], `${topStyleMatch[0]}\n${subStyleMatch[0]}`);
        } else {
          withNav = topStyleMatch[0] + withNav;
        }
      }
      // 3. template-rootのinline style(CSS変数)をTOPに合わせる
      const topRootMatch = topHtml.match(/<div[^>]*class=["']template-root["'][^>]*style=["']([^"']*)["']/i);
      if (topRootMatch) {
        withNav = withNav.replace(
          /(<div[^>]*class=["']template-root["'][^>]*style=["'])[^"']*(["'])/i,
          `$1${topRootMatch[1]}$2`
        );
      }
    }
    const linkSyncScript = `<script id="palette-link-sync">(function(){var basePath=${JSON.stringify(publishBasePath)};function normalize(s){return String(s||'').replace(/^\\/+/, '')}function build(slug){slug=normalize(slug);if(!slug||slug==='top')return basePath||'/';var baseForSubpages=basePath.endsWith('/pages')?basePath.replace(/\\/pages$/,''):basePath;if(!baseForSubpages)return '/'+slug;return baseForSubpages.replace(/\\/$/,'')+'/'+slug}var links=document.querySelectorAll('a[data-page-slug]');links.forEach(function(link){var slug=link.getAttribute('data-page-slug');if(!slug)return;var hash=link.getAttribute('data-page-hash')||'';hash=hash.replace(/^#/, '');var href=build(slug);link.setAttribute('href', hash?href+'#'+hash:href)});})();</script>`;

    const withName = applyCustomerName(withNav || html, customer?.name);
    const withEmail = applyContactEmail(withName, customer?.contactEmail);
    const withLogo = applyLogoToHeader(withEmail, customer?.logoUrl);
    // Apply footer if footerData exists
    let withFooter = withLogo;
    if (customer?.footerData?.companyName) {
      const footerHtml = buildFooterHtml(customer.selectedTemplateId || '', customer.footerData);
      withFooter = applyFooterToHtml(withLogo, footerHtml);
    }
    const output = ensureHtmlDocument(withFooter, {
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
