import type { TemplateVariant } from '../types';

export const modernNewsTemplate: TemplateVariant = {
  id: 'variant-modern-news',
  templateId: 'template-modern',
  name: 'News',
  pageSlug: 'news',
  description: 'Modern / News list layout',
  html: `
<div class="template-root" style="--accent-color: #3b82f6;">
  <div class="min-h-screen font-sans text-slate-900 bg-white">
    <header class="border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div class="max-w-6xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between gap-6">
        <div class="text-sm font-black tracking-[0.3em] uppercase">Studio.</div>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500"></nav>
      </div>
      <div class="max-w-6xl mx-auto px-6 lg:px-10 pb-10">
        <p class="text-[10px] uppercase tracking-[0.4em] text-slate-400">News</p>
        <h1 class="text-4xl md:text-5xl font-black mt-3">最新情報</h1>
        <p class="text-sm text-slate-500 mt-4 max-w-2xl">事業の更新・イベント・お知らせをまとめています。</p>
        <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-6 lg:px-10 py-12 space-y-12 pb-20">
      <section id="top" class="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <article class="rounded-3xl border border-slate-200 p-8 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
          <p class="text-xs uppercase tracking-widest text-slate-400">2026.03.07</p>
          <h2 class="text-2xl font-bold mt-3">ブランド刷新プロジェクトを公開しました</h2>
          <p class="text-sm text-slate-500 mt-3">設計から運用までのプロセスを整理し、成果が伝わるサイトへアップデートしました。</p>
          <div class="mt-5 flex items-center gap-3">
            <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Update</span>
            <a class="text-xs font-bold text-[var(--accent-color)]" href="#">続きを読む</a>
          </div>
        </article>
        <div class="rounded-3xl border border-slate-200 p-6 bg-slate-50">
          <p class="text-[10px] uppercase tracking-[0.3em] text-slate-400">Category</p>
          <div class="mt-4 flex flex-wrap gap-2 text-xs">
            <span class="px-3 py-1 rounded-full bg-white border border-slate-200">お知らせ</span>
            <span class="px-3 py-1 rounded-full bg-white border border-slate-200">イベント</span>
            <span class="px-3 py-1 rounded-full bg-white border border-slate-200">リリース</span>
          </div>
          <p class="text-sm text-slate-500 mt-6">最新の動きをカテゴリ別に確認できます。</p>
        </div>
      </section>

      <section class="grid gap-6 md:grid-cols-2">
        <article class="border border-slate-200 rounded-2xl p-6 bg-white">
          <p class="text-xs uppercase tracking-widest text-slate-400">2026.02.21</p>
          <h3 class="text-xl font-bold mt-2">イベント開催のお知らせ</h3>
          <p class="text-sm text-slate-500 mt-3">オンラインセミナー開催のご案内です。</p>
          <a class="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent-color)] mt-4" href="#">続きを読む</a>
        </article>
        <article class="border border-slate-200 rounded-2xl p-6 bg-white">
          <p class="text-xs uppercase tracking-widest text-slate-400">2026.02.08</p>
          <h3 class="text-xl font-bold mt-2">新サービス提供開始</h3>
          <p class="text-sm text-slate-500 mt-3">戦略設計から検証まで一貫したプランをご用意しました。</p>
          <a class="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent-color)] mt-4" href="#">続きを読む</a>
        </article>
      </section>

      <section class="rounded-3xl border border-slate-200 bg-slate-50 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p class="text-sm font-bold">プレス・取材のご相談</p>
          <p class="text-sm text-slate-500 mt-2">取材・登壇に関するお問い合わせはこちらから。</p>
        </div>
        <button class="px-6 py-3 bg-[var(--accent-color)] text-white text-xs font-bold tracking-[0.3em] uppercase rounded-full">Contact</button>
      </section>
    </main>
  </div>
</div>
`
};
