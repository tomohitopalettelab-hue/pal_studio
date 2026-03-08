import type { TemplateVariant } from '../types';

export const modernBlogTemplate: TemplateVariant = {
  id: 'variant-modern-blog',
  templateId: 'template-modern',
  name: 'Blog',
  pageSlug: 'blog',
  description: 'Modern / Blog list layout',
  html: `
<div class="template-root" style="--accent-color: #3b82f6;">
  <div class="min-h-screen font-sans text-slate-900 bg-white">
    <header class="border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div class="max-w-6xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between gap-6">
        <div class="text-sm font-black tracking-[0.3em] uppercase">Studio.</div>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500"></nav>
      </div>
      <div class="max-w-6xl mx-auto px-6 lg:px-10 pb-10">
        <p class="text-[10px] uppercase tracking-[0.4em] text-slate-400">Blog</p>
        <h1 class="text-4xl md:text-5xl font-black mt-3">インサイト</h1>
        <p class="text-sm text-slate-500 mt-4">制作の裏側や運用知見を整理して共有します。</p>
        <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-6 lg:px-10 py-12 space-y-12 pb-20">
      <section id="top" class="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <article class="rounded-3xl border border-slate-200 p-8 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
          <p class="text-xs uppercase tracking-widest text-slate-400">2026.03.07</p>
          <h2 class="text-2xl font-bold mt-3">成果が続くサイト設計の考え方</h2>
          <p class="text-sm text-slate-500 mt-3">分析・設計・改善の流れを一つのストーリーとして整理します。</p>
          <a class="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent-color)] mt-4" href="#">続きを読む</a>
        </article>
        <aside class="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p class="text-[10px] uppercase tracking-[0.3em] text-slate-400">Category</p>
          <div class="mt-4 flex flex-wrap gap-2 text-xs">
            <span class="px-3 py-1 rounded-full bg-white border border-slate-200">戦略</span>
            <span class="px-3 py-1 rounded-full bg-white border border-slate-200">デザイン</span>
            <span class="px-3 py-1 rounded-full bg-white border border-slate-200">運用</span>
          </div>
          <p class="text-sm text-slate-500 mt-6">カテゴリ別に読みたいテーマを選べます。</p>
        </aside>
      </section>

      <section class="grid gap-6 md:grid-cols-2">
        <article class="border border-slate-200 rounded-2xl p-6 bg-white">
          <p class="text-xs uppercase tracking-widest text-slate-400">2026.02.21</p>
          <h3 class="text-xl font-bold mt-2">ブランドストーリーの作り方</h3>
          <p class="text-sm text-slate-500 mt-3">ヒアリング内容を魅力的に整理する方法を紹介。</p>
          <a class="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent-color)] mt-4" href="#">続きを読む</a>
        </article>
        <article class="border border-slate-200 rounded-2xl p-6 bg-white">
          <p class="text-xs uppercase tracking-widest text-slate-400">2026.02.10</p>
          <h3 class="text-xl font-bold mt-2">運用で差がつく更新設計</h3>
          <p class="text-sm text-slate-500 mt-3">更新負荷を下げるための設計ポイント。</p>
          <a class="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent-color)] mt-4" href="#">続きを読む</a>
        </article>
      </section>

      <section class="rounded-3xl border border-slate-200 bg-slate-50 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p class="text-sm font-bold">最新記事の更新通知</p>
          <p class="text-sm text-slate-500 mt-2">更新情報をメールで受け取る登録案内です。</p>
        </div>
        <button class="px-6 py-3 bg-[var(--accent-color)] text-white text-xs font-bold tracking-[0.3em] uppercase rounded-full">Subscribe</button>
      </section>
    </main>
  </div>
</div>
`
};
