import { templateVariants, hasTemplateId } from '../../admin/templates';

export type PostItem = {
  id: string;
  title: string;
  slug: string;
  bodyHtml: string;
  excerpt: string;
  status: string;
  postType?: 'news' | 'blog' | string;
  publishedAt: string;
  imageUrl?: string;
  imageAlt?: string;
};

export const resolvePublishPath = (customer: any) => {
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

const normalizePageSlug = (raw: string) => {
  const normalized = String(raw || '').trim().toLowerCase().replace(/^\/+/, '');
  if (!normalized) return 'top';
  return normalized.replace(/[^a-z0-9-_]/g, '-').replace(/-+/g, '-');
};

const deriveTitleFromSlug = (slug: string) => {
  const s = normalizePageSlug(slug);
  return s === 'top' ? 'Top' : s.charAt(0).toUpperCase() + s.slice(1);
};

const buildPageHref = (slug: string, basePath: string) => {
  const normalizedSlug = normalizePageSlug(slug);
  if (normalizedSlug === 'top') return basePath || '/';
  const baseForSubpages = basePath.endsWith('/pages')
    ? basePath.replace(/\/pages$/, '')
    : basePath;
  if (!baseForSubpages) return `/${normalizedSlug}`;
  return `${baseForSubpages.replace(/\/$/, '')}/${normalizedSlug}`;
};

export const getCustomerPagesForNav = (customer: any) => {
  const rawPages = Array.isArray(customer?.pages) ? customer.pages : [];
  const unique = new Map<string, { slug: string; title: string }>();
  rawPages.forEach((page: any) => {
    if (!page || typeof page.slug !== 'string') return;
    const slug = normalizePageSlug(page.slug);
    if (!slug || unique.has(slug)) return;
    unique.set(slug, { slug, title: String(page.title || deriveTitleFromSlug(slug)) });
  });
  if (!unique.has('top')) {
    unique.set('top', { slug: 'top', title: 'Top' });
  }
  return Array.from(unique.values());
};

export const syncNavWithSitePagesHtml = (
  html: string,
  pages: { slug: string; title: string }[],
  basePath: string,
) => {
  if (!html) return html;
  if (!/data-sync=["']site-pages["']/.test(html)) return html;

  return html.replace(/<nav[^>]*data-sync=["']site-pages["'][^>]*>[\s\S]*?<\/nav>/gi, (match) => {
    const classMatch = match.match(/class=["']([^"']+)["']/i);
    const className = classMatch ? classMatch[1] : '';
    const classAttr = className ? ` class="${className}"` : '';
    const links = pages.map((page) => {
      const href = buildPageHref(page.slug, basePath);
      const label = escapeHtml(page.title || deriveTitleFromSlug(page.slug));
      return `<a href="${href}"${classAttr}>${label}</a>`;
    }).join('');
    return match.replace(/>\s*[\s\S]*?<\/nav>/i, `>${links}</nav>`);
  });
};

export const escapeHtml = (value: string) => {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

export const formatDate = (value: string) => {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toISOString().slice(0, 10);
};

export const getCustomerTemplateId = (customer: any) => {
  const raw = String(customer?.selectedTemplateId || customer?.templateId || '').trim();
  return hasTemplateId(raw) ? raw : '';
};

export const selectVariantHtml = (pageSlug: string, templateId?: string) => {
  const variants = templateVariants.filter((variant) => variant.pageSlug === pageSlug);
  if (variants.length === 0) return '';
  if (templateId) {
    const matched = variants.find((variant) => variant.templateId === templateId);
    if (matched) return matched.html;
  }
  return variants[0].html;
};

export const replaceSectionContent = (html: string, sectionId: string, content: string) => {
  const re = new RegExp(`(<section[^>]*id=["']${sectionId}["'][^>]*>)([\\s\\S]*?)(</section>)`, 'i');
  if (re.test(html)) {
    return html.replace(re, `$1${content}$3`);
  }
  return html;
};

export const ensureHtmlDocument = (html: string) => {
  let output = String(html || '');
  if (!/<html[\s>]/i.test(output)) {
    output = `<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8" />` +
             `<meta name="viewport" content="width=device-width, initial-scale=1" />` +
             `<script src="https://cdn.tailwindcss.com"></script></head><body>${output}</body></html>`;
  } else {
    if (!/<meta[^>]+charset=/i.test(output)) {
      output = output.replace(/<head([^>]*)>/i, `<head$1><meta charset="utf-8" />`);
    }
    if (!/<meta[^>]+name=["']viewport["']/i.test(output)) {
      output = output.replace(/<head([^>]*)>/i, `<head$1><meta name="viewport" content="width=device-width, initial-scale=1" />`);
    }
    if (!/cdn\.tailwindcss\.com/i.test(output)) {
      output = output.replace(/<head([^>]*)>/i, `<head$1><script src="https://cdn.tailwindcss.com"></script>`);
    }
  }
  return output;
};

export const buildPostListHtml = (posts: PostItem[], basePath: string, typeLabel: string) => {
  if (posts.length === 0) return '';
  const listItems = posts.map((post) => {
    const title = escapeHtml(post.title || '');
    const excerpt = escapeHtml(post.excerpt || '');
    const date = escapeHtml(formatDate(post.publishedAt));
    const image = post.imageUrl
      ? `<img src="${escapeHtml(post.imageUrl)}" alt="${escapeHtml(post.imageAlt || '')}" class="w-full h-44 object-cover rounded-xl" />`
      : '';

    return `
      <article class="border border-slate-200 rounded-2xl p-6 bg-white">
        ${image}
        <div class="mt-4">
          <p class="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em]">${date}</p>
          <h2 class="text-xl font-black text-slate-900 mt-2">${title}</h2>
          <p class="text-sm text-slate-600 mt-3">${excerpt}</p>
          <a href="${basePath}/${encodeURIComponent(post.slug)}" class="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 mt-4">続きを読む</a>
        </div>
      </article>
    `;
  }).join('\n');

  return `
    <div class="space-y-6">
      <div>
        <p class="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold">${typeLabel}</p>
        <h2 class="text-3xl font-black">${typeLabel} 一覧</h2>
      </div>
      <div class="grid gap-5">
        ${listItems}
      </div>
    </div>
  `;
};

export const buildPostDetailTopHtml = (post: PostItem) => {
  const title = escapeHtml(post.title || '');
  const excerpt = escapeHtml(post.excerpt || '');
  const date = escapeHtml(formatDate(post.publishedAt));
  const image = post.imageUrl
    ? `<img src="${escapeHtml(post.imageUrl)}" alt="${escapeHtml(post.imageAlt || '')}" class="w-full rounded-2xl object-cover" />`
    : '';

  return `
    <div class="space-y-4">
      <p class="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em]">${date}</p>
      <h1 class="text-2xl font-black">${title}</h1>
      ${excerpt ? `<p class="text-sm text-slate-600">${excerpt}</p>` : ''}
      ${image ? `<div class="mt-4">${image}</div>` : ''}
    </div>
  `;
};

export const buildPostDetailBodyHtml = (post: PostItem) => {
  const body = String(post.bodyHtml || '').trim();
  if (body) {
    return `<div class="prose prose-slate max-w-none">${body}</div>`;
  }
  const excerpt = escapeHtml(post.excerpt || '');
  return excerpt ? `<p class="text-sm text-slate-600">${excerpt}</p>` : '';
};
