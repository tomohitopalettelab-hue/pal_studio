import { NextRequest, NextResponse } from 'next/server';
import { readCustomers } from '../api/_lib/customer-store';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(
  request: NextRequest,
  props: { params: Promise<{ ID: string }> }
) {
  const params = await props.params;
  const { ID: id } = params;

  try {
    const customers = await readCustomers();
    const customer = customers.find((c: any) => c.id === id || c.customer_id === id);

    if (!customer || !customer.htmlCode) {
      return new NextResponse('Page not found', { status: 404 });
    }

    let html = String(customer.htmlCode);

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
