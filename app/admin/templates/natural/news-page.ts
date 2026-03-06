import type { TemplateVariant } from '../types';

export const naturalNewsPageTemplate: TemplateVariant = {
  id: 'variant-natural-news-page',
  templateId: 'template-natural',
  name: 'News Detail',
  pageSlug: 'news-page',
  description: 'Natural / News detail layout',
  html: `
<div class="template-root" style="--accent-color: #16a34a;">
  <div class="min-h-screen font-sans text-slate-900 bg-[#f7fdf7]">
    <header class="px-8 py-10 border-b border-emerald-200">
      <p class="text-[10px] uppercase tracking-[0.4em] text-emerald-400">Natural Template</p>
      <h1 class="text-3xl font-black mt-2">ニュース詳細</h1>
      <p class="text-sm text-emerald-500 mt-3">ニュース詳細ページのテストデザインです。</p>
    </header>
    <main class="max-w-3xl mx-auto px-6 py-12 space-y-10">
      <section id="top" class="space-y-4">
        <p class="text-xs uppercase tracking-widest text-emerald-400">2026.03.07</p>
        <h2 class="text-2xl font-bold">ニュースタイトルが入ります</h2>
        <p class="text-base text-emerald-600 leading-relaxed">リード文がここに入ります。</p>
      </section>
      <section class="space-y-4 text-sm leading-relaxed text-slate-700">
        <p>本文テキストがここに入ります。</p>
        <p>続きの本文テキストがここに入ります。</p>
      </section>
      <section class="border-t border-emerald-200 pt-6 space-y-3">
        <h3 class="text-sm font-bold">他のニュース</h3>
        <ul class="space-y-2 text-sm text-emerald-500">
          <li>2026.02.21 / 更新情報のタイトル</li>
          <li>2026.02.10 / イベント開催のお知らせ</li>
        </ul>
      </section>
    </main>
  </div>
</div>`
};
