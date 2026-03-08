import type { TemplateVariant } from '../types';

export const elegantContactTemplate: TemplateVariant = {
  id: 'variant-elegant-contact',
  templateId: 'template-elegant',
  name: 'Contact',
  pageSlug: 'contact',
  description: 'Elegant / Contact page layout',
  html: `
<div class="template-root" style="--accent-color: #8c764b;">
  <div class="min-h-screen font-serif text-slate-900 bg-[#fdfbf7]">
    <header class="border-b border-black/10 bg-[#fdfbf7]/90 backdrop-blur-xl">
      <div class="max-w-6xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between gap-6">
        <div class="text-xs font-bold tracking-[0.4em] uppercase">Maison.</div>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.4em] text-black/50"></nav>
      </div>
      <div class="max-w-6xl mx-auto px-6 lg:px-12 pb-10">
        <p class="text-[10px] uppercase tracking-[0.4em] text-black/40">Contact</p>
        <h1 class="text-4xl md:text-5xl font-light mt-3">お問い合わせ</h1>
        <p class="text-sm text-black/60 mt-4">丁寧なヒアリングで最適な提案を行います。</p>
        <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-6 lg:px-12 py-14 space-y-12 pb-20">
      <section id="top" class="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
        <div class="space-y-4">
          <h2 class="text-2xl font-bold">ご相談内容</h2>
          <p class="text-sm text-black/60">ブランドの方向性や制作範囲など、気になる点をお知らせください。</p>
          <div class="rounded-3xl border border-black/10 p-6 bg-white/70">
            <p class="text-[10px] uppercase tracking-[0.3em] text-black/40">対応範囲</p>
            <ul class="mt-3 space-y-2 text-sm text-black/60 list-disc list-inside">
              <li>ブランド設計 / 表現設計</li>
              <li>Web制作 / 運用支援</li>
              <li>制作後の改善提案</li>
            </ul>
          </div>
        </div>
        <div class="rounded-3xl border border-black/10 p-6 bg-white/70">
          <h3 class="text-lg font-bold">お問い合わせフォーム</h3>
          <div class="mt-4 space-y-3 text-sm">
            <div class="grid gap-2">
              <label class="text-xs text-black/50">会社名</label>
              <div class="h-10 rounded-full border border-black/10 bg-white"></div>
            </div>
            <div class="grid gap-2">
              <label class="text-xs text-black/50">お名前</label>
              <div class="h-10 rounded-full border border-black/10 bg-white"></div>
            </div>
            <div class="grid gap-2">
              <label class="text-xs text-black/50">お問い合わせ内容</label>
              <div class="h-28 rounded-2xl border border-black/10 bg-white"></div>
            </div>
            <button class="mt-2 px-6 py-3 bg-[var(--accent-color)] text-white text-xs font-bold tracking-[0.3em] uppercase rounded-full">Send</button>
          </div>
        </div>
      </section>

      <section id="company" class="grid gap-6 md:grid-cols-3">
        <div class="rounded-2xl border border-black/10 p-5 bg-white/70">
          <p class="text-xs text-black/40">Mail</p>
          <p class="text-sm font-bold mt-2">hello@maison-elegant.jp</p>
        </div>
        <div class="rounded-2xl border border-black/10 p-5 bg-white/70">
          <p class="text-xs text-black/40">Phone</p>
          <p class="text-sm font-bold mt-2">03-0000-0000</p>
        </div>
        <div class="rounded-2xl border border-black/10 p-5 bg-white/70">
          <p class="text-xs text-black/40">Office</p>
          <p class="text-sm font-bold mt-2">東京 / 表参道</p>
        </div>
      </section>

      <section class="rounded-3xl border border-black/10 bg-white/70 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p class="text-sm font-bold">お打ち合わせのご相談</p>
          <p class="text-sm text-black/60 mt-2">オンラインでの初回相談も承ります。</p>
        </div>
        <button class="px-6 py-3 bg-[var(--accent-color)] text-white text-xs font-bold tracking-[0.3em] uppercase rounded-full">Book a Call</button>
      </section>
    </main>
  </div>
</div>
`
};
