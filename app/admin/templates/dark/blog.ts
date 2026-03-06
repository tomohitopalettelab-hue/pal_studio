import type { TemplateVariant } from '../types';

export const darkBlogTemplate: TemplateVariant = {
  id: 'variant-dark-blog',
  templateId: 'template-dark',
  name: 'Blog',
  pageSlug: 'blog',
  description: 'Dark / Blog list layout',
  html: `
<div class="template-root" style="--accent-color: #22d3ee;">
  <div class="min-h-screen font-sans text-slate-100 bg-slate-950">
    <header class="px-8 py-10 border-b border-slate-800 relative overflow-hidden">
      <p class="text-[10px] uppercase tracking-[0.4em] text-slate-500">Dark Template</p>
      <h1 class="text-3xl font-black mt-2">ブログ一覧</h1>
      <p class="text-sm text-slate-400 mt-3">シックなトーンのプレビューです。</p>
      <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
    </header>
    <main class="max-w-5xl mx-auto px-6 py-12 space-y-10 pb-16">
      <section id="top" class="grid gap-6 md:grid-cols-2">
        <article class="border border-slate-800 rounded-2xl p-6 bg-slate-900/40">
          <p class="text-xs uppercase tracking-widest text-slate-500">2026.03.07</p>
          <h2 class="text-xl font-bold mt-2">ブログタイトルが入ります</h2>
          <p class="text-sm text-slate-400 mt-3">概要テキストがここに入ります。</p>
          <a class="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent-color)] mt-4" href="#">続きを読む</a>
        </article>
        <article class="border border-slate-800 rounded-2xl p-6 bg-slate-900/40">
          <p class="text-xs uppercase tracking-widest text-slate-500">2026.02.21</p>
          <h2 class="text-xl font-bold mt-2">イベント告知のサンプル</h2>
          <p class="text-sm text-slate-400 mt-3">お知らせの概要が入ります。</p>
        </article>
      </section>
    </main>
  </div>
</div>
`
};
