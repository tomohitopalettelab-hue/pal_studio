import type { Template } from './types';

export const popTemplate: Template = {
  id: 'template-pop',
  name: 'Pop: 元気 & 親しみ',
  tags: ['pop', 'kids', 'event', 'colorful'],
  description: '明るい色使いと丸みのある要素。大胆な画像使いと遊び心のあるレイアウト。',
  html: `<div class="template-root" style="--main-color: #ec4899; --sub-color: #3b82f6; --accent-color: #fef08a; --text-color: #334155; --bg-color: #fffaf0;">
  <div class="min-h-screen font-sans text-[var(--text-color)] bg-[var(--bg-color)] relative overflow-hidden selection:bg-[var(--main-color)] selection:text-white" style="background-image: radial-gradient(var(--sub-color) 1px, transparent 1px); background-size: 40px 40px; background-attachment: fixed; background-color: var(--bg-color); opacity: 1;">
    
    <header class="p-6 sticky top-0 z-[100]">
      <div class="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div class="bg-white px-6 py-3 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-6">
          <div class="font-black text-[var(--main-color)] text-2xl tracking-tighter uppercase leading-none">Pop! <span class="text-[var(--sub-color)]">Shop</span></div>
          <nav data-sync="site-pages" class="hidden md:flex gap-6 items-center">
            <a href="#concept" class="text-xs font-black uppercase hover:text-[var(--main-color)] transition-colors tracking-widest">About</a>
            <a href="#features" class="text-xs font-black uppercase hover:text-[var(--main-color)] transition-colors tracking-widest">Style</a>
            <a href="#service" class="text-xs font-black uppercase hover:text-[var(--main-color)] transition-colors tracking-widest">Menu</a>
            <a href="#works" class="text-xs font-black uppercase hover:text-[var(--main-color)] transition-colors tracking-widest">Gallery</a>
          </nav>
        </div>
        <a href="#company" class="bg-[var(--main-color)] text-white px-6 py-3 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs font-black uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">Contact</a>
      </div>
    </header>

    <main>
      <section id="top" class="relative py-20 md:py-32 px-6 flex flex-col items-center overflow-hidden">
        <div class="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div class="text-center lg:text-left order-2 lg:order-1">
            <div class="inline-block px-6 py-2 bg-[var(--accent-color)] border-[3px] border-black rounded-full text-sm font-black mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-3">
              HAPPINESS FOR ALL! 🌈
            </div>
            <h2 class="text-6xl md:text-[110px] font-black leading-[0.9] mb-12 tracking-tighter">
              <span class="inline-block transform -rotate-2 text-[var(--main-color)] drop-shadow-[5px_5px_0px_#000]">ワクワクを</span><br/>
              <span class="inline-block transform rotate-1 text-white drop-shadow-[5px_5px_0px_#000] stroke-black" style="-webkit-text-stroke: 3px black;">届けよう！</span>
            </h2>
            <p class="text-xl md:text-2xl font-black mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0">
              毎日がもっと楽しくなる、<br/>カラフルな魔法をあなたに。
            </p>
            <div class="flex flex-wrap justify-center lg:justify-start gap-4">
               <div class="px-8 py-4 bg-[var(--sub-color)] border-[3px] border-black rounded-2xl shadow-[6px_6px_0px_0px_#000] text-white font-black animate-bounce delay-150">JOIN US!</div>
            </div>
          </div>
          
          <div class="relative order-1 lg:order-2">
            <div class="relative z-20 w-full aspect-square md:aspect-[4/5] bg-white border-[4px] border-black rounded-[3rem] overflow-hidden shadow-[20px_20px_0px_0px_var(--main-color)] -rotate-2">
              <img src="https://images.unsplash.com/photo-1530633762170-1f4df7202679?auto=format&fit=crop&q=80&w=1000" class="w-full h-full object-cover grayscale-0 group-hover:scale-110 transition-transform duration-700" alt="Pop Hero">
            </div>
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-[var(--accent-color)] rounded-full border-[4px] border-black z-10 animate-pulse"></div>
            <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-[var(--sub-color)] rounded-[2rem] border-[4px] border-black z-30 rotate-12 flex items-center justify-center font-black text-white text-2xl shadow-[8px_8px_0px_0px_#000]">Fun!</div>
          </div>
        </div>
      </section>

      <section id="concept" class="py-24 px-6">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div class="md:w-1/2 grid grid-cols-2 gap-4">
            <div class="aspect-square rounded-[2rem] border-[3px] border-black shadow-[8px_8px_0px_0px_var(--sub-color)] overflow-hidden rotate-2">
              <img src="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover">
            </div>
            <div class="aspect-square rounded-[2rem] border-[3px] border-black shadow-[8px_8px_0px_0px_var(--main-color)] overflow-hidden -rotate-3 mt-12">
              <img src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover">
            </div>
          </div>
          <div class="md:w-1/2 relative">
            <div class="absolute -top-12 -right-8 bg-[var(--accent-color)] p-4 rounded-2xl border-[3px] border-black rotate-12 font-black shadow-[6px_6px_0px_0px_#000]">HELLO! 👋</div>
            <div class="bg-white p-10 md:p-16 rounded-[4rem] border-[4px] border-black shadow-[12px_12px_0px_0px_var(--sub-color)]">
              <span class="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--main-color)] mb-4 block">/ Our Mind</span>
              <h3 class="text-4xl md:text-5xl font-black mb-8 leading-tight">毎日に、<br/><span class="text-[var(--main-color)] underline decoration-black underline-offset-8">ハッピーな色</span>を。</h3>
              <p class="text-lg md:text-xl font-black leading-relaxed text-slate-500">
                私たちは、遊び心を忘れないデザインで、あなたの日常をカラフルに塗り替えます。退屈な時間を「最高の思い出」に変える。それが私たちのミッションです！
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="py-24 px-6 bg-[var(--accent-color)] border-y-[6px] border-black">
        <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div class="group bg-white p-10 rounded-[3rem] border-[4px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all">
            <div class="w-20 h-20 bg-[var(--main-color)] rounded-2xl border-[3px] border-black flex items-center justify-center text-4xl mb-8 -rotate-6 shadow-[4px_4px_0px_0px_#000]">🎨</div>
            <h4 class="text-2xl font-black mb-4 uppercase tracking-tighter">カラフル・パワー</h4>
            <p class="font-black text-slate-500 leading-relaxed text-sm">1,000色以上のパレットから、あなただけの「好き」を爆発させます。</p>
          </div>
          <div class="group bg-white p-10 rounded-[3rem] border-[4px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all">
            <div class="w-20 h-20 bg-[var(--sub-color)] rounded-2xl border-[3px] border-black flex items-center justify-center text-4xl mb-8 rotate-3 shadow-[4px_4px_0px_0px_#000]">🚀</div>
            <h4 class="text-2xl font-black mb-4 uppercase tracking-tighter">爆速デリバリー</h4>
            <p class="font-black text-slate-500 leading-relaxed text-sm">ワクワクは冷めないうちに！驚きのスピードでアイデアをカタチにします。</p>
          </div>
          <div class="group bg-white p-10 rounded-[3rem] border-[4px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all">
            <div class="w-20 h-20 bg-green-400 rounded-2xl border-[3px] border-black flex items-center justify-center text-4xl mb-8 -rotate-2 shadow-[4px_4px_0px_0px_#000]">🤝</div>
            <h4 class="text-2xl font-black mb-4 uppercase tracking-tighter">超フレンドリー</h4>
            <p class="font-black text-slate-500 leading-relaxed text-sm">親友のように。あなたの想いに全力で寄り添い、共に笑うチームです！</p>
          </div>
        </div>
      </section>

      <section id="service" class="py-32 px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-20">
            <h3 class="text-6xl md:text-8xl font-black uppercase italic tracking-tighter drop-shadow-[5px_5px_0px_var(--main-color)]">What We Do</h3>
            <p class="mt-6 font-black text-xl uppercase tracking-widest opacity-30">Our Awesome Menu</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="group relative bg-white rounded-[3rem] border-[4px] border-black overflow-hidden shadow-[12px_12px_0px_0px_var(--main-color)]">
              <div class="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              </div>
              <div class="p-10">
                <h4 class="text-3xl font-black mb-4 underline decoration-[var(--main-color)] decoration-4 underline-offset-4">イベント企画</h4>
                <p class="font-black text-slate-500 leading-relaxed">度肝を抜くサプライズから、心温まるパーティーまで。特別な日を最高の笑顔でプロデュース！</p>
              </div>
            </div>
            <div class="group relative bg-white rounded-[3rem] border-[4px] border-black overflow-hidden shadow-[12px_12px_0px_0px_var(--sub-color)]">
              <div class="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              </div>
              <div class="p-10">
                <h4 class="text-3xl font-black mb-4 text-[var(--sub-color)] underline decoration-black decoration-4 underline-offset-4">デザイン制作</h4>
                <p class="font-black text-slate-500 leading-relaxed">ロゴ、WEB、グッズまで。見た瞬間に「最高！」と叫びたくなるデザインを作ります。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="works" class="py-24 px-6 bg-[var(--main-color)] border-y-[6px] border-black overflow-hidden">
        <div class="max-w-[1400px] mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div class="aspect-square bg-white border-[4px] border-black rounded-[2.5rem] shadow-[8px_8px_0px_0px_#000] rotate-2 overflow-hidden hover:rotate-0 transition-transform">
               <img src="https://images.unsplash.com/photo-1525183334956-227068545934?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover">
            </div>
            <div class="aspect-square bg-white border-[4px] border-black rounded-[2.5rem] shadow-[8px_8px_0px_0px_#000] -rotate-3 overflow-hidden hover:rotate-0 transition-transform">
               <img src="https://images.unsplash.com/photo-1567113463300-1025f5d37a7d?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover">
            </div>
            <div class="aspect-square bg-white border-[4px] border-black rounded-[2.5rem] shadow-[8px_8px_0px_0px_#000] rotate-6 overflow-hidden hover:rotate-0 transition-transform">
               <img src="https://images.unsplash.com/photo-1560343060-c140a58e9944?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover">
            </div>
            <div class="aspect-square bg-white border-[4px] border-black rounded-[2.5rem] shadow-[8px_8px_0px_0px_#000] -rotate-2 overflow-hidden hover:rotate-0 transition-transform">
               <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover">
            </div>
          </div>
        </div>
      </section>

      <section id="news" class="py-32 px-6">
        <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <div class="flex items-center justify-between mb-10">
              <div class="bg-black text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_var(--accent-color)]">Latest News</div>
              <a href="/news" class="font-black text-xs uppercase underline decoration-2 underline-offset-4">See all</a>
            </div>
            <div class="space-y-6">
              <a href="/news/news-page" class="group block p-8 bg-white border-[3px] border-black rounded-[2rem] shadow-[8px_8px_0px_0px_var(--sub-color)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <p class="text-[10px] font-black text-slate-400 mb-2 uppercase">2026.03.14</p>
                <h4 class="text-xl font-black group-hover:text-[var(--main-color)] transition-colors">春のワクワク！ポップアップショップ開催決定！🌸</h4>
              </a>
              <a href="/news/news-page" class="group block p-8 bg-white border-[3px] border-black rounded-[2rem] shadow-[8px_8px_0px_0px_var(--accent-color)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <p class="text-[10px] font-black text-slate-400 mb-2 uppercase">2026.02.20</p>
                <h4 class="text-xl font-black group-hover:text-[var(--main-color)] transition-colors">新しいデザインパレットに「ネオン・キャンディ」が登場！</h4>
              </a>
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between mb-10">
              <div class="bg-[var(--main-color)] text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_#000]">Insights</div>
              <a href="/blog" class="font-black text-xs uppercase underline decoration-2 underline-offset-4">Read blog</a>
            </div>
            <div class="space-y-6">
              <a href="/blog/blog-page" class="group block p-8 bg-white border-[3px] border-black rounded-[2rem] shadow-[8px_8px_0px_0px_var(--main-color)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <h4 class="text-xl font-black mb-4 group-hover:text-[var(--sub-color)] transition-colors underline decoration-[var(--accent-color)] decoration-4 underline-offset-2">色は世界を変える。私たちのカラー戦略のヒミツを公開！</h4>
                <p class="text-sm font-black text-slate-400 leading-relaxed">なぜその色を選ぶのか？色の持つ心理的効果と、私たちの制作プロセスの裏側をお話しします。</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="company" class="py-32 px-6 bg-white border-t-[6px] border-black">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div class="md:w-1/2">
            <h3 class="text-6xl font-black tracking-tighter mb-8 uppercase italic leading-none">Come & Visit <br/><span class="text-[var(--main-color)]">Our Factory!</span></h3>
            <p class="font-black text-xl mb-12 text-slate-500">
              毎日ワクワクが生まれる場所。<br/>いつでも遊びに来てください！
            </p>
            <div class="w-full aspect-video bg-slate-100 border-[4px] border-black rounded-[3rem] overflow-hidden shadow-[12px_12px_0px_0px_var(--accent-color)]">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover">
            </div>
          </div>
          
          <div class="md:w-1/2 w-full">
            <div class="relative">
              <div class="absolute inset-0 bg-black rounded-[3rem] translate-x-4 translate-y-4"></div>
              <div class="relative bg-white p-12 md:p-16 rounded-[3.5rem] border-[4px] border-black">
                <h4 class="text-3xl font-black mb-10 border-b-[6px] border-[var(--accent-color)] inline-block">Shop Info</h4>
                <div class="space-y-8 font-black text-xl">
                  <div class="flex flex-col md:flex-row md:justify-between border-b-[3px] border-black border-dashed pb-6">
                    <span class="text-slate-400 text-xs uppercase mb-2 md:mb-0">Shop Name</span>
                    <span class="text-[var(--main-color)]">POP! 制作所 / FACTORY</span>
                  </div>
                  <div class="flex flex-col md:flex-row md:justify-between border-b-[3px] border-black border-dashed pb-6">
                    <span class="text-slate-400 text-xs uppercase mb-2 md:mb-0">Location</span>
                    <span class="text-[var(--sub-color)] text-right">ワクワクおもちゃの国<br/>ポップ・ストリート 123-4</span>
                  </div>
                  <div class="flex flex-col md:flex-row md:justify-between border-b-[3px] border-black border-dashed pb-6">
                    <span class="text-slate-400 text-xs uppercase mb-2 md:mb-0">Call Us</span>
                    <span>03-POP-JOY-2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-24 text-center bg-white border-t-[6px] border-black overflow-hidden relative">
      <div class="max-w-6xl mx-auto px-6 relative z-10">
        <div class="font-black text-[var(--main-color)] text-6xl md:text-8xl mb-8 tracking-tighter uppercase italic">POP! SHOP</div>
        <p class="font-black text-xl tracking-widest text-slate-400 uppercase italic mb-12">Keep Playing, Keep Smiling!</p>
        <div class="flex justify-center gap-10 mb-16">
           <a href="#" class="w-14 h-14 bg-white border-[3px] border-black rounded-2xl flex items-center justify-center text-2xl shadow-[4px_4px_0px_0px_#000] hover:translate-y-1 hover:shadow-none transition-all">📸</a>
           <a href="#" class="w-14 h-14 bg-white border-[3px] border-black rounded-2xl flex items-center justify-center text-2xl shadow-[4px_4px_0px_0px_#000] hover:translate-y-1 hover:shadow-none transition-all">🐦</a>
           <a href="#" class="w-14 h-14 bg-white border-[3px] border-black rounded-2xl flex items-center justify-center text-2xl shadow-[4px_4px_0px_0px_#000] hover:translate-y-1 hover:shadow-none transition-all">💬</a>
        </div>
        <p class="font-black text-xs text-slate-300 tracking-[0.4em] uppercase">&copy; 2026 POP! FACTORY ALL RIGHTS RESERVED.</p>
      </div>
      <div class="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-[var(--accent-color)] rounded-full opacity-50 z-0"></div>
    </footer>
  </div>
</div>`
};