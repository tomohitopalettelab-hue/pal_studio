import type { TemplateVariant } from '../types';

export const portfolioBlogPageTemplate: TemplateVariant = {
  id: 'variant-portfolio-blog-page',
  templateId: 'template-portfolio',
  name: 'Blog Detail',
  pageSlug: 'blog-page',
  description: 'Portfolio / Blog detail layout',
  html: `
<div class="template-root" style="--accent-color: #6366f1;">
  <div class="min-h-screen font-sans text-slate-900 bg-white">
    <header class="px-8 py-10 border-b border-slate-200 relative overflow-hidden">
      <p class="text-[10px] uppercase tracking-[0.4em] text-slate-400">Portfolio Template</p>
      <h1 class="text-3xl font-black mt-2">ブログ記事</h1>
      <p class="text-sm text-slate-500 mt-3">クリエイティブな世界観のプレビューです。</p>
      <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
    </header>
    <main class="max-w-5xl mx-auto px-6 py-12 space-y-10 pb-16">
      <section id="top" class="space-y-4">
        <p class="text-xs uppercase tracking-widest text-slate-400">2026.03.07</p>
        <h2 class="text-2xl font-bold">ブログタイトルが入ります</h2>
        <p class="text-sm text-slate-500">リード文がここに入ります。</p>
      </section>
      <section id="concept" class="space-y-4">
        <h3 class="text-lg font-bold">本文</h3>
        <p class="text-sm text-slate-600">本文テキストがここに入ります。</p>
        <p class="text-sm text-slate-600">続きの本文テキストがここに入ります。</p>
      </section>
      <section id="features" class="space-y-3">
        <h3 class="text-lg font-bold">関連情報</h3>
        <p class="text-sm text-slate-600">関連する情報を記載します。</p>
      </section>
      <section id="service" class="space-y-3">
        <h3 class="text-lg font-bold">他のブログ</h3>
        <ul class="space-y-2 text-sm text-slate-600">
          <li>2026.02.21 / 更新情報のタイトル</li>
          <li>2026.02.10 / イベント開催のお知らせ</li>
        </ul>
      </section>
      <section id="works" class="space-y-3">
        <h3 class="text-lg font-bold">次の更新</h3>
        <p class="text-sm text-slate-600">次回の案内を記載します。</p>
      </section>
      <section id="company" class="space-y-3">
        <h3 class="text-lg font-bold">お問い合わせ</h3>
        <p class="text-sm text-slate-600">ブログに関する問い合わせ先を記載します。</p>
      </section>
    </main>
  </div>
</div>
`
};
