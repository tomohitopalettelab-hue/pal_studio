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
  paletteId?: string;
};

const buildTrackingScript = (paletteId: string): string => {
  if (!paletteId) return '';
  const consoleUrl = process.env.CONSOLE_TRACKING_URL?.trim() || 'http://localhost:3106';
  return `<script>
(function(){
  var pid="${escapeHtml(paletteId)}",u="${escapeHtml(consoleUrl)}/api/console/tracking";
  var sid=sessionStorage.getItem("_pcs")||((function(){var s=Math.random().toString(36).slice(2)+Date.now().toString(36);sessionStorage.setItem("_pcs",s);return s})());
  var d=/Mobi|Android/i.test(navigator.userAgent)?"mobile":"desktop";
  function t(p,e){try{navigator.sendBeacon?navigator.sendBeacon(u,JSON.stringify({paletteId:pid,pagePath:p,eventType:e||"pageview",referrer:document.referrer,userAgent:navigator.userAgent,deviceType:d,sessionId:sid})):fetch(u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({paletteId:pid,pagePath:p,eventType:e||"pageview",referrer:document.referrer,userAgent:navigator.userAgent,deviceType:d,sessionId:sid}),keepalive:true})}catch(x){}};
  t(location.pathname);
})();
</script>`;
};

export const ensureHtmlDocument = (html: string, options: HtmlDocumentOptions = {}) => {
  let output = String(html || '');
  const faviconUrl = String(options.faviconUrl || '').trim();
  const headHtml = String(options.headHtml || '').trim();
  const paletteId = String(options.paletteId || '').trim();
  const faviconTag = faviconUrl ? `<link rel="icon" href="${escapeHtml(faviconUrl)}" />` : '';
  const trackingScript = buildTrackingScript(paletteId);

  if (!/<html[\s>]/i.test(output)) {
    output = `<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8" />` +
             `<meta name="viewport" content="width=device-width, initial-scale=1" />` +
             `${faviconTag}` +
             `<script src="https://cdn.tailwindcss.com"></script>` +
             `${headHtml}</head><body>${output}${trackingScript}</body></html>`;
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
    if (trackingScript && !output.includes('_pcs')) {
      output = output.replace(/<\/body>/i, `${trackingScript}</body>`);
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
  defaultImageUrl?: string,
  templateId?: string,
) => {
  if (posts.length === 0) return '';

  if (templateId === 'template-warm') {
    return buildPostListHtmlWarm(posts, basePath, typeLabel, defaultImageUrl);
  }

  if (templateId === 'template-noir') {
    return buildPostListHtmlNoir(posts, basePath, typeLabel, defaultImageUrl);
  }

  const isBlog = basePath.includes('/blog');

  if (isBlog) {
    // ブログ: カードグリッド（CSS変数でどのテンプレートにも対応）
    const listItems = sortPostsByTag(posts).map((post) => {
      const title = escapeHtml(post.title || '');
      const excerpt = escapeHtml(post.excerpt || '');
      const date = escapeHtml(formatDate(post.publishedAt));
      const imageUrl = String(defaultImageUrl || post.imageUrl || '').trim();
      const imageAlt = escapeHtml(post.imageAlt || post.title || '');
      const image = imageUrl
        ? `<img src="${escapeHtml(imageUrl)}" alt="${imageAlt}" style="width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease;">`
        : '';
      return `
        <a href="${basePath}/${encodeURIComponent(post.slug)}" style="display:block;text-decoration:none;color:inherit;">
          <div style="aspect-ratio:16/9;overflow:hidden;margin-bottom:16px;background:#eee;border-radius:8px;">${image}</div>
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
            <span style="font-size:0.8rem;color:var(--text-light,#999);">${date}</span>
            <span style="font-size:0.65rem;font-weight:600;padding:3px 12px;border:1px solid var(--main-color,#333);color:var(--main-color,#333);border-radius:3px;text-transform:uppercase;">Blog</span>
          </div>
          <h3 style="font-size:1rem;font-weight:700;line-height:1.6;color:var(--text-color,#1a1a1a);">${title}</h3>
          ${excerpt ? `<p style="font-size:0.85rem;color:var(--text-light,#999);margin-top:8px;line-height:1.8;">${excerpt}</p>` : ''}
        </a>`;
    }).join('\n');

    return `<div style="max-width:1200px;margin:0 auto;padding:0 40px;"><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:32px;">${listItems}</div></div>`;
  }

  // ニュース: リスト形式（CSS変数でどのテンプレートにも対応）
  const listItems = sortPostsByTag(posts).map((post) => {
    const title = escapeHtml(post.title || '');
    const excerpt = escapeHtml(post.excerpt || '');
    const date = escapeHtml(formatDate(post.publishedAt));
    const tags = normalizeTags(post.tags);
    const tagLabel = tags.length ? escapeHtml(tags[0]) : 'お知らせ';
    const imageUrl = String(defaultImageUrl || post.imageUrl || '').trim();
    const imageAlt = escapeHtml(post.imageAlt || post.title || '');
    const image = imageUrl
      ? `<img src="${escapeHtml(imageUrl)}" alt="${imageAlt}" style="width:100%;height:100%;object-fit:cover;">`
      : '';

    return `
      <a href="${basePath}/${encodeURIComponent(post.slug)}" style="display:flex;align-items:center;gap:20px;padding:20px 0;border-bottom:1px solid var(--color-border,#e5e5e5);text-decoration:none;color:var(--text-color,#1a1a1a);transition:opacity 0.3s;">
        ${image ? `<div style="width:120px;height:80px;overflow:hidden;border-radius:6px;flex-shrink:0;background:#eee;">${image}</div>` : ''}
        <div style="flex:1;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
            <span style="font-size:0.8rem;color:var(--text-light,#999);">${date}</span>
            <span style="font-size:0.6rem;font-weight:600;padding:3px 12px;border:1px solid var(--main-color,#333);color:var(--main-color,#333);border-radius:3px;text-transform:uppercase;">${tagLabel}</span>
          </div>
          <h3 style="font-size:0.95rem;font-weight:600;line-height:1.6;">${title}</h3>
          ${excerpt ? `<p style="font-size:0.8rem;color:var(--text-light,#999);margin-top:4px;line-height:1.6;">${excerpt}</p>` : ''}
        </div>
      </a>`;
  }).join('\n');

  return `<div style="max-width:1000px;margin:0 auto;padding:0 40px;"><div style="border-top:1px solid var(--color-border,#e5e5e5);">${listItems}</div></div>`;
};

const buildPostListHtmlWarm = (
  posts: PostItem[],
  basePath: string,
  typeLabel: string,
  defaultImageUrl?: string,
) => {
  const isBlog = basePath.includes('/blog');

  if (isBlog) {
    // ブログ: カードグリッド（元の静的デザイン準拠）
    const listItems = sortPostsByTag(posts).map((post) => {
      const title = escapeHtml(post.title || '');
      const excerpt = escapeHtml(post.excerpt || '');
      const date = escapeHtml(formatDate(post.publishedAt));
      const imageUrl = String(defaultImageUrl || post.imageUrl || '').trim();
      const imageAlt = escapeHtml(post.imageAlt || post.title || '');
      const image = imageUrl
        ? `<img src="${escapeHtml(imageUrl)}" alt="${imageAlt}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">`
        : '';
      return `
        <a href="${basePath}/${encodeURIComponent(post.slug)}" class="group">
          <div class="aspect-video overflow-hidden rounded-3xl mb-5 shadow-md bg-gray-100">${image}</div>
          <div class="flex items-center gap-3 mb-3">
            <span class="text-sm font-bold text-gray-400" style="font-family:'Quicksand',sans-serif">${date}</span>
            <span class="bg-[#F4F7F9] text-[var(--main-color)] text-xs font-bold px-3 py-1 rounded-full">BLOG</span>
          </div>
          <h3 class="text-xl font-black group-hover:text-[var(--main-color)] transition-colors line-clamp-2 leading-snug mb-3">${title}</h3>
          ${excerpt ? `<p class="text-sm text-[var(--text-light)] line-clamp-2 leading-relaxed">${excerpt}</p>` : ''}
        </a>`;
    }).join('\n');

    return `
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-8">${listItems}</div>
      </div>`;
  }

  // ニュース: リスト形式（元の静的デザイン準拠）
  const listItems = sortPostsByTag(posts).map((post) => {
    const title = escapeHtml(post.title || '');
    const excerpt = escapeHtml(post.excerpt || '');
    const date = escapeHtml(formatDate(post.publishedAt));
    const imageUrl = String(defaultImageUrl || post.imageUrl || '').trim();
    const imageAlt = escapeHtml(post.imageAlt || post.title || '');
    const image = imageUrl
      ? `<img src="${escapeHtml(imageUrl)}" alt="${imageAlt}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">`
      : '';

    return `
      <a href="${basePath}/${encodeURIComponent(post.slug)}" class="group block bg-[var(--accent-color)] rounded-[30px] p-6 md:p-8 hover:shadow-lg transition-shadow">
        <div class="flex flex-col md:flex-row gap-6 items-start">
          ${image ? `<div class="w-full md:w-48 h-32 bg-gray-100 rounded-[20px] overflow-hidden shrink-0">${image}</div>` : ''}
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-sm font-bold text-gray-400" style="font-family:'Quicksand',sans-serif">${date}</span>
              <span class="bg-[#F4F7F9] text-[var(--main-color)] text-xs font-bold px-3 py-1 rounded-full">NEWS</span>
            </div>
            <h2 class="text-xl font-black group-hover:text-[var(--main-color)] transition-colors mb-3">${title}</h2>
            ${excerpt ? `<p class="text-sm text-[var(--text-light)] line-clamp-2 leading-relaxed">${excerpt}</p>` : ''}
          </div>
        </div>
      </a>`;
  }).join('\n');

  return `
    <div class="max-w-6xl mx-auto px-6">
      <div class="space-y-4">${listItems}</div>
    </div>`;
};

const buildPostListHtmlNoir = (
  posts: PostItem[],
  basePath: string,
  typeLabel: string,
  defaultImageUrl?: string,
) => {
  const isBlog = basePath.includes('/blog');

  if (isBlog) {
    const listItems = sortPostsByTag(posts).map((post) => {
      const title = escapeHtml(post.title || '');
      const date = escapeHtml(formatDate(post.publishedAt));
      const imageUrl = String(defaultImageUrl || post.imageUrl || '').trim();
      const imageAlt = escapeHtml(post.imageAlt || post.title || '');
      const image = imageUrl
        ? `<img src="${escapeHtml(imageUrl)}" alt="${imageAlt}" style="width:100%;height:100%;object-fit:cover;transition:transform 0.7s cubic-bezier(.22,1,.36,1);">`
        : '';
      return `<a href="${basePath}/${encodeURIComponent(post.slug)}" style="display:block;text-decoration:none;color:inherit;"><div style="aspect-ratio:16/9;overflow:hidden;margin-bottom:20px;background:#eee;">${image}</div><div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;"><span style="font-family:'Cormorant Garamond',serif;font-size:0.75rem;color:#999;letter-spacing:0.06em;">${date}</span><span style="font-size:0.6rem;font-weight:500;padding:3px 12px;border:1px solid var(--main-color,#c8161d);color:var(--main-color,#c8161d);letter-spacing:0.08em;text-transform:uppercase;">Blog</span></div><h3 style="font-size:0.95rem;font-weight:400;line-height:1.6;">${title}</h3></a>`;
    }).join('\n');

    return `<div style="max-width:1200px;margin:0 auto;padding:0 60px;"><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:40px 24px;">${listItems}</div></div>`;
  }

  const listItems = sortPostsByTag(posts).map((post) => {
    const title = escapeHtml(post.title || '');
    const date = escapeHtml(formatDate(post.publishedAt));
    const tags = normalizeTags(post.tags);
    const tagLabel = tags.length ? escapeHtml(tags[0]) : 'お知らせ';

    return `<a href="${basePath}/${encodeURIComponent(post.slug)}" style="display:flex;align-items:center;gap:24px;padding:24px 0;border-bottom:1px solid #e5e5e5;transition:opacity 0.3s;text-decoration:none;color:var(--text-color,#1a1a1a);"><time style="font-family:'Cormorant Garamond',serif;font-size:0.85rem;color:#999;letter-spacing:0.04em;flex-shrink:0;width:100px;">${date}</time><span style="font-size:0.6rem;font-weight:500;padding:4px 14px;border:1px solid var(--main-color,#c8161d);color:var(--main-color,#c8161d);flex-shrink:0;letter-spacing:0.08em;text-transform:uppercase;">${tagLabel}</span><span style="flex:1;font-size:0.9rem;line-height:1.6;font-weight:400;">${title}</span><svg style="width:16px;height:16px;color:#999;flex-shrink:0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"/></svg></a>`;
  }).join('\n');

  return `<div style="max-width:1000px;margin:0 auto;padding:0 60px;"><div style="border-top:1px solid #e5e5e5;">${listItems}</div></div>`;
};

export const buildTopNewsSectionHtml = (posts: PostItem[], basePath: string, defaultImageUrl?: string) => {
  if (posts.length === 0) return '';
  const detailHref = `${basePath}/news-page`;
  const items = sortPostsByTag(posts).slice(0, 2).map((post) => {
    const title = escapeHtml(post.title || '');
    const date = escapeHtml(formatDate(post.publishedAt));

    return `
      <a href="${detailHref}" style="display:flex;align-items:center;gap:20px;padding:20px 0;border-bottom:1px solid var(--color-border,#e5e5e5);text-decoration:none;color:var(--text-color,#1a1a1a);transition:opacity 0.3s;">
        <span style="font-size:0.8rem;color:var(--text-light,#999);flex-shrink:0;width:100px;">${date}</span>
        <span style="font-size:0.6rem;font-weight:600;padding:3px 12px;border:1px solid var(--main-color,#333);color:var(--main-color,#333);border-radius:3px;flex-shrink:0;">NEWS</span>
        <span style="flex:1;font-size:0.9rem;line-height:1.6;font-weight:500;">${title}</span>
      </a>`;
  }).join('');

  return `
    <section id="news" style="padding:80px 0;background:var(--accent-color,#f7f7f5);">
      <div style="max-width:1000px;margin:0 auto;padding:0 40px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:40px;">
          <div>
            <p style="font-size:0.7rem;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:var(--main-color,#333);margin-bottom:8px;">ニュース</p>
            <h3 style="font-size:clamp(1.5rem,3vw,2rem);font-weight:900;">最新のお知らせ</h3>
          </div>
          <a href="${basePath}/news" style="font-size:0.75rem;font-weight:600;border-bottom:1px solid var(--main-color,#333);padding-bottom:4px;text-decoration:none;color:var(--text-color,#1a1a1a);">すべて見る</a>
        </div>
        <div style="border-top:1px solid var(--color-border,#e5e5e5);">${items}</div>
      </div>
    </section>`;
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
      ? `<img src="${escapeHtml(imageUrl)}" alt="${imageAlt}" style="width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease;">`
      : '';

    return `
      <a href="${detailHref}" style="display:block;text-decoration:none;color:inherit;">
        <div style="aspect-ratio:16/9;overflow:hidden;margin-bottom:16px;background:#eee;border-radius:8px;">${image}</div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
          <span style="font-size:0.8rem;color:var(--text-light,#999);">${escapeHtml(formatDate(post.publishedAt))}</span>
          <span style="font-size:0.65rem;font-weight:600;padding:3px 12px;border:1px solid var(--main-color,#333);color:var(--main-color,#333);border-radius:3px;">BLOG</span>
        </div>
        <h4 style="font-size:1.1rem;font-weight:700;line-height:1.5;color:var(--text-color,#1a1a1a);">${title}</h4>
        ${excerpt ? `<p style="font-size:0.85rem;color:var(--text-light,#999);margin-top:8px;line-height:1.8;">${excerpt}</p>` : ''}
      </a>`;
  }).join('');

  return `
    <section id="blog" style="padding:80px 0;background:var(--bg-color,#fff);">
      <div style="max-width:1200px;margin:0 auto;padding:0 40px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:40px;">
          <div>
            <p style="font-size:0.7rem;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:var(--main-color,#333);margin-bottom:8px;">ブログ</p>
            <h3 style="font-size:clamp(1.5rem,3vw,2rem);font-weight:900;">最新の記事</h3>
          </div>
          <a href="${basePath}/blog" style="font-size:0.75rem;font-weight:600;border-bottom:1px solid var(--main-color,#333);padding-bottom:4px;text-decoration:none;color:var(--text-color,#1a1a1a);">すべて見る</a>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:32px;">
          ${items}
        </div>
      </div>
    </section>`;
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
    case 'template-warm': {
      const items = slice.map((p) => {
        const title = escapeHtml(p.title || '');
        const excerpt = escapeHtml(p.excerpt || '');
        const date = escapeHtml(formatDate(p.publishedAt));
        const imageUrl = String(defaultImageUrl || p.imageUrl || '').trim();
        const image = imageUrl ? `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(p.title || '')}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />` : '';
        return `<a href="${detailHref}" class="group block"><article class="flex flex-col sm:flex-row gap-4 p-5 bg-[var(--accent-color)] rounded-[24px] hover:shadow-lg transition-shadow"><div class="w-full sm:w-32 h-24 bg-gray-100 rounded-[16px] overflow-hidden shrink-0">${image}</div><div><p class="text-xs font-bold text-[var(--main-color)] mb-2" style="font-family:'Quicksand',sans-serif">${date}</p><h4 class="text-base font-bold group-hover:text-[var(--main-color)] transition-colors line-clamp-2">${title}</h4>${excerpt ? `<p class="text-sm text-[var(--text-light)] mt-1 line-clamp-1">${excerpt}</p>` : ''}</div></article></a>`;
      }).join('');
      return `<section id="news" class="py-20 bg-white relative overflow-hidden"><div class="max-w-6xl mx-auto px-6"><div class="flex flex-col md:flex-row justify-between items-end mb-12"><div><h2 class="text-sm font-bold tracking-widest text-[var(--main-color)] uppercase mb-2" style="font-family:'Quicksand',sans-serif">NEWS</h2><h3 class="text-3xl font-black">ニュース</h3></div><a href="${basePath}/news" class="text-sm font-bold border-b-2 border-[var(--main-color)] pb-1 mt-4 md:mt-0 hover:text-[var(--main-color)] transition-all">VIEW ALL</a></div><div class="grid md:grid-cols-2 gap-6">${items}</div></div></section>`;
    }
    case 'template-noir': {
      const items = slice.map((p) => {
        const title = escapeHtml(p.title || '');
        const date = escapeHtml(formatDate(p.publishedAt));
        return `<a href="${detailHref}" class="group block"><article style="display:flex;align-items:center;gap:24px;padding:24px 0;border-bottom:1px solid #e5e5e5;transition:opacity 0.3s;"><time style="font-family:'Cormorant Garamond',serif;font-size:0.85rem;color:#999;letter-spacing:0.04em;flex-shrink:0;width:100px;">${date}</time><span style="font-size:0.65rem;font-weight:500;padding:3px 14px;border:1px solid #e5e5e5;color:#999;flex-shrink:0;">お知らせ</span><p style="flex:1;font-size:0.9rem;line-height:1.6;">${title}</p><span style="font-family:'Cormorant Garamond',serif;color:#999;font-size:1rem;flex-shrink:0;transition:transform 0.3s;">→</span></article></a>`;
      }).join('');
      return `<section id="news" style="padding:140px 0;background:#f7f7f5;"><div style="max-width:1200px;margin:0 auto;padding:0 60px;"><div style="margin-bottom:56px;"><span style="font-family:'Cormorant Garamond',serif;font-size:0.9rem;font-weight:300;color:#999;display:block;margin-bottom:16px;">( News )</span><h3 style="font-family:'Cormorant Garamond',serif;font-size:clamp(2rem,4vw,3rem);font-weight:300;letter-spacing:-0.02em;">Latest Updates</h3></div><div style="margin-bottom:48px;">${items}</div><div style="text-align:center;"><a href="${basePath}/news" style="display:inline-flex;align-items:center;gap:16px;font-family:'Cormorant Garamond',serif;font-size:0.95rem;padding:14px 32px;border:1px solid #e5e5e5;transition:all 0.4s;color:#1a1a1a;text-decoration:none;">View All News <span>→</span></a></div></div></section>`;
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
    case 'template-warm': {
      const items = slice.map((p) => {
        const title = escapeHtml(p.title || '');
        const excerpt = escapeHtml(p.excerpt || '');
        const date = escapeHtml(formatDate(p.publishedAt));
        const imageUrl = String(defaultImageUrl || p.imageUrl || '').trim();
        const image = imageUrl ? `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(p.title || '')}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />` : '';
        return `<a href="${detailHref}" class="group"><div class="aspect-video overflow-hidden rounded-3xl mb-4 shadow-md">${image}</div><div class="flex items-center gap-3 mb-3"><span class="text-sm font-bold text-gray-400" style="font-family:'Quicksand',sans-serif">${date}</span><span class="bg-[var(--accent-color)] text-[var(--main-color)] text-xs font-bold px-3 py-1 rounded-full">BLOG</span></div><h4 class="text-lg font-bold group-hover:text-[var(--main-color)] transition-all line-clamp-2">${title}</h4>${excerpt ? `<p class="text-sm text-[var(--text-light)] mt-2 line-clamp-2">${excerpt}</p>` : ''}</a>`;
      }).join('');
      return `<section id="blog" class="py-20 bg-[var(--accent-color)] relative overflow-hidden"><div class="max-w-6xl mx-auto px-6"><div class="flex flex-col md:flex-row justify-between items-end mb-12"><div><h2 class="text-sm font-bold tracking-widest text-[var(--main-color)] uppercase mb-2" style="font-family:'Quicksand',sans-serif">BLOG</h2><h3 class="text-3xl font-black">ブログ</h3></div><a href="${basePath}/blog" class="text-sm font-bold border-b-2 border-[var(--main-color)] pb-1 mt-4 md:mt-0 hover:text-[var(--main-color)] transition-all">VIEW ALL</a></div><div class="grid md:grid-cols-3 gap-6">${items}</div></div></section>`;
    }
    case 'template-noir': {
      const items = slice.map((p) => {
        const title = escapeHtml(p.title || '');
        const excerpt = escapeHtml(p.excerpt || '');
        const date = escapeHtml(formatDate(p.publishedAt));
        const imageUrl = String(defaultImageUrl || p.imageUrl || '').trim();
        const image = imageUrl ? `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(p.title || '')}" style="width:100%;height:100%;object-fit:cover;transition:transform 0.8s cubic-bezier(0.22,1,0.36,1);" />` : '';
        return `<a href="${detailHref}" class="group" style="display:block;"><article><div style="aspect-ratio:3/2;overflow:hidden;margin-bottom:16px;background:#eee;">${image}</div><span style="font-family:'Cormorant Garamond',serif;font-size:0.75rem;color:#999;letter-spacing:0.06em;display:block;margin-bottom:6px;">${date}</span><h4 style="font-family:'Cormorant Garamond',serif;font-size:1.1rem;font-weight:400;letter-spacing:0.01em;transition:opacity 0.3s;">${title}</h4>${excerpt ? `<p style="font-size:0.8rem;color:#999;margin-top:8px;line-height:1.8;font-weight:300;">${excerpt}</p>` : ''}</article></a>`;
      }).join('');
      return `<section id="blog" style="padding:160px 0;background:#fff;"><div style="max-width:1200px;margin:0 auto;padding:0 60px;"><div style="margin-bottom:72px;"><span style="font-family:'Cormorant Garamond',serif;font-size:0.9rem;font-weight:300;color:#999;display:block;margin-bottom:16px;">( Blog )</span><h3 style="font-family:'Cormorant Garamond',serif;font-size:clamp(2rem,4vw,3rem);font-weight:300;letter-spacing:-0.02em;">Latest Posts</h3></div><div style="display:grid;grid-template-columns:repeat(2,1fr);gap:48px;margin-bottom:64px;">${items}</div><div style="text-align:center;"><a href="${basePath}/blog" style="display:inline-flex;align-items:center;gap:16px;font-family:'Cormorant Garamond',serif;font-size:0.95rem;padding:14px 32px;border:1px solid #e5e5e5;transition:all 0.4s;color:#1a1a1a;text-decoration:none;">View All Posts <span>→</span></a></div></div></section>`;
    }
    default:
      return buildTopBlogSectionHtml(posts, basePath, defaultImageUrl);
  }
};
