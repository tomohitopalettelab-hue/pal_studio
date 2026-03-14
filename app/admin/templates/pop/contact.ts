import type { TemplateVariant } from '../types';

export const popContactTemplate: TemplateVariant = {
  id: 'variant-pop-contact',
  templateId: 'template-pop',
  name: 'Contact',
  pageSlug: 'contact',
  description: 'Pop / Contact page layout',
  html: `
<div class="template-root" style="--main-color: #ec4899; --sub-color: #3b82f6; --accent-color: #fef08a; --text-color: #334155; --bg-color: #fffaf0;">
  <div class="min-h-screen font-sans text-[var(--text-color)] bg-[var(--bg-color)] relative selection:bg-[var(--main-color)] selection:text-white" style="background-image: radial-gradient(var(--sub-color) 1px, transparent 1px); background-size: 40px 40px; background-attachment: fixed; background-color: var(--bg-color); opacity: 1;">
    
    <header class="p-6 sticky top-0 z-[100]">
      <div class="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div class="bg-white px-6 py-3 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-6">
          <div class="font-black text-[var(--main-color)] text-2xl tracking-tighter uppercase leading-none">Contact <span class="text-[var(--sub-color)]">Us</span></div>
        </div>
        <a href="/" class="bg-[var(--main-color)] text-white px-6 py-3 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs font-black uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">Back</a>
      </div>
    </header>

    <main class="max-w-4xl mx-auto px-6 py-20 space-y-16">
      <div class="text-center mb-16 relative">
        <div class="inline-block bg-[var(--accent-color)] px-10 py-6 rounded-[3rem] border-[4px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rotate-2">
          <h1 class="text-4xl md:text-6xl font-black uppercase tracking-tighter">Say Hello! 👋</h1>
        </div>
      </div>

      <section id="top" class="bg-white p-10 md:p-16 rounded-[3rem] border-[4px] border-black shadow-[12px_12px_0px_0px_var(--main-color)] text-center relative">
        <div class="absolute -top-8 -right-4 bg-[var(--sub-color)] text-white p-4 rounded-full border-[3px] border-black -rotate-12 font-black shadow-[6px_6px_0px_0px_#000] text-3xl">✉️</div>
        <h2 class="text-3xl font-black mb-6">ご相談はこちら</h2>
        <p class="font-black text-slate-500 leading-relaxed text-lg mb-10">どんな些細なことでもお気軽にどうぞ！<br/>一緒にワクワクを作りましょう！</p>
        <button class="bg-[var(--main-color)] text-white px-10 py-4 rounded-full border-[4px] border-black font-black text-xl shadow-[6px_6px_0px_0px_#000] hover:translate-y-1 hover:shadow-none transition-all animate-bounce">Send Message</button>
      </section>

      <div class="grid md:grid-cols-2 gap-8">
        <section id="concept" class="bg-white p-10 rounded-[3rem] border-[4px] border-black shadow-[10px_10px_0px_0px_var(--sub-color)]">
          <h3 class="text-2xl font-black mb-6 underline decoration-[var(--accent-color)] decoration-4 underline-offset-4">対応内容</h3>
          <p class="font-black text-slate-500 leading-relaxed">対応できる内容や範囲を記載します。デザイン、イベント企画など何でも！</p>
        </section>
        <section id="features" class="bg-white p-10 rounded-[3rem] border-[4px] border-black shadow-[10px_10px_0px_0px_var(--main-color)]">
          <h3 class="text-2xl font-black mb-6 underline decoration-green-400 decoration-4 underline-offset-4">対応フロー</h3>
          <p class="font-black text-slate-500 leading-relaxed">お問い合わせから返信までの流れを記載します。最短爆速でお返事します！</p>
        </section>
      </div>

      <section id="service" class="bg-[var(--accent-color)] p-10 md:p-16 rounded-[3rem] border-[4px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 class="text-3xl font-black mb-4">連絡先</h3>
          <p class="font-black text-slate-700 leading-relaxed">お電話・メールなどの連絡先を記載します。</p>
        </div>
        <div class="bg-white px-8 py-4 rounded-2xl border-[3px] border-black font-black text-2xl shadow-[4px_4px_0px_0px_#000] rotate-2">
          📞 03-POP-2026
        </div>
      </section>

      <section id="works" class="bg-white p-10 md:p-16 rounded-[3rem] border-[4px] border-black shadow-[12px_12px_0px_0px_var(--sub-color)]">
        <h3 class="text-2xl font-black mb-8 border-b-[4px] border-black pb-4 inline-block">よくある質問 (FAQ)</h3>
        <div class="space-y-6 font-black text-slate-600">
          <div class="p-6 bg-slate-50 rounded-2xl border-[3px] border-black">
             <p class="text-[var(--main-color)] mb-2">Q. どんな相談ができますか？</p>
             <p>A. FAQの案内を記載します。</p>
          </div>
        </div>
      </section>

      <section id="company" class="bg-green-400 p-10 md:p-16 rounded-[3rem] border-[4px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <h3 class="text-3xl font-black mb-6">会社情報</h3>
        <p class="font-black text-slate-800 leading-relaxed text-lg">所在地や営業時間などを記載します。いつでも遊びに来てください！</p>
      </section>
    </main>

    <footer class="py-12 text-center bg-white border-t-[6px] border-black">
      <p class="font-black text-xs text-slate-400 tracking-[0.2em] uppercase">&copy; 2026 POP! FACTORY ALL RIGHTS RESERVED.</p>
    </footer>
  </div>
</div>
`
};
