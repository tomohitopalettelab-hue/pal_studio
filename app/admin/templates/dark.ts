import type { Template } from './types';

export const darkTemplate: Template = {
  id: 'template-dark',
  name: 'Dark: テック & クール',
  tags: ['dark', 'tech', 'night', 'cool'],
  description: '黒を基調とした、先進的なダークモード。',
  html: `<div class="template-root" style="--main-color: #06b6d4; --sub-color: #0891b2; --accent-color: #0f172a; --text-color: #e2e8f0; --bg-color: #020617;">
  <div class="min-h-screen font-mono text-[var(--text-color)] bg-[var(--bg-color)] relative selection:bg-[var(--main-color)] selection:text-black">
    
    <div class="absolute inset-0 pointer-events-none z-[100]" style="background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.02), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.02)); background-size: 100% 4px, 3px 100%;"></div>

    <header class="p-6 border-b border-[var(--main-color)]/30 flex justify-between bg-black/80 backdrop-blur-md sticky top-0 z-50">
      <div class="flex items-center gap-4">
        <div class="w-3 h-3 bg-[var(--main-color)] rounded-full animate-pulse shadow-[0_0_10px_var(--main-color)]"></div>
        <span class="font-black tracking-tighter text-xl">DEV<span class="text-[var(--main-color)]">.IO</span></span>
      </div>
      <nav data-sync="site-pages" class="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] items-center">
        <a href="#concept" class="hover:text-[var(--main-color)] transition-colors">/Concept</a>
        <a href="#features" class="hover:text-[var(--main-color)] transition-colors">/Specs</a>
        <a href="#service" class="hover:text-[var(--main-color)] transition-colors">/Core</a>
        <div class="px-3 py-1 border border-red-500/50 text-red-500 text-[8px] animate-pulse">System: Stable</div>
      </nav>
    </header>

    <main>
      <section id="top" class="relative py-40 px-6 max-w-6xl mx-auto overflow-hidden">
        <div class="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-luminosity">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" class="w-full h-full object-cover mask-image-b" style="mask-image: linear-gradient(to bottom, black, transparent);">
        </div>
        <div class="absolute -top-20 -left-20 w-96 h-96 bg-[var(--main-color)]/10 blur-[120px] rounded-full"></div>
        <div class="relative z-10">
          <div class="flex items-center gap-3 mb-6">
            <span class="bg-[var(--main-color)]/20 text-[var(--main-color)] text-[10px] px-2 py-0.5 font-bold uppercase tracking-widest border border-[var(--main-color)]/40">Initialize... Success</span>
            <span class="text-slate-600 text-[10px]">v4.02.26</span>
          </div>
          <h2 class="text-6xl md:text-8xl font-black mb-10 leading-none">
            FUTURE<br/>
            <span class="text-transparent" style="-webkit-text-stroke: 1px var(--main-color); filter: drop-shadow(0 0 5px var(--main-color));">PROTOCOL</span>
          </h2>
          <p class="text-slate-400 max-w-xl text-lg mb-12 border-l-2 border-slate-700 pl-6">
            最先端の量子アルゴリズムと、洗練されたアーキテクチャで、<br/>
            デジタル領域の限界を再定義する。
          </p>
          <button class="group relative px-8 py-4 bg-transparent border border-[var(--main-color)] text-[var(--main-color)] uppercase text-xs tracking-[0.3em] overflow-hidden hover:text-black transition-colors duration-300">
            <span class="relative z-10">Connect Terminal</span>
            <div class="absolute inset-0 bg-[var(--main-color)] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </section>

      <section id="concept" class="py-24 px-6 bg-slate-900/50 border-y border-slate-800 relative">
        <div class="max-w-4xl mx-auto">
          <div class="flex justify-between items-end mb-12">
            <h3 class="text-[var(--main-color)] text-xs tracking-[0.5em] uppercase">Core Mission</h3>
            <span class="text-slate-700 text-[8px]">0x001A_44B</span>
          </div>
          <p class="text-3xl md:text-5xl font-bold leading-tight italic">
            「不可能を<span class="text-[var(--main-color)] shadow-[0_0_15px_rgba(6,182,212,0.5)]">コード</span>で解決する」
          </p>
          <div class="mt-12 flex gap-1">
            <div class="w-12 h-1 bg-[var(--main-color)]"></div>
            <div class="w-4 h-1 bg-slate-700"></div>
            <div class="w-2 h-1 bg-slate-700"></div>
          </div>
        </div>
      </section>

      <section id="features" class="py-32 px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div class="group p-10 border border-slate-800 bg-black/60 relative hover:border-[var(--main-color)] transition-all overflow-hidden">
            <div class="absolute top-0 right-0 p-2 text-[8px] text-slate-700 uppercase group-hover:text-[var(--main-color)] transition-colors">M_01</div>
            <h4 class="text-xl font-bold mb-4 text-white group-hover:text-[var(--main-color)] transition-colors">Fast Execution</h4>
            <p class="text-xs text-slate-500 leading-relaxed mb-6">極限まで最適化されたランタイムにより、ミリ秒単位のレスポンスを実現。</p>
            <div class="w-full h-0.5 bg-slate-800 group-hover:bg-[var(--main-color)] transition-all"></div>
          </div>
          <div class="group p-10 border border-slate-800 bg-black/60 relative hover:border-[var(--main-color)] transition-all overflow-hidden">
            <div class="absolute top-0 right-0 p-2 text-[8px] text-slate-700 uppercase group-hover:text-[var(--main-color)] transition-colors">M_02</div>
            <h4 class="text-xl font-bold mb-4 text-white group-hover:text-[var(--main-color)] transition-colors">Encrypted</h4>
            <p class="text-xs text-slate-500 leading-relaxed mb-6">ゼロトラスト原則に基づく、軍用レベルの暗号化プロトコルを標準装備。</p>
            <div class="w-full h-0.5 bg-slate-800 group-hover:bg-[var(--main-color)] transition-all"></div>
          </div>
          <div class="group p-10 border border-slate-800 bg-black/60 relative hover:border-[var(--main-color)] transition-all overflow-hidden">
            <div class="absolute top-0 right-0 p-2 text-[8px] text-slate-700 uppercase group-hover:text-[var(--main-color)] transition-colors">M_03</div>
            <h4 class="text-xl font-bold mb-4 text-white group-hover:text-[var(--main-color)] transition-colors">Scalability</h4>
            <p class="text-xs text-slate-500 leading-relaxed mb-6">数百万の同時接続に耐えうる、自律分散型のスケーリング機構。</p>
            <div class="w-full h-0.5 bg-slate-800 group-hover:bg-[var(--main-color)] transition-all"></div>
          </div>
        </div>
      </section>

      <section id="service" class="py-24 px-6 bg-slate-900/30">
        <div class="max-w-4xl mx-auto">
          <div class="border border-slate-800 p-8 bg-black/40">
            <h3 class="text-xs mb-8 tracking-[0.4em] text-slate-500 uppercase">Available Protocols</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center p-5 border-l-2 border-[var(--main-color)] bg-slate-800/20 group hover:bg-[var(--main-color)]/5 transition-colors">
                <div class="flex items-center gap-4">
                  <span class="text-xs text-slate-600">01</span>
                  <span class="text-sm font-bold tracking-widest uppercase">Cloud Architecture</span>
                </div>
                <span class="text-[10px] text-[var(--main-color)] animate-pulse font-bold tracking-widest">[ READY ]</span>
              </div>
              <div class="flex justify-between items-center p-5 border-l-2 border-slate-700 bg-slate-800/10 group hover:bg-[var(--main-color)]/5 transition-colors">
                <div class="flex items-center gap-4">
                  <span class="text-xs text-slate-600">02</span>
                  <span class="text-sm font-bold tracking-widest uppercase">Neural Net Interface</span>
                </div>
                <span class="text-[10px] text-slate-600 font-bold tracking-widest">[ STANDBY ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="works" class="py-32 px-6">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="aspect-video bg-slate-800/50 border border-slate-700 group relative cursor-crosshair">
              <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-opacity duration-500">
              <div class="absolute inset-0 bg-[var(--main-color)]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div class="absolute bottom-2 left-2 text-[8px] text-slate-600 uppercase">Archive_01</div>
            </div>
            <div class="aspect-video bg-slate-900/50 border border-slate-700 group relative cursor-crosshair">
              <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-opacity duration-500">
              <div class="absolute inset-0 bg-[var(--main-color)]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div class="absolute bottom-2 left-2 text-[8px] text-slate-600 uppercase">Archive_02</div>
            </div>
            <div class="aspect-video bg-slate-800/50 border border-slate-700 group relative cursor-crosshair">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-opacity duration-500">
              <div class="absolute inset-0 bg-[var(--main-color)]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div class="absolute bottom-2 left-2 text-[8px] text-slate-600 uppercase">Archive_03</div>
            </div>
            <div class="aspect-video bg-slate-900/50 border border-slate-700 group relative cursor-crosshair">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-opacity duration-500">
              <div class="absolute inset-0 bg-[var(--main-color)]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div class="absolute bottom-2 left-2 text-[8px] text-slate-600 uppercase">Archive_04</div>
            </div>
          </div>
        </div>
      </section>

      <section id="news" class="py-24 px-6 bg-slate-900/40 border-y border-slate-800">
        <div class="max-w-6xl mx-auto">
          <div class="flex justify-between items-end mb-10 md:mb-14">
            <h3 class="text-[var(--main-color)] text-xs tracking-[0.5em] uppercase font-mono">// News Log</h3>
            <a href="/news" class="text-[9px] tracking-[0.3em] uppercase text-slate-500 border-b border-slate-700 pb-1 hover:text-[var(--main-color)] transition-colors">View All</a>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            <a href="/news/news-page" class="group block"><article class="p-6 border border-slate-800 bg-black/40 hover:border-[var(--main-color)]/30 transition-colors"><p class="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-mono">2026.03.08</p><h4 class="text-lg font-bold mt-3 text-[var(--text-color)] group-hover:text-[var(--main-color)] transition-colors">最新情報は公開投稿から自動生成されます。</h4></article></a>
            <a href="/news/news-page" class="group block"><article class="p-6 border border-slate-800 bg-black/40 hover:border-[var(--main-color)]/30 transition-colors"><p class="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-mono">2026.02.20</p><h4 class="text-lg font-bold mt-3 text-[var(--text-color)] group-hover:text-[var(--main-color)] transition-colors">ニュース記事のタイトルがここに表示されます。</h4></article></a>
          </div>
        </div>
      </section>

      <section id="blog" class="py-24 px-6">
        <div class="max-w-6xl mx-auto">
          <div class="flex justify-between items-end mb-10 md:mb-14">
            <h3 class="text-[var(--main-color)] text-xs tracking-[0.5em] uppercase font-mono">// Blog Stream</h3>
            <a href="/blog" class="text-[9px] tracking-[0.3em] uppercase text-slate-500 border-b border-slate-700 pb-1 hover:text-[var(--main-color)] transition-colors">View All</a>
          </div>
          <div class="grid md:grid-cols-2 gap-8">
            <a href="/blog/blog-page" class="group block"><article class="border border-slate-800 bg-black/40 hover:border-[var(--main-color)]/30 transition-colors overflow-hidden"><div class="h-40 bg-slate-900 overflow-hidden relative"><img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"></div><div class="p-6"><p class="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-mono mb-3">2026.03.01</p><h4 class="text-xl font-bold text-[var(--text-color)] group-hover:text-[var(--main-color)] transition-colors mb-3">ブログ記事は公開投稿から自動生成されます。</h4><p class="text-xs text-slate-500 leading-relaxed">記事の抜粋がここに表示されます。</p></div></article></a>
            <a href="/blog/blog-page" class="group block"><article class="border border-slate-800 bg-black/40 hover:border-[var(--main-color)]/30 transition-colors overflow-hidden"><div class="h-40 bg-slate-900 overflow-hidden relative"><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"></div><div class="p-6"><p class="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-mono mb-3">2026.02.15</p><h4 class="text-xl font-bold text-[var(--text-color)] group-hover:text-[var(--main-color)] transition-colors mb-3">ブログ記事のタイトルがここに表示されます。</h4><p class="text-xs text-slate-500 leading-relaxed">記事の抜粋がここに表示されます。</p></div></article></a>
          </div>
        </div>
      </section>

      <section id="company" class="py-24 px-6 border-t border-slate-800/50">
        <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-[11px] tracking-widest">
          <div class="space-y-6">
            <p class="text-slate-600 uppercase">// Location_Data</p>
            <div class="p-6 bg-slate-900/50 border-r-2 border-red-500/50">
               <p class="text-white">SHIBUYA_QUARTER_X</p>
               <p class="text-slate-500 mt-2 italic">Latitude: 35.6580° N, Longitude: 139.7016° E</p>
            </div>
          </div>
          <div class="space-y-6">
            <p class="text-slate-600 uppercase">// Contact_Channel</p>
            <div class="p-6 bg-slate-900/50 border-r-2 border-[var(--main-color)]/50">
               <p class="text-white">ENCRYPTED_LINE: 03-XXXX-XXXX</p>
               <p class="text-slate-500 mt-2 italic">Signal_Strength: Optimal</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-16 border-t border-slate-900 bg-black text-center">
      <div class="mb-4 text-[var(--main-color)] opacity-50 text-[10px] animate-pulse">■ CONNECTION_ACTIVE</div>
      <p class="text-[9px] text-slate-600 tracking-[0.4em] uppercase">
        TERMINAL_END. (C) 2026 DEV.IO - ALL SYSTEMS OPERATIONAL
      </p>
    </footer>
  </div>
</div>`
};
