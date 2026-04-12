import { templateVariants, hasTemplateId, getTemplateById } from '../../admin/templates';

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

export const syncNavFromTopPage = (html: string, topHtml: string) => {
  if (!html || !topHtml) return html;
  // TOPのheaderからnavリンク（href + テキスト）を抽出
  const topHeader = extractHeaderHtml(topHtml);
  if (!topHeader) return html;
  const linkRe = /<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  const topLinks: { href: string; text: string }[] = [];
  let m;
  while ((m = linkRe.exec(topHeader)) !== null) {
    const text = m[2].replace(/<[^>]*>/g, '').trim();
    if (text) topLinks.push({ href: m[1], text });
  }
  if (topLinks.length === 0) return html;

  // サブページのheader内のnavを探してリンクを上書き
  const headerMatch = html.match(/<header[\s\S]*?<\/header>/i);
  if (!headerMatch) return html;
  const originalHeader = headerMatch[0];

  // header内の<nav>を見つけて中身を差し替え（data-sync有無問わず）
  const updatedHeader = originalHeader.replace(/<nav[^>]*>[\s\S]*?<\/nav>/i, (navMatch) => {
    const anchorClassMatch = navMatch.match(/<a[^>]*class=["']([^"']+)["']/i);
    const anchorClassName = anchorClassMatch ? anchorClassMatch[1] : '';
    const classAttr = anchorClassName ? ` class="${anchorClassName}"` : '';
    const links = topLinks.map((link) =>
      `<a href="${link.href}"${classAttr}>${escapeHtml(link.text)}</a>`
    ).join('');
    return navMatch.replace(/>\s*[\s\S]*?<\/nav>/i, `>${links}</nav>`);
  });

  return html.replace(/<header[\s\S]*?<\/header>/i, updatedHeader);
};

export const syncNavWithSitePagesHtml = (
  html: string,
  pages: { slug: string; title: string }[],
  basePath: string,
) => {
  if (!html) return html;
  if (!/data-sync=["']site-pages["']/.test(html)) return html;

  // 1ページ（topのみ）の場合はテンプレートのアンカーリンクをそのまま残す
  const nonTopPages = pages.filter((p) => normalizePageSlug(p.slug) !== 'top');
  if (nonTopPages.length === 0) return html;

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

const renderTemplate = (template: string, vars: Record<string, string>): string => {
  let output = template;
  for (const [key, value] of Object.entries(vars)) {
    output = output.replaceAll(`{{${key}}}`, value);
  }
  return output;
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

export type ParsedHtml = {
  style: string;
  header: string;
  sections: { id: string; html: string }[];
  footer: string;
  rest: string;
};

export const parseHtmlSections = (html: string): ParsedHtml => {
  const src = String(html || '');

  // style抽出
  const styleMatch = src.match(/<style[\s\S]*?<\/style>/i);
  const style = styleMatch ? styleMatch[0] : '';

  // header抽出
  const headerMatch = src.match(/<header[\s\S]*?<\/header>/i);
  const header = headerMatch ? headerMatch[0] : '';

  // footer抽出
  const footerMatch = src.match(/<footer[\s\S]*?<\/footer>/i);
  const footer = footerMatch ? footerMatch[0] : '';

  // sections抽出（id付きsection）
  const sections: { id: string; html: string }[] = [];
  const sectionRe = /<section[^>]*id=["']([^"']+)["'][^>]*>[\s\S]*?<\/section>/gi;
  let match: RegExpExecArray | null;
  while ((match = sectionRe.exec(src)) !== null) {
    sections.push({ id: match[1], html: match[0] });
  }

  // rest: style/header/footer/sections以外の要素（loader, mobile-nav等）
  let rest = src;
  if (style) rest = rest.replace(style, '');
  if (header) rest = rest.replace(header, '');
  if (footer) rest = rest.replace(footer, '');
  for (const s of sections) {
    rest = rest.replace(s.html, '');
  }
  // 空白のみのdivラッパーなどは残す
  rest = rest.replace(/^\s+|\s+$/g, '');

  return { style, header, sections, footer, rest };
};

export const reassembleHtml = (parts: ParsedHtml): string => {
  const sectionHtml = parts.sections.map(s => s.html).join('\n');
  // 元のHTML構造を再構築: style + wrapper開始 + header + main(sections) + footer + wrapper終了 + rest
  return [
    parts.style,
    parts.header,
    sectionHtml,
    parts.footer,
    parts.rest,
  ].filter(Boolean).join('\n');
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

export const applyCustomerName = (html: string, customerName?: string) => {
  const name = String(customerName || '').trim();
  if (!name) return html;
  let output = String(html || '');
  // テンプレートのプレースホルダー「Company Name」「COMPANY NAME」を顧客名に置換
  output = output.replace(/Company\s*<span[^>]*>Name<\/span>/gi, name);
  output = output.replace(/Company Name/g, name);
  output = output.replace(/COMPANY NAME/g, name);
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

  const template = getTemplateById(templateId);
  const isBlog = basePath.includes('/blog');

  if (isBlog) {
    const cardTemplate = template.postCardTemplate;
    const listItems = sortPostsByTag(posts).map((post) => {
      const title = escapeHtml(post.title || '');
      const excerpt = escapeHtml(post.excerpt || '');
      const date = escapeHtml(formatDate(post.publishedAt));
      const imageUrl = String(defaultImageUrl || post.imageUrl || '').trim();
      const imageAlt = escapeHtml(post.imageAlt || post.title || '');
      const image = imageUrl
        ? `<img src="${escapeHtml(imageUrl)}" alt="${imageAlt}" style="width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease;">`
        : '';
      const excerptHtml = excerpt ? `<p class="text-sm text-[var(--text-light)] line-clamp-2 leading-relaxed">${excerpt}</p>` : '';
      return renderTemplate(cardTemplate, {
        href: `${basePath}/${encodeURIComponent(post.slug)}`,
        title,
        date,
        image,
        excerpt,
        excerptHtml,
        imageAlt,
      });
    }).join('\n');

    return renderTemplate(template.postListWrapper, { items: listItems });
  }

  // ニュース
  const newsTemplate = template.newsItemTemplate;
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
    const imageBlock = image
      ? `<div class="w-full md:w-48 h-32 bg-gray-100 rounded-[20px] overflow-hidden shrink-0">${image}</div>`
      : '';
    const excerptHtml = excerpt ? `<p class="text-sm text-[var(--text-light)] line-clamp-2 leading-relaxed">${excerpt}</p>` : '';
    return renderTemplate(newsTemplate, {
      href: `${basePath}/${encodeURIComponent(post.slug)}`,
      title,
      date,
      tagLabel,
      image,
      imageBlock,
      excerpt,
      excerptHtml,
      imageAlt,
    });
  }).join('\n');

  return renderTemplate(template.newsListWrapper, { items: listItems });
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

  const template = getTemplateById(templateId);
  const detailHref = `${basePath}/news-page`;
  const slice = sortPostsByTag(posts).slice(0, 2);

  const items = slice.map((p) => {
    const title = escapeHtml(p.title || '');
    const excerpt = escapeHtml(p.excerpt || '');
    const date = escapeHtml(formatDate(p.publishedAt));
    const imageUrl = String(defaultImageUrl || p.imageUrl || '').trim();
    const imageAlt = escapeHtml(p.imageAlt || p.title || '');
    const image = imageUrl
      ? `<img src="${escapeHtml(imageUrl)}" alt="${imageAlt}" style="width:100%;height:100%;object-fit:cover;">`
      : '';
    return renderTemplate(template.newsItemTemplate, {
      href: detailHref,
      title,
      date,
      image,
      imageAlt,
      excerpt,
      excerptHtml: excerpt ? `<p class="text-sm text-[var(--text-light)] mt-1 line-clamp-1">${excerpt}</p>` : '',
      tagLabel: 'お知らせ',
      imageBlock: image ? `<div class="w-full sm:w-32 h-24 bg-gray-100 rounded-[16px] overflow-hidden shrink-0">${image}</div>` : '',
    });
  }).join('');

  return renderTemplate(template.topNewsSectionTemplate, {
    items,
    newsListHref: `${basePath}/news`,
  });
};

export const buildTopBlogSectionHtmlByTemplate = (
  posts: PostItem[],
  basePath: string,
  templateId: string,
  defaultImageUrl?: string,
): string => {
  if (posts.length === 0) return '';

  const template = getTemplateById(templateId);
  const detailHref = `${basePath}/blog-page`;
  const slice = sortPostsByTag(posts).slice(0, 2);

  const items = slice.map((p) => {
    const title = escapeHtml(p.title || '');
    const excerpt = escapeHtml(p.excerpt || '');
    const date = escapeHtml(formatDate(p.publishedAt));
    const imageUrl = String(defaultImageUrl || p.imageUrl || '').trim();
    const imageAlt = escapeHtml(p.imageAlt || p.title || '');
    const image = imageUrl
      ? `<img src="${escapeHtml(imageUrl)}" alt="${imageAlt}" style="width:100%;height:100%;object-fit:cover;">`
      : '';
    return renderTemplate(template.postCardTemplate, {
      href: detailHref,
      title,
      date,
      image,
      imageAlt,
      excerpt,
      excerptHtml: excerpt ? `<p class="text-sm text-[var(--text-light)] mt-2 line-clamp-2">${excerpt}</p>` : '',
    });
  }).join('');

  return renderTemplate(template.topBlogSectionTemplate, {
    items,
    blogListHref: `${basePath}/blog`,
  });
};

// ─── Footer ─────────────────────────────────────────────────────────────────

export type FooterData = {
  companyName: string;
  address: string;
  postalCode: string;
  tel: string;
  fax?: string;
  email?: string;
  businessHours?: string;
  links: { category: string; items: { label: string; href: string }[] }[];
  copyright: string;
  socialLinks?: { platform: string; url: string }[];
};

export const buildFooterHtml = (templateId: string, footerData: FooterData): string => {
  const template = getTemplateById(templateId);
  const isWarm = template.id === 'template-warm';

  const linkCategories = (footerData.links || []).map(cat => {
    const items = cat.items.map(item =>
      `<li><a href="${escapeHtml(item.href)}" class="hover:text-[var(--main-color)] transition-colors">${escapeHtml(item.label)}</a></li>`
    ).join('');
    return `<div>
      <h4 class="${isWarm ? 'font-bold text-sm mb-6 border-l-4 border-[var(--main-color)] pl-3' : ''}" style="${!isWarm ? 'font-size:0.85rem;font-weight:500;margin-bottom:20px;' : ''}">${escapeHtml(cat.category)}</h4>
      <ul class="${isWarm ? 'space-y-3 text-sm font-bold text-gray-500' : ''}" style="${!isWarm ? 'list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:12px;font-size:0.8rem;color:#999;' : ''}">${items}</ul>
    </div>`;
  }).join('');

  const contactInfo = [
    footerData.companyName ? escapeHtml(footerData.companyName) : '',
    footerData.postalCode ? `〒${escapeHtml(footerData.postalCode)}` : '',
    footerData.address ? escapeHtml(footerData.address) : '',
    footerData.tel ? `TEL: ${escapeHtml(footerData.tel)}` : '',
    footerData.fax ? `FAX: ${escapeHtml(footerData.fax)}` : '',
    footerData.email ? `Email: ${escapeHtml(footerData.email)}` : '',
    footerData.businessHours ? `営業時間: ${escapeHtml(footerData.businessHours)}` : '',
  ].filter(Boolean).join('<br>');

  const copyright = escapeHtml(footerData.copyright || `© ${footerData.companyName}. ALL RIGHTS RESERVED.`);

  if (isWarm) {
    return `<footer class="bg-[var(--accent-color)] pt-14 pb-10 relative overflow-hidden">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
          <div class="col-span-2 md:col-span-1">
            <div class="font-black text-lg mb-4">${escapeHtml(footerData.companyName)}</div>
            <p class="text-xs font-bold text-gray-400 leading-loose">${contactInfo}</p>
          </div>
          ${linkCategories}
        </div>
        <div class="border-t border-gray-200 pt-6 text-center text-xs font-bold text-gray-400">
          <p>${copyright}</p>
        </div>
      </div>
    </footer>`;
  }

  // Noir style footer
  return `<footer style="padding:80px 0 40px;background:#f7f7f5;border-top:1px solid #e5e5e5;">
    <div style="max-width:1200px;margin:0 auto;padding:0 60px;">
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;margin-bottom:60px;">
        <div>
          <p style="font-family:'Cormorant Garamond',serif;font-size:1.1rem;font-weight:400;margin-bottom:16px;">${escapeHtml(footerData.companyName)}</p>
          <p style="font-size:0.75rem;color:#999;line-height:2;">${contactInfo}</p>
        </div>
        ${linkCategories}
      </div>
      <div style="border-top:1px solid #e5e5e5;padding-top:24px;text-align:center;">
        <p style="font-family:'Cormorant Garamond',serif;font-size:0.7rem;color:#999;letter-spacing:0.08em;">${copyright}</p>
      </div>
    </div>
  </footer>`;
};

export const applyFooterToHtml = (html: string, footerHtml: string): string => {
  if (!footerHtml) return html;
  return html.replace(/<footer[\s\S]*?<\/footer>/i, footerHtml);
};
