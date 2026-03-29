import type { TemplateVariant } from '../types';

export const warmPageTemplate: TemplateVariant = {
  id: 'variant-warm-page',
  templateId: 'template-warm',
  name: 'Page',
  pageSlug: 'page',
  description: 'Warm / 汎用固定ページ（WPの固定ページのような自由なコンテンツページ）',
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
      <!-- ページヒーロー -->
      <section id="top" class="bg-[#F4F7F9] relative overflow-hidden">
        <div class="absolute inset-0 opacity-5" style="background-image: repeating-linear-gradient(45deg, var(--main-color) 0, var(--main-color) 1px, transparent 0, transparent 50%); background-size: 20px 20px;"></div>
        <div class="max-w-6xl mx-auto px-6 py-20 relative">
          <nav class="flex items-center gap-2 text-xs text-gray-400 mb-8 font-en flex-wrap">
            <a href="/" class="hover:text-[var(--main-color)] transition-colors">HOME</a>
            <span>/</span>
            <span class="text-[var(--main-color)] font-bold">ページタイトル</span>
          </nav>
          <p class="font-en font-bold text-[var(--main-color)] text-sm mb-2 tracking-widest uppercase">PAGE TITLE</p>
          <h1 class="text-3xl sm:text-5xl font-black leading-tight mb-6">ページタイトル</h1>
          <div class="w-16 h-1 bg-[var(--main-color)] rounded-full mb-8"></div>
          <p class="text-lg text-[var(--text-light)] max-w-2xl leading-relaxed">
            このページの概要テキストが入ります。サービスや事業の詳細をわかりやすく伝えるためのリード文です。
          </p>
        </div>
      </section>

      <!-- 概要セクション（2カラム） -->
      <section class="py-20 bg-[var(--accent-color)]">
        <div class="max-w-6xl mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p class="font-en font-bold text-[var(--main-color)] text-xs tracking-widest uppercase mb-3">OVERVIEW</p>
              <h2 class="text-3xl font-black mb-6">概要見出し</h2>
              <div class="w-12 h-1 bg-[var(--main-color)] rounded-full mb-8"></div>
              <p class="text-[var(--text-light)] leading-relaxed mb-6">
                このセクションでは、サービスや事業の全体像を説明します。お客様にとってのメリットや特徴を、わかりやすい言葉でお伝えします。
              </p>
              <p class="text-[var(--text-light)] leading-relaxed">
                専門的な技術力と豊富な経験をもとに、お客様のニーズに合わせた最適なソリューションをご提供いたします。
              </p>
            </div>
            <div>
              <div class="bg-[#F4F7F9] rounded-[60px] p-10 text-center">
                <div class="w-32 h-32 bg-[var(--main-color)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-16 h-16 text-[var(--main-color)]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <p class="text-gray-400 text-sm font-bold">画像やイラストがここに入ります</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- コンテンツリスト（番号付き） -->
      <section class="py-20 bg-[#F4F7F9]">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-14">
            <p class="font-en font-bold text-[var(--main-color)] text-xs tracking-widest uppercase mb-2">DETAILS</p>
            <h2 class="text-3xl font-black">詳細内容</h2>
            <div class="w-12 h-1 bg-[var(--main-color)] rounded-full mx-auto mt-4"></div>
          </div>
          <div class="max-w-3xl mx-auto space-y-4">
            <div class="bg-white rounded-[40px] p-6 flex items-center gap-5 shadow-sm hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-[var(--main-color)] rounded-[14px] flex items-center justify-center shrink-0">
                <span class="text-white font-black font-en text-lg">01</span>
              </div>
              <div>
                <h3 class="font-black mb-1">項目タイトル 1</h3>
                <p class="text-sm text-[var(--text-light)]">項目の説明テキストが入ります。サービスの特徴や強みを具体的に記載します。</p>
              </div>
            </div>
            <div class="bg-white rounded-[40px] p-6 flex items-center gap-5 shadow-sm hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-[var(--main-color)] rounded-[14px] flex items-center justify-center shrink-0">
                <span class="text-white font-black font-en text-lg">02</span>
              </div>
              <div>
                <h3 class="font-black mb-1">項目タイトル 2</h3>
                <p class="text-sm text-[var(--text-light)]">項目の説明テキストが入ります。具体的な業務内容や対応範囲を記載します。</p>
              </div>
            </div>
            <div class="bg-white rounded-[40px] p-6 flex items-center gap-5 shadow-sm hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-[var(--main-color)] rounded-[14px] flex items-center justify-center shrink-0">
                <span class="text-white font-black font-en text-lg">03</span>
              </div>
              <div>
                <h3 class="font-black mb-1">項目タイトル 3</h3>
                <p class="text-sm text-[var(--text-light)]">項目の説明テキストが入ります。お客様へのメリットや成果を記載します。</p>
              </div>
            </div>
            <div class="bg-white rounded-[40px] p-6 flex items-center gap-5 shadow-sm hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-[var(--main-color)] rounded-[14px] flex items-center justify-center shrink-0">
                <span class="text-white font-black font-en text-lg">04</span>
              </div>
              <div>
                <h3 class="font-black mb-1">項目タイトル 4</h3>
                <p class="text-sm text-[var(--text-light)]">項目の説明テキストが入ります。技術的な特徴や品質管理について記載します。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 特徴グリッド（タグ・バッジ風） -->
      <section class="py-20 bg-[var(--accent-color)]">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-14">
            <p class="font-en font-bold text-[var(--main-color)] text-xs tracking-widest uppercase mb-2">FEATURES</p>
            <h2 class="text-3xl font-black">特徴・対応範囲</h2>
            <div class="w-12 h-1 bg-[var(--main-color)] rounded-full mx-auto mt-4"></div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-3xl mx-auto">
            <div class="bg-[#F4F7F9] rounded-[30px] p-6 text-center hover:bg-[var(--main-color)] hover:text-white transition-colors group cursor-default">
              <p class="text-2xl font-black text-[var(--main-color)] group-hover:text-white mb-2 font-en">A</p>
              <p class="text-xs font-bold text-[var(--text-light)] group-hover:text-white/80">カテゴリ A</p>
              <p class="text-xs text-gray-400 group-hover:text-white/60">説明テキスト</p>
            </div>
            <div class="bg-[#F4F7F9] rounded-[30px] p-6 text-center hover:bg-[var(--main-color)] hover:text-white transition-colors group cursor-default">
              <p class="text-2xl font-black text-[var(--main-color)] group-hover:text-white mb-2 font-en">B</p>
              <p class="text-xs font-bold text-[var(--text-light)] group-hover:text-white/80">カテゴリ B</p>
              <p class="text-xs text-gray-400 group-hover:text-white/60">説明テキスト</p>
            </div>
            <div class="bg-[#F4F7F9] rounded-[30px] p-6 text-center hover:bg-[var(--main-color)] hover:text-white transition-colors group cursor-default">
              <p class="text-2xl font-black text-[var(--main-color)] group-hover:text-white mb-2 font-en">C</p>
              <p class="text-xs font-bold text-[var(--text-light)] group-hover:text-white/80">カテゴリ C</p>
              <p class="text-xs text-gray-400 group-hover:text-white/60">説明テキスト</p>
            </div>
            <div class="bg-[#F4F7F9] rounded-[30px] p-6 text-center hover:bg-[var(--main-color)] hover:text-white transition-colors group cursor-default">
              <p class="text-2xl font-black text-[var(--main-color)] group-hover:text-white mb-2 font-en">D</p>
              <p class="text-xs font-bold text-[var(--text-light)] group-hover:text-white/80">カテゴリ D</p>
              <p class="text-xs text-gray-400 group-hover:text-white/60">説明テキスト</p>
            </div>
          </div>
        </div>
      </section>

      <!-- フロー・ステップ -->
      <section class="py-20 bg-[#F4F7F9]">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-14">
            <p class="font-en font-bold text-[var(--main-color)] text-xs tracking-widest uppercase mb-2">WORKFLOW</p>
            <h2 class="text-3xl font-black">業務の流れ</h2>
            <div class="w-12 h-1 bg-[var(--main-color)] rounded-full mx-auto mt-4"></div>
          </div>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
            <div class="text-center">
              <div class="w-20 h-20 bg-[var(--main-color)] rounded-[24px] flex items-center justify-center mx-auto mb-3 shadow-lg">
                <span class="text-white font-black font-en text-xl">01</span>
              </div>
              <p class="font-black text-sm">ステップ 1</p>
            </div>
            <div class="hidden sm:block w-12 h-0.5 bg-[var(--main-color)]/30 mx-2"></div>
            <div class="sm:hidden w-0.5 h-8 bg-[var(--main-color)]/30"></div>
            <div class="text-center">
              <div class="w-20 h-20 bg-white border-2 border-[var(--main-color)]/30 rounded-[24px] flex items-center justify-center mx-auto mb-3 shadow">
                <span class="text-[var(--main-color)] font-black font-en text-xl">02</span>
              </div>
              <p class="font-black text-sm">ステップ 2</p>
            </div>
            <div class="hidden sm:block w-12 h-0.5 bg-[var(--main-color)]/30 mx-2"></div>
            <div class="sm:hidden w-0.5 h-8 bg-[var(--main-color)]/30"></div>
            <div class="text-center">
              <div class="w-20 h-20 bg-white border-2 border-[var(--main-color)]/30 rounded-[24px] flex items-center justify-center mx-auto mb-3 shadow">
                <span class="text-[var(--main-color)] font-black font-en text-xl">03</span>
              </div>
              <p class="font-black text-sm">ステップ 3</p>
            </div>
            <div class="hidden sm:block w-12 h-0.5 bg-[var(--main-color)]/30 mx-2"></div>
            <div class="sm:hidden w-0.5 h-8 bg-[var(--main-color)]/30"></div>
            <div class="text-center">
              <div class="w-20 h-20 bg-white border-2 border-[var(--main-color)]/30 rounded-[24px] flex items-center justify-center mx-auto mb-3 shadow">
                <span class="text-[var(--main-color)] font-black font-en text-xl">04</span>
              </div>
              <p class="font-black text-sm">ステップ 4</p>
            </div>
            <div class="hidden sm:block w-12 h-0.5 bg-[var(--main-color)]/30 mx-2"></div>
            <div class="sm:hidden w-0.5 h-8 bg-[var(--main-color)]/30"></div>
            <div class="text-center">
              <div class="w-20 h-20 bg-[var(--main-color)] rounded-[24px] flex items-center justify-center mx-auto mb-3 shadow-lg">
                <span class="text-white font-black font-en text-xl">05</span>
              </div>
              <p class="font-black text-sm">完了</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 関連ページリンク -->
      <section class="py-16 bg-[var(--accent-color)]">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-10">
            <p class="font-en font-bold text-[var(--main-color)] text-xs tracking-widest uppercase mb-2">RELATED</p>
            <h2 class="text-2xl font-black">関連ページ</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <a href="#" class="group bg-[#F4F7F9] rounded-[30px] p-6 hover:shadow-md transition-all hover:-translate-y-1">
              <p class="text-xs text-[var(--main-color)] font-bold font-en mb-2">Related 01</p>
              <h3 class="font-black text-sm group-hover:text-[var(--main-color)] transition-colors">関連ページタイトル 1</h3>
            </a>
            <a href="#" class="group bg-[#F4F7F9] rounded-[30px] p-6 hover:shadow-md transition-all hover:-translate-y-1">
              <p class="text-xs text-[var(--main-color)] font-bold font-en mb-2">Related 02</p>
              <h3 class="font-black text-sm group-hover:text-[var(--main-color)] transition-colors">関連ページタイトル 2</h3>
            </a>
            <a href="#" class="group bg-[#F4F7F9] rounded-[30px] p-6 hover:shadow-md transition-all hover:-translate-y-1">
              <p class="text-xs text-[var(--main-color)] font-bold font-en mb-2">Related 03</p>
              <h3 class="font-black text-sm group-hover:text-[var(--main-color)] transition-colors">関連ページタイトル 3</h3>
            </a>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-20 bg-[var(--main-color)]">
        <div class="max-w-3xl mx-auto px-6 text-center">
          <p class="font-en font-bold text-white/70 text-xs tracking-widest uppercase mb-3">CONTACT US</p>
          <h2 class="text-3xl sm:text-4xl font-black text-white mb-6">お気軽にご相談ください</h2>
          <p class="text-white/80 mb-10 text-sm leading-relaxed">
            ご質問・ご相談はお気軽にお問い合わせください。<br>担当者より迅速にご回答いたします。
          </p>
          <a href="/contact" data-page-slug="contact" class="inline-flex items-center gap-2 bg-white text-[var(--main-color)] font-black px-10 py-4 rounded-full hover:bg-gray-50 transition-colors shadow-lg text-sm">
            お問い合わせはこちら
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>
    </main>

    <footer class="bg-[var(--text-color)] text-white py-12">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div class="font-black text-lg mb-4">Company Name</div>
            <p class="text-gray-400 text-sm leading-relaxed">株式会社サンプル<br>サービス・事業の紹介</p>
          </div>
          <div>
            <h4 class="font-bold text-[var(--main-color)] mb-4 text-sm">事業内容</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">サービス A</a></li>
              <li><a href="#" class="hover:text-white transition-colors">サービス B</a></li>
              <li><a href="#" class="hover:text-white transition-colors">サービス C</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-[var(--main-color)] mb-4 text-sm">お問い合わせ</h4>
            <p class="text-sm text-gray-400">〒000-0000<br>東京都渋谷区1-1-1<br>TEL: 000-0000-0000</p>
          </div>
        </div>
        <div class="border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          <p>&copy; Company Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</div>
`,
};
