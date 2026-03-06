import type { TemplateVariant } from '../types';

export const japaneseBlogTemplate: TemplateVariant = {
  id: 'variant-japanese-blog',
  templateId: 'template-japanese',
  name: 'Blog',
  pageSlug: 'blog',
  description: 'Japanese / Blog list layout',
  html: `
<div class="template-root" style="--main-color: #722F37; --accent-color: #2C2C2C; --bg-color: #F9F8F6; --text-color: #1a1a1a;">
  <div class="min-h-screen font-serif text-[var(--text-color)] bg-[var(--bg-color)]">
    <header class="p-8 border-b border-[var(--accent-color)]/10">
      <h1 class="text-2xl tracking-[0.4em] uppercase">Japanese / Blog</h1>
    </header>
    <main>
      <section id="top" class="py-16 px-8">
        <h2 class="text-4xl font-bold tracking-widest">ブログ一覧</h2>
        <p class="mt-6 text-sm leading-loose opacity-80">ブログ記事の一覧を表示するテストページです。</p>
      </section>
      <section id="concept" class="py-10 px-8 border-t border-[var(--accent-color)]/10">
        <div class="space-y-6 text-sm">
          <div class="border-b border-[var(--accent-color)]/10 pb-4">
            <p class="text-xs uppercase tracking-widest opacity-60">2026.03.07</p>
            <p class="mt-2">ブログ記事タイトルを記載します。</p>
          </div>
          <div class="border-b border-[var(--accent-color)]/10 pb-4">
            <p class="text-xs uppercase tracking-widest opacity-60">2026.02.14</p>
            <p class="mt-2">コラムの概要を記載します。</p>
          </div>
        </div>
      </section>
      <section id="features" class="py-10 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">注目記事</h3>
        <p class="text-sm leading-loose">注目トピックの概要を記載します。</p>
      </section>
      <section id="service" class="py-10 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">カテゴリー</h3>
        <p class="text-sm leading-loose">カテゴリ情報を記載します。</p>
      </section>
      <section id="works" class="py-10 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">人気記事</h3>
        <p class="text-sm leading-loose">人気の記事を表示します。</p>
      </section>
      <section id="company" class="py-10 px-8 border-t border-[var(--accent-color)]/10">
        <h3 class="text-xl font-bold mb-6">お問い合わせ</h3>
        <p class="text-sm leading-loose">ブログに関する問い合わせ先を記載します。</p>
      </section>
    </main>
  </div>
</div>`
};
