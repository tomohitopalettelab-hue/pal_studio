import type { Template } from './types';

export const modernTemplate: Template = {
  id: 'template-modern',
  name: 'Modern: シンプル & クリーン',
  tags: ['simple', 'clean', 'business', 'startup', 'responsive'],
  description: '汎用性の高いモダンでクリーンなデザイン。スマホ最適化済み。',
  html: `
<div class="template-root" style="--main-color: #0f172a; --main-dark: #111827; --accent-color: #1d4ed8; --text-color: #0f172a; --text-light: #64748b; --bg-color: #ffffff; --section-gap: 14rem; --section-gap-mobile: 6rem;">
  <div class="min-h-screen font-sans text-[var(--text-color)] bg-[var(--bg-color)] selection:bg-[var(--accent-color)] selection:text-white antialiased leading-relaxed">
    
    <div class="fixed inset-0 pointer-events-none z-[999] opacity-[0.015]" style="background-image: url('https://www.transparenttextures.com/patterns/p6.png');"></div>

    <header class="fixed w-full z-[100] transition-all duration-700 bg-[var(--bg-color)]/80 backdrop-blur-xl border-b border-black/[0.03]">
      <input type="checkbox" id="menu-toggle" class="sr-only peer">
      <div class="max-w-[1600px] mx-auto px-6 md:px-10 h-20 md:h-24 flex items-center justify-between">
        <div class="flex items-center gap-4 group cursor-pointer">
          <div class="relative w-8 h-8 md:w-10 md:h-10 bg-[var(--main-color)] flex items-center justify-center overflow-hidden">
            <img data-pid="img-0" src="https://pal-db.onrender.com/media/A0001/1772940985126-9smayw.jpg" alt="ロゴ" class="w-full h-full object-contain p-1" style="cursor: pointer; transition: 0.2s; outline: 2px solid transparent;" onmouseover="this.style.outline='4px solid #4f46e5'; this.style.zIndex='100';" onmouseout="this.style.outline='2px solid transparent'">
          </div>
          <h1 class="text-lg md:text-xl font-black tracking-[0.2em] uppercase">すみどころ<span class="text-[var(--accent-color)]">.</span></h1>
        </div>

        <div class="hidden lg:flex items-center gap-6">
          <nav data-sync="site-pages" class="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--text-color)]">
            
            
            
            
            
            
            
            
          <a href="/A0001/pages" class="hover:text-[var(--accent-color)] transition-colors">Top</a><a href="/A0001/news" class="hover:text-[var(--accent-color)] transition-colors">News</a><a href="/A0001/about" class="hover:text-[var(--accent-color)] transition-colors">About</a><a href="/A0001/blog" class="hover:text-[var(--accent-color)] transition-colors">Blog</a><a href="/A0001/contact" class="hover:text-[var(--accent-color)] transition-colors">Contact</a></nav>
          <a data-page-slug="contact" href="/A0001/contact" class="px-8 py-4 bg-[var(--main-color)] text-white text-[9px] hover:bg-[var(--accent-color)] transition-all shadow-xl shadow-black/5">お問い合わせ</a>
        </div>

        <label for="menu-toggle" class="lg:hidden cursor-pointer p-2 z-[110]">
          <div class="w-6 h-5 flex flex-col justify-between">
            <span class="w-full h-[2px] bg-[var(--main-color)] origin-left transition-all duration-300"></span>
            <span class="w-full h-[2px] bg-[var(--main-color)] transition-all duration-300"></span>
            <span class="w-full h-[2px] bg-[var(--main-color)] origin-left transition-all duration-300"></span>
          </div>
        </label>
      </div>
      
      <div class="fixed inset-0 bg-[var(--main-dark)] translate-x-full peer-checked:translate-x-0 transition-transform duration-500 ease-in-out lg:hidden z-[105] flex flex-col items-center justify-center">
        <nav data-sync="site-pages" class="flex flex-col items-center gap-8 text-white text-xs font-bold uppercase tracking-[0.5em]">
          
          
          
          
          
          
          
          
        <a href="/A0001/pages" onclick="document.getElementById('menu-toggle').checked=false">Top</a><a href="/A0001/news" onclick="document.getElementById('menu-toggle').checked=false">News</a><a href="/A0001/about" onclick="document.getElementById('menu-toggle').checked=false">About</a><a href="/A0001/blog" onclick="document.getElementById('menu-toggle').checked=false">Blog</a><a href="/A0001/contact" onclick="document.getElementById('menu-toggle').checked=false">Contact</a></nav>
        <a data-page-slug="contact" href="/A0001/contact" class="mt-6 px-10 py-5 bg-[var(--accent-color)] text-white text-xs font-bold uppercase tracking-[0.5em]" onclick="document.getElementById('menu-toggle').checked=false">お問い合わせ</a>
      </div>
    </header>

    <main>
      <section id="top" class="section-hero relative min-h-screen flex items-center justify-center px-6 pt-32 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img data-pid="img-1" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&amp;fit=crop&amp;q=80&amp;w=2000" alt="オフィス風景" class="w-full h-full object-cover grayscale opacity-30 transform scale-105 animate-slow-zoom" style="cursor: pointer; transition: 0.2s; outline: 2px solid transparent;" onmouseover="this.style.outline='4px solid #4f46e5'; this.style.zIndex='100';" onmouseout="this.style.outline='2px solid transparent'">
          <div class="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-white"></div>
        </div>
        
        <div class="relative z-10 max-w-7xl mx-auto text-center">
          <p class="inline-block mb-6 md:mb-10 text-[8px] md:text-[10px] font-bold tracking-[0.5em] md:tracking-[0.8em] text-[var(--accent-color)] uppercase">Reliable &amp; Affordable</p>
          <h2 class="text-[clamp(2.5rem,15vw,10rem)] font-black tracking-tighter leading-[0.9] mb-10 md:mb-16 uppercase">
            ビジネスを、<br><span class="italic font-light text-[var(--main-color)]" style="font-family: serif;">もっと堅実に。</span>
          </h2>
          <div class="flex flex-col items-center">
            <p class="text-base md:text-2xl text-[var(--text-light)] mb-12 md:mb-16 max-w-2xl font-medium leading-relaxed tracking-tight px-4">
              士業のプロフェッショナルが、お客様の事業を<br class="hidden md:block">確かな知識と誠実な対応でサポートいたします。
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
              <p class="text-[9px] font-bold tracking-[0.6em] uppercase text-[var(--accent-color)] mb-2">News &amp; Updates</p>
              <h3 class="text-4xl md:text-6xl font-black tracking-tighter uppercase">最新情報</h3>
            </div>
            <a href="#" class="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] border-b border-black pb-1 hover:text-[var(--accent-color)] transition-all">ニュース一覧</a>
          </div>
          
          <div class="grid grid-cols-1 divide-y divide-black/5 border-t border-black/5">
            <div class="py-8 md:py-10">
              <p class="text-sm text-slate-400">最新情報は公開投稿から自動生成されます。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="concept" class="py-[var(--section-gap-mobile)] md:py-[var(--section-gap)] px-6 md:px-10">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-12 gap-10 md:gap-24 items-start">
            <div class="lg:col-span-5">
              <span class="text-[9px] font-bold tracking-[0.5em] text-[var(--accent-color)] uppercase mb-6 md:mb-10 block">01 / 私たちの理念</span>
              <h4 class="text-4xl md:text-7xl font-bold leading-[1.1] tracking-tighter">お客様の<br>「安心」をデザインする。</h4>
            </div>
            <div class="lg:col-span-7">
              <p class="text-lg md:text-3xl leading-relaxed md:leading-[1.7] text-[var(--text-color)] font-light italic">
                専門知識と経験に基づき、お客様の複雑な問題を<br class="hidden md:block">シンプルかつ確実に解決へと導きます。法律や手続きの壁を<br class="hidden md:block">取り払い、お客様が本業に専念できる環境を創造します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="py-[var(--section-gap-mobile)] md:py-[var(--section-gap)] px-6 md:px-10 bg-[var(--main-dark)] text-white relative">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div class="py-12 md:p-16">
            <span class="text-[var(--accent-color)] font-mono text-xs mb-6 block tracking-widest opacity-50">/ 01</span>
            <h4 class="text-3xl md:text-4xl font-bold mb-6 italic tracking-tighter">Clear Pricing</h4>
            <p class="text-white/50 leading-relaxed font-light text-sm md:text-base">複雑な料金体系は排除。お客様が安心してサービスをご利用いただけるよう、明朗会計を徹底しています。</p>
          </div>
          <div class="py-12 md:p-16">
            <span class="text-[var(--accent-color)] font-mono text-xs mb-6 block tracking-widest opacity-50">/ 02</span>
            <h4 class="text-3xl md:text-4xl font-bold mb-6 italic tracking-tighter">Expertise</h4>
            <p class="text-white/50 leading-relaxed font-light text-sm md:text-base">長年の経験と深い専門知識を持つプロフェッショナルが、お客様の課題解決に貢献します。</p>
          </div>
          <div class="py-12 md:p-16">
            <span class="text-[var(--accent-color)] font-mono text-xs mb-6 block tracking-widest opacity-50">/ 03</span>
            <h4 class="text-3xl md:text-4xl font-bold mb-6 italic tracking-tighter">Prompt Support</h4>
            <p class="text-white/50 leading-relaxed font-light text-sm md:text-base">お客様の緊急なご要望にも迅速に対応。タイムリーなサポートでビジネスの機会損失を防ぎます。</p>
          </div>
        </div>
      </section>

      <section id="service" class="py-[var(--section-gap-mobile)] md:py-[var(--section-gap)] px-6 md:px-10 bg-[#fdfdfd]">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16 md:mb-32">
            <h3 class="text-4xl md:text-6xl font-bold tracking-tighter mb-4 md:mb-6 uppercase">サービス内容</h3>
            <p class="text-[9px] font-bold tracking-[0.6em] text-[var(--accent-color)] uppercase">専門的な士業サービス</p>
          </div>
          <div class="group bg-white border border-black/[0.05] p-8 md:p-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left transition-all hover:shadow-2xl">
            <div class="mb-8 md:mb-0">
              <span class="text-[8px] font-black uppercase tracking-[0.4em] text-[var(--accent-color)] mb-2 md:mb-4 block">01 / Business Support</span>
              <h4 class="text-2xl md:text-4xl font-bold tracking-tight">顧問契約サービス</h4>
              <p class="text-[var(--text-light)] mt-4 text-sm md:text-lg">継続的なサポートで、お客様の事業運営を強力に支援します。書類作成・申請代行も承ります。</p>
            </div>
            <div class="flex flex-col items-center md:items-end">
              <span class="text-4xl md:text-6xl font-black tracking-tighter italic">月額 ¥30,000<span class="text-xs not-italic text-slate-300 ml-2">JPY+</span></span>
              <button class="mt-8 px-10 py-4 bg-[var(--main-color)] text-white text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-[var(--accent-color)] transition-all">詳細を見る</button>
            </div>
          </div>
        </div>
      </section>

      <section id="works" class="py-[var(--section-gap-mobile)] md:py-[var(--section-gap)] px-6 md:px-10 bg-white">
        <div class="max-w-[1700px] mx-auto">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 border-b border-black/5 pb-8 md:pb-12 gap-6">
            <h3 class="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">実績</h3>
            <p class="text-[var(--text-light)] font-bold tracking-[0.4em] uppercase text-[9px]">実績一覧</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div class="group cursor-pointer">
              <div class="aspect-[4/5] md:aspect-[10/13] bg-[#f0f0f0] overflow-hidden relative mb-6 md:mb-10">
                <img data-pid="img-2" src="https://images.unsplash.com/photo-1563986671842-fd32938885ca?auto=format&amp;fit=crop&amp;q=80&amp;w=800" class="w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-110" alt="契約書" style="cursor: pointer; transition: 0.2s; outline: 2px solid transparent;" onmouseover="this.style.outline='4px solid #4f46e5'; this.style.zIndex='100';" onmouseout="this.style.outline='2px solid transparent'">
              </div>
              <h5 class="text-xl md:text-2xl font-bold tracking-tight mb-1">法人顧問契約</h5>
              <p class="text-[9px] text-[var(--accent-color)] font-bold uppercase tracking-widest">経営サポート / 法律相談</p>
            </div>
            <div class="group cursor-pointer">
              <div class="aspect-[4/5] md:aspect-[10/13] bg-[#f0f0f0] overflow-hidden relative mb-6 md:mb-10">
                <img data-pid="img-3" src="https://images.unsplash.com/photo-1543286386-799ff367a14e?auto=format&amp;fit=crop&amp;q=80&amp;w=800" class="w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-110" alt="書類作成" style="cursor: pointer; transition: 0.2s; outline: 2px solid transparent;" onmouseover="this.style.outline='4px solid #4f46e5'; this.style.zIndex='100';" onmouseout="this.style.outline='2px solid transparent'">
              </div>
              <h5 class="text-xl md:text-2xl font-bold tracking-tight mb-1">会社設立支援</h5>
              <p class="text-[9px] text-[var(--accent-color)] font-bold uppercase tracking-widest">行政手続き / 書類作成</p>
            </div>
            <div class="group cursor-pointer">
              <div class="aspect-[4/5] md:aspect-[10/13] bg-[#f0f0f0] overflow-hidden relative mb-6 md:mb-10">
                <img data-pid="img-4" src="https://images.unsplash.com/photo-1549692520-cb9604130099?auto=format&amp;fit=crop&amp;q=80&amp;w=800" class="w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-110" alt="相談風景" style="cursor: pointer; transition: 0.2s; outline: 2px solid transparent;" onmouseover="this.style.outline='4px solid #4f46e5'; this.style.zIndex='100';" onmouseout="this.style.outline='2px solid transparent'">
              </div>
              <h5 class="text-xl md:text-2xl font-bold tracking-tight mb-1">相続・贈与相談</h5>
              <p class="text-[9px] text-[var(--accent-color)] font-bold uppercase tracking-widest">資産承継 / 法務アドバイス</p>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" class="py-[var(--section-gap-mobile)] md:py-[var(--section-gap)] px-6 md:px-10 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12 md:mb-24">
            <p class="text-[9px] font-bold tracking-[0.8em] uppercase text-[var(--accent-color)] mb-4">Our Perspectives</p>
            <h3 class="text-4xl md:text-6xl font-black tracking-tighter uppercase">ブログ</h3>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div class="py-6">
              <p class="text-sm text-slate-400">ブログ記事は公開投稿から自動生成されます。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="company" class="py-[var(--section-gap-mobile)] md:py-[var(--section-gap)] px-6 md:px-10 bg-[var(--main-dark)] text-white relative">
        <div class="max-w-5xl mx-auto">
          <h3 class="text-[9px] font-bold tracking-[0.8em] uppercase mb-12 md:mb-24 text-white/30 text-center">会社概要</h3>
          <div class="border-y border-white/10 divide-y divide-white/10">
            <div class="grid grid-cols-1 md:grid-cols-4 py-12 md:py-20 px-4 md:px-10 group hover:bg-white/5 transition-all">
              <dt class="text-[8px] font-bold uppercase tracking-[0.4em] text-[var(--accent-color)] mb-4 md:mb-0">会社名</dt>
              <dd class="md:col-span-3 text-2xl md:text-5xl font-bold tracking-tighter">すみどころ</dd>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="py-[var(--section-gap-mobile)] md:py-[var(--section-gap)] px-6 md:px-10">
        <div class="max-w-3xl mx-auto text-center">
            <p class="text-[9px] font-bold tracking-[0.8em] uppercase text-[var(--accent-color)] mb-4">Contact Us</p>
            <h3 class="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-10 md:mb-16">お問い合わせ</h3>
            <p class="text-lg md:text-2xl text-[var(--text-light)] mb-12 md:mb-16 max-w-2xl mx-auto font-medium leading-relaxed tracking-tight">
                ご質問やご相談など、お気軽にお問い合わせください。
                <br>専門の担当者が迅速に対応させていただきます。
            </p>
            <a href="mailto:info@sumidokoro.com" class="px-10 py-5 bg-[var(--accent-color)] text-white text-xs font-bold uppercase tracking-[0.5em] hover:bg-[var(--main-color)] transition-all">メールで相談する</a>
        </div>
      </section>
    </main>

    <footer class="py-20 md:py-32 bg-[var(--main-dark)] text-white px-6 md:px-10">
      <div class="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-20">
        <div>
          <h2 class="text-5xl md:text-[clamp(4rem,10vw,8rem)] font-black tracking-tighter mb-8 md:mb-12 italic opacity-20">お気軽にご相談ください。</h2>
          <div class="space-y-4">
            <p class="text-white/40 text-[9px] font-bold tracking-[0.5em] uppercase">© 2024 すみどころ.</p>
          </div>
        </div>
        <div class="flex flex-col gap-6 text-[9px] font-bold uppercase tracking-[0.3em] w-full md:w-auto">
          <div class="flex gap-8 border-b border-white/10 pb-6 md:border-none md:pb-0">
            <a href="#" class="hover:text-[var(--accent-color)] transition-colors">Instagram</a>
            <a href="#" class="hover:text-[var(--accent-color)] transition-colors">X</a>
            <a href="#" class="hover:text-[var(--accent-color)] transition-colors">LinkedIn</a>
          </div>
          <span class="text-white/20">Contact: info@sumidokoro.com</span>
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
</style>
        <script>
          function findImageFromPoint(target, event) {
            if (target && target.tagName === 'IMG') return target;
            if (target && target.closest) {
              const closestImg = target.closest('img');
              if (closestImg) return closestImg;
            }
            const x = event && typeof event.clientX === 'number' ? event.clientX : 0;
            const y = event && typeof event.clientY === 'number' ? event.clientY : 0;
            const stack = document.elementsFromPoint(x, y) || [];
            return stack.find(el => el.tagName === 'IMG') || null;
          }

          document.body.addEventListener('click', function(e) {
            const img = findImageFromPoint(e.target, e);
            if (!img) return;
            e.preventDefault();
            e.stopPropagation();
            window.parent.postMessage({ type: 'IMAGE_CLICK', pid: img.getAttribute('data-pid'), src: img.src, alt: img.alt }, '*');
          }, true);
        </script>`
};