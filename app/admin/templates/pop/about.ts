import type { TemplateVariant } from '../types';

export const popAboutTemplate: TemplateVariant = {
  id: 'variant-pop-about',
  templateId: 'template-pop',
  name: 'About',
  pageSlug: 'about',
  description: 'Pop / About page layout',
  html: `
<div class="template-root" style="--main-color: #ec4899; --sub-color: #3b82f6; --accent-color: #fef08a; --text-color: #334155; --bg-color: #fffaf0;">
  <div class="min-h-screen font-sans text-[var(--text-color)] bg-[var(--bg-color)] relative selection:bg-[var(--main-color)] selection:text-white" style="background-image: radial-gradient(var(--sub-color) 1px, transparent 1px); background-size: 40px 40px; background-attachment: fixed; background-color: var(--bg-color); opacity: 1;">
    
    <header class="p-6 sticky top-0 z-[100]">
      <div class="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div class="bg-white px-6 py-3 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-6">
          <div class="font-black text-[var(--main-color)] text-2xl tracking-tighter uppercase leading-none">About <span class="text-[var(--sub-color)]">Us</span></div>
        </div>
        <a href="/" class="bg-[var(--main-color)] text-white px-6 py-3 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs font-black uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">Back</a>
      </div>
    </header>

    <main class="max-w-4xl mx-auto px-6 py-20 space-y-16">
      <section id="top" class="text-center relative">
        <div class="absolute -top-10 -left-10 bg-[var(--accent-color)] p-4 rounded-2xl border-[3px] border-black -rotate-12 font-black shadow-[6px_6px_0px_0px_#000] z-0">OUR STORY</div>
        <div class="relative z-10 bg-white p-10 md:p-16 rounded-[3rem] border-[4px] border-black shadow-[12px_12px_0px_0px_var(--sub-color)] text-left">
            <h2 class="text-4xl font-black mb-8 underline decoration-[var(--main-color)] decoration-4 underline-offset-4">ミッション</h2>
            <p class="font-black text-slate-500 leading-relaxed text-lg">価値ある体験を提供するための指針を記載します。</p>
        </div>
      </section>

      <section id="concept" class="bg-white p-10 md:p-16 rounded-[3rem] border-[4px] border-black shadow-[12px_12px_0px_0px_var(--main-color)] relative">
        <h3 class="text-3xl font-black mb-8 underline decoration-[var(--accent-color)] decoration-4 underline-offset-4">コンセプト</h3>
        <p class="font-black text-slate-500 leading-relaxed text-lg">ブランドの世界観や考え方を記載します。</p>
      </section>

      <section id="features" class="grid md:grid-cols-2 gap-8">
        <div class="bg-[var(--accent-color)] p-10 rounded-[3rem] border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1 hover:rotate-0 transition-transform">
          <h3 class="text-2xl font-black mb-6 uppercase">特徴 1</h3>
          <p class="font-black text-slate-700 leading-relaxed">サービスの強みを記載</p>
        </div>
        <div class="bg-green-400 p-10 rounded-[3rem] border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1 hover:rotate-0 transition-transform">
          <h3 class="text-2xl font-black mb-6 uppercase">特徴 2</h3>
          <p class="font-black text-slate-700 leading-relaxed">品質や姿勢を記載</p>
        </div>
      </section>

      <section id="service" class="bg-white p-10 md:p-16 rounded-[3rem] border-[4px] border-black shadow-[12px_12px_0px_0px_var(--sub-color)]">
        <h3 class="text-3xl font-black mb-8 underline decoration-[var(--main-color)] decoration-4 underline-offset-4">提供価値</h3>
        <p class="font-black text-slate-500 leading-relaxed text-lg">提供する価値や体験を記載します。</p>
      </section>

      <section id="works" class="bg-[var(--main-color)] text-white p-10 md:p-16 rounded-[3rem] border-[4px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <h3 class="text-3xl font-black mb-8">実績</h3>
        <p class="font-black leading-relaxed text-lg opacity-90">代表的な実績や事例を記載します。</p>
      </section>

      <section id="company" class="bg-white p-10 md:p-16 rounded-[3rem] border-[4px] border-black shadow-[12px_12px_0px_0px_var(--accent-color)] relative">
         <div class="absolute -top-8 -right-4 bg-[var(--sub-color)] text-white p-4 rounded-2xl border-[3px] border-black rotate-6 font-black shadow-[6px_6px_0px_0px_#000]">INFO!</div>
        <h3 class="text-3xl font-black mb-8 underline decoration-[var(--sub-color)] decoration-4 underline-offset-4">会社情報</h3>
        <p class="font-black text-slate-500 leading-relaxed text-lg">所在地や連絡先の概要を記載します。</p>
      </section>
    </main>

    <footer class="py-12 text-center bg-white border-t-[6px] border-black">
      <p class="font-black text-xs text-slate-400 tracking-[0.2em] uppercase">&copy; 2026 POP! FACTORY ALL RIGHTS RESERVED.</p>
    </footer>
  </div>
</div>
`
};
