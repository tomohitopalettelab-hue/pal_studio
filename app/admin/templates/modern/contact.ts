import type { TemplateVariant } from '../types';

export const modernContactTemplate: TemplateVariant = {
  id: 'variant-modern-contact',
  templateId: 'template-modern',
  name: 'Contact',
  pageSlug: 'contact',
  description: 'Modern / Clean contact form with visual hierarchy',
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

        <nav data-nav-fixed class="hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--text-color)]">
          <a data-page-slug="top" data-page-hash="concept" href="/#concept" class="hover:text-[var(--accent-color)] transition-colors">Concept</a>
          <a data-page-slug="top" data-page-hash="service" href="/#service" class="hover:text-[var(--accent-color)] transition-colors">Service</a>
          <a data-page-slug="top" data-page-hash="works" href="/#works" class="hover:text-[var(--accent-color)] transition-colors">Works</a>
          <a data-page-slug="news" href="/news" class="hover:text-[var(--accent-color)] transition-colors">News</a>
          <a data-page-slug="blog" href="/blog" class="hover:text-[var(--accent-color)] transition-colors">Blog</a>
          <a data-page-slug="contact" href="/contact" class="px-8 py-4 bg-[var(--main-color)] text-white text-[9px] hover:bg-[var(--accent-color)] transition-all">Get in touch</a>
        </nav>

        <label for="menu-toggle-contact" class="lg:hidden cursor-pointer p-2 z-[110]">
          <div class="w-6 h-5 flex flex-col justify-between">
            <span class="w-full h-[2px] bg-[var(--main-color)]"></span>
            <span class="w-full h-[2px] bg-[var(--main-color)]"></span>
            <span class="w-full h-[2px] bg-[var(--main-color)]"></span>
          </div>
        </label>
      </div>
      <input type="checkbox" id="menu-toggle-contact" class="sr-only peer" />
      <div class="fixed inset-0 bg-[var(--main-dark)] translate-x-full peer-checked:translate-x-0 transition-transform duration-500 ease-in-out lg:hidden z-[105] flex flex-col items-center justify-center">
        <nav class="flex flex-col items-center gap-8 text-white text-xs font-bold uppercase tracking-[0.5em]">
          <a data-page-slug="top" data-page-hash="concept" href="/#concept" onclick="document.getElementById('menu-toggle-contact').checked=false">Concept</a>
          <a data-page-slug="top" data-page-hash="service" href="/#service" onclick="document.getElementById('menu-toggle-contact').checked=false">Service</a>
          <a data-page-slug="top" data-page-hash="works" href="/#works" onclick="document.getElementById('menu-toggle-contact').checked=false">Works</a>
          <a data-page-slug="news" href="/news" onclick="document.getElementById('menu-toggle-contact').checked=false">News</a>
          <a data-page-slug="blog" href="/blog" onclick="document.getElementById('menu-toggle-contact').checked=false">Blog</a>
          <a data-page-slug="contact" href="/contact" class="mt-4 px-10 py-5 bg-[var(--accent-color)]" onclick="document.getElementById('menu-toggle-contact').checked=false">Get in touch</a>
        </nav>
      </div>
    </header>

    <main class="pt-32 md:pt-48">
      <section class="px-6 md:px-10 mb-20 md:mb-32">
        <div class="max-w-7xl mx-auto">
          <p class="text-[10px] font-bold tracking-[0.8em] text-[var(--accent-color)] uppercase mb-6">Contact Us</p>
          <h1 class="text-[clamp(3rem,10vw,8rem)] font-black tracking-tighter leading-none uppercase mb-10">
            Let's Start<br/><span class="italic font-light text-[var(--main-color)]" style="font-family: serif;">a Project.</span>
          </h1>
          <p class="text-[var(--text-light)] text-base md:text-xl font-light max-w-2xl leading-relaxed">
            課題整理の段階から、具体的な制作のご相談まで承ります。<br/>ビジネスに新しい「鼓動」を宿すパートナーとして。
          </p>
        </div>
      </section>

      <section class="px-6 md:px-10 pb-32">
        <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 md:gap-24">
          
          <div class="lg:col-span-5 space-y-16">
            <div>
              <h2 class="text-xs font-bold uppercase tracking-[0.4em] mb-8 pb-4 border-b border-black/5">Consulting</h2>
              <p class="text-[var(--text-color)] text-lg md:text-2xl font-light italic leading-relaxed">
                要件が固まっていなくても問題ありません。現状の課題と、到達したい目的をありのままに共有してください。
              </p>
            </div>
            
            <div class="bg-slate-50 p-8 md:p-12 space-y-8">
              <p class="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-color)]">Scope of Work</p>
              <ul class="space-y-6 text-sm md:text-base font-bold tracking-tight">
                <li class="flex items-center gap-4">
                  <span class="w-1.5 h-1.5 bg-[var(--accent-color)] rounded-full"></span>
                  ブランド設計・アイデンティティ構築
                </li>
                <li class="flex items-center gap-4">
                  <span class="w-1.5 h-1.5 bg-[var(--accent-color)] rounded-full"></span>
                  Webサイト制作・リニューアル
                </li>
                <li class="flex items-center gap-4">
                  <span class="w-1.5 h-1.5 bg-[var(--accent-color)] rounded-full"></span>
                  UI/UXデザイン・運用戦略の策定
                </li>
              </ul>
            </div>
          </div>

          <div class="lg:col-span-7 bg-white">
            <h3 class="text-2xl font-bold mb-10 tracking-tight">お問い合わせフォーム</h3>
            <form class="space-y-8">
              <div class="grid md:grid-cols-2 gap-8">
                <div class="space-y-2">
                  <label class="text-[9px] font-bold uppercase tracking-widest text-slate-400 pl-4">Company</label>
                  <input type="text" placeholder="株式会社〇〇" class="w-full h-14 px-6 rounded-none bg-slate-50 border-none focus:ring-1 focus:ring-[var(--accent-color)] transition-all outline-none text-sm">
                </div>
                <div class="space-y-2">
                  <label class="text-[9px] font-bold uppercase tracking-widest text-slate-400 pl-4">Name</label>
                  <input type="text" placeholder="田中 太郎" class="w-full h-14 px-6 rounded-none bg-slate-50 border-none focus:ring-1 focus:ring-[var(--accent-color)] transition-all outline-none text-sm">
                </div>
              </div>
              <div class="space-y-2">
                <label class="text-[9px] font-bold uppercase tracking-widest text-slate-400 pl-4">Email Address</label>
                <input type="email" placeholder="hello@example.com" class="w-full h-14 px-6 rounded-none bg-slate-50 border-none focus:ring-1 focus:ring-[var(--accent-color)] transition-all outline-none text-sm">
              </div>
              <div class="space-y-2">
                <label class="text-[9px] font-bold uppercase tracking-widest text-slate-400 pl-4">Message</label>
                <textarea rows="6" placeholder="プロジェクトの概要や、解決したい課題についてご自由にご記入ください。" class="w-full p-6 rounded-none bg-slate-50 border-none focus:ring-1 focus:ring-[var(--accent-color)] transition-all outline-none text-sm resize-none"></textarea>
              </div>
              <button type="submit" class="w-full md:w-auto px-16 py-5 bg-[var(--main-color)] text-white text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-[var(--accent-color)] transition-all shadow-xl shadow-black/10">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <section class="px-6 md:px-10 py-24 bg-[#f8fafc]">
        <div class="max-w-7xl mx-auto grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/5 border-y md:border-y-0 border-black/5">
          <div class="py-12 md:px-10">
            <p class="text-[9px] font-bold uppercase tracking-widest text-[var(--accent-color)] mb-4">Mail</p>
            <p class="text-xl font-bold">hello@studio-modern.com</p>
          </div>
          <div class="py-12 md:px-10">
            <p class="text-[9px] font-bold uppercase tracking-widest text-[var(--accent-color)] mb-4">Phone</p>
            <p class="text-xl font-bold">03-0000-0000</p>
          </div>
          <div class="py-12 md:px-10">
            <p class="text-[9px] font-bold uppercase tracking-widest text-[var(--accent-color)] mb-4">Office</p>
            <p class="text-xl font-bold italic">Shibuya, Tokyo</p>
          </div>
        </div>
      </section>

      <section class="py-32 bg-[var(--main-dark)] text-white px-6 md:px-10 text-center relative overflow-hidden">
        <div class="max-w-3xl mx-auto relative z-10">
          <h3 class="text-2xl md:text-3xl font-bold tracking-tight mb-8 leading-relaxed">まずは一度、オンラインでお話ししませんか？</h3>
          <p class="text-white/40 text-sm md:text-base mb-12 font-light">30分程度のカジュアルなヒアリングの場を設けています。</p>
          <button class="px-12 py-5 border border-white/20 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-[var(--main-dark)] transition-all">Book a Discovery Call</button>
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