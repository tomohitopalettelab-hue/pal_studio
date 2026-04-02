import type { TemplateVariant } from '../types';

export const warmSolutionTemplate: TemplateVariant = {
  id: 'variant-warm-solution',
  templateId: 'template-warm',
  name: 'Solution',
  pageSlug: 'service',
  description: 'Warm / 事業内容ページ',
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
            <span class="text-[var(--main-color)]">事業内容</span>
          </nav>
          <p class="font-en font-bold text-sm tracking-[0.3em] text-[var(--main-color)] uppercase mb-2">SOLUTION</p>
          <h1 class="text-4xl md:text-5xl font-black tracking-tight">事業内容</h1>
          <div class="mt-8 w-16 h-1 bg-[var(--main-color)] rounded-full"></div>
        </div>
      </section>

      <!-- サービス一覧 -->
      <section class="py-20 bg-white relative overflow-hidden">
        <div class="bubble-field">
          <span class="bubble" style="width:110px;height:110px;left:8%;top:12%;animation-delay:0.7s;"></span>
          <span class="bubble" style="width:100px;height:100px;left:86%;top:72%;animation-delay:2.1s;"></span>
        </div>
        <div class="max-w-6xl mx-auto px-6">
          <div class="mb-12">
            <p class="font-en font-bold text-sm tracking-[0.3em] text-[var(--main-color)] uppercase mb-2">OUR SERVICES</p>
            <h2 class="text-3xl font-black">サービス一覧</h2>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-[var(--accent-color)] rounded-[40px] p-8 flex flex-col shadow-md hover:shadow-xl transition-shadow">
              <span class="text-xs font-bold text-[var(--main-color)] uppercase tracking-widest block mb-3">01 / Consulting</span>
              <h3 class="text-2xl font-black mb-4">コンサルティング</h3>
              <div class="rounded-[24px] overflow-hidden mb-4 h-40">
                <img src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&q=80&w=800" alt="Consulting" class="w-full h-full object-cover">
              </div>
              <p class="text-sm text-[var(--text-light)] leading-relaxed flex-1">
                お客様のビジネス課題を深く分析し、最適な戦略と実行プランを策定します。豊富な経験と専門知識をもとに、確実な成果をお約束します。
              </p>
              <ul class="mt-6 space-y-2 text-sm font-bold border-t border-gray-200 pt-6">
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>経営戦略立案</span></li>
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>業務改善提案</span></li>
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>DX推進支援</span></li>
              </ul>
            </div>
            <div class="bg-[var(--accent-color)] rounded-[40px] p-8 flex flex-col shadow-md hover:shadow-xl transition-shadow">
              <span class="text-xs font-bold text-[var(--main-color)] uppercase tracking-widest block mb-3">02 / Project</span>
              <h3 class="text-2xl font-black mb-4">プロジェクト管理</h3>
              <div class="rounded-[24px] overflow-hidden mb-4 h-40">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" alt="Project" class="w-full h-full object-cover">
              </div>
              <p class="text-sm text-[var(--text-light)] leading-relaxed flex-1">
                経験豊富なプロジェクトマネージャーが、計画策定から完了まで一貫してサポート。品質・コスト・納期の最適なバランスを実現します。
              </p>
              <ul class="mt-6 space-y-2 text-sm font-bold border-t border-gray-200 pt-6">
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>進捗管理・品質管理</span></li>
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>リスクマネジメント</span></li>
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>ステークホルダー調整</span></li>
              </ul>
            </div>
            <div class="bg-[var(--accent-color)] rounded-[40px] p-8 flex flex-col shadow-md hover:shadow-xl transition-shadow">
              <span class="text-xs font-bold text-[var(--main-color)] uppercase tracking-widest block mb-3">03 / HR Solutions</span>
              <h3 class="text-2xl font-black mb-4">人材ソリューション</h3>
              <div class="rounded-[24px] overflow-hidden mb-4 h-40">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" alt="HR" class="w-full h-full object-cover">
              </div>
              <p class="text-sm text-[var(--text-light)] leading-relaxed flex-1">
                即戦力となるプロフェッショナルな人材をマッチングし、組織の力を最大化。採用から育成まで包括的にサポートします。
              </p>
              <ul class="mt-6 space-y-2 text-sm font-bold border-t border-gray-200 pt-6">
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>人材派遣・紹介</span></li>
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>研修・育成支援</span></li>
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>組織設計コンサル</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 強み -->
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
                <h3 class="font-black text-lg mb-2">豊富な実績</h3>
                <p class="text-sm text-[var(--text-light)] leading-relaxed">年間500件以上のプロジェクト完遂。多様な業界での経験を活かし、確実な成果を提供します。</p>
              </div>
            </div>
            <div class="bg-white rounded-[30px] p-8 flex items-start gap-6 shadow-md hover:shadow-xl transition-shadow">
              <div class="w-14 h-14 bg-[var(--main-color)] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-[var(--main-color)]/20">
                <span class="text-white font-en font-bold">02</span>
              </div>
              <div>
                <h3 class="font-black text-lg mb-2">専門家チーム</h3>
                <p class="text-sm text-[var(--text-light)] leading-relaxed">各分野のスペシャリストが結集。高度な専門知識でお客様の課題を解決します。</p>
              </div>
            </div>
            <div class="bg-white rounded-[30px] p-8 flex items-start gap-6 shadow-md hover:shadow-xl transition-shadow">
              <div class="w-14 h-14 bg-[var(--main-color)] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-[var(--main-color)]/20">
                <span class="text-white font-en font-bold">03</span>
              </div>
              <div>
                <h3 class="font-black text-lg mb-2">ワンストップ対応</h3>
                <p class="text-sm text-[var(--text-light)] leading-relaxed">企画から実行、運用まで一貫して対応。お客様の手間を最小限に抑えます。</p>
              </div>
            </div>
            <div class="bg-white rounded-[30px] p-8 flex items-start gap-6 shadow-md hover:shadow-xl transition-shadow">
              <div class="w-14 h-14 bg-[var(--main-color)] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-[var(--main-color)]/20">
                <span class="text-white font-en font-bold">04</span>
              </div>
              <div>
                <h3 class="font-black text-lg mb-2">継続的サポート</h3>
                <p class="text-sm text-[var(--text-light)] leading-relaxed">納品後も継続的にフォローアップ。長期的なパートナーシップでお客様の成長を支えます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-12 px-6">
        <div class="max-w-5xl mx-auto bg-[var(--main-color)] rounded-[60px] p-10 md:p-16 text-center text-white shadow-2xl">
          <h2 class="font-en font-bold tracking-[0.3em] mb-4 text-sm">CONTACT</h2>
          <h3 class="text-3xl md:text-4xl font-black mb-8">サービスについてのご相談</h3>
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
