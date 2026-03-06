import type { TemplateVariant } from '../types';

export const elegantNewsPageTemplate: TemplateVariant = {
  id: 'variant-elegant-news-page',
  templateId: 'template-elegant',
  name: 'News Detail',
  pageSlug: 'news-page',
  description: 'Elegant / News detail layout',
  html: `
<div class="template-root" style="--accent-color: #8c764b;">
  <div class="min-h-screen font-serif text-slate-900 bg-[#fdfbf7]">
    <header class="px-10 py-12 border-b border-black/10">
      <p class="text-[10px] uppercase tracking-[0.4em] text-black/40">Elegant Template</p>
      <h1 class="text-3xl font-light mt-3">ニュース詳細</h1>
      <p class="text-sm text-black/60 mt-3">ニュース詳細ページのテストデザインです。</p>
    </header>
    <main class="max-w-3xl mx-auto px-6 py-14 space-y-10">
      <section id="top" class="space-y-4">
        <p class="text-xs uppercase tracking-widest text-black/40">2026.03.07</p>
        <h2 class="text-2xl font-semibold">ニュースタイトルが入ります</h2>
        <p class="text-base text-black/60 leading-relaxed">リード文がここに入ります。</p>
      </section>
      <section class="space-y-4 text-sm leading-relaxed text-black/70">
        <p>本文テキストがここに入ります。</p>
        <p>続きの本文テキストがここに入ります。</p>
      </section>
      <section class="border-t border-black/10 pt-6 space-y-3">
        <h3 class="text-sm font-semibold">他のニュース</h3>
        <ul class="space-y-2 text-sm text-black/60">
          <li>2026.02.21 / 更新情報のタイトル</li>
          <li>2026.02.10 / イベント開催のお知らせ</li>
        </ul>
      </section>
    </main>
  </div>
</div>`
};
