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
    <header class="border-b border-black/10 bg-[#fdfbf7]/90 backdrop-blur-xl">
      <div class="max-w-6xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between gap-6">
        <div class="text-xs font-bold tracking-[0.4em] uppercase">Maison.</div>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.4em] text-black/50"></nav>
      </div>
      <div class="max-w-6xl mx-auto px-6 lg:px-12 pb-10">
        <p class="text-[10px] uppercase tracking-[0.4em] text-black/40">News</p>
        <h1 class="text-4xl md:text-5xl font-light mt-3">ニュース詳細</h1>
        <p class="text-sm text-black/60 mt-4">更新の背景や意図を丁寧にお伝えします。</p>
        <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-6 lg:px-12 py-14 space-y-12 pb-20">
      <section id="top" class="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <article class="space-y-4">
          <p class="text-xs uppercase tracking-widest text-black/40">2026.03.07</p>
          <h2 class="text-3xl font-bold">ブランドセミナー開催のお知らせ</h2>
          <p class="text-sm text-black/60">新しい取り組みや制作事例をまとめてご案内します。</p>
        </article>
        <aside class="rounded-3xl border border-black/10 bg-white/70 p-6">
          <p class="text-xs uppercase tracking-widest text-black/40">Tags</p>
          <div class="mt-3 flex flex-wrap gap-2 text-xs">
            <span class="px-3 py-1 rounded-full bg-white border border-black/10">イベント</span>
            <span class="px-3 py-1 rounded-full bg-white border border-black/10">お知らせ</span>
          </div>
        </aside>
      </section>

      <section id="concept" class="space-y-4">
        <h3 class="text-lg font-bold">本文</h3>
        <p class="text-sm text-black/60">背景や目的を丁寧に説明し、イベントの価値を伝えます。</p>
        <p class="text-sm text-black/60">詳細な内容、開催日時、参加方法などを整理して記載します。</p>
      </section>

      <section id="features" class="space-y-4">
        <h3 class="text-lg font-bold">関連情報</h3>
        <ul class="space-y-2 text-sm text-black/60 list-disc list-inside">
          <li>ご参加にあたっての注意事項</li>
          <li>関連する制作事例の紹介</li>
          <li>アーカイブ配信の案内</li>
        </ul>
      </section>

      <section id="service" class="space-y-4">
        <h3 class="text-lg font-bold">他のニュース</h3>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-2xl border border-black/10 p-5 bg-white/70">
            <p class="text-xs text-black/40">2026.02.21</p>
            <p class="text-sm font-bold mt-2">新サービス公開</p>
          </div>
          <div class="rounded-2xl border border-black/10 p-5 bg-white/70">
            <p class="text-xs text-black/40">2026.02.10</p>
            <p class="text-sm font-bold mt-2">展示会出展のご案内</p>
          </div>
        </div>
      </section>

      <section id="company" class="rounded-3xl border border-black/10 bg-white/70 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p class="text-sm font-bold">お問い合わせ</p>
          <p class="text-sm text-black/60 mt-2">ニュースに関するご相談はこちらから。</p>
        </div>
        <button class="px-6 py-3 bg-[var(--accent-color)] text-white text-xs font-bold tracking-[0.3em] uppercase rounded-full">Contact</button>
      </section>
    </main>
  </div>
</div>
`
};
