import type { TemplateVariant } from '../types';

export const warmAboutTemplate: TemplateVariant = {
  id: 'variant-warm-about',
  templateId: 'template-warm',
  name: 'About',
  pageSlug: 'about',
  description: 'Warm / 会社概要ページ',
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
      <section id="top" class="pt-32 pb-16 bg-[#F4F7F9] relative overflow-hidden">
        <div class="max-w-6xl mx-auto px-6 relative">
          <nav class="mb-6 text-xs font-bold text-gray-400 flex items-center gap-2">
            <a href="/" class="hover:text-[var(--main-color)] transition-colors">HOME</a>
            <span class="text-gray-300">&gt;</span>
            <span class="text-[var(--main-color)]">会社概要</span>
          </nav>
          <p class="font-en font-bold text-sm tracking-[0.3em] text-[var(--main-color)] uppercase mb-2">COMPANY</p>
          <h1 class="text-4xl md:text-5xl font-black tracking-tight">会社概要</h1>
          <div class="mt-8 w-16 h-1 bg-[var(--main-color)] rounded-full"></div>
        </div>
      </section>

      <!-- 代表挨拶 -->
      <section class="py-20 bg-[var(--accent-color)]">
        <div class="max-w-6xl mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p class="font-en font-bold text-sm tracking-[0.3em] text-[var(--main-color)] uppercase mb-4">MESSAGE</p>
              <h2 class="text-3xl md:text-4xl font-black mb-8 leading-tight">描く力、<br>支える力</h2>
              <div class="w-12 h-1 bg-[var(--main-color)] rounded-full mb-8"></div>
              <p class="text-base leading-loose text-[var(--text-light)] mb-8 font-bold">
                お客様の課題解決に真摯に向き合い、高品質なサービスと確かな技術で社会に貢献してまいります。持続可能な未来のために、革新的なソリューションを創造し続けることが私たちの使命です。
              </p>
              <div class="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div>
                  <p class="text-xs font-bold text-gray-400 tracking-widest mb-1">代表取締役</p>
                  <p class="text-lg font-black text-gray-500">山田 太郎</p>
                </div>
              </div>
            </div>
            <div class="relative">
              <div class="absolute -top-4 -right-4 w-full h-full rounded-[40px] bg-[var(--main-color)] opacity-10"></div>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" alt="代表" class="w-full h-[480px] object-cover rounded-[40px] shadow-2xl relative z-10">
              <div class="absolute -bottom-6 -left-6 bg-[var(--main-color)] text-white p-6 rounded-[20px] shadow-xl z-20">
                <p class="font-en font-bold text-xs tracking-widest uppercase mb-1">Our Mission</p>
                <p class="font-black text-sm leading-relaxed">お客様と共に<br>価値を創造する</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 会社概要テーブル -->
      <section class="py-20 bg-[#F4F7F9]">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-16">
            <p class="font-en font-bold text-sm tracking-[0.3em] text-[var(--main-color)] uppercase mb-4">OVERVIEW</p>
            <h2 class="text-3xl md:text-4xl font-black">会社概要</h2>
            <div class="mt-6 w-16 h-1 bg-[var(--main-color)] rounded-full mx-auto"></div>
          </div>
          <div class="max-w-4xl mx-auto">
            <div class="bg-white rounded-[40px] shadow-lg overflow-hidden">
              <table class="w-full">
                <tbody>
                  <tr class="border-b border-gray-100">
                    <th class="bg-[var(--accent-color)] px-8 py-5 text-left text-sm font-black text-gray-600 w-1/3 whitespace-nowrap">会社名</th>
                    <td class="px-8 py-5 text-sm font-bold text-gray-700">株式会社サンプル</td>
                  </tr>
                  <tr class="border-b border-gray-100">
                    <th class="bg-[var(--accent-color)] px-8 py-5 text-left text-sm font-black text-gray-600">設立</th>
                    <td class="px-8 py-5 text-sm font-bold text-gray-700">2010年4月</td>
                  </tr>
                  <tr class="border-b border-gray-100">
                    <th class="bg-[var(--accent-color)] px-8 py-5 text-left text-sm font-black text-gray-600">所在地</th>
                    <td class="px-8 py-5 text-sm font-bold text-gray-700">〒000-0000 東京都渋谷区1-1-1</td>
                  </tr>
                  <tr class="border-b border-gray-100">
                    <th class="bg-[var(--accent-color)] px-8 py-5 text-left text-sm font-black text-gray-600">代表者</th>
                    <td class="px-8 py-5 text-sm font-bold text-gray-700">代表取締役 山田 太郎</td>
                  </tr>
                  <tr class="border-b border-gray-100">
                    <th class="bg-[var(--accent-color)] px-8 py-5 text-left text-sm font-black text-gray-600">事業内容</th>
                    <td class="px-8 py-5 text-sm font-bold text-gray-700">コンサルティング、プロジェクト管理、人材ソリューション</td>
                  </tr>
                  <tr class="border-b border-gray-100">
                    <th class="bg-[var(--accent-color)] px-8 py-5 text-left text-sm font-black text-gray-600">電話番号</th>
                    <td class="px-8 py-5 text-sm font-bold text-gray-700">000-0000-0000</td>
                  </tr>
                  <tr>
                    <th class="bg-[var(--accent-color)] px-8 py-5 text-left text-sm font-black text-gray-600">営業時間</th>
                    <td class="px-8 py-5 text-sm font-bold text-gray-700">月〜金 9:00〜18:00（土日祝定休）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-20 bg-[var(--accent-color)]">
        <div class="max-w-6xl mx-auto px-6 text-center">
          <p class="font-en font-bold text-sm tracking-[0.3em] text-[var(--main-color)] uppercase mb-4">CONTACT</p>
          <h2 class="text-3xl md:text-4xl font-black mb-6">お気軽にご相談ください</h2>
          <p class="text-[var(--text-light)] font-bold mb-10">ご質問・ご相談はお気軽にお問い合わせください。</p>
          <a href="/contact" data-page-slug="contact" class="inline-block bg-[var(--main-color)] text-white px-12 py-4 rounded-full font-black text-base hover:opacity-80 transition-all shadow-lg">
            お問い合わせはこちら
          </a>
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
