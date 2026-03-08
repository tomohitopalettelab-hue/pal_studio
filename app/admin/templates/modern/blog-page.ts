import type { TemplateVariant } from '../types';

export const modernBlogPageTemplate: TemplateVariant = {
  id: 'variant-modern-blog-page',
  templateId: 'template-modern',
  name: 'Blog Detail',
  pageSlug: 'blog-page',
  description: 'Modern / Blog detail layout',
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
        <h1 class="text-4xl md:text-5xl font-black mt-3">ブログ記事</h1>
        <p class="text-sm text-slate-500 mt-4">読みやすさと理解のしやすさを重視した構成です。</p>
        <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-6 lg:px-10 py-12 space-y-12 pb-20">
      <section id="top" class="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <article class="space-y-4">
          <p class="text-xs uppercase tracking-widest text-slate-400">2026.03.07</p>
          <h2 class="text-3xl font-bold">成果が続くサイト設計の考え方</h2>
          <p class="text-sm text-slate-500">運用フェーズまで見据えた設計のポイントを解説します。</p>
        </article>
        <aside class="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p class="text-xs uppercase tracking-widest text-slate-400">Author</p>
          <p class="text-sm font-bold mt-2">ディレクター / 佐藤</p>
          <p class="text-sm text-slate-500 mt-2">ブランド設計と運用支援を担当。</p>
        </aside>
      </section>

      <section id="concept" class="space-y-4">
        <h3 class="text-lg font-bold">本文</h3>
        <p class="text-sm text-slate-600">導入部として、背景や課題を丁寧に説明します。読み手が状況を把握できる流れを意識します。</p>
        <p class="text-sm text-slate-600">具体的な施策や判断の根拠、改善後の効果などをわかりやすく記載します。</p>
      </section>

      <section id="features" class="space-y-4">
        <h3 class="text-lg font-bold">ポイント</h3>
        <ul class="space-y-2 text-sm text-slate-600 list-disc list-inside">
          <li>更新頻度を見越した導線設計</li>
          <li>意思決定を後押しするCTA配置</li>
          <li>分析から改善につなげる運用計画</li>
        </ul>
      </section>

      <section id="service" class="space-y-4">
        <h3 class="text-lg font-bold">関連記事</h3>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-2xl border border-slate-200 p-5">
            <p class="text-xs text-slate-400">2026.02.21</p>
            <p class="text-sm font-bold mt-2">ブランドストーリーの作り方</p>
          </div>
          <div class="rounded-2xl border border-slate-200 p-5">
            <p class="text-xs text-slate-400">2026.02.10</p>
            <p class="text-sm font-bold mt-2">運用で差がつく更新設計</p>
          </div>
        </div>
      </section>

      <section id="company" class="rounded-3xl border border-slate-200 bg-slate-50 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p class="text-sm font-bold">記事に関するご相談</p>
          <p class="text-sm text-slate-500 mt-2">ご質問はお問い合わせフォームからお願いします。</p>
        </div>
        <button class="px-6 py-3 bg-[var(--accent-color)] text-white text-xs font-bold tracking-[0.3em] uppercase rounded-full">Contact</button>
      </section>
    </main>
  </div>
</div>
`
};
