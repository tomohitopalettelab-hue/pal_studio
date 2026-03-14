import type { TemplateVariant } from '../types';

export const popBlogTemplate: TemplateVariant = {
  id: 'variant-pop-blog',
  templateId: 'template-pop',
  name: 'Blog',
  pageSlug: 'blog',
  description: 'Pop / Blog list layout',
  html: `
<div class="template-root" style="--main-color: #ec4899; --sub-color: #3b82f6; --accent-color: #fef08a; --text-color: #334155; --bg-color: #fffaf0;">
  <div class="min-h-screen font-sans text-[var(--text-color)] bg-[var(--bg-color)] relative selection:bg-[var(--main-color)] selection:text-white" style="background-image: radial-gradient(var(--sub-color) 1px, transparent 1px); background-size: 40px 40px; background-attachment: fixed; background-color: var(--bg-color); opacity: 1;">
    
    <header class="p-6 sticky top-0 z-[100]">
      <div class="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div class="bg-white px-6 py-3 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-6">
          <div class="font-black text-[var(--main-color)] text-2xl tracking-tighter uppercase leading-none">Blog <span class="text-[var(--sub-color)]">List</span></div>
        </div>
        <a href="/" class="bg-[var(--main-color)] text-white px-6 py-3 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs font-black uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">Back</a>
      </div>
    </header>

    <main class="max-w-5xl mx-auto px-6 py-20">
      <div class="text-center mb-16 relative">
        <div class="inline-block bg-[var(--accent-color)] px-8 py-4 rounded-[2rem] border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-2">
          <h1 class="text-4xl md:text-5xl font-black uppercase tracking-tighter">Our Blogs!</h1>
        </div>
      </div>
      
      <section id="top" class="grid gap-8 md:grid-cols-2">
        <a href="/blog/blog-page" class="group bg-white p-8 rounded-[3rem] border-[4px] border-black shadow-[10px_10px_0px_0px_var(--main-color)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_var(--main-color)] transition-all block">
          <div class="inline-block bg-black text-white px-4 py-1 rounded-full font-black text-[10px] uppercase tracking-widest mb-6">2026.03.07</div>
          <h2 class="text-2xl font-black mb-4 group-hover:text-[var(--main-color)] transition-colors line-clamp-2">ブログタイトルが入ります</h2>
          <p class="font-black text-slate-500 text-sm leading-relaxed mb-6">概要テキストがここに入ります。ポップで楽しい雰囲気の記事が読めます！</p>
          <div class="inline-flex items-center gap-2 text-sm font-black text-[var(--sub-color)] border-b-2 border-[var(--sub-color)] pb-1">READ MORE ▶︎</div>
        </a>
        
        <a href="/blog/blog-page" class="group bg-white p-8 rounded-[3rem] border-[4px] border-black shadow-[10px_10px_0px_0px_var(--sub-color)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_var(--sub-color)] transition-all block rotate-1">
          <div class="inline-block bg-black text-white px-4 py-1 rounded-full font-black text-[10px] uppercase tracking-widest mb-6">2026.02.21</div>
          <h2 class="text-2xl font-black mb-4 group-hover:text-[var(--sub-color)] transition-colors line-clamp-2">イベント告知のサンプル</h2>
          <p class="font-black text-slate-500 text-sm leading-relaxed mb-6">お知らせの概要が入ります。ワクワクするイベントの予感！</p>
          <div class="inline-flex items-center gap-2 text-sm font-black text-[var(--main-color)] border-b-2 border-[var(--main-color)] pb-1">READ MORE ▶︎</div>
        </a>
      </section>
    </main>

    <footer class="py-12 text-center bg-white border-t-[6px] border-black">
      <p class="font-black text-xs text-slate-400 tracking-[0.2em] uppercase">&copy; 2026 POP! FACTORY ALL RIGHTS RESERVED.</p>
    </footer>
  </div>
</div>
`
};
