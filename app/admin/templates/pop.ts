import type { Template } from './types';

export const popTemplate: Template = {
  id: 'template-pop',
  name: 'Pop: 元気 & 親しみ',
  tags: ['pop', 'kids', 'event', 'colorful'],
  description: '明るい色使いと丸みのある要素。全セクション対応。',
  html: `<div class="template-root" style="--main-color: #ec4899; --sub-color: #3b82f6; --accent-color: #fef08a; --text-color: #334155; --bg-color: #fffaf0;">
  <div class="min-h-screen font-sans text-[var(--text-color)] bg-[var(--bg-color)] relative overflow-hidden" style="background-image: radial-gradient(var(--accent-color) 1px, transparent 1px); background-size: 30px 30px;">
    
    <header class="p-6 flex justify-center sticky top-0 z-50">
      <div class="bg-white px-8 py-3 rounded-2xl border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center gap-6">
        <div class="font-black text-[var(--main-color)] text-2xl tracking-tighter uppercase">Pop! <span class="text-[var(--sub-color)]">Shop</span></div>
        <nav data-sync="site-pages" class="hidden md:flex gap-4">
          <a href="#concept" class="text-xs font-black uppercase hover:text-[var(--main-color)] transition-colors">About</a>
          <a href="#features" class="text-xs font-black uppercase hover:text-[var(--main-color)] transition-colors">Style</a>
          <a href="#service" class="text-xs font-black uppercase hover:text-[var(--main-color)] transition-colors">Menu</a>
        </nav>
      </div>
    </header>

    <main>
      <section id="top" class="relative py-24 px-4 text-center">
        <div class="max-w-4xl mx-auto">
          <div class="inline-block px-6 py-2 bg-[var(--accent-color)] border-[3px] border-black rounded-full text-sm font-black mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-3">
            HAPPINESS FOR ALL!
          </div>
          <h2 class="text-7xl md:text-[100px] font-black leading-none mb-12">
            <span class="inline-block transform -rotate-2 text-[var(--main-color)] drop-shadow-[4px_4px_0px_#000]">ワクワクを</span><br/>
            <span class="inline-block transform rotate-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[var(--main-color)] drop-shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">届けよう！</span>
          </h2>
          
          <div class="flex justify-center items-center gap-6 md:gap-10">
            <div class="w-32 h-32 bg-[var(--main-color)] border-[4px] border-black rounded-full flex items-center justify-center text-white font-black text-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-bounce italic">Fun!</div>
            <div class="w-24 h-24 bg-[var(--sub-color)] border-[4px] border-black rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-bounce delay-150 rotate-12">Joy!</div>
            <div class="hidden md:flex w-28 h-28 bg-orange-400 border-[4px] border-black rounded-[2rem] items-center justify-center text-white font-black text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-bounce delay-300 -rotate-12">Wow!</div>
          </div>
        </div>
      </section>

      <section id="concept" class="py-20 px-6 text-center">
        <div class="relative bg-white p-12 rounded-[3.5rem] border-[4px] border-black shadow-[12px_12px_0px_0px_var(--accent-color)] max-w-2xl mx-auto">
          <div class="absolute -top-6 -left-6 bg-[var(--sub-color)] text-white font-black px-6 py-2 rounded-xl border-[3px] border-black -rotate-6">Our Mind</div>
          <h3 class="text-4xl font-black mb-8 text-[var(--main-color)] tracking-tight">毎日に、ハッピーな色を。</h3>
          <p class="text-xl font-bold leading-relaxed">私たちは、遊び心を忘れないデザインで、あなたの日常をカラフルに塗り替えます。退屈な時間を「最高の思い出」に変える。それが私たちのミッションです！</p>
        </div>
      </section>

      <section id="features" class="py-20 px-6">
        <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div class="group relative bg-white p-8 rounded-[2rem] border-[3px] border-black shadow-[8px_8px_0px_0px_var(--main-color)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <span class="text-6xl mb-6 block transform group-hover:scale-125 transition-transform duration-300">🎨</span>
            <h4 class="text-2xl font-black mb-4">カラフル・パワー</h4>
            <p class="font-bold text-sm text-[var(--text-color)]/70">1,000色以上のパレットから、あなただけの「好き」を見つけ出します。</p>
          </div>
          <div class="group relative bg-white p-8 rounded-[2rem] border-[3px] border-black shadow-[8px_8px_0px_0px_var(--accent-color)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <span class="text-6xl mb-6 block transform group-hover:rotate-12 transition-transform duration-300">🚀</span>
            <h4 class="text-2xl font-black mb-4">爆速デリバリー</h4>
            <p class="font-bold text-sm text-[var(--text-color)]/70">ワクワクは冷めないうちに！驚きのスピードでアイデアをカタチにします。</p>
          </div>
          <div class="group relative bg-white p-8 rounded-[2rem] border-[3px] border-black shadow-[8px_8px_0px_0px_var(--sub-color)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <span class="text-6xl mb-6 block transform group-hover:-translate-y-2 transition-transform duration-300">🤝</span>
            <h4 class="text-2xl font-black mb-4">超フレンドリー</h4>
            <p class="font-bold text-sm text-[var(--text-color)]/70">まるで親友のように。あなたの想いに全力で寄り添うチームです！</p>
          </div>
        </div>
      </section>

      <section id="service" class="py-24 px-6 bg-[var(--main-color)] rounded-t-[80px] border-t-[6px] border-black">
        <div class="max-w-4xl mx-auto">
          <h3 class="text-5xl font-black text-white text-center mb-16 italic drop-shadow-[4px_4px_0px_#000]">What We Do</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-[var(--accent-color)] p-10 rounded-[2.5rem] border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-0 transition-transform cursor-default">
              <h4 class="text-3xl font-black mb-4">イベント企画</h4>
              <p class="font-bold opacity-80 leading-relaxed">度肝を抜くようなサプライズから、心温まるパーティーまで。特別な日をプロデュース！</p>
            </div>
            <div class="bg-white p-10 rounded-[2.5rem] border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1 hover:rotate-0 transition-transform cursor-default">
              <h4 class="text-3xl font-black mb-4 text-[var(--sub-color)]">デザイン制作</h4>
              <p class="font-bold opacity-80 leading-relaxed">ロゴ、WEB、グッズまで。見た瞬間に「最高！」と言いたくなるデザインを作ります。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="works" class="py-32 px-6">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="aspect-square bg-white border-[3px] border-black rounded-[2rem] shadow-[4px_4px_0px_0px_#000] rotate-2"></div>
            <div class="aspect-square bg-[var(--sub-color)] border-[3px] border-black rounded-[2rem] shadow-[4px_4px_0px_0px_#000] -rotate-3"></div>
            <div class="aspect-square bg-orange-400 border-[3px] border-black rounded-[2rem] shadow-[4px_4px_0px_0px_#000] rotate-6"></div>
            <div class="aspect-square bg-[var(--main-color)] border-[3px] border-black rounded-[2rem] shadow-[4px_4px_0px_0px_#000] -rotate-2"></div>
          </div>
        </div>
      </section>

      <section id="company" class="py-24 px-6 text-center">
        <div class="inline-block relative">
          <div class="absolute inset-0 bg-black rounded-3xl translate-x-3 translate-y-3"></div>
          <div class="relative bg-white p-12 rounded-3xl border-[3px] border-black text-left max-w-md">
            <h3 class="text-2xl font-black mb-6 border-b-[4px] border-[var(--accent-color)] inline-block">Shop Info</h3>
            <div class="space-y-4 font-black text-lg">
              <p class="flex justify-between gap-10"><span>なまえ</span><span class="text-[var(--main-color)]">POP!制作所</span></p>
              <p class="flex justify-between gap-10"><span>ばしょ</span><span class="text-[var(--sub-color)] text-right">おもちゃの国<br/>1-2-3-4</span></p>
              <p class="flex justify-between gap-10"><span>でんわ</span><span>03-POP-JOY</span></p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-20 text-center bg-white border-t-[6px] border-black">
      <div class="font-black text-[var(--main-color)] text-4xl mb-4 tracking-tighter">POP! SHOP</div>
      <p class="font-black text-sm tracking-widest text-slate-400 uppercase italic">Keep Playing, Keep Smiling!</p>
      <p class="mt-8 font-black text-xs text-slate-300 tracking-widest">&copy; 2026 POP! FACTORY ALL RIGHTS RESERVED.</p>
    </footer>
  </div>
</div>`
};
