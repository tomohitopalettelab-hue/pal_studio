import type { TemplateVariant } from '../types';

export const japaneseContactTemplate: TemplateVariant = {
  id: 'variant-japanese-contact',
  templateId: 'template-japanese',
  name: 'Contact',
  pageSlug: 'contact',
  description: 'Japanese / Contact page layout',
  html: `
<div class="template-root" style="--main-color: #722F37; --accent-color: #2C2C2C; --bg-color: #F9F8F6; --text-color: #1a1a1a;">
  <div class="min-h-screen font-serif text-[var(--text-color)] bg-[var(--bg-color)]">
    <header class="p-8 border-b border-[var(--accent-color)]/10">
      <h1 class="text-2xl tracking-[0.4em] uppercase">Japanese / Contact</h1>
    </header>
    <main>
      <section id="top" class="py-16 px-8">
        <h2 class="text-4xl font-bold tracking-widest">お問い合わせ</h2>
        <p class="mt-6 text-sm leading-loose opacity-80">このページはお問い合わせ用テンプレートです。</p>
      </section>
      <section id="concept" class="py-10 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">ご相談の流れ</h3>
        <p class="text-sm leading-loose">お問い合わせから返信までの流れを記載します。</p>
      </section>
      <section id="features" class="py-10 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">受付内容</h3>
        <p class="text-sm leading-loose">対応できる内容や相談範囲を明記します。</p>
      </section>
      <section id="service" class="py-10 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">連絡先</h3>
        <p class="text-sm leading-loose">メールや電話番号を記載します。</p>
      </section>
      <section id="works" class="py-10 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">対応事例</h3>
        <p class="text-sm leading-loose">過去の対応事例を紹介します。</p>
      </section>
      <section id="company" class="py-10 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">会社情報</h3>
        <p class="text-sm leading-loose">所在地・営業時間などを記載します。</p>
      </section>
    </main>
  </div>
</div>`
};
