import type { TemplateVariant } from '../types';

export const corporateContactTemplate: TemplateVariant = {
  id: 'variant-corporate-contact',
  templateId: 'template-corporate',
  name: 'Contact',
  pageSlug: 'contact',
  description: 'Corporate / Contact page layout',
  html: `
<div class="template-root" style="--accent-color: #1e40af;">
  <div class="min-h-screen font-sans text-slate-900 bg-white">
    <header class="border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div class="max-w-6xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between gap-6">
        <div class="text-xs font-black tracking-[0.3em] uppercase">Corporate.</div>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500"></nav>
      </div>
      <div class="max-w-6xl mx-auto px-6 lg:px-10 pb-10">
        <p class="text-[10px] uppercase tracking-[0.4em] text-slate-400">Contact</p>
        <h1 class="text-4xl md:text-5xl font-black mt-3">お問い合わせ</h1>
        <p class="text-sm text-slate-500 mt-4">お見積もり・ご相談はフォームより承ります。</p>
        <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-6 lg:px-10 py-12 space-y-12 pb-20">
      <section id="top" class="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
        <div class="space-y-4">
          <h2 class="text-2xl font-bold">ご相談内容</h2>
          <p class="text-sm text-slate-600">制作の目的や課題、納期などをご共有ください。</p>
          <div class="rounded-3xl border border-slate-200 p-6 bg-slate-50">
            <p class="text-[10px] uppercase tracking-[0.3em] text-slate-400">対応範囲</p>
            <ul class="mt-3 space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>Webサイト制作 / 改修</li>
              <li>情報設計 / 導線改善</li>
              <li>運用支援 / 施策設計</li>
            </ul>
          </div>
        </div>
        <div class="rounded-3xl border border-slate-200 p-6 bg-white">
          <h3 class="text-lg font-bold">お問い合わせフォーム</h3>
          <div class="mt-4 space-y-3 text-sm">
            <div class="grid gap-2">
              <label class="text-xs text-slate-500">会社名</label>
              <div class="h-10 rounded-full border border-slate-200 bg-slate-50"></div>
            </div>
            <div class="grid gap-2">
              <label class="text-xs text-slate-500">お名前</label>
              <div class="h-10 rounded-full border border-slate-200 bg-slate-50"></div>
            </div>
            <div class="grid gap-2">
              <label class="text-xs text-slate-500">お問い合わせ内容</label>
              <div class="h-28 rounded-2xl border border-slate-200 bg-slate-50"></div>
            </div>
            <button class="mt-2 px-6 py-3 bg-[var(--accent-color)] text-white text-xs font-bold tracking-[0.3em] uppercase rounded-full">Send</button>
          </div>
        </div>
      </section>

      <section id="company" class="grid gap-6 md:grid-cols-3">
        <div class="rounded-2xl border border-slate-200 p-5">
          <p class="text-xs text-slate-400">Mail</p>
          <p class="text-sm font-bold mt-2">info@corporate.jp</p>
        </div>
        <div class="rounded-2xl border border-slate-200 p-5">
          <p class="text-xs text-slate-400">Phone</p>
          <p class="text-sm font-bold mt-2">03-0000-0000</p>
        </div>
        <div class="rounded-2xl border border-slate-200 p-5">
          <p class="text-xs text-slate-400">Office</p>
          <p class="text-sm font-bold mt-2">東京 / 丸の内</p>
        </div>
      </section>

      <section class="rounded-3xl border border-slate-200 bg-slate-50 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p class="text-sm font-bold">お打ち合わせのご相談</p>
          <p class="text-sm text-slate-500 mt-2">オンラインでの相談も可能です。</p>
        </div>
        <button class="px-6 py-3 bg-[var(--accent-color)] text-white text-xs font-bold tracking-[0.3em] uppercase rounded-full">Book a Call</button>
      </section>
    </main>
  </div>
</div>
`
};
