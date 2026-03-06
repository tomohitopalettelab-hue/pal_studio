import type { Template } from './types';

export const portfolioTemplate: Template = {
  id: 'template-portfolio',
  name: 'Portfolio: 作品重視',
  tags: ['portfolio', 'photo', 'creator', 'gallery'],
  description: '画像や作品をグリッド状に配置し、視覚的なインパクトを重視。',
  html: `<div class="template-root" style="--main-color: #000000; --sub-color: #f4f4f4; --accent-color: #666666; --bg-color: #ffffff; --text-color: #1a1a1a;">
  <div class="min-h-screen font-sans text-[var(--text-color)] bg-[var(--bg-color)] selection:bg-black selection:text-white">
    
    <div class="fixed top-10 right-10 z-[100] hidden md:block">
      <a href="#company" class="w-24 h-24 rounded-full border border-black flex items-center justify-center text-[10px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-500">Company</a>
    </div>

    <header class="h-screen px-8 md:px-[10%] relative overflow-hidden">
      <section id="top" class="h-full flex flex-col justify-center">
        <div class="absolute top-10 left-10">
          <span class="text-xs font-bold tracking-[0.5em] uppercase opacity-30 italic">Vol. 2026 / Selected Works</span>
        </div>
        
        <div class="relative z-10">
          <h1 class="text-[18vw] font-[900] leading-[0.85] tracking-tighter uppercase mix-blend-difference">
            Port<br/><span class="ml-[5vw]">folio.</span>
          </h1>
          <div class="mt-12 flex items-center gap-8">
            <div class="h-px w-32 bg-black"></div>
            <p class="text-sm font-bold tracking-[0.3em] uppercase">Visual Designer / Art Director</p>
          </div>
        </div>

        <div class="absolute bottom-10 left-10 text-[10px] tracking-[0.4em] uppercase opacity-20 rotate-90 origin-left">
          Scroll to discover
        </div>
      </section>
    </header>

    <main>
      <section id="concept" class="py-40 px-8 md:px-[10%] bg-[var(--sub-color)]">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-[10px] font-bold tracking-[0.5em] uppercase text-[var(--accent-color)] mb-12">About</h2>
          <p class="text-3xl md:text-6xl font-bold leading-[1.1] tracking-tight text-balance">
            境界を超え、新しい視点を与えるデザインを。コンセプトからアウトプットまで、一貫した世界観を構築します。
          </p>
        </div>
      </section>

      <section id="features" class="py-32 px-8 md:px-[10%] border-b border-slate-100">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          <div class="group">
            <span class="text-6xl font-black opacity-5 group-hover:opacity-10 transition-opacity">01</span>
            <h3 class="text-xl font-bold mt-[-1.5rem] mb-4">Strategy</h3>
            <p class="text-sm leading-relaxed text-[var(--accent-color)]">徹底したリサーチに基づき、ブランドが進むべき本質的なルートを策定します。</p>
          </div>
          <div class="group">
            <span class="text-6xl font-black opacity-5 group-hover:opacity-10 transition-opacity">02</span>
            <h3 class="text-xl font-bold mt-[-1.5rem] mb-4">Design</h3>
            <p class="text-sm leading-relaxed text-[var(--accent-color)]">視覚的な美しさと使い心地を高次元で融合させた、独自のビジュアルを提案します。</p>
          </div>
          <div class="group">
            <span class="text-6xl font-black opacity-5 group-hover:opacity-10 transition-opacity">03</span>
            <h3 class="text-xl font-bold mt-[-1.5rem] mb-4">Development</h3>
            <p class="text-sm leading-relaxed text-[var(--accent-color)]">細部までこだわり抜いた実装で、デジタル上の体験に命を吹き込みます。</p>
          </div>
        </div>
      </section>

      <section id="service" class="py-28 px-8 md:px-[10%] bg-white">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-[10px] font-bold tracking-[0.5em] uppercase text-[var(--accent-color)] mb-12">Services</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="p-8 border border-slate-100">
              <h4 class="text-lg font-bold mb-3">Brand Identity</h4>
              <p class="text-sm text-[var(--accent-color)] leading-relaxed">コンセプト設計からロゴ、ガイドラインまで一貫して制作。</p>
            </div>
            <div class="p-8 border border-slate-100">
              <h4 class="text-lg font-bold mb-3">Web Experience</h4>
              <p class="text-sm text-[var(--accent-color)] leading-relaxed">UI/UX設計とインタラクションで体験価値を最大化。</p>
            </div>
            <div class="p-8 border border-slate-100">
              <h4 class="text-lg font-bold mb-3">Creative Direction</h4>
              <p class="text-sm text-[var(--accent-color)] leading-relaxed">撮影・アートディレクションを含む総合演出。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="works" class="py-32">
        <div class="px-8 md:px-[10%] mb-16 flex justify-between items-end">
          <h2 class="text-5xl font-[900] uppercase tracking-tighter">Works</h2>
          <span class="text-xs font-bold opacity-30">Featured Projects (06)</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          <div class="aspect-square bg-slate-100 relative group cursor-pointer overflow-hidden">
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-all duration-500 z-10"></div>
            <div class="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 p-8">
              <span class="text-[10px] tracking-[0.3em] uppercase mb-4 translate-y-4 group-hover:translate-y-0 transition-transform">Branding</span>
              <h4 class="text-2xl font-bold tracking-tight">Project Name 01</h4>
            </div>
          </div>
          <div class="aspect-square bg-slate-200 relative group cursor-pointer overflow-hidden">
             <div class="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-all duration-500 z-10"></div>
             <div class="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 p-8">
              <span class="text-[10px] tracking-[0.3em] uppercase mb-4 translate-y-4 group-hover:translate-y-0 transition-transform">Digital</span>
              <h4 class="text-2xl font-bold tracking-tight">Project Name 02</h4>
            </div>
          </div>
          <div class="aspect-square bg-slate-100 relative group cursor-pointer overflow-hidden">
             <div class="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-all duration-500 z-10"></div>
             <div class="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 p-8">
              <span class="text-[10px] tracking-[0.3em] uppercase mb-4 translate-y-4 group-hover:translate-y-0 transition-transform">Identity</span>
              <h4 class="text-2xl font-bold tracking-tight">Project Name 03</h4>
            </div>
          </div>
          <div class="aspect-square bg-slate-200 relative group cursor-pointer overflow-hidden">
             <div class="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-all duration-500 z-10"></div>
             <div class="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 p-8">
              <span class="text-[10px] tracking-[0.3em] uppercase mb-4 translate-y-4 group-hover:translate-y-0 transition-transform">Visual</span>
              <h4 class="text-2xl font-bold tracking-tight">Project Name 04</h4>
            </div>
          </div>
          <div class="aspect-square bg-slate-100 relative group cursor-pointer overflow-hidden">
             <div class="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-all duration-500 z-10"></div>
             <div class="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 p-8">
              <span class="text-[10px] tracking-[0.3em] uppercase mb-4 translate-y-4 group-hover:translate-y-0 transition-transform">Motion</span>
              <h4 class="text-2xl font-bold tracking-tight">Project Name 05</h4>
            </div>
          </div>
          <div class="aspect-square bg-slate-200 relative group cursor-pointer overflow-hidden">
             <div class="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-all duration-500 z-10"></div>
             <div class="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 p-8">
              <span class="text-[10px] tracking-[0.3em] uppercase mb-4 translate-y-4 group-hover:translate-y-0 transition-transform">Editorial</span>
              <h4 class="text-2xl font-bold tracking-tight">Project Name 06</h4>
            </div>
          </div>
        </div>
      </section>

      <section id="company" class="py-48 px-8 md:px-[10%] text-center">
        <h3 class="text-xs font-bold tracking-[0.8em] uppercase opacity-30 mb-12">Company / Contact</h3>
        <a href="mailto:hello@portfolio.com" class="text-3xl md:text-7xl font-bold tracking-tighter hover:opacity-50 transition-opacity">hello@portfolio.com</a>
        <div class="mt-24 flex justify-center gap-12 text-[10px] font-bold tracking-widest uppercase">
          <a href="#" class="hover:underline">Instagram</a>
          <a href="#" class="hover:underline">Dribbble</a>
          <a href="#" class="hover:underline">Behance</a>
        </div>
      </section>
    </main>

    <footer class="py-12 px-8 md:px-[10%] flex flex-col md:flex-row justify-between items-center gap-6 border-t border-slate-100 text-[10px] font-bold tracking-[0.2em] uppercase opacity-30">
      <span>&copy; 2026 Creative Works Portfolio.</span>
      <span>Designed with focus.</span>
    </footer>
  </div>
</div>`
};
