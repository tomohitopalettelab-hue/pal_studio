import type { TemplateVariant } from '../types';

export const noirPageTemplate: TemplateVariant = {
  id: 'variant-noir-page',
  templateId: 'template-noir',
  name: 'Free Page',
  pageSlug: 'page',
  description: 'Noir / フリーページ',
  html: `<div class="template-root" style="--main-color: #c8161d; --main-dark: #1a1a1a; --accent-color: #f7f7f5; --text-color: #1a1a1a; --text-light: #999999; --bg-color: #ffffff; --section-gap: 0; --section-padding: 4rem 0;">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
    .template-root { font-family: 'Noto Sans JP', sans-serif; }
    .template-root .font-en { font-family: 'Cormorant Garamond', serif; }
    .template-root .dac-line { stroke: var(--main-color); stroke-width: 0.5; opacity: 0.15; }
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
      <!-- ページヒーロー -->
      <section id="top" class="py-24 bg-[var(--accent-color)] relative overflow-hidden">
        <svg class="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line class="dac-line" x1="10%" y1="0" x2="10%" y2="100%" />
          <line class="dac-line" x1="90%" y1="0" x2="90%" y2="100%" />
        </svg>
        <div class="max-w-6xl mx-auto px-6 relative z-10">
          <nav class="flex items-center gap-2 text-xs text-[var(--text-light)] mb-10 font-light tracking-widest">
            <a href="/" class="hover:text-[var(--main-color)] transition-colors uppercase">HOME</a>
            <span class="text-[var(--text-light)]/40">/</span>
            <span class="text-[var(--main-color)]">ページタイトル</span>
          </nav>
          <p class="font-en text-sm tracking-[0.3em] text-[var(--main-color)] mb-4 uppercase">( Page )</p>
          <h1 class="font-en text-4xl md:text-6xl font-light leading-tight mb-6 text-[var(--main-dark)]">ページタイトル</h1>
          <div class="w-12 h-px bg-[var(--main-color)] mb-8"></div>
          <p class="text-sm text-[var(--text-light)] font-light leading-[2.2] max-w-2xl">
            このページの概要テキストが入ります。自由にコンテンツを配置できるフリーページのテンプレートです。
          </p>
        </div>
      </section>

      <!-- テキストブロック -->
      <section class="py-28 bg-white relative overflow-hidden">
        <svg class="absolute top-0 right-0 w-64 h-64 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="60" r="120" fill="none" class="dac-line" stroke-width="0.5" />
          <circle cx="200" cy="60" r="80" fill="none" class="dac-line" stroke-width="0.5" />
        </svg>
        <div class="max-w-6xl mx-auto px-6">
          <div class="max-w-3xl">
            <p class="font-en text-xs tracking-[0.3em] text-[var(--main-color)] mb-4 uppercase">Section Title</p>
            <h2 class="font-en text-3xl md:text-4xl font-light leading-tight mb-8">見出しテキスト</h2>
            <div class="w-12 h-px bg-[var(--main-color)] mb-8"></div>
            <p class="text-sm text-[var(--text-light)] leading-[2.2] font-light mb-6">
              本文テキストが入ります。このセクションでは、サービスや事業の全体像を説明します。お客様にとってのメリットや特徴を、わかりやすい言葉でお伝えします。余計な装飾を排し、コンテンツそのものが語りかけるデザインを心がけています。
            </p>
            <p class="text-sm text-[var(--text-light)] leading-[2.2] font-light">
              テクノロジーとクリエイティビティを融合させ、新しい価値を生み出します。プロジェクトの成功に向けて、戦略立案から実装まで一貫したサポートをご提供いたします。
            </p>
          </div>
        </div>
      </section>

      <!-- 画像＋テキスト 横並びセクション -->
      <section class="py-28 bg-[var(--accent-color)] relative overflow-hidden">
        <svg class="absolute bottom-0 left-0 w-full h-px pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line class="dac-line" x1="0" y1="0" x2="100%" y2="0" />
        </svg>
        <div class="max-w-6xl mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-20 items-center">
            <div class="relative">
              <div class="overflow-hidden aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1618556450994-a163d8d5e0e6?auto=format&fit=crop&q=80&w=1000" class="w-full h-full object-cover" alt="Section image">
              </div>
              <div class="absolute -bottom-6 -left-6 w-48 h-48 border border-[var(--main-color)]/20"></div>
            </div>
            <div>
              <p class="font-en text-xs tracking-[0.3em] text-[var(--main-color)] mb-4 uppercase">Image &amp; Text</p>
              <h2 class="font-en text-3xl md:text-4xl font-light leading-tight mb-8">画像とテキストの<br>レイアウト</h2>
              <div class="w-12 h-px bg-[var(--main-color)] mb-8"></div>
              <p class="text-sm text-[var(--text-light)] leading-[2.2] font-light mb-6">
                画像とテキストを横並びに配置するセクションです。サービスの特徴やプロジェクトの詳細を、ビジュアルと合わせて効果的に伝えることができます。
              </p>
              <p class="text-sm text-[var(--text-light)] leading-[2.2] font-light">
                レスポンシブ対応により、モバイルでは縦並びに切り替わります。画像は自由に差し替えてご利用ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- フルワイド画像セクション -->
      <section class="relative overflow-hidden">
        <div class="aspect-[21/9] max-h-[500px] w-full">
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000" class="w-full h-full object-cover" alt="Full width image">
        </div>
        <div class="absolute inset-0 bg-[var(--main-dark)]/40 flex items-center justify-center">
          <div class="text-center">
            <p class="font-en text-sm tracking-[0.3em] text-white/60 mb-4 uppercase">Full Width Image</p>
            <h2 class="font-en text-3xl md:text-5xl font-light text-white">フルワイド画像</h2>
          </div>
        </div>
      </section>

      <!-- 引用・ハイライトセクション -->
      <section class="py-28 bg-white relative overflow-hidden">
        <svg class="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(0,0,0,0.03)" stroke-width="0.5" />
        </svg>
        <div class="max-w-4xl mx-auto px-6 text-center">
          <div class="mb-12">
            <p class="font-en text-xs tracking-[0.3em] text-[var(--main-color)] mb-4 uppercase">Highlight</p>
            <div class="w-12 h-px bg-[var(--main-color)] mx-auto mb-10"></div>
          </div>
          <div class="border-l-2 border-[var(--main-color)] pl-8 md:pl-12 text-left max-w-2xl mx-auto">
            <p class="font-en text-2xl md:text-3xl font-light leading-relaxed text-[var(--main-dark)] mb-6 italic">
              Simplicity is the<br>ultimate sophistication.
            </p>
            <p class="text-sm text-[var(--text-light)] leading-[2.2] font-light">
              引用やハイライトしたいテキストをここに配置します。印象的なメッセージやキーフレーズを強調するセクションとしてご活用ください。キャッチコピーやお客様の声など、目を引くコンテンツに最適です。
            </p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-28 bg-[var(--accent-color)] relative overflow-hidden">
        <svg class="absolute top-0 left-0 w-full h-px pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line class="dac-line" x1="0" y1="0" x2="100%" y2="0" />
        </svg>
        <div class="max-w-4xl mx-auto px-6 text-center">
          <p class="font-en text-xs tracking-[0.3em] text-[var(--main-color)] mb-4 uppercase">Get In Touch</p>
          <h2 class="font-en text-4xl md:text-5xl font-light mb-6">Contact</h2>
          <div class="w-12 h-px bg-[var(--main-color)] mx-auto mb-10"></div>
          <p class="text-sm text-[var(--text-light)] font-light leading-[2] mb-12">
            ご質問・ご相談はお気軽にお問い合わせください。<br>
            私たちのチームが、最適なソリューションをご提案いたします。
          </p>
          <a href="/contact" data-page-slug="contact" class="inline-block bg-[var(--main-color)] text-white px-12 py-4 text-sm tracking-widest hover:opacity-80 transition-all">
            CONTACT
          </a>
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
