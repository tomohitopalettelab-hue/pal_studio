import type { TemplateVariant } from '../types';

export const modernAboutTemplate: TemplateVariant = {
  id: 'variant-modern-about',
  templateId: 'template-modern',
  name: 'About',
  pageSlug: 'about',
  description: 'Modern / About page layout',
  html: `
<div class="template-root" style="--accent-color: #3b82f6;">
  <div class="min-h-screen font-sans text-slate-900 bg-white">
    <header class="border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div class="max-w-6xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between gap-6">
        <div class="text-sm font-black tracking-[0.3em] uppercase">Studio.</div>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500"></nav>
      </div>
      <div class="max-w-6xl mx-auto px-6 lg:px-10 pb-10">
        <p class="text-[10px] uppercase tracking-[0.4em] text-slate-400">About</p>
        <h1 class="text-4xl md:text-5xl font-black mt-3">会社の背景と指針</h1>
        <p class="text-sm text-slate-500 mt-4 max-w-2xl">
          私たちは「成果が続くデザイン」を軸に、戦略設計から運用まで一貫して伴走します。
        </p>
        <div class="mt-6 h-1 w-16 bg-[var(--accent-color)] rounded-full"></div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-6 lg:px-10 py-12 space-y-16 pb-20">
      <section id="top" class="grid gap-8 lg:grid-cols-2 items-start">
        <div class="space-y-4">
          <h2 class="text-2xl font-bold">ミッション</h2>
          <p class="text-sm text-slate-600 leading-relaxed">ブランドの本質を言語化し、体験として設計すること。プロジェクトの「意図」と「成果」を一致させます。</p>
          <div class="grid grid-cols-3 gap-4 pt-4">
            <div class="rounded-2xl border border-slate-200 p-4">
              <p class="text-[10px] text-slate-400">Projects</p>
              <p class="text-xl font-black">120+</p>
            </div>
            <div class="rounded-2xl border border-slate-200 p-4">
              <p class="text-[10px] text-slate-400">Clients</p>
              <p class="text-xl font-black">80+</p>
            </div>
            <div class="rounded-2xl border border-slate-200 p-4">
              <p class="text-[10px] text-slate-400">Retention</p>
              <p class="text-xl font-black">92%</p>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-bold">ビジョン</h3>
          <p class="text-sm text-slate-600 leading-relaxed">デザインの力で、事業の意思決定を軽くする。伝わる情報設計と、長く愛される表現を両立します。</p>
          <div class="rounded-2xl bg-slate-50 p-6">
            <p class="text-[11px] font-bold text-slate-500 uppercase tracking-[0.3em]">Value</p>
            <p class="text-sm text-slate-600 mt-3">「正しく伝わる美しさ」を追求し、成果の出る土台を設計します。</p>
          </div>
        </div>
      </section>

      <section id="concept" class="space-y-6">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold">私たちの価値観</h3>
          <span class="text-[10px] text-slate-400 uppercase tracking-[0.3em]">Principles</span>
        </div>
        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-2xl border border-slate-200 p-6">
            <p class="text-sm font-bold">設計ファースト</p>
            <p class="text-sm text-slate-600 mt-3">誰に、何を、どの順で伝えるかを起点に制作を進めます。</p>
          </div>
          <div class="rounded-2xl border border-slate-200 p-6">
            <p class="text-sm font-bold">検証と改善</p>
            <p class="text-sm text-slate-600 mt-3">公開後も計測し、運用改善を前提にした設計を行います。</p>
          </div>
          <div class="rounded-2xl border border-slate-200 p-6">
            <p class="text-sm font-bold">長期の伴走</p>
            <p class="text-sm text-slate-600 mt-3">一度きりではなく、成長に合わせて最適化します。</p>
          </div>
        </div>
      </section>

      <section id="features" class="grid gap-8 lg:grid-cols-2">
        <div class="space-y-4">
          <h3 class="text-xl font-bold">沿革</h3>
          <ol class="space-y-4 text-sm text-slate-600">
            <li class="flex items-start gap-4"><span class="text-slate-400">2018</span> 事業開始、ブランド設計に特化した制作体制を構築。</li>
            <li class="flex items-start gap-4"><span class="text-slate-400">2021</span> クリエイティブと運用支援を統合するチームへ拡張。</li>
            <li class="flex items-start gap-4"><span class="text-slate-400">2024</span> 多拠点運用とリモート制作のワークフローを確立。</li>
          </ol>
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-bold">主要メンバー</h3>
          <div class="space-y-3">
            <div class="rounded-2xl border border-slate-200 p-4">
              <p class="text-sm font-bold">代表 / クリエイティブディレクター</p>
              <p class="text-sm text-slate-600 mt-2">ブランド戦略と体験設計を統括。</p>
            </div>
            <div class="rounded-2xl border border-slate-200 p-4">
              <p class="text-sm font-bold">プロダクトデザイン責任者</p>
              <p class="text-sm text-slate-600 mt-2">UI/UXと実装品質の最適化を担当。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="company" class="grid gap-8 lg:grid-cols-2">
        <div class="space-y-4">
          <h3 class="text-xl font-bold">会社概要</h3>
          <dl class="space-y-3 text-sm text-slate-600">
            <div class="flex justify-between border-b border-slate-100 pb-2"><dt>会社名</dt><dd>Studio Modern Inc.</dd></div>
            <div class="flex justify-between border-b border-slate-100 pb-2"><dt>所在地</dt><dd>東京 / 渋谷</dd></div>
            <div class="flex justify-between border-b border-slate-100 pb-2"><dt>設立</dt><dd>2018年</dd></div>
            <div class="flex justify-between border-b border-slate-100 pb-2"><dt>事業内容</dt><dd>ブランド設計 / Web制作</dd></div>
          </dl>
        </div>
        <div class="rounded-3xl bg-slate-50 p-8">
          <h4 class="text-lg font-bold">ご相談はこちら</h4>
          <p class="text-sm text-slate-600 mt-3">課題や目的を整理するところからご一緒します。</p>
          <button class="mt-6 px-6 py-3 bg-[var(--accent-color)] text-white text-xs font-bold tracking-[0.3em] uppercase rounded-full">Contact</button>
        </div>
      </section>
    </main>
  </div>
</div>
`
};
