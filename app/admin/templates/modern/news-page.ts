import type { TemplateVariant } from '../types';

export const modernNewsPageTemplate: TemplateVariant = {
  id: 'variant-modern-news-page',
  templateId: 'template-modern',
  name: 'News Detail',
  pageSlug: 'news-page',
  description: 'Modern / News detail layout with editorial feel',
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

        <nav data-nav-fixed class="hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--text-color)]">
          <a data-page-slug="top" data-page-hash="concept" href="/#concept" class="hover:text-[var(--accent-color)] transition-colors">Concept</a>
          <a data-page-slug="top" data-page-hash="service" href="/#service" class="hover:text-[var(--accent-color)] transition-colors">Service</a>
          <a data-page-slug="top" data-page-hash="works" href="/#works" class="hover:text-[var(--accent-color)] transition-colors">Works</a>
          <a data-page-slug="news" href="/news" class="hover:text-[var(--accent-color)] transition-colors">News</a>
          <a data-page-slug="blog" href="/blog" class="hover:text-[var(--accent-color)] transition-colors">Blog</a>
          <a data-page-slug="contact" href="/contact" class="px-8 py-4 bg-[var(--main-color)] text-white text-[9px] hover:bg-[var(--accent-color)] transition-all">Get in touch</a>
        </nav>

        <label for="menu-toggle-detail" class="lg:hidden cursor-pointer p-2 z-[110]">
          <div class="w-6 h-5 flex flex-col justify-between">
            <span class="w-full h-[2px] bg-[var(--main-color)]"></span>
            <span class="w-full h-[2px] bg-[var(--main-color)]"></span>
            <span class="w-full h-[2px] bg-[var(--main-color)]"></span>
          </div>
        </label>
      </div>
      <input type="checkbox" id="menu-toggle-detail" class="sr-only peer" />
      <div class="fixed inset-0 bg-[var(--main-dark)] translate-x-full peer-checked:translate-x-0 transition-transform duration-500 ease-in-out lg:hidden z-[105] flex flex-col items-center justify-center">
        <nav class="flex flex-col items-center gap-8 text-white text-xs font-bold uppercase tracking-[0.5em]">
          <a data-page-slug="top" data-page-hash="concept" href="/#concept" onclick="document.getElementById('menu-toggle-detail').checked=false">Concept</a>
          <a data-page-slug="top" data-page-hash="service" href="/#service" onclick="document.getElementById('menu-toggle-detail').checked=false">Service</a>
          <a data-page-slug="top" data-page-hash="works" href="/#works" onclick="document.getElementById('menu-toggle-detail').checked=false">Works</a>
          <a data-page-slug="news" href="/news" onclick="document.getElementById('menu-toggle-detail').checked=false">News</a>
          <a data-page-slug="blog" href="/blog" onclick="document.getElementById('menu-toggle-detail').checked=false">Blog</a>
          <a data-page-slug="contact" href="/contact" class="mt-4 px-10 py-5 bg-[var(--accent-color)]" onclick="document.getElementById('menu-toggle-detail').checked=false">Get in touch</a>
        </nav>
      </div>
    </header>

    <main class="pt-32 md:pt-48">
      <article>
        <header class="max-w-4xl mx-auto px-6 md:px-10 mb-16 md:mb-24 text-center">
          <div class="flex items-center justify-center gap-4 mb-8">
            <span class="text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase">2026.03.07</span>
            <span class="w-8 h-[1px] bg-slate-200"></span>
            <span class="text-[10px] font-bold tracking-[0.4em] text-[var(--accent-color)] uppercase">Update</span>
          </div>
          <h1 class="text-3xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-12">
            ブランド刷新プロジェクトを公開。<br/>新たなビジョンへの第一歩。
          </h1>
          <div class="flex flex-wrap justify-center gap-3">
            <span class="px-4 py-1.5 border border-black/5 text-[9px] font-bold uppercase tracking-widest rounded-full">Identity</span>
            <span class="px-4 py-1.5 border border-black/5 text-[9px] font-bold uppercase tracking-widest rounded-full">Web Design</span>
          </div>
        </header>

        <div class="max-w-7xl mx-auto px-6 md:px-10 mb-20 md:mb-32">
          <div class="aspect-[21/9] bg-slate-100 overflow-hidden shadow-2xl shadow-black/5">
            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1600" class="w-full h-full object-cover" alt="Main Visual">
          </div>
        </div>

        <div class="max-w-3xl mx-auto px-6 md:px-10 pb-32">
          <div class="prose prose-slate lg:prose-xl">
            <p class="text-xl md:text-2xl font-light leading-relaxed text-[var(--text-color)] italic mb-16 border-l-4 border-[var(--accent-color)] pl-8">
              「デザインは単なる装飾ではなく、ビジネスの意思決定を視覚化する言語である。」この信念のもと、Studio Modernはブランドの刷新を行いました。
            </p>

            <h2 class="text-2xl md:text-4xl font-bold tracking-tight mt-20 mb-8" id="top">背景と目的</h2>
            <p class="text-[var(--text-light)] leading-relaxed mb-8">
              情報が飽和する現代において、ブランドが生き残るためには「ノイズ」を削ぎ落とし、本質的な価値だけを伝える「静寂」の美学が必要です。今回の刷新では、これまで蓄積してきた実績と知見を整理し、より直感的に私たちのフィロソフィーを体験いただけるよう設計しました。
            </p>

            <h2 class="text-2xl md:text-4xl font-bold tracking-tight mt-20 mb-8" id="features">改善ポイント</h2>
            <div class="space-y-6 mb-12">
              <div class="flex gap-6 items-start group">
                <span class="text-[var(--accent-color)] font-mono text-lg font-bold opacity-30 group-hover:opacity-100 transition-opacity">01</span>
                <div>
                  <h4 class="text-xl font-bold mb-2">情報の流れを再設計</h4>
                  <p class="text-[var(--text-light)] text-sm">ユーザーの視線誘導を科学し、最も伝えたいメッセージへ自然にたどり着く導線を構築。</p>
                </div>
              </div>
              <div class="flex gap-6 items-start group border-t border-black/5 pt-8">
                <span class="text-[var(--accent-color)] font-mono text-lg font-bold opacity-30 group-hover:opacity-100 transition-opacity">02</span>
                <div>
                  <h4 class="text-xl font-bold mb-2">モバイル・ファーストの徹底</h4>
                  <p class="text-[var(--text-light)] text-sm">あらゆるデバイスで等しく高級感のある体験を提供するため、レスポンシブデザインを1px単位で調整。</p>
                </div>
              </div>
            </div>

            <div class="mt-24 pt-12 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-8">
              <span class="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">Share this news</span>
              <div class="flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em]">
                <a href="#" class="hover:text-[var(--accent-color)] transition-colors">Twitter (X)</a>
                <a href="#" class="hover:text-[var(--accent-color)] transition-colors">Facebook</a>
                <a href="#" class="hover:text-[var(--accent-color)] transition-colors">Copy Link</a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section id="service" class="py-32 bg-[#f8fafc] px-6 md:px-10">
        <div class="max-w-6xl mx-auto">
          <div class="flex items-end justify-between mb-16">
            <h3 class="text-3xl md:text-4xl font-black tracking-tighter uppercase">Related News</h3>
            <a data-page-slug="news" href="/news" class="text-[9px] font-bold uppercase tracking-[0.3em] border-b border-black pb-2 hover:text-[var(--accent-color)] transition-all">Back to List</a>
          </div>
          <div class="grid md:grid-cols-2 gap-10 md:gap-16">
            <a data-page-slug="news-page" href="/news-page" class="group block">
              <article class="cursor-pointer">
                <div class="aspect-video overflow-hidden mb-6">
                  <img src="https://images.unsplash.com/photo-1542744095-2ad4870706d8?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Related 01">
                </div>
                <p class="text-[9px] font-bold tracking-[0.3em] text-slate-400 mb-2 uppercase">2026.02.21</p>
                <h4 class="text-xl font-bold group-hover:text-[var(--accent-color)] transition-colors">次世代デザイン・サミット 2026 登壇決定</h4>
              </article>
            </a>
            <a data-page-slug="news-page" href="/news-page" class="group block">
              <article class="cursor-pointer">
                <div class="aspect-video overflow-hidden mb-6">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Related 02">
                </div>
                <p class="text-[9px] font-bold tracking-[0.3em] text-slate-400 mb-2 uppercase">2026.02.10</p>
                <h4 class="text-xl font-bold group-hover:text-[var(--accent-color)] transition-colors">新規サービス「Pal-Opt」ベータ版公開</h4>
              </article>
            </a>
          </div>
        </div>
      </section>

      <section id="company" class="px-6 md:px-10 py-32 bg-[var(--main-dark)] text-white overflow-hidden relative">
        <div class="max-w-5xl mx-auto text-center relative z-10">
          <p class="text-[9px] font-bold tracking-[0.6em] uppercase text-[var(--accent-color)] mb-8">Get in touch</p>
          <h2 class="text-3xl md:text-5xl font-bold tracking-tighter mb-12">プロジェクトのご相談はこちらから</h2>
          <a data-page-slug="contact" href="/contact" class="inline-flex items-center justify-center px-12 py-5 bg-white text-[var(--main-dark)] text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[var(--accent-color)] hover:text-white transition-all">Contact Us</a>
        </div>
      </section>
    </main>

    <footer class="py-20 md:py-32 bg-[var(--main-dark)] text-white px-6 md:px-10">
      <div class="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-20">
        <div>
          <h2 class="text-5xl md:text-[clamp(4rem,10vw,8rem)] font-black tracking-tighter mb-8 md:mb-12 italic opacity-20 leading-none uppercase">Studio.</h2>
          <p class="text-white/40 text-[9px] font-bold tracking-[0.5em] uppercase">© 2026 Studio Modern.</p>
        </div>
        <div class="flex flex-col gap-6 text-[9px] font-bold uppercase tracking-[0.3em] w-full md:w-auto">
          <div class="flex gap-8">
            <a href="#" class="hover:text-[var(--accent-color)] transition-colors">Instagram</a>
            <a href="#" class="hover:text-[var(--accent-color)] transition-colors">X</a>
            <a href="#" class="hover:text-[var(--accent-color)] transition-colors">LinkedIn</a>
          </div>
          <span class="text-white/20">Contact: hello@studio-modern.com</span>
        </div>
      </div>
    </footer>
  </div>
</div>
`
};