import type { TemplateVariant } from '../types';

export const elegantBlogPageTemplate: TemplateVariant = {
  id: 'variant-elegant-blog-page',
  templateId: 'template-elegant',
  name: 'Blog Detail',
  pageSlug: 'blog-page',
  description: 'Elegant / Blog detail layout',
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
        <h1 class="text-4xl md:text-5xl font-light mt-3">ブログ記事</h1>
        <p class="text-sm text-black/60 mt-4">ブランドの考え方を深掘りする記事です。</p>
        <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-6 lg:px-12 py-14 space-y-12 pb-20">
      <section id="top" class="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <article class="space-y-4">
          <p class="text-xs uppercase tracking-widest text-black/40">2026.03.07</p>
          <h2 class="text-3xl font-bold">世界観を守るデザインの整え方</h2>
          <p class="text-sm text-black/60">ブランドのトーンを崩さない設計のポイントをご紹介します。</p>
        </article>
        <aside class="rounded-3xl border border-black/10 bg-white/70 p-6">
          <p class="text-xs uppercase tracking-widest text-black/40">Author</p>
          <p class="text-sm font-bold mt-2">ディレクター / 佐藤</p>
          <p class="text-sm text-black/60 mt-2">ブランド設計を統括。</p>
        </aside>
      </section>

      <section id="concept" class="space-y-4">
        <h3 class="text-lg font-bold">本文</h3>
        <p class="text-sm text-black/60">導入部では背景や課題を丁寧に説明し、読み手の理解を促します。</p>
        <p class="text-sm text-black/60">具体的な事例や判断ポイントをわかりやすく記載します。</p>
      </section>

      <section id="features" class="space-y-4">
        <h3 class="text-lg font-bold">ポイント</h3>
        <ul class="space-y-2 text-sm text-black/60 list-disc list-inside">
          <li>トーンを統一する言葉選び</li>
          <li>写真・余白のバランス設計</li>
          <li>更新を想定した情報整理</li>
        </ul>
      </section>

      <section id="service" class="space-y-4">
        <h3 class="text-lg font-bold">関連記事</h3>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-2xl border border-black/10 p-5 bg-white/70">
            <p class="text-xs text-black/40">2026.02.21</p>
            <p class="text-sm font-bold mt-2">ブランドストーリーの作り方</p>
          </div>
          <div class="rounded-2xl border border-black/10 p-5 bg-white/70">
            <p class="text-xs text-black/40">2026.02.10</p>
            <p class="text-sm font-bold mt-2">上質な導線設計のポイント</p>
          </div>
        </div>
      </section>

      <section id="company" class="rounded-3xl border border-black/10 bg-white/70 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p class="text-sm font-bold">記事に関するご相談</p>
          <p class="text-sm text-black/60 mt-2">ご質問はお問い合わせフォームから。</p>
        </div>
        <button class="px-6 py-3 bg-[var(--accent-color)] text-white text-xs font-bold tracking-[0.3em] uppercase rounded-full">Contact</button>
      </section>
    </main>
  </div>
</div>
`
};
