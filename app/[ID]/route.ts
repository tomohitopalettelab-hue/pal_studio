import { NextRequest, NextResponse } from 'next/server';
import { readCustomers } from '../api/_lib/customer-store';

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
  props: { params: Promise<{ ID: string }> }
) {
  const params = await props.params;
  const { ID: id } = params;

  try {
    const customers = await readCustomers();
    const requestPath = `/${id}`;
    const customer = customers.find((c: any) => {
      if (c.id === id || c.customer_id === id) return true;
      const publishPath = resolvePublishPath(c);
      return publishPath === requestPath || `${publishPath}/pages` === requestPath;
    });

    const topHtml = customer ? getCustomerPageHtml(customer, 'top') : '';
    if (!customer || !topHtml) {
      return new NextResponse('Page not found', { status: 404 });
    }

    let html = String(topHtml);

    if (!/<html[\s>]/i.test(html)) {
      html = `<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8" />` +
             `<script src="https://cdn.tailwindcss.com"></script></head><body>${html}</body></html>`;
    } else {
      if (!/<meta[^>]+charset=/i.test(html)) {
        html = html.replace(/<head([^>]*)>/i, `<head$1><meta charset="utf-8" />`);
      }
      if (!/cdn\.tailwindcss\.com/i.test(html)) {
        html = html.replace(/<head([^>]*)>/i, `<head$1><script src="https://cdn.tailwindcss.com"></script>`);
      }
    }

    return new NextResponse(html, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  } catch {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
