import type { Template } from './types';

export const noirTemplate: Template = {
  id: 'template-noir',
  name: 'Noir: ミニマルエディトリアル',
  tags: ['minimal', 'editorial', 'monochrome', 'creative', 'studio'],
  description: 'モノクロベースにレッドアクセント。クリエイティブスタジオ・デザイン事務所向けのエディトリアルデザイン。',
  html: `<div class="template-root" style="--main-color: #c8161d; --main-dark: #111; --accent-color: #f7f7f5; --text-color: #1a1a1a; --text-light: #999; --bg-color: #fff; --section-gap: 0; --section-padding: 4rem 0;">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Noto+Sans+JP:wght@300;400;700&display=swap');
    .template-root { font-family: 'Noto Sans JP', sans-serif; color: var(--text-color); }
    .template-root .font-display { font-family: 'Cormorant Garamond', serif; }
    .template-root [data-anim] { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease, transform 0.8s ease; }
    .template-root [data-anim].is-visible { opacity: 1; transform: translateY(0); }
    .template-root .line-accent { display: block; width: 40px; height: 1px; background: var(--main-color); }
    .template-root .hover-line { position: relative; }
    .template-root .hover-line::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 1px; background: var(--main-color); transition: width 0.3s ease; }
    .template-root .hover-line:hover::after { width: 100%; }
    .template-root .noir-hero { position: relative; height: 100vh; min-height: 600px; display: flex; align-items: center; justify-content: center; background: var(--main-dark); overflow: hidden; }
    .template-root .noir-hero::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 120px; background: linear-gradient(to top, var(--main-dark), transparent); z-index: 2; }
    .template-root .scroll-indicator { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); z-index: 10; display: flex; flex-direction: column; align-items: center; gap: 8px; color: rgba(255,255,255,0.5); font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; }
    .template-root .scroll-indicator span { display: block; width: 1px; height: 40px; background: rgba(255,255,255,0.3); animation: scrollPulse 2s ease-in-out infinite; }
    @keyframes scrollPulse { 0%, 100% { transform: scaleY(1); opacity: 0.3; } 50% { transform: scaleY(1.5); opacity: 1; } }
    .template-root .works-card img { transition: transform 0.6s ease; }
    .template-root .works-card:hover img { transform: scale(1.05); }
    .template-root .news-item { border-bottom: 1px solid #e5e5e5; }
    .template-root .news-item:first-child { border-top: 1px solid #e5e5e5; }
  </style>
  <div class="min-h-screen bg-[var(--bg-color)]">

    <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e5e5e5]">
      <div class="max-w-7xl mx-auto px-6 md:px-10 h-16 flex justify-between items-center">
        <div class="flex items-center gap-2">
          <span class="font-display text-2xl font-bold tracking-wider">NOIR</span>
          <span class="text-[10px] font-light tracking-[0.2em] text-[var(--text-light)] mt-1">STUDIO</span>
        </div>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-8 text-xs font-normal tracking-[0.15em] uppercase">
          <a href="#concept" class="hover-line hover:text-[var(--main-color)] transition-colors">About</a>
          <a href="#features" class="hover-line hover:text-[var(--main-color)] transition-colors">Strengths</a>
          <a href="#service" class="hover-line hover:text-[var(--main-color)] transition-colors">Service</a>
          <a href="#works" class="hover-line hover:text-[var(--main-color)] transition-colors">Works</a>
          <a href="#company" class="border border-[var(--text-color)] px-5 py-2 hover:bg-[var(--text-color)] hover:text-white transition-all">Contact</a>
        </nav>
      </div>
    </header>

    <main>
      <!-- top: ヒーロー -->
      <section id="top" class="noir-hero">
        <div class="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000" class="w-full h-full object-cover opacity-20" alt="Hero">
        </div>
        <div class="relative z-10 text-center px-6" data-anim>
          <p class="text-xs tracking-[0.3em] uppercase text-[var(--main-color)] mb-6">Design / Art Direction / Branding</p>
          <h1 class="font-display text-5xl md:text-8xl font-bold text-white leading-none mb-8 italic">
            Making Digital<br>Beautiful
          </h1>
          <span class="line-accent mx-auto"></span>
        </div>
        <div class="scroll-indicator">
          Scroll
          <span></span>
        </div>
      </section>

      <!-- concept: アバウト -->
      <section id="concept" class="py-24 md:py-32 bg-[var(--bg-color)]">
        <div class="max-w-4xl mx-auto px-6 text-center" data-anim>
          <p class="text-xs tracking-[0.3em] uppercase text-[var(--main-color)] mb-4">Our Philosophy</p>
          <h2 class="font-display text-3xl md:text-5xl font-bold italic leading-tight mb-8">
            Less, but better.
          </h2>
          <span class="line-accent mx-auto mb-8"></span>
          <p class="text-sm md:text-base text-[var(--text-light)] leading-[2] max-w-2xl mx-auto">
            本質を見極め、余分を削ぎ落とすことで、真に美しいデザインが生まれる。私たちはミニマリズムの力を信じ、すべてのプロジェクトに洗練された美意識を注ぎ込みます。ブランドの核心を捉え、記憶に残る体験をデザインします。
          </p>
        </div>
      </section>

      <!-- features: 強み -->
      <section id="features" class="py-24 bg-[var(--accent-color)]">
        <div class="max-w-6xl mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-16 items-start">
            <div data-anim>
              <p class="text-xs tracking-[0.3em] uppercase text-[var(--main-color)] mb-4">Strengths</p>
              <h2 class="font-display text-3xl md:text-4xl font-bold italic leading-tight mb-6">
                What Sets<br>Us Apart
              </h2>
              <span class="line-accent mb-8"></span>
              <p class="text-sm text-[var(--text-light)] leading-[2]">
                戦略的思考とクリエイティブの融合。数値に裏打ちされたデザインで、ビジネスの成長を支えます。
              </p>
            </div>
            <div class="space-y-10" data-anim>
              <div class="flex gap-6">
                <span class="font-display text-4xl font-bold text-[var(--main-color)] leading-none shrink-0">01</span>
                <div>
                  <h3 class="text-lg font-bold mb-2">ストラテジック・デザイン</h3>
                  <p class="text-sm text-[var(--text-light)] leading-relaxed">ビジネス課題を深く理解し、戦略に基づいたクリエイティブを提供。見た目だけでない、成果に繋がるデザインを実現します。</p>
                </div>
              </div>
              <div class="flex gap-6">
                <span class="font-display text-4xl font-bold text-[var(--main-color)] leading-none shrink-0">02</span>
                <div>
                  <h3 class="text-lg font-bold mb-2">ピクセルパーフェクト</h3>
                  <p class="text-sm text-[var(--text-light)] leading-relaxed">1pxの違いにこだわる徹底した品質管理。細部まで妥協しないクラフトマンシップが、プロフェッショナルな仕上がりを保証します。</p>
                </div>
              </div>
              <div class="flex gap-6">
                <span class="font-display text-4xl font-bold text-[var(--main-color)] leading-none shrink-0">03</span>
                <div>
                  <h3 class="text-lg font-bold mb-2">トータルブランディング</h3>
                  <p class="text-sm text-[var(--text-light)] leading-relaxed">ロゴ、Web、印刷物まで一貫したブランド体験を構築。あらゆるタッチポイントで統一された世界観を実現します。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- service: サービス -->
      <section id="service" class="py-24 bg-[var(--bg-color)]">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-16" data-anim>
            <p class="text-xs tracking-[0.3em] uppercase text-[var(--main-color)] mb-4">Services</p>
            <h2 class="font-display text-3xl md:text-4xl font-bold italic">What We Do</h2>
          </div>
          <div class="grid md:grid-cols-3 gap-8" data-anim>
            <div class="group">
              <div class="aspect-[4/3] overflow-hidden mb-6">
                <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Service 1">
              </div>
              <span class="text-xs tracking-[0.2em] text-[var(--main-color)] font-bold">01</span>
              <h3 class="text-xl font-bold mt-2 mb-3">ブランディング</h3>
              <p class="text-sm text-[var(--text-light)] leading-relaxed">ブランドの本質を捉え、ロゴ・VI・ガイドラインを策定。一貫した世界観を構築します。</p>
            </div>
            <div class="group">
              <div class="aspect-[4/3] overflow-hidden mb-6">
                <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Service 2">
              </div>
              <span class="text-xs tracking-[0.2em] text-[var(--main-color)] font-bold">02</span>
              <h3 class="text-xl font-bold mt-2 mb-3">Webデザイン・開発</h3>
              <p class="text-sm text-[var(--text-light)] leading-relaxed">美しさと機能性を両立したWebサイトを設計・開発。ユーザー体験を最大化します。</p>
            </div>
            <div class="group">
              <div class="aspect-[4/3] overflow-hidden mb-6">
                <img src="https://images.unsplash.com/photo-1586717799252-bd134571d546?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Service 3">
              </div>
              <span class="text-xs tracking-[0.2em] text-[var(--main-color)] font-bold">03</span>
              <h3 class="text-xl font-bold mt-2 mb-3">アートディレクション</h3>
              <p class="text-sm text-[var(--text-light)] leading-relaxed">撮影・映像・グラフィックのディレクション。ビジュアルコミュニケーションを統括します。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- works: ポートフォリオ -->
      <section id="works" class="py-24 bg-[var(--accent-color)]">
        <div class="max-w-6xl mx-auto px-6">
          <div class="flex justify-between items-end mb-12" data-anim>
            <div>
              <p class="text-xs tracking-[0.3em] uppercase text-[var(--main-color)] mb-4">Works</p>
              <h2 class="font-display text-3xl md:text-4xl font-bold italic">Selected Projects</h2>
            </div>
            <a href="/works" class="hidden md:block text-xs tracking-[0.15em] uppercase hover-line hover:text-[var(--main-color)] transition-colors">View All</a>
          </div>
          <div class="grid md:grid-cols-3 gap-6" data-anim>
            <a href="/works/work-page" class="works-card group block">
              <div class="aspect-[3/4] overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover" alt="Work 1">
              </div>
              <span class="text-xs text-[var(--text-light)] tracking-[0.1em]">Branding</span>
              <h3 class="text-base font-bold mt-1 group-hover:text-[var(--main-color)] transition-colors">プロジェクト作品は公開投稿から自動生成されます。</h3>
            </a>
            <a href="/works/work-page" class="works-card group block">
              <div class="aspect-[3/4] overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover" alt="Work 2">
              </div>
              <span class="text-xs text-[var(--text-light)] tracking-[0.1em]">Web Design</span>
              <h3 class="text-base font-bold mt-1 group-hover:text-[var(--main-color)] transition-colors">作品タイトルがここに表示されます。</h3>
            </a>
            <a href="/works/work-page" class="works-card group block">
              <div class="aspect-[3/4] overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover" alt="Work 3">
              </div>
              <span class="text-xs text-[var(--text-light)] tracking-[0.1em]">Art Direction</span>
              <h3 class="text-base font-bold mt-1 group-hover:text-[var(--main-color)] transition-colors">最新のクリエイティブワークを紹介します。</h3>
            </a>
          </div>
        </div>
      </section>

      <!-- news: ニュース -->
      <section id="news" class="py-24 bg-[var(--bg-color)]">
        <div class="max-w-4xl mx-auto px-6">
          <div class="flex justify-between items-end mb-12" data-anim>
            <div>
              <p class="text-xs tracking-[0.3em] uppercase text-[var(--main-color)] mb-4">News</p>
              <h2 class="font-display text-3xl md:text-4xl font-bold italic">Latest News</h2>
            </div>
            <a href="/news" class="text-xs tracking-[0.15em] uppercase hover-line hover:text-[var(--main-color)] transition-colors">View All</a>
          </div>
          <div data-anim>
            <a href="/news/news-page" class="news-item group flex items-center gap-6 py-5 hover:pl-2 transition-all">
              <time class="text-xs text-[var(--text-light)] tracking-wider shrink-0">2025.04.01</time>
              <span class="text-[10px] tracking-wider uppercase border border-[var(--main-color)] text-[var(--main-color)] px-3 py-0.5 shrink-0">Info</span>
              <span class="text-sm group-hover:text-[var(--main-color)] transition-colors line-clamp-1">最新情報は公開投稿から自動生成されます。</span>
            </a>
            <a href="/news/news-page" class="news-item group flex items-center gap-6 py-5 hover:pl-2 transition-all">
              <time class="text-xs text-[var(--text-light)] tracking-wider shrink-0">2025.03.15</time>
              <span class="text-[10px] tracking-wider uppercase border border-[var(--main-color)] text-[var(--main-color)] px-3 py-0.5 shrink-0">Award</span>
              <span class="text-sm group-hover:text-[var(--main-color)] transition-colors line-clamp-1">ニュース記事のタイトルがここに表示されます。</span>
            </a>
            <a href="/news/news-page" class="news-item group flex items-center gap-6 py-5 hover:pl-2 transition-all">
              <time class="text-xs text-[var(--text-light)] tracking-wider shrink-0">2025.03.01</time>
              <span class="text-[10px] tracking-wider uppercase border border-[var(--main-color)] text-[var(--main-color)] px-3 py-0.5 shrink-0">Press</span>
              <span class="text-sm group-hover:text-[var(--main-color)] transition-colors line-clamp-1">メディア掲載のお知らせ。</span>
            </a>
          </div>
        </div>
      </section>

      <!-- blog: ブログ -->
      <section id="blog" class="py-24 bg-[var(--accent-color)]">
        <div class="max-w-6xl mx-auto px-6">
          <div class="flex justify-between items-end mb-12" data-anim>
            <div>
              <p class="text-xs tracking-[0.3em] uppercase text-[var(--main-color)] mb-4">Blog</p>
              <h2 class="font-display text-3xl md:text-4xl font-bold italic">Journal</h2>
            </div>
            <a href="/blog" class="text-xs tracking-[0.15em] uppercase hover-line hover:text-[var(--main-color)] transition-colors">View All</a>
          </div>
          <div class="grid md:grid-cols-3 gap-8" data-anim>
            <a href="/blog/blog-page" class="group">
              <div class="aspect-video overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1618556450994-a163df44067a?auto=format&fit=crop&q=80&w=800" alt="Blog 1" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              </div>
              <div class="flex items-center gap-3 mb-2">
                <time class="text-xs text-[var(--text-light)] tracking-wider">2025.04.01</time>
                <span class="text-[10px] tracking-wider uppercase text-[var(--main-color)]">Design</span>
              </div>
              <h3 class="text-sm font-bold leading-relaxed group-hover:text-[var(--main-color)] transition-colors line-clamp-2">ブログ記事は公開投稿から自動生成されます。</h3>
            </a>
            <a href="/blog/blog-page" class="group">
              <div class="aspect-video overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=800" alt="Blog 2" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              </div>
              <div class="flex items-center gap-3 mb-2">
                <time class="text-xs text-[var(--text-light)] tracking-wider">2025.03.15</time>
                <span class="text-[10px] tracking-wider uppercase text-[var(--main-color)]">Branding</span>
              </div>
              <h3 class="text-sm font-bold leading-relaxed group-hover:text-[var(--main-color)] transition-colors line-clamp-2">ブログ記事のタイトルがここに表示されます。</h3>
            </a>
            <a href="/blog/blog-page" class="group">
              <div class="aspect-video overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800" alt="Blog 3" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              </div>
              <div class="flex items-center gap-3 mb-2">
                <time class="text-xs text-[var(--text-light)] tracking-wider">2025.03.01</time>
                <span class="text-[10px] tracking-wider uppercase text-[var(--main-color)]">Process</span>
              </div>
              <h3 class="text-sm font-bold leading-relaxed group-hover:text-[var(--main-color)] transition-colors line-clamp-2">クリエイティブプロセスについての考察。</h3>
            </a>
          </div>
        </div>
      </section>

      <!-- company: 企業情報 -->
      <section id="company" class="py-24 bg-[var(--bg-color)]">
        <div class="max-w-4xl mx-auto px-6">
          <div class="text-center mb-16" data-anim>
            <p class="text-xs tracking-[0.3em] uppercase text-[var(--main-color)] mb-4">Company</p>
            <h2 class="font-display text-3xl md:text-4xl font-bold italic">About Us</h2>
          </div>
          <div data-anim>
            <dl class="divide-y divide-[#e5e5e5]">
              <div class="flex flex-col sm:flex-row py-5">
                <dt class="w-40 text-xs tracking-[0.15em] uppercase text-[var(--text-light)] shrink-0 mb-1 sm:mb-0">会社名</dt>
                <dd class="text-sm">株式会社サンプル</dd>
              </div>
              <div class="flex flex-col sm:flex-row py-5">
                <dt class="w-40 text-xs tracking-[0.15em] uppercase text-[var(--text-light)] shrink-0 mb-1 sm:mb-0">設立</dt>
                <dd class="text-sm">2020年4月</dd>
              </div>
              <div class="flex flex-col sm:flex-row py-5">
                <dt class="w-40 text-xs tracking-[0.15em] uppercase text-[var(--text-light)] shrink-0 mb-1 sm:mb-0">所在地</dt>
                <dd class="text-sm">〒000-0000 東京都渋谷区1-1-1</dd>
              </div>
              <div class="flex flex-col sm:flex-row py-5">
                <dt class="w-40 text-xs tracking-[0.15em] uppercase text-[var(--text-light)] shrink-0 mb-1 sm:mb-0">代表</dt>
                <dd class="text-sm">山田 太郎</dd>
              </div>
              <div class="flex flex-col sm:flex-row py-5">
                <dt class="w-40 text-xs tracking-[0.15em] uppercase text-[var(--text-light)] shrink-0 mb-1 sm:mb-0">事業内容</dt>
                <dd class="text-sm">ブランディング / Webデザイン・開発 / アートディレクション</dd>
              </div>
            </dl>
          </div>

          <!-- Contact CTA -->
          <div class="grid md:grid-cols-2 gap-6 mt-16" data-anim>
            <a href="#" class="block bg-[var(--main-dark)] text-white p-10 group hover:bg-[var(--main-color)] transition-colors duration-300">
              <p class="text-xs tracking-[0.2em] uppercase mb-3 opacity-60">Telephone</p>
              <span class="font-display text-2xl font-bold">000-0000-0000</span>
              <p class="text-xs mt-4 opacity-50">平日 10:00 - 19:00</p>
            </a>
            <a href="#" class="block border border-[#e5e5e5] p-10 group hover:border-[var(--main-color)] transition-colors duration-300">
              <p class="text-xs tracking-[0.2em] uppercase mb-3 text-[var(--text-light)]">Contact Form</p>
              <span class="font-display text-2xl font-bold">Get in Touch</span>
              <p class="text-xs mt-4 text-[var(--text-light)]">お気軽にご相談ください</p>
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-[var(--main-dark)] text-white pt-16 pb-10">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div class="col-span-2 md:col-span-1">
            <span class="font-display text-xl font-bold tracking-wider block mb-4">NOIR</span>
            <p class="text-xs text-white/40 leading-loose">
              株式会社サンプル<br>
              〒000-0000<br>
              東京都渋谷区1-1-1<br>
              TEL: 000-0000-0000
            </p>
          </div>
          <div>
            <h4 class="text-xs tracking-[0.15em] uppercase mb-6 text-white/60">Service</h4>
            <ul class="space-y-3 text-sm text-white/40">
              <li><a href="#" class="hover:text-[var(--main-color)] transition-colors">ブランディング</a></li>
              <li><a href="#" class="hover:text-[var(--main-color)] transition-colors">Webデザイン</a></li>
              <li><a href="#" class="hover:text-[var(--main-color)] transition-colors">アートディレクション</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs tracking-[0.15em] uppercase mb-6 text-white/60">Company</h4>
            <ul class="space-y-3 text-sm text-white/40">
              <li><a href="#" class="hover:text-[var(--main-color)] transition-colors">会社概要</a></li>
              <li><a href="#" class="hover:text-[var(--main-color)] transition-colors">採用情報</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs tracking-[0.15em] uppercase mb-6 text-white/60">Content</h4>
            <ul class="space-y-3 text-sm text-white/40">
              <li><a href="#" class="hover:text-[var(--main-color)] transition-colors">ニュース</a></li>
              <li><a href="#" class="hover:text-[var(--main-color)] transition-colors">ブログ</a></li>
              <li><a href="#" class="hover:text-[var(--main-color)] transition-colors">お問い合わせ</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-white/10 pt-6 text-center text-[10px] tracking-[0.15em] text-white/30">
          <p>&copy; NOIR STUDIO. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  </div>

  <script>
    (function(){
      var observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){ entry.target.classList.add('is-visible'); }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.template-root [data-anim]').forEach(function(el){ observer.observe(el); });
    })();
  </script>
</div>`,
};
