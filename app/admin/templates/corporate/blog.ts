import type { TemplateVariant } from '../types';

export const corporateBlogTemplate: TemplateVariant = {
  id: 'variant-corporate-blog',
  templateId: 'template-corporate',
  name: 'Blog',
  pageSlug: 'blog',
  description: 'Corporate / Blog list layout',
  html: `
<div class="template-root" style="--accent-color: #1e40af;">
  <div class="min-h-screen font-sans text-slate-900 bg-white">
    <header class="border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div class="max-w-6xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between gap-6">
        <div class="text-xs font-black tracking-[0.3em] uppercase">Corporate.</div>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500"></nav>
      </div>
      <div class="max-w-6xl mx-auto px-6 lg:px-10 pb-10">
        <p class="text-[10px] uppercase tracking-[0.4em] text-slate-400">Blog</p>
        <h1 class="text-4xl md:text-5xl font-black mt-3">ブログ一覧</h1>
        <p class="text-sm text-slate-500 mt-4">事業運営に役立つナレッジを共有します。</p>
        <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-6 lg:px-10 py-12 space-y-12 pb-20">
      <section id="top" class="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <article class="rounded-3xl border border-slate-200 p-8 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
          <p class="text-xs uppercase tracking-widest text-slate-400">2026.03.07</p>
          <h2 class="text-2xl font-bold mt-3">成果を出す導線設計の考え方</h2>
          <p class="text-sm text-slate-500 mt-3">業種別の導線設計と運用のポイントを整理します。</p>
          <a class="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent-color)] mt-4" href="#">続きを読む</a>
        </article>
        <aside class="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p class="text-[10px] uppercase tracking-[0.3em] text-slate-400">Category</p>
          <div class="mt-4 flex flex-wrap gap-2 text-xs">
            <span class="px-3 py-1 rounded-full bg-white border border-slate-200">運用</span>
            <span class="px-3 py-1 rounded-full bg-white border border-slate-200">改善</span>
            <span class="px-3 py-1 rounded-full bg-white border border-slate-200">戦略</span>
          </div>
        </aside>
      </section>

      <section class="grid gap-6 md:grid-cols-2">
        <article class="border border-slate-200 rounded-2xl p-6 bg-white">
          <p class="text-xs uppercase tracking-widest text-slate-400">2026.02.21</p>
          <h3 class="text-xl font-bold mt-2">問い合わせを増やす情報設計</h3>
          <p class="text-sm text-slate-500 mt-3">成果につながる情報整理の方法を紹介します。</p>
          <a class="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent-color)] mt-4" href="#">続きを読む</a>
        </article>
        <article class="border border-slate-200 rounded-2xl p-6 bg-white">
          <p class="text-xs uppercase tracking-widest text-slate-400">2026.02.10</p>
          <h3 class="text-xl font-bold mt-2">継続的な改善フロー</h3>
          <p class="text-sm text-slate-500 mt-3">計測と改善のサイクルを整理します。</p>
          <a class="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent-color)] mt-4" href="#">続きを読む</a>
        </article>
      </section>

      <section class="rounded-3xl border border-slate-200 bg-slate-50 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p class="text-sm font-bold">更新情報の通知</p>
          <p class="text-sm text-slate-500 mt-2">最新のナレッジをメールでお届けします。</p>
        </div>
        <button class="px-6 py-3 bg-[var(--accent-color)] text-white text-xs font-bold tracking-[0.3em] uppercase rounded-full">Subscribe</button>
      </section>
    </main>
  </div>
</div>
`
};
