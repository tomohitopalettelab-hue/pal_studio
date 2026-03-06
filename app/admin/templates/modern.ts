import type { Template } from './types';

export const modernTemplate: Template = {
  id: 'template-modern',
  name: 'Modern: シンプル & クリーン',
  tags: ['simple', 'clean', 'business', 'startup'],
  description: '汎用性の高いモダンでクリーンなデザイン。セクション固定構成に対応。',
  html: `
<div class="template-root" style="--main-color: #000000; --main-dark: #1a1a1a; --accent-color: #6366f1; --text-color: #0a0a0a; --text-light: #666666; --bg-color: #ffffff; --section-gap: 10rem;">
  <div class="min-h-screen font-sans text-[var(--text-color)] bg-[var(--bg-color)] selection:bg-[var(--accent-color)] selection:text-white antialiased">
    
    <header class="fixed w-full z-[100] transition-all duration-500">
      <div class="max-w-[1400px] mx-auto px-8 h-24 flex items-center justify-between">
        <div class="flex items-center gap-3 group cursor-pointer">
          <div class="w-10 h-10 bg-[var(--main-color)] rounded-full flex items-center justify-center text-white font-bold transition-transform group-hover:rotate-180 duration-500">M</div>
          <h1 class="text-2xl font-black tracking-tighter uppercase">Studio<span class="text-[var(--accent-color)]">.</span></h1>
        </div>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--text-color)]">
          <a href="#concept" class="hover:text-[var(--accent-color)] transition-all">Concept</a>
          <a href="#features" class="hover:text-[var(--accent-color)] transition-all">Features</a>
          <a href="#service" class="hover:text-[var(--accent-color)] transition-all">Service</a>
          <a href="#works" class="hover:text-[var(--accent-color)] transition-all">Works</a>
          <a href="#company" class="px-8 py-3 bg-[var(--main-color)] text-white rounded-full hover:bg-[var(--accent-color)] transition-all shadow-lg hover:shadow-[var(--accent-color)]/20">Get in touch</a>
        </nav>
      </div>
    </header>

    <main>
      <section id="top" class="section-hero relative min-h-screen flex items-center justify-center px-8 overflow-hidden bg-[#fafafa]">
        <div class="absolute inset-0 z-0">
          <div class="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[var(--accent-color)]/5 rounded-full blur-[120px]"></div>
          <div class="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[100px]"></div>
        </div>
        
        <div class="relative z-10 max-w-7xl mx-auto text-center">
          <p class="inline-block mb-8 text-[12px] font-bold tracking-[0.5em] text-[var(--accent-color)] uppercase animate-fade-in">Established 2026</p>
          <h2 class="text-[clamp(3rem,10vw,8rem)] font-black tracking-tighter leading-[0.85] mb-12 uppercase">
            Define the <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] via-[var(--accent-color)] to-[var(--main-color)]">New Era.</span>
          </h2>
          <div class="flex flex-col items-center">
            <p class="text-xl md:text-2xl text-[var(--text-light)] mb-12 max-w-2xl font-medium leading-relaxed">
              私たちは、既成概念を壊し、<br/>デザインでビジネスに「鼓動」を宿します。
            </p>
            <div class="w-[1px] h-24 bg-gradient-to-b from-[var(--main-color)] to-transparent opacity-20"></div>
          </div>
        </div>
      </section>

      <section id="concept" class="section-concept py-[var(--section-gap)] px-8">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-12 gap-16 items-start">
            <div class="lg:col-span-5">
              <h3 class="text-[12px] font-bold tracking-[0.4em] text-[var(--accent-color)] uppercase mb-6">Philosophy</h3>
              <h4 class="text-5xl font-bold leading-tight tracking-tight">「意味」を<br/>デザインする。</h4>
            </div>
            <div class="lg:col-span-7">
              <p class="text-2xl leading-relaxed text-[var(--text-light)] font-light">
                単なる見た目の美しさを超え、ブランドの根底にあるストーリーを形にします。情報は整理されるだけでなく、感情を揺さぶる体験へと昇華されるべきです。私たちはその「問い」から始めます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="section-features py-[var(--section-gap)] px-8 bg-[#0a0a0a] text-white overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div class="grid md:grid-cols-3 gap-1">
            <div class="group p-12 border border-white/10 hover:bg-white/5 transition-all duration-700">
              <span class="text-[var(--accent-color)] font-mono text-lg mb-8 block">/ 01</span>
              <h4 class="text-3xl font-bold mb-6 italic tracking-tight">Avant-Garde</h4>
              <p class="text-white/50 leading-relaxed font-light">最先端のテクノロジーと芸術性を融合。他社が決して真似できない、独自のブランドプレゼンスを構築します。</p>
            </div>
            <div class="group p-12 border border-white/10 hover:bg-white/5 transition-all duration-700 md:translate-y-12">
              <span class="text-[var(--accent-color)] font-mono text-lg mb-8 block">/ 02</span>
              <h4 class="text-3xl font-bold mb-6 italic tracking-tight">Precision</h4>
              <p class="text-white/50 leading-relaxed font-light">1ピクセルの妥協も許さない、圧倒的な品質管理。細部へのこだわりが、顧客への信頼へと直結します。</p>
            </div>
            <div class="group p-12 border border-white/10 hover:bg-white/5 transition-all duration-700">
              <span class="text-[var(--accent-color)] font-mono text-lg mb-8 block">/ 03</span>
              <h4 class="text-3xl font-bold mb-6 italic tracking-tight">Evolution</h4>
              <p class="text-white/50 leading-relaxed font-light">納品はスタートに過ぎません。データに基づいた持続的なアップデートで、ビジネスの成長を加速させます。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="service" class="section-service py-[var(--section-gap)] px-8">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-24">
            <h3 class="text-4xl font-bold tracking-tighter mb-4">Service Package</h3>
            <div class="w-12 h-1 bg-[var(--accent-color)] mx-auto"></div>
          </div>
          <div class="space-y-6">
            <div class="group bg-[#f8f9fa] p-10 rounded-[40px] flex flex-col md:flex-row justify-between items-center transition-all duration-500 hover:scale-[1.02] hover:bg-white hover:shadow-2xl">
              <div class="text-center md:text-left mb-8 md:mb-0">
                <span class="text-[10px] font-black uppercase tracking-widest text-[var(--accent-color)]">High-End Solution</span>
                <h4 class="text-3xl font-bold mt-2">Executive Brand Package</h4>
                <p class="text-[var(--text-light)] mt-4">ブランディングからフルカスタマイズサイト制作まで</p>
              </div>
              <div class="text-right flex flex-col items-center md:items-end">
                <span class="text-5xl font-black tracking-tighter italic">¥800,000<span class="text-lg not-italic text-slate-400">~</span></span>
                <button class="mt-6 px-8 py-3 bg-[var(--main-color)] text-white text-xs font-bold uppercase tracking-widest rounded-full group-hover:bg-[var(--accent-color)] transition-colors">Select Plan</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="works" class="section-works py-[var(--section-gap)] px-8 bg-white">
        <div class="max-w-[1600px] mx-auto">
          <div class="flex justify-between items-end mb-16 px-4">
            <h3 class="text-6xl font-black tracking-tighter uppercase leading-none">Selected<br/><span class="text-outline text-transparent" style="-webkit-text-stroke: 1px var(--text-color);">Archive</span></h3>
            <p class="text-[var(--text-light)] font-bold tracking-widest uppercase text-xs">View all cases (12)</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div class="group cursor-pointer">
              <div class="aspect-[4/5] bg-slate-100 overflow-hidden relative mb-6">
                <div class="absolute inset-0 bg-[var(--main-color)] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <span class="text-white font-bold tracking-[0.5em] uppercase text-sm">View Project</span>
                </div>
              </div>
              <h5 class="text-xl font-bold">Aether Dynamic</h5>
              <p class="text-sm text-[var(--text-light)] mt-2 font-medium uppercase tracking-wider">Visual Identity / Web Design</p>
            </div>
            <div class="group cursor-pointer md:mt-24">
              <div class="aspect-[4/5] bg-slate-100 overflow-hidden relative mb-6">
                 <div class="absolute inset-0 bg-[var(--accent-color)] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
                 <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <span class="text-white font-bold tracking-[0.5em] uppercase text-sm">View Project</span>
                </div>
              </div>
              <h5 class="text-xl font-bold">Neo Genesis</h5>
              <p class="text-sm text-[var(--text-light)] mt-2 font-medium uppercase tracking-wider">UI/UX Strategy</p>
            </div>
            <div class="group cursor-pointer">
              <div class="aspect-[4/5] bg-slate-100 overflow-hidden relative mb-6">
                 <div class="absolute inset-0 bg-[var(--main-color)] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
                 <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <span class="text-white font-bold tracking-[0.5em] uppercase text-sm">View Project</span>
                </div>
              </div>
              <h5 class="text-xl font-bold">Lumina Systems</h5>
              <p class="text-sm text-[var(--text-light)] mt-2 font-medium uppercase tracking-wider">E-Commerce Solution</p>
            </div>
          </div>
        </div>
      </section>

      <section id="company" class="section-company py-[var(--section-gap)] px-8 border-t border-slate-100">
        <div class="max-w-4xl mx-auto">
          <h3 class="text-center text-xs font-black tracking-[0.6em] uppercase mb-20 text-[var(--text-light)]">Corporate Profile</h3>
          <div class="space-y-0 border-y border-[var(--text-color)]">
            <div class="grid grid-cols-1 md:grid-cols-4 py-12 group hover:bg-[var(--main-color)] hover:text-white transition-all px-8">
              <dt class="font-bold text-[10px] uppercase tracking-[0.3em] self-center mb-2 md:mb-0">Name</dt>
              <dd class="md:col-span-3 text-2xl font-bold tracking-tight">MODERN DESIGN STUDIO INC.</dd>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 py-12 group hover:bg-[var(--main-color)] hover:text-white transition-all px-8">
              <dt class="font-bold text-[10px] uppercase tracking-[0.3em] self-center mb-2 md:mb-0">Office</dt>
              <dd class="md:col-span-3 text-2xl font-bold tracking-tight">SHIBUYA, TOKYO / ONLINE ANYWHERE</dd>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-20 bg-[var(--main-color)] text-white px-8">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
        <div>
          <h2 class="text-7xl font-black tracking-tighter mb-8 italic">Let's talk.</h2>
          <p class="text-white/40 text-xs font-bold tracking-[0.4em] uppercase">© 2026 Studio Modern. Built for Excellence.</p>
        </div>
        <div class="flex gap-12 text-xs font-bold uppercase tracking-widest">
          <a href="#" class="hover:text-[var(--accent-color)] transition-colors">Instagram</a>
          <a href="#" class="hover:text-[var(--accent-color)] transition-colors">Twitter (X)</a>
          <a href="#" class="hover:text-[var(--accent-color)] transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  </div>
</div>`
};
