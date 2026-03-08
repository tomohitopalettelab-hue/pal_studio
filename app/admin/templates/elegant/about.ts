import type { TemplateVariant } from '../types';

export const elegantAboutTemplate: TemplateVariant = {
  id: 'variant-elegant-about',
  templateId: 'template-elegant',
  name: 'About',
  pageSlug: 'about',
  description: 'Elegant / About page layout',
  html: `
<div class="template-root" style="--accent-color: #8c764b;">
  <div class="min-h-screen font-serif text-slate-900 bg-[#fdfbf7]">
    <header class="border-b border-black/10 bg-[#fdfbf7]/90 backdrop-blur-xl">
      <div class="max-w-6xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between gap-6">
        <div class="text-xs font-bold tracking-[0.4em] uppercase">Maison.</div>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.4em] text-black/50"></nav>
      </div>
      <div class="max-w-6xl mx-auto px-6 lg:px-12 pb-10">
        <p class="text-[10px] uppercase tracking-[0.4em] text-black/40">About</p>
        <h1 class="text-4xl md:text-5xl font-light mt-3">私たちについて</h1>
        <p class="text-sm text-black/60 mt-4 max-w-2xl">気品ある体験を支える設計思想と、日々の取り組みを記載します。</p>
        <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-6 lg:px-12 py-14 space-y-14 pb-20">
      <section id="top" class="grid gap-8 lg:grid-cols-2">
        <div class="space-y-4">
          <h2 class="text-2xl font-bold">ミッション</h2>
          <p class="text-sm text-black/60 leading-relaxed">美しさと品格を両立させ、長く愛されるブランド体験を提供します。</p>
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-bold">ビジョン</h3>
          <p class="text-sm text-black/60 leading-relaxed">ブランドの物語を整え、信頼が積み重なるコミュニケーションを形にします。</p>
        </div>
      </section>

      <section id="concept" class="space-y-6">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold">価値観</h3>
          <span class="text-[10px] uppercase tracking-[0.3em] text-black/40">Principles</span>
        </div>
        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-2xl border border-black/10 p-6 bg-white/70">
            <p class="text-sm font-bold">調和</p>
            <p class="text-sm text-black/60 mt-3">ブランドの世界観を崩さない設計を貫きます。</p>
          </div>
          <div class="rounded-2xl border border-black/10 p-6 bg-white/70">
            <p class="text-sm font-bold">細部への配慮</p>
            <p class="text-sm text-black/60 mt-3">視線の動きや言葉の余韻まで設計します。</p>
          </div>
          <div class="rounded-2xl border border-black/10 p-6 bg-white/70">
            <p class="text-sm font-bold">信頼</p>
            <p class="text-sm text-black/60 mt-3">長期的な関係性を前提に伴走します。</p>
          </div>
        </div>
      </section>

      <section id="features" class="grid gap-8 lg:grid-cols-2">
        <div class="space-y-4">
          <h3 class="text-xl font-bold">沿革</h3>
          <ol class="space-y-3 text-sm text-black/60">
            <li>2017 / ブランド設計部門を立ち上げ</li>
            <li>2020 / デジタル施策と運用支援を拡充</li>
            <li>2024 / 多拠点での制作体制を構築</li>
          </ol>
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-bold">チーム</h3>
          <div class="rounded-2xl border border-black/10 p-6 bg-white/70">
            <p class="text-sm font-bold">クリエイティブ統括</p>
            <p class="text-sm text-black/60 mt-2">ブランドと体験を一貫させる設計を担当。</p>
          </div>
        </div>
      </section>

      <section id="company" class="grid gap-8 lg:grid-cols-2">
        <div class="space-y-4">
          <h3 class="text-xl font-bold">会社概要</h3>
          <dl class="space-y-3 text-sm text-black/60">
            <div class="flex justify-between border-b border-black/10 pb-2"><dt>会社名</dt><dd>Maison Elegant Inc.</dd></div>
            <div class="flex justify-between border-b border-black/10 pb-2"><dt>所在地</dt><dd>東京 / 表参道</dd></div>
            <div class="flex justify-between border-b border-black/10 pb-2"><dt>設立</dt><dd>2017年</dd></div>
            <div class="flex justify-between border-b border-black/10 pb-2"><dt>事業内容</dt><dd>ブランド設計 / Web制作</dd></div>
          </dl>
        </div>
        <div class="rounded-3xl border border-black/10 bg-white/70 p-8">
          <h4 class="text-lg font-bold">ご相談はこちら</h4>
          <p class="text-sm text-black/60 mt-3">上質な体験設計のご相談を承ります。</p>
          <button class="mt-6 px-6 py-3 bg-[var(--accent-color)] text-white text-xs font-bold tracking-[0.3em] uppercase rounded-full">Contact</button>
        </div>
      </section>
    </main>
  </div>
</div>
`
};
