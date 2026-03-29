import type { TemplateVariant } from '../types';

export const warmNewsTemplate: TemplateVariant = {
  id: 'variant-warm-news',
  templateId: 'template-warm',
  name: 'News',
  pageSlug: 'news',
  description: 'Warm / ニュース一覧ページ',
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
  </style>
  <div class="min-h-screen text-[var(--text-color)] bg-[var(--accent-color)]">
    <header class="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 md:px-10 h-20 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-[var(--main-color)] flex items-center justify-center text-white font-black rounded-full text-sm">W</div>
          <div class="font-black text-xl tracking-tight">Company <span class="text-[var(--main-color)] font-bold">Name</span></div>
        </div>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-6 text-sm font-black tracking-widest"></nav>
      </div>
    </header>

    <main>
      <section id="top" class="pt-32 pb-16 bg-[#F4F7F9] relative overflow-hidden">
        <div class="bubble-field">
          <span class="bubble bubble-warm" style="width:180px;height:180px;left:5%;top:20%;animation-delay:0.5s;"></span>
          <span class="bubble bubble-warm" style="width:120px;height:120px;left:80%;top:60%;animation-delay:1.5s;"></span>
        </div>
        <div class="max-w-6xl mx-auto px-6 relative z-10">
          <nav class="mb-6 text-xs font-bold text-gray-400 flex items-center gap-2">
            <a href="/" class="hover:text-[var(--main-color)] transition-colors">HOME</a>
            <span class="text-gray-300">&gt;</span>
            <span class="text-[var(--main-color)]">ニュース</span>
          </nav>
          <p class="font-en font-bold text-sm tracking-[0.3em] text-[var(--main-color)] uppercase mb-2">NEWS</p>
          <h1 class="text-4xl md:text-5xl font-black leading-tight mb-6">
            <span class="text-[var(--main-color)]">ニュース</span>一覧
          </h1>
          <p class="text-[var(--text-light)] max-w-2xl leading-loose text-base">
            公式発表・プレス情報を掲載しています。
          </p>
        </div>
      </section>

      <section class="py-20 bg-white relative overflow-hidden">
        <div class="bubble-field">
          <span class="bubble" style="width:110px;height:110px;left:8%;top:15%;animation-delay:0.7s;"></span>
          <span class="bubble" style="width:80px;height:80px;left:88%;top:70%;animation-delay:2s;"></span>
        </div>
        <div class="max-w-6xl mx-auto px-6">
          <div class="space-y-6 mb-14">
            <a href="/news/news-page" class="group block bg-[var(--accent-color)] rounded-[30px] p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div class="flex flex-col md:flex-row gap-6 items-start">
                <div class="w-full md:w-48 h-32 bg-gray-100 rounded-[20px] overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=400" class="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="News">
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-3">
                    <span class="text-sm font-en font-bold text-gray-400">2025.04.01</span>
                    <span class="bg-[#F4F7F9] text-[var(--main-color)] text-xs font-bold px-3 py-1 rounded-full">NEWS</span>
                  </div>
                  <h2 class="text-xl font-black group-hover:text-[var(--main-color)] transition-colors mb-3">新サービス提供開始のお知らせ</h2>
                  <p class="text-sm text-[var(--text-light)] line-clamp-2 leading-relaxed">事業課題に合わせた支援プランを追加しました。詳細はこちらをご覧ください。</p>
                </div>
              </div>
            </a>
            <a href="/news/news-page" class="group block bg-[var(--accent-color)] rounded-[30px] p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div class="flex flex-col md:flex-row gap-6 items-start">
                <div class="w-full md:w-48 h-32 bg-gray-100 rounded-[20px] overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400" class="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="News">
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-3">
                    <span class="text-sm font-en font-bold text-gray-400">2025.03.15</span>
                    <span class="bg-[#F4F7F9] text-[var(--main-color)] text-xs font-bold px-3 py-1 rounded-full">NEWS</span>
                  </div>
                  <h2 class="text-xl font-black group-hover:text-[var(--main-color)] transition-colors mb-3">ニュース記事のタイトルがここに表示されます。</h2>
                  <p class="text-sm text-[var(--text-light)] line-clamp-2 leading-relaxed">記事の抜粋テキストがここに表示されます。</p>
                </div>
              </div>
            </a>
            <a href="/news/news-page" class="group block bg-[var(--accent-color)] rounded-[30px] p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div class="flex flex-col md:flex-row gap-6 items-start">
                <div class="w-full md:w-48 h-32 bg-gray-100 rounded-[20px] overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=400" class="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="News">
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-3">
                    <span class="text-sm font-en font-bold text-gray-400">2025.03.01</span>
                    <span class="bg-[#F4F7F9] text-[var(--main-color)] text-xs font-bold px-3 py-1 rounded-full">NEWS</span>
                  </div>
                  <h2 class="text-xl font-black group-hover:text-[var(--main-color)] transition-colors mb-3">ニュース記事のタイトルがここに表示されます。</h2>
                  <p class="text-sm text-[var(--text-light)] line-clamp-2 leading-relaxed">記事の抜粋テキストがここに表示されます。</p>
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
