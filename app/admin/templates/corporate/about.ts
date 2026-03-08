import type { TemplateVariant } from '../types';

export const corporateAboutTemplate: TemplateVariant = {
  id: 'variant-corporate-about',
  templateId: 'template-corporate',
  name: 'About',
  pageSlug: 'about',
  description: 'Corporate / About page layout',
  html: `
<div class="template-root" style="--accent-color: #1e40af;">
  <div class="min-h-screen font-sans text-slate-900 bg-white">
    <header class="border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div class="max-w-6xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between gap-6">
        <div class="text-xs font-black tracking-[0.3em] uppercase">Corporate.</div>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500"></nav>
      </div>
      <div class="max-w-6xl mx-auto px-6 lg:px-10 pb-10">
        <p class="text-[10px] uppercase tracking-[0.4em] text-slate-400">About</p>
        <h1 class="text-4xl md:text-5xl font-black mt-3">企業概要</h1>
        <p class="text-sm text-slate-500 mt-4 max-w-2xl">事業の方針・組織体制・品質への取り組みをご紹介します。</p>
        <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-6 lg:px-10 py-12 space-y-16 pb-20">
      <section id="top" class="grid gap-8 lg:grid-cols-2">
        <div class="space-y-4">
          <h2 class="text-2xl font-bold">ミッション</h2>
          <p class="text-sm text-slate-600">中長期的な成果に繋がるコミュニケーション基盤を構築します。</p>
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-bold">ビジョン</h3>
          <p class="text-sm text-slate-600">信頼性と再現性を担保した制作体制で事業成長に貢献します。</p>
        </div>
      </section>

      <section id="features" class="grid gap-6 md:grid-cols-3">
        <div class="rounded-2xl border border-slate-200 p-6">
          <p class="text-sm font-bold">品質管理</p>
          <p class="text-sm text-slate-600 mt-3">制作プロセスの標準化とレビュー体制を整備。</p>
        </div>
        <div class="rounded-2xl border border-slate-200 p-6">
          <p class="text-sm font-bold">運用支援</p>
          <p class="text-sm text-slate-600 mt-3">公開後の改善提案まで一貫して対応。</p>
        </div>
        <div class="rounded-2xl border border-slate-200 p-6">
          <p class="text-sm font-bold">体制</p>
          <p class="text-sm text-slate-600 mt-3">専任チームが継続的に伴走します。</p>
        </div>
      </section>

      <section id="company" class="grid gap-8 lg:grid-cols-2">
        <div class="space-y-4">
          <h3 class="text-xl font-bold">会社情報</h3>
          <dl class="space-y-3 text-sm text-slate-600">
            <div class="flex justify-between border-b border-slate-100 pb-2"><dt>会社名</dt><dd>Corporate Studio Inc.</dd></div>
            <div class="flex justify-between border-b border-slate-100 pb-2"><dt>所在地</dt><dd>東京 / 丸の内</dd></div>
            <div class="flex justify-between border-b border-slate-100 pb-2"><dt>設立</dt><dd>2012年</dd></div>
            <div class="flex justify-between border-b border-slate-100 pb-2"><dt>事業内容</dt><dd>Web制作 / 運用支援</dd></div>
          </dl>
        </div>
        <div class="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h4 class="text-lg font-bold">ご相談はこちら</h4>
          <p class="text-sm text-slate-600 mt-3">課題整理からご支援します。</p>
          <button class="mt-6 px-6 py-3 bg-[var(--accent-color)] text-white text-xs font-bold tracking-[0.3em] uppercase rounded-full">Contact</button>
        </div>
      </section>
    </main>
  </div>
</div>
`
};
