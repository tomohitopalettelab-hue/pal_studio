import type { TemplateVariant } from '../types';

export const popNewsTemplate: TemplateVariant = {
  id: 'variant-pop-news',
  templateId: 'template-pop',
  name: 'News',
  pageSlug: 'news',
  description: 'Pop / News list layout',
  html: `
<div class="template-root" style="--accent-color: #f43f5e;">
  <div class="min-h-screen font-sans text-slate-900 bg-[#fff7fb]">
    <header class="px-8 py-10 border-b border-pink-200">
      <p class="text-[10px] uppercase tracking-[0.4em] text-pink-400">Pop Template</p>
      <h1 class="text-3xl font-black mt-2">ニュース一覧</h1>
      <p class="text-sm text-pink-500 mt-3">最新情報の一覧を表示するテストページです。</p>
    </header>
    <main class="max-w-5xl mx-auto px-6 py-12 space-y-8">
      <section id="top" class="space-y-6">
        <article class="border border-pink-200 rounded-2xl p-6 bg-white">
          <p class="text-xs uppercase tracking-widest text-pink-400">2026.03.07</p>
          <h2 class="text-xl font-bold mt-2">ニュースタイトルが入ります</h2>
          <p class="text-sm text-pink-500 mt-3">概要テキストがここに入ります。</p>
        </article>
        <article class="border border-pink-200 rounded-2xl p-6 bg-white">
          <p class="text-xs uppercase tracking-widest text-pink-400">2026.02.21</p>
          <h2 class="text-xl font-bold mt-2">イベント告知のサンプル</h2>
          <p class="text-sm text-pink-500 mt-3">お知らせの概要が入ります。</p>
        </article>
      </section>
    </main>
  </div>
</div>`
};
