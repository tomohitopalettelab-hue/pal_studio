import type { TemplateVariant } from '../types';

export const warmBlogPageTemplate: TemplateVariant = {
  id: 'variant-warm-blog-page',
  templateId: 'template-warm',
  name: 'Blog Detail',
  pageSlug: 'blog-page',
  description: 'Warm / ブログ記事詳細ページ',
  html: `
<div class="template-root" style="--main-color: #c59500; --main-dark: #9a7500; --accent-color: #FDFBF7; --text-color: #333333; --text-light: #6b7280; --bg-color: #ffffff;">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&family=Quicksand:wght@600;700&display=swap');
    .template-root { font-family: 'Noto Sans JP', sans-serif; }
    .template-root .font-en { font-family: 'Quicksand', sans-serif; }
    .template-root .bubble-field { position: absolute; inset: 0; pointer-events: none; z-index: 5; }
    .template-root .bubble { position: absolute; border-radius: 9999px; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0)); opacity: 0.5; filter: blur(0.5px); animation: warmFloat 16s ease-in-out infinite; }
    .template-root .bubble-warm { background: radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--main-color) 25%, transparent), transparent); }
    @keyframes warmFloat { 0% { transform: translateY(0); } 50% { transform: translateY(-18px); } 100% { transform: translateY(0); } }
    .template-root .article-body { line-height: 2; }
    .template-root .article-body p { margin-bottom: 1.5rem; }
    .template-root .article-body h2 { font-size: 1.5rem; font-weight: 900; margin: 2.5rem 0 1rem; padding-left: 1rem; border-left: 4px solid var(--main-color); }
    .template-root .article-body h3 { font-size: 1.25rem; font-weight: 900; margin: 2rem 0 0.75rem; }
    .template-root .article-body ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; }
    .template-root .article-body ol { list-style: decimal; padding-left: 1.5rem; margin-bottom: 1.5rem; }
    .template-root .article-body li { margin-bottom: 0.5rem; }
    .template-root .article-body blockquote { border-left: 4px solid var(--main-color); padding: 1rem 1.5rem; background: #F4F7F9; border-radius: 0 1rem 1rem 0; margin: 1.5rem 0; font-weight: 700; color: var(--text-light); }
    .template-root .article-body img { border-radius: 1.5rem; margin: 2rem 0; }
    .template-root .article-body a { color: var(--main-color); font-weight: 700; text-decoration: underline; text-underline-offset: 3px; }
  </style>
  <div class="min-h-screen text-[var(--text-color)] bg-[var(--accent-color)]">
    <header class="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 md:px-10 h-20 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-[var(--main-color)] flex items-center justify-center text-white font-black rounded-full text-sm">W</div>
          <div class="font-black text-xl tracking-tight">Company <span class="text-[var(--main-color)] font-bold">Name</span></div>
        </div>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-6 text-sm font-black tracking-widest"></nav>
      </div>
    </header>

    <main>
      <section id="top" class="pt-32 pb-8 bg-[#F4F7F9] relative overflow-hidden">
        <div class="max-w-4xl mx-auto px-6 relative z-10">
          <nav class="mb-6 text-xs font-bold text-gray-400 flex items-center gap-2">
            <a href="/" class="hover:text-[var(--main-color)] transition-colors">HOME</a>
            <span class="text-gray-300">&gt;</span>
            <a href="/blog" data-page-slug="blog" class="hover:text-[var(--main-color)] transition-colors">ブログ</a>
            <span class="text-gray-300">&gt;</span>
            <span class="text-[var(--main-color)]">記事詳細</span>
          </nav>
        </div>
      </section>

      <section class="py-12 bg-white">
        <div class="max-w-4xl mx-auto px-6">
          <article>
            <div class="flex items-center gap-3 mb-6">
              <span class="text-sm font-en font-bold text-gray-400">2025.04.01</span>
              <span class="bg-[var(--accent-color)] text-[var(--main-color)] text-xs font-bold px-3 py-1 rounded-full">BLOG</span>
            </div>
            <h1 class="text-3xl md:text-4xl font-black mb-8 leading-tight">ブログ記事のタイトルがここに入ります</h1>

            <div class="rounded-[30px] overflow-hidden mb-10 aspect-video">
              <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover" alt="Blog image">
            </div>

            <div class="article-body text-[var(--text-light)]">
              <p>ブログ記事の本文がここに表示されます。記事は管理画面から自由に作成・編集できます。</p>

              <h2>見出しレベル2</h2>
              <p>テキストコンテンツが入ります。段落ごとに適切な間隔が自動で設定されます。リンクや強調も使用できます。</p>

              <blockquote>引用テキストはこのように表示されます。左ボーダーとゴールドのアクセントで、本文と視覚的に区別されます。</blockquote>

              <h3>見出しレベル3</h3>
              <ul>
                <li>リスト項目がここに入ります</li>
                <li>複数の項目を追加できます</li>
                <li>箇条書きで整理された情報を伝えます</li>
              </ul>

              <p>記事の締めくくりテキストが入ります。読者へのメッセージやCTAをここに配置します。</p>
            </div>

            <div class="mt-10 flex flex-wrap gap-3">
              <span class="bg-[var(--accent-color)] text-[var(--text-light)] text-xs font-bold px-4 py-2 rounded-full border border-gray-200">タグ1</span>
              <span class="bg-[var(--accent-color)] text-[var(--text-light)] text-xs font-bold px-4 py-2 rounded-full border border-gray-200">タグ2</span>
              <span class="bg-[var(--accent-color)] text-[var(--text-light)] text-xs font-bold px-4 py-2 rounded-full border border-gray-200">タグ3</span>
            </div>

            <div class="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
              <a href="/blog" data-page-slug="blog" class="inline-flex items-center gap-2 bg-[var(--accent-color)] text-[var(--text-color)] font-black px-8 py-3 rounded-full hover:shadow-md transition-all text-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                ブログ一覧へ戻る
              </a>
            </div>
          </article>
        </div>
      </section>

      <section class="py-16 bg-[#F4F7F9]">
        <div class="max-w-4xl mx-auto px-6">
          <h3 class="font-en font-bold text-sm tracking-[0.3em] text-[var(--main-color)] uppercase mb-4">RELATED POSTS</h3>
          <h4 class="text-2xl font-black mb-8">関連記事</h4>
          <div class="grid md:grid-cols-3 gap-6">
            <a href="/blog/blog-page" class="group">
              <div class="aspect-video overflow-hidden rounded-[20px] mb-4 shadow-md">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" alt="Related" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              </div>
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs font-en font-bold text-gray-400">2025.03.15</span>
              </div>
              <h5 class="text-sm font-bold group-hover:text-[var(--main-color)] transition-colors line-clamp-2">関連記事のタイトルがここに表示されます。</h5>
            </a>
            <a href="/blog/blog-page" class="group">
              <div class="aspect-video overflow-hidden rounded-[20px] mb-4 shadow-md">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800" alt="Related" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              </div>
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs font-en font-bold text-gray-400">2025.03.01</span>
              </div>
              <h5 class="text-sm font-bold group-hover:text-[var(--main-color)] transition-colors line-clamp-2">関連記事のタイトルがここに表示されます。</h5>
            </a>
            <a href="/blog/blog-page" class="group">
              <div class="aspect-video overflow-hidden rounded-[20px] mb-4 shadow-md">
                <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800" alt="Related" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              </div>
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs font-en font-bold text-gray-400">2025.02.15</span>
              </div>
              <h5 class="text-sm font-bold group-hover:text-[var(--main-color)] transition-colors line-clamp-2">関連記事のタイトルがここに表示されます。</h5>
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-[var(--accent-color)] pt-14 pb-10 border-t border-gray-200">
      <div class="max-w-6xl mx-auto px-6 text-center text-xs font-bold text-gray-400">
        <p>&copy; Company Name. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  </div>
</div>
`,
};
