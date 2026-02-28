export const TEMPLATES = [
  {
    id: 'simple-modern',
    name: 'シンプルモダン',
    description: '信頼感のある企業やクリニック向け。白と青を基調とした清潔感のあるデザイン。',
    html: `<div class="min-h-screen bg-white text-slate-800 font-sans">
  <header class="flex justify-between items-center p-6 border-b border-slate-100">
    <div class="text-xl font-bold tracking-tight text-slate-900">Logo</div>
    <nav class="hidden md:flex gap-6 text-sm font-medium text-slate-600">
      <a href="#" class="hover:text-blue-600">Home</a>
      <a href="#" class="hover:text-blue-600">About</a>
      <a href="#" class="hover:text-blue-600">Service</a>
      <a href="#" class="hover:text-blue-600">Contact</a>
    </nav>
  </header>
  <main>
    <section class="py-20 px-6 text-center bg-slate-50">
      <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">信頼と実績の未来へ</h1>
      <p class="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">私たちは顧客の課題に寄り添い、最適なソリューションを提供します。</p>
      <button class="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition">お問い合わせ</button>
    </section>
    <section class="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
      <div class="p-6 border border-slate-200 rounded-xl">
        <h3 class="font-bold text-lg mb-2">Service 01</h3>
        <p class="text-slate-600 text-sm">高品質なサービスを提供します。</p>
      </div>
      <div class="p-6 border border-slate-200 rounded-xl">
        <h3 class="font-bold text-lg mb-2">Service 02</h3>
        <p class="text-slate-600 text-sm">迅速な対応をお約束します。</p>
      </div>
      <div class="p-6 border border-slate-200 rounded-xl">
        <h3 class="font-bold text-lg mb-2">Service 03</h3>
        <p class="text-slate-600 text-sm">アフターサポートも万全です。</p>
      </div>
    </section>
  </main>
  <footer class="bg-slate-900 text-white py-8 text-center text-sm">&copy; 2024 Company Name. All Rights Reserved.</footer>
</div>`
  },
  {
    id: 'pop-vibrant',
    name: 'ポップ＆元気',
    description: 'カフェ、イベント、子供向けサービス向け。明るい色使いと丸みのあるデザイン。',
    html: `<div class="min-h-screen bg-yellow-50 text-slate-800 font-sans">
  <header class="p-4 flex justify-center">
    <div class="bg-white px-8 py-3 rounded-full shadow-lg font-black text-orange-500 tracking-wider text-xl">POP!</div>
  </header>
  <main class="px-4 pb-12">
    <section class="py-12 text-center">
      <span class="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold mb-4">NEW OPEN!</span>
      <h1 class="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">Enjoy<br><span class="text-orange-500">Every</span> Moment</h1>
      <p class="text-lg font-medium text-slate-600 mb-8">ワクワクする毎日をあなたに届けます。</p>
      <button class="bg-orange-500 text-white px-8 py-4 rounded-2xl font-black shadow-orange-200 shadow-xl hover:scale-105 transition transform">今すぐチェック！</button>
    </section>
    <section class="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      <div class="bg-white p-8 rounded-[2rem] shadow-sm">
        <h3 class="text-2xl font-bold text-pink-500 mb-2">Menu</h3>
        <p class="font-medium text-slate-500">こだわりのメニューをご用意しています。</p>
      </div>
      <div class="bg-white p-8 rounded-[2rem] shadow-sm">
        <h3 class="text-2xl font-bold text-cyan-500 mb-2">Access</h3>
        <p class="font-medium text-slate-500">駅チカで通いやすい立地です。</p>
      </div>
    </section>
  </main>
</div>`
  },
  {
    id: 'chic-luxury',
    name: 'シック＆ラグジュアリー',
    description: '高級レストラン、ホテル、美容室向け。黒やゴールドを使った落ち着いたデザイン。',
    html: `<div class="min-h-screen bg-neutral-900 text-neutral-200 font-serif">
  <header class="fixed w-full top-0 left-0 p-6 flex justify-between items-center z-50 bg-neutral-900/80 backdrop-blur-md">
    <div class="text-lg tracking-[0.2em] uppercase border-b border-white/20 pb-1">Brand</div>
    <button class="text-xs tracking-widest uppercase">Menu</button>
  </header>
  <main>
    <section class="h-screen flex flex-col justify-center items-center text-center px-6">
      <p class="text-xs tracking-[0.3em] text-neutral-500 mb-6 uppercase">Premium Quality</p>
      <h1 class="text-4xl md:text-6xl font-light tracking-widest leading-snug mb-10">THE<br>EXPERIENCE</h1>
      <div class="w-px h-24 bg-gradient-to-b from-neutral-800 to-neutral-200"></div>
    </section>
    <section class="py-24 px-6 bg-neutral-800">
      <div class="max-w-3xl mx-auto text-center space-y-8">
        <h2 class="text-2xl font-light tracking-widest">CONCEPT</h2>
        <p class="text-sm leading-loose text-neutral-400 font-sans">洗練された空間と、最高級のおもてなし。<br>日常を忘れ、特別なひとときをお過ごしください。</p>
      </div>
    </section>
  </main>
</div>`
  }
];