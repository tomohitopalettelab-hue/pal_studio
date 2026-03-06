import { NextRequest, NextResponse } from 'next/server';
import { readCustomers } from '../../api/_lib/customer-store';

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
      return publishPath === requestPath;
    });

    if (!customer || !customer.htmlCode) {
      return new NextResponse('Page not found', { status: 404 });
    }

    let html = String(customer.htmlCode);

    // 出力するHTMLに <html> タグが含まれていない場合、自前でラップする。
    // 同時に charset と Tailwind CDN を挿入し、文字化けとスタイル未適用を防止する。
    if (!/<html[\s>]/i.test(html)) {
      html = `<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8" />` +
             `<script src="https://cdn.tailwindcss.com"></script></head><body>${html}</body></html>`;
    } else {
      // charset が指定されていない場合は挿入
      if (!/<meta[^>]+charset=/i.test(html)) {
        html = html.replace(/<head([^>]*)>/i, `<head$1><meta charset="utf-8" />`);
      }
      // Tailwind CDN が含まれていなければ追加
      if (!/cdn\.tailwindcss\.com/i.test(html)) {
        html = html.replace(/<head([^>]*)>/i, `<head$1><script src="https://cdn.tailwindcss.com"></script>`);
      }
    }

    return new NextResponse(html, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
