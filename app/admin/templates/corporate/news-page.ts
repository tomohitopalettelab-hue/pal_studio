import type { TemplateVariant } from '../types';

export const corporateNewsPageTemplate: TemplateVariant = {
  id: 'variant-corporate-news-page',
  templateId: 'template-corporate',
  name: 'News Detail',
  pageSlug: 'news-page',
  description: 'Corporate / News detail layout',
  html: `
<div class="template-root" style="--accent-color: #1e40af;">
  <div class="min-h-screen font-sans text-slate-900 bg-white">
    <header class="border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div class="max-w-6xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between gap-6">
        <div class="text-xs font-black tracking-[0.3em] uppercase">Corporate.</div>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500"></nav>
      </div>
      <div class="max-w-6xl mx-auto px-6 lg:px-10 pb-10">
        <p class="text-[10px] uppercase tracking-[0.4em] text-slate-400">News</p>
        <h1 class="text-4xl md:text-5xl font-black mt-3">ニュース詳細</h1>
        <p class="text-sm text-slate-500 mt-4">公式発表の背景と要点を整理しています。</p>
        <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-6 lg:px-10 py-12 space-y-12 pb-20">
      <section id="top" class="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <article class="space-y-4">
          <p class="text-xs uppercase tracking-widest text-slate-400">2026.03.07</p>
          <h2 class="text-3xl font-bold">新サービス提供開始のお知らせ</h2>
          <p class="text-sm text-slate-500">提供範囲・サポート内容を整理してご案内します。</p>
        </article>
        <aside class="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p class="text-xs uppercase tracking-widest text-slate-400">Tags</p>
          <div class="mt-3 flex flex-wrap gap-2 text-xs">
            <span class="px-3 py-1 rounded-full bg-white border border-slate-200">プレス</span>
            <span class="px-3 py-1 rounded-full bg-white border border-slate-200">リリース</span>
          </div>
        </aside>
      </section>

      <section id="concept" class="space-y-4">
        <h3 class="text-lg font-bold">概要</h3>
        <p class="text-sm text-slate-600">新たに追加したサービスの概要と支援範囲を記載します。</p>
        <p class="text-sm text-slate-600">導入にあたっての条件や流れをわかりやすく整理します。</p>
      </section>

      <section id="features" class="space-y-4">
        <h3 class="text-lg font-bold">ポイント</h3>
        <ul class="space-y-2 text-sm text-slate-600 list-disc list-inside">
          <li>提供範囲の拡大</li>
          <li>運用支援の強化</li>
          <li>導入までのリードタイム短縮</li>
        </ul>
      </section>

      <section id="service" class="space-y-4">
        <h3 class="text-lg font-bold">他のニュース</h3>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-2xl border border-slate-200 p-5">
            <p class="text-xs text-slate-400">2026.02.21</p>
            <p class="text-sm font-bold mt-2">セミナー開催のご案内</p>
          </div>
          <div class="rounded-2xl border border-slate-200 p-5">
            <p class="text-xs text-slate-400">2026.02.10</p>
            <p class="text-sm font-bold mt-2">採用情報の更新</p>
          </div>
        </div>
      </section>

      <section id="company" class="rounded-3xl border border-slate-200 bg-slate-50 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p class="text-sm font-bold">お問い合わせ</p>
          <p class="text-sm text-slate-500 mt-2">詳細はお問い合わせフォームからご相談ください。</p>
        </div>
        <button class="px-6 py-3 bg-[var(--accent-color)] text-white text-xs font-bold tracking-[0.3em] uppercase rounded-full">Contact</button>
      </section>
    </main>
  </div>
</div>
`
};
