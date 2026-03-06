import { NextRequest, NextResponse } from 'next/server';
import { readCustomers } from '../../api/_lib/customer-store';

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
  props: { params: Promise<{ ID: string }> }
) {
  const params = await props.params;
  const id = String(params.ID || '');

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
    const now = new Date();
    const published = posts
      .filter((post) => post.status === 'published')
      .filter((post) => {
        if (!post.publishedAt) return true;
        const date = new Date(post.publishedAt);
        if (Number.isNaN(date.getTime())) return true;
        return date <= now;
      })
      .sort((a, b) => String(b.publishedAt || '').localeCompare(String(a.publishedAt || '')));

    const listItems = published
      .map((post) => {
        const title = escapeHtml(post.title || '');
        const excerpt = escapeHtml(post.excerpt || '');
        const date = escapeHtml(formatDate(post.publishedAt));
        const image = post.imageUrl
          ? `<img src="${escapeHtml(post.imageUrl)}" alt="${escapeHtml(post.imageAlt || '')}" class="w-full h-44 object-cover rounded-xl" />`
          : '';

        return `
          <article class="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            ${image}
            <div class="mt-4">
              <p class="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em]">${date}</p>
              <h2 class="text-xl font-black text-slate-900 mt-2">${title}</h2>
              <p class="text-sm text-slate-600 mt-3">${excerpt}</p>
              <a href="/${encodeURIComponent(id)}/news/${encodeURIComponent(post.slug)}" class="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 mt-4">続きを読む</a>
            </div>
          </article>
        `;
      })
      .join('\n');

    const html = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(customer.name || 'News')}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-100 text-slate-900">
  <main class="max-w-4xl mx-auto px-5 py-14">
    <header class="mb-8">
      <p class="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold">News</p>
      <h1 class="text-3xl font-black">${escapeHtml(customer.name || '')} お知らせ</h1>
    </header>
    <div class="grid gap-5">
      ${listItems || '<p class="text-sm text-slate-400">現在、公開中の投稿はありません。</p>'}
    </div>
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
