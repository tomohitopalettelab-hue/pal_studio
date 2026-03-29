import type { TemplateVariant } from '../types';

export const warmHrTemplate: TemplateVariant = {
  id: 'variant-warm-hr',
  templateId: 'template-warm',
  name: 'HR Solutions',
  pageSlug: 'hr',
  description: 'Warm / 人材派遣・紹介ページ',
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
        <div class="bubble-field">
          <span class="bubble bubble-warm" style="width:180px;height:180px;left:5%;top:20%;animation-delay:0.5s;"></span>
          <span class="bubble bubble-warm" style="width:120px;height:120px;left:80%;top:60%;animation-delay:1.5s;"></span>
        </div>
        <div class="max-w-6xl mx-auto px-6 relative z-10">
          <nav class="mb-6 text-xs font-bold text-gray-400 flex items-center gap-2">
            <a href="/" class="hover:text-[var(--main-color)] transition-colors">HOME</a>
            <span class="text-gray-300">&gt;</span>
            <span class="text-[var(--main-color)]">人材派遣・紹介</span>
          </nav>
          <p class="font-en font-bold text-sm tracking-[0.3em] text-[var(--main-color)] uppercase mb-2">HR SOLUTIONS</p>
          <h1 class="text-4xl md:text-5xl font-black tracking-tight">人材派遣・紹介</h1>
          <div class="mt-8 w-16 h-1 bg-[var(--main-color)] rounded-full"></div>
        </div>
      </section>

      <!-- 概要 -->
      <section class="py-20 bg-[var(--accent-color)]">
        <div class="max-w-6xl mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p class="font-en font-bold text-sm tracking-[0.3em] text-[var(--main-color)] uppercase mb-4">OVERVIEW</p>
              <h2 class="text-3xl md:text-4xl font-black mb-8 leading-tight">即戦力の技術者を、<br>必要な現場へ</h2>
              <div class="w-12 h-1 bg-[var(--main-color)] rounded-full mb-8"></div>
              <p class="text-base leading-loose text-[var(--text-light)] mb-4 font-bold">
                建設・設計業界に特化した人材サービスを提供しています。CADオペレーターから現場監督まで、豊富な登録スタッフの中からお客様のニーズに最適な人材をご提案します。
              </p>
              <p class="text-base leading-loose text-[var(--text-light)] font-bold">
                派遣・紹介だけでなく、スキルアップ研修も実施。即戦力となる技術者の育成にも力を入れています。
              </p>
            </div>
            <div class="relative">
              <div class="absolute -top-4 -right-4 w-full h-full rounded-[40px] bg-[var(--main-color)] opacity-10"></div>
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800" alt="人材サービス" class="w-full h-[480px] object-cover rounded-[40px] shadow-2xl relative z-10">
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
              <span class="text-xs font-bold text-[var(--main-color)] uppercase tracking-widest block mb-3">01 / Staffing</span>
              <h3 class="text-2xl font-black mb-4">人材派遣</h3>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="inline-block bg-[var(--main-color)]/10 text-[var(--main-color)] text-xs font-bold px-3 py-1 rounded-full">短期対応可</span>
                <span class="inline-block bg-[var(--main-color)]/10 text-[var(--main-color)] text-xs font-bold px-3 py-1 rounded-full">即戦力</span>
              </div>
              <p class="text-sm text-[var(--text-light)] leading-relaxed flex-1">
                建設・設計分野に精通した技術者を必要な期間だけ派遣。プロジェクトの規模や期間に合わせて柔軟に対応します。
              </p>
              <ul class="mt-6 space-y-2 text-sm font-bold border-t border-gray-200 pt-6">
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>CAD・BIMオペレーター</span></li>
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>施工管理技術者</span></li>
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>設計補助スタッフ</span></li>
              </ul>
            </div>
            <div class="bg-[var(--accent-color)] rounded-[40px] p-8 flex flex-col shadow-md hover:shadow-xl transition-shadow">
              <span class="text-xs font-bold text-[var(--main-color)] uppercase tracking-widest block mb-3">02 / Recruitment</span>
              <h3 class="text-2xl font-black mb-4">人材紹介</h3>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="inline-block bg-[var(--main-color)]/10 text-[var(--main-color)] text-xs font-bold px-3 py-1 rounded-full">正社員採用</span>
                <span class="inline-block bg-[var(--main-color)]/10 text-[var(--main-color)] text-xs font-bold px-3 py-1 rounded-full">マッチング</span>
              </div>
              <p class="text-sm text-[var(--text-light)] leading-relaxed flex-1">
                お客様の企業文化やプロジェクト要件を深く理解し、最適な人材をご紹介。採用後の定着までしっかりフォローします。
              </p>
              <ul class="mt-6 space-y-2 text-sm font-bold border-t border-gray-200 pt-6">
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>技術者の正社員紹介</span></li>
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>紹介予定派遣</span></li>
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>採用コンサルティング</span></li>
              </ul>
            </div>
            <div class="bg-[var(--accent-color)] rounded-[40px] p-8 flex flex-col shadow-md hover:shadow-xl transition-shadow">
              <span class="text-xs font-bold text-[var(--main-color)] uppercase tracking-widest block mb-3">03 / Training</span>
              <h3 class="text-2xl font-black mb-4">スキルアップ支援</h3>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="inline-block bg-[var(--main-color)]/10 text-[var(--main-color)] text-xs font-bold px-3 py-1 rounded-full">資格取得</span>
                <span class="inline-block bg-[var(--main-color)]/10 text-[var(--main-color)] text-xs font-bold px-3 py-1 rounded-full">実務研修</span>
              </div>
              <p class="text-sm text-[var(--text-light)] leading-relaxed flex-1">
                CAD・BIM研修や資格取得支援など、技術者のスキルアップをバックアップ。現場で即戦力となる人材を育成します。
              </p>
              <ul class="mt-6 space-y-2 text-sm font-bold border-t border-gray-200 pt-6">
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>CAD・BIM操作研修</span></li>
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>施工管理技士対策講座</span></li>
                <li class="flex items-start gap-2"><span class="text-[var(--main-color)] mt-0.5">&#9654;</span><span>安全衛生教育</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 対応職種 -->
      <section class="py-20 bg-[#F4F7F9] relative overflow-hidden">
        <div class="bubble-field">
          <span class="bubble bubble-warm" style="width:130px;height:130px;left:6%;top:20%;animation-delay:0.8s;"></span>
          <span class="bubble bubble-warm" style="width:95px;height:95px;left:80%;top:65%;animation-delay:1.9s;"></span>
        </div>
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-16">
            <p class="font-en font-bold text-sm tracking-[0.3em] text-[var(--main-color)] uppercase mb-4">JOB TYPES</p>
            <h2 class="text-3xl font-black">対応職種</h2>
            <div class="mt-6 w-16 h-1 bg-[var(--main-color)] rounded-full mx-auto"></div>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white rounded-[30px] p-8 flex items-start gap-6 shadow-md hover:shadow-xl transition-shadow">
              <div class="w-14 h-14 bg-[var(--main-color)] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-[var(--main-color)]/20">
                <span class="text-white font-en font-bold">01</span>
              </div>
              <div>
                <h3 class="font-black text-lg mb-2">CADオペレーター</h3>
                <p class="text-sm text-[var(--text-light)] leading-relaxed">AutoCAD・Jw_cadなど各種CADソフトに対応。建築・土木・設備図面の作成・修正を正確にこなします。</p>
              </div>
            </div>
            <div class="bg-white rounded-[30px] p-8 flex items-start gap-6 shadow-md hover:shadow-xl transition-shadow">
              <div class="w-14 h-14 bg-[var(--main-color)] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-[var(--main-color)]/20">
                <span class="text-white font-en font-bold">02</span>
              </div>
              <div>
                <h3 class="font-black text-lg mb-2">生産設計エンジニア</h3>
                <p class="text-sm text-[var(--text-light)] leading-relaxed">施工図・製作図の作成から現場との調整まで、生産設計プロセス全体をカバーする技術者を提供します。</p>
              </div>
            </div>
            <div class="bg-white rounded-[30px] p-8 flex items-start gap-6 shadow-md hover:shadow-xl transition-shadow">
              <div class="w-14 h-14 bg-[var(--main-color)] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-[var(--main-color)]/20">
                <span class="text-white font-en font-bold">03</span>
              </div>
              <div>
                <h3 class="font-black text-lg mb-2">BIMオペレーター</h3>
                <p class="text-sm text-[var(--text-light)] leading-relaxed">Revit・ArchiCADなどのBIMツールを駆使し、3Dモデリングから数量算出、干渉チェックまで対応します。</p>
              </div>
            </div>
            <div class="bg-white rounded-[30px] p-8 flex items-start gap-6 shadow-md hover:shadow-xl transition-shadow">
              <div class="w-14 h-14 bg-[var(--main-color)] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-[var(--main-color)]/20">
                <span class="text-white font-en font-bold">04</span>
              </div>
              <div>
                <h3 class="font-black text-lg mb-2">現場監督補助</h3>
                <p class="text-sm text-[var(--text-light)] leading-relaxed">工程管理・品質管理・安全管理の補助業務を担当。経験豊富なスタッフが現場運営をサポートします。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ご利用の流れ -->
      <section class="py-20 bg-white relative overflow-hidden">
        <div class="bubble-field">
          <span class="bubble" style="width:100px;height:100px;left:10%;top:30%;animation-delay:1.2s;"></span>
          <span class="bubble" style="width:80px;height:80px;left:85%;top:50%;animation-delay:2.5s;"></span>
        </div>
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-16">
            <p class="font-en font-bold text-sm tracking-[0.3em] text-[var(--main-color)] uppercase mb-4">FLOW</p>
            <h2 class="text-3xl font-black">ご利用の流れ</h2>
            <div class="mt-6 w-16 h-1 bg-[var(--main-color)] rounded-full mx-auto"></div>
          </div>
          <div class="grid md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="w-20 h-20 bg-[var(--main-color)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[var(--main-color)]/20">
                <span class="text-white font-en font-bold text-xl">01</span>
              </div>
              <h3 class="font-black text-lg mb-3">お問い合わせ</h3>
              <p class="text-sm text-[var(--text-light)] leading-relaxed">お電話・メール・フォームからお気軽にご連絡ください。</p>
            </div>
            <div class="text-center">
              <div class="w-20 h-20 bg-[var(--main-color)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[var(--main-color)]/20">
                <span class="text-white font-en font-bold text-xl">02</span>
              </div>
              <h3 class="font-black text-lg mb-3">ヒアリング</h3>
              <p class="text-sm text-[var(--text-light)] leading-relaxed">必要なスキル・人数・期間など、詳しい条件をお伺いします。</p>
            </div>
            <div class="text-center">
              <div class="w-20 h-20 bg-[var(--main-color)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[var(--main-color)]/20">
                <span class="text-white font-en font-bold text-xl">03</span>
              </div>
              <h3 class="font-black text-lg mb-3">人材提案</h3>
              <p class="text-sm text-[var(--text-light)] leading-relaxed">条件に合った最適な人材をご提案。スキルシートもご確認いただけます。</p>
            </div>
            <div class="text-center">
              <div class="w-20 h-20 bg-[var(--main-color)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[var(--main-color)]/20">
                <span class="text-white font-en font-bold text-xl">04</span>
              </div>
              <h3 class="font-black text-lg mb-3">就業開始</h3>
              <p class="text-sm text-[var(--text-light)] leading-relaxed">就業開始後も定期フォローで安定稼働をサポートします。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-12 px-6">
        <div class="max-w-5xl mx-auto bg-[var(--main-color)] rounded-[60px] p-10 md:p-16 text-center text-white shadow-2xl">
          <h2 class="font-en font-bold tracking-[0.3em] mb-4 text-sm">CONTACT</h2>
          <h3 class="text-3xl md:text-4xl font-black mb-8">人材に関するご相談</h3>
          <p class="text-white/80 font-bold mb-10">技術者の派遣・紹介をお考えの企業様、お気軽にご相談ください。</p>
          <div class="flex flex-col md:flex-row justify-center items-center gap-4">
            <a href="/contact" data-page-slug="contact" class="bg-white text-[var(--main-color)] w-full md:w-auto px-10 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-all">
              お問い合わせ
            </a>
            <a href="/recruit" data-page-slug="recruit" class="bg-transparent border-2 border-white text-white w-full md:w-auto px-10 py-4 rounded-full font-black text-lg hover:bg-white/10 transition-all">
              求職者の方はこちら
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
