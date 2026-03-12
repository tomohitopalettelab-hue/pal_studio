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

export const applyLogoToHeader = (html: string, logoUrl?: string) => {
  const url = String(logoUrl || '').trim();
  if (!url) return html;
  const source = String(html || '');
  if (/data-logo=/i.test(source)) return source;
  let output = source.replace(
    /<div class="flex items-center gap-4 group cursor-pointer">/i,
    `<div class="flex items-center gap-4 group cursor-pointer"><img data-logo src="${escapeHtml(url)}" alt="Logo" class="h-8 md:h-10 w-auto object-contain" />`
  );

  let iconHidden = false;
  output = output.replace(/<div class="relative[^"']*"/i, (match) => {
    if (iconHidden) return match;
    iconHidden = true;
    return match.replace('class="', 'class="hidden ');
  });

  let titleHidden = false;
  output = output.replace(/<h1 class="[^"']*"/i, (match) => {
    if (titleHidden) return match;
    titleHidden = true;
    return match.replace('class="', 'class="hidden ');
  });

  return output;
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
    const imageUrl = String(defaultImageUrl || post.imageUrl || '').trim();
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
    const imageUrl = String(defaultImageUrl || post.imageUrl || '').trim();
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
    const imageUrl = String(defaultImageUrl || post.imageUrl || '').trim();
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
  const imageUrl = String(defaultImageUrl || post.imageUrl || '').trim();
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

export const buildPostArchiveListHtml = (posts: PostItem[], basePath: string) => {
  if (posts.length === 0) return '';
  const items = posts.slice(0, 6).map((post) => {
    const title = escapeHtml(post.title || '');
    const date = escapeHtml(formatDate(post.publishedAt));
    return `
      <a href="${basePath}/${encodeURIComponent(post.slug)}" class="group block">
        <p class="text-[9px] font-bold text-slate-400 uppercase mb-2">${date}</p>
        <h5 class="text-sm font-bold group-hover:text-[var(--accent-color)] transition-colors leading-tight">${title}</h5>
      </a>
    `;
  }).join('');

  return `
    <div class="space-y-8">
      ${items}
    </div>
  `;
};

export const buildRelatedNewsSectionHtml = (
  posts: PostItem[],
  basePath: string,
  defaultImageUrl?: string
) => {
  if (posts.length === 0) return '';
  const items = posts.slice(0, 2).map((post) => {
    const title = escapeHtml(post.title || '');
    const date = escapeHtml(formatDate(post.publishedAt));
    const imageUrl = String(defaultImageUrl || post.imageUrl || '').trim();
    const imageAlt = escapeHtml(post.imageAlt || post.title || '');
    const image = imageUrl
      ? `<img src="${escapeHtml(imageUrl)}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="${imageAlt}">`
      : '';

    return `
      <a href="${basePath}/${encodeURIComponent(post.slug)}" class="group block">
        <article class="cursor-pointer">
          <div class="aspect-video overflow-hidden mb-6">
            ${image}
          </div>
          <p class="text-[9px] font-bold tracking-[0.3em] text-slate-400 mb-2 uppercase">${date}</p>
          <h4 class="text-xl font-bold group-hover:text-[var(--accent-color)] transition-colors">${title}</h4>
        </article>
      </a>
    `;
  }).join('');

  return `
    <div class="max-w-6xl mx-auto">
      <div class="flex items-end justify-between mb-16">
        <h3 class="text-3xl md:text-4xl font-black tracking-tighter uppercase">Related News</h3>
        <a href="${basePath}" class="text-[9px] font-bold uppercase tracking-[0.3em] border-b border-black pb-2 hover:text-[var(--accent-color)] transition-all">Back to List</a>
      </div>
      <div class="grid md:grid-cols-2 gap-10 md:gap-16">
        ${items}
      </div>
    </div>
  `;
};

// ─── Per-template top section builders ───────────────────────────────────────

export const buildTopNewsSectionHtmlByTemplate = (
  posts: PostItem[],
  basePath: string,
  templateId: string,
  defaultImageUrl?: string,
): string => {
  if (posts.length === 0) return '';
  const detailHref = `${basePath}/news-page`;
  const slice = sortPostsByTag(posts).slice(0, 2);

  switch (templateId) {
    case 'template-elegant': {
      const items = slice.map((p) => {
        const title = escapeHtml(p.title || '');
        const date = escapeHtml(formatDate(p.publishedAt));
        return `<a href="${detailHref}" class="group block"><article class="py-8 md:py-10 flex flex-col md:flex-row items-start gap-4 md:gap-16 border-t border-black/[0.06]"><p class="text-[9px] tracking-[0.3em] uppercase text-[var(--sub-color)] shrink-0 w-28">${date}</p><h4 class="text-lg md:text-xl font-light group-hover:text-[var(--sub-color)] transition-colors tracking-wide">${title}</h4></article></a>`;
      }).join('');
      return `<section id="news" class="section-news py-[var(--section-padding)] px-6 bg-white/60"><div class="max-w-5xl mx-auto"><div class="flex flex-col md:flex-row items-baseline justify-between mb-12 md:mb-20 gap-4"><h3 class="text-[10px] tracking-[0.6em] uppercase italic text-[var(--sub-color)]">News</h3><a href="${basePath}/news" class="text-[9px] tracking-[0.3em] uppercase border-b border-[var(--sub-color)] pb-1 hover:opacity-60 transition-opacity">すべてのお知らせ</a></div><div class="space-y-0">${items}</div></div></section>`;
    }
    case 'template-corporate': {
      const items = slice.map((p) => {
        const title = escapeHtml(p.title || '');
        const excerpt = escapeHtml(p.excerpt || '');
        const date = escapeHtml(formatDate(p.publishedAt));
        return `<a href="${detailHref}" class="group block"><article class="p-6 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow"><p class="text-[9px] font-bold text-[var(--main-color)] uppercase tracking-widest mb-3">${date}</p><h4 class="text-base md:text-lg font-bold mb-2 group-hover:text-[var(--main-color)] transition-colors">${title}</h4>${excerpt ? `<p class="text-sm text-[var(--text-light)] leading-relaxed mt-2">${excerpt}</p>` : ''}</article></a>`;
      }).join('');
      return `<section id="news" class="py-24 px-6 bg-slate-50 border-t border-slate-100"><div class="max-w-6xl mx-auto"><div class="flex items-end justify-between mb-10 md:mb-14 gap-4"><div><p class="text-[9px] font-bold tracking-[0.4em] uppercase text-[var(--main-color)] mb-2">News</p><h3 class="text-2xl md:text-4xl font-bold text-[var(--main-dark)]">ニュース</h3></div><a href="${basePath}/news" class="text-[9px] font-bold tracking-[0.3em] uppercase text-[var(--main-color)] border-b border-[var(--main-color)] pb-1 hover:opacity-70 transition-opacity shrink-0">すべて見る</a></div><div class="grid md:grid-cols-2 gap-6">${items}</div></div></section>`;
    }
    case 'template-natural': {
      const items = slice.map((p) => {
        const title = escapeHtml(p.title || '');
        const excerpt = escapeHtml(p.excerpt || '');
        const date = escapeHtml(formatDate(p.publishedAt));
        return `<a href="${detailHref}" class="group block"><article class="bg-white p-6 rounded-[20px] border border-white shadow-sm hover:shadow-md transition-shadow"><p class="text-[9px] font-bold text-[var(--accent-color)] opacity-60">${date}</p><h4 class="font-serif text-lg text-[var(--accent-color)] mt-3 group-hover:opacity-70 transition-opacity">${title}</h4>${excerpt ? `<p class="text-xs mt-2 opacity-60 leading-relaxed">${excerpt}</p>` : ''}</article></a>`;
      }).join('');
      return `<section id="news" class="py-24 px-6 bg-[var(--main-color)]/5"><div class="max-w-5xl mx-auto"><div class="text-center mb-12 md:mb-16"><h3 class="font-serif text-2xl md:text-4xl text-[var(--accent-color)]">お知らせ</h3><p class="text-[9px] tracking-[0.3em] uppercase mt-2 opacity-40">News</p></div><div class="grid md:grid-cols-2 gap-6">${items}</div><div class="text-center mt-10"><a href="${basePath}/news" class="inline-block text-[9px] tracking-[0.3em] uppercase border-b border-[var(--accent-color)] pb-1 text-[var(--accent-color)] hover:opacity-60 transition-opacity">すべてのお知らせ</a></div></div></section>`;
    }
    case 'template-minimal': {
      const items = slice.map((p) => {
        const title = escapeHtml(p.title || '');
        const date = escapeHtml(formatDate(p.publishedAt));
        return `<a href="${detailHref}" class="group block"><article class="py-8 border-t border-black"><p class="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--text-light)]">${date}</p><h4 class="text-lg font-light mt-3 group-hover:text-[var(--text-light)] transition-colors">${title}</h4></article></a>`;
      }).join('');
      return `<section id="news" class="py-32 px-8 bg-[var(--accent-color)]"><div class="max-w-7xl mx-auto"><div class="flex items-baseline justify-between mb-12"><h3 class="text-xs font-bold tracking-[0.4em] uppercase text-[var(--text-light)]">News</h3><a href="${basePath}/news" class="text-[9px] font-bold tracking-[0.3em] uppercase border-b border-black pb-1 hover:text-[var(--text-light)] transition-colors">View All</a></div><div class="grid md:grid-cols-2 gap-10">${items}</div></div></section>`;
    }
    case 'template-dark': {
      const items = slice.map((p) => {
        const title = escapeHtml(p.title || '');
        const date = escapeHtml(formatDate(p.publishedAt));
        return `<a href="${detailHref}" class="group block"><article class="p-6 border border-slate-800 bg-black/40 hover:border-[var(--main-color)]/30 transition-colors"><p class="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-mono">${date}</p><h4 class="text-lg font-bold mt-3 text-[var(--text-color)] group-hover:text-[var(--main-color)] transition-colors">${title}</h4></article></a>`;
      }).join('');
      return `<section id="news" class="py-24 px-6 bg-slate-900/40 border-y border-slate-800"><div class="max-w-6xl mx-auto"><div class="flex justify-between items-end mb-10 md:mb-14"><div><h3 class="text-[var(--main-color)] text-xs tracking-[0.5em] uppercase font-mono">// News Log</h3></div><a href="${basePath}/news" class="text-[9px] tracking-[0.3em] uppercase text-slate-500 border-b border-slate-700 pb-1 hover:text-[var(--main-color)] transition-colors">View All</a></div><div class="grid md:grid-cols-2 gap-6">${items}</div></div></section>`;
    }
    case 'template-pop': {
      const items = slice.map((p) => {
        const title = escapeHtml(p.title || '');
        const date = escapeHtml(formatDate(p.publishedAt));
        return `<a href="${detailHref}" class="group block"><article class="p-6 bg-[var(--accent-color)] border-[3px] border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 transition-transform"><p class="text-xs font-black">${date}</p><h4 class="text-lg font-black mt-3">${title}</h4></article></a>`;
      }).join('');
      return `<section id="news" class="py-24 px-6 bg-white"><div class="max-w-5xl mx-auto"><div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4"><div class="inline-block px-5 py-2 bg-[var(--accent-color)] border-[3px] border-black rounded-full text-xs font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">NEWS</div><a href="${basePath}/news" class="text-[9px] font-black tracking-[0.2em] uppercase border-[2px] border-black rounded-full px-4 py-1.5 hover:bg-black hover:text-white transition-colors">すべて見る</a></div><div class="grid md:grid-cols-2 gap-6">${items}</div></div></section>`;
    }
    case 'template-portfolio': {
      const items = slice.map((p) => {
        const title = escapeHtml(p.title || '');
        const date = escapeHtml(formatDate(p.publishedAt));
        return `<a href="${detailHref}" class="group block"><article class="border border-slate-100 bg-white p-6 hover:shadow-md transition-shadow"><p class="text-[9px] tracking-[0.3em] uppercase opacity-40">${date}</p><h4 class="text-base md:text-lg font-bold mt-3 group-hover:text-[var(--accent-color)] transition-colors">${title}</h4></article></a>`;
      }).join('');
      return `<section id="news" class="py-32 px-8 md:px-[10%] bg-[var(--sub-color)]"><div class="max-w-5xl mx-auto"><div class="flex items-baseline justify-between mb-12"><h2 class="text-[9px] font-bold tracking-[0.5em] uppercase text-[var(--accent-color)]">News</h2><a href="${basePath}/news" class="text-[9px] tracking-[0.3em] uppercase border-b border-[var(--accent-color)] pb-1 text-[var(--accent-color)] hover:opacity-60 transition-opacity">View All</a></div><div class="grid md:grid-cols-2 gap-8">${items}</div></div></section>`;
    }
    case 'template-lp': {
      const items = slice.map((p) => {
        const title = escapeHtml(p.title || '');
        const excerpt = escapeHtml(p.excerpt || '');
        const date = escapeHtml(formatDate(p.publishedAt));
        return `<a href="${detailHref}" class="group block"><article class="p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow"><p class="text-[9px] font-bold tracking-[0.3em] uppercase text-slate-400 mb-3">${date}</p><h4 class="text-base md:text-lg font-bold mb-2 group-hover:text-[var(--main-color)] transition-colors">${title}</h4>${excerpt ? `<p class="text-sm text-[var(--text-light)] leading-relaxed">${excerpt}</p>` : ''}</article></a>`;
      }).join('');
      return `<section id="news" class="py-32 px-6 bg-slate-50 border-t border-slate-100"><div class="max-w-6xl mx-auto"><div class="flex items-end justify-between mb-12 md:mb-16 gap-4"><div><h3 class="text-2xl md:text-4xl font-black">最新情報</h3><span class="text-xs font-bold tracking-[0.4em] uppercase text-slate-400">News</span></div><a href="${basePath}/news" class="text-[9px] font-bold tracking-[0.3em] uppercase text-[var(--main-color)] border-b border-[var(--main-color)] pb-1 hover:opacity-70 transition-opacity shrink-0">すべて見る</a></div><div class="grid md:grid-cols-2 gap-6">${items}</div></div></section>`;
    }
    case 'template-japanese': {
      const items = slice.map((p) => {
        const title = escapeHtml(p.title || '');
        const excerpt = escapeHtml(p.excerpt || '');
        const date = escapeHtml(formatDate(p.publishedAt));
        return `<a href="${detailHref}" class="group block"><article class="border border-[var(--border-color)] p-6 hover:border-[var(--main-color)] transition-colors"><p class="text-[9px] tracking-[0.3em] uppercase opacity-40">${date}</p><h4 class="text-base font-bold mt-4 group-hover:text-[var(--main-color)] transition-colors leading-relaxed">${title}</h4>${excerpt ? `<p class="text-xs leading-loose mt-3 opacity-60">${excerpt}</p>` : ''}</article></a>`;
      }).join('');
      return `<section id="news" class="py-32 px-6"><div class="max-w-5xl mx-auto"><div class="flex items-center gap-6 mb-12 md:mb-16"><div class="w-12 h-px bg-[var(--main-color)]"></div><h3 class="text-lg tracking-[0.5em] font-bold">お知らせ</h3><div class="flex-1 h-px bg-[var(--border-color)]"></div><a href="${basePath}/news" class="text-[9px] tracking-[0.3em] uppercase border-b border-[var(--main-color)] pb-1 text-[var(--main-color)] hover:opacity-60 transition-opacity">一覧を見る</a></div><div class="grid md:grid-cols-2 gap-6">${items}</div></div></section>`;
    }
    default:
      return buildTopNewsSectionHtml(posts, basePath, defaultImageUrl);
  }
};

export const buildTopBlogSectionHtmlByTemplate = (
  posts: PostItem[],
  basePath: string,
  templateId: string,
  defaultImageUrl?: string,
): string => {
  if (posts.length === 0) return '';
  const detailHref = `${basePath}/blog-page`;
  const slice = sortPostsByTag(posts).slice(0, 2);

  switch (templateId) {
    case 'template-elegant': {
      const items = slice.map((p) => {
        const title = escapeHtml(p.title || '');
        const excerpt = escapeHtml(p.excerpt || '');
        const date = escapeHtml(formatDate(p.publishedAt));
        const imageUrl = String(defaultImageUrl || p.imageUrl || '').trim();
        const image = imageUrl ? `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(p.title || '')}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />` : '';
        return `<a href="${detailHref}" class="group block"><article><div class="aspect-[4/3] bg-stone-100 mb-6 overflow-hidden">${image}</div><p class="text-[9px] tracking-[0.3em] uppercase text-[var(--sub-color)] mb-3">${date}</p><h4 class="text-xl md:text-2xl font-extralight italic mb-3 group-hover:text-[var(--sub-color)] transition-colors tracking-wide">${title}</h4>${excerpt ? `<p class="text-sm text-[var(--text-light)] leading-relaxed font-light">${excerpt}</p>` : ''}</article></a>`;
      }).join('');
      return `<section id="blog" class="section-blog py-[var(--section-padding)] px-6"><div class="max-w-5xl mx-auto"><div class="flex flex-col md:flex-row items-baseline justify-between mb-12 md:mb-20 gap-4"><h3 class="text-[10px] tracking-[0.6em] uppercase italic text-[var(--sub-color)]">Blog</h3><a href="${basePath}/blog" class="text-[9px] tracking-[0.3em] uppercase border-b border-[var(--sub-color)] pb-1 hover:opacity-60 transition-opacity">すべての記事</a></div><div class="grid md:grid-cols-2 gap-12 md:gap-16">${items}</div></div></section>`;
    }
    case 'template-corporate': {
      const items = slice.map((p) => {
        const title = escapeHtml(p.title || '');
        const excerpt = escapeHtml(p.excerpt || '');
        const date = escapeHtml(formatDate(p.publishedAt));
        const imageUrl = String(defaultImageUrl || p.imageUrl || '').trim();
        const image = imageUrl ? `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(p.title || '')}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />` : '';
        return `<a href="${detailHref}" class="group block overflow-hidden rounded-lg border border-slate-200 hover:shadow-md transition-shadow"><div class="aspect-video bg-slate-100 overflow-hidden">${image}</div><div class="p-6"><p class="text-[9px] font-bold text-[var(--main-color)] uppercase tracking-widest mb-2">${date}</p><h4 class="text-base md:text-lg font-bold mb-2 group-hover:text-[var(--main-color)] transition-colors">${title}</h4>${excerpt ? `<p class="text-sm text-[var(--text-light)] leading-relaxed">${excerpt}</p>` : ''}</div></a>`;
      }).join('');
      return `<section id="blog" class="py-24 px-6 bg-white"><div class="max-w-6xl mx-auto"><div class="flex items-end justify-between mb-10 md:mb-14 gap-4"><div><p class="text-[9px] font-bold tracking-[0.4em] uppercase text-[var(--main-color)] mb-2">Blog</p><h3 class="text-2xl md:text-4xl font-bold text-[var(--main-dark)]">ブログ</h3></div><a href="${basePath}/blog" class="text-[9px] font-bold tracking-[0.3em] uppercase text-[var(--main-color)] border-b border-[var(--main-color)] pb-1 hover:opacity-70 transition-opacity shrink-0">すべて見る</a></div><div class="grid md:grid-cols-2 gap-8">${items}</div></div></section>`;
    }
    case 'template-natural': {
      const items = slice.map((p) => {
        const title = escapeHtml(p.title || '');
        const excerpt = escapeHtml(p.excerpt || '');
        const date = escapeHtml(formatDate(p.publishedAt));
        const imageUrl = String(defaultImageUrl || p.imageUrl || '').trim();
        const image = imageUrl ? `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(p.title || '')}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />` : '';
        return `<a href="${detailHref}" class="group block"><article class="bg-white rounded-[24px] border border-white shadow-sm overflow-hidden hover:shadow-md transition-shadow"><div class="aspect-video overflow-hidden bg-[var(--main-color)]/10">${image}</div><div class="p-6 md:p-8"><p class="text-[9px] opacity-50 mb-2">${date}</p><h4 class="font-serif text-xl text-[var(--accent-color)] mb-3 group-hover:opacity-70 transition-opacity">${title}</h4>${excerpt ? `<p class="text-sm opacity-60 leading-relaxed">${excerpt}</p>` : ''}</div></article></a>`;
      }).join('');
      return `<section id="blog" class="py-24 px-6"><div class="max-w-5xl mx-auto"><div class="text-center mb-12 md:mb-16"><h3 class="font-serif text-2xl md:text-4xl text-[var(--accent-color)]">ブログ</h3><p class="text-[9px] tracking-[0.3em] uppercase mt-2 opacity-40">Blog</p></div><div class="grid md:grid-cols-2 gap-8">${items}</div><div class="text-center mt-10"><a href="${basePath}/blog" class="inline-block text-[9px] tracking-[0.3em] uppercase border-b border-[var(--accent-color)] pb-1 text-[var(--accent-color)] hover:opacity-60 transition-opacity">すべての記事</a></div></div></section>`;
    }
    case 'template-minimal': {
      const items = slice.map((p) => {
        const title = escapeHtml(p.title || '');
        const excerpt = escapeHtml(p.excerpt || '');
        const date = escapeHtml(formatDate(p.publishedAt));
        return `<a href="${detailHref}" class="group block"><article class="py-8 border-t border-black"><p class="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--text-light)] mb-3">${date}</p><h4 class="text-lg font-light mb-3 group-hover:text-[var(--text-light)] transition-colors">${title}</h4>${excerpt ? `<p class="text-[13px] text-[var(--text-light)]">${excerpt}</p>` : ''}</article></a>`;
      }).join('');
      return `<section id="blog" class="py-32 px-8"><div class="max-w-7xl mx-auto"><div class="flex items-baseline justify-between mb-12"><h3 class="text-xs font-bold tracking-[0.4em] uppercase text-[var(--text-light)]">Blog</h3><a href="${basePath}/blog" class="text-[9px] font-bold tracking-[0.3em] uppercase border-b border-black pb-1 hover:text-[var(--text-light)] transition-colors">View All</a></div><div class="grid md:grid-cols-2 gap-10">${items}</div></div></section>`;
    }
    case 'template-dark': {
      const items = slice.map((p) => {
        const title = escapeHtml(p.title || '');
        const excerpt = escapeHtml(p.excerpt || '');
        const date = escapeHtml(formatDate(p.publishedAt));
        return `<a href="${detailHref}" class="group block"><article class="p-6 border border-slate-800 bg-black/40 hover:border-[var(--main-color)]/30 transition-colors"><p class="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-mono mb-3">${date}</p><h4 class="text-xl font-bold text-[var(--text-color)] group-hover:text-[var(--main-color)] transition-colors mb-3">${title}</h4>${excerpt ? `<p class="text-xs text-slate-500 leading-relaxed">${excerpt}</p>` : ''}</article></a>`;
      }).join('');
      return `<section id="blog" class="py-24 px-6"><div class="max-w-6xl mx-auto"><div class="flex justify-between items-end mb-10 md:mb-14"><h3 class="text-[var(--main-color)] text-xs tracking-[0.5em] uppercase font-mono">// Blog Stream</h3><a href="${basePath}/blog" class="text-[9px] tracking-[0.3em] uppercase text-slate-500 border-b border-slate-700 pb-1 hover:text-[var(--main-color)] transition-colors">View All</a></div><div class="grid md:grid-cols-2 gap-8">${items}</div></div></section>`;
    }
    case 'template-pop': {
      const items = slice.map((p) => {
        const title = escapeHtml(p.title || '');
        const excerpt = escapeHtml(p.excerpt || '');
        return `<a href="${detailHref}" class="group block"><article class="p-8 bg-white text-[var(--text-color)] border-[3px] border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 transition-transform"><h4 class="text-xl font-black mb-3">${title}</h4>${excerpt ? `<p class="text-sm font-bold opacity-70">${excerpt}</p>` : ''}</article></a>`;
      }).join('');
      return `<section id="blog" class="py-24 px-6 bg-[var(--main-color)]"><div class="max-w-5xl mx-auto text-white"><div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4"><div class="inline-block px-5 py-2 bg-white text-[var(--main-color)] border-[3px] border-black rounded-full text-xs font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">BLOG</div><a href="${basePath}/blog" class="text-[9px] font-black tracking-[0.2em] uppercase border-[2px] border-white rounded-full px-4 py-1.5 hover:bg-white hover:text-[var(--main-color)] transition-colors">すべて見る</a></div><div class="grid md:grid-cols-2 gap-8">${items}</div></div></section>`;
    }
    case 'template-portfolio': {
      const items = slice.map((p) => {
        const title = escapeHtml(p.title || '');
        const excerpt = escapeHtml(p.excerpt || '');
        const date = escapeHtml(formatDate(p.publishedAt));
        const imageUrl = String(defaultImageUrl || p.imageUrl || '').trim();
        const image = imageUrl ? `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(p.title || '')}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />` : '';
        return `<a href="${detailHref}" class="group block"><article class="border border-slate-100 bg-white overflow-hidden hover:shadow-md transition-shadow"><div class="aspect-video bg-slate-50 overflow-hidden">${image}</div><div class="p-6"><p class="text-[9px] tracking-[0.3em] uppercase opacity-40 mb-2">${date}</p><h4 class="text-base md:text-lg font-bold group-hover:text-[var(--accent-color)] transition-colors">${title}</h4>${excerpt ? `<p class="text-sm text-[var(--accent-color)] mt-2">${excerpt}</p>` : ''}</div></article></a>`;
      }).join('');
      return `<section id="blog" class="py-32 px-8 md:px-[10%]"><div class="max-w-5xl mx-auto"><div class="flex items-baseline justify-between mb-12"><h2 class="text-[9px] font-bold tracking-[0.5em] uppercase text-[var(--accent-color)]">Blog</h2><a href="${basePath}/blog" class="text-[9px] tracking-[0.3em] uppercase border-b border-[var(--accent-color)] pb-1 text-[var(--accent-color)] hover:opacity-60 transition-opacity">View All</a></div><div class="grid md:grid-cols-2 gap-8">${items}</div></div></section>`;
    }
    case 'template-lp': {
      const items = slice.map((p) => {
        const title = escapeHtml(p.title || '');
        const excerpt = escapeHtml(p.excerpt || '');
        const date = escapeHtml(formatDate(p.publishedAt));
        const imageUrl = String(defaultImageUrl || p.imageUrl || '').trim();
        const image = imageUrl ? `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(p.title || '')}" class="w-full h-full object-cover" />` : '';
        return `<a href="${detailHref}" class="group block overflow-hidden rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow"><div class="aspect-video bg-slate-100 overflow-hidden">${image}</div><div class="p-6"><p class="text-[9px] font-bold tracking-[0.3em] uppercase text-slate-400 mb-3">${date}</p><h4 class="text-base md:text-lg font-bold mb-2 group-hover:text-[var(--main-color)] transition-colors">${title}</h4>${excerpt ? `<p class="text-sm text-[var(--text-light)] leading-relaxed">${excerpt}</p>` : ''}</div></a>`;
      }).join('');
      return `<section id="blog" class="py-32 px-6 bg-white"><div class="max-w-6xl mx-auto"><div class="flex items-end justify-between mb-12 md:mb-16 gap-4"><div><h3 class="text-2xl md:text-4xl font-black">ブログ</h3><span class="text-xs font-bold tracking-[0.4em] uppercase text-slate-400">Blog</span></div><a href="${basePath}/blog" class="text-[9px] font-bold tracking-[0.3em] uppercase text-[var(--main-color)] border-b border-[var(--main-color)] pb-1 hover:opacity-70 transition-opacity shrink-0">すべて見る</a></div><div class="grid md:grid-cols-2 gap-8">${items}</div></div></section>`;
    }
    case 'template-japanese': {
      const items = slice.map((p) => {
        const title = escapeHtml(p.title || '');
        const excerpt = escapeHtml(p.excerpt || '');
        return `<a href="${detailHref}" class="group block"><article class="border border-white/20 p-8 hover:border-white/40 transition-colors"><h4 class="text-lg font-bold mb-3 group-hover:opacity-70 transition-opacity leading-relaxed">${title}</h4>${excerpt ? `<p class="text-xs leading-loose opacity-60">${excerpt}</p>` : ''}</article></a>`;
      }).join('');
      return `<section id="blog" class="py-32 px-6 bg-[var(--accent-color)] text-white"><div class="max-w-5xl mx-auto"><div class="flex items-center gap-6 mb-12 md:mb-16"><div class="w-12 h-px bg-[var(--main-color)]"></div><h3 class="text-lg tracking-[0.5em] font-bold">読み物</h3><div class="flex-1 h-px bg-white/10"></div><a href="${basePath}/blog" class="text-[9px] tracking-[0.3em] uppercase border-b border-[var(--main-color)] pb-1 text-[var(--main-color)] hover:opacity-60 transition-opacity">一覧を見る</a></div><div class="grid md:grid-cols-2 gap-8">${items}</div></div></section>`;
    }
    default:
      return buildTopBlogSectionHtml(posts, basePath, defaultImageUrl);
  }
};
