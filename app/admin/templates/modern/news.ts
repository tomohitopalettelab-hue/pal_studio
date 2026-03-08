import type { TemplateVariant } from '../types';

export const modernNewsTemplate: TemplateVariant = {
  id: 'variant-modern-news',
  templateId: 'template-modern',
  name: 'News',
  pageSlug: 'news',
  description: 'Modern / News list layout with visual focus',
  html: `
<div class="template-root" style="--main-color: #0f172a; --main-dark: #111827; --accent-color: #3b82f6; --text-color: #0f172a; --text-light: #64748b; --bg-color: #ffffff;">
  <div class="min-h-screen font-sans text-[var(--text-color)] bg-[var(--bg-color)] selection:bg-[var(--accent-color)] selection:text-white antialiased leading-relaxed">
    
    <header class="fixed w-full z-[100] bg-[var(--bg-color)]/80 backdrop-blur-xl border-b border-black/[0.03]">
      <div class="max-w-[1600px] mx-auto px-6 md:px-10 h-20 md:h-24 flex items-center justify-between">
        <div class="flex items-center gap-4 group cursor-pointer">
          <div class="relative w-8 h-8 md:w-10 md:h-10 bg-[var(--main-color)] flex items-center justify-center overflow-hidden">
            <span class="text-white font-bold text-sm md:text-base">M</span>
          </div>
          <h1 class="text-lg md:text-xl font-black tracking-[0.2em] uppercase">Studio<span class="text-[var(--accent-color)]">.</span></h1>
        </div>

        <nav data-sync="site-pages" class="hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.4em]">
          <a href="/" class="hover:text-[var(--accent-color)] transition-colors">Top</a>
          <a href="/#concept" class="hover:text-[var(--accent-color)] transition-colors">Concept</a>
          <a href="/#works" class="hover:text-[var(--accent-color)] transition-colors">Works</a>
          <a href="/news" class="text-[var(--accent-color)]">News</a>
          <a href="/#company" class="px-8 py-4 bg-[var(--main-color)] text-white text-[9px] hover:bg-[var(--accent-color)] transition-all">Get in touch</a>
        </nav>

        <label for="menu-toggle-news" class="lg:hidden cursor-pointer p-2 z-[110]">
          <div class="w-6 h-5 flex flex-col justify-between">
            <span class="w-full h-[2px] bg-[var(--main-color)]"></span>
            <span class="w-full h-[2px] bg-[var(--main-color)]"></span>
            <span class="w-full h-[2px] bg-[var(--main-color)]"></span>
          </div>
        </label>
      </div>
      <input type="checkbox" id="menu-toggle-news" class="hidden peer" />
      <div class="fixed inset-0 bg-[var(--main-dark)] translate-x-full peer-checked:translate-x-0 transition-transform duration-500 ease-in-out lg:hidden z-[105] flex flex-col items-center justify-center">
        <nav class="flex flex-col items-center gap-8 text-white text-xs font-bold uppercase tracking-[0.5em]">
          <a href="/" onclick="document.getElementById('menu-toggle-news').checked=false">Top</a>
          <a href="/news" onclick="document.getElementById('menu-toggle-news').checked=false">News</a>
          <a href="/#company" class="mt-4 px-10 py-5 bg-[var(--accent-color)]" onclick="document.getElementById('menu-toggle-news').checked=false">Get in touch</a>
        </nav>
      </div>
    </header>

    <main class="pt-32 md:pt-48">
      <section class="px-6 md:px-10 mb-20 md:mb-32">
        <div class="max-w-7xl mx-auto">
          <p class="text-[10px] font-bold tracking-[0.8em] text-[var(--accent-color)] uppercase mb-6">Updates</p>
          <h1 class="text-[clamp(3rem,10vw,8rem)] font-black tracking-tighter leading-none uppercase mb-10">
            News<br/><span class="italic font-light text-[var(--main-color)]" style="font-family: serif;">Archive.</span>
          </h1>
          <div class="w-20 h-[2px] bg-[var(--main-color)]"></div>
        </div>
      </section>

      <section class="px-6 md:px-10 mb-16">
        <div class="max-w-7xl mx-auto flex flex-wrap gap-4 md:gap-8 border-b border-black/5 pb-8 text-[10px] font-bold uppercase tracking-[0.3em]">
          <button class="text-[var(--accent-color)]">All View</button>
          <button class="text-slate-400 hover:text-[var(--main-color)] transition-colors">Information</button>
          <button class="text-slate-400 hover:text-[var(--main-color)] transition-colors">Event</button>
          <button class="text-slate-400 hover:text-[var(--main-color)] transition-colors">Release</button>
        </div>
      </section>

      <section class="px-6 md:px-10 pb-32">
        <div class="max-w-7xl mx-auto space-y-24 md:space-y-40">
          
          <a data-page-slug="news-page" href="/news-page" class="group block">
            <article class="cursor-pointer">
              <div class="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
                <div class="aspect-[16/9] overflow-hidden bg-slate-100 relative">
                  <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Featured News">
                  <div class="absolute top-0 left-0 bg-[var(--accent-color)] text-white text-[8px] font-black uppercase tracking-[0.4em] px-6 py-3">Latest News</div>
                </div>
                <div>
                  <p class="text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase mb-4 md:mb-6">2026.03.07 / Update</p>
                  <h2 class="text-3xl md:text-5xl font-bold tracking-tighter leading-tight mb-6 group-hover:text-[var(--accent-color)] transition-colors">ブランド刷新プロジェクトを公開。新たなビジョンへ。</h2>
                  <p class="text-[var(--text-light)] text-base md:text-lg font-light leading-relaxed mb-10 max-w-xl">
                    設計から運用までのプロセスを根本から整理し、成果と体験が共鳴するサイトへとアップデート。私たちが目指す次の10年のスタンダードを形にしました。
                  </p>
                  <div class="flex items-center gap-4">
                    <span class="text-[10px] font-bold uppercase tracking-[0.4em]">Read Full Article</span>
                    <div class="w-12 h-[1px] bg-black/20 group-hover:w-20 group-hover:bg-[var(--accent-color)] transition-all"></div>
                  </div>
                </div>
              </div>
            </article>
          </a>

          <div class="grid md:grid-cols-2 gap-x-16 gap-y-24 md:gap-y-32 border-t border-black/5 pt-24 md:pt-32">
            <a data-page-slug="news-page" href="/news-page" class="group block">
              <article class="cursor-pointer">
                <div class="aspect-video overflow-hidden mb-8 bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1542744095-2ad4870706d8?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="News 02">
                </div>
                <p class="text-[9px] font-bold tracking-[0.4em] text-slate-400 uppercase mb-4">2026.02.21 / Event</p>
                <h3 class="text-2xl font-bold tracking-tight mb-4 group-hover:text-[var(--accent-color)] transition-colors">次世代デザイン・サミット 2026 登壇決定のお知らせ</h3>
                <p class="text-sm text-[var(--text-light)] font-light leading-relaxed">デジタル体験の未来を議論する国際カンファレンスに、代表の田中が登壇します。最新のUX戦略について講演予定です。</p>
              </article>
            </a>

            <a data-page-slug="news-page" href="/news-page" class="group block">
              <article class="cursor-pointer">
                <div class="aspect-video overflow-hidden mb-8 bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="News 03">
                </div>
                <p class="text-[9px] font-bold tracking-[0.4em] text-slate-400 uppercase mb-4">2026.02.08 / Release</p>
                <h3 class="text-2xl font-bold tracking-tight mb-4 group-hover:text-[var(--accent-color)] transition-colors">新規サービス「Pal-Opt」ベータ版の提供を開始</h3>
                <p class="text-sm text-[var(--text-light)] font-light leading-relaxed">ビジネスの意思決定を加速させるAI分析ツールを公開。既存クライアント様向けに先行アクセスを開始しました。</p>
              </article>
            </a>
          </div>
        </div>
      </section>

      <section class="px-6 md:px-10 py-32 bg-[var(--main-dark)] text-white overflow-hidden relative">
        <div class="max-w-5xl mx-auto text-center relative z-10">
          <p class="text-[9px] font-bold tracking-[0.6em] uppercase text-[var(--accent-color)] mb-8">Media & Press</p>
          <h2 class="text-3xl md:text-5xl font-bold tracking-tighter mb-12">プレス・取材に関するお問い合わせ</h2>
          <button class="px-12 py-5 bg-white text-[var(--main-dark)] text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[var(--accent-color)] hover:text-white transition-all">Contact Us</button>
        </div>
        <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 70%);"></div>
      </section>
    </main>

    <footer class="py-20 md:py-32 bg-[var(--main-dark)] text-white px-6 md:px-10">
      <div class="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-20">
        <div>
          <h2 class="text-5xl md:text-[clamp(4rem,10vw,8rem)] font-black tracking-tighter mb-8 md:mb-12 italic opacity-20 leading-none">Let's talk.</h2>
          <p class="text-white/40 text-[9px] font-bold tracking-[0.5em] uppercase">© 2026 Studio Modern.</p>
        </div>
        <div class="flex flex-col gap-6 text-[9px] font-bold uppercase tracking-[0.3em] w-full md:w-auto">
          <div class="flex gap-8">
            <a href="#" class="hover:text-[var(--accent-color)] transition-colors">Instagram</a>
            <a href="#" class="hover:text-[var(--accent-color)] transition-colors">X</a>
            <a href="#" class="hover:text-[var(--accent-color)] transition-colors">LinkedIn</a>
          </div>
          <span class="text-white/20">Contact: hello@studio-modern.com</span>
        </div>
      </div>
    </footer>
  </div>
</div>
`
};