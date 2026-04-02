import type { TemplateVariant } from '../types';

export const noirNewsPageTemplate: TemplateVariant = {
  id: 'variant-noir-news-page',
  templateId: 'template-noir',
  name: 'News Detail',
  pageSlug: 'news-page',
  description: 'Noir / ニュース記事詳細ページ',
  html: `
<div class="template-root" style="--main-color: #c8161d; --main-dark: #1a1a1a; --accent-color: #f7f7f5; --text-color: #1a1a1a; --text-light: #999999; --bg-color: #ffffff;">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
    .template-root { font-family: 'Noto Sans JP', sans-serif; }
    .template-root .font-en { font-family: 'Cormorant Garamond', serif; }
    .template-root .dac-line { stroke: var(--main-color); stroke-width: 0.5; opacity: 0.15; }
    .template-root .article-body { line-height: 2; }
    .template-root .article-body p { margin-bottom: 1.5rem; font-weight: 300; color: var(--text-light); }
    .template-root .article-body h2 { font-size: 1.375rem; font-weight: 500; margin: 3rem 0 1rem; padding-bottom: 0.75rem; border-bottom: 1px solid #e5e5e5; color: var(--main-dark); }
    .template-root .article-body h3 { font-size: 1.125rem; font-weight: 500; margin: 2rem 0 0.75rem; color: var(--main-dark); }
    .template-root .article-body ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; color: var(--text-light); }
    .template-root .article-body ol { list-style: decimal; padding-left: 1.5rem; margin-bottom: 1.5rem; color: var(--text-light); }
    .template-root .article-body li { margin-bottom: 0.5rem; font-weight: 300; }
    .template-root .article-body blockquote { border-left: 2px solid var(--main-color); padding: 1rem 1.5rem; background: var(--accent-color); margin: 2rem 0; font-weight: 300; color: var(--text-light); font-style: italic; }
    .template-root .article-body img { width: 100%; height: auto; margin: 2rem 0; }
    .template-root .article-body a { color: var(--main-color); text-decoration: underline; text-underline-offset: 3px; }
    .template-root .article-body a:hover { opacity: 0.7; }
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
        <svg class="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line class="dac-line" x1="10%" y1="0" x2="10%" y2="100%" />
          <line class="dac-line" x1="90%" y1="0" x2="90%" y2="100%" />
        </svg>
        <div class="max-w-4xl mx-auto px-6 relative z-10">
          <nav class="mb-6 text-xs font-medium text-[var(--text-light)] flex items-center gap-2 tracking-widest">
            <a href="/" class="hover:text-[var(--main-color)] transition-colors uppercase">HOME</a>
            <span class="text-gray-300">&gt;</span>
            <a href="/news" data-page-slug="news" class="hover:text-[var(--main-color)] transition-colors">ニュース</a>
            <span class="text-gray-300">&gt;</span>
            <span class="text-[var(--main-color)]">記事詳細</span>
          </nav>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-6">
          <article>
            <div class="flex items-center gap-4 mb-6">
              <time class="font-en text-sm font-light text-[var(--text-light)] tracking-wider">2025.04.01</time>
              <span class="text-[10px] font-medium tracking-widest uppercase border border-[var(--main-color)] text-[var(--main-color)] px-3 py-1">お知らせ</span>
            </div>
            <h1 class="text-2xl md:text-3xl font-medium leading-relaxed mb-8">新サービス提供開始のお知らせ</h1>
            <div class="w-12 h-px bg-[var(--main-color)] mb-10"></div>

            <div class="overflow-hidden mb-12 aspect-video">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover" alt="Article image">
            </div>

            <div class="article-body">
              <p>この度、新たなサービスの提供を開始いたしました。お客様のビジネス課題に合わせた多様な支援プランをご用意しております。</p>

              <h2>サービス概要</h2>
              <p>長年の実績と専門知識を活かし、お客様の課題解決に最適なソリューションをご提案いたします。詳細については下記をご覧ください。</p>

              <ul>
                <li>ブランド戦略策定およびクリエイティブディレクション</li>
                <li>Webサイト・アプリケーションの設計と開発</li>
                <li>デジタルマーケティング施策の企画・運用</li>
              </ul>

              <blockquote>私たちは、お客様のビジネスパートナーとして持続的な成長をサポートいたします。</blockquote>

              <h2>お問い合わせ</h2>
              <p>サービスに関するご質問・ご相談はお気軽にお問い合わせください。</p>
            </div>

            <div class="mt-16 pt-10 border-t border-gray-200 flex justify-between items-center">
              <a href="/news" data-page-slug="news" class="group inline-flex items-center gap-3 text-sm font-medium text-[var(--main-dark)] hover:text-[var(--main-color)] transition-colors tracking-wider">
                <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"/></svg>
                ニュース一覧へ戻る
              </a>
            </div>
          </article>
        </div>
      </section>

      <section class="py-20 bg-[var(--accent-color)]">
        <div class="max-w-4xl mx-auto px-6">
          <p class="font-en text-xs tracking-[0.3em] text-[var(--main-color)] uppercase mb-3">Related News</p>
          <h3 class="text-xl font-medium mb-10">関連ニュース</h3>
          <div class="w-12 h-px bg-[var(--main-color)] mb-10"></div>
          <div class="divide-y divide-gray-200">
            <a href="/news/news-page" class="group flex items-center gap-6 py-6">
              <time class="font-en text-sm font-light text-[var(--text-light)] tracking-wider shrink-0 w-28">2025.03.15</time>
              <span class="flex-1 text-sm font-normal group-hover:text-[var(--main-color)] transition-colors">関連ニュースのタイトルがここに表示されます。</span>
              <svg class="w-4 h-4 text-[var(--text-light)] group-hover:text-[var(--main-color)] group-hover:translate-x-1 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"/></svg>
            </a>
            <a href="/news/news-page" class="group flex items-center gap-6 py-6">
              <time class="font-en text-sm font-light text-[var(--text-light)] tracking-wider shrink-0 w-28">2025.03.01</time>
              <span class="flex-1 text-sm font-normal group-hover:text-[var(--main-color)] transition-colors">関連ニュースのタイトルがここに表示されます。</span>
              <svg class="w-4 h-4 text-[var(--text-light)] group-hover:text-[var(--main-color)] group-hover:translate-x-1 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-[#111] text-white pt-20 pb-10 relative overflow-hidden">
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
