import type { Template } from '../types';

export const japaneseTemplate: Template = {
  id: 'template-japanese',
  name: 'Japanese: 和の伝統',
  tags: ['japanese', 'traditional', 'restaurant', 'culture'],
  description: '縦書きや和柄を取り入れた、落ち着きのある和風デザイン。',
  html: `
<div class="template-root" style="--main-color: #722F37; --accent-color: #2C2C2C; --bg-color: #F9F8F6; --text-color: #1a1a1a; --border-color: #d1d1d1;">
  <div class="min-h-screen font-serif text-[var(--text-color)] bg-[var(--bg-color)] relative" style="background-image: url('https://www.transparenttextures.com/patterns/washi.png');">
    <header class="p-10 flex justify-between items-start sticky top-0 z-50 pointer-events-none">
      <div class="bg-[var(--main-color)] text-white p-4 writing-vertical-rl text-lg tracking-[0.3em] font-bold pointer-events-auto">
        和風建築工房
      </div>
      <nav data-sync="site-pages" class="hidden md:flex flex-col gap-8 text-xs tracking-[0.4em] font-bold pointer-events-auto text-right">
        <a href="#concept" class="hover:text-[var(--main-color)] transition-colors">理念</a>
        <a href="#features" class="hover:text-[var(--main-color)] transition-colors">特徴</a>
        <a href="#service" class="hover:text-[var(--main-color)] transition-colors">品書き</a>
      </nav>
    </header>

    <main>
      <section id="top" class="min-h-screen flex items-center justify-center px-6 relative">
        <div class="absolute right-10 md:right-20 top-1/4 h-32 w-px bg-[var(--main-color)]"></div>
        <div class="relative">
          <h2 class="writing-vertical-rl text-5xl md:text-7xl leading-relaxed tracking-[0.4em] font-bold">
            和の伝統と<br />
            <span class="text-[var(--main-color)]">革新</span>の融合
          </h2>
          <p class="absolute -left-12 bottom-0 text-[10px] tracking-[0.5em] uppercase opacity-40 rotate-180 writing-vertical-rl">Tradition & Innovation</p>
        </div>
      </section>

      <section id="concept" class="py-32 px-6 max-w-5xl mx-auto">
        <div class="flex flex-col md:flex-row-reverse items-center justify-between gap-16">
          <div class="relative">
            <div class="w-64 md:w-80 aspect-[3/4] bg-slate-200 border-[12px] border-white shadow-xl relative z-10"></div>
            <div class="absolute -top-6 -left-6 w-full h-full border border-[var(--main-color)]/20 z-0"></div>
          </div>
          <div class="flex gap-10">
            <h3 class="writing-vertical-rl text-2xl font-bold border-r border-[var(--main-color)] pr-6 tracking-[0.3em]">
              心やすらぐ<br />木の住まい
            </h3>
            <p class="writing-vertical-rl text-sm leading-[3] tracking-widest h-[400px]">
              四季の移ろいを感じる空間を。<br />
              私たちは伝統的な建築技術を守りつつ、<br />
              現代の暮らしに寄り添うご提案をします。<br />
              百年の時を耐え、真の価値をここに。
            </p>
          </div>
        </div>
      </section>

      <section id="features" class="py-32 px-6 bg-[var(--accent-color)] text-white relative">
        <div class="max-w-6xl mx-auto">
          <div class="flex items-center gap-6 mb-20">
            <div class="w-12 h-px bg-[var(--main-color)]"></div>
            <h3 class="text-xl tracking-[0.5em] font-bold uppercase">特徴 / Strength</h3>
          </div>
          <div class="grid md:grid-cols-3 gap-12">
            <div class="border border-white/20 p-10 hover:border-[var(--main-color)] transition-colors relative group">
              <span class="absolute top-4 left-4 text-[10px] text-[var(--main-color)] font-bold">一</span>
              <h4 class="text-lg font-bold mb-6 text-center tracking-[0.2em]">天然木材</h4>
              <p class="text-xs leading-loose opacity-70">選び抜かれた国産材のみを使用。木の呼吸を感じる健やかな住空間を実現します。</p>
            </div>
            <div class="border border-white/20 p-10 hover:border-[var(--main-color)] transition-colors relative group">
              <span class="absolute top-4 left-4 text-[10px] text-[var(--main-color)] font-bold">二</span>
              <h4 class="text-lg font-bold mb-6 text-center tracking-[0.2em]">匠の技</h4>
              <p class="text-xs leading-loose opacity-70">熟練の職人による繊細な仕上げ。継手・仕口・細部まで妥協なく仕上げます。</p>
            </div>
            <div class="border border-white/20 p-10 hover:border-[var(--main-color)] transition-colors relative group">
              <span class="absolute top-4 left-4 text-[10px] text-[var(--main-color)] font-bold">三</span>
              <h4 class="text-lg font-bold mb-6 text-center tracking-[0.2em]">持続性</h4>
              <p class="text-xs leading-loose opacity-70">三世代にわたって住み継げる強度。日本の風土に適した堅牢な構造体を築きます。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="service" class="py-32 px-6 max-w-3xl mx-auto">
        <div class="border-2 border-[var(--accent-color)] p-1 md:p-2">
          <div class="border border-[var(--accent-color)] p-10 md:p-16">
            <h3 class="text-center font-bold text-2xl tracking-[0.5em] mb-16 underline underline-offset-8 decoration-[var(--main-color)]">御品書き</h3>
            <div class="space-y-12">
              <div class="flex justify-between items-end border-b border-dashed border-[var(--border-color)] pb-4">
                <span class="text-lg font-bold tracking-widest">注文住宅</span>
                <span class="text-sm opacity-60 font-sans">伍、〇〇〇、〇〇〇円</span>
              </div>
              <div class="flex justify-between items-end border-b border-dashed border-[var(--border-color)] pb-4">
                <span class="text-lg font-bold tracking-widest">古民家再生事業</span>
                <span class="text-sm opacity-60 font-sans">弐、〇〇〇、〇〇〇円</span>
              </div>
              <div class="flex justify-between items-end border-b border-dashed border-[var(--border-color)] pb-4">
                <span class="text-lg font-bold tracking-widest">茶室・庭園造作</span>
                <span class="text-sm opacity-60 font-sans">応相談</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="works" class="py-32 px-6 bg-white/40">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-6xl mx-auto">
          <div class="aspect-video bg-slate-200 relative group overflow-hidden">
            <div class="absolute inset-0 border border-white z-10 m-4"></div>
          </div>
          <div class="aspect-video bg-slate-300 relative group overflow-hidden">
            <div class="absolute inset-0 border border-white z-10 m-4"></div>
          </div>
        </div>
      </section>

      <section id="company" class="py-32 px-6 max-w-4xl mx-auto text-sm">
        <div class="border-t border-b border-[var(--accent-color)] py-12 grid md:grid-cols-3 gap-8">
          <div class="md:col-span-1">
            <h3 class="font-bold text-lg tracking-widest uppercase mb-4">屋号</h3>
            <p class="text-xl">和風建築工房</p>
          </div>
          <div class="md:col-span-2 space-y-4">
            <p class="flex justify-between border-b border-[var(--border-color)] pb-2">
              <span class="opacity-60">所在地</span>
              <span>東京都千代田区和風町一丁目一番地</span>
            </p>
            <p class="flex justify-between border-b border-[var(--border-color)] pb-2">
              <span class="opacity-60">連絡先</span>
              <span class="font-sans">03-1234-5678</span>
            </p>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-20 text-center opacity-40 text-[10px] tracking-[0.5em] uppercase">
      &copy; MMXXVI JAPANESE TRADITION - KOUBOU.
    </footer>
  </div>
</div>
`
};
