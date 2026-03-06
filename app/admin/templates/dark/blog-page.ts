import type { TemplateVariant } from '../types';

export const darkBlogPageTemplate: TemplateVariant = {
  id: 'variant-dark-blog-page',
  templateId: 'template-dark',
  name: 'Blog Detail',
  pageSlug: 'blog-page',
  description: 'Dark / Blog detail layout',
  html: `
<div class="template-root" style="--accent-color: #22d3ee;">
  <div class="min-h-screen font-sans text-slate-100 bg-slate-950">
    <header class="px-8 py-10 border-b border-slate-800">
      <p class="text-[10px] uppercase tracking-[0.4em] text-slate-500">Dark Template</p>
      <h1 class="text-3xl font-black mt-2">ブログ記事</h1>
      <p class="text-sm text-slate-400 mt-3">ブログ詳細ページのテストデザインです。</p>
    </header>
    <main class="max-w-3xl mx-auto px-6 py-12 space-y-10">
      <section id="top" class="space-y-4">
        <p class="text-xs uppercase tracking-widest text-slate-500">2026.03.07</p>
        <h2 class="text-2xl font-bold">ブログ記事タイトルが入ります</h2>
        <p class="text-base text-slate-400 leading-relaxed">導入文や概要がここに入ります。</p>
      </section>
      <section class="space-y-4 text-sm leading-relaxed text-slate-300">
        <p>本文テキストがここに入ります。</p>
        <p>続きの本文テキストがここに入ります。</p>
      </section>
      <section class="border-t border-slate-800 pt-6 space-y-3">
        <h3 class="text-sm font-bold">関連記事</h3>
        <ul class="space-y-2 text-sm text-slate-400">
          <li>2026.02.28 / 関連記事のタイトル</li>
          <li>2026.02.12 / もう一つの関連記事</li>
        </ul>
      </section>
    </main>
  </div>
</div>`
};