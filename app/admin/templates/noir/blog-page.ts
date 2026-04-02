import type { TemplateVariant } from '../types';

export const noirBlogPageTemplate: TemplateVariant = {
  id: 'variant-noir-blog-page',
  templateId: 'template-noir',
  name: 'Blog Detail',
  pageSlug: 'blog-page',
  description: 'Noir / ブログ記事詳細ページ',
  html: `
<div class="template-root" style="--main-color: #c8161d; --main-dark: #1a1a1a; --accent-color: #f7f7f5; --text-color: #1a1a1a; --text-light: #999999; --bg-color: #ffffff;">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
    .template-root { font-family: 'Noto Sans JP', sans-serif; }
    .template-root .font-en { font-family: 'Cormorant Garamond', serif; }
    .template-root .dac-line { stroke: var(--main-color); stroke-width: 0.5; opacity: 0.15; }
    .template-root .article-body { line-height: 2; }
    .template-root .article-body p { margin-bottom: 1.5rem; }
    .template-root .article-body h2 { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 300; margin: 3rem 0 1rem; padding-bottom: 0.75rem; border-bottom: 1px solid rgba(200,22,29,0.2); }
    .template-root .article-body h3 { font-size: 1.15rem; font-weight: 500; margin: 2rem 0 0.75rem; }
    .template-root .article-body ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; }
    .template-root .article-body ol { list-style: decimal; padding-left: 1.5rem; margin-bottom: 1.5rem; }
    .template-root .article-body li { margin-bottom: 0.5rem; }
    .template-root .article-body blockquote { border-left: 2px solid var(--main-color); padding: 1rem 1.5rem; background: var(--accent-color); margin: 1.5rem 0; font-weight: 300; color: var(--text-light); font-size: 0.95rem; }
    .template-root .article-body img { margin: 2rem 0; }
    .template-root .article-body a { color: var(--main-color); font-weight: 500; text-decoration: underline; text-underline-offset: 3px; }
  </style>
  <div class="min-h-screen text-[var(--text-color)] bg-[var(--bg-color)]">

    <header class="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100/60">
      <div class="max-w-7xl mx-auto px-6 md:px-10 h-20 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="font-en text-2xl font-light tracking-widest text-[var(--main-dark)]">Company <span class="text-[var(--main-color)]">Name</span></div>
        </div>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-8 text-xs font-medium tracking-[0.2em] uppercase">
          <a href="#concept" class="hover:text-[var(--main-color)] transition-colors">About</a>
          <a href="#service" class="hover:text-[var(--main-color)] transition-colors">Service</a>
          <a href="#works" class="hover:text-[var(--main-color)] transition-colors">Works</a>
          <a href="#company" class="hover:text-[var(--main-color)] transition-colors">Company</a>
          <a href="#contact" class="border border-[var(--text-color)] px-5 py-2 hover:bg-[var(--text-color)] hover:text-white transition-all">Contact</a>
        </nav>
      </div>
    </header>

    <main>
      <section id="top" class="pt-32 pb-8 bg-[var(--accent-color)] relative overflow-hidden">
        <div class="max-w-4xl mx-auto px-6 relative z-10">
          <nav class="mb-6 text-xs font-medium text-[var(--text-light)] flex items-center gap-2 tracking-widest">
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
              <span class="text-xs font-en font-light text-[var(--text-light)] tracking-wider">2025.04.01</span>
              <span class="border border-[var(--main-color)] text-[var(--main-color)] text-[10px] font-medium px-3 py-0.5 tracking-widest uppercase">Blog</span>
            </div>
            <h1 class="font-en text-3xl md:text-4xl font-light mb-8 leading-tight">ブログ記事のタイトルがここに入ります</h1>
            <div class="w-12 h-px bg-[var(--main-color)] mb-10"></div>

            <div class="overflow-hidden mb-10 aspect-video">
              <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover" alt="Blog image">
            </div>

            <div class="article-body text-[var(--text-light)] font-light">
              <p>ブログ記事の本文がここに表示されます。記事は管理画面から自由に作成・編集できます。</p>

              <h2>見出しレベル2</h2>
              <p>テキストコンテンツが入ります。段落ごとに適切な間隔が自動で設定されます。リンクや強調も使用できます。</p>

              <blockquote>引用テキストはこのように表示されます。左ボーダーとレッドのアクセントで、本文と視覚的に区別されます。</blockquote>

              <h3>見出しレベル3</h3>
              <ul>
                <li>リスト項目がここに入ります</li>
                <li>複数の項目を追加できます</li>
                <li>箇条書きで整理された情報を伝えます</li>
              </ul>

              <p>記事の締めくくりテキストが入ります。読者へのメッセージやCTAをここに配置します。</p>
            </div>

            <div class="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
              <a href="/blog" data-page-slug="blog" class="inline-flex items-center gap-2 border border-[var(--main-dark)] text-[var(--main-dark)] px-8 py-3 text-xs tracking-widest hover:bg-[var(--main-dark)] hover:text-white transition-all">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"/></svg>
                BACK TO LIST
              </a>
            </div>
          </article>
        </div>
      </section>

      <section class="py-20 bg-[var(--accent-color)]">
        <div class="max-w-4xl mx-auto px-6">
          <p class="font-en text-xs tracking-[0.3em] text-[var(--main-color)] uppercase mb-3">Related Posts</p>
          <h4 class="font-en text-2xl font-light mb-10">関連記事</h4>
          <div class="w-12 h-px bg-[var(--main-color)] mb-10"></div>
          <div class="grid md:grid-cols-3 gap-8">
            <a href="/blog/blog-page" class="group">
              <div class="aspect-video overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" alt="Related" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
              </div>
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs font-en font-light text-[var(--text-light)]">2025.03.15</span>
              </div>
              <h5 class="text-sm font-medium group-hover:text-[var(--main-color)] transition-colors line-clamp-2">関連記事のタイトルがここに表示されます。</h5>
            </a>
            <a href="/blog/blog-page" class="group">
              <div class="aspect-video overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800" alt="Related" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
              </div>
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs font-en font-light text-[var(--text-light)]">2025.03.01</span>
              </div>
              <h5 class="text-sm font-medium group-hover:text-[var(--main-color)] transition-colors line-clamp-2">関連記事のタイトルがここに表示されます。</h5>
            </a>
            <a href="/blog/blog-page" class="group">
              <div class="aspect-video overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800" alt="Related" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
              </div>
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs font-en font-light text-[var(--text-light)]">2025.02.15</span>
              </div>
              <h5 class="text-sm font-medium group-hover:text-[var(--main-color)] transition-colors line-clamp-2">関連記事のタイトルがここに表示されます。</h5>
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-[#111] text-white pt-20 pb-10 relative overflow-hidden">
      <!-- SVG decorative line -->
      <svg class="absolute top-0 left-0 w-full h-px pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="100%" y2="0" stroke="var(--main-color)" stroke-width="2" />
      </svg>
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div class="col-span-2 md:col-span-1">
            <div class="font-en text-xl font-light tracking-widest mb-6">Company Name</div>
            <p class="text-xs text-white/40 leading-loose font-light">
              株式会社サンプル<br>
              〒000-0000<br>
              東京都渋谷区1-1-1<br>
              TEL: 000-0000-0000
            </p>
          </div>
          <div>
            <h4 class="text-xs font-medium mb-6 tracking-[0.2em] uppercase text-white/60">Company</h4>
            <ul class="space-y-3 text-sm text-white/40 font-light">
              <li><a href="#" class="hover:text-[var(--main-color)] transition-colors">会社概要</a></li>
              <li><a href="#" class="hover:text-[var(--main-color)] transition-colors">代表挨拶</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-medium mb-6 tracking-[0.2em] uppercase text-white/60">Service</h4>
            <ul class="space-y-3 text-sm text-white/40 font-light">
              <li><a href="#" class="hover:text-[var(--main-color)] transition-colors">サービス一覧</a></li>
              <li><a href="#" class="hover:text-[var(--main-color)] transition-colors">実績紹介</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-medium mb-6 tracking-[0.2em] uppercase text-white/60">Other</h4>
            <ul class="space-y-3 text-sm text-white/40 font-light">
              <li><a href="#" class="hover:text-[var(--main-color)] transition-colors">採用情報</a></li>
              <li><a href="#" class="hover:text-[var(--main-color)] transition-colors">ブログ</a></li>
              <li><a href="#" class="hover:text-[var(--main-color)] transition-colors">お問い合わせ</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-white/10 pt-6 text-center text-xs text-white/30 font-light tracking-widest">
          <p>&copy; Company Name. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  </div>
</div>`,
};
