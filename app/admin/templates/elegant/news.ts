import type { TemplateVariant } from '../types';

export const elegantNewsTemplate: TemplateVariant = {
  id: 'variant-elegant-news',
  templateId: 'template-elegant',
  name: 'News',
  pageSlug: 'news',
  description: 'Elegant / News list layout',
  html: `
<div class="template-root" style="--accent-color: #8c764b;">
  <div class="min-h-screen font-serif text-slate-900 bg-[#fdfbf7]">
    <header class="px-10 py-12 border-b border-black/10">
      <p class="text-[10px] uppercase tracking-[0.4em] text-black/40">Elegant Template</p>
      <h1 class="text-3xl font-light mt-3">ニュース一覧</h1>
      <p class="text-sm text-black/60 mt-3">最新情報の一覧を表示するテストページです。</p>
    </header>
    <main class="max-w-5xl mx-auto px-6 py-14 space-y-8">
      <section id="top" class="space-y-6">
        <article class="border border-black/10 rounded-2xl p-6">
          <p class="text-xs uppercase tracking-widest text-black/40">2026.03.07</p>
          <h2 class="text-xl font-semibold mt-2">ニュースタイトルが入ります</h2>
          <p class="text-sm text-black/60 mt-3">概要テキストがここに入ります。</p>
        </article>
        <article class="border border-black/10 rounded-2xl p-6">
          <p class="text-xs uppercase tracking-widest text-black/40">2026.02.21</p>
          <h2 class="text-xl font-semibold mt-2">イベント告知のサンプル</h2>
          <p class="text-sm text-black/60 mt-3">お知らせの概要が入ります。</p>
        </article>
      </section>
    </main>
  </div>
</div>`
};
