import { templateVariants, hasTemplateId } from '../../admin/templates';

export type PostItem = {
  id: string;
  title: string;
  slug: string;
  bodyHtml: string;
  excerpt: string;
  status: string;
  postType?: 'news' | 'blog' | string;
  tags?: string[];
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

export const getCustomerTopHtml = (customer: any) => {
  const rawPages = Array.isArray(customer?.pages) ? customer.pages : [];
  const topPage = rawPages.find((page: any) => String(page?.slug || '').trim().toLowerCase() === 'top');
  return String(topPage?.htmlCode || customer?.htmlCode || '');
};

export const extractHeaderHtml = (html: string) => {
  const match = String(html || '').match(/<header[\s\S]*?<\/header>/i);
  return match ? match[0] : '';
};

export const replaceHeaderHtml = (html: string, headerHtml: string) => {
  if (!headerHtml) return html;
  if (!/<header[\s\S]*?<\/header>/i.test(html)) return html;
  return html.replace(/<header[\s\S]*?<\/header>/i, headerHtml);
};

export const syncNavWithSitePagesHtml = (
  html: string,
  pages: { slug: string; title: string }[],
  basePath: string,
) => {
  if (!html) return html;
  if (!/data-sync=["']site-pages["']/.test(html)) return html;

  return html.replace(/<nav[^>]*data-sync=["']site-pages["'][^>]*>[\s\S]*?<\/nav>/gi, (match) => {
    const anchorClassMatch = match.match(/<a[^>]*class=["']([^"']+)["']/i);
    const anchorClassName = anchorClassMatch ? anchorClassMatch[1] : '';
    const classAttr = anchorClassName ? ` class="${anchorClassName}"` : '';
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

const normalizeTags = (tags?: string[]) => {
  if (!Array.isArray(tags)) return [] as string[];
  return tags
    .map((tag) => String(tag || '').trim())
    .filter(Boolean);
};

export const sortPostsByTag = (posts: PostItem[]) => {
  return [...posts].sort((a, b) => {
    const aTags = normalizeTags(a.tags);
    const bTags = normalizeTags(b.tags);
    const aKey = (aTags[0] || '').toLowerCase();
    const bKey = (bTags[0] || '').toLowerCase();
    if (aKey && bKey && aKey !== bKey) return aKey.localeCompare(bKey);
    if (aKey && !bKey) return -1;
    if (!aKey && bKey) return 1;
    return String(b.publishedAt || '').localeCompare(String(a.publishedAt || ''));
  });
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

type HtmlDocumentOptions = {
  faviconUrl?: string;
  headHtml?: string;
};

export const ensureHtmlDocument = (html: string, options: HtmlDocumentOptions = {}) => {
  let output = String(html || '');
  const faviconUrl = String(options.faviconUrl || '').trim();
  const headHtml = String(options.headHtml || '').trim();
  const faviconTag = faviconUrl ? `<link rel="icon" href="${escapeHtml(faviconUrl)}" />` : '';

  if (!/<html[\s>]/i.test(output)) {
    output = `<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8" />` +
             `<meta name="viewport" content="width=device-width, initial-scale=1" />` +
             `${faviconTag}` +
             `<script src="https://cdn.tailwindcss.com"></script>` +
             `${headHtml}</head><body>${output}</body></html>`;
  } else {
    if (!/<meta[^>]+charset=/i.test(output)) {
      output = output.replace(/<head([^>]*)>/i, `<head$1><meta charset="utf-8" />`);
    }
    if (!/<meta[^>]+name=["']viewport["']/i.test(output)) {
      output = output.replace(/<head([^>]*)>/i, `<head$1><meta name="viewport" content="width=device-width, initial-scale=1" />`);
    }
    if (faviconTag && !/<link[^>]+rel=["']icon["']/i.test(output)) {
      output = output.replace(/<head([^>]*)>/i, `<head$1>${faviconTag}`);
    }
    if (!/cdn\.tailwindcss\.com/i.test(output)) {
      output = output.replace(/<head([^>]*)>/i, `<head$1><script src="https://cdn.tailwindcss.com"></script>`);
    }
    if (headHtml && !output.includes(headHtml)) {
      output = output.replace(/<head([^>]*)>/i, `<head$1>${headHtml}`);
    }
  }
  return output;
};

export const applyContactEmail = (html: string, contactEmail?: string) => {
  const email = String(contactEmail || '').trim();
  if (!email || !email.includes('@')) return html;
  return String(html || '').replace(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, email);
};

export const buildPostListHtml = (
  posts: PostItem[],
  basePath: string,
  typeLabel: string,
  defaultImageUrl?: string
) => {
  if (posts.length === 0) return '';
  const listItems = sortPostsByTag(posts).map((post) => {
    const title = escapeHtml(post.title || '');
    const excerpt = escapeHtml(post.excerpt || '');
    const date = escapeHtml(formatDate(post.publishedAt));
    const tags = normalizeTags(post.tags);
    const imageUrl = String(post.imageUrl || defaultImageUrl || '').trim();
    const imageAlt = escapeHtml(post.imageAlt || post.title || '');
    const image = imageUrl
      ? `<img src="${escapeHtml(imageUrl)}" alt="${imageAlt}" class="w-full aspect-[4/3] object-cover rounded-xl" />`
      : '';
    const tagHtml = tags.length
      ? `<div class="mt-3 flex flex-wrap gap-2">${tags
          .map((tag) => `<span class="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-slate-100 text-slate-500">${escapeHtml(tag)}</span>`)
          .join('')}</div>`
      : '';

    return `
      <article class="border border-slate-200 rounded-2xl p-6 bg-white h-full">
        ${image}
        <div class="mt-4">
          <p class="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em]">${date}</p>
          <h2 class="text-xl font-black text-slate-900 mt-2">${title}</h2>
          <p class="text-sm text-slate-600 mt-3">${excerpt}</p>
          ${tagHtml}
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
      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        ${listItems}
      </div>
    </div>
  `;
};

export const buildTopNewsSectionHtml = (posts: PostItem[], basePath: string, defaultImageUrl?: string) => {
  if (posts.length === 0) return '';
  const detailHref = `${basePath}/news-page`;
  const items = sortPostsByTag(posts).slice(0, 2).map((post) => {
    const title = escapeHtml(post.title || '');
    const date = escapeHtml(formatDate(post.publishedAt));
    const imageUrl = String(post.imageUrl || defaultImageUrl || '').trim();
    const imageAlt = escapeHtml(post.imageAlt || post.title || '');
    const image = imageUrl
      ? `<img src="${escapeHtml(imageUrl)}" alt="${imageAlt}" class="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-700" />`
      : '';

    return `
      <a href="${detailHref}" class="group block">
        <article class="py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 cursor-pointer">
          <div class="w-full md:w-48 aspect-video overflow-hidden bg-slate-200 flex-shrink-0">
            ${image}
          </div>
          <div class="flex-1">
            <p class="text-[9px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-2">${date}</p>
            <h4 class="text-xl md:text-2xl font-bold group-hover:text-[var(--accent-color)] transition-colors tracking-tight">${title}</h4>
          </div>
        </article>
      </a>
    `;
  }).join('');

  return `
    <section id="news" class="py-[var(--section-gap-mobile)] md:py-[var(--section-gap)] px-6 md:px-10 bg-[#f8fafc]">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 md:mb-16 gap-4">
          <div>
            <p class="text-[9px] font-bold tracking-[0.6em] uppercase text-[var(--accent-color)] mb-2">News & Updates</p>
            <h3 class="text-4xl md:text-6xl font-black tracking-tighter uppercase">Latest</h3>
          </div>
          <a href="${basePath}/news" class="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] border-b border-black pb-1 hover:text-[var(--accent-color)] transition-all">View Archive</a>
        </div>
        <div class="grid grid-cols-1 divide-y divide-black/5 border-t border-black/5">
          ${items}
        </div>
      </div>
    </section>
  `;
};

export const buildTopBlogSectionHtml = (posts: PostItem[], basePath: string, defaultImageUrl?: string) => {
  if (posts.length === 0) return '';
  const detailHref = `${basePath}/blog-page`;
  const items = sortPostsByTag(posts).slice(0, 2).map((post) => {
    const title = escapeHtml(post.title || '');
    const excerpt = escapeHtml(post.excerpt || '');
    const imageUrl = String(post.imageUrl || defaultImageUrl || '').trim();
    const imageAlt = escapeHtml(post.imageAlt || post.title || '');
    const image = imageUrl
      ? `<img src="${escapeHtml(imageUrl)}" alt="${imageAlt}" class="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105" />`
      : '';

    return `
      <a href="${detailHref}" class="group block">
        <article class="cursor-pointer">
          <div class="aspect-video overflow-hidden mb-6 relative">
            ${image}
          </div>
          <h4 class="text-xl md:text-3xl font-bold mb-4 group-hover:text-[var(--accent-color)] transition-colors leading-tight">${title}</h4>
          <p class="text-[var(--text-light)] text-sm md:text-lg font-light leading-relaxed">${excerpt}</p>
        </article>
      </a>
    `;
  }).join('');

  return `
    <section id="blog" class="py-[var(--section-gap-mobile)] md:py-[var(--section-gap)] px-6 md:px-10 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12 md:mb-24">
          <p class="text-[9px] font-bold tracking-[0.8em] uppercase text-[var(--accent-color)] mb-4">Our Perspectives</p>
          <h3 class="text-4xl md:text-6xl font-black tracking-tighter uppercase">Insights</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          ${items}
        </div>
      </div>
    </section>
  `;
};

export const buildPostDetailTopHtml = (post: PostItem, defaultImageUrl?: string) => {
  const title = escapeHtml(post.title || '');
  const excerpt = escapeHtml(post.excerpt || '');
  const date = escapeHtml(formatDate(post.publishedAt));
  const imageUrl = String(post.imageUrl || defaultImageUrl || '').trim();
  const imageAlt = escapeHtml(post.imageAlt || post.title || '');
  const image = imageUrl
    ? `<img src="${escapeHtml(imageUrl)}" alt="${imageAlt}" class="w-full rounded-2xl object-cover" />`
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
