import type { TemplateVariant } from '../types';

export const naturalNewsTemplate: TemplateVariant = {
  id: 'variant-natural-news',
  templateId: 'template-natural',
  name: 'News',
  pageSlug: 'news',
  description: 'Natural / News list layout',
  html: `
<div class="template-root" style="--accent-color: #16a34a;">
  <div class="min-h-screen font-sans text-slate-900 bg-[#f7fdf7]">
    <header class="px-8 py-10 border-b border-emerald-200 relative overflow-hidden">
      <p class="text-[10px] uppercase tracking-[0.4em] text-emerald-400">Natural Template</p>
      <h1 class="text-3xl font-black mt-2">ニュース一覧</h1>
      <p class="text-sm text-emerald-500 mt-3">ナチュラルで柔らかな雰囲気のプレビューです。</p>
      <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
    </header>
    <main class="max-w-5xl mx-auto px-6 py-12 space-y-10 pb-16">
      <section id="top" class="grid gap-6 md:grid-cols-2">
        <article class="border border-emerald-200 rounded-2xl p-6 bg-white">
          <p class="text-xs uppercase tracking-widest text-emerald-400">2026.03.07</p>
          <h2 class="text-xl font-bold mt-2">ニュースタイトルが入ります</h2>
          <p class="text-sm text-emerald-500 mt-3">概要テキストがここに入ります。</p>
          <a class="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent-color)] mt-4" href="#">続きを読む</a>
        </article>
        <article class="border border-emerald-200 rounded-2xl p-6 bg-white">
          <p class="text-xs uppercase tracking-widest text-emerald-400">2026.02.21</p>
          <h2 class="text-xl font-bold mt-2">イベント告知のサンプル</h2>
          <p class="text-sm text-emerald-500 mt-3">お知らせの概要が入ります。</p>
        </article>
      </section>
    </main>
  </div>
</div>
`
};
