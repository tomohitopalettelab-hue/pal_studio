import type { TemplateVariant } from '../types';

export const modernBlogTemplate: TemplateVariant = {
  id: 'variant-modern-blog',
  templateId: 'template-modern',
  name: 'Blog',
  pageSlug: 'blog',
  description: 'Modern / Editorial blog list layout',
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
          <a href="/blog" class="text-[var(--accent-color)]">Blog</a>
          <a href="/contact" class="px-8 py-4 bg-[var(--main-color)] text-white text-[9px] hover:bg-[var(--accent-color)] transition-all">Get in touch</a>
        </nav>
        <label for="menu-toggle-blog" class="lg:hidden cursor-pointer p-2 z-[110]">
          <div class="w-6 h-5 flex flex-col justify-between">
            <span class="w-full h-[2px] bg-[var(--main-color)]"></span>
            <span class="w-full h-[2px] bg-[var(--main-color)]"></span>
            <span class="w-full h-[2px] bg-[var(--main-color)]"></span>
          </div>
        </label>
      </div>
      <input type="checkbox" id="menu-toggle-blog" class="sr-only peer" />
      <div class="fixed inset-0 bg-[var(--main-dark)] translate-x-full peer-checked:translate-x-0 transition-transform duration-500 ease-in-out lg:hidden z-[105] flex flex-col items-center justify-center text-white">
        <nav class="flex flex-col items-center gap-8 text-xs font-bold uppercase tracking-[0.5em]">
          <a data-page-slug="top" href="/" onclick="document.getElementById('menu-toggle-blog').checked=false">Top</a>
          <a data-page-slug="blog" href="/blog" onclick="document.getElementById('menu-toggle-blog').checked=false">Blog</a>
          <a data-page-slug="contact" href="/contact" onclick="document.getElementById('menu-toggle-blog').checked=false">Contact</a>
        </nav>
      </div>
    </header>

    <main class="pt-32 md:pt-48">
      <section class="px-6 md:px-10 mb-20 md:mb-32">
        <div class="max-w-7xl mx-auto">
          <p class="text-[10px] font-bold tracking-[0.8em] text-[var(--accent-color)] uppercase mb-6">Insights</p>
          <h1 class="text-[clamp(3rem,10vw,8rem)] font-black tracking-tighter leading-none uppercase mb-10">
            Journal &<br/><span class="italic font-light text-[var(--main-color)]" style="font-family: serif;">Perspectives.</span>
          </h1>
          <p class="text-[var(--text-light)] text-base md:text-xl font-light max-w-2xl leading-relaxed">
            制作の裏側、デザインの思考プロセス、そしてビジネスを加速させる運用の知見を、独自の視点で綴ります。
          </p>
        </div>
      </section>

      <section class="px-6 md:px-10 pb-32">
        <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 md:gap-24">
          
          <div class="lg:col-span-8 space-y-24 md:space-y-32">
            
            <a data-page-slug="blog-page" href="/blog-page" class="group block">
              <article class="cursor-pointer">
                <div class="aspect-[16/9] overflow-hidden mb-8 bg-slate-100 relative shadow-2xl shadow-black/5">
                  <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Blog 01">
                  <div class="absolute bottom-0 left-0 bg-[var(--main-color)] text-white text-[8px] font-black uppercase tracking-[0.4em] px-6 py-3">Featured</div>
                </div>
                <div class="max-w-2xl">
                  <p class="text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase mb-4">2026.03.07 / Strategy</p>
                  <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-6 group-hover:text-[var(--accent-color)] transition-colors">成果が続くサイト設計の考え方：分析・設計・改善のループを回す。</h2>
                  <p class="text-[var(--text-light)] text-sm md:text-base font-light leading-relaxed mb-8">
                    単に「作る」だけでは終わらない。ビジネスの成長に合わせてサイトが進化し続けるために、初期設計で仕込むべき「余白」と「データ設計」の極意を公開します。
                  </p>
                  <div class="flex items-center gap-4">
                    <span class="text-[10px] font-bold uppercase tracking-[0.4em]">Read Journal</span>
                    <div class="w-12 h-[1px] bg-black/20 group-hover:w-20 group-hover:bg-[var(--accent-color)] transition-all"></div>
                  </div>
                </div>
              </article>
            </a>

            <div class="grid md:grid-cols-2 gap-16 md:gap-20 border-t border-black/5 pt-24 md:pt-32">
              <a data-page-slug="blog-page" href="/blog-page" class="group block">
                <article class="cursor-pointer">
                  <div class="aspect-[4/3] overflow-hidden mb-6 bg-slate-100">
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Blog 02">
                  </div>
                  <p class="text-[9px] font-bold tracking-[0.4em] text-slate-400 uppercase mb-3">2026.02.21 / Design</p>
                  <h3 class="text-xl md:text-2xl font-bold tracking-tight mb-4 group-hover:text-[var(--accent-color)] transition-colors">ブランドストーリーを視覚化する「静寂」の美学。</h3>
                  <p class="text-xs md:text-sm text-[var(--text-light)] font-light leading-relaxed">語りすぎないことで伝わるブランドの品格。ミニマリズムを追求した先にある、感情を揺さぶるデザインの作り方。</p>
                </article>
              </a>

              <a data-page-slug="blog-page" href="/blog-page" class="group block">
                <article class="cursor-pointer">
                  <div class="aspect-[4/3] overflow-hidden mb-6 bg-slate-100">
                    <img src="https://images.unsplash.com/photo-1551288049-bbbda536ad39?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Blog 03">
                  </div>
                  <p class="text-[9px] font-bold tracking-[0.4em] text-slate-400 uppercase mb-3">2026.02.10 / Operation</p>
                  <h3 class="text-xl md:text-2xl font-bold tracking-tight mb-4 group-hover:text-[var(--accent-color)] transition-colors">運用で差がつく更新設計：現場の負荷を下げるために。</h3>
                  <p class="text-xs md:text-sm text-[var(--text-light)] font-light leading-relaxed">美しいデザインを維持しながら、専門知識がなくてもスムーズに更新できる。現場目線で追求したコンポーネント設計術。</p>
                </article>
              </a>
            </div>
          </div>

          <aside class="lg:col-span-4 space-y-16">
            <div class="sticky top-32">
              <div class="border-t border-black font-bold pt-6 mb-12">
                <h3 class="text-xs uppercase tracking-[0.5em] mb-10 text-[var(--accent-color)]">Categories</h3>
                <div class="flex flex-col gap-4 text-[10px] uppercase tracking-[0.3em]">
                  <a href="#" class="flex justify-between items-center group">
                    <span class="group-hover:translate-x-2 transition-transform">Strategy</span>
                    <span class="opacity-20 italic">08</span>
                  </a>
                  <a href="#" class="flex justify-between items-center group border-t border-black/5 pt-4">
                    <span class="group-hover:translate-x-2 transition-transform">Design</span>
                    <span class="opacity-20 italic">12</span>
                  </a>
                  <a href="#" class="flex justify-between items-center group border-t border-black/5 pt-4">
                    <span class="group-hover:translate-x-2 transition-transform">Operation</span>
                    <span class="opacity-20 italic">05</span>
                  </a>
                </div>
              </div>

              <div class="bg-slate-50 p-8 md:p-10">
                <p class="text-[9px] font-black uppercase tracking-[0.4em] mb-4">Newsletter</p>
                <p class="text-xs text-[var(--text-light)] leading-relaxed mb-6">最新のインサイトや制作事例の更新情報を、週に一度お届けします。</p>
                <div class="space-y-4">
                  <input type="email" placeholder="Email Address" class="w-full h-12 px-4 bg-white border-none text-[10px] outline-none focus:ring-1 focus:ring-[var(--accent-color)] transition-all">
                  <button class="w-full py-4 bg-[var(--main-color)] text-white text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-[var(--accent-color)] transition-all">Subscribe</button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section class="px-6 md:px-10 pb-32">
        <div class="max-w-7xl mx-auto flex justify-center items-center gap-10 border-t border-black/5 pt-16">
          <span class="text-[10px] font-bold tracking-widest text-[var(--accent-color)]">01</span>
          <a href="#" class="text-[10px] font-bold tracking-widest opacity-20 hover:opacity-100 transition-opacity">02</a>
          <a href="#" class="text-[10px] font-bold tracking-widest opacity-20 hover:opacity-100 transition-opacity">03</a>
          <span class="w-12 h-[1px] bg-black/10"></span>
          <a href="#" class="text-[10px] font-bold tracking-widest uppercase">Next Page</a>
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
          <span class="text-white/20">Contact: hello@studio-modern.com</span>
        </div>
      </div>
    </footer>
  </div>
</div>
`
};