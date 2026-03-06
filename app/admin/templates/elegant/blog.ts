import type { TemplateVariant } from '../types';

export const elegantBlogTemplate: TemplateVariant = {
  id: 'variant-elegant-blog',
  templateId: 'template-elegant',
  name: 'Blog',
  pageSlug: 'blog',
  description: 'Elegant / Blog list layout',
  html: `
<div class="template-root" style="--accent-color: #8c764b;">
  <div class="min-h-screen font-serif text-slate-900 bg-[#fdfbf7]">
    <header class="px-10 py-12 border-b border-black/10">
      <p class="text-[10px] uppercase tracking-[0.4em] text-black/40">Elegant Template</p>
      <h1 class="text-3xl font-light mt-3">ブログ一覧</h1>
      <p class="text-sm text-black/60 mt-3">ブログ記事の一覧を表示するテストページです。</p>
    </header>
    <main class="max-w-5xl mx-auto px-6 py-14 space-y-8">
      <section id="top" class="grid gap-6 md:grid-cols-2">
        <article class="border border-black/10 rounded-2xl p-6">
          <p class="text-xs uppercase tracking-widest text-black/40">2026.03.07</p>
          <h2 class="text-xl font-semibold mt-2">ブログ記事タイトル</h2>
          <p class="text-sm text-black/60 mt-3">記事の概要がここに入ります。</p>
        </article>
        <article class="border border-black/10 rounded-2xl p-6">
          <p class="text-xs uppercase tracking-widest text-black/40">2026.02.14</p>
          <h2 class="text-xl font-semibold mt-2">コラムタイトル</h2>
          <p class="text-sm text-black/60 mt-3">記事の概要がここに入ります。</p>
        </article>
      </section>
    </main>
  </div>
</div>`
};
