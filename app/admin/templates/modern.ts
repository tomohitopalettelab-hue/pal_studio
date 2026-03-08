import type { Template } from './types';

export const modernTemplate: Template = {
  id: 'template-modern',
  name: 'Modern: シンプル & クリーン',
  tags: ['simple', 'clean', 'business', 'startup'],
  description: '汎用性の高いモダンでクリーンなデザイン。セクション固定構成に対応。',
  html: `
<div class="template-root" style="--main-color: #0f172a; --main-dark: #111827; --accent-color: #3b82f6; --text-color: #0f172a; --text-light: #64748b; --bg-color: #ffffff; --section-gap: 14rem;">
  <div class="min-h-screen font-sans text-[var(--text-color)] bg-[var(--bg-color)] selection:bg-[var(--accent-color)] selection:text-white antialiased leading-relaxed">
    
    <div class="fixed inset-0 pointer-events-none z-[999] opacity-[0.015]" style="background-image: url('https://www.transparenttextures.com/patterns/p6.png');"></div>

    <header class="fixed w-full z-[100] transition-all duration-700 bg-[var(--bg-color)]/80 backdrop-blur-xl border-b border-black/[0.03]">
      <div class="max-w-[1600px] mx-auto px-10 h-24 flex items-center justify-between">
        <div class="flex items-center gap-4 group cursor-pointer">
          <div class="relative w-10 h-10 bg-[var(--main-color)] flex items-center justify-center overflow-hidden">
            <span class="text-white font-bold transition-transform duration-500 group-hover:-translate-y-full">M</span>
            <span class="absolute top-full text-white font-bold transition-transform duration-500 group-hover:-translate-y-full">M</span>
          </div>
          <h1 class="text-xl font-black tracking-[0.2em] uppercase">Studio<span class="text-[var(--accent-color)]">.</span></h1>
        </div>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--text-color)]">
          <a href="#concept" class="relative group py-2">
            <span>Concept</span>
            <span class="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent-color)] origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500"></span>
          </a>
          <a href="#service" class="relative group py-2">
            <span>Service</span>
            <span class="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent-color)] origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500"></span>
          </a>
          <a href="#works" class="relative group py-2">
            <span>Works</span>
            <span class="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent-color)] origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500"></span>
          </a>
          <a href="#news" class="relative group py-2">
            <span>News</span>
            <span class="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent-color)] origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500"></span>
          </a>
          <a href="#blog" class="relative group py-2">
            <span>Blog</span>
            <span class="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent-color)] origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500"></span>
          </a>
          <a href="#company" class="px-8 py-4 bg-[var(--main-color)] text-white text-[9px] tracking-[0.3em] hover:bg-[var(--accent-color)] transition-all duration-500 shadow-2xl shadow-black/10">Get in touch</a>
        </nav>
      </div>
    </header>

    <main>
      <section id="top" class="section-hero relative min-h-screen flex items-center justify-center px-8 pt-32 md:pt-36 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" alt="Hero Background" class="w-full h-full object-cover grayscale opacity-40 transform scale-105 animate-slow-zoom">
          <div class="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white"></div>
        </div>
        
        <div class="relative z-10 max-w-7xl mx-auto text-center">
          <p class="inline-block mb-10 text-[10px] font-bold tracking-[0.8em] text-[var(--accent-color)] uppercase animate-fade-in">Redefining the Standard — 2026</p>
          <h2 class="text-[clamp(4rem,12vw,10rem)] font-black tracking-tighter leading-[0.8] mb-16 uppercase">
            Define the <br/><span class="italic font-light text-[var(--main-color)]" style="font-family: serif;">New Era.</span>
          </h2>
          <div class="flex flex-col items-center">
            <p class="text-xl md:text-2xl text-[var(--text-light)] mb-16 max-w-3xl font-medium leading-[1.8] tracking-tight">
              既成概念を壊し、デザインで<br/>ビジネスに「鼓動」を宿します。
            </p>
            <div class="group relative flex flex-col items-center">
                <span class="text-[9px] font-bold tracking-[0.5em] uppercase mb-4 opacity-30">Scroll Down</span>
                <div class="w-[1px] h-32 bg-gradient-to-b from-slate-700 to-transparent opacity-20 group-hover:h-40 transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="news" class="py-[var(--section-gap)] px-10 bg-[#f8fafc]">
        <div class="max-w-6xl mx-auto">
          <div class="flex items-end justify-between mb-16">
            <div>
              <p class="text-[10px] font-bold tracking-[0.6em] uppercase text-[var(--accent-color)] mb-4">News & Updates</p>
              <h3 class="text-6xl font-black tracking-tighter uppercase">Latest</h3>
            </div>
            <a href="#" class="text-[9px] font-bold uppercase tracking-[0.3em] border-b border-black pb-2 hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] transition-all">View Archive</a>
          </div>
          
          <div class="grid md:grid-cols-1 divide-y divide-black/5">
            <article class="group py-10 flex flex-col md:flex-row items-center gap-10 cursor-pointer">
              <div class="w-full md:w-48 aspect-video overflow-hidden bg-slate-200">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="News 01">
              </div>
              <div class="flex-1">
                <p class="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-2">2026.03.08</p>
                <h4 class="text-2xl font-bold group-hover:text-[var(--accent-color)] transition-colors tracking-tight">新サービス「Ethereal Design Suite」を公開しました</h4>
              </div>
              <div class="hidden md:block">
                <div class="w-12 h-12 border border-black/5 flex items-center justify-center group-hover:bg-[var(--main-color)] group-hover:text-white transition-all">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path></svg>
                </div>
              </div>
            </article>
            <article class="group py-10 flex flex-col md:flex-row items-center gap-10 cursor-pointer">
              <div class="w-full md:w-48 aspect-video overflow-hidden bg-slate-200">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="News 02">
              </div>
              <div class="flex-1">
                <p class="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-2">2026.02.18</p>
                <h4 class="text-2xl font-bold group-hover:text-[var(--accent-color)] transition-colors tracking-tight">Global Design Award 2026 金賞を受賞しました</h4>
              </div>
              <div class="hidden md:block">
                <div class="w-12 h-12 border border-black/5 flex items-center justify-center group-hover:bg-[var(--main-color)] group-hover:text-white transition-all">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path></svg>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="concept" class="section-concept py-[var(--section-gap)] px-10">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-12 gap-24 items-start">
            <div class="lg:col-span-5">
              <span class="text-[10px] font-bold tracking-[0.5em] text-[var(--accent-color)] uppercase mb-10 block">01 / Philosophy</span>
              <h4 class="text-6xl md:text-7xl font-bold leading-[1.1] tracking-tighter">「意味」を<br/>デザインする。</h4>
            </div>
            <div class="lg:col-span-7 pt-4">
              <p class="text-2xl md:text-3xl leading-[1.7] text-[var(--text-color)] font-light italic">
                単なる見た目の美しさを超え、ブランドの根底にあるストーリーを形にします。情報は整理されるだけでなく、感情を揺さぶる体験へと昇華されるべきです。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="section-features py-[var(--section-gap)] px-10 bg-[var(--main-dark)] text-white relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
        <div class="max-w-7xl mx-auto grid md:grid-cols-3 divide-x divide-white/5">
          <div class="group p-16 hover:bg-white/[0.02] transition-colors duration-700">
            <span class="text-[var(--accent-color)] font-mono text-sm mb-12 block tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">/ 01</span>
            <h4 class="text-4xl font-bold mb-8 italic tracking-tighter">Avant-Garde</h4>
            <p class="text-white/40 leading-relaxed font-light group-hover:text-white/80 transition-colors">最先端のテクノロジーと芸術性を融合。他社が決して真似できない、独自のブランドプレゼンスを構築します。</p>
          </div>
          <div class="group p-16 hover:bg-white/[0.02] transition-colors duration-700">
            <span class="text-[var(--accent-color)] font-mono text-sm mb-12 block tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">/ 02</span>
            <h4 class="text-4xl font-bold mb-8 italic tracking-tighter">Precision</h4>
            <p class="text-white/40 leading-relaxed font-light group-hover:text-white/80 transition-colors">1ピクセルの妥協も許さない品質管理。細部への徹底したこだわりが、顧客への絶対的な信頼へと直結します。</p>
          </div>
          <div class="group p-16 hover:bg-white/[0.02] transition-colors duration-700">
            <span class="text-[var(--accent-color)] font-mono text-sm mb-12 block tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">/ 03</span>
            <h4 class="text-4xl font-bold mb-8 italic tracking-tighter">Evolution</h4>
            <p class="text-white/40 leading-relaxed font-light group-hover:text-white/80 transition-colors">納品は通過点に過ぎません。データに基づいた持続的なアップデートで、ビジネスの成長を恒久的に加速させます。</p>
          </div>
        </div>
      </section>

      <section id="service" class="section-service py-[var(--section-gap)] px-10 bg-[#fdfdfd]">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-32">
            <h3 class="text-6xl font-bold tracking-tighter mb-6 uppercase">Service Package</h3>
            <p class="text-[10px] font-bold tracking-[0.8em] text-[var(--accent-color)] uppercase">Exclusive Digital Solutions</p>
          </div>
          <div class="space-y-4">
            <div class="group bg-white border border-black/[0.03] p-12 flex flex-col md:flex-row justify-between items-center transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-1">
              <div class="text-center md:text-left mb-10 md:mb-0">
                <span class="text-[9px] font-black uppercase tracking-[0.4em] text-[var(--accent-color)] mb-4 block">01 / Full-Service</span>
                <h4 class="text-4xl font-bold tracking-tight">Executive Brand Package</h4>
                <p class="text-[var(--text-light)] mt-4 text-lg">ブランディングからフルカスタマイズサイト制作までを一貫して提供。</p>
              </div>
              <div class="text-right flex flex-col items-center md:items-end">
                <span class="text-6xl font-black tracking-tighter italic">¥800,000<span class="text-sm not-italic text-slate-300 ml-2">JPY+</span></span>
                <button class="mt-10 px-12 py-5 bg-[var(--main-color)] text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[var(--accent-color)] transition-all">Select Plan</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="works" class="section-works py-[var(--section-gap)] px-10 bg-white">
        <div class="max-w-[1700px] mx-auto">
          <div class="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-black/5 pb-12">
            <h3 class="text-8xl font-black tracking-tighter uppercase leading-none">Selected<br/><span class="text-outline text-transparent" style="-webkit-text-stroke: 1px var(--text-color); opacity: 0.3;">Archive</span></h3>
            <p class="text-[var(--text-light)] font-bold tracking-[0.4em] uppercase text-[10px] mb-2">View all projects (12)</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div class="group cursor-pointer">
              <div class="aspect-[10/13] bg-[#f0f0f0] overflow-hidden relative mb-10">
                <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Work 01">
                <div class="absolute inset-0 bg-[var(--main-dark)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span class="text-white text-[10px] font-bold tracking-[0.5em] border border-white/30 px-8 py-4 uppercase">View Project</span>
                </div>
              </div>
              <h5 class="text-2xl font-bold tracking-tight mb-2">Aether Dynamic</h5>
              <p class="text-[10px] text-[var(--accent-color)] font-bold uppercase tracking-widest">Identity / Web Design</p>
            </div>
            <div class="group cursor-pointer md:mt-32">
              <div class="aspect-[10/13] bg-[#f0f0f0] overflow-hidden relative mb-10">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Work 02">
                <div class="absolute inset-0 bg-[var(--accent-color)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span class="text-white text-[10px] font-bold tracking-[0.5em] border border-white/30 px-8 py-4 uppercase">View Project</span>
                </div>
              </div>
              <h5 class="text-2xl font-bold tracking-tight mb-2">Neo Genesis</h5>
              <p class="text-[10px] text-[var(--accent-color)] font-bold uppercase tracking-widest">UI/UX Strategy</p>
            </div>
            <div class="group cursor-pointer">
              <div class="aspect-[10/13] bg-[#f0f0f0] overflow-hidden relative mb-10">
                <img src="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Work 03">
                <div class="absolute inset-0 bg-[var(--main-dark)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span class="text-white text-[10px] font-bold tracking-[0.5em] border border-white/30 px-8 py-4 uppercase">View Project</span>
                </div>
              </div>
              <h5 class="text-2xl font-bold tracking-tight mb-2">Lumina Systems</h5>
              <p class="text-[10px] text-[var(--accent-color)] font-bold uppercase tracking-widest">Digital Solutions</p>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" class="py-[var(--section-gap)] px-10 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-24">
            <p class="text-[10px] font-bold tracking-[0.8em] uppercase text-[var(--accent-color)] mb-4">Our Perspectives</p>
            <h3 class="text-6xl font-black tracking-tighter uppercase">Insights</h3>
          </div>
          
          <div class="grid md:grid-cols-2 gap-16">
            <article class="group cursor-pointer">
              <div class="aspect-video overflow-hidden mb-8 relative">
                <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Blog 01">
                <div class="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur text-[9px] font-black uppercase tracking-widest">Design Theory</div>
              </div>
              <h4 class="text-3xl font-bold mb-4 group-hover:text-[var(--accent-color)] transition-colors leading-tight">2026年、ブランドに求められるのは「静寂」という価値。</h4>
              <p class="text-[var(--text-light)] text-lg font-light leading-relaxed">情報の洪水の中で、あえて語らないことで伝わるメッセージの深さについて考察します。</p>
              <div class="mt-8 flex items-center gap-4">
                <div class="w-10 h-[1px] bg-black/20 group-hover:w-16 group-hover:bg-[var(--accent-color)] transition-all"></div>
                <span class="text-[10px] font-bold uppercase tracking-widest">Read Article</span>
              </div>
            </article>

            <article class="group cursor-pointer">
              <div class="aspect-video overflow-hidden mb-8 relative">
                <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Blog 02">
                <div class="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur text-[9px] font-black uppercase tracking-widest">Business Strategy</div>
              </div>
              <h4 class="text-3xl font-bold mb-4 group-hover:text-[var(--accent-color)] transition-colors leading-tight">クリエイティブがビジネス指標に与える実質的なインパクト</h4>
              <p class="text-[var(--text-light)] text-lg font-light leading-relaxed">デザイン刷新によってLTVが200%向上したスタートアップの事例を元に、戦略的意図を紐解きます。</p>
              <div class="mt-8 flex items-center gap-4">
                <div class="w-10 h-[1px] bg-black/20 group-hover:w-16 group-hover:bg-[var(--accent-color)] transition-all"></div>
                <span class="text-[10px] font-bold uppercase tracking-widest">Read Article</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="company" class="section-company py-[var(--section-gap)] px-10 bg-[var(--main-dark)] text-white overflow-hidden relative">
        <div class="max-w-5xl mx-auto relative z-10">
          <h3 class="text-[10px] font-bold tracking-[0.8em] uppercase mb-24 text-white/30 text-center">Corporate Profile</h3>
          <div class="space-y-0 border-y border-white/10">
            <div class="grid grid-cols-1 md:grid-cols-4 py-20 px-10 group hover:bg-white/5 transition-all duration-500">
              <dt class="text-[9px] font-bold uppercase tracking-[0.5em] text-[var(--accent-color)] mb-4 md:mb-0 self-center">Firm Name</dt>
              <dd class="md:col-span-3 text-4xl md:text-5xl font-bold tracking-tighter">MODERN DESIGN STUDIO INC.</dd>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 py-20 px-10 group hover:bg-white/5 transition-all duration-500">
              <dt class="text-[9px] font-bold uppercase tracking-[0.5em] text-[var(--accent-color)] mb-4 md:mb-0 self-center">Base</dt>
              <dd class="md:col-span-3 text-4xl md:text-5xl font-bold tracking-tighter uppercase">Shibuya, Tokyo / Global</dd>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-32 bg-[var(--main-dark)] text-white px-10 relative overflow-hidden">
      <div class="max-w-[1600px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-end gap-20">
        <div>
          <h2 class="text-[clamp(4rem,10vw,8rem)] font-black tracking-tighter mb-12 italic opacity-20">Let's talk.</h2>
          <div class="space-y-4">
            <p class="text-white/40 text-[10px] font-bold tracking-[0.5em] uppercase">© 2026 Studio Modern. Built for Excellence.</p>
            <p class="text-white/20 text-[9px] tracking-widest leading-loose max-w-sm">We believe in the power of minimalism and the impact of meaningful design.</p>
          </div>
        </div>
        <div class="flex flex-col gap-8 text-[10px] font-bold uppercase tracking-[0.4em] text-right">
          <a href="#" class="hover:text-[var(--accent-color)] transition-colors">Instagram</a>
          <a href="#" class="hover:text-[var(--accent-color)] transition-colors">Twitter (X)</a>
          <a href="#" class="hover:text-[var(--accent-color)] transition-colors">LinkedIn</a>
          <div class="mt-8 pt-8 border-t border-white/5">
             <span class="text-white/20">Contact: hello@studio-modern.com</span>
          </div>
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
</style>`
};