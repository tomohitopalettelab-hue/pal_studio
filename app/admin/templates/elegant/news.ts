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
    <header class="px-10 py-12 border-b border-black/10 relative overflow-hidden">
      <p class="text-[10px] uppercase tracking-[0.4em] text-black/40">Elegant Template</p>
      <h1 class="text-3xl font-light mt-3">ニュース一覧</h1>
      <p class="text-sm text-black/60 mt-3">上質な雰囲気を意識したプレビューです。</p>
      <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
    </header>
    <main class="max-w-5xl mx-auto px-6 py-14 space-y-12 pb-16">
      <section id="top" class="grid gap-6 md:grid-cols-2">
        <article class="border border-black/10 rounded-2xl p-6">
          <p class="text-xs uppercase tracking-widest text-black/40">2026.03.07</p>
          <h2 class="text-xl font-bold mt-2">ニュースタイトルが入ります</h2>
          <p class="text-sm text-black/60 mt-3">概要テキストがここに入ります。</p>
          <a class="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent-color)] mt-4" href="#">続きを読む</a>
        </article>
        <article class="border border-black/10 rounded-2xl p-6">
          <p class="text-xs uppercase tracking-widest text-black/40">2026.02.21</p>
          <h2 class="text-xl font-bold mt-2">イベント告知のサンプル</h2>
          <p class="text-sm text-black/60 mt-3">お知らせの概要が入ります。</p>
        </article>
      </section>
    </main>
  </div>
</div>
`
};
