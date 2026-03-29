import type { TemplateVariant } from '../types';

export const noirNewsTemplate: TemplateVariant = {
  id: 'variant-noir-news',
  templateId: 'template-noir',
  name: 'News',
  pageSlug: 'news',
  description: 'Noir / ニュース一覧ページ',
  html: `
<div class="template-root" style="--main-color: #c8161d; --main-dark: #1a1a1a; --accent-color: #f7f7f5; --text-color: #1a1a1a; --text-light: #999999; --bg-color: #ffffff;">
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
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-8 text-xs font-medium tracking-[0.2em] uppercase"></nav>
      </div>
    </header>

    <main>
      <section id="top" class="pt-32 pb-16 bg-[var(--accent-color)] relative overflow-hidden">
        <svg class="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line class="dac-line" x1="10%" y1="0" x2="10%" y2="100%" />
          <line class="dac-line" x1="90%" y1="0" x2="90%" y2="100%" />
        </svg>
        <div class="max-w-6xl mx-auto px-6 relative z-10">
          <nav class="mb-8 text-xs font-medium text-[var(--text-light)] flex items-center gap-2 tracking-widest">
            <a href="/" class="hover:text-[var(--main-color)] transition-colors uppercase">HOME</a>
            <span class="text-gray-300">&gt;</span>
            <span class="text-[var(--main-color)]">ニュース</span>
          </nav>
          <p class="font-en text-xs tracking-[0.3em] text-[var(--main-color)] uppercase mb-3">( News )</p>
          <h1 class="text-3xl md:text-4xl font-medium leading-tight mb-4">ニュース一覧</h1>
          <div class="w-12 h-px bg-[var(--main-color)] mt-4"></div>
        </div>
      </section>

      <section class="py-20 bg-white relative overflow-hidden">
        <div class="max-w-5xl mx-auto px-6">
          <div class="divide-y divide-gray-200">

            <a href="/news/news-page" class="group flex items-center gap-6 py-7 hover:bg-[var(--accent-color)] transition-colors -mx-6 px-6">
              <time class="font-en text-sm font-light text-[var(--text-light)] tracking-wider shrink-0 w-28">2025.04.01</time>
              <span class="text-[10px] font-medium tracking-widest uppercase border border-[var(--main-color)] text-[var(--main-color)] px-3 py-1 shrink-0">お知らせ</span>
              <span class="flex-1 text-sm font-normal group-hover:text-[var(--main-color)] transition-colors">新サービス提供開始のお知らせ</span>
              <svg class="w-4 h-4 text-[var(--text-light)] group-hover:text-[var(--main-color)] group-hover:translate-x-1 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"/></svg>
            </a>

            <a href="/news/news-page" class="group flex items-center gap-6 py-7 hover:bg-[var(--accent-color)] transition-colors -mx-6 px-6">
              <time class="font-en text-sm font-light text-[var(--text-light)] tracking-wider shrink-0 w-28">2025.03.15</time>
              <span class="text-[10px] font-medium tracking-widest uppercase border border-[var(--main-dark)] text-[var(--main-dark)] px-3 py-1 shrink-0">プレスリリース</span>
              <span class="flex-1 text-sm font-normal group-hover:text-[var(--main-color)] transition-colors">業務提携に関するプレスリリースを公開いたしました</span>
              <svg class="w-4 h-4 text-[var(--text-light)] group-hover:text-[var(--main-color)] group-hover:translate-x-1 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"/></svg>
            </a>

            <a href="/news/news-page" class="group flex items-center gap-6 py-7 hover:bg-[var(--accent-color)] transition-colors -mx-6 px-6">
              <time class="font-en text-sm font-light text-[var(--text-light)] tracking-wider shrink-0 w-28">2025.03.01</time>
              <span class="text-[10px] font-medium tracking-widest uppercase border border-[var(--main-color)] text-[var(--main-color)] px-3 py-1 shrink-0">お知らせ</span>
              <span class="flex-1 text-sm font-normal group-hover:text-[var(--main-color)] transition-colors">コーポレートサイトリニューアルのお知らせ</span>
              <svg class="w-4 h-4 text-[var(--text-light)] group-hover:text-[var(--main-color)] group-hover:translate-x-1 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"/></svg>
            </a>

            <a href="/news/news-page" class="group flex items-center gap-6 py-7 hover:bg-[var(--accent-color)] transition-colors -mx-6 px-6">
              <time class="font-en text-sm font-light text-[var(--text-light)] tracking-wider shrink-0 w-28">2025.02.10</time>
              <span class="text-[10px] font-medium tracking-widest uppercase border border-[var(--text-light)] text-[var(--text-light)] px-3 py-1 shrink-0">メディア掲載</span>
              <span class="flex-1 text-sm font-normal group-hover:text-[var(--main-color)] transition-colors">日経デザイン誌に当社の取り組みが掲載されました</span>
              <svg class="w-4 h-4 text-[var(--text-light)] group-hover:text-[var(--main-color)] group-hover:translate-x-1 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"/></svg>
            </a>

            <a href="/news/news-page" class="group flex items-center gap-6 py-7 hover:bg-[var(--accent-color)] transition-colors -mx-6 px-6">
              <time class="font-en text-sm font-light text-[var(--text-light)] tracking-wider shrink-0 w-28">2025.01.20</time>
              <span class="text-[10px] font-medium tracking-widest uppercase border border-[var(--main-color)] text-[var(--main-color)] px-3 py-1 shrink-0">お知らせ</span>
              <span class="flex-1 text-sm font-normal group-hover:text-[var(--main-color)] transition-colors">年末年始の営業日程に関するご案内</span>
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
