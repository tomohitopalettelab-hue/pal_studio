import { NextRequest, NextResponse } from 'next/server';
import JSZip from 'jszip';
import { readCustomers } from '../_lib/customer-store';
import {
  ensureHtmlDocument,
  applyContactEmail,
  applyLogoToHeader,
  applyCustomerName,
  extractHeaderHtml,
  replaceHeaderHtml,
  buildFooterHtml,
  applyFooterToHtml,
  getCustomerTopHtml,
} from '../../[ID]/_lib/post-templates';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const normalizePageSlug = (raw: string) =>
  String(raw || '').trim().toLowerCase().replace(/^\/+/, '');

const sanitizeFileName = (name: string) =>
  String(name || 'site').replace(/[^\w\-]/g, '_').substring(0, 40) || 'site';

// 各ページのHTMLを公開サイトと同じ加工で生成
const buildPageOutputHtml = (customer: any, page: { slug: string; htmlCode: string }) => {
  const pageSlug = normalizePageSlug(page.slug || 'top') || 'top';
  const isTop = pageSlug === 'top';
  let html = String(page.htmlCode || '');
  if (!html) return '';

  const topHtml = getCustomerTopHtml(customer);

  // サブページ: TOPのheader・style・template-rootのCSS変数を適用
  if (!isTop && topHtml) {
    const topHeader = extractHeaderHtml(topHtml);
    if (topHeader) {
      html = replaceHeaderHtml(html, topHeader);
      const topStyleRaw = topHtml.match(/<style[\s\S]*?<\/style>/i)?.[0] || '';
      const isFixedHeader = /\.header\s*\{[^}]*position\s*:\s*fixed/i.test(topStyleRaw);
      if (isFixedHeader) {
        html = html.replace(/(<\/header>)/i, `$1\n<div style="height:80px;" data-header-spacer></div>`);
      }
    }
    const topStyleMatch = topHtml.match(/<style[\s\S]*?<\/style>/i);
    if (topStyleMatch) {
      const subStyleMatch = html.match(/<style[\s\S]*?<\/style>/i);
      if (subStyleMatch) {
        html = html.replace(subStyleMatch[0], `${topStyleMatch[0]}\n${subStyleMatch[0]}`);
      } else {
        html = topStyleMatch[0] + html;
      }
    }
    const topRootMatch = topHtml.match(/<div[^>]*class=["']template-root["'][^>]*style=["']([^"']*)["']/i);
    if (topRootMatch) {
      html = html.replace(
        /(<div[^>]*class=["']template-root["'][^>]*style=["'])[^"']*(["'])/i,
        `$1${topRootMatch[1]}$2`
      );
    }
  }

  // 共通処理
  const withName = applyCustomerName(html, customer?.name);
  const withEmail = applyContactEmail(withName, customer?.contactEmail);
  const withLogo = applyLogoToHeader(withEmail, customer?.logoUrl);

  let withFooter = withLogo;
  if (customer?.footerData?.companyName) {
    const footerHtml = buildFooterHtml(customer.selectedTemplateId || '', customer.footerData);
    withFooter = applyFooterToHtml(withLogo, footerHtml);
  }

  // サブページ間のリンクを相対パスに変更
  let output = withFooter;
  // 'slug' アンカーを './slug.html' に変換するスクリプトを追加（簡易）
  const baseHref = isTop ? '.' : '.';
  const linkScript = `<script>(function(){var links=document.querySelectorAll('a[href]');links.forEach(function(l){var h=l.getAttribute('href');if(!h||h.startsWith('http')||h.startsWith('#')||h.startsWith('mailto:')||h.startsWith('tel:'))return;var clean=h.replace(/^\\.?\\/*/, '').replace(/^\\//, '');if(clean==='top'||clean==='')l.setAttribute('href','index.html');else if(!clean.endsWith('.html'))l.setAttribute('href',clean.split('/')[0]+'.html');});})();</script>`;

  return ensureHtmlDocument(output, {
    faviconUrl: customer?.faviconUrl,
    headHtml: linkScript,
    paletteId: customer?.customer_id || customer?.id || '',
  });
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const customerId = searchParams.get('id');
  if (!customerId) {
    return new NextResponse('Missing id parameter', { status: 400 });
  }

  try {
    const customers = await readCustomers();
    const customer = customers.find((c: any) =>
      c.id === customerId || c.customer_id === customerId
    );
    if (!customer) {
      return new NextResponse('Customer not found', { status: 404 });
    }

    const zip = new JSZip();
    const pages = Array.isArray(customer.pages) ? customer.pages : [];

    // TOPページ (index.html)
    const topPage = pages.find((p: any) => normalizePageSlug(p?.slug || '') === 'top');
    if (topPage) {
      const html = buildPageOutputHtml(customer, topPage);
      if (html) zip.file('index.html', html);
    } else if (customer.htmlCode) {
      const html = buildPageOutputHtml(customer, { slug: 'top', htmlCode: customer.htmlCode });
      if (html) zip.file('index.html', html);
    }

    // サブページ（各slugを slug.html で保存）
    for (const page of pages) {
      const slug = normalizePageSlug(page?.slug || '');
      if (!slug || slug === 'top') continue;
      const html = buildPageOutputHtml(customer, page);
      if (html) zip.file(`${slug}.html`, html);
    }

    // READMEを同梱
    zip.file('README.txt',
      `${customer.name || 'Site'} - ダウンロードサイト\n` +
      `Generated: ${new Date().toISOString()}\n\n` +
      `このフォルダ内のHTMLファイルをWebサーバーにアップロードしてください。\n` +
      `index.html がトップページです。\n`
    );

    const buffer = await zip.generateAsync({ type: 'nodebuffer' });
    const fileName = sanitizeFileName(customer.name || 'site') + '.zip';

    return new NextResponse(buffer as any, {
      status: 200,
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${fileName}"`,
      },
    });
  } catch (err) {
    console.error('[download-site] error:', err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
