import type { TemplateVariant } from '../types';

export const warmNewsPageTemplate: TemplateVariant = {
  id: 'variant-warm-news-page',
  templateId: 'template-warm',
  name: 'News Detail',
  pageSlug: 'news-page',
  description: 'Warm / ニュース詳細ページ',
  html: `
<div class="template-root" style="--main-color: #c59500; --main-dark: #9a7500; --accent-color: #FDFBF7; --text-color: #333333; --text-light: #6b7280; --bg-color: #ffffff;">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&family=Quicksand:wght@600;700&display=swap');
    .template-root { font-family: 'Noto Sans JP', sans-serif; }
    .template-root .font-en { font-family: 'Quicksand', sans-serif; }
    .template-root .bubble-field { position: absolute; inset: 0; pointer-events: none; z-index: 5; }
    .template-root .bubble { position: absolute; border-radius: 9999px; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0)); opacity: 0.5; filter: blur(0.5px); animation: warmFloat 16s ease-in-out infinite; }
    .template-root .bubble-warm { background: radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--main-color) 25%, transparent), transparent); }
    @keyframes warmFloat { 0% { transform: translateY(0); } 50% { transform: translateY(-18px); } 100% { transform: translateY(0); } }
    .template-root .article-body { line-height: 2; }
    .template-root .article-body p { margin-bottom: 1.5rem; }
    .template-root .article-body h2 { font-size: 1.5rem; font-weight: 900; margin: 2.5rem 0 1rem; padding-left: 1rem; border-left: 4px solid var(--main-color); }
    .template-root .article-body h3 { font-size: 1.25rem; font-weight: 900; margin: 2rem 0 0.75rem; }
    .template-root .article-body ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; }
    .template-root .article-body li { margin-bottom: 0.5rem; }
    .template-root .article-body blockquote { border-left: 4px solid var(--main-color); padding: 1rem 1.5rem; background: #F4F7F9; border-radius: 0 1rem 1rem 0; margin: 1.5rem 0; font-weight: 700; color: var(--text-light); }
  </style>
  <div class="min-h-screen text-[var(--text-color)] bg-[var(--accent-color)]">
    <header class="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 md:px-10 h-20 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-[var(--main-color)] flex items-center justify-center text-white font-black rounded-full text-sm">W</div>
          <div class="font-black text-xl tracking-tight">Company <span class="text-[var(--main-color)] font-bold">Name</span></div>
        </div>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-6 text-sm font-black tracking-widest">
          <a href="#concept" class="hover:text-[var(--main-color)] transition-colors">コンセプト</a>
          <a href="#features" class="hover:text-[var(--main-color)] transition-colors">強み</a>
          <a href="#service" class="hover:text-[var(--main-color)] transition-colors">事業内容</a>
          <a href="#company" class="bg-[var(--main-color)] text-white px-5 py-2 rounded-full hover:opacity-80 transition-all">お問い合わせ</a>
        </nav>
      </div>
    </header>

    <main>
      <section id="top" class="pt-32 pb-8 bg-[#F4F7F9] relative overflow-hidden">
        <div class="max-w-4xl mx-auto px-6 relative z-10">
          <nav class="mb-6 text-xs font-bold text-gray-400 flex items-center gap-2">
            <a href="/" class="hover:text-[var(--main-color)] transition-colors">HOME</a>
            <span class="text-gray-300">&gt;</span>
            <a href="/news" data-page-slug="news" class="hover:text-[var(--main-color)] transition-colors">ニュース</a>
            <span class="text-gray-300">&gt;</span>
            <span class="text-[var(--main-color)]">記事詳細</span>
          </nav>
        </div>
      </section>

      <section class="py-12 bg-white">
        <div class="max-w-4xl mx-auto px-6">
          <article>
            <div class="flex items-center gap-3 mb-6">
              <span class="text-sm font-en font-bold text-gray-400">2025.04.01</span>
              <span class="bg-[#F4F7F9] text-[var(--main-color)] text-xs font-bold px-3 py-1 rounded-full">NEWS</span>
            </div>
            <h1 class="text-3xl md:text-4xl font-black mb-8 leading-tight">新サービス提供開始のお知らせ</h1>

            <div class="rounded-[30px] overflow-hidden mb-10 aspect-video">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover" alt="Article image">
            </div>

            <div class="article-body text-[var(--text-light)]">
              <p>この度、新たなサービスの提供を開始いたしました。お客様のビジネス課題に合わせた多様な支援プランをご用意しております。</p>

              <h2>サービス概要</h2>
              <p>長年の実績と専門知識を活かし、お客様の課題解決に最適なソリューションをご提案いたします。詳細については下記をご覧ください。</p>

              <blockquote>私たちは、お客様のビジネスパートナーとして持続的な成長をサポートいたします。</blockquote>

              <h2>お問い合わせ</h2>
              <p>サービスに関するご質問・ご相談はお気軽にお問い合わせください。</p>
            </div>

            <div class="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
              <a href="/news" data-page-slug="news" class="inline-flex items-center gap-2 bg-[var(--accent-color)] text-[var(--text-color)] font-black px-8 py-3 rounded-full hover:shadow-md transition-all text-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                ニュース一覧へ戻る
              </a>
            </div>
          </article>
        </div>
      </section>

      <section class="py-16 bg-[#F4F7F9]">
        <div class="max-w-4xl mx-auto px-6">
          <h3 class="font-en font-bold text-sm tracking-[0.3em] text-[var(--main-color)] uppercase mb-4">RELATED NEWS</h3>
          <h4 class="text-2xl font-black mb-8">関連ニュース</h4>
          <div class="grid md:grid-cols-2 gap-6">
            <a href="/news/news-page" class="group block bg-white rounded-[24px] p-5 hover:shadow-lg transition-shadow">
              <div class="flex gap-4 items-start">
                <div class="w-24 h-20 bg-gray-100 rounded-[14px] overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400" class="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="Related">
                </div>
                <div>
                  <p class="text-xs font-en font-bold text-gray-400 mb-1">2025.03.15</p>
                  <h5 class="text-sm font-bold group-hover:text-[var(--main-color)] transition-colors line-clamp-2">関連ニュースのタイトルがここに表示されます。</h5>
                </div>
              </div>
            </a>
            <a href="/news/news-page" class="group block bg-white rounded-[24px] p-5 hover:shadow-lg transition-shadow">
              <div class="flex gap-4 items-start">
                <div class="w-24 h-20 bg-gray-100 rounded-[14px] overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=400" class="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="Related">
                </div>
                <div>
                  <p class="text-xs font-en font-bold text-gray-400 mb-1">2025.03.01</p>
                  <h5 class="text-sm font-bold group-hover:text-[var(--main-color)] transition-colors line-clamp-2">関連ニュースのタイトルがここに表示されます。</h5>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-[var(--accent-color)] pt-14 pb-10 border-t border-gray-200">
      <div class="max-w-6xl mx-auto px-6 text-center text-xs font-bold text-gray-400">
        <p>&copy; Company Name. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  </div>
</div>
`,
};
