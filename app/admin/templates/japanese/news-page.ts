import type { TemplateVariant } from '../types';

export const japaneseNewsPageTemplate: TemplateVariant = {
  id: 'variant-japanese-news-page',
  templateId: 'template-japanese',
  name: 'News Detail',
  pageSlug: 'news-page',
  description: 'Japanese / News detail layout',
  html: `
<div class="template-root" style="--main-color: #722F37; --accent-color: #2C2C2C; --bg-color: #F9F8F6; --text-color: #1a1a1a;">
  <div class="min-h-screen font-serif text-[var(--text-color)] bg-[var(--bg-color)]">
    <header class="p-8 border-b border-[var(--accent-color)]/10 relative overflow-hidden">
      <h1 class="text-2xl tracking-[0.4em] uppercase">Japanese / News Detail</h1>
      <p class="mt-4 text-sm opacity-70">和の雰囲気でまとめたプレビューです。</p>
      <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
    </header>
    <main>
      <section id="top" class="py-16 px-8">
        <p class="text-xs uppercase tracking-widest opacity-60">2026.03.07</p>
        <h2 class="text-4xl font-bold tracking-widest mt-4">ニュースタイトルが入ります</h2>
        <p class="mt-6 text-sm leading-loose opacity-80">リード文がここに入ります。</p>
      </section>
      <section id="concept" class="py-10 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">本文</h3>
        <p class="text-sm leading-loose">本文テキストがここに入ります。</p>
      </section>
      <section id="features" class="py-10 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">関連情報</h3>
        <p class="text-sm leading-loose">関連する情報を記載します。</p>
      </section>
      <section id="service" class="py-10 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">他のニュース</h3>
        <p class="text-sm leading-loose">別のニュース一覧を記載します。</p>
      </section>
      <section id="works" class="py-10 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">次回予告</h3>
        <p class="text-sm leading-loose">次回の案内を記載します。</p>
      </section>
      <section id="company" class="py-10 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">お問い合わせ</h3>
        <p class="text-sm leading-loose">ニュースに関する問い合わせ先を記載します。</p>
      </section>
    </main>
  </div>
</div>
`
};
