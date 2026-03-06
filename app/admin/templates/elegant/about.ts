import type { TemplateVariant } from '../types';

export const elegantAboutTemplate: TemplateVariant = {
  id: 'variant-elegant-about',
  templateId: 'template-elegant',
  name: 'About',
  pageSlug: 'about',
  description: 'Elegant / About page layout',
  html: `
<div class="template-root" style="--accent-color: #8c764b;">
  <div class="min-h-screen font-serif text-slate-900 bg-[#fdfbf7]">
    <header class="px-10 py-12 border-b border-black/10 relative overflow-hidden">
      <p class="text-[10px] uppercase tracking-[0.4em] text-black/40">Elegant Template</p>
      <h1 class="text-3xl font-light mt-3">私たちについて</h1>
      <p class="text-sm text-black/60 mt-3">上質な雰囲気を意識したプレビューです。</p>
      <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
    </header>
    <main class="max-w-5xl mx-auto px-6 py-14 space-y-12 pb-16">
      <section id="top" class="space-y-4">
        <h2 class="text-2xl font-bold">ミッション</h2>
        <p class="text-sm text-black/60">価値ある体験を提供するための指針を記載します。</p>
      </section>
      <section id="concept" class="space-y-3">
        <h3 class="text-lg font-bold">コンセプト</h3>
        <p class="text-sm text-black/60">ブランドの世界観や考え方を記載します。</p>
      </section>
      <section id="features" class="space-y-3">
        <h3 class="text-lg font-bold">特徴</h3>
        <ul class="space-y-2 text-sm text-black/60">
          <li>・サービスの強みを記載</li>
          <li>・品質や姿勢を記載</li>
          <li>・独自性を記載</li>
        </ul>
      </section>
      <section id="service" class="space-y-3">
        <h3 class="text-lg font-bold">提供価値</h3>
        <p class="text-sm text-black/60">提供する価値や体験を記載します。</p>
      </section>
      <section id="works" class="space-y-3">
        <h3 class="text-lg font-bold">実績</h3>
        <p class="text-sm text-black/60">代表的な実績や事例を記載します。</p>
      </section>
      <section id="company" class="space-y-3">
        <h3 class="text-lg font-bold">会社情報</h3>
        <p class="text-sm text-black/60">所在地や連絡先の概要を記載します。</p>
      </section>
    </main>
  </div>
</div>
`
};
