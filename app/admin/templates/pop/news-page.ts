import type { TemplateVariant } from '../types';

export const popNewsPageTemplate: TemplateVariant = {
  id: 'variant-pop-news-page',
  templateId: 'template-pop',
  name: 'News Detail',
  pageSlug: 'news-page',
  description: 'Pop / News detail layout',
  html: `
<div class="template-root" style="--main-color: #ec4899; --sub-color: #3b82f6; --accent-color: #fef08a; --text-color: #334155; --bg-color: #fffaf0;">
  <div class="min-h-screen font-sans text-[var(--text-color)] bg-[var(--bg-color)] relative selection:bg-[var(--main-color)] selection:text-white" style="background-image: radial-gradient(var(--sub-color) 1px, transparent 1px); background-size: 40px 40px; background-attachment: fixed; background-color: var(--bg-color); opacity: 1;">
    
    <header class="p-6 sticky top-0 z-[100]">
      <div class="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div class="bg-white px-6 py-3 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-6">
          <div class="font-black text-[var(--main-color)] text-2xl tracking-tighter uppercase leading-none">News <span class="text-[var(--sub-color)]">Detail</span></div>
        </div>
        <a href="/news" class="bg-[var(--main-color)] text-white px-6 py-3 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs font-black uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">Back to List</a>
      </div>
    </header>

    <main class="max-w-4xl mx-auto px-6 py-20 space-y-16">
      <section id="top" class="bg-white p-10 md:p-16 rounded-[3rem] border-[4px] border-black shadow-[12px_12px_0px_0px_var(--main-color)] relative">
        <div class="absolute -top-6 -right-6 bg-[var(--accent-color)] p-4 rounded-full border-[3px] border-black font-black shadow-[4px_4px_0px_0px_#000] -rotate-12 text-2xl">📢</div>
        <div class="inline-block bg-black text-white px-4 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-8">2026.03.07</div>
        <h1 class="text-3xl md:text-5xl font-black mb-8 leading-tight">ニュースタイトルが入ります</h1>
        <p class="font-black text-slate-500 text-lg leading-relaxed">リード文がここに入ります。最新のニュースをチェックしよう！</p>
      </section>

      <section id="concept" class="bg-white p-10 md:p-16 rounded-[3rem] border-[4px] border-black shadow-[12px_12px_0px_0px_var(--sub-color)]">
        <h3 class="text-2xl font-black mb-8 underline decoration-[var(--accent-color)] decoration-4 underline-offset-4">本文</h3>
        <div class="space-y-6 font-black text-slate-600 leading-relaxed">
          <p>本文テキストがここに入ります。読みやすく、楽しいトーンで。</p>
          <p>続きの本文テキストがここに入ります。カラフルな表現を心がけて。</p>
        </div>
      </section>

      <div class="grid md:grid-cols-2 gap-8">
        <section id="features" class="bg-[var(--accent-color)] p-10 rounded-[3rem] border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h3 class="text-xl font-black mb-6 uppercase">関連情報</h3>
          <p class="font-black text-slate-700 leading-relaxed text-sm">関連する情報を記載します。</p>
        </section>
        
        <section id="works" class="bg-green-400 p-10 rounded-[3rem] border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h3 class="text-xl font-black mb-6 uppercase">次の更新</h3>
          <p class="font-black text-slate-700 leading-relaxed text-sm">次回の案内を記載します。</p>
        </section>
      </div>

      <section id="service" class="bg-white p-10 rounded-[3rem] border-[4px] border-black shadow-[12px_12px_0px_0px_var(--main-color)]">
        <h3 class="text-2xl font-black mb-8 border-b-[4px] border-black pb-4 inline-block">他のニュース</h3>
        <ul class="space-y-4 font-black text-slate-600">
          <li class="flex items-center gap-4 hover:translate-x-2 transition-transform cursor-pointer"><span class="text-[var(--main-color)]">▶︎</span> 2026.02.21 / 更新情報のタイトル</li>
          <li class="flex items-center gap-4 hover:translate-x-2 transition-transform cursor-pointer"><span class="text-[var(--sub-color)]">▶︎</span> 2026.02.10 / イベント開催のお知らせ</li>
        </ul>
      </section>

      <section id="company" class="bg-[var(--main-color)] text-white p-10 rounded-[3rem] border-[4px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center">
        <h3 class="text-2xl font-black mb-4">お問い合わせ</h3>
        <p class="font-black text-white/90 leading-relaxed mb-6">ニュースに関する問い合わせ先を記載します。</p>
        <button class="bg-white text-[var(--main-color)] px-8 py-3 rounded-full border-[3px] border-black font-black shadow-[4px_4px_0px_0px_#000] hover:translate-y-1 hover:shadow-none transition-all">Contact Us</button>
      </section>
    </main>

    <footer class="py-12 text-center bg-white border-t-[6px] border-black">
      <p class="font-black text-xs text-slate-400 tracking-[0.2em] uppercase">&copy; 2026 POP! FACTORY ALL RIGHTS RESERVED.</p>
    </footer>
  </div>
</div>
`
};
