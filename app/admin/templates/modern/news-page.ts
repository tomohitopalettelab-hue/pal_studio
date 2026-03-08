import type { TemplateVariant } from '../types';

export const modernNewsPageTemplate: TemplateVariant = {
  id: 'variant-modern-news-page',
  templateId: 'template-modern',
  name: 'News Detail',
  pageSlug: 'news-page',
  description: 'Modern / News detail layout',
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
        <h1 class="text-4xl md:text-5xl font-black mt-3">ニュース詳細</h1>
        <p class="text-sm text-slate-500 mt-4">公開情報の背景や更新内容を詳しく掲載します。</p>
        <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-6 lg:px-10 py-12 space-y-12 pb-20">
      <section id="top" class="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <article class="space-y-4">
          <p class="text-xs uppercase tracking-widest text-slate-400">2026.03.07</p>
          <h2 class="text-3xl font-bold">ブランド刷新プロジェクトを公開しました</h2>
          <p class="text-sm text-slate-500">企業メッセージと顧客体験を統合するためのアップデート内容をまとめています。</p>
          <div class="rounded-3xl border border-slate-200 p-6 bg-white">
            <p class="text-sm text-slate-600 leading-relaxed">リード文に続き、制作背景や意思決定のポイントを詳しく記載します。情報設計の意図、改善前後の課題、今後の運用方針などを整理して掲載します。</p>
          </div>
        </article>
        <aside class="rounded-3xl border border-slate-200 bg-slate-50 p-6 space-y-4">
          <div>
            <p class="text-xs uppercase tracking-widest text-slate-400">Tags</p>
            <div class="mt-2 flex flex-wrap gap-2 text-xs">
              <span class="px-3 py-1 rounded-full bg-white border border-slate-200">リリース</span>
              <span class="px-3 py-1 rounded-full bg-white border border-slate-200">デザイン</span>
            </div>
          </div>
          <div>
            <p class="text-xs uppercase tracking-widest text-slate-400">Share</p>
            <p class="text-sm text-slate-500 mt-2">SNSでの共有用リンクを配置します。</p>
          </div>
        </aside>
      </section>

      <section id="concept" class="space-y-4">
        <h3 class="text-lg font-bold">背景と目的</h3>
        <p class="text-sm text-slate-600">プロジェクトを開始した背景や、更新で解決したい課題をまとめます。</p>
        <p class="text-sm text-slate-600">施策の意図やユーザー体験への影響を具体的に記載します。</p>
      </section>

      <section id="features" class="space-y-4">
        <h3 class="text-lg font-bold">改善ポイント</h3>
        <ul class="space-y-2 text-sm text-slate-600 list-disc list-inside">
          <li>情報の流れを再設計し、伝える順序を最適化</li>
          <li>意思決定を支援するCTAと導線を整理</li>
          <li>運用を見据えた更新しやすい構造へ刷新</li>
        </ul>
      </section>

      <section id="service" class="space-y-4">
        <h3 class="text-lg font-bold">関連ニュース</h3>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-2xl border border-slate-200 p-5">
            <p class="text-xs text-slate-400">2026.02.21</p>
            <p class="text-sm font-bold mt-2">イベント開催のお知らせ</p>
          </div>
          <div class="rounded-2xl border border-slate-200 p-5">
            <p class="text-xs text-slate-400">2026.02.10</p>
            <p class="text-sm font-bold mt-2">新サービス提供開始</p>
          </div>
        </div>
      </section>

      <section id="company" class="rounded-3xl border border-slate-200 bg-slate-50 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p class="text-sm font-bold">詳細のお問い合わせ</p>
          <p class="text-sm text-slate-500 mt-2">ニュースに関するご相談はフォームから承ります。</p>
        </div>
        <button class="px-6 py-3 bg-[var(--accent-color)] text-white text-xs font-bold tracking-[0.3em] uppercase rounded-full">Contact</button>
      </section>
    </main>
  </div>
</div>
`
};
