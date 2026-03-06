import type { TemplateVariant } from '../types';

export const popContactTemplate: TemplateVariant = {
  id: 'variant-pop-contact',
  templateId: 'template-pop',
  name: 'Contact',
  pageSlug: 'contact',
  description: 'Pop / Contact page layout',
  html: `
<div class="template-root" style="--accent-color: #f43f5e;">
  <div class="min-h-screen font-sans text-slate-900 bg-[#fff7fb]">
    <header class="px-8 py-10 border-b border-pink-200 relative overflow-hidden">
      <p class="text-[10px] uppercase tracking-[0.4em] text-pink-400">Pop Template</p>
      <h1 class="text-3xl font-black mt-2">お問い合わせ</h1>
      <p class="text-sm text-pink-500 mt-3">明るくポップな雰囲気のプレビューです。</p>
      <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
    </header>
    <main class="max-w-5xl mx-auto px-6 py-12 space-y-10 pb-16">
      <section id="top" class="space-y-4">
        <h2 class="text-2xl font-bold">ご相談はこちら</h2>
        <p class="text-sm text-pink-500">お問い合わせフォームへの案内文を記載します。</p>
      </section>
      <section id="concept" class="space-y-3">
        <h3 class="text-lg font-bold">対応内容</h3>
        <p class="text-sm text-pink-500">対応できる内容や範囲を記載します。</p>
      </section>
      <section id="features" class="space-y-3">
        <h3 class="text-lg font-bold">対応フロー</h3>
        <p class="text-sm text-pink-500">お問い合わせから返信までの流れを記載します。</p>
      </section>
      <section id="service" class="space-y-3">
        <h3 class="text-lg font-bold">連絡先</h3>
        <p class="text-sm text-pink-500">電話・メールなどの連絡先を記載します。</p>
      </section>
      <section id="works" class="space-y-3">
        <h3 class="text-lg font-bold">よくある質問</h3>
        <p class="text-sm text-pink-500">FAQの案内を記載します。</p>
      </section>
      <section id="company" class="space-y-3">
        <h3 class="text-lg font-bold">会社情報</h3>
        <p class="text-sm text-pink-500">所在地や営業時間などを記載します。</p>
      </section>
    </main>
  </div>
</div>
`
};
