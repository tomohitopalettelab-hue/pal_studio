import type { Template } from './types';

export const naturalTemplate: Template = {
  id: 'template-natural',
  name: 'Natural: オーガニック',
  tags: ['natural', 'cafe', 'food', 'green'],
  description: 'アースカラーと柔らかい雰囲気で、自然や健康志向をアピール。',
  html: `<div class="template-root" style="--main-color: #8B9D8B; --sub-color: #a7b4a7; --accent-color: #4A5D4A; --bg-color: #F7F5F0; --text-color: #5A5A5A; --white: #ffffff;">
  <div class="min-h-screen font-sans text-[var(--text-color)] bg-[var(--bg-color)]">
    
    <header class="p-8 flex justify-between items-center max-w-7xl mx-auto">
      <div class="font-serif text-xl tracking-widest text-[var(--accent-color)] font-bold">Organic <span class="font-light">Life</span></div>
      <nav data-sync="site-pages" class="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] font-medium">
        <a href="#concept" class="hover:text-[var(--main-color)] transition-colors">Story</a>
        <a href="#features" class="hover:text-[var(--main-color)] transition-colors">Quality</a>
        <a href="#service" class="hover:text-[var(--main-color)] transition-colors">Menu</a>
      </nav>
    </header>

    <main>
      <section id="top" class="py-12 px-6 text-center">
        <div class="max-w-4xl mx-auto">
          <div class="relative mb-16 px-4">
            <div class="rounded-t-[200px] rounded-b-[20px] overflow-hidden shadow-2xl shadow-[var(--main-color)]/10 aspect-[4/5] md:aspect-[16/9] max-h-[500px]">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200" alt="オーガニックなライフスタイルのイメージ" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2000ms]">
            </div>
            <div class="absolute -bottom-6 -right-2 md:right-10 bg-[var(--main-color)] text-white p-8 rounded-full w-24 h-24 flex items-center justify-center text-[10px] leading-tight tracking-widest font-bold rotate-12">
              NATURAL<br/>FIRST
            </div>
          </div>
          <h2 class="font-serif text-4xl md:text-5xl text-[var(--accent-color)] leading-snug mb-8 tracking-tight">
            自然の恵みを、<br class="md:hidden"/>そのままに。
          </h2>
          <p class="text-sm md:text-base tracking-[0.1em] leading-loose max-w-xl mx-auto opacity-80">
            心と体に優しい、オーガニックな暮らし。<br/>
            日々の忙しさを忘れ、自分を慈しむ時間をご提案します。
          </p>
        </div>
      </section>

      <section id="concept" class="py-24 px-6">
        <div class="max-w-3xl mx-auto bg-white/60 p-12 md:p-20 rounded-[40px] border border-white text-center shadow-sm">
          <span class="text-[var(--main-color)] text-xs tracking-[0.4em] uppercase font-bold mb-6 block">Concept</span>
          <h3 class="font-serif text-2xl md:text-3xl text-[var(--accent-color)] mb-10 leading-relaxed">地球と調和する、<br/>素材本来の力。</h3>
          <p class="leading-[2.2] text-sm md:text-base">
            私たちが大切にしているのは、素材本来の力です。<br/>
            余計なものを削ぎ落とし、地球のサイクルと<br/>
            一歩ずつ歩幅を合わせるようなライフスタイルを。<br/>
            あなたの毎日に、小さな「心地よさ」を届けます。
          </p>
          <div class="mt-12 flex justify-center gap-2">
            <span class="w-1.5 h-1.5 bg-[var(--sub-color)] rounded-full"></span>
            <span class="w-1.5 h-1.5 bg-[var(--sub-color)] rounded-full opacity-40"></span>
            <span class="w-1.5 h-1.5 bg-[var(--sub-color)] rounded-full opacity-20"></span>
          </div>
        </div>
      </section>

      <section id="features" class="py-24 px-6 max-w-6xl mx-auto">
        <div class="grid md:grid-cols-3 gap-12 md:gap-8">
          <div class="text-center group">
            <div class="w-16 h-16 bg-[var(--main-color)]/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-[var(--main-color)]/20 transition-colors">
              <span class="text-2xl italic font-serif text-[var(--accent-color)]">01</span>
            </div>
            <h4 class="font-serif text-xl mb-4 text-[var(--accent-color)]">厳選素材</h4>
            <p class="text-xs leading-[2.2] px-4 opacity-80">独自の厳しい基準で選ばれた、国内の有機契約農家直送の素材のみを使用しています。</p>
          </div>
          <div class="text-center group">
            <div class="w-16 h-16 bg-[var(--main-color)]/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-[var(--main-color)]/20 transition-colors">
              <span class="text-2xl italic font-serif text-[var(--accent-color)]">02</span>
            </div>
            <h4 class="font-serif text-xl mb-4 text-[var(--accent-color)]">環境配慮</h4>
            <p class="text-xs leading-[2.2] px-4 opacity-80">生分解性のパッケージや再生紙を使用し、地球への負担を最小限に抑えています。</p>
          </div>
          <div class="text-center group">
            <div class="w-16 h-16 bg-[var(--main-color)]/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-[var(--main-color)]/20 transition-colors">
              <span class="text-2xl italic font-serif text-[var(--accent-color)]">03</span>
            </div>
            <h4 class="font-serif text-xl mb-4 text-[var(--accent-color)]">手仕事</h4>
            <p class="text-xs leading-[2.2] px-4 opacity-80">効率よりも質を。一つひとつ丁寧に、職人が想いを込めて作り上げています。</p>
          </div>
        </div>
      </section>

      <section id="service" class="py-24 px-6 bg-[var(--main-color)]/5">
        <div class="max-w-2xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="font-serif text-3xl text-[var(--accent-color)]">Main Menu</h2>
            <p class="text-[10px] tracking-[0.3em] uppercase mt-2 opacity-50">Seasonal Selection</p>
          </div>
          <div class="bg-white p-8 md:p-12 rounded-[30px] shadow-sm">
            <ul class="space-y-8">
              <li class="flex justify-between items-baseline border-b border-dotted border-gray-200 pb-4">
                <div>
                  <span class="font-bold text-[var(--accent-color)] block">季節の野菜セット</span>
                  <span class="text-[10px] opacity-60">旬の有機野菜 8〜10種</span>
                </div>
                <span class="font-serif text-lg italic text-[var(--main-color)]">¥3,500</span>
              </li>
              <li class="flex justify-between items-baseline border-b border-dotted border-gray-200 pb-4">
                <div>
                  <span class="font-bold text-[var(--accent-color)] block">オーガニックティー</span>
                  <span class="text-[10px] opacity-60">手摘み・天日干し 10パック</span>
                </div>
                <span class="font-serif text-lg italic text-[var(--main-color)]">¥1,200</span>
              </li>
              <li class="flex justify-between items-baseline border-b border-dotted border-gray-200 pb-4">
                <div>
                  <span class="font-bold text-[var(--accent-color)] block">自家製ジャム</span>
                  <span class="text-[10px] opacity-60">無添加・砂糖不使用 200g</span>
                </div>
                <span class="font-serif text-lg italic text-[var(--main-color)]">¥950</span>
              </li>
            </ul>
            <div class="mt-12 text-center">
              <button class="px-10 py-4 bg-[var(--main-color)] text-white text-xs font-bold tracking-[0.2em] rounded-full hover:bg-[var(--accent-color)] transition-all shadow-lg shadow-[var(--main-color)]/20 uppercase">View All Menu</button>
            </div>
          </div>
        </div>
      </section>

      <section id="works" class="py-24 px-6 max-w-6xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div class="aspect-square bg-white rounded-2xl overflow-hidden border-8 border-white shadow-sm rotate-1">
             <div class="w-full h-full bg-slate-200"></div>
          </div>
          <div class="aspect-square bg-white rounded-2xl overflow-hidden border-8 border-white shadow-sm -rotate-2 mt-4 md:mt-0">
             <div class="w-full h-full bg-slate-100"></div>
          </div>
          <div class="aspect-square bg-white rounded-2xl overflow-hidden border-8 border-white shadow-sm rotate-3 hidden md:block">
             <div class="w-full h-full bg-slate-200"></div>
          </div>
        </div>
      </section>

      <section id="company" class="py-24 px-6 border-t border-[var(--main-color)]/10">
        <div class="max-w-3xl mx-auto">
          <div class="flex flex-col md:flex-row justify-between items-start gap-12">
            <div class="max-w-xs">
              <h3 class="font-serif text-2xl text-[var(--accent-color)] mb-4">Store Info</h3>
              <p class="text-sm leading-relaxed opacity-70">都会の喧騒から少し離れた、静かな路地裏に私たちの小さな拠点はあります。お散歩のついでに、ぜひお立ち寄りください。</p>
            </div>
            <div class="w-full md:w-auto">
              <table class="w-full text-sm">
                <tr class="border-b border-gray-100"><th class="py-4 pr-12 text-left font-bold text-[var(--accent-color)]">店名</th><td class="py-4">Organic Life</td></tr>
                <tr class="border-b border-gray-100"><th class="py-4 pr-12 text-left font-bold text-[var(--accent-color)]">住所</th><td class="py-4">東京都自然区緑町 1-2-3</td></tr>
                <tr class="border-b border-gray-100"><th class="py-4 pr-12 text-left font-bold text-[var(--accent-color)]">営業時間</th><td class="py-4">11:00 - 18:00 (Tue - Sun)</td></tr>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-12 bg-white text-center">
      <div class="font-serif text-lg tracking-widest text-[var(--accent-color)] opacity-50 mb-4">Organic Life</div>
      <p class="text-[10px] tracking-[0.1em] opacity-40">&copy; 2026 ORGANIC LIFE. PRESERVING NATURE'S GIFT.</p>
    </footer>
  </div>
</div>`
};
