import type { TemplateVariant } from '../types';

export const japaneseAboutTemplate: TemplateVariant = {
  id: 'variant-japanese-about',
  templateId: 'template-japanese',
  name: 'About',
  pageSlug: 'about',
  description: 'Japanese / About page layout',
  html: `
<div class="template-root" style="--main-color: #722F37; --accent-color: #2C2C2C; --bg-color: #F9F8F6; --text-color: #1a1a1a;">
  <div class="min-h-screen font-serif text-[var(--text-color)] bg-[var(--bg-color)]">
    <header class="p-8 border-b border-[var(--accent-color)]/10 relative overflow-hidden">
      <h1 class="text-2xl tracking-[0.4em] uppercase">Japanese / About</h1>
      <p class="mt-4 text-sm opacity-70">和の雰囲気でまとめたプレビューです。</p>
      <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
    </header>
    <main>
      <section id="top" class="py-16 px-8">
        <h2 class="text-4xl font-bold tracking-widest">私たちの想い</h2>
        <p class="mt-6 text-sm leading-loose opacity-80">和の世界観を大切にした紹介ページです。</p>
      </section>
      <section id="concept" class="py-10 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">理念</h3>
        <p class="text-sm leading-loose">和の価値観と現代の暮らしをつなぐためのストーリーを記載します。</p>
      </section>
      <section id="features" class="py-10 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">特徴</h3>
        <p class="text-sm leading-loose">伝統技術や丁寧なものづくりの姿勢を記載します。</p>
      </section>
      <section id="service" class="py-10 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">事業紹介</h3>
        <p class="text-sm leading-loose">サービスの概要を記載します。</p>
      </section>
      <section id="works" class="py-10 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">実績</h3>
        <p class="text-sm leading-loose">代表的な実績を紹介します。</p>
      </section>
      <section id="company" class="py-10 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">会社情報</h3>
        <p class="text-sm leading-loose">所在地・連絡先などの基本情報を記載します。</p>
      </section>
    </main>
  </div>
</div>
`
};
