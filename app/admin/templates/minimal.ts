import type { Template } from './types';

export const minimalTemplate: Template = {
  id: 'template-minimal',
  name: 'Minimal: 洗練された余白',
  tags: ['minimal', 'art', 'fashion', 'white'],
  description: '要素を極限まで削ぎ落とし、余白で語るデザイン。',
  html: `<div class="template-root" style="--main-color: #000000; --accent-color: #f8fafc; --text-color: #1a1a1a; --text-light: #64748b; --bg-color: #ffffff;">
  <div class="min-h-screen font-sans text-[var(--text-color)] bg-[var(--bg-color)] selection:bg-black selection:text-white">
    
    <header class="sticky top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
        <h1 class="text-lg font-bold tracking-[0.4em] uppercase">Mnml</h1>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-[0.2em] uppercase">
          <a href="#concept" class="hover:text-gray-400 transition-colors">Concept</a>
          <a href="#features" class="hover:text-gray-400 transition-colors">Method</a>
          <a href="#service" class="hover:text-gray-400 transition-colors">Pricing</a>
          <a href="#company" class="px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all">Contact</a>
        </nav>
      </div>
    </header>

    <main>
      <section id="top" class="py-32 md:py-48 px-8 max-w-7xl mx-auto">
        <div class="max-w-3xl">
          <h2 class="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-12">
            Less <span class="italic font-serif">is</span> more.<br/>
            本質を、デザインする。
          </h2>
          <p class="text-lg text-[var(--text-light)] leading-relaxed mb-16 max-w-xl">
            私たちは、情報の洪水の中から本当に価値のあるものだけを抽出し、研ぎ澄まされた形へと昇華させます。
          </p>
          <div class="flex items-center gap-4">
            <div class="h-px w-20 bg-black"></div>
            <span class="text-xs font-bold tracking-[0.3em] uppercase">Est. 2026 Tokyo</span>
          </div>
        </div>
      </section>

      <section id="concept" class="py-32 px-8 bg-[var(--accent-color)]">
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div class="text-sm leading-[2.2] tracking-widest text-[var(--text-color)]">
            <h3 class="text-xs font-bold mb-10 tracking-[0.4em] uppercase text-[var(--text-light)]">Philosophy</h3>
            <p class="text-xl font-light">
              装飾は最小限に。メッセージは最大限に。<br/>
              無駄を削ぎ落とすプロセスこそが、<br/>
              ブランドの輪郭を最も鮮明に描き出します。
            </p>
          </div>
          <div class="aspect-video bg-white shadow-sm border border-slate-100 rounded-sm overflow-hidden">
             <img src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1000" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Minimal Interior">
          </div>
        </div>
      </section>

      <section id="features" class="py-32 px-8 max-w-7xl mx-auto">
        <div class="grid md:grid-cols-3 gap-12">
          <div class="border-t border-black pt-8">
            <h4 class="text-xs font-bold mb-6 tracking-[0.2em] uppercase">01. Identity</h4>
            <p class="text-[13px] leading-relaxed text-[var(--text-light)]">
              トレンドに左右されない、普遍的なアイデンティティを追求します。
            </p>
          </div>
          <div class="border-t border-black pt-8">
            <h4 class="text-xs font-bold mb-6 tracking-[0.2em] uppercase">02. Space</h4>
            <p class="text-[13px] leading-relaxed text-[var(--text-light)]">
              適切な余白を設計し、ユーザーの視線と直感に寄り添う構成を構築します。
            </p>
          </div>
          <div class="border-t border-black pt-8">
            <h4 class="text-xs font-bold mb-6 tracking-[0.2em] uppercase">03. Quality</h4>
            <p class="text-[13px] leading-relaxed text-[var(--text-light)]">
              1pxのズレも許さない緻密な実装で、デジタル上の体験を磨き上げます。
            </p>
          </div>
        </div>
      </section>

      <section id="service" class="py-32 px-8 bg-black text-white">
        <div class="max-w-4xl mx-auto">
          <h3 class="text-center text-xs tracking-[0.5em] uppercase mb-20 opacity-50">Service Plan</h3>
          <div class="divide-y divide-white/20">
            <div class="py-10 flex justify-between items-center group cursor-pointer">
              <span class="text-xl font-light tracking-widest group-hover:pl-4 transition-all uppercase">Design Consulting</span>
              <span class="text-sm font-bold tracking-widest">¥500,000 —</span>
            </div>
            <div class="py-10 flex justify-between items-center group cursor-pointer">
              <span class="text-xl font-light tracking-widest group-hover:pl-4 transition-all uppercase">Full Identity System</span>
              <span class="text-sm font-bold tracking-widest">¥1,200,000 —</span>
            </div>
          </div>
        </div>
      </section>

      <section id="works" class="py-32 px-8 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="group">
            <div class="aspect-square bg-slate-100 overflow-hidden relative border border-slate-100">
              <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700">
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
            </div>
            <p class="mt-4 text-[10px] tracking-widest uppercase font-bold text-gray-400 italic">2026 / Visual Study</p>
          </div>
          <div class="group">
            <div class="aspect-square bg-slate-100 overflow-hidden relative border border-slate-100">
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700">
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
            </div>
            <p class="mt-4 text-[10px] tracking-widest uppercase font-bold text-gray-400 italic">2026 / Architecture</p>
          </div>
        </div>
      </section>

      <section id="news" class="py-32 px-8 bg-[var(--accent-color)]">
        <div class="max-w-7xl mx-auto">
          <div class="flex items-baseline justify-between mb-12">
            <h3 class="text-xs font-bold tracking-[0.4em] uppercase text-[var(--text-light)]">News</h3>
            <a href="/news" class="text-[9px] font-bold tracking-[0.3em] uppercase border-b border-black pb-1 hover:text-[var(--text-light)] transition-colors">View All</a>
          </div>
          <div class="grid md:grid-cols-2 gap-10">
            <a href="/news/news-page" class="group block"><article class="py-8 border-t border-black"><p class="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--text-light)]">2026.03.08</p><h4 class="text-lg font-light mt-3 group-hover:text-[var(--text-light)] transition-colors">最新情報は公開投稿から自動生成されます。</h4></article></a>
            <a href="/news/news-page" class="group block"><article class="py-8 border-t border-black"><p class="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--text-light)]">2026.02.20</p><h4 class="text-lg font-light mt-3 group-hover:text-[var(--text-light)] transition-colors">ニュース記事のタイトルがここに表示されます。</h4></article></a>
          </div>
        </div>
      </section>

      <section id="blog" class="py-32 px-8">
        <div class="max-w-7xl mx-auto">
          <div class="flex items-baseline justify-between mb-12">
            <h3 class="text-xs font-bold tracking-[0.4em] uppercase text-[var(--text-light)]">Blog</h3>
            <a href="/blog" class="text-[9px] font-bold tracking-[0.3em] uppercase border-b border-black pb-1 hover:text-[var(--text-light)] transition-colors">View All</a>
          </div>
          <div class="grid md:grid-cols-2 gap-10">
            <a href="/blog/blog-page" class="group block"><article class="py-8 border-t border-black"><p class="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--text-light)] mb-3">2026.03.01</p><h4 class="text-lg font-light mb-3 group-hover:text-[var(--text-light)] transition-colors">ブログ記事は公開投稿から自動生成されます。</h4><p class="text-[13px] text-[var(--text-light)]">記事の抜粋がここに表示されます。</p></article></a>
            <a href="/blog/blog-page" class="group block"><article class="py-8 border-t border-black"><p class="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--text-light)] mb-3">2026.02.15</p><h4 class="text-lg font-light mb-3 group-hover:text-[var(--text-light)] transition-colors">ブログ記事のタイトルがここに表示されます。</h4><p class="text-[13px] text-[var(--text-light)]">記事の抜粋がここに表示されます。</p></article></a>
          </div>
        </div>
      </section>

      <section id="company" class="py-32 px-8 border-t border-slate-100 max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 text-sm tracking-widest">
          <div>
            <p class="mb-4 text-xs font-bold uppercase opacity-40">Office</p>
            <p class="leading-loose">〒150-0001<br/>東京都渋谷区神宮前 1-2-3<br/>MNML STUDIO</p>
          </div>
          <div class="md:text-right">
            <p class="mb-4 text-xs font-bold uppercase opacity-40">Contact</p>
            <p class="leading-loose">info@mnml.jp<br/>03-1234-5678</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-20 text-center border-t border-slate-100">
      <p class="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-300">© MMXXVI MNML ALL RIGHTS RESERVED.</p>
    </footer>
  </div>
</div>`
};
