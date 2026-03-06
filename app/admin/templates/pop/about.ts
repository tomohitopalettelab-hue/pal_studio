import type { TemplateVariant } from '../types';

export const popAboutTemplate: TemplateVariant = {
  id: 'variant-pop-about',
  templateId: 'template-pop',
  name: 'About',
  pageSlug: 'about',
  description: 'Pop / About page layout',
  html: `
<div class="template-root" style="--accent-color: #f43f5e;">
  <div class="min-h-screen font-sans text-slate-900 bg-[#fff7fb]">
    <header class="px-8 py-10 border-b border-pink-200 relative overflow-hidden">
      <p class="text-[10px] uppercase tracking-[0.4em] text-pink-400">Pop Template</p>
      <h1 class="text-3xl font-black mt-2">私たちについて</h1>
      <p class="text-sm text-pink-500 mt-3">明るくポップな雰囲気のプレビューです。</p>
      <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
    </header>
    <main class="max-w-5xl mx-auto px-6 py-12 space-y-10 pb-16">
      <section id="top" class="space-y-4">
        <h2 class="text-2xl font-bold">ミッション</h2>
        <p class="text-sm text-pink-500">価値ある体験を提供するための指針を記載します。</p>
      </section>
      <section id="concept" class="space-y-3">
        <h3 class="text-lg font-bold">コンセプト</h3>
        <p class="text-sm text-pink-500">ブランドの世界観や考え方を記載します。</p>
      </section>
      <section id="features" class="space-y-3">
        <h3 class="text-lg font-bold">特徴</h3>
        <ul class="space-y-2 text-sm text-pink-500">
          <li>・サービスの強みを記載</li>
          <li>・品質や姿勢を記載</li>
          <li>・独自性を記載</li>
        </ul>
      </section>
      <section id="service" class="space-y-3">
        <h3 class="text-lg font-bold">提供価値</h3>
        <p class="text-sm text-pink-500">提供する価値や体験を記載します。</p>
      </section>
      <section id="works" class="space-y-3">
        <h3 class="text-lg font-bold">実績</h3>
        <p class="text-sm text-pink-500">代表的な実績や事例を記載します。</p>
      </section>
      <section id="company" class="space-y-3">
        <h3 class="text-lg font-bold">会社情報</h3>
        <p class="text-sm text-pink-500">所在地や連絡先の概要を記載します。</p>
      </section>
    </main>
  </div>
</div>
`
};
