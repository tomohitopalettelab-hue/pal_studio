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
    <header class="p-8 border-b border-[var(--accent-color)]/10">
      <h1 class="text-2xl tracking-[0.4em] uppercase">Japanese / About</h1>
    </header>
    <main>
      <section id="top" class="py-16 px-8">
        <h2 class="text-4xl font-bold tracking-widest">私たちの想い</h2>
        <p class="mt-6 text-sm leading-loose opacity-80">このページは会社紹介のテンプレートです。</p>
      </section>
      <section id="concept" class="py-16 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">理念</h3>
        <p class="text-sm leading-loose">和の価値観と現代の暮らしをつなぐためのストーリーを記載します。</p>
      </section>
      <section id="features" class="py-16 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">私たちの特徴</h3>
        <ul class="space-y-4 text-sm leading-loose">
          <li>・伝統技術の継承</li>
          <li>・地域とのつながり</li>
          <li>・丁寧なものづくり</li>
        </ul>
      </section>
      <section id="service" class="py-16 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">事業紹介</h3>
        <p class="text-sm leading-loose">サービスの概要を記載します。</p>
      </section>
      <section id="works" class="py-16 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">実績</h3>
        <p class="text-sm leading-loose">代表的な実績や取り組みを紹介します。</p>
      </section>
      <section id="company" class="py-16 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">会社情報</h3>
        <p class="text-sm leading-loose">所在地・連絡先などの基本情報を記載します。</p>
      </section>
    </main>
  </div>
</div>`
};
