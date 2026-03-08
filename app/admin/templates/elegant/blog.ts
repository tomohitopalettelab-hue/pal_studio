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
    <header class="border-b border-black/10 bg-[#fdfbf7]/90 backdrop-blur-xl">
      <div class="max-w-6xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between gap-6">
        <div class="text-xs font-bold tracking-[0.4em] uppercase">Maison.</div>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.4em] text-black/50"></nav>
      </div>
      <div class="max-w-6xl mx-auto px-6 lg:px-12 pb-10">
        <p class="text-[10px] uppercase tracking-[0.4em] text-black/40">Blog</p>
        <h1 class="text-4xl md:text-5xl font-light mt-3">ブログ一覧</h1>
        <p class="text-sm text-black/60 mt-4">制作の背景や運用のヒントを丁寧にまとめています。</p>
        <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-6 lg:px-12 py-14 space-y-12 pb-20">
      <section id="top" class="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <article class="rounded-3xl border border-black/10 p-8 bg-white/70">
          <p class="text-xs uppercase tracking-widest text-black/40">2026.03.07</p>
          <h2 class="text-2xl font-bold mt-3">世界観を守るデザインの整え方</h2>
          <p class="text-sm text-black/60 mt-3">伝わり方と品格を両立する設計の考え方をご紹介します。</p>
          <a class="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent-color)] mt-4" href="#">続きを読む</a>
        </article>
        <aside class="rounded-3xl border border-black/10 p-6 bg-white/70">
          <p class="text-[10px] uppercase tracking-[0.3em] text-black/40">Category</p>
          <div class="mt-4 flex flex-wrap gap-2 text-xs">
            <span class="px-3 py-1 rounded-full bg-white border border-black/10">ブランディング</span>
            <span class="px-3 py-1 rounded-full bg-white border border-black/10">デザイン</span>
            <span class="px-3 py-1 rounded-full bg-white border border-black/10">運用</span>
          </div>
        </aside>
      </section>

      <section class="grid gap-6 md:grid-cols-2">
        <article class="border border-black/10 rounded-2xl p-6 bg-white/70">
          <p class="text-xs uppercase tracking-widest text-black/40">2026.02.21</p>
          <h3 class="text-xl font-bold mt-2">ブランドストーリーの作り方</h3>
          <p class="text-sm text-black/60 mt-3">言葉とビジュアルの整合性を解説します。</p>
          <a class="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent-color)] mt-4" href="#">続きを読む</a>
        </article>
        <article class="border border-black/10 rounded-2xl p-6 bg-white/70">
          <p class="text-xs uppercase tracking-widest text-black/40">2026.02.10</p>
          <h3 class="text-xl font-bold mt-2">上質な導線設計のポイント</h3>
          <p class="text-sm text-black/60 mt-3">迷わない導線の作り方をご紹介します。</p>
          <a class="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent-color)] mt-4" href="#">続きを読む</a>
        </article>
      </section>

      <section class="rounded-3xl border border-black/10 bg-white/70 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p class="text-sm font-bold">最新記事の更新通知</p>
          <p class="text-sm text-black/60 mt-2">メールで更新情報をお届けします。</p>
        </div>
        <button class="px-6 py-3 bg-[var(--accent-color)] text-white text-xs font-bold tracking-[0.3em] uppercase rounded-full">Subscribe</button>
      </section>
    </main>
  </div>
</div>
`
};
