import type { TemplateVariant } from '../types';

export const warmRecruitTemplate: TemplateVariant = {
  id: 'variant-warm-recruit',
  templateId: 'template-warm',
  name: 'Recruit',
  pageSlug: 'recruit',
  description: 'Warm / 採用情報ページ',
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
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-6 text-sm font-black tracking-widest">
          <a href="#concept" class="hover:text-[var(--main-color)] transition-colors">コンセプト</a>
          <a href="#features" class="hover:text-[var(--main-color)] transition-colors">強み</a>
          <a href="#service" class="hover:text-[var(--main-color)] transition-colors">事業内容</a>
          <a href="#company" class="bg-[var(--main-color)] text-white px-5 py-2 rounded-full hover:opacity-80 transition-all">お問い合わせ</a>
        </nav>
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
            <span class="text-[var(--main-color)]">採用情報</span>
          </nav>
          <p class="font-en font-bold text-sm tracking-[0.3em] text-[var(--main-color)] uppercase mb-2">RECRUIT</p>
          <h1 class="text-4xl md:text-5xl font-black leading-tight mb-6">
            共に未来を<br><span class="text-[var(--main-color)]">創造</span>しませんか
          </h1>
          <p class="text-[var(--text-light)] max-w-2xl leading-loose text-base">
            私たちと一緒に、お客様の未来を支える仲間を募集しています。意欲あふれる方のご応募をお待ちしています。
          </p>
        </div>
      </section>

      <!-- 募集職種 -->
      <section class="py-20 bg-white relative overflow-hidden">
        <div class="bubble-field">
          <span class="bubble" style="width:110px;height:110px;left:8%;top:15%;animation-delay:0.7s;"></span>
          <span class="bubble" style="width:80px;height:80px;left:88%;top:70%;animation-delay:2s;"></span>
        </div>
        <div class="max-w-6xl mx-auto px-6">
          <div class="mb-12">
            <p class="font-en font-bold text-sm tracking-[0.3em] text-[var(--main-color)] uppercase mb-2">OPEN POSITIONS</p>
            <h2 class="text-3xl font-black">募集職種</h2>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-[var(--accent-color)] rounded-[40px] p-8 flex flex-col shadow-md hover:shadow-xl transition-shadow">
              <div class="mb-6">
                <span class="text-xs font-bold text-[var(--main-color)] uppercase tracking-widest block mb-3">01 / Position</span>
                <h3 class="text-2xl font-black mb-2">コンサルタント</h3>
                <span class="inline-block bg-[var(--main-color)]/10 text-[var(--main-color)] text-xs font-bold px-3 py-1 rounded-full">正社員</span>
              </div>
              <div class="rounded-[24px] overflow-hidden mb-6 h-40">
                <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" alt="Consultant" class="w-full h-full object-cover">
              </div>
              <p class="text-sm text-[var(--text-light)] leading-relaxed mb-6 flex-1">
                お客様の課題分析と解決策の提案を担当していただきます。チームと連携しながら、最適なソリューションを構築します。
              </p>
              <ul class="space-y-3 text-sm font-bold border-t border-gray-200 pt-6">
                <li class="flex items-start gap-3"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span><span class="text-gray-400">雇用形態：</span>正社員</span></li>
                <li class="flex items-start gap-3"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span><span class="text-gray-400">給与：</span>応相談</span></li>
                <li class="flex items-start gap-3"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span><span class="text-gray-400">勤務地：</span>東京</span></li>
              </ul>
              <a href="/contact" data-page-slug="contact" class="mt-6 bg-[var(--main-color)] text-white text-center py-3 rounded-full font-bold text-sm hover:opacity-80 transition-all block">応募する</a>
            </div>
            <div class="bg-[var(--accent-color)] rounded-[40px] p-8 flex flex-col shadow-md hover:shadow-xl transition-shadow">
              <div class="mb-6">
                <span class="text-xs font-bold text-[var(--main-color)] uppercase tracking-widest block mb-3">02 / Position</span>
                <h3 class="text-2xl font-black mb-2">プロジェクトマネージャー</h3>
                <span class="inline-block bg-[var(--main-color)]/10 text-[var(--main-color)] text-xs font-bold px-3 py-1 rounded-full">正社員</span>
              </div>
              <div class="rounded-[24px] overflow-hidden mb-6 h-40">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" alt="PM" class="w-full h-full object-cover">
              </div>
              <p class="text-sm text-[var(--text-light)] leading-relaxed mb-6 flex-1">
                プロジェクトの計画策定から完了までを統括。品質・コスト・スケジュールの管理をお任せします。
              </p>
              <ul class="space-y-3 text-sm font-bold border-t border-gray-200 pt-6">
                <li class="flex items-start gap-3"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span><span class="text-gray-400">雇用形態：</span>正社員</span></li>
                <li class="flex items-start gap-3"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span><span class="text-gray-400">給与：</span>応相談</span></li>
                <li class="flex items-start gap-3"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span><span class="text-gray-400">勤務地：</span>東京</span></li>
              </ul>
              <a href="/contact" data-page-slug="contact" class="mt-6 bg-[var(--main-color)] text-white text-center py-3 rounded-full font-bold text-sm hover:opacity-80 transition-all block">応募する</a>
            </div>
            <div class="bg-[var(--accent-color)] rounded-[40px] p-8 flex flex-col shadow-md hover:shadow-xl transition-shadow">
              <div class="mb-6">
                <span class="text-xs font-bold text-[var(--main-color)] uppercase tracking-widest block mb-3">03 / Position</span>
                <h3 class="text-2xl font-black mb-2">アシスタント</h3>
                <span class="inline-block bg-gray-200 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">パート可</span>
              </div>
              <div class="rounded-[24px] overflow-hidden mb-6 h-40">
                <img src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80&w=800" alt="Assistant" class="w-full h-full object-cover">
              </div>
              <p class="text-sm text-[var(--text-light)] leading-relaxed mb-6 flex-1">
                チームのサポート業務全般を担当。未経験者も歓迎です。柔軟な働き方が可能なポジションです。
              </p>
              <ul class="space-y-3 text-sm font-bold border-t border-gray-200 pt-6">
                <li class="flex items-start gap-3"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span><span class="text-gray-400">雇用形態：</span>パート可</span></li>
                <li class="flex items-start gap-3"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span><span class="text-gray-400">給与：</span>応相談</span></li>
                <li class="flex items-start gap-3"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span><span class="text-gray-400">勤務地：</span>東京</span></li>
              </ul>
              <a href="/contact" data-page-slug="contact" class="mt-6 bg-[var(--main-color)] text-white text-center py-3 rounded-full font-bold text-sm hover:opacity-80 transition-all block">応募する</a>
            </div>
          </div>
        </div>
      </section>

      <!-- 待遇・福利厚生 -->
      <section class="py-20 bg-[#F4F7F9] relative overflow-hidden">
        <div class="bubble-field">
          <span class="bubble bubble-warm" style="width:130px;height:130px;left:6%;top:20%;animation-delay:0.8s;"></span>
          <span class="bubble bubble-warm" style="width:95px;height:95px;left:80%;top:65%;animation-delay:1.9s;"></span>
        </div>
        <div class="max-w-6xl mx-auto px-6">
          <div class="mb-12">
            <p class="font-en font-bold text-sm tracking-[0.3em] text-[var(--main-color)] uppercase mb-2">BENEFITS</p>
            <h2 class="text-3xl font-black">待遇・福利厚生</h2>
          </div>
          <div class="bg-white rounded-[60px] p-10 md:p-16 shadow-xl">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="flex items-start gap-4 p-5 rounded-[20px] bg-[var(--accent-color)] hover:shadow-md transition-shadow">
                <span class="text-2xl">&#127973;</span>
                <div><h4 class="font-black text-base mb-1">社会保険完備</h4><p class="text-sm text-[var(--text-light)]">健康保険・厚生年金・雇用保険・労災保険</p></div>
              </div>
              <div class="flex items-start gap-4 p-5 rounded-[20px] bg-[var(--accent-color)] hover:shadow-md transition-shadow">
                <span class="text-2xl">&#128643;</span>
                <div><h4 class="font-black text-base mb-1">交通費支給</h4><p class="text-sm text-[var(--text-light)]">実費支給（上限あり）</p></div>
              </div>
              <div class="flex items-start gap-4 p-5 rounded-[20px] bg-[var(--accent-color)] hover:shadow-md transition-shadow">
                <span class="text-2xl">&#128218;</span>
                <div><h4 class="font-black text-base mb-1">資格取得支援</h4><p class="text-sm text-[var(--text-light)]">業務関連資格の取得費用を会社補助</p></div>
              </div>
              <div class="flex items-start gap-4 p-5 rounded-[20px] bg-[var(--accent-color)] hover:shadow-md transition-shadow">
                <span class="text-2xl">&#128187;</span>
                <div><h4 class="font-black text-base mb-1">リモートワーク可</h4><p class="text-sm text-[var(--text-light)]">業務内容に応じてテレワーク対応可</p></div>
              </div>
              <div class="flex items-start gap-4 p-5 rounded-[20px] bg-[var(--accent-color)] hover:shadow-md transition-shadow">
                <span class="text-2xl">&#128197;</span>
                <div><h4 class="font-black text-base mb-1">完全週休2日制</h4><p class="text-sm text-[var(--text-light)]">土日祝休み・年間休日120日以上</p></div>
              </div>
              <div class="flex items-start gap-4 p-5 rounded-[20px] bg-[var(--accent-color)] hover:shadow-md transition-shadow">
                <span class="text-2xl">&#128200;</span>
                <div><h4 class="font-black text-base mb-1">昇給・賞与あり</h4><p class="text-sm text-[var(--text-light)]">年1回昇給・賞与年2回（業績による）</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 採用フロー -->
      <section class="py-20 bg-white relative overflow-hidden">
        <div class="max-w-6xl mx-auto px-6">
          <div class="mb-14">
            <p class="font-en font-bold text-sm tracking-[0.3em] text-[var(--main-color)] uppercase mb-2">FLOW</p>
            <h2 class="text-3xl font-black">採用フロー</h2>
          </div>
          <div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            <div class="flex flex-col items-center text-center w-full md:w-48">
              <div class="w-20 h-20 bg-[var(--main-color)] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[var(--main-color)]/30"><span class="text-white font-en font-bold text-xl">01</span></div>
              <h4 class="font-black text-lg mb-2">エントリー</h4>
              <p class="text-xs text-[var(--text-light)] leading-relaxed">フォームよりご応募ください</p>
            </div>
            <div class="hidden md:flex items-center justify-center w-12 shrink-0"><svg class="w-8 h-8 text-[var(--main-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg></div>
            <div class="flex md:hidden items-center justify-center h-10"><svg class="w-8 h-8 text-[var(--main-color)] rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg></div>
            <div class="flex flex-col items-center text-center w-full md:w-48">
              <div class="w-20 h-20 bg-[#F4F7F9] border-2 border-[var(--main-color)]/30 rounded-full flex items-center justify-center mb-4"><span class="text-[var(--main-color)] font-en font-bold text-xl">02</span></div>
              <h4 class="font-black text-lg mb-2">書類選考</h4>
              <p class="text-xs text-[var(--text-light)] leading-relaxed">1週間以内にご連絡します</p>
            </div>
            <div class="hidden md:flex items-center justify-center w-12 shrink-0"><svg class="w-8 h-8 text-[var(--main-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg></div>
            <div class="flex md:hidden items-center justify-center h-10"><svg class="w-8 h-8 text-[var(--main-color)] rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg></div>
            <div class="flex flex-col items-center text-center w-full md:w-48">
              <div class="w-20 h-20 bg-[#F4F7F9] border-2 border-[var(--main-color)]/30 rounded-full flex items-center justify-center mb-4"><span class="text-[var(--main-color)] font-en font-bold text-xl">03</span></div>
              <h4 class="font-black text-lg mb-2">面接</h4>
              <p class="text-xs text-[var(--text-light)] leading-relaxed">1〜2回の面接（オンライン可）</p>
            </div>
            <div class="hidden md:flex items-center justify-center w-12 shrink-0"><svg class="w-8 h-8 text-[var(--main-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg></div>
            <div class="flex md:hidden items-center justify-center h-10"><svg class="w-8 h-8 text-[var(--main-color)] rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg></div>
            <div class="flex flex-col items-center text-center w-full md:w-48">
              <div class="w-20 h-20 bg-[var(--main-color)] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[var(--main-color)]/30"><span class="text-white font-en font-bold text-xl">04</span></div>
              <h4 class="font-black text-lg mb-2">内定</h4>
              <p class="text-xs text-[var(--text-light)] leading-relaxed">入社日程をご相談します</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-12 px-6">
        <div class="max-w-5xl mx-auto bg-[var(--main-color)] rounded-[60px] p-10 md:p-16 text-center text-white shadow-2xl">
          <h2 class="font-en font-bold tracking-[0.3em] mb-4 text-sm">ENTRY</h2>
          <h3 class="text-3xl md:text-4xl font-black mb-6">採用エントリーはこちら</h3>
          <p class="text-white/80 text-base mb-10 max-w-xl mx-auto leading-relaxed">
            採用に関するご応募・ご質問はお問い合わせフォームよりお気軽にご連絡ください。
          </p>
          <div class="flex flex-col md:flex-row justify-center items-center gap-4">
            <a href="/contact" data-page-slug="contact" class="bg-white text-[var(--main-color)] w-full md:w-auto px-12 py-5 rounded-full font-black text-lg hover:bg-gray-100 transition-all shadow-lg">
              採用に応募する
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
