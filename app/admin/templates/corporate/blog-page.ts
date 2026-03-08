import type { TemplateVariant } from '../types';

export const corporateBlogPageTemplate: TemplateVariant = {
  id: 'variant-corporate-blog-page',
  templateId: 'template-corporate',
  name: 'Blog Detail',
  pageSlug: 'blog-page',
  description: 'Corporate / Blog detail layout',
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
        <h1 class="text-4xl md:text-5xl font-black mt-3">ブログ記事</h1>
        <p class="text-sm text-slate-500 mt-4">実務に役立つ知見をまとめています。</p>
        <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-6 lg:px-10 py-12 space-y-12 pb-20">
      <section id="top" class="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <article class="space-y-4">
          <p class="text-xs uppercase tracking-widest text-slate-400">2026.03.07</p>
          <h2 class="text-3xl font-bold">成果を出す導線設計の考え方</h2>
          <p class="text-sm text-slate-500">業種別の導線設計と運用のポイントを整理します。</p>
        </article>
        <aside class="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p class="text-xs uppercase tracking-widest text-slate-400">Author</p>
          <p class="text-sm font-bold mt-2">運用支援チーム</p>
          <p class="text-sm text-slate-500 mt-2">実績データをもとに解説。</p>
        </aside>
      </section>

      <section id="concept" class="space-y-4">
        <h3 class="text-lg font-bold">本文</h3>
        <p class="text-sm text-slate-600">導入部で背景と課題を整理し、改善の狙いを説明します。</p>
        <p class="text-sm text-slate-600">具体的な事例と施策をわかりやすく記載します。</p>
      </section>

      <section id="features" class="space-y-4">
        <h3 class="text-lg font-bold">ポイント</h3>
        <ul class="space-y-2 text-sm text-slate-600 list-disc list-inside">
          <li>CTAの配置と優先順位</li>
          <li>回遊性を高める情報設計</li>
          <li>更新に強いページ構成</li>
        </ul>
      </section>

      <section id="service" class="space-y-4">
        <h3 class="text-lg font-bold">関連記事</h3>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-2xl border border-slate-200 p-5">
            <p class="text-xs text-slate-400">2026.02.21</p>
            <p class="text-sm font-bold mt-2">問い合わせを増やす情報設計</p>
          </div>
          <div class="rounded-2xl border border-slate-200 p-5">
            <p class="text-xs text-slate-400">2026.02.10</p>
            <p class="text-sm font-bold mt-2">継続的な改善フロー</p>
          </div>
        </div>
      </section>

      <section id="company" class="rounded-3xl border border-slate-200 bg-slate-50 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p class="text-sm font-bold">記事に関するご相談</p>
          <p class="text-sm text-slate-500 mt-2">お気軽にお問い合わせください。</p>
        </div>
        <button class="px-6 py-3 bg-[var(--accent-color)] text-white text-xs font-bold tracking-[0.3em] uppercase rounded-full">Contact</button>
      </section>
    </main>
  </div>
</div>
`
};
