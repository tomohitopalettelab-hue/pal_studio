import type { TemplateVariant } from '../types';

export const modernBlogPageTemplate: TemplateVariant = {
  id: 'variant-modern-blog-page',
  templateId: 'template-modern',
  name: 'Blog Detail',
  pageSlug: 'blog-page',
  description: 'Modern / Blog detail layout',
  html: `
<div class="template-root" style="--accent-color: #00B7CE;">
  <div class="min-h-screen font-sans text-slate-900 bg-white">
    <header class="px-8 py-10 border-b border-slate-200">
      <p class="text-[10px] uppercase tracking-[0.4em] text-slate-400">Modern Template</p>
      <h1 class="text-3xl font-black mt-2">ブログ記事</h1>
      <p class="text-sm text-slate-500 mt-3">ブログ詳細ページのテストデザインです。</p>
    </header>
    <main class="max-w-3xl mx-auto px-6 py-12 space-y-10">
      <section id="top" class="space-y-4">
        <p class="text-xs uppercase tracking-widest text-slate-400">2026.03.07</p>
        <h2 class="text-2xl font-bold">ブログ記事タイトルが入ります</h2>
        <p class="text-base text-slate-600 leading-relaxed">導入文や概要がここに入ります。</p>
      </section>
      <section class="space-y-4 text-sm leading-relaxed text-slate-700">
        <p>本文テキストがここに入ります。本文テキストがここに入ります。</p>
        <p>続きの本文テキストがここに入ります。</p>
      </section>
      <section class="border-t border-slate-200 pt-6 space-y-4">
        <h3 class="text-sm font-bold">関連記事</h3>
        <ul class="space-y-2 text-sm text-slate-500">
          <li>2026.02.28 / 関連記事のタイトル</li>
          <li>2026.02.12 / もう一つの関連記事</li>
        </ul>
      </section>
    </main>
  </div>
</div>`
};