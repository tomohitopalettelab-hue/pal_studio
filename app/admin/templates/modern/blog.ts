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
        <div class="hidden lg:flex items-center gap-6">
          <nav data-sync="site-pages" class="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--text-color)]">
            <a href="/" class="hover:text-[var(--accent-color)] transition-colors">Top</a>
          </nav>
          <a data-page-slug="contact" href="/contact" class="px-8 py-4 bg-[var(--main-color)] text-white text-[9px] hover:bg-[var(--accent-color)] transition-all">Get in touch</a>
        </div>
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
        <nav data-sync="site-pages" class="flex flex-col items-center gap-8 text-xs font-bold uppercase tracking-[0.5em]">
          <a href="/" onclick="document.getElementById('menu-toggle-blog').checked=false">Top</a>
        </nav>
        <a data-page-slug="contact" href="/contact" class="mt-6 px-10 py-5 bg-[var(--accent-color)] text-white text-xs font-bold uppercase tracking-[0.5em]" onclick="document.getElementById('menu-toggle-blog').checked=false">Get in touch</a>
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

      <section id="top" class="px-6 md:px-10 pb-32">
        <div class="max-w-7xl mx-auto">
          <p class="text-sm text-slate-400">ブログ一覧は公開投稿から自動生成されます。</p>
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