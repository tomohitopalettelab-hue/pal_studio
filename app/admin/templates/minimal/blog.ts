import type { TemplateVariant } from '../types';

export const minimalBlogTemplate: TemplateVariant = {
  id: 'variant-minimal-blog',
  templateId: 'template-minimal',
  name: 'Blog',
  pageSlug: 'blog',
  description: 'Minimal / Blog list layout',
  html: `
<div class="template-root" style="--accent-color: #0f172a;">
  <div class="min-h-screen font-sans text-slate-900 bg-white">
    <header class="px-8 py-10 border-b border-slate-200">
      <p class="text-[10px] uppercase tracking-[0.4em] text-slate-400">Minimal Template</p>
      <h1 class="text-3xl font-black mt-2">ブログ一覧</h1>
      <p class="text-sm text-slate-500 mt-3">ブログ記事の一覧を表示するテストページです。</p>
    </header>
    <main class="max-w-5xl mx-auto px-6 py-12 space-y-8">
      <section id="top" class="grid gap-6 md:grid-cols-2">
        <article class="border border-slate-200 rounded-2xl p-6">
          <p class="text-xs uppercase tracking-widest text-slate-400">2026.03.07</p>
          <h2 class="text-xl font-bold mt-2">ブログ記事タイトル</h2>
          <p class="text-sm text-slate-500 mt-3">記事の概要がここに入ります。</p>
        </article>
        <article class="border border-slate-200 rounded-2xl p-6">
          <p class="text-xs uppercase tracking-widest text-slate-400">2026.02.14</p>
          <h2 class="text-xl font-bold mt-2">コラムタイトル</h2>
          <p class="text-sm text-slate-500 mt-3">記事の概要がここに入ります。</p>
        </article>
      </section>
    </main>
  </div>
</div>`
};
