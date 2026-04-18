import type { Template } from './types';

export const warmTemplate: Template = {
  id: 'template-warm',
  name: 'Warm: 温かみと信頼感',
  tags: ['warm', 'gold', 'corporate', 'construction', 'beige'],
  description: '暖色系の背景にゴールドアクセント。建設・不動産・専門サービス業に最適な、信頼感と温もりのあるデザイン。',
  html: `<div class="template-root" style="--main-color: #c59500; --main-dark: #9a7500; --accent-color: #FDFBF7; --text-color: #333333; --text-light: #6b7280; --bg-color: #ffffff; --section-gap: 0; --section-padding: 4rem 0;">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&family=Quicksand:wght@600;700&display=swap');
    .template-root { font-family: 'Noto Sans JP', sans-serif; }
    .template-root .font-en { font-family: 'Quicksand', sans-serif; }
    .template-root .bubble-field { position: absolute; inset: 0; pointer-events: none; z-index: 5; }
    .template-root .bubble { position: absolute; border-radius: 9999px; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0)); opacity: 0.5; filter: blur(0.5px); animation: warmFloat 16s ease-in-out infinite; }
    .template-root .bubble-warm { background: radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--main-color) 25%, transparent), transparent); }
    @keyframes warmFloat { 0% { transform: translateY(0px); } 50% { transform: translateY(-18px); } 100% { transform: translateY(0px); } }
  </style>
  <div class="min-h-screen text-[var(--text-color)] bg-[var(--bg-color)]">

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
      <!-- top: ヒーロー -->
      <section id="top" class="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div class="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" class="w-full h-full object-cover opacity-30" alt="Hero">
        </div>
        <div class="relative z-10 text-center px-6">
          <h1 class="text-5xl md:text-7xl font-black leading-tight mb-8 text-white">
            お客様の未来を<br><span class="text-[var(--main-color)]">共創</span>する。
          </h1>
          <p class="text-lg md:text-xl font-bold tracking-widest text-white/80">プロフェッショナルな技術と確かな実績で</p>
        </div>
      </section>

      <!-- 数字セクション -->
      <section class="py-14 bg-[var(--accent-color)]">
        <div class="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <span class="block font-en text-5xl font-bold text-[var(--main-color)] mb-2">500<span class="text-lg">+</span></span>
            <p class="font-bold text-sm">年間実績数</p>
          </div>
          <div>
            <span class="block font-en text-5xl font-bold text-[var(--main-color)] mb-2">98<span class="text-lg">%</span></span>
            <p class="font-bold text-sm">クライアント継続率</p>
          </div>
          <div>
            <span class="block font-en text-5xl font-bold text-[var(--main-color)] mb-2">50<span class="text-lg">名</span></span>
            <p class="font-bold text-sm">在籍スタッフ</p>
          </div>
          <div>
            <span class="block font-en text-5xl font-bold text-[var(--main-color)] mb-2">15<span class="text-lg">年</span></span>
            <p class="font-bold text-sm">業界での信頼実績</p>
          </div>
        </div>
      </section>

      <!-- concept: ミッション・理念 -->
      <section id="concept" class="py-20 bg-[#F4F7F9] overflow-hidden">
        <div class="max-w-6xl mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-14 items-center">
            <div class="relative">
              <div class="rounded-[60px] rounded-tr-[20px] overflow-hidden aspect-[4/5] shadow-2xl">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" class="w-full h-full object-cover" alt="Office">
              </div>
            </div>
            <div class="relative">
              <div class="bubble-field">
                <span class="bubble bubble-warm" style="width:120px;height:120px;left:8%;top:12%;animation-delay:0.6s;"></span>
                <span class="bubble bubble-warm" style="width:90px;height:90px;left:60%;top:8%;animation-delay:1.4s;"></span>
              </div>
              <div class="relative z-10">
                <h2 class="font-en font-bold tracking-widest text-[var(--main-color)] mb-6 text-sm">OUR MISSION</h2>
                <h3 class="text-3xl md:text-4xl font-black mb-6 leading-tight">
                  技術の先に、<br>確かな<span class="text-[var(--main-color)]">安心</span>を届ける。
                </h3>
                <p class="text-[var(--text-light)] leading-loose mb-8">
                  私たちはお客様の課題解決に真摯に向き合い、確かな技術と豊富な実績をもとに、最適なソリューションを提供します。変化の激しい現代において、変わらない誠実さと最先端の技術を融合させ、お客様の期待を超えるパートナーであり続けます。
                </p>
                <div class="grid grid-cols-2 gap-6 border-t border-gray-200 pt-8">
                  <div>
                    <span class="block text-2xl font-en font-black">Quality First</span>
                    <p class="text-xs font-bold text-[var(--text-light)] mt-2">徹底した品質管理体制</p>
                  </div>
                  <div>
                    <span class="block text-2xl font-en font-black">Global Team</span>
                    <p class="text-xs font-bold text-[var(--text-light)] mt-2">多様な視点による最適解</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- features: 強み -->
      <section id="features" class="py-20 bg-white relative overflow-hidden">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="font-en font-bold tracking-widest text-[var(--main-color)] mb-2 text-sm">STRENGTHS</h2>
            <h3 class="text-3xl font-black">私たちの3つの強み</h3>
            <div class="mt-6 w-16 h-1 bg-[var(--main-color)] mx-auto rounded-full"></div>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-[var(--accent-color)] p-10 rounded-[40px] shadow-sm group hover:shadow-xl transition-all text-center">
              <div class="w-20 h-20 bg-[var(--main-color)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[var(--main-color)]/20">
                <span class="text-white font-en font-bold text-xl">01</span>
              </div>
              <h4 class="text-xl font-black mb-4">確かな実績</h4>
              <p class="text-sm text-[var(--text-light)] leading-relaxed">年間500件以上のプロジェクトを完遂。多様な業界で培った知見が、確実な成果を支えます。</p>
            </div>
            <div class="bg-[var(--accent-color)] p-10 rounded-[40px] shadow-sm group hover:shadow-xl transition-all text-center">
              <div class="w-20 h-20 bg-[var(--main-color)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[var(--main-color)]/20">
                <span class="text-white font-en font-bold text-xl">02</span>
              </div>
              <h4 class="text-xl font-black mb-4">専門家集団</h4>
              <p class="text-sm text-[var(--text-light)] leading-relaxed">各分野のスペシャリストがチームを構成。専門性の高い課題にも多角的な視点で解決策を提示します。</p>
            </div>
            <div class="bg-[var(--accent-color)] p-10 rounded-[40px] shadow-sm group hover:shadow-xl transition-all text-center">
              <div class="w-20 h-20 bg-[var(--main-color)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[var(--main-color)]/20">
                <span class="text-white font-en font-bold text-xl">03</span>
              </div>
              <h4 class="text-xl font-black mb-4">徹底した管理</h4>
              <p class="text-sm text-[var(--text-light)] leading-relaxed">厳格な品質・情報管理体制を構築。安定した品質と高いセキュリティをお約束します。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- service: 事業内容 -->
      <section id="service" class="py-20 bg-[var(--accent-color)] relative overflow-hidden">
        <div class="max-w-6xl mx-auto px-6">
          <div class="bubble-field">
            <span class="bubble" style="width:110px;height:110px;left:8%;top:12%;animation-delay:0.7s;"></span>
            <span class="bubble" style="width:100px;height:100px;left:86%;top:72%;animation-delay:2.1s;"></span>
          </div>
          <div class="mb-12">
            <h2 class="font-en font-bold tracking-widest text-[var(--main-color)] mb-2 text-sm">SERVICES</h2>
            <h3 class="text-3xl font-black">事業内容</h3>
          </div>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white p-8 rounded-[40px] flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow">
              <div>
                <span class="text-xs font-bold text-[var(--main-color)] mb-4 block uppercase tracking-tighter">01 / Service</span>
                <h4 class="text-2xl font-black mb-6">コンサルティング</h4>
                <div class="rounded-[30px] overflow-hidden mb-4 h-40">
                  <img src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover" alt="Service 1">
                </div>
                <p class="text-sm text-[var(--text-light)] leading-relaxed">お客様の課題を分析し、最適なソリューションを提案します。</p>
              </div>
              <span class="mt-6 font-black text-xs border-b border-[var(--main-color)] pb-1 self-start text-[var(--text-color)]">MORE</span>
            </div>
            <div class="bg-white p-8 rounded-[40px] flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow">
              <div>
                <span class="text-xs font-bold text-[var(--main-color)] mb-4 block uppercase tracking-tighter">02 / Service</span>
                <h4 class="text-2xl font-black mb-6">プロジェクト管理</h4>
                <div class="rounded-[30px] overflow-hidden mb-4 h-40">
                  <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover" alt="Service 2">
                </div>
                <p class="text-sm text-[var(--text-light)] leading-relaxed">経験豊富なチームが、プロジェクトの成功を一貫してサポートします。</p>
              </div>
              <span class="mt-6 font-black text-xs border-b border-[var(--main-color)] pb-1 self-start text-[var(--text-color)]">MORE</span>
            </div>
            <div class="bg-white p-8 rounded-[40px] flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow">
              <div>
                <span class="text-xs font-bold text-[var(--main-color)] mb-4 block uppercase tracking-tighter">03 / Service</span>
                <h4 class="text-2xl font-black mb-6">人材ソリューション</h4>
                <div class="rounded-[30px] overflow-hidden mb-4 h-40">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover" alt="Service 3">
                </div>
                <p class="text-sm text-[var(--text-light)] leading-relaxed">適切な人材をマッチングし、組織の力を最大化します。</p>
              </div>
              <span class="mt-6 font-black text-xs border-b border-[var(--main-color)] pb-1 self-start text-[var(--text-color)]">MORE</span>
            </div>
          </div>
        </div>
      </section>

      <!-- works: 実績・メッセージ -->
      <section id="works" class="py-20 bg-[#F4F7F9] relative overflow-hidden">
        <div class="max-w-6xl mx-auto px-6">
          <div class="bubble-field">
            <span class="bubble bubble-warm" style="width:130px;height:130px;left:6%;top:20%;animation-delay:0.8s;"></span>
            <span class="bubble bubble-warm" style="width:95px;height:95px;left:80%;top:65%;animation-delay:1.9s;"></span>
          </div>
          <div class="bg-white rounded-[60px] p-8 md:p-14 shadow-xl">
            <div class="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 class="font-en font-bold tracking-widest text-[var(--main-color)] mb-4 text-sm">MESSAGE</h2>
                <h3 class="text-3xl font-black mb-6 italic">お客様と共に、<br>価値を創造する。</h3>
                <p class="text-[var(--text-light)] leading-loose mb-8">
                  私たちは単にサービスを提供するだけでなく、お客様のビジネスパートナーとして、持続的な成長をサポートします。長年の経験と専門知識を活かし、最高の成果をお約束します。
                </p>
                <a href="#company" class="bg-[var(--main-color)] text-white px-10 py-4 rounded-full font-bold inline-block hover:opacity-90 transition-all">企業情報を詳しく見る</a>
              </div>
              <div class="rounded-[40px] overflow-hidden aspect-[3/4]">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover" alt="Meeting">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- news: ニュース -->
      <section id="news" class="py-20 bg-white relative overflow-hidden">
        <div class="max-w-6xl mx-auto px-6">
          <div class="bubble-field">
            <span class="bubble" style="width:110px;height:110px;left:4%;top:18%;animation-delay:0.6s;"></span>
            <span class="bubble" style="width:90px;height:90px;left:88%;top:60%;animation-delay:1.8s;"></span>
          </div>
          <div class="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 class="font-en font-bold tracking-widest text-[var(--main-color)] mb-2 text-sm">NEWS</h2>
              <h3 class="text-3xl font-black">ニュース</h3>
            </div>
            <a href="/news" class="text-sm font-bold border-b-2 border-[var(--main-color)] pb-1 mt-4 md:mt-0 hover:text-[var(--main-color)] transition-all">VIEW ALL</a>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            <a href="/news/news-page" class="group block"><article class="flex flex-col sm:flex-row gap-4 p-5 bg-[var(--accent-color)] rounded-[24px] hover:shadow-lg transition-shadow"><div class="w-full sm:w-32 h-24 bg-gray-100 rounded-[16px] overflow-hidden shrink-0"><img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=400" class="w-full h-full object-cover group-hover:scale-105 transition-transform"></div><div><p class="text-xs font-en font-bold text-[var(--main-color)] mb-2">2025.04.01</p><h4 class="text-base font-bold group-hover:text-[var(--main-color)] transition-colors line-clamp-2">最新情報は公開投稿から自動生成されます。</h4></div></article></a>
            <a href="/news/news-page" class="group block"><article class="flex flex-col sm:flex-row gap-4 p-5 bg-[var(--accent-color)] rounded-[24px] hover:shadow-lg transition-shadow"><div class="w-full sm:w-32 h-24 bg-gray-100 rounded-[16px] overflow-hidden shrink-0"><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400" class="w-full h-full object-cover group-hover:scale-105 transition-transform"></div><div><p class="text-xs font-en font-bold text-[var(--main-color)] mb-2">2025.03.15</p><h4 class="text-base font-bold group-hover:text-[var(--main-color)] transition-colors line-clamp-2">ニュース記事のタイトルがここに表示されます。</h4></div></article></a>
          </div>
        </div>
      </section>

      <!-- company: 企業情報・お問い合わせ -->
      <section id="company" class="py-12 px-6">
        <div class="max-w-5xl mx-auto bg-[var(--main-color)] rounded-[60px] p-10 md:p-16 text-center text-white shadow-2xl">
          <h2 class="font-en font-bold tracking-[0.3em] mb-4 text-sm">CONTACT</h2>
          <h3 class="text-3xl md:text-4xl font-black mb-8">お気軽にご相談ください</h3>
          <div class="flex flex-col md:flex-row justify-center items-center gap-4">
            <a href="#" class="bg-white text-[var(--main-color)] w-full md:w-auto px-10 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-all">
              TEL. 000-0000-0000
            </a>
            <a href="#" class="bg-transparent border-2 border-white w-full md:w-auto px-10 py-4 rounded-full font-black text-lg hover:bg-white hover:text-[var(--main-color)] transition-all">
              お問い合わせフォーム
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-[var(--accent-color)] pt-14 pb-10 relative overflow-hidden">
      <div class="max-w-6xl mx-auto px-6">
        <div class="bubble-field">
          <span class="bubble bubble-warm" style="width:120px;height:120px;left:6%;top:18%;animation-delay:0.7s;"></span>
          <span class="bubble bubble-warm" style="width:90px;height:90px;left:82%;top:65%;animation-delay:1.9s;"></span>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
          <div class="col-span-2 md:col-span-1">
            <div class="font-black text-lg mb-4">Company Name</div>
            <p class="text-xs font-bold text-gray-400 leading-loose">
              株式会社サンプル<br>
              〒000-0000<br>
              東京都渋谷区1-1-1<br>
              TEL: 000-0000-0000
            </p>
          </div>
          <div>
            <h4 class="font-bold text-sm mb-6 border-l-4 border-[var(--main-color)] pl-3">企業情報</h4>
            <ul class="space-y-3 text-sm font-bold text-gray-500">
              <li><a href="#" class="hover:text-[var(--main-color)]">会社概要</a></li>
              <li><a href="#" class="hover:text-[var(--main-color)]">代表挨拶</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-sm mb-6 border-l-4 border-[var(--main-color)] pl-3">事業内容</h4>
            <ul class="space-y-3 text-sm font-bold text-gray-500">
              <li><a href="#" class="hover:text-[var(--main-color)]">サービス一覧</a></li>
              <li><a href="#" class="hover:text-[var(--main-color)]">実績紹介</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-sm mb-6 border-l-4 border-[var(--main-color)] pl-3">その他</h4>
            <ul class="space-y-3 text-sm font-bold text-gray-500">
              <li><a href="#" class="hover:text-[var(--main-color)]">採用情報</a></li>
              <li><a href="#" class="hover:text-[var(--main-color)]">ブログ</a></li>
              <li><a href="#" class="hover:text-[var(--main-color)]">お問い合わせ</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-200 pt-6 text-center text-xs font-bold text-gray-400">
          <p>&copy; Company Name. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  </div>
</div>`,
  features: {
    hasBlog: false,
    hasNews: true,
    blogSectionId: 'works',
    newsSectionId: 'news',
  },
  // ブログカード（一覧ページ用）
  postCardTemplate: `<a href="{{href}}" class="group">
  <div class="aspect-video overflow-hidden rounded-3xl mb-5 shadow-md bg-gray-100">{{image}}</div>
  <div class="flex items-center gap-3 mb-3">
    <span class="text-sm font-bold text-gray-400" style="font-family:'Quicksand',sans-serif">{{date}}</span>
    <span class="bg-[#F4F7F9] text-[var(--main-color)] text-xs font-bold px-3 py-1 rounded-full">BLOG</span>
  </div>
  <h3 class="text-xl font-black group-hover:text-[var(--main-color)] transition-colors line-clamp-2 leading-snug mb-3">{{title}}</h3>
  {{excerptHtml}}
</a>`,
  postListWrapper: `<div class="max-w-6xl mx-auto px-6"><div class="grid md:grid-cols-3 gap-8">{{items}}</div></div>`,
  // ニュースアイテム（一覧ページ用）
  newsItemTemplate: `<a href="{{href}}" class="group block bg-[var(--accent-color)] rounded-[30px] p-6 md:p-8 hover:shadow-lg transition-shadow">
  <div class="flex flex-col md:flex-row gap-6 items-start">
    {{imageBlock}}
    <div class="flex-1">
      <div class="flex items-center gap-3 mb-3">
        <span class="text-sm font-bold text-gray-400" style="font-family:'Quicksand',sans-serif">{{date}}</span>
        <span class="bg-[#F4F7F9] text-[var(--main-color)] text-xs font-bold px-3 py-1 rounded-full">NEWS</span>
      </div>
      <h2 class="text-xl font-black group-hover:text-[var(--main-color)] transition-colors mb-3">{{title}}</h2>
      {{excerptHtml}}
    </div>
  </div>
</a>`,
  newsListWrapper: `<div class="max-w-6xl mx-auto px-6"><div class="space-y-4">{{items}}</div></div>`,
  // TOPページ用ニュースセクション
  topNewsSectionTemplate: `<section id="news" class="py-20 bg-white relative overflow-hidden"><div class="max-w-6xl mx-auto px-6"><div class="flex flex-col md:flex-row justify-between items-end mb-12"><div><h2 class="text-sm font-bold tracking-widest text-[var(--main-color)] uppercase mb-2" style="font-family:'Quicksand',sans-serif">NEWS</h2><h3 class="text-3xl font-black">ニュース</h3></div><a href="{{newsListHref}}" class="text-sm font-bold border-b-2 border-[var(--main-color)] pb-1 mt-4 md:mt-0 hover:text-[var(--main-color)] transition-all">VIEW ALL</a></div><div class="grid md:grid-cols-2 gap-6">{{items}}</div></div></section>`,
  // TOPページ用ブログセクション
  topBlogSectionTemplate: `<section id="works" class="py-20 bg-[#F4F7F9] relative overflow-hidden"><div class="max-w-6xl mx-auto px-6"><div class="flex flex-col md:flex-row justify-between items-end mb-12"><div><h2 class="text-sm font-bold tracking-widest text-[var(--main-color)] uppercase mb-2" style="font-family:'Quicksand',sans-serif">BLOG</h2><h3 class="text-3xl font-black">最新のブログ記事</h3></div><a href="{{blogListHref}}" class="text-sm font-bold border-b-2 border-[var(--main-color)] pb-1 mt-4 md:mt-0 hover:text-[var(--main-color)] transition-all">VIEW ALL</a></div><div class="grid md:grid-cols-3 gap-6">{{items}}</div></div></section>`,
  footerDefaults: {
    companyName: 'Company Name',
    address: '〒000-0000 東京都渋谷区1-1-1',
    tel: '000-0000-0000',
    links: [
      { label: '会社概要', href: '#' },
      { label: 'サービス一覧', href: '#' },
      { label: 'お問い合わせ', href: '#' },
    ],
  },
};
