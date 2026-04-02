import type { TemplateVariant } from '../types';

export const warmRealestateTemplate: TemplateVariant = {
  id: 'variant-warm-realestate',
  templateId: 'template-warm',
  name: 'Real Estate',
  pageSlug: 'realestate',
  description: 'Warm / 不動産事業ページ',
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
      <!-- ページヒーロー -->
      <section id="top" class="pt-32 pb-16 bg-[#F4F7F9] relative overflow-hidden">
        <div class="bubble-field">
          <span class="bubble bubble-warm" style="width:180px;height:180px;left:5%;top:20%;animation-delay:0.5s;"></span>
          <span class="bubble bubble-warm" style="width:120px;height:120px;left:80%;top:60%;animation-delay:1.5s;"></span>
        </div>
        <div class="max-w-6xl mx-auto px-6 relative z-10">
          <nav class="mb-6 text-xs font-bold text-gray-400 flex items-center gap-2">
            <a href="/" class="hover:text-[var(--main-color)] transition-colors">HOME</a>
            <span class="text-gray-300">&gt;</span>
            <span class="text-[var(--main-color)]">不動産事業</span>
          </nav>
          <p class="font-en font-bold text-sm tracking-[0.3em] text-[var(--main-color)] uppercase mb-2">REAL ESTATE</p>
          <h1 class="text-4xl md:text-5xl font-black tracking-tight">不動産事業</h1>
          <div class="mt-8 w-16 h-1 bg-[var(--main-color)] rounded-full"></div>
        </div>
      </section>

      <!-- 概要 -->
      <section class="py-20 bg-[var(--accent-color)]">
        <div class="max-w-6xl mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p class="font-en font-bold text-sm tracking-[0.3em] text-[var(--main-color)] uppercase mb-4">OVERVIEW</p>
              <h2 class="text-3xl md:text-4xl font-black mb-8 leading-tight">プロの目利きで、<br>価値を見極める</h2>
              <div class="w-12 h-1 bg-[var(--main-color)] rounded-full mb-8"></div>
              <p class="text-base leading-loose text-[var(--text-light)] mb-4 font-bold">
                建築・設計の知見を活かした不動産サービスを提供しています。物件の構造や設備を専門家の視点で評価し、お客様にとって最適な不動産取引をサポートします。
              </p>
              <p class="text-base leading-loose text-[var(--text-light)] font-bold">
                売買仲介から賃貸管理、資産活用コンサルティングまで、不動産に関わるあらゆるニーズにワンストップでお応えします。
              </p>
            </div>
            <div class="relative">
              <div class="absolute -top-4 -right-4 w-full h-full rounded-[40px] bg-[var(--main-color)] opacity-10"></div>
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" alt="不動産事業" class="w-full h-[480px] object-cover rounded-[40px] shadow-2xl relative z-10">
            </div>
          </div>
        </div>
      </section>

      <!-- サービス一覧 -->
      <section class="py-20 bg-white relative overflow-hidden">
        <div class="bubble-field">
          <span class="bubble" style="width:110px;height:110px;left:8%;top:12%;animation-delay:0.7s;"></span>
          <span class="bubble" style="width:100px;height:100px;left:86%;top:72%;animation-delay:2.1s;"></span>
        </div>
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-16">
            <p class="font-en font-bold text-sm tracking-[0.3em] text-[var(--main-color)] uppercase mb-4">OUR SERVICES</p>
            <h2 class="text-3xl font-black">サービス一覧</h2>
            <div class="mt-6 w-16 h-1 bg-[var(--main-color)] rounded-full mx-auto"></div>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-[var(--accent-color)] rounded-[40px] p-8 flex flex-col shadow-md hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 bg-[var(--main-color)]/10 rounded-full flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-[var(--main-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4"/></svg>
              </div>
              <span class="text-xs font-bold text-[var(--main-color)] uppercase tracking-widest block mb-3">01 / Buy & Sell</span>
              <h3 class="text-2xl font-black mb-4">売買仲介</h3>
              <p class="text-sm text-[var(--text-light)] leading-relaxed flex-1">
                住宅・事業用物件の売買をトータルサポート。建築の専門知識を活かした物件評価で、適正価格での取引を実現します。
              </p>
              <ul class="mt-6 space-y-2 text-sm font-bold border-t border-gray-200 pt-6">
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>住宅・マンション売買</span></li>
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>事業用物件仲介</span></li>
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>物件査定・価格評価</span></li>
              </ul>
            </div>
            <div class="bg-[var(--accent-color)] rounded-[40px] p-8 flex flex-col shadow-md hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 bg-[var(--main-color)]/10 rounded-full flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-[var(--main-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <span class="text-xs font-bold text-[var(--main-color)] uppercase tracking-widest block mb-3">02 / Management</span>
              <h3 class="text-2xl font-black mb-4">賃貸管理</h3>
              <p class="text-sm text-[var(--text-light)] leading-relaxed flex-1">
                オーナー様の大切な資産を適切に管理・運用。入居者対応から建物メンテナンスまで、安定した賃貸経営をサポートします。
              </p>
              <ul class="mt-6 space-y-2 text-sm font-bold border-t border-gray-200 pt-6">
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>入居者募集・審査</span></li>
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>建物管理・メンテナンス</span></li>
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>収支管理・レポート</span></li>
              </ul>
            </div>
            <div class="bg-[var(--accent-color)] rounded-[40px] p-8 flex flex-col shadow-md hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 bg-[var(--main-color)]/10 rounded-full flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-[var(--main-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <span class="text-xs font-bold text-[var(--main-color)] uppercase tracking-widest block mb-3">03 / Consulting</span>
              <h3 class="text-2xl font-black mb-4">不動産コンサルティング</h3>
              <p class="text-sm text-[var(--text-light)] leading-relaxed flex-1">
                資産活用や投資計画、相続対策まで幅広くご相談に対応。お客様の状況に合わせた最適なプランをご提案します。
              </p>
              <ul class="mt-6 space-y-2 text-sm font-bold border-t border-gray-200 pt-6">
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>資産活用プランニング</span></li>
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>投資分析・収益シミュレーション</span></li>
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>相続・事業承継サポート</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 選ばれる理由 -->
      <section class="py-20 bg-[#F4F7F9] relative overflow-hidden">
        <div class="bubble-field">
          <span class="bubble bubble-warm" style="width:130px;height:130px;left:6%;top:20%;animation-delay:0.8s;"></span>
          <span class="bubble bubble-warm" style="width:95px;height:95px;left:80%;top:65%;animation-delay:1.9s;"></span>
        </div>
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-16">
            <p class="font-en font-bold text-sm tracking-[0.3em] text-[var(--main-color)] uppercase mb-4">WHY CHOOSE US</p>
            <h2 class="text-3xl font-black">選ばれる理由</h2>
            <div class="mt-6 w-16 h-1 bg-[var(--main-color)] rounded-full mx-auto"></div>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white rounded-[30px] p-8 flex items-start gap-6 shadow-md hover:shadow-xl transition-shadow">
              <div class="w-14 h-14 bg-[var(--main-color)] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-[var(--main-color)]/20">
                <span class="text-white font-en font-bold">01</span>
              </div>
              <div>
                <h3 class="font-black text-lg mb-2">建築プロ目線の物件評価</h3>
                <p class="text-sm text-[var(--text-light)] leading-relaxed">建築士・施工管理技士の資格を持つスタッフが、構造・設備・法規の観点から物件を的確に評価します。</p>
              </div>
            </div>
            <div class="bg-white rounded-[30px] p-8 flex items-start gap-6 shadow-md hover:shadow-xl transition-shadow">
              <div class="w-14 h-14 bg-[var(--main-color)] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-[var(--main-color)]/20">
                <span class="text-white font-en font-bold">02</span>
              </div>
              <div>
                <h3 class="font-black text-lg mb-2">連携で価値向上</h3>
                <p class="text-sm text-[var(--text-light)] leading-relaxed">設計・施工部門との連携により、リノベーションや改修提案を含めた物件の価値向上をご提案します。</p>
              </div>
            </div>
            <div class="bg-white rounded-[30px] p-8 flex items-start gap-6 shadow-md hover:shadow-xl transition-shadow">
              <div class="w-14 h-14 bg-[var(--main-color)] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-[var(--main-color)]/20">
                <span class="text-white font-en font-bold">03</span>
              </div>
              <div>
                <h3 class="font-black text-lg mb-2">ワンストップの専門サポート</h3>
                <p class="text-sm text-[var(--text-light)] leading-relaxed">物件探しから契約、引渡し後のアフターフォローまで、専任担当者が一貫してサポートいたします。</p>
              </div>
            </div>
            <div class="bg-white rounded-[30px] p-8 flex items-start gap-6 shadow-md hover:shadow-xl transition-shadow">
              <div class="w-14 h-14 bg-[var(--main-color)] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-[var(--main-color)]/20">
                <span class="text-white font-en font-bold">04</span>
              </div>
              <div>
                <h3 class="font-black text-lg mb-2">透明性の高いご提案</h3>
                <p class="text-sm text-[var(--text-light)] leading-relaxed">物件のメリット・デメリットを正直にお伝えし、お客様が納得して判断できる情報提供を徹底しています。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-12 px-6">
        <div class="max-w-5xl mx-auto bg-[var(--main-color)] rounded-[60px] p-10 md:p-16 text-center text-white shadow-2xl">
          <h2 class="font-en font-bold tracking-[0.3em] mb-4 text-sm">CONTACT</h2>
          <h3 class="text-3xl md:text-4xl font-black mb-8">不動産のご相談はお気軽に</h3>
          <p class="text-white/80 font-bold mb-10">売買・賃貸・資産活用など、不動産に関するあらゆるご相談を承ります。</p>
          <div class="flex flex-col md:flex-row justify-center items-center gap-4">
            <a href="/contact" data-page-slug="contact" class="bg-white text-[var(--main-color)] w-full md:w-auto px-10 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-all">
              お問い合わせはこちら
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
