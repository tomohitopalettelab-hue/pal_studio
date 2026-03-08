import type { TemplateVariant } from '../types';

export const modernBlogPageTemplate: TemplateVariant = {
  id: 'variant-modern-blog-page',
  templateId: 'template-modern',
  name: 'Blog Detail',
  pageSlug: 'blog-page',
  description: 'Modern / Rich editorial blog detail layout',
  html: `
<div class="template-root" style="--main-color: #0f172a; --main-dark: #111827; --accent-color: #3b82f6; --text-color: #0f172a; --text-light: #64748b; --bg-color: #ffffff;">
  <div class="min-h-screen font-sans text-[var(--text-color)] bg-[var(--bg-color)] selection:bg-[var(--accent-color)] selection:text-white antialiased leading-relaxed">
    
    <header class="fixed w-full z-[100] bg-[var(--bg-color)]/80 backdrop-blur-xl border-b border-black/[0.03]">
      <div class="max-w-[1600px] mx-auto px-6 md:px-10 h-20 md:h-24 flex items-center justify-between">
        <div class="flex items-center gap-4 group cursor-pointer">
          <div class="relative w-8 h-8 md:w-10 md:h-10 bg-[var(--main-color)] flex items-center justify-center overflow-hidden">
            <span class="text-white font-bold text-sm md:text-base">M</span>
          </div>
          <h1 class="text-lg md:text-xl font-black tracking-[0.2em] uppercase">Studio<span class="text-[var(--accent-color)]">.</span></h1>
        </div>
        <div class="hidden lg:flex items-center gap-6">
          <nav data-sync="site-pages" class="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--text-color)]">
            <a href="/" class="hover:text-[var(--accent-color)] transition-colors">Top</a>
          </nav>
          <a data-page-slug="contact" href="/contact" class="px-8 py-4 bg-[var(--main-color)] text-white text-[9px] hover:bg-[var(--accent-color)] transition-all">Get in touch</a>
        </div>
        <label for="menu-toggle-blog-detail" class="lg:hidden cursor-pointer p-2 z-[110]">
          <div class="w-6 h-5 flex flex-col justify-between">
            <span class="w-full h-[2px] bg-[var(--main-color)]"></span>
            <span class="w-full h-[2px] bg-[var(--main-color)]"></span>
            <span class="w-full h-[2px] bg-[var(--main-color)]"></span>
          </div>
        </label>
      </div>
      <input type="checkbox" id="menu-toggle-blog-detail" class="sr-only peer" />
      <div class="fixed inset-0 bg-[var(--main-dark)] translate-x-full peer-checked:translate-x-0 transition-transform duration-500 lg:hidden z-[105] flex flex-col items-center justify-center text-white">
        <nav data-sync="site-pages" class="flex flex-col items-center gap-8 text-xs font-bold uppercase tracking-[0.5em]">
          <a href="/" onclick="document.getElementById('menu-toggle-blog-detail').checked=false">Top</a>
        </nav>
        <a data-page-slug="contact" href="/contact" class="mt-6 px-10 py-5 bg-[var(--accent-color)] text-white text-xs font-bold uppercase tracking-[0.5em]" onclick="document.getElementById('menu-toggle-blog-detail').checked=false">Get in touch</a>
      </div>
    </header>

    <main class="pt-32 md:pt-48">
      <article>
        <section id="top" class="max-w-4xl mx-auto px-6 md:px-10 mb-16">
          <div class="flex items-center gap-4 mb-8 text-[10px] font-bold uppercase tracking-[0.4em]">
            <span class="text-slate-400">2026.03.07</span>
            <span class="text-[var(--accent-color)]">/ Strategy</span>
          </div>
          <h1 class="text-3xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-10">成果が続くサイト設計の考え方：分析・設計・改善のループ。</h1>
          
          <div class="flex items-center gap-4 py-8 border-y border-black/5">
            <div class="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
               <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" class="w-full h-full object-cover" alt="Author">
            </div>
            <div>
              <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400">Written by</p>
              <p class="text-sm font-bold">佐藤 健太 / Director</p>
            </div>
          </div>
        </section>

        <div class="max-w-7xl mx-auto px-6 md:px-10 pb-32 grid lg:grid-cols-12 gap-16 md:gap-24">
          
          <section id="concept" class="lg:col-span-8">
            <div class="prose prose-slate lg:prose-xl max-w-none">
              <p class="text-xl md:text-2xl font-light leading-relaxed text-[var(--text-color)] italic mb-16 border-l-4 border-[var(--accent-color)] pl-8">
                「Webサイトは公開してからが本番である」という言葉は、今や使い古された表現かもしれません。しかし、真に運用フェーズまで見据えた設計ができているサイトは、驚くほど少ないのが現状です。
              </p>

              <h2 class="text-2xl md:text-4xl font-bold tracking-tight mt-16 mb-8" id="intro">なぜ設計が「続く」ことが重要なのか</h2>
              <p class="text-[var(--text-light)] leading-relaxed mb-8">
                ビジネス環境は日々変化します。新商品の追加、ターゲットの微調整、市場トレンドの変化。サイトがこれらに柔軟に対応できなければ、公開から数ヶ月で「過去の遺物」となってしまいます。私たちは、設計段階で「不確実な未来」を許容する余白をどのように作るべきかを追求しています。
              </p>

              <div class="my-16 p-8 md:p-12 bg-slate-50 border-l-2 border-[var(--main-color)]">
                <h4 class="text-lg font-bold mb-4 uppercase tracking-wider">この記事のポイント</h4>
                <ul class="space-y-4 text-sm md:text-base font-medium">
                  <li class="flex gap-4"><span class="text-[var(--accent-color)]">●</span> 1年後を予測しない「モジュール型」の設計</li>
                  <li class="flex gap-4"><span class="text-[var(--accent-color)]">●</span> 現場の更新負荷を物理的に下げるコンポーネント管理</li>
                  <li class="flex gap-4"><span class="text-[var(--accent-color)]">●</span> データに基づいた意思決定を「仕組み」として組み込む方法</li>
                </ul>
              </div>

              <h2 class="text-2xl md:text-4xl font-bold tracking-tight mt-20 mb-8" id="method">モジュール型設計の導入</h2>
              <p class="text-[var(--text-light)] leading-relaxed mb-8">
                特定のページレイアウトに固執するのではなく、要素をパーツ（モジュール）として定義。これにより、エンジニアの工数を最小限に抑えつつ、マーケターが自由にページを拡張できる環境を整えます。
              </p>

              <figure class="my-16">
                <img src="https://images.unsplash.com/photo-1551288049-bbbda536ad39?auto=format&fit=crop&q=80&w=1200" class="w-full aspect-video object-cover" alt="Method Illustration">
                <figcaption class="text-center text-[10px] uppercase tracking-widest text-slate-400 mt-4">Fig.01 - 運用フローの最適化プロセス</figcaption>
              </figure>
            </div>

            <div class="mt-24 pt-12 border-t border-black/5 flex flex-wrap items-center gap-8">
              <span class="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-400">Share this Perspective</span>
              <div class="flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em]">
                <a href="#" class="hover:text-[var(--accent-color)] transition-colors">Twitter</a>
                <a href="#" class="hover:text-[var(--accent-color)] transition-colors">Facebook</a>
                <a href="#" class="hover:text-[var(--accent-color)] transition-colors">Pocket</a>
              </div>
            </div>
          </section>

          <aside class="lg:col-span-4 space-y-20">
            <div class="sticky top-32 space-y-16">
              <div>
                <h3 class="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-8 border-b border-black/5 pb-4">Blog Archive</h3>
                <div id="archive" class="space-y-10">
                  <p class="text-sm text-slate-400">公開記事がここに表示されます。</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section class="px-6 md:px-10 py-32 bg-[var(--main-dark)] text-white overflow-hidden relative">
        <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div class="text-center md:text-left">
            <p class="text-[9px] font-bold tracking-[0.6em] uppercase text-[var(--accent-color)] mb-4">Work with us</p>
            <h2 class="text-3xl font-bold tracking-tight">運用を見据えた設計のご相談</h2>
          </div>
          <a data-page-slug="contact" href="/contact" class="inline-flex items-center justify-center px-12 py-5 bg-white text-[var(--main-dark)] text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[var(--accent-color)] hover:text-white transition-all">Contact Us</a>
        </div>
      </section>
    </main>

    <footer class="py-20 md:py-32 bg-[var(--main-dark)] text-white px-6 md:px-10">
      <div class="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-20">
        <div>
          <h2 class="text-5xl md:text-[clamp(4rem,10vw,8rem)] font-black tracking-tighter mb-8 md:mb-12 italic opacity-20 uppercase leading-none">Studio.</h2>
          <p class="text-white/40 text-[9px] font-bold tracking-[0.5em] uppercase">© 2026 Studio Modern.</p>
        </div>
        <div class="flex flex-col gap-6 text-[9px] font-bold uppercase tracking-[0.3em]">
          <div class="flex gap-8">
            <a href="#" class="hover:text-[var(--accent-color)] transition-colors">Instagram</a>
            <a href="#" class="hover:text-[var(--accent-color)] transition-colors">X</a>
            <a href="#" class="hover:text-[var(--accent-color)] transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>
`
};