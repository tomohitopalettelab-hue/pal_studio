export type Template = {
  id: string;
  name: string;
  tags: string[];
  description: string;
  html: string;
};

export const templates: Template[] = [
  {
    id: 'template-modern',
    name: 'Modern: シンプル & クリーン',
    tags: ['simple', 'clean', 'business', 'startup'],
    description: '汎用性の高いモダンでクリーンなデザイン。セクション固定構成に対応。',
    html: `
<div class="template-root" style="--main-color: #4f46e5; --accent-color: #f8fafc; --text-color: #1e293b; --bg-color: #ffffff;">
  <div class="min-h-screen font-sans text-[var(--text-color)] bg-[var(--bg-color)]">
    <header class="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-slate-100">
      <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <h1 class="text-xl font-bold tracking-tight text-[var(--main-color)]">ModernCorp</h1>
        <nav class="hidden md:flex gap-6 text-sm font-medium">
          <a href="#concept" class="hover:text-[var(--main-color)] transition">想い</a>
          <a href="#features" class="hover:text-[var(--main-color)] transition">強み</a>
          <a href="#service" class="hover:text-[var(--main-color)] transition">サービス</a>
          <a href="#contact" class="px-4 py-2 bg-[var(--main-color)] text-white rounded-full">お問い合わせ</a>
        </nav>
      </div>
    </header>

    <main>
      <section id="top" class="section-top pt-32 pb-20 px-4 text-center bg-[var(--accent-color)]">
        <h2 class="text-5xl font-black tracking-tight mb-8">Next Standard</h2>
        <p class="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">新しい時代のスタンダードを作る、シンプルで力強いデザイン。</p>
        <button class="px-8 py-4 bg-[var(--main-color)] text-white rounded-full font-bold shadow-lg">詳しく見る</button>
      </section>

      <section id="concept" class="section-concept py-20 px-4 max-w-4xl mx-auto text-center">
        <h3 class="text-3xl font-bold mb-6">Concept</h3>
        <p class="leading-relaxed text-slate-600">私たちは、デザインの力でビジネスの本質を可視化し、クライアントと共に成長を続けます。</p>
      </section>

      <section id="features" class="section-features py-20 px-4 bg-white">
        <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div class="p-6 border border-slate-100 rounded-2xl shadow-sm text-center">
            <div class="w-12 h-12 bg-[var(--main-color)]/10 text-[var(--main-color)] rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
            <h4 class="font-bold mb-2">スピード</h4>
            <p class="text-sm text-slate-500">迅速な対応で機会損失を防ぎます。</p>
          </div>
          <div class="p-6 border border-slate-100 rounded-2xl shadow-sm text-center">
            <div class="w-12 h-12 bg-[var(--main-color)]/10 text-[var(--main-color)] rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
            <h4 class="font-bold mb-2">クオリティ</h4>
            <p class="text-sm text-slate-500">細部までこだわった高品質な成果物。</p>
          </div>
          <div class="p-6 border border-slate-100 rounded-2xl shadow-sm text-center">
            <div class="w-12 h-12 bg-[var(--main-color)]/10 text-[var(--main-color)] rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
            <h4 class="font-bold mb-2">サポート</h4>
            <p class="text-sm text-slate-500">運用開始後もしっかり伴走します。</p>
          </div>
        </div>
      </section>

      <section id="service" class="section-service py-20 px-4 bg-[var(--accent-color)]">
        <div class="max-w-4xl mx-auto space-y-6">
          <div class="bg-white p-6 rounded-xl flex justify-between items-center shadow-sm border border-slate-100">
            <div><h4 class="font-bold">スタンダードプラン</h4><p class="text-sm text-slate-500">基本機能が揃ったプラン</p></div>
            <span class="text-[var(--main-color)] font-bold text-xl">¥298,000〜</span>
          </div>
        </div>
      </section>

      <section id="works" class="section-works py-20 px-4">
        <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="aspect-video bg-slate-100 rounded-lg"></div>
          <div class="aspect-video bg-slate-100 rounded-lg"></div>
          <div class="aspect-video bg-slate-100 rounded-lg"></div>
          <div class="aspect-video bg-slate-100 rounded-lg"></div>
        </div>
      </section>

      <section id="company" class="section-company py-20 px-4 max-w-4xl mx-auto">
        <table class="w-full text-left border-collapse">
          <tr class="border-b border-slate-100"><th class="py-4 w-1/3">会社名</th><td class="py-4 text-slate-600">Modern Design Inc.</td></tr>
          <tr class="border-b border-slate-100"><th class="py-4">所在地</th><td class="py-4 text-slate-600">東京都渋谷区...</td></tr>
        </table>
      </section>
    </main>

    <footer class="py-8 text-center text-sm text-slate-400 border-t">
      <p>&copy; 2026 Modern Design Inc.</p>
    </footer>
  </div>
</div>`
  },
  {
    id: 'template-elegant',
    name: 'Elegant: ラグジュアリー',
    tags: ['luxury', 'beauty', 'hotel', 'serif'],
    description: '余白を活かした高級感のある構成。全セクション対応。',
    html: `
<div class="template-root" style="--main-color: #1a1a1a; --accent-color: #fdfbf7; --text-color: #4a4a4a; --bg-color: #fdfbf7;">
  <div class="min-h-screen font-serif text-[var(--text-color)] bg-[var(--bg-color)]">
    <header class="py-8 px-8 flex justify-between items-center border-b border-black/10">
      <div class="text-2xl tracking-widest uppercase text-[var(--main-color)]">The Luxury</div>
    </header>

    <main>
      <section id="top" class="section-top py-32 px-4 text-center">
        <p class="text-sm tracking-[0.3em] mb-4 uppercase">Est. 2024</p>
        <h2 class="text-6xl font-thin tracking-tighter mb-8 italic text-[var(--main-color)]">Elegant Experience</h2>
        <p class="text-lg leading-loose font-light max-w-2xl mx-auto">洗練された空間と時間を提供する、特別な体験をあなたに。</p>
      </section>

      <section id="concept" class="section-concept py-20 px-4 bg-white/50 text-center">
        <h3 class="text-3xl font-light tracking-[0.2em] mb-8">OUR PHILOSOPHY</h3>
        <p class="max-w-2xl mx-auto leading-loose">私たちは「静寂」と「美しさ」の調和を追求し、日常を彩る至高のひとときを創造します。</p>
      </section>

      <section id="features" class="section-features py-20 px-8 grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <div class="text-center"><h4 class="text-xl mb-4 italic">Material</h4><p class="text-sm leading-relaxed">最高級の素材のみを厳選。</p></div>
        <div class="text-center"><h4 class="text-xl mb-4 italic">Craft</h4><p class="text-sm leading-relaxed">熟練の職人による手仕事。</p></div>
        <div class="text-center"><h4 class="text-xl mb-4 italic">Service</h4><p class="text-sm leading-relaxed">一人ひとりに寄り添う接客。</p></div>
      </section>

      <section id="service" class="section-service py-20 px-4 bg-[var(--main-color)] text-white text-center">
        <h3 class="text-2xl mb-10 tracking-widest">SERVICES</h3>
        <div class="max-w-2xl mx-auto border border-white/20 p-8">
          <p class="mb-4">Premium Membership</p>
          <p class="text-2xl font-thin italic">¥1,000,000 / year</p>
        </div>
      </section>

      <section id="works" class="section-works py-20 px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          <div class="h-96 bg-stone-200"></div>
          <div class="h-96 bg-stone-300"></div>
        </div>
      </section>

      <section id="company" class="section-company py-20 px-8 max-w-3xl mx-auto border-t border-black/5">
        <div class="flex flex-col gap-6">
          <div class="flex justify-between border-b border-black/10 pb-4"><span>Office</span><span>Tokyo, Ginza</span></div>
          <div class="flex justify-between border-b border-black/10 pb-4"><span>Email</span><span>contact@luxury.com</span></div>
        </div>
      </section>
    </main>

    <footer class="py-12 bg-white text-center text-xs tracking-widest opacity-60">
      &copy; THE LUXURY BRAND. ALL RIGHTS RESERVED.
    </footer>
  </div>
</div>`
  }
  ,
  {
  id: 'template-corporate',
  name: 'Corporate: 信頼と実績',
  tags: ['business', 'trust', 'blue', 'firm'],
  description: '企業情報、事業内容を整理して見せる、信頼感重視の堅実なデザイン。',
  html: `<div class="template-root" style="--main-color: #1e40af; --accent-color: #f1f5f9; --text-color: #0f172a; --bg-color: #ffffff;">
  <div class="min-h-screen font-sans text-[var(--text-color)] bg-[var(--bg-color)]">
    <header class="bg-[var(--main-color)] text-white py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <div class="font-bold text-xl">Corporate Inc.</div>
      <nav class="hidden md:flex text-sm space-x-6">
        <a href="#concept" class="hover:opacity-80">私たちの想い</a>
        <a href="#features" class="hover:opacity-80">強み</a>
        <a href="#service" class="hover:opacity-80">事業内容</a>
      </nav>
    </header>

    <main>
      <section id="top" class="section-top bg-[var(--main-color)] text-white py-24 px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">信頼を未来へつなぐ</h2>
        <p class="opacity-80 text-lg">確かな技術と実績で、社会に貢献します。</p>
      </section>

      <section id="concept" class="section-concept py-20 px-6 max-w-5xl mx-auto text-center border-b">
        <h3 class="text-2xl font-bold mb-6 text-[var(--main-color)]">Concept</h3>
        <p class="leading-loose">1990年の創業以来、私たちは一貫してお客様の課題解決に向き合ってきました。誠実さとスピード感を持って、最高の価値を提供します。</p>
      </section>

      <section id="features" class="section-features py-20 px-6 bg-[var(--accent-color)]">
        <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div class="bg-white p-8 shadow-sm border-t-4 border-[var(--main-color)]">
            <h4 class="font-bold mb-4">確かな実績</h4>
            <p class="text-sm opacity-70">年間1,000件以上のプロジェクト完遂率。</p>
          </div>
          <div class="bg-white p-8 shadow-sm border-t-4 border-[var(--main-color)]">
            <h4 class="font-bold mb-4">専門家集団</h4>
            <p class="text-sm opacity-70">各分野のスペシャリストが最適な解決策を提示。</p>
          </div>
          <div class="bg-white p-8 shadow-sm border-t-4 border-[var(--main-color)]">
            <h4 class="font-bold mb-4">徹底した管理</h4>
            <p class="text-sm opacity-70">ISO取得済みの厳格な品質管理体制。</p>
          </div>
        </div>
      </section>

      <section id="service" class="section-service py-20 px-6">
        <div class="max-w-5xl mx-auto">
          <h3 class="text-2xl font-bold text-center mb-12">Service</h3>
          <ul class="space-y-4">
            <li class="flex items-center p-4 bg-[var(--accent-color)] rounded">・コンサルティング事業</li>
            <li class="flex items-center p-4 bg-[var(--accent-color)] rounded">・システム開発受託</li>
          </ul>
        </div>
      </section>

      <section id="works" class="section-works py-20 px-6 bg-slate-50">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="h-48 bg-slate-200 flex items-center justify-center text-sm">Case Study 01</div>
          <div class="h-48 bg-slate-200 flex items-center justify-center text-sm">Case Study 02</div>
          <div class="h-48 bg-slate-200 flex items-center justify-center text-sm">Case Study 03</div>
        </div>
      </section>

      <section id="company" class="section-company py-20 px-6 max-w-5xl mx-auto">
        <h3 class="text-2xl font-bold mb-8">Company Info</h3>
        <table class="w-full border-t border-[var(--main-color)] text-left">
          <tr class="border-b"><th class="py-4 bg-[var(--accent-color)] px-4 w-1/4">代表者</th><td class="py-4 px-4">代表取締役 山田 太郎</td></tr>
          <tr class="border-b"><th class="py-4 bg-[var(--accent-color)] px-4">資本金</th><td class="py-4 px-4">5,000万円</td></tr>
        </table>
      </section>
    </main>

    <footer class="bg-slate-900 text-white py-12 text-center text-sm">
      <p>&copy; 2026 Corporate Inc. All Rights Reserved.</p>
    </footer>
  </div>
</div>`
},
  {
  id: 'template-pop',
  name: 'Pop: 元気 & 親しみ',
  tags: ['pop', 'kids', 'event', 'colorful'],
  description: '明るい色使いと丸みのある要素。全セクション対応。',
  html: `<div class="template-root" style="--main-color: #ec4899; --accent-color: #fef08a; --text-color: #334155; --bg-color: #fffaf0;">
  <div class="min-h-screen font-sans text-[var(--text-color)] bg-[var(--bg-color)]">
    <header class="p-6 flex justify-center sticky top-0 z-50">
      <div class="bg-white px-8 py-3 rounded-full shadow-lg font-black text-[var(--main-color)] text-xl tracking-wider">POP! SHOP</div>
    </header>

    <main>
      <section id="top" class="section-top py-16 px-4 text-center">
        <h2 class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-orange-400 mb-8 transform -rotate-2">ワクワクを<br>届けよう！</h2>
        <div class="flex justify-center gap-4 mb-12">
          <div class="w-24 h-24 bg-[var(--main-color)] rounded-full flex items-center justify-center text-white font-bold animate-bounce">Fun!</div>
          <div class="w-24 h-24 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold animate-bounce delay-100">Joy!</div>
        </div>
      </section>

      <section id="concept" class="section-concept py-16 px-6 text-center">
        <div class="bg-white p-10 rounded-[3rem] shadow-xl max-w-2xl mx-auto border-4 border-[var(--accent-color)]">
          <h3 class="text-3xl font-black mb-6 text-[var(--main-color)]">想い</h3>
          <p class="font-bold">毎日にハッピーな色を。私たちは、遊び心を忘れないデザインで笑顔を増やします！</p>
        </div>
      </section>

      <section id="features" class="section-features py-16 px-6">
        <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-3xl shadow-lg hover:scale-105 transition border-b-8 border-pink-200 text-center">
            <span class="text-4xl mb-4 block">🎨</span>
            <h4 class="font-black mb-2">カラフル</h4>
          </div>
          <div class="bg-white p-6 rounded-3xl shadow-lg hover:scale-105 transition border-b-8 border-yellow-200 text-center">
            <span class="text-4xl mb-4 block">🚀</span>
            <h4 class="font-black mb-2">スピーディ</h4>
          </div>
          <div class="bg-white p-6 rounded-3xl shadow-lg hover:scale-105 transition border-b-8 border-blue-200 text-center">
            <span class="text-4xl mb-4 block">🤝</span>
            <h4 class="font-black mb-2">フレンドリー</h4>
          </div>
        </div>
      </section>

      <section id="service" class="section-service py-16 px-6 bg-[var(--accent-color)] rounded-t-[50px]">
        <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white p-6 rounded-2xl font-bold shadow">イベント企画</div>
          <div class="bg-white p-6 rounded-2xl font-bold shadow">デザイン制作</div>
        </div>
      </section>

      <section id="works" class="section-works py-16 px-6">
        <div class="max-w-6xl mx-auto grid grid-cols-2 gap-4">
          <div class="h-40 bg-pink-100 rounded-3xl border-4 border-dashed border-pink-300"></div>
          <div class="h-40 bg-blue-100 rounded-3xl border-4 border-dashed border-blue-300"></div>
        </div>
      </section>

      <section id="company" class="section-company py-16 px-6 text-center">
        <div class="inline-block bg-white p-8 rounded-2xl shadow-inner text-left max-w-md w-full">
          <p class="font-bold border-b-2 border-dotted mb-2">なまえ：POP!制作所</p>
          <p class="font-bold border-b-2 border-dotted">ばしょ：おもちゃの国1-2-3</p>
        </div>
      </section>
    </main>

    <footer class="py-10 text-center font-black text-[var(--main-color)]">
      &copy; POP!制作所 2026
    </footer>
  </div>
</div>`
},{
  id: 'template-minimal',
  name: 'Minimal: 洗練された余白',
  tags: ['minimal', 'art', 'fashion', 'white'],
  description: '要素を極限まで削ぎ落とし、余白で語るデザイン。',
  html: `<div class="template-root" style="--main-color: #000000; --accent-color: #fafafa; --text-color: #1a1a1a; --bg-color: #ffffff;">
  <div class="min-h-screen font-sans text-[var(--text-color)] bg-[var(--bg-color)]">
    <header class="p-8"><h1 class="text-xl font-light tracking-[0.3em]">M N M L</h1></header>

    <main>
      <section id="top" class="section-top min-h-[70vh] flex flex-col justify-center px-8 md:px-24">
        <h2 class="text-4xl font-light tracking-widest mb-12">Less is more.</h2>
        <div class="h-px w-24 bg-[var(--main-color)]"></div>
      </section>

      <section id="concept" class="section-concept py-32 px-8 md:px-24 bg-[var(--accent-color)] text-sm leading-[2.5] tracking-widest">
        <p class="max-w-xl">本質だけを残すこと。<br>装飾を捨て、メッセージの純度を高めます。</p>
      </section>

      <section id="features" class="section-features py-32 px-8 md:px-24 grid md:grid-cols-3 gap-16">
        <div class="border-l border-black pl-4">
          <h4 class="text-xs font-bold mb-4 uppercase">Identity</h4>
          <p class="text-xs text-gray-500 italic">追求</p>
        </div>
        <div class="border-l border-black pl-4">
          <h4 class="text-xs font-bold mb-4 uppercase">Space</h4>
          <p class="text-xs text-gray-500 italic">空間</p>
        </div>
        <div class="border-l border-black pl-4">
          <h4 class="text-xs font-bold mb-4 uppercase">Silence</h4>
          <p class="text-xs text-gray-500 italic">静寂</p>
        </div>
      </section>

      <section id="service" class="section-service py-32 px-8 md:px-24">
        <div class="max-w-2xl border-t border-b border-black py-12">
          <div class="flex justify-between items-center text-xs tracking-widest uppercase">
            <span>Design Consulting</span>
            <span>From 500k</span>
          </div>
        </div>
      </section>

      <section id="works" class="section-works py-32 px-8 md:px-24 bg-white">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-1 px-0">
          <div class="aspect-square bg-gray-100"></div>
          <div class="aspect-square bg-gray-200"></div>
        </div>
      </section>

      <section id="company" class="section-company py-32 px-8 md:px-24 text-[10px] tracking-[0.5em] uppercase">
        <p class="mb-2">Address: Tokyo / Kyoto</p>
        <p>Mail: info@mnml.jp</p>
      </section>
    </main>

    <footer class="p-8 text-[10px] opacity-30 text-center tracking-[0.2em]">
      &copy; MMXXVI MNML
    </footer>
  </div>
</div>`
},{
  id: 'template-dark',
  name: 'Dark: テック & クール',
  tags: ['dark', 'tech', 'night', 'cool'],
  description: '黒を基調とした、先進的なダークモード。',
  html: `<div class="template-root" style="--main-color: #06b6d4; --accent-color: #111827; --text-color: #e2e8f0; --bg-color: #030712;">
  <div class="min-h-screen font-mono text-[var(--text-color)] bg-[var(--bg-color)]">
    <header class="p-6 border-b border-slate-800 flex justify-between bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <span class="font-bold text-[var(--main-color)]">> DEV.IO</span>
    </header>

    <main>
      <section id="top" class="section-top py-32 px-6 max-w-5xl mx-auto">
        <span class="text-[var(--main-color)] text-xs mb-4 block animate-pulse">_ System Active</span>
        <h2 class="text-6xl font-bold mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent italic">Future Tech</h2>
        <p class="text-slate-400 max-w-xl text-lg mb-12">最先端の技術で、世界をアップデートする。</p>
      </section>

      <section id="concept" class="section-concept py-20 px-6 bg-[var(--accent-color)] border-y border-slate-800">
        <div class="max-w-3xl mx-auto text-center">
          <h3 class="text-[var(--main-color)] mb-6 tracking-widest">MISSION</h3>
          <p class="text-xl">「不可能をコードで解決する」</p>
        </div>
      </section>

      <section id="features" class="section-features py-20 px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <div class="p-8 border border-slate-800 rounded bg-black/40 hover:border-[var(--main-color)] transition">
            <h4 class="text-white font-bold mb-2">Fast</h4>
            <div class="h-1 w-8 bg-[var(--main-color)]"></div>
          </div>
          <div class="p-8 border border-slate-800 rounded bg-black/40 hover:border-[var(--main-color)] transition">
            <h4 class="text-white font-bold mb-2">Secure</h4>
            <div class="h-1 w-8 bg-[var(--main-color)]"></div>
          </div>
          <div class="p-8 border border-slate-800 rounded bg-black/40 hover:border-[var(--main-color)] transition">
            <h4 class="text-white font-bold mb-2">Scalable</h4>
            <div class="h-1 w-8 bg-[var(--main-color)]"></div>
          </div>
        </div>
      </section>

      <section id="service" class="section-service py-20 px-6 bg-[var(--accent-color)]">
        <div class="max-w-4xl mx-auto space-y-4">
          <div class="flex justify-between p-4 border-l-4 border-[var(--main-color)] bg-black/20">
            <span>Cloud Architecture</span>
            <span class="text-[var(--main-color)]">AVAILABLE</span>
          </div>
        </div>
      </section>

      <section id="works" class="section-works py-20 px-6">
        <div class="grid grid-cols-3 gap-2 max-w-5xl mx-auto opacity-60">
          <div class="aspect-square bg-slate-800"></div>
          <div class="aspect-square bg-slate-900"></div>
          <div class="aspect-square bg-slate-800"></div>
        </div>
      </section>

      <section id="company" class="section-company py-20 px-6 max-w-5xl mx-auto font-mono text-sm">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-500">
          <div>[ OFFICE ]<br>SHIBUYA_QUARTER_X</div>
          <div>[ TEL ]<br>03-XXXX-XXXX</div>
        </div>
      </section>
    </main>

    <footer class="py-12 border-t border-slate-800 text-center text-xs text-slate-600">
      TERMINAL_END. (C) 2026
    </footer>
  </div>
</div>`
},
  {
    id: 'template-natural',
    name: 'Natural: オーガニック',
    tags: ['natural', 'cafe', 'food', 'green'],
    description: 'アースカラーと柔らかい雰囲気で、自然や健康志向をアピール。',
    html: `<div class="template-natural" style="
  --main-color: #8B9D8B;
  --accent-color: #4A5D4A;
  --bg-color: #F7F5F0;
  --text-color: #5A5A5A;
">
  <style>
    .template-natural { background-color: var(--bg-color); color: var(--text-color); font-family: sans-serif; }
    .section-title { text-align: center; font-family: serif; color: var(--accent-color); font-size: 2rem; margin-bottom: 2rem; }
    .btn-primary { background-color: var(--main-color); color: white; padding: 0.75rem 2rem; border-radius: 9999px; transition: 0.3s; border: none; cursor: pointer; }
    .btn-primary:hover { background-color: var(--accent-color); }
    .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
    section { padding: 4rem 2rem; max-width: 1000px; margin: 0 auto; }
  </style>

  <header class="section-top" style="text-align: center; padding: 6rem 2rem;">
    <div style="border-radius: 100px 100px 0 0; overflow: hidden; margin-bottom: 2rem; height: 400px;">
      <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200" style="width: 100%; h-full; object-cover;">
    </div>
    <h1 style="font-family: serif; font-size: 3rem; color: var(--accent-color);">自然の恵みを、そのままに。</h1>
    <p style="font-size: 1.2rem; margin-top: 1rem;">心と体に優しい、オーガニックな暮らしを。</p>
  </header>

  <section class="section-concept">
    <h2 class="section-title">Concept</h2>
    <p style="line-height: 2; text-align: center;">私たちが大切にしているのは、素材本来の力。余計なものを削ぎ落とし、地球と調和するライフスタイルを提案します。</p>
  </section>

  <section class="section-features">
    <h2 class="section-title">Features</h2>
    <div class="grid-3">
      <div style="text-align: center;"><h3>厳選素材</h3><p>独自の基準で選んだ有機素材のみを使用。</p></div>
      <div style="text-align: center;"><h3>環境配慮</h3><p>パッケージにも再生紙を使用しています。</p></div>
      <div style="text-align: center;"><h3>手作り</h3><p>一つひとつ丁寧に、想いを込めて。</p></div>
    </div>
  </section>

  <section class="section-services">
    <h2 class="section-title">Menu</h2>
    <div style="background: white; padding: 2rem; border-radius: 20px;">
      <ul style="list-style: none; padding: 0;">
        <li style="display: flex; justify-content: space-between; border-bottom: 1px solid #eee; padding: 1rem 0;"><span>季節の野菜セット</span><span>¥3,500</span></li>
        <li style="display: flex; justify-content: space-between; padding: 1rem 0;"><span>オーガニックティー</span><span>¥1,200</span></li>
      </ul>
    </div>
  </section>

  <section class="section-gallery">
    <div class="grid-3">
      <div style="aspect-ratio: 1/1; background: #ddd; border-radius: 15px;"></div>
      <div style="aspect-ratio: 1/1; background: #ddd; border-radius: 15px;"></div>
      <div style="aspect-ratio: 1/1; background: #ddd; border-radius: 15px;"></div>
    </div>
  </section>

  <section class="section-info">
    <table style="width: 100%; border-collapse: collapse;">
      <tr><th style="padding: 1rem; border-bottom: 1px solid #ddd; text-align: left;">店名</th><td style="padding: 1rem; border-bottom: 1px solid #ddd;">Organic Life</td></tr>
      <tr><th style="padding: 1rem; text-align: left;">住所</th><td style="padding: 1rem;">東京都自然区緑町1-2-3</td></tr>
    </table>
  </section>

  <footer style="text-align: center; padding: 2rem; font-size: 0.8rem;">&copy; 2026 Organic Life</footer>
</div>`
  },
  {
    id: 'template-japanese',
    name: 'Japanese: 和の伝統',
    tags: ['japanese', 'traditional', 'restaurant', 'culture'],
    description: '縦書きや和柄を取り入れた、落ち着きのある和風デザイン。',
    html: `<div class="template-japanese" style="
  --main-color: #722F37; /* 臙脂色 */
  --accent-color: #2C2C2C;
  --bg-color: #F5F5F5;
  --text-color: #333333;
">
  <style>
    .template-japanese { background-color: var(--bg-color); background-image: url('https://www.transparenttextures.com/patterns/washi.png'); color: var(--text-color); font-family: serif; }
    .section-title { writing-vertical-rl: vertical-rl; text-orientation: upright; border-right: 1px solid var(--main-color); padding-right: 1rem; margin-bottom: 2rem; font-weight: bold; }
    .writing-v { writing-vertical-rl: vertical-rl; }
    section { padding: 6rem 2rem; max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; }
  </style>

  <header style="height: 100vh; display: flex; align-items: center; justify-content: center; position: relative;">
    <h1 class="writing-v" style="font-size: 4rem; letter-spacing: 0.5em;">和の伝統と<br>革新の融合。</h1>
  </header>

  <section class="section-concept">
    <div style="display: flex; gap: 4rem;">
      <h2 class="section-title">想い</h2>
      <p class="writing-v" style="height: 300px; line-height: 2.5;">四季の移ろいを愛で、心安らぐ空間を。私たちは伝統的な建築技術を守りつつ、現代の暮らしに寄り添う住まいをご提案します。</p>
    </div>
  </section>

  <section class="section-features">
    <h2 class="section-title">特徴</h2>
    <div style="display: flex; gap: 3rem; margin-top: 2rem;">
      <div style="text-align: center;"><h3>天然木材</h3><p>選び抜かれた国産材のみを使用。</p></div>
      <div style="text-align: center;"><h3>匠の技</h3><p>熟練の職人による繊細な仕上げ。</p></div>
      <div style="text-align: center;"><h3>持続性</h3><p>三世代にわたって住み継げる強度。</p></div>
    </div>
  </section>

  <section class="section-services">
    <h2 class="section-title">お品書き</h2>
    <div style="border: 1px solid #ccc; padding: 2rem;">
      <p>■ 注文住宅設計：5,000万円〜</p>
      <p>■ 古民家再生：2,000万円〜</p>
    </div>
  </section>

  <section class="section-gallery">
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
       <div style="background: #e0e0e0; height: 300px;"></div>
       <div style="background: #e0e0e0; height: 300px;"></div>
    </div>
  </section>

  <section class="section-info">
    <table style="width: 100%; border-top: 1px solid var(--accent-color);">
      <tr><th style="padding: 1.5rem; border-bottom: 1px solid #ddd; text-align: left;">屋号</th><td>和風建築工房</td></tr>
    </table>
  </section>

  <footer style="padding: 4rem; text-align: center;">&copy; Japanese Tradition</footer>
</div>`
  },
  {
    id: 'template-portfolio',
    name: 'Portfolio: 作品重視',
    tags: ['portfolio', 'photo', 'creator', 'gallery'],
    description: '画像や作品をグリッド状に配置し、視覚的なインパクトを重視。',
    html: `<div class="template-portfolio" style="
  --main-color: #000000;
  --accent-color: #666666;
  --bg-color: #ffffff;
  --text-color: #1a1a1a;
">
  <style>
    .template-portfolio { background-color: var(--bg-color); color: var(--text-color); font-family: 'Inter', sans-serif; }
    .section-title { font-size: 3rem; font-weight: 900; text-transform: uppercase; border-bottom: 4px solid var(--main-color); display: inline-block; margin-bottom: 3rem; }
    .grid-gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 10px; }
    section { padding: 5% 10%; }
  </style>

  <header style="height: 80vh; display: flex; flex-direction: column; justify-content: center; padding: 0 10%;">
    <p style="font-weight: bold; color: var(--accent-color);">CREATIVE WORKS 2026</p>
    <h1 style="font-size: 8vw; font-weight: 900; line-height: 1;">PORTFOLIO</h1>
  </header>

  <section class="section-concept">
    <h2 class="section-title">About</h2>
    <p style="font-size: 1.5rem; max-width: 600px;">境界を超え、新しい視点を与えるデザイン。コンセプトからアウトプットまで、一貫した世界観を構築します。</p>
  </section>

  <section class="section-features">
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4rem;">
      <div><h3 style="font-size: 2rem;">01</h3><p>Strategy</p></div>
      <div><h3 style="font-size: 2rem;">02</h3><p>Design</p></div>
      <div><h3 style="font-size: 2rem;">03</h3><p>Development</p></div>
    </div>
  </section>

  <section class="section-services" style="display: none;">
    </section>

  <section class="section-gallery">
    <h2 class="section-title">Works</h2>
    <div class="grid-gallery">
      <div style="aspect-ratio: 1/1; background: #eee;"></div>
      <div style="aspect-ratio: 1/1; background: #eee;"></div>
      <div style="aspect-ratio: 1/1; background: #eee;"></div>
      <div style="aspect-ratio: 1/1; background: #eee;"></div>
      <div style="aspect-ratio: 1/1; background: #eee;"></div>
      <div style="aspect-ratio: 1/1; background: #eee;"></div>
    </div>
  </section>

  <section class="section-info">
    <p>Contact: hello@portfolio.com</p>
  </section>

  <footer style="padding: 2rem 10%; border-top: 1px solid #eee;">&copy; 2026 Portfolio</footer>
</div>`
  },
  {
    id: 'template-lp',
    name: 'LP: コンバージョン特化',
    tags: ['lp', 'marketing', 'sales', 'bold'],
    description: '大きな見出しと明確なCTAで、ユーザーのアクションを促す構成。',
    html: `<div class="template-lp" style="
  --main-color: #E63946; /* 強調赤 */
  --accent-color: #1D3557; /* 信頼の紺 */
  --bg-color: #FFFFFF;
  --text-color: #333333;
">
  <style>
    .template-lp { background-color: var(--bg-color); color: var(--text-color); font-family: sans-serif; line-height: 1.6; }
    .btn-cta { background-color: var(--main-color); color: white; padding: 1.5rem 3rem; border-radius: 8px; font-weight: bold; font-size: 1.5rem; text-decoration: none; display: inline-block; box-shadow: 0 4px 15px rgba(230, 57, 70, 0.3); }
    .section-lp { padding: 5rem 1rem; text-align: center; }
    .section-title { font-size: 2.5rem; font-weight: bold; margin-bottom: 3rem; color: var(--accent-color); }
    .card { border: 1px solid #ddd; padding: 2rem; border-radius: 12px; }
  </style>

  <header style="background-color: var(--accent-color); color: white; padding: 8rem 1rem; text-align: center;">
    <h1 style="font-size: 3.5rem; font-weight: 900; margin-bottom: 1.5rem;">あなたのビジネスを<br>加速させる。</h1>
    <p style="font-size: 1.25rem; margin-bottom: 3rem; opacity: 0.9;">圧倒的な成果を出すための、最強のソリューション。</p>
    <a href="#" class="btn-cta">無料で相談する</a>
  </header>

  <section class="section-concept section-lp">
    <h2 class="section-title">なぜ、今なのか？</h2>
    <p style="max-width: 700px; margin: 0 auto;">市場は急速に変化しています。従来のやり方では通用しない現代において、私たちは最新のテクノロジーで伴走します。</p>
  </section>

  <section class="section-features section-lp" style="background: #f8f9fa;">
    <h2 class="section-title">選ばれる3つの理由</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; max-width: 1100px; margin: 0 auto;">
      <div class="card"><h3>最速のデプロイ</h3><p>アイデアをすぐに形に。業界最速水準のスピードを誇ります。</p></div>
      <div class="card"><h3>万全のサポート</h3><p>導入後も専任の担当者が24時間365日サポートします。</p></div>
      <div class="card"><h3>高い費用対効果</h3><p>無駄を省いた効率的な運用で、コスト削減を実現。</p></div>
    </div>
  </section>

  <section class="section-services section-lp">
    <h2 class="section-title">プラン紹介</h2>
    <div style="max-width: 500px; margin: 0 auto; border: 2px solid var(--main-color); border-radius: 20px; padding: 3rem;">
      <p style="font-size: 2rem; font-weight: bold;">スタンダードプラン</p>
      <p style="font-size: 3rem; color: var(--main-color); font-weight: bold;">¥29,800 <span style="font-size: 1rem;">/月</span></p>
      <ul style="text-align: left; margin: 2rem 0; list-style: none;">
        <li>✓ すべての基本機能</li>
        <li>✓ 無制限のデータ保存</li>
      </ul>
      <a href="#" class="btn-cta" style="font-size: 1rem; padding: 1rem 2rem;">申し込む</a>
    </div>
  </section>

  <section class="section-gallery section-lp" style="display: none;">
    </section>

  <section class="section-info section-lp">
    <h2 class="section-title">Company</h2>
    <table style="max-width: 600px; margin: 0 auto; width: 100%;">
      <tr><th style="text-align: left; padding: 1rem;">社名</th><td>株式会社ProductX</td></tr>
    </table>
  </section>

  <footer style="background: #333; color: white; padding: 3rem; text-align: center;">&copy; ProductX All Rights Reserved.</footer>
</div>`
  }
];