import { NextRequest, NextResponse } from 'next/server';
import { readCustomers } from '../../../api/_lib/customer-store';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

type PostItem = {
  id: string;
  title: string;
  slug: string;
  bodyHtml: string;
  excerpt: string;
  status: string;
  publishedAt: string;
  imageUrl?: string;
  imageAlt?: string;
};

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

const escapeHtml = (value: string) => {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

const formatDate = (value: string) => {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toISOString().slice(0, 10);
};

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

    const posts = (Array.isArray(customer.posts) ? customer.posts : []) as PostItem[];
    const post = posts.find((item) => String(item.slug || '').trim().toLowerCase() === slug);
    if (!post || post.status !== 'published') {
      return new NextResponse('Page not found', { status: 404 });
    }
    if (post.publishedAt) {
      const date = new Date(post.publishedAt);
      if (!Number.isNaN(date.getTime()) && date > new Date()) {
        return new NextResponse('Page not found', { status: 404 });
      }
    }

    const title = escapeHtml(post.title || '');
    const date = escapeHtml(formatDate(post.publishedAt));
    const image = post.imageUrl
      ? `<img src="${escapeHtml(post.imageUrl)}" alt="${escapeHtml(post.imageAlt || '')}" class="w-full rounded-2xl object-cover" />`
      : '';

    const html = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-100 text-slate-900">
  <main class="max-w-3xl mx-auto px-5 py-14">
    <a href="/${encodeURIComponent(id)}/news" class="text-xs font-bold text-slate-500">一覧に戻る</a>
    <article class="mt-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <p class="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em]">${date}</p>
      <h1 class="text-2xl font-black mt-3">${title}</h1>
      ${image ? `<div class="mt-5">${image}</div>` : ''}
      <div class="prose prose-slate max-w-none mt-6">${post.bodyHtml || ''}</div>
    </article>
  </main>
</body>
</html>`;

    return new NextResponse(html, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  } catch {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
