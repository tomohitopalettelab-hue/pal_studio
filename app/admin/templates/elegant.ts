import type { Template } from './types';

export const elegantTemplate: Template = {
  id: 'template-elegant',
  name: 'Elegant: ラグジュアリー',
  tags: ['luxury', 'beauty', 'hotel', 'serif'],
  description: '余白を活かした高級感のある構成。全セクション対応。',
  html: `
<div class="template-root" style="--main-color: #1a1a1a; --sub-color: #8c764b; --accent-color: #fdfbf7; --text-color: #2d2d2d; --text-light: #7a7a7a; --bg-color: #fdfbf7; --section-padding: 12rem;">
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Noto+Serif+JP:wght@200;400&display=swap" rel="stylesheet">
  
  <div class="min-h-screen font-serif text-[var(--text-color)] bg-[var(--bg-color)] selection:bg-[#c4b393] selection:text-white antialiased leading-relaxed" style="font-family: 'Cormorant Garamond', 'Noto Serif JP', serif;">
    
    <header class="fixed top-0 w-full z-50 transition-all duration-700">
      <div class="max-w-[1600px] mx-auto px-10 h-28 flex justify-between items-center border-b border-black/[0.03] bg-[var(--bg-color)]/80 backdrop-blur-sm">
        <nav data-sync="site-pages" class="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.4em] font-light">
          <a href="#concept" class="hover:text-[var(--sub-color)] transition-all">Philosophy</a>
          <a href="#works" class="hover:text-[var(--sub-color)] transition-all">Collection</a>
        </nav>
        <div class="text-3xl tracking-[0.6em] uppercase font-light text-[var(--main-color)] absolute left-1/2 -translate-x-1/2">
          The <span class="font-normal italic">Luxury</span>
        </div>
        <div class="hidden md:block">
          <a href="#company" class="group relative text-[10px] uppercase tracking-[0.4em] pb-2">
            Reservation
            <span class="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--sub-color)] origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500"></span>
          </a>
        </div>
      </div>
    </header>

    <main>
      <section id="top" class="section-hero relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-28">
        <div class="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" class="w-full h-full object-cover opacity-40 mix-blend-multiply" alt="Elegant Interior">
        </div>
        <div class="relative z-10 text-center">
          <p class="text-[11px] tracking-[0.8em] mb-16 uppercase text-[var(--sub-color)] font-medium opacity-0 animate-fade-in" style="animation: fadeIn 2s forwards 0.5s">Est. 2026 — Ginza, Tokyo</p>
          <h2 class="text-7xl md:text-[10rem] font-extralight tracking-tighter mb-16 leading-[0.85] text-[var(--main-color)]">
            <span class="italic block mb-4" style="font-family: 'Cormorant Garamond'">Elegant</span>
            <span class="ml-12 md:ml-32 block">Experience</span>
          </h2>
          <div class="flex flex-col items-center gap-8">
            <div class="w-px h-32 bg-gradient-to-b from-[var(--sub-color)] to-transparent opacity-30"></div>
            <p class="text-[10px] uppercase tracking-[0.5em] text-[var(--text-light)]">Scroll to Explore</p>
          </div>
        </div>
      </section>

      <section id="concept" class="section-concept py-[var(--section-padding)] px-6 bg-white/30">
        <div class="max-w-5xl mx-auto text-center">
          <h3 class="text-[11px] tracking-[0.6em] mb-20 text-[var(--sub-color)] uppercase italic">Our Philosophy</h3>
          <p class="text-3xl md:text-5xl font-extralight leading-[1.8] text-[var(--text-color)] tracking-tight">
            「静寂」と「美しさ」の調和を追求し、<br/>
            日常を彩る至高のひとときを創造します。<br/>
            <span class="italic text-[var(--sub-color)] mt-4 block">Time becomes art.</span>
          </p>
        </div>
      </section>

      <section id="features" class="section-features py-[var(--section-padding)] px-10 max-w-7xl mx-auto">
        <div class="grid md:grid-cols-3 gap-24">
          <div class="group">
            <span class="text-[var(--sub-color)] text-xs mb-10 block font-light italic">/ 01</span>
            <h4 class="text-3xl mb-8 italic font-light tracking-wide">Material</h4>
            <div class="w-16 h-px bg-black/10 mb-8 group-hover:w-full transition-all duration-1000"></div>
            <p class="text-sm leading-loose text-[var(--text-light)] font-light">世界各地から厳選された、触れるたびに溜息が漏れるような最高級の素材。その本質を活かす最適解を選び抜きます。</p>
          </div>
          <div class="group md:mt-16">
            <span class="text-[var(--sub-color)] text-xs mb-10 block font-light italic">/ 02</span>
            <h4 class="text-3xl mb-8 italic font-light tracking-wide">Craftsmanship</h4>
            <div class="w-16 h-px bg-black/10 mb-8 group-hover:w-full transition-all duration-1000"></div>
            <p class="text-sm leading-loose text-[var(--text-light)] font-light">数十年もの歳月をかけて培われた熟練の職人技。機械では決して到達できない、細部への祈りにも似たこだわりを宿します。</p>
          </div>
          <div class="group">
            <span class="text-[var(--sub-color)] text-xs mb-10 block font-light italic">/ 03</span>
            <h4 class="text-3xl mb-8 italic font-light tracking-wide">Concierge</h4>
            <div class="w-16 h-px bg-black/10 mb-8 group-hover:w-full transition-all duration-1000"></div>
            <p class="text-sm leading-loose text-[var(--text-light)] font-light">言葉にされない願いを形に。お客様一人ひとりのライフスタイルに深く寄り添い、パーソナライズされた体験をご提案します。</p>
          </div>
        </div>
      </section>

      <section id="service" class="section-service py-[var(--section-padding)] px-6 bg-[#1a1a1a] text-white overflow-hidden relative">
        <div class="absolute inset-0 opacity-10 pointer-events-none">
          <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--sub-color)] blur-[200px] -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <div class="relative max-w-4xl mx-auto text-center border border-white/5 py-24 px-12 backdrop-blur-md">
          <h3 class="text-[10px] tracking-[0.8em] mb-16 text-white/30 uppercase italic">Premium Membership</h3>
          <p class="text-5xl md:text-7xl font-extralight italic tracking-tighter mb-10 leading-none">Art of <br/>Living Suite</p>
          <div class="h-px w-20 bg-[var(--sub-color)] mx-auto mb-12 opacity-50"></div>
          <div class="flex flex-col items-center gap-4">
            <p class="text-4xl font-thin tracking-widest text-[var(--sub-color)]">¥1,000,000</p>
            <p class="text-[9px] text-white/40 tracking-[0.3em] uppercase">Initial annual dues</p>
          </div>
          <button class="mt-20 group relative px-16 py-6 border border-white/10 text-[9px] tracking-[0.5em] uppercase overflow-hidden transition-all duration-700 hover:border-white/40">
            <span class="relative z-10 group-hover:text-white transition-colors duration-500">Apply for Invitation</span>
            <div class="absolute inset-0 bg-white/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
          </button>
        </div>
      </section>

      <section id="works" class="section-works py-[var(--section-padding)] px-6 bg-white/10">
        <div class="max-w-[1500px] mx-auto">
          <div class="flex justify-between items-baseline mb-24 px-4">
            <h3 class="text-5xl font-extralight italic tracking-tighter">Collection</h3>
            <p class="text-[10px] tracking-[0.4em] uppercase text-[var(--text-light)]">Autumn / Winter 2026</p>
          </div>
          <div class="grid md:grid-cols-12 gap-12 items-end">
            <div class="md:col-span-7 aspect-[16/11] bg-stone-100 group overflow-hidden relative shadow-2xl">
               <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000">
               <div class="absolute inset-0 bg-[var(--sub-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
               <div class="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  <p class="text-[10px] tracking-[0.3em] uppercase text-[var(--main-color)]">Private Villa Project</p>
               </div>
            </div>
            <div class="md:col-span-5 aspect-[4/5] bg-stone-200 group overflow-hidden relative shadow-xl md:-mb-32">
               <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000">
               <div class="absolute inset-0 bg-[var(--sub-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            </div>
          </div>
          <div class="grid md:grid-cols-12 gap-12 mt-40 items-start">
             <div class="md:col-span-4 aspect-[3/4] bg-stone-100 group overflow-hidden relative shadow-lg">
               <img src="https://images.unsplash.com/photo-1574026601449-62db39d7fcce?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000">
             </div>
             <div class="md:col-span-8 aspect-[16/9] bg-stone-200 group overflow-hidden relative shadow-2xl md:mt-24">
               <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000">
             </div>
          </div>
        </div>
      </section>

      <section id="news" class="section-news py-[var(--section-padding)] px-6 bg-white/60">
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-col md:flex-row items-baseline justify-between mb-12 md:mb-20 gap-4">
            <h3 class="text-[10px] tracking-[0.6em] uppercase italic text-[var(--sub-color)]">News</h3>
            <a href="/news" class="text-[9px] tracking-[0.3em] uppercase border-b border-[var(--sub-color)] pb-1 hover:opacity-60 transition-opacity">すべてのお知らせ</a>
          </div>
          <div class="space-y-0">
            <a href="/news/news-page" class="group block"><article class="py-8 md:py-10 flex flex-col md:flex-row items-start gap-4 md:gap-16 border-t border-black/[0.06]"><p class="text-[9px] tracking-[0.3em] uppercase text-[var(--sub-color)] shrink-0 w-28">2026.03.08</p><h4 class="text-lg md:text-xl font-light group-hover:text-[var(--sub-color)] transition-colors tracking-wide">最新情報は公開投稿から自動生成されます。</h4></article></a>
            <a href="/news/news-page" class="group block"><article class="py-8 md:py-10 flex flex-col md:flex-row items-start gap-4 md:gap-16 border-t border-black/[0.06]"><p class="text-[9px] tracking-[0.3em] uppercase text-[var(--sub-color)] shrink-0 w-28">2026.02.20</p><h4 class="text-lg md:text-xl font-light group-hover:text-[var(--sub-color)] transition-colors tracking-wide">ニュース記事のタイトルがここに表示されます。</h4></article></a>
          </div>
        </div>
      </section>

      <section id="blog" class="section-blog py-[var(--section-padding)] px-6">
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-col md:flex-row items-baseline justify-between mb-12 md:mb-20 gap-4">
            <h3 class="text-[10px] tracking-[0.6em] uppercase italic text-[var(--sub-color)]">Blog</h3>
            <a href="/blog" class="text-[9px] tracking-[0.3em] uppercase border-b border-[var(--sub-color)] pb-1 hover:opacity-60 transition-opacity">すべての記事</a>
          </div>
          <div class="grid md:grid-cols-2 gap-12 md:gap-16">
            <a href="/blog/blog-page" class="group block"><article><div class="aspect-[4/3] bg-stone-100 mb-6 overflow-hidden"><img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"></div><p class="text-[9px] tracking-[0.3em] uppercase text-[var(--sub-color)] mb-3">2026.03.01</p><h4 class="text-xl md:text-2xl font-extralight italic mb-3 group-hover:text-[var(--sub-color)] transition-colors tracking-wide">ブログ記事は公開投稿から自動生成されます。</h4><p class="text-sm text-[var(--text-light)] leading-relaxed font-light">記事の抜粋がここに表示されます。</p></article></a>
            <a href="/blog/blog-page" class="group block"><article><div class="aspect-[4/3] bg-stone-100 mb-6 overflow-hidden"><img src="https://images.unsplash.com/photo-1543489822-c49800018749?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"></div><p class="text-[9px] tracking-[0.3em] uppercase text-[var(--sub-color)] mb-3">2026.02.15</p><h4 class="text-xl md:text-2xl font-extralight italic mb-3 group-hover:text-[var(--sub-color)] transition-colors tracking-wide">ブログ記事のタイトルがここに表示されます。</h4><p class="text-sm text-[var(--text-light)] leading-relaxed font-light">記事の抜粋がここに表示されます。</p></article></a>
          </div>
        </div>
      </section>

      <section id="company" class="section-company py-[var(--section-padding)] px-10 max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-32">
          <div>
            <h3 class="text-4xl font-extralight italic mb-12 tracking-tight">Inquiry</h3>
            <p class="text-md text-[var(--text-light)] leading-loose font-light">私たちは常に、あなたのための扉を開けてお待ちしております。特別なリクエストや、より深い体験へのご相談は、コンシェルジュまでお気軽にお寄せください。</p>
          </div>
          <div class="divide-y divide-black/[0.05]">
            <div class="py-10">
              <p class="text-[9px] tracking-[0.4em] uppercase text-[var(--sub-color)] mb-6 font-bold">Main Boutique</p>
              <p class="text-2xl font-extralight tracking-tight leading-relaxed">7-chome, Ginza, Chuo-ku,<br/>Tokyo 104-0061, Japan</p>
            </div>
            <div class="py-10">
              <p class="text-[9px] tracking-[0.4em] uppercase text-[var(--sub-color)] mb-6 font-bold">Inquiry</p>
              <p class="text-2xl font-extralight tracking-tight hover:text-[var(--sub-color)] transition-colors cursor-pointer">concierge@theluxury.jp</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-32 bg-[var(--main-color)] text-white/50 text-center">
      <div class="text-[14px] tracking-[1em] uppercase text-white mb-10 font-light">The Luxury</div>
      <div class="w-12 h-px bg-white/10 mx-auto mb-10"></div>
      <p class="text-[8px] tracking-[0.4em] uppercase font-light">&copy; 2026 THE LUXURY BRAND. PRESERVING TRADITION & ELEGANCE.</p>
    </footer>
  </div>
  
  <style>
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in { animation: fadeIn 1.5s ease-out forwards; }
    .text-outline { -webkit-text-stroke: 1px currentColor; }
  </style>
</div>`
};
