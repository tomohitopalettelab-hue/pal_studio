import type { TemplateVariant } from '../types';

export const elegantBlogPageTemplate: TemplateVariant = {
  id: 'variant-elegant-blog-page',
  templateId: 'template-elegant',
  name: 'Blog Detail',
  pageSlug: 'blog-page',
  description: 'Elegant / Blog detail layout',
  html: `
<div class="template-root" style="--accent-color: #8c764b;">
  <div class="min-h-screen font-serif text-slate-900 bg-[#fdfbf7]">
    <header class="px-10 py-12 border-b border-black/10">
      <p class="text-[10px] uppercase tracking-[0.4em] text-black/40">Elegant Template</p>
      <h1 class="text-3xl font-light mt-3">ブログ記事</h1>
      <p class="text-sm text-black/60 mt-3">ブログ詳細ページのテストデザインです。</p>
    </header>
    <main class="max-w-3xl mx-auto px-6 py-14 space-y-10">
      <section id="top" class="space-y-4">
        <p class="text-xs uppercase tracking-widest text-black/40">2026.03.07</p>
        <h2 class="text-2xl font-semibold">ブログ記事タイトルが入ります</h2>
        <p class="text-base text-black/60 leading-relaxed">導入文や概要がここに入ります。</p>
      </section>
      <section class="space-y-4 text-sm leading-relaxed text-black/70">
        <p>本文テキストがここに入ります。</p>
        <p>続きの本文テキストがここに入ります。</p>
      </section>
      <section class="border-t border-black/10 pt-6 space-y-3">
        <h3 class="text-sm font-semibold">関連記事</h3>
        <ul class="space-y-2 text-sm text-black/60">
          <li>2026.02.28 / 関連記事のタイトル</li>
          <li>2026.02.12 / もう一つの関連記事</li>
        </ul>
      </section>
    </main>
  </div>
</div>`
};