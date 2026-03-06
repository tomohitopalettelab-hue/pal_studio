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
    <header class="px-10 py-12 border-b border-black/10 relative overflow-hidden">
      <p class="text-[10px] uppercase tracking-[0.4em] text-black/40">Elegant Template</p>
      <h1 class="text-3xl font-light mt-3">ニュース詳細</h1>
      <p class="text-sm text-black/60 mt-3">上質な雰囲気を意識したプレビューです。</p>
      <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
    </header>
    <main class="max-w-5xl mx-auto px-6 py-14 space-y-12 pb-16">
      <section id="top" class="space-y-4">
        <p class="text-xs uppercase tracking-widest text-black/40">2026.03.07</p>
        <h2 class="text-2xl font-bold">ニュースタイトルが入ります</h2>
        <p class="text-sm text-black/60">リード文がここに入ります。</p>
      </section>
      <section id="concept" class="space-y-4">
        <h3 class="text-lg font-bold">本文</h3>
        <p class="text-sm text-black/60">本文テキストがここに入ります。</p>
        <p class="text-sm text-black/60">続きの本文テキストがここに入ります。</p>
      </section>
      <section id="features" class="space-y-3">
        <h3 class="text-lg font-bold">関連情報</h3>
        <p class="text-sm text-black/60">関連する情報を記載します。</p>
      </section>
      <section id="service" class="space-y-3">
        <h3 class="text-lg font-bold">他のニュース</h3>
        <ul class="space-y-2 text-sm text-black/60">
          <li>2026.02.21 / 更新情報のタイトル</li>
          <li>2026.02.10 / イベント開催のお知らせ</li>
        </ul>
      </section>
      <section id="works" class="space-y-3">
        <h3 class="text-lg font-bold">次の更新</h3>
        <p class="text-sm text-black/60">次回の案内を記載します。</p>
      </section>
      <section id="company" class="space-y-3">
        <h3 class="text-lg font-bold">お問い合わせ</h3>
        <p class="text-sm text-black/60">ニュースに関する問い合わせ先を記載します。</p>
      </section>
    </main>
  </div>
</div>
`
};
