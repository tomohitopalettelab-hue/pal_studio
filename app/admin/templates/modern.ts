import type { Template } from './types';

export const modernTemplate: Template = {
  id: 'template-modern',
  name: 'Modern: シンプル & クリーン',
  tags: ['simple', 'clean', 'business', 'startup', 'responsive'],
  description: '汎用性の高いモダンでクリーンなデザイン。スマホ最適化済み。',
  html: `
<div class="template-root" style="--main-color: #0f172a; --main-dark: #111827; --accent-color: #3b82f6; --text-color: #0f172a; --text-light: #64748b; --bg-color: #ffffff; --section-gap: 14rem; --section-gap-mobile: 6rem;">
  <div class="min-h-screen font-sans text-[var(--text-color)] bg-[var(--bg-color)] selection:bg-[var(--accent-color)] selection:text-white antialiased leading-relaxed">
    
    <div class="fixed inset-0 pointer-events-none z-[999] opacity-[0.015]" style="background-image: url('https://www.transparenttextures.com/patterns/p6.png');"></div>

    <header class="fixed w-full z-[100] transition-all duration-700 bg-[var(--bg-color)]/80 backdrop-blur-xl border-b border-black/[0.03]">
      <input type="checkbox" id="menu-toggle" class="sr-only peer" />
      <div class="max-w-[1600px] mx-auto px-6 md:px-10 h-20 md:h-24 flex items-center justify-between">
        <div class="flex items-center gap-4 group cursor-pointer">
          <div class="relative w-8 h-8 md:w-10 md:h-10 bg-[var(--main-color)] flex items-center justify-center overflow-hidden">
            <span class="text-white font-bold text-sm md:text-base">M</span>
          </div>
          <h1 class="text-lg md:text-xl font-black tracking-[0.2em] uppercase">Studio<span class="text-[var(--accent-color)]">.</span></h1>
        </div>

        <nav data-nav-fixed class="hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--text-color)]">
          <a data-page-slug="top" data-page-hash="concept" href="/#concept" class="hover:text-[var(--accent-color)] transition-colors">Concept</a>
          <a data-page-slug="top" data-page-hash="service" href="/#service" class="hover:text-[var(--accent-color)] transition-colors">Service</a>
          <a data-page-slug="top" data-page-hash="works" href="/#works" class="hover:text-[var(--accent-color)] transition-colors">Works</a>
          <a data-page-slug="news" href="/news" class="hover:text-[var(--accent-color)] transition-colors">News</a>
          <a data-page-slug="blog" href="/blog" class="hover:text-[var(--accent-color)] transition-colors">Blog</a>
          <a data-page-slug="contact" href="/contact" class="px-8 py-4 bg-[var(--main-color)] text-white text-[9px] hover:bg-[var(--accent-color)] transition-all shadow-xl shadow-black/5">Get in touch</a>
        </nav>

        <label for="menu-toggle" class="lg:hidden cursor-pointer p-2 z-[110]">
          <div class="w-6 h-5 flex flex-col justify-between">
            <span class="w-full h-[2px] bg-[var(--main-color)] origin-left transition-all duration-300"></span>
            <span class="w-full h-[2px] bg-[var(--main-color)] transition-all duration-300"></span>
            <span class="w-full h-[2px] bg-[var(--main-color)] origin-left transition-all duration-300"></span>
          </div>
        </label>
      </div>
      
      <div class="fixed inset-0 bg-[var(--main-dark)] translate-x-full peer-checked:translate-x-0 transition-transform duration-500 ease-in-out lg:hidden z-[105] flex flex-col items-center justify-center">
        <nav class="flex flex-col items-center gap-8 text-white text-xs font-bold uppercase tracking-[0.5em]">
          <a data-page-slug="top" data-page-hash="concept" href="/#concept" onclick="document.getElementById('menu-toggle').checked=false">Concept</a>
          <a data-page-slug="top" data-page-hash="service" href="/#service" onclick="document.getElementById('menu-toggle').checked=false">Service</a>
          <a data-page-slug="top" data-page-hash="works" href="/#works" onclick="document.getElementById('menu-toggle').checked=false">Works</a>
          <a data-page-slug="news" href="/news" onclick="document.getElementById('menu-toggle').checked=false">News</a>
          <a data-page-slug="blog" href="/blog" onclick="document.getElementById('menu-toggle').checked=false">Blog</a>
          <a data-page-slug="contact" href="/contact" class="mt-4 px-10 py-5 bg-[var(--accent-color)]" onclick="document.getElementById('menu-toggle').checked=false">Get in touch</a>
        </nav>
      </div>
    </header>

    <main>
      <section id="top" class="section-hero relative min-h-screen flex items-center justify-center px-6 pt-32 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" alt="Hero Background" class="w-full h-full object-cover grayscale opacity-30 transform scale-105 animate-slow-zoom">
          <div class="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-white"></div>
        </div>
        
        <div class="relative z-10 max-w-7xl mx-auto text-center">
          <p class="inline-block mb-6 md:mb-10 text-[8px] md:text-[10px] font-bold tracking-[0.5em] md:tracking-[0.8em] text-[var(--accent-color)] uppercase">Redefining the Standard — 2026</p>
          <h2 class="text-[clamp(2.5rem,15vw,10rem)] font-black tracking-tighter leading-[0.9] mb-10 md:mb-16 uppercase">
            Define the <br/><span class="italic font-light text-[var(--main-color)]" style="font-family: serif;">New Era.</span>
          </h2>
          <div class="flex flex-col items-center">
            <p class="text-base md:text-2xl text-[var(--text-light)] mb-12 md:mb-16 max-w-2xl font-medium leading-relaxed tracking-tight px-4">
              既成概念を壊し、デザインで<br class="hidden md:block"/>ビジネスに「鼓動」を宿します。
            </p>
            <div class="group relative flex flex-col items-center">
                <span class="text-[8px] font-bold tracking-[0.5em] uppercase mb-4 opacity-30">Scroll Down</span>
                <div class="w-[1px] h-20 md:h-32 bg-gradient-to-b from-slate-700 to-transparent opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="news" class="py-[var(--section-gap-mobile)] md:py-[var(--section-gap)] px-6 md:px-10 bg-[#f8fafc]">
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 md:mb-16 gap-4">
            <div>
              <p class="text-[9px] font-bold tracking-[0.6em] uppercase text-[var(--accent-color)] mb-2">News & Updates</p>
              <h3 class="text-4xl md:text-6xl font-black tracking-tighter uppercase">Latest</h3>
            </div>
            <a href="#" class="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] border-b border-black pb-1 hover:text-[var(--accent-color)] transition-all">View Archive</a>
          </div>
          
          <div class="grid grid-cols-1 divide-y divide-black/5 border-t border-black/5">
            <article class="group py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 cursor-pointer">
              <div class="w-full md:w-48 aspect-video overflow-hidden bg-slate-200 flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-700" alt="News 01">
              </div>
              <div class="flex-1">
                <p class="text-[9px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-2">2026.03.08</p>
                <h4 class="text-xl md:text-2xl font-bold group-hover:text-[var(--accent-color)] transition-colors tracking-tight">新サービス「Ethereal Design Suite」を公開しました</h4>
              </div>
            </article>
            <article class="group py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 cursor-pointer">
              <div class="w-full md:w-48 aspect-video overflow-hidden bg-slate-200 flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-700" alt="News 02">
              </div>
              <div class="flex-1">
                <p class="text-[9px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-2">2026.02.18</p>
                <h4 class="text-xl md:text-2xl font-bold group-hover:text-[var(--accent-color)] transition-colors tracking-tight">Global Design Award 2026 金賞を受賞しました</h4>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="concept" class="py-[var(--section-gap-mobile)] md:py-[var(--section-gap)] px-6 md:px-10">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-12 gap-10 md:gap-24 items-start">
            <div class="lg:col-span-5">
              <span class="text-[9px] font-bold tracking-[0.5em] text-[var(--accent-color)] uppercase mb-6 md:mb-10 block">01 / Philosophy</span>
              <h4 class="text-4xl md:text-7xl font-bold leading-[1.1] tracking-tighter">「意味」を<br/>デザインする。</h4>
            </div>
            <div class="lg:col-span-7">
              <p class="text-lg md:text-3xl leading-relaxed md:leading-[1.7] text-[var(--text-color)] font-light italic">
                単なる見た目の美しさを超え、ブランドの根底にあるストーリーを形にします。情報は整理されるだけでなく、感情を揺さぶる体験へと昇華されるべきです。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="py-[var(--section-gap-mobile)] md:py-[var(--section-gap)] px-6 md:px-10 bg-[var(--main-dark)] text-white relative">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div class="py-12 md:p-16">
            <span class="text-[var(--accent-color)] font-mono text-xs mb-6 block tracking-widest opacity-50">/ 01</span>
            <h4 class="text-3xl md:text-4xl font-bold mb-6 italic tracking-tighter">Avant-Garde</h4>
            <p class="text-white/50 leading-relaxed font-light text-sm md:text-base">最先端のテクノロジーと芸術性を融合。他社が決して真似できない、独自のブランドプレゼンスを構築します。</p>
          </div>
          <div class="py-12 md:p-16">
            <span class="text-[var(--accent-color)] font-mono text-xs mb-6 block tracking-widest opacity-50">/ 02</span>
            <h4 class="text-3xl md:text-4xl font-bold mb-6 italic tracking-tighter">Precision</h4>
            <p class="text-white/50 leading-relaxed font-light text-sm md:text-base">1ピクセルの妥協も許さない品質管理。細部への徹底したこだわりが、顧客への絶対的な信頼へと直結します。</p>
          </div>
          <div class="py-12 md:p-16">
            <span class="text-[var(--accent-color)] font-mono text-xs mb-6 block tracking-widest opacity-50">/ 03</span>
            <h4 class="text-3xl md:text-4xl font-bold mb-6 italic tracking-tighter">Evolution</h4>
            <p class="text-white/50 leading-relaxed font-light text-sm md:text-base">納品は通過点に過ぎません。データに基づいた持続的なアップデートで、ビジネスの成長を恒久的に加速させます。</p>
          </div>
        </div>
      </section>

      <section id="service" class="py-[var(--section-gap-mobile)] md:py-[var(--section-gap)] px-6 md:px-10 bg-[#fdfdfd]">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16 md:mb-32">
            <h3 class="text-4xl md:text-6xl font-bold tracking-tighter mb-4 md:mb-6 uppercase">Service</h3>
            <p class="text-[9px] font-bold tracking-[0.6em] text-[var(--accent-color)] uppercase">Exclusive Digital Solutions</p>
          </div>
          <div class="group bg-white border border-black/[0.05] p-8 md:p-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left transition-all hover:shadow-2xl">
            <div class="mb-8 md:mb-0">
              <span class="text-[8px] font-black uppercase tracking-[0.4em] text-[var(--accent-color)] mb-2 md:mb-4 block">01 / Full-Service</span>
              <h4 class="text-2xl md:text-4xl font-bold tracking-tight">Executive Brand Package</h4>
              <p class="text-[var(--text-light)] mt-4 text-sm md:text-lg">ブランディングからフルサイト制作までを一貫提供。</p>
            </div>
            <div class="flex flex-col items-center md:items-end">
              <span class="text-4xl md:text-6xl font-black tracking-tighter italic">¥800,000<span class="text-xs not-italic text-slate-300 ml-2">JPY+</span></span>
              <button class="mt-8 px-10 py-4 bg-[var(--main-color)] text-white text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-[var(--accent-color)] transition-all">Select Plan</button>
            </div>
          </div>
        </div>
      </section>

      <section id="works" class="py-[var(--section-gap-mobile)] md:py-[var(--section-gap)] px-6 md:px-10 bg-white">
        <div class="max-w-[1700px] mx-auto">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 border-b border-black/5 pb-8 md:pb-12 gap-6">
            <h3 class="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">Archive</h3>
            <p class="text-[var(--text-light)] font-bold tracking-[0.4em] uppercase text-[9px]">View all projects (12)</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div class="group cursor-pointer">
              <div class="aspect-[4/5] md:aspect-[10/13] bg-[#f0f0f0] overflow-hidden relative mb-6 md:mb-10">
                <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-110" alt="Work 01">
              </div>
              <h5 class="text-xl md:text-2xl font-bold tracking-tight mb-1">Aether Dynamic</h5>
              <p class="text-[9px] text-[var(--accent-color)] font-bold uppercase tracking-widest">Identity / Web Design</p>
            </div>
            <div class="group cursor-pointer">
              <div class="aspect-[4/5] md:aspect-[10/13] bg-[#f0f0f0] overflow-hidden relative mb-6 md:mb-10">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-110" alt="Work 02">
              </div>
              <h5 class="text-xl md:text-2xl font-bold tracking-tight mb-1">Neo Genesis</h5>
              <p class="text-[9px] text-[var(--accent-color)] font-bold uppercase tracking-widest">UI/UX Strategy</p>
            </div>
            <div class="group cursor-pointer">
              <div class="aspect-[4/5] md:aspect-[10/13] bg-[#f0f0f0] overflow-hidden relative mb-6 md:mb-10">
                <img src="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-110" alt="Work 03">
              </div>
              <h5 class="text-xl md:text-2xl font-bold tracking-tight mb-1">Lumina Systems</h5>
              <p class="text-[9px] text-[var(--accent-color)] font-bold uppercase tracking-widest">Digital Solutions</p>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" class="py-[var(--section-gap-mobile)] md:py-[var(--section-gap)] px-6 md:px-10 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12 md:mb-24">
            <p class="text-[9px] font-bold tracking-[0.8em] uppercase text-[var(--accent-color)] mb-4">Our Perspectives</p>
            <h3 class="text-4xl md:text-6xl font-black tracking-tighter uppercase">Insights</h3>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <article class="group cursor-pointer">
              <div class="aspect-video overflow-hidden mb-6 relative">
                <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105" alt="Blog 01">
                <div class="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1 bg-white/90 text-[8px] font-black uppercase tracking-widest">Design</div>
              </div>
              <h4 class="text-xl md:text-3xl font-bold mb-4 group-hover:text-[var(--accent-color)] transition-colors leading-tight">2026年、ブランドに求められるのは「静寂」という価値。</h4>
              <p class="text-[var(--text-light)] text-sm md:text-lg font-light leading-relaxed">情報の洪水の中で、あえて語らないことで伝わるメッセージの深さについて考察します。</p>
            </article>
            <article class="group cursor-pointer">
              <div class="aspect-video overflow-hidden mb-6 relative">
                <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105" alt="Blog 02">
                <div class="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1 bg-white/90 text-[8px] font-black uppercase tracking-widest">Business</div>
              </div>
              <h4 class="text-xl md:text-3xl font-bold mb-4 group-hover:text-[var(--accent-color)] transition-colors leading-tight">クリエイティブがビジネス指標に与える実質的なインパクト</h4>
              <p class="text-[var(--text-light)] text-sm md:text-lg font-light leading-relaxed">デザイン刷新によってLTVが200%向上したスタートアップの事例を元に考察します。</p>
            </article>
          </div>
        </div>
      </section>

      <section id="company" class="py-[var(--section-gap-mobile)] md:py-[var(--section-gap)] px-6 md:px-10 bg-[var(--main-dark)] text-white relative">
        <div class="max-w-5xl mx-auto">
          <h3 class="text-[9px] font-bold tracking-[0.8em] uppercase mb-12 md:mb-24 text-white/30 text-center">Corporate</h3>
          <div class="border-y border-white/10 divide-y divide-white/10">
            <div class="grid grid-cols-1 md:grid-cols-4 py-12 md:py-20 px-4 md:px-10 group hover:bg-white/5 transition-all">
              <dt class="text-[8px] font-bold uppercase tracking-[0.4em] text-[var(--accent-color)] mb-4 md:mb-0">Firm Name</dt>
              <dd class="md:col-span-3 text-2xl md:text-5xl font-bold tracking-tighter">MODERN DESIGN STUDIO INC.</dd>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 py-12 md:py-20 px-4 md:px-10 group hover:bg-white/5 transition-all">
              <dt class="text-[8px] font-bold uppercase tracking-[0.4em] text-[var(--accent-color)] mb-4 md:mb-0">Base</dt>
              <dd class="md:col-span-3 text-2xl md:text-5xl font-bold tracking-tighter uppercase">Shibuya, Tokyo / Global</dd>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-20 md:py-32 bg-[var(--main-dark)] text-white px-6 md:px-10">
      <div class="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-20">
        <div>
          <h2 class="text-5xl md:text-[clamp(4rem,10vw,8rem)] font-black tracking-tighter mb-8 md:mb-12 italic opacity-20">Let's talk.</h2>
          <div class="space-y-4">
            <p class="text-white/40 text-[9px] font-bold tracking-[0.5em] uppercase">© 2026 Studio Modern.</p>
          </div>
        </div>
        <div class="flex flex-col gap-6 text-[9px] font-bold uppercase tracking-[0.3em] w-full md:w-auto">
          <div class="flex gap-8 border-b border-white/10 pb-6 md:border-none md:pb-0">
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

<style>
  @keyframes slow-zoom {
    0% { transform: scale(1.05); }
    100% { transform: scale(1.15); }
  }
  .animate-slow-zoom {
    animation: slow-zoom 20s ease-in-out infinite alternate;
  }
  
  /* Mobile Menu Icon Animation */
  #menu-toggle:checked ~ div label span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
  #menu-toggle:checked ~ div label span:nth-child(2) { opacity: 0; }
  #menu-toggle:checked ~ div label span:nth-child(3) { transform: rotate(-45deg) translate(7px, -7px); }
  
  /* Smooth Scroll */
  html { scroll-behavior: smooth; }
  
  /* Hide scrollbar when menu is open */
  body:has(#menu-toggle:checked) { overflow: hidden; }
</style>`
};