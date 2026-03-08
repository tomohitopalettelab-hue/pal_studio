import type { TemplateVariant } from '../types';

export const modernAboutTemplate: TemplateVariant = {
  id: 'variant-modern-about',
  templateId: 'template-modern',
  name: 'About',
  pageSlug: 'about',
  description: 'Modern / Corporate profile with high-end typography',
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
          <a href="/about" class="text-[var(--accent-color)]">About</a>
          <a href="/contact" class="px-8 py-4 bg-[var(--main-color)] text-white text-[9px] hover:bg-[var(--accent-color)] transition-all">Get in touch</a>
        </nav>
        <label for="menu-toggle-about" class="lg:hidden cursor-pointer p-2 z-[110]">
          <div class="w-6 h-5 flex flex-col justify-between">
            <span class="w-full h-[2px] bg-[var(--main-color)]"></span>
            <span class="w-full h-[2px] bg-[var(--main-color)]"></span>
            <span class="w-full h-[2px] bg-[var(--main-color)]"></span>
          </div>
        </label>
      </div>
      <input type="checkbox" id="menu-toggle-about" class="sr-only peer" />
      <div class="fixed inset-0 bg-[var(--main-dark)] translate-x-full peer-checked:translate-x-0 transition-transform duration-500 lg:hidden z-[105] flex flex-col items-center justify-center text-white">
        <nav class="flex flex-col items-center gap-8 text-xs font-bold uppercase tracking-[0.5em]">
          <a data-page-slug="top" href="/" onclick="document.getElementById('menu-toggle-about').checked=false">Top</a>
          <a data-page-slug="about" href="/about" onclick="document.getElementById('menu-toggle-about').checked=false">About</a>
          <a data-page-slug="contact" href="/contact" onclick="document.getElementById('menu-toggle-about').checked=false">Contact</a>
        </nav>
      </div>
    </header>

    <main class="pt-32 md:pt-48">
      <section class="px-6 md:px-10 mb-20 md:mb-32 text-center">
        <div class="max-w-4xl mx-auto">
          <p class="text-[10px] font-bold tracking-[0.8em] text-[var(--accent-color)] uppercase mb-6">Our Identity</p>
          <h1 class="text-[clamp(3rem,10vw,8rem)] font-black tracking-tighter leading-none uppercase mb-10">
            Crafting the <br/><span class="italic font-light text-[var(--main-color)]" style="font-family: serif;">Future.</span>
          </h1>
          <p class="text-[var(--text-light)] text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            私たちは「成果が続くデザイン」を軸に、戦略設計から運用まで一貫して伴走するクリエイティブスタジオです。
          </p>
        </div>
      </section>

      <section class="px-6 md:px-10 py-24 md:py-40 bg-slate-50">
        <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
          <div class="space-y-12">
            <div>
              <span class="text-[10px] font-bold tracking-[0.4em] text-[var(--accent-color)] uppercase mb-6 block">01 / Mission</span>
              <h2 class="text-3xl md:text-5xl font-bold tracking-tight leading-tight">ブランドの本質を言語化し、体験として設計する。</h2>
            </div>
            <p class="text-[var(--text-light)] text-lg font-light leading-relaxed">
              プロジェクトの「意図」と「成果」を一致させること。単なる見た目の美しさだけでなく、事業成長に貢献するための論理的なアプローチを徹底しています。
            </p>
            <div class="grid grid-cols-3 gap-6 md:gap-10 border-t border-black/5 pt-12">
              <div>
                <p class="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-2">Projects</p>
                <p class="text-3xl md:text-4xl font-black tracking-tighter">120<span class="text-sm font-normal text-[var(--accent-color)]">+</span></p>
              </div>
              <div>
                <p class="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-2">Clients</p>
                <p class="text-3xl md:text-4xl font-black tracking-tighter">80<span class="text-sm font-normal text-[var(--accent-color)]">+</span></p>
              </div>
              <div>
                <p class="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-2">Retention</p>
                <p class="text-3xl md:text-4xl font-black tracking-tighter">92<span class="text-sm font-normal text-[var(--accent-color)]">%</span></p>
              </div>
            </div>
          </div>
          <div class="aspect-square bg-slate-200 overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Office Space">
          </div>
        </div>
      </section>

      <section class="px-6 md:px-10 py-32 md:py-48">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <h3 class="text-4xl md:text-6xl font-black tracking-tighter uppercase">Our Principles</h3>
            <p class="text-[var(--text-light)] text-sm md:text-base font-light max-w-sm">私たちが大切にしている3つの価値観。これらがすべての制作の土台となります。</p>
          </div>
          <div class="grid md:grid-cols-3 gap-12 md:gap-16">
            <div class="space-y-6">
              <span class="text-[var(--accent-color)] font-mono text-lg font-bold opacity-30">/ 01</span>
              <h4 class="text-2xl font-bold tracking-tight">設計ファースト</h4>
              <p class="text-[var(--text-light)] text-sm leading-relaxed">「誰に、何を、どの順で伝えるか」を起点に、迷いのない情報設計を行います。</p>
            </div>
            <div class="space-y-6">
              <span class="text-[var(--accent-color)] font-mono text-lg font-bold opacity-30">/ 02</span>
              <h4 class="text-2xl font-bold tracking-tight">検証と改善</h4>
              <p class="text-[var(--text-light)] text-sm leading-relaxed">公開はスタート地点。データに基づき、運用しながら最適化し続ける姿勢を崩しません。</p>
            </div>
            <div class="space-y-6">
              <span class="text-[var(--accent-color)] font-mono text-lg font-bold opacity-30">/ 03</span>
              <h4 class="text-2xl font-bold tracking-tight">長期の伴走</h4>
              <p class="text-[var(--text-light)] text-sm leading-relaxed">一度きりの納品ではなく、クライアントの事業フェーズに合わせた最適な進化を支援します。</p>
            </div>
          </div>
        </div>
      </section>

      <section class="px-6 md:px-10 py-32 bg-[var(--main-dark)] text-white">
        <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-24">
          <div class="lg:col-span-5 space-y-12">
            <h3 class="text-xs font-bold uppercase tracking-[0.5em] text-[var(--accent-color)] mb-12">Timeline</h3>
            <ol class="space-y-16 border-l border-white/10 ml-2">
              <li class="relative pl-12 group">
                <span class="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-[var(--accent-color)] rounded-full"></span>
                <p class="text-xs font-bold text-white/40 mb-2">2018</p>
                <h4 class="text-xl font-bold mb-4">Foundation</h4>
                <p class="text-white/50 text-sm font-light leading-relaxed text-pretty">事業開始。ブランド設計とビジュアル表現を高い次元で統合する体制を構築。</p>
              </li>
              <li class="relative pl-12 group">
                <span class="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-[var(--accent-color)] rounded-full"></span>
                <p class="text-xs font-bold text-white/40 mb-2">2021</p>
                <h4 class="text-xl font-bold mb-4">Strategic Expansion</h4>
                <p class="text-white/50 text-sm font-light leading-relaxed text-pretty">デジタルマーケティングと運用支援を統合。デザインの「成果」を可視化するフェーズへ。</p>
              </li>
            </ol>
          </div>
          
          <div class="lg:col-span-7 space-y-12">
            <h3 class="text-xs font-bold uppercase tracking-[0.5em] text-[var(--accent-color)] mb-12 text-center md:text-left">Executive Members</h3>
            <div class="grid md:grid-cols-2 gap-10">
              <div class="group">
                <div class="aspect-[3/4] overflow-hidden mb-6 bg-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover" alt="Member 01">
                </div>
                <h4 class="text-lg font-bold">佐藤 健太</h4>
                <p class="text-[10px] uppercase font-bold text-[var(--accent-color)] tracking-widest mt-1">Creative Director</p>
              </div>
              <div class="group">
                <div class="aspect-[3/4] overflow-hidden mb-6 bg-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover" alt="Member 02">
                </div>
                <h4 class="text-lg font-bold">高橋 明日香</h4>
                <p class="text-[10px] uppercase font-bold text-[var(--accent-color)] tracking-widest mt-1">Design Lead</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="px-6 md:px-10 py-32 md:py-48">
        <div class="max-w-4xl mx-auto">
          <h3 class="text-xs font-bold uppercase tracking-[0.5em] text-[var(--accent-color)] text-center mb-20">Corporate Profile</h3>
          <dl class="divide-y divide-black/5 border-y border-black/5">
            <div class="grid md:grid-cols-3 py-10">
              <dt class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 md:mb-0">Name</dt>
              <dd class="md:col-span-2 text-xl font-bold tracking-tight">Studio Modern Inc. / 株式会社スタジオモダン</dd>
            </div>
            <div class="grid md:grid-cols-3 py-10">
              <dt class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 md:mb-0">Office</dt>
              <dd class="md:col-span-2 text-xl font-bold tracking-tight">東京都渋谷区神南 1-2-3 Modern Complex 4F</dd>
            </div>
            <div class="grid md:grid-cols-3 py-10">
              <dt class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 md:mb-0">Services</dt>
              <dd class="md:col-span-2 text-xl font-bold tracking-tight">ブランド設計、Webサイト制作、UI/UXデザイン、運用コンサルティング</dd>
            </div>
          </dl>
          
          <div class="mt-32 p-12 md:p-20 bg-slate-50 text-center">
            <h4 class="text-2xl md:text-3xl font-bold tracking-tight mb-8 leading-tight italic">
              共にビジネスに「鼓動」を宿しませんか？
            </h4>
            <a data-page-slug="contact" href="/contact" class="inline-flex items-center justify-center px-12 py-5 bg-[var(--main-color)] text-white text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-[var(--accent-color)] transition-all shadow-xl shadow-black/10">
              Contact us
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-20 md:py-32 bg-[var(--main-dark)] text-white px-6 md:px-10">
      <div class="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-20">
        <div>
          <h2 class="text-5xl md:text-[clamp(4rem,10vw,8rem)] font-black tracking-tighter mb-8 md:mb-12 italic opacity-20 uppercase leading-none">Studio.</h2>
          <p class="text-white/40 text-[9px] font-bold tracking-[0.5em] uppercase">© 2026 Studio Modern.</p>
        </div>
        <div class="flex flex-col gap-6 text-[9px] font-bold uppercase tracking-[0.3em]">
          <div class="flex gap-8">
            <a href="#" class="hover:text-[var(--accent-color)] transition-colors">Instagram</a>
            <a href="#" class="hover:text-[var(--accent-color)] transition-colors">X</a>
            <a href="#" class="hover:text-[var(--accent-color)] transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>
`
};