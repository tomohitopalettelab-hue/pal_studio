export const TEMPLATES = [
  {
    id: 'simple-modern',
    name: 'シンプルモダン',
    description: '信頼感のある企業やクリニック向け。白と青を基調とした清潔感のあるデザイン。',
    html: `<div style="--primary: #2563eb; --secondary: #f1f5f9; --text: #1e293b; --bg: #ffffff; --accent: #3b82f6;" class="min-h-screen font-sans bg-[var(--bg)] text-[var(--text)]">
  <!-- Header -->
  <header class="flex justify-between items-center p-6 border-b border-[var(--secondary)] sticky top-0 bg-[var(--bg)]/90 backdrop-blur z-50">
    <div class="text-xl font-bold tracking-tight text-[var(--primary)]">Logo</div>
    <nav class="hidden md:flex gap-6 text-sm font-medium opacity-80">
      <a href="#top" class="hover:text-[var(--primary)] transition">Top</a>
      <a href="#section-1" class="hover:text-[var(--primary)] transition">Concept</a>
      <a href="#section-3" class="hover:text-[var(--primary)] transition">Service</a>
      <a href="#section-5" class="hover:text-[var(--primary)] transition">Company</a>
    </nav>
  </header>

  <main>
    <!-- Top: Hero Area -->
    <section id="top" class="py-24 px-6 text-center bg-[var(--secondary)] flex flex-col items-center justify-center min-h-[60vh]">
      <h1 class="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">信頼と実績で<br><span class="text-[var(--primary)]">未来</span>を創る</h1>
      <p class="text-lg opacity-70 mb-10 max-w-2xl mx-auto leading-relaxed">私たちは顧客の課題に寄り添い、最適なソリューションを提供することで、ビジネスの成長を加速させます。</p>
      <button class="bg-[var(--primary)] text-white px-10 py-4 rounded-full font-bold hover:opacity-90 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">お問い合わせ</button>
    </section>

    <!-- Section 1: Concept -->
    <section id="section-1" data-id="1" class="py-20 px-6 max-w-4xl mx-auto text-center">
      <span class="text-[var(--primary)] font-bold tracking-widest text-xs uppercase mb-2 block">Our Concept</span>
      <h2 class="text-3xl font-bold mb-8">想いをカタチにする</h2>
      <p class="leading-loose opacity-80">お客様一人ひとりの声に耳を傾け、本質的な価値を追求します。<br>技術とデザインの力で、新しい可能性を切り拓いていきます。</p>
    </section>

    <!-- Section 2: Features (3 Columns) -->
    <section id="section-2" data-id="2" class="py-20 px-6 bg-[var(--secondary)]">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">3つの強み</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-[var(--bg)] p-8 rounded-2xl shadow-sm border border-[var(--text)]/5">
            <div class="w-12 h-12 bg-[var(--primary)]/10 text-[var(--primary)] rounded-lg flex items-center justify-center mb-4 font-bold text-xl">01</div>
            <h3 class="font-bold text-xl mb-3">高品質な技術</h3>
            <p class="text-sm opacity-70">最新の技術トレンドを取り入れ、堅牢で拡張性の高いシステムを構築します。</p>
          </div>
          <div class="bg-[var(--bg)] p-8 rounded-2xl shadow-sm border border-[var(--text)]/5">
            <div class="w-12 h-12 bg-[var(--primary)]/10 text-[var(--primary)] rounded-lg flex items-center justify-center mb-4 font-bold text-xl">02</div>
            <h3 class="font-bold text-xl mb-3">迅速な対応</h3>
            <p class="text-sm opacity-70">スピーディーなコミュニケーションと開発体制で、ビジネスの機会を逃しません。</p>
          </div>
          <div class="bg-[var(--bg)] p-8 rounded-2xl shadow-sm border border-[var(--text)]/5">
            <div class="w-12 h-12 bg-[var(--primary)]/10 text-[var(--primary)] rounded-lg flex items-center justify-center mb-4 font-bold text-xl">03</div>
            <h3 class="font-bold text-xl mb-3">万全のサポート</h3>
            <p class="text-sm opacity-70">リリース後も安心して運用いただけるよう、手厚いアフターサポートを提供します。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Service (List/Card) -->
    <section id="section-3" data-id="3" class="py-20 px-6 max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">サービス内容</h2>
      <div class="space-y-6">
        <div class="flex flex-col md:flex-row gap-6 items-center bg-[var(--bg)] border border-[var(--secondary)] p-6 rounded-xl hover:border-[var(--primary)] transition cursor-pointer">
          <div class="w-full md:w-1/3 h-48 bg-[var(--secondary)] rounded-lg flex items-center justify-center text-[var(--text)]/20 font-bold">Image</div>
          <div class="flex-1">
            <h3 class="text-2xl font-bold mb-2 text-[var(--primary)]">Web制作プラン</h3>
            <p class="opacity-70 mb-4">コーポレートサイトからLPまで、目的に合わせたWebサイトを制作します。</p>
            <p class="font-bold text-lg">¥200,000~</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-6 items-center bg-[var(--bg)] border border-[var(--secondary)] p-6 rounded-xl hover:border-[var(--primary)] transition cursor-pointer">
          <div class="w-full md:w-1/3 h-48 bg-[var(--secondary)] rounded-lg flex items-center justify-center text-[var(--text)]/20 font-bold">Image</div>
          <div class="flex-1">
            <h3 class="text-2xl font-bold mb-2 text-[var(--primary)]">システム開発プラン</h3>
            <p class="opacity-70 mb-4">業務効率化ツールやWebアプリの開発を行い、DXを支援します。</p>
            <p class="font-bold text-lg">¥500,000~</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Works (Grid) -->
    <section id="section-4" data-id="4" class="py-20 px-6 bg-[var(--secondary)]">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">制作実績</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="aspect-square bg-[var(--bg)] rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition">Project A</div>
          <div class="aspect-square bg-[var(--bg)] rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition">Project B</div>
          <div class="aspect-square bg-[var(--bg)] rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition">Project C</div>
          <div class="aspect-square bg-[var(--bg)] rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition">Project D</div>
        </div>
      </div>
    </section>

    <!-- Section 5: Company (Table) -->
    <section id="section-5" data-id="5" class="py-20 px-6 max-w-3xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">会社概要</h2>
      <div class="border-t border-[var(--text)]/10">
        <dl class="flex flex-col md:flex-row py-4 border-b border-[var(--text)]/10">
          <dt class="w-full md:w-1/3 font-bold opacity-60">会社名</dt>
          <dd class="w-full md:w-2/3">株式会社サンプル</dd>
        </dl>
        <dl class="flex flex-col md:flex-row py-4 border-b border-[var(--text)]/10">
          <dt class="w-full md:w-1/3 font-bold opacity-60">設立</dt>
          <dd class="w-full md:w-2/3">2024年1月</dd>
        </dl>
        <dl class="flex flex-col md:flex-row py-4 border-b border-[var(--text)]/10">
          <dt class="w-full md:w-1/3 font-bold opacity-60">所在地</dt>
          <dd class="w-full md:w-2/3">東京都渋谷区〇〇 1-2-3</dd>
        </dl>
        <dl class="flex flex-col md:flex-row py-4 border-b border-[var(--text)]/10">
          <dt class="w-full md:w-1/3 font-bold opacity-60">事業内容</dt>
          <dd class="w-full md:w-2/3">Web制作事業、システム開発事業</dd>
        </dl>
      </div>
    </section>
  </main>

  <footer class="bg-[var(--text)] text-[var(--bg)] py-10 text-center text-sm">
    <div class="mb-4 font-bold text-xl">Logo</div>
    <p class="opacity-60">&copy; 2024 Company Name. All Rights Reserved.</p>
  </footer>
</div>`
  },
  {
    id: 'pop-vibrant',
    name: 'ポップ＆元気',
    description: 'カフェ、イベント、子供向けサービス向け。明るい色使いと丸みのあるデザイン。',
    html: `<div style="--primary: #f97316; --secondary: #fef3c7; --text: #451a03; --bg: #fffbeb; --accent: #fbbf24;" class="min-h-screen font-sans bg-[var(--bg)] text-[var(--text)]">
  <!-- Header -->
  <header class="p-4 flex justify-center sticky top-0 z-50">
    <div class="bg-[var(--bg)]/90 backdrop-blur px-8 py-3 rounded-full shadow-lg font-black text-[var(--primary)] tracking-wider text-xl border-2 border-[var(--primary)]">POP!</div>
  </header>

  <main class="px-4 pb-12">
    <!-- Top: Hero -->
    <section id="top" class="py-16 text-center">
      <span class="inline-block bg-[var(--secondary)] text-[var(--primary)] px-4 py-1 rounded-full text-sm font-bold mb-4 animate-bounce">NEW OPEN!</span>
      <h1 class="text-5xl md:text-7xl font-black mb-6 leading-tight text-[var(--text)]">Enjoy<br><span class="text-[var(--primary)]">Every</span> Moment</h1>
      <p class="text-lg font-bold opacity-80 mb-8">ワクワクする毎日をあなたに届けます。</p>
      <button class="bg-[var(--primary)] text-white px-8 py-4 rounded-2xl font-black shadow-[var(--secondary)] shadow-xl hover:scale-105 transition transform border-b-4 border-[var(--text)] active:border-b-0 active:translate-y-1">今すぐチェック！</button>
    </section>

    <!-- Section 1: Concept -->
    <section id="section-1" data-id="1" class="py-16 px-4 max-w-4xl mx-auto text-center bg-white rounded-[3rem] shadow-lg mb-8 border-4 border-[var(--secondary)]">
      <h2 class="text-3xl font-black mb-6 text-[var(--primary)]">CONCEPT</h2>
      <p class="font-medium text-lg leading-loose">「楽しい」を一番に。<br>みんなが笑顔になれる場所を作りました。</p>
    </section>

    <!-- Section 2: Features -->
    <section id="section-2" data-id="2" class="py-12 max-w-5xl mx-auto">
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white p-8 rounded-[2rem] shadow-md border-b-8 border-[var(--primary)] text-center">
          <div class="text-4xl mb-4">🎈</div>
          <h3 class="font-black text-xl mb-2">Fun</h3>
          <p class="font-bold text-sm opacity-60">とにかく楽しい！</p>
        </div>
        <div class="bg-white p-8 rounded-[2rem] shadow-md border-b-8 border-[var(--accent)] text-center">
          <div class="text-4xl mb-4">✨</div>
          <h3 class="font-black text-xl mb-2">Fresh</h3>
          <p class="font-bold text-sm opacity-60">いつも新しい！</p>
        </div>
        <div class="bg-white p-8 rounded-[2rem] shadow-md border-b-8 border-[var(--primary)] text-center">
          <div class="text-4xl mb-4">🤝</div>
          <h3 class="font-black text-xl mb-2">Friendly</h3>
          <p class="font-bold text-sm opacity-60">みんな仲良し！</p>
        </div>
      </div>
    </section>

    <!-- Section 3: Service -->
    <section id="section-3" data-id="3" class="py-12 max-w-4xl mx-auto">
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[var(--secondary)] p-8 rounded-[2rem] relative overflow-hidden group hover:rotate-1 transition">
          <div class="absolute -right-4 -top-4 w-24 h-24 bg-[var(--primary)] rounded-full opacity-20"></div>
          <h3 class="text-2xl font-black text-[var(--primary)] mb-2">Menu A</h3>
          <p class="font-bold opacity-70">定番の人気メニュー！</p>
          <p class="text-xl font-black mt-4">¥500</p>
        </div>
        <div class="bg-[var(--secondary)] p-8 rounded-[2rem] relative overflow-hidden group hover:-rotate-1 transition">
          <div class="absolute -right-4 -top-4 w-24 h-24 bg-[var(--accent)] rounded-full opacity-20"></div>
          <h3 class="text-2xl font-black text-[var(--primary)] mb-2">Menu B</h3>
          <p class="font-bold opacity-70">期間限定のスペシャル！</p>
          <p class="text-xl font-black mt-4">¥800</p>
        </div>
      </div>
    </section>

    <!-- Section 4: Works/Gallery -->
    <section id="section-4" data-id="4" class="py-12">
      <h2 class="text-3xl font-black text-center mb-8 text-[var(--text)]">GALLERY</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        <div class="aspect-square bg-[var(--accent)] rounded-2xl rotate-2 hover:rotate-0 transition"></div>
        <div class="aspect-square bg-[var(--primary)] rounded-2xl -rotate-2 hover:rotate-0 transition opacity-80"></div>
        <div class="aspect-square bg-[var(--accent)] rounded-2xl rotate-1 hover:rotate-0 transition"></div>
        <div class="aspect-square bg-[var(--primary)] rounded-2xl -rotate-1 hover:rotate-0 transition opacity-80"></div>
      </div>
    </section>

    <!-- Section 5: Company -->
    <section id="section-5" data-id="5" class="py-12 px-6 max-w-2xl mx-auto bg-white rounded-3xl border-2 border-dashed border-[var(--text)]/20 text-center">
      <h2 class="text-2xl font-black mb-6">SHOP INFO</h2>
      <div class="space-y-4 font-bold">
        <p><span class="bg-[var(--secondary)] px-2 py-1 rounded mr-2">Name</span> POP! STORE</p>
        <p><span class="bg-[var(--secondary)] px-2 py-1 rounded mr-2">Open</span> 10:00 - 20:00</p>
        <p><span class="bg-[var(--secondary)] px-2 py-1 rounded mr-2">Access</span> 駅チカ徒歩3分</p>
      </div>
    </section>
  </main>

  <footer class="bg-[var(--primary)] text-white py-8 text-center font-black rounded-t-[3rem]">
    &copy; 2024 POP! Project.
  </footer>
</div>`
  },
  {
    id: 'chic-luxury',
    name: 'シック＆ラグジュアリー',
    description: '高級レストラン、ホテル、美容室向け。黒やゴールドを使った落ち着いたデザイン。',
    html: `<div style="--primary: #d4af37; --secondary: #171717; --text: #e5e5e5; --bg: #0a0a0a; --accent: #a3a3a3;" class="min-h-screen font-serif bg-[var(--bg)] text-[var(--text)]">
  <!-- Header -->
  <header class="fixed w-full top-0 left-0 p-8 flex justify-between items-center z-50 bg-gradient-to-b from-[var(--bg)] to-transparent">
    <div class="text-lg tracking-[0.3em] uppercase border-b border-[var(--primary)] pb-1 text-[var(--primary)]">Brand</div>
    <nav class="hidden md:flex gap-8 text-xs tracking-[0.2em] uppercase">
      <a href="#top" class="hover:text-[var(--primary)] transition">Top</a>
      <a href="#section-1" class="hover:text-[var(--primary)] transition">Concept</a>
      <a href="#section-3" class="hover:text-[var(--primary)] transition">Menu</a>
      <a href="#section-5" class="hover:text-[var(--primary)] transition">Access</a>
    </nav>
  </header>

  <main>
    <!-- Top: Hero -->
    <section id="top" class="h-screen flex flex-col justify-center items-center text-center px-6 relative">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--secondary)_0%,_var(--bg)_100%)] -z-10"></div>
      <p class="text-xs tracking-[0.4em] text-[var(--accent)] mb-8 uppercase">Premium Quality</p>
      <h1 class="text-5xl md:text-7xl font-light tracking-widest leading-snug mb-12">THE<br><span class="text-[var(--primary)]">EXPERIENCE</span></h1>
      <div class="w-px h-24 bg-gradient-to-b from-[var(--primary)] to-transparent"></div>
    </section>

    <!-- Section 1: Concept -->
    <section id="section-1" data-id="1" class="py-32 px-6 bg-[var(--secondary)]">
      <div class="max-w-3xl mx-auto text-center space-y-10">
        <h2 class="text-2xl font-light tracking-[0.3em] text-[var(--primary)]">PHILOSOPHY</h2>
        <p class="text-sm leading-loose text-[var(--accent)] font-sans tracking-wide">
          洗練された空間と、最高級のおもてなし。<br>
          日常を忘れ、特別なひとときをお過ごしください。<br>
          私たちは、美意識の極致を追求し続けます。
        </p>
      </div>
    </section>

    <!-- Section 2: Features -->
    <section id="section-2" data-id="2" class="py-32 px-6">
      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
        <div class="space-y-4">
          <div class="w-px h-12 bg-[var(--primary)] mx-auto"></div>
          <h3 class="text-lg tracking-widest">QUALITY</h3>
          <p class="text-xs text-[var(--accent)] font-sans leading-relaxed">妥協なき品質へのこだわり。</p>
        </div>
        <div class="space-y-4">
          <div class="w-px h-12 bg-[var(--primary)] mx-auto"></div>
          <h3 class="text-lg tracking-widest">SPACE</h3>
          <p class="text-xs text-[var(--accent)] font-sans leading-relaxed">静寂と調和が織りなす空間。</p>
        </div>
        <div class="space-y-4">
          <div class="w-px h-12 bg-[var(--primary)] mx-auto"></div>
          <h3 class="text-lg tracking-widest">HOSPITALITY</h3>
          <p class="text-xs text-[var(--accent)] font-sans leading-relaxed">心に響くおもてなし。</p>
        </div>
      </div>
    </section>

    <!-- Section 3: Service -->
    <section id="section-3" data-id="3" class="py-32 px-6 bg-[var(--secondary)]">
      <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
        <div class="border border-[var(--primary)]/30 p-10 text-center hover:bg-[var(--primary)]/5 transition duration-500">
          <h3 class="text-xl tracking-widest mb-2">COURSE A</h3>
          <p class="text-[var(--primary)] text-sm mb-6">Standard</p>
          <p class="font-light text-2xl">¥15,000</p>
        </div>
        <div class="border border-[var(--primary)]/30 p-10 text-center hover:bg-[var(--primary)]/5 transition duration-500">
          <h3 class="text-xl tracking-widest mb-2">COURSE B</h3>
          <p class="text-[var(--primary)] text-sm mb-6">Premium</p>
          <p class="font-light text-2xl">¥25,000</p>
        </div>
      </div>
    </section>

    <!-- Section 4: Works -->
    <section id="section-4" data-id="4" class="py-32 px-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-1 max-w-6xl mx-auto">
        <div class="aspect-[3/4] bg-[var(--secondary)] grayscale hover:grayscale-0 transition duration-700"></div>
        <div class="aspect-[3/4] bg-[var(--secondary)] grayscale hover:grayscale-0 transition duration-700"></div>
        <div class="aspect-[3/4] bg-[var(--secondary)] grayscale hover:grayscale-0 transition duration-700"></div>
        <div class="aspect-[3/4] bg-[var(--secondary)] grayscale hover:grayscale-0 transition duration-700"></div>
      </div>
    </section>

    <!-- Section 5: Company -->
    <section id="section-5" data-id="5" class="py-32 px-6 bg-[var(--secondary)] text-center">
      <h2 class="text-xl tracking-[0.3em] mb-12 text-[var(--primary)]">INFORMATION</h2>
      <table class="mx-auto text-xs tracking-widest text-[var(--accent)] font-sans">
        <tr><td class="py-4 px-8 border-b border-[var(--primary)]/20">NAME</td><td class="py-4 px-8 border-b border-[var(--primary)]/20 text-[var(--text)]">BRAND Inc.</td></tr>
        <tr><td class="py-4 px-8 border-b border-[var(--primary)]/20">ADDRESS</td><td class="py-4 px-8 border-b border-[var(--primary)]/20 text-[var(--text)]">Tokyo, Japan</td></tr>
      </table>
    </section>
  </main>

  <footer class="bg-[var(--bg)] text-[var(--accent)] py-12 text-center text-xs tracking-widest border-t border-[var(--secondary)]">
    &copy; 2024 BRAND. All Rights Reserved.
  </footer>
</div>`
  }
];