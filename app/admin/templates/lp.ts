import type { Template } from './types';

export const lpTemplate: Template = {
  id: 'template-lp',
  name: 'LP: コンバージョン特化',
  tags: ['lp', 'marketing', 'sales', 'bold'],
  description: '大きな見出しと明確なCTAで、ユーザーのアクションを促す構成。',
  html: `<div class="template-root" style="--main-color: #E63946; --sub-color: #f8fafc; --accent-color: #1D3557; --text-color: #1d3557; --text-light: #475569; --bg-color: #FFFFFF;">
  <div class="min-h-screen font-sans text-[var(--text-color)] bg-[var(--bg-color)] selection:bg-[var(--main-color)] selection:text-white">
    
    <header class="bg-white/90 backdrop-blur-md border-b border-slate-100 py-5 px-8 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="text-2xl font-black tracking-tighter text-[var(--accent-color)]">PRODUCT<span class="text-[var(--main-color)]">X</span></div>
        <nav data-sync="site-pages" class="hidden lg:flex gap-8 text-sm font-bold text-[var(--text-light)]">
          <a href="#concept" class="hover:text-[var(--main-color)]">特徴</a>
          <a href="#features" class="hover:text-[var(--main-color)]">選ばれる理由</a>
          <a href="#flow" class="hover:text-[var(--main-color)]">導入の流れ</a>
          <a href="#service" class="hover:text-[var(--main-color)]">料金</a>
        </nav>
        <a href="#cta" class="bg-[var(--main-color)] text-white text-xs font-bold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-red-200 transition-all uppercase tracking-widest">無料相談はこちら</a>
      </div>
    </header>

    <main>
      <section id="top" class="relative pt-32 pb-40 px-6 bg-gradient-to-br from-[var(--accent-color)] to-[#162a45] text-white overflow-hidden">
        <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div class="text-left">
            <span class="inline-block border border-red-400 text-red-400 text-xs font-bold px-4 py-1 rounded-full mb-8 tracking-[0.2em] uppercase">2026 New Solution</span>
            <h2 class="text-5xl md:text-7xl font-black leading-[1.1] mb-8">
              停滞したビジネスに、<br/><span class="text-[var(--main-color)]">劇的な加速</span>を。
            </h2>
            <p class="text-xl opacity-80 mb-12 leading-relaxed max-w-xl">
              私たちは単なるツール提供者ではありません。あなたのチームの一員として、戦略立案から実行まで、圧倒的なスピードで成果へと導きます。
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="#cta" class="px-10 py-5 bg-[var(--main-color)] text-white font-bold text-lg rounded-xl shadow-2xl hover:-translate-y-1 transition-all text-center">資料を無料でダウンロード</a>
              <div class="flex items-center gap-4 px-6 py-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                <span class="text-2xl font-black text-red-400">98%</span>
                <span class="text-[10px] leading-tight opacity-70 uppercase tracking-widest">Customer<br/>Satisfaction</span>
              </div>
            </div>
          </div>
          <div class="relative hidden lg:block">
            <div class="aspect-video bg-white/5 rounded-3xl border border-white/10 backdrop-blur-3xl p-4 shadow-2xl">
               <div class="w-full h-full bg-slate-800/50 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center">
                 <span class="text-white/20 text-xs tracking-[1em] uppercase">Visual Asset Area</span>
               </div>
            </div>
            <div class="absolute -bottom-10 -right-10 w-48 h-48 bg-[var(--main-color)] rounded-full blur-[100px] opacity-20"></div>
          </div>
        </div>
      </section>

      <section id="concept" class="py-32 px-6">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-24">
            <h3 class="text-3xl md:text-5xl font-black mb-8">なぜ、あなたのビジネスには<br class="hidden md:block"/>「ProductX」が必要なのか？</h3>
            <div class="h-1.5 w-24 bg-[var(--main-color)] mx-auto mb-8"></div>
            <p class="text-[var(--text-light)] text-lg max-w-3xl mx-auto leading-loose">
              多くの企業が陥る「リソース不足」と「戦略の迷走」。私たちは、これら2つの課題を同時に解決するために、独自のフレームワークを開発しました。
            </p>
          </div>
          <div class="grid md:grid-cols-2 gap-20 items-center">
            <div class="space-y-12">
              <div class="flex gap-6">
                <div class="shrink-0 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold">Q</div>
                <div>
                  <h4 class="text-xl font-bold mb-3">競合他社との差別化が困難</h4>
                  <p class="text-sm text-[var(--text-light)] leading-loose">独自の強みを言語化し、マーケットでの優位性を1ヶ月以内に確立します。市場調査からポジショニング設定までワンストップで対応。</p>
                </div>
              </div>
              <div class="flex gap-6">
                <div class="shrink-0 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold">Q</div>
                <div>
                  <h4 class="text-xl font-bold mb-3">複雑化したオペレーション</h4>
                  <p class="text-sm text-[var(--text-light)] leading-loose">属人化した業務を徹底的にデジタル化。生産性を平均40%向上させ、クリエイティブな仕事に集中できる環境を作ります。</p>
                </div>
              </div>
            </div>
            <div class="bg-slate-900 rounded-[2rem] p-12 text-white relative overflow-hidden">
              <div class="relative z-10">
                <p class="text-red-400 font-bold mb-4">Solution</p>
                <p class="text-2xl leading-relaxed italic mb-8">「分析・戦略・実行。この3要素を、分断させることなく一本の線で繋ぐこと。」</p>
                <p class="text-sm opacity-60">これが、私たちが提供する唯一無二のバリューです。</p>
              </div>
              <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="py-32 px-6 bg-[var(--sub-color)]">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div class="max-w-2xl text-left">
              <h3 class="text-xs font-bold tracking-[0.4em] uppercase text-[var(--main-color)] mb-4">Core Strengths</h3>
              <p class="text-4xl font-black">圧倒的な成果を支える<br/>3つの柱</p>
            </div>
            <p class="text-[var(--text-light)] max-w-md text-sm leading-loose">
              私たちは表面的な改善は行いません。根源的なデータに基づき、持続可能な成長基盤を構築します。
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-12 rounded-3xl shadow-sm border border-slate-200 group hover:border-[var(--main-color)] transition-all duration-500">
              <div class="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-50 transition-colors">
                <svg class="w-8 h-8 text-[var(--main-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h4 class="text-2xl font-bold mb-6">業界最速の実行力</h4>
              <p class="text-[var(--text-light)] text-sm leading-loose mb-8">
                構想から検証まで、平均2週間。失敗を恐れず高速でサイクルを回すことで、最短ルートでの正解を見つけ出します。
              </p>
              <ul class="space-y-3 text-xs font-bold text-slate-400">
                <li>・最短3日でプロトタイプ作成</li>
                <li>・リアルタイムフィードバック体制</li>
              </ul>
            </div>
            <div class="bg-white p-12 rounded-3xl shadow-sm border border-slate-200 group hover:border-[var(--main-color)] transition-all duration-500">
              <div class="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-50 transition-colors">
                <svg class="w-8 h-8 text-[var(--main-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h4 class="text-2xl font-bold mb-6">フルスタック支援</h4>
              <p class="text-[var(--text-light)] text-sm leading-loose mb-8">
                デザイン、マーケティング、開発、営業戦略。各領域のスペシャリストがチームを組み、一貫した支援を提供します。
              </p>
              <ul class="space-y-3 text-xs font-bold text-slate-400">
                <li>・全領域を一社で完結</li>
                <li>・シームレスなコミュニケーション</li>
              </ul>
            </div>
            <div class="bg-white p-12 rounded-3xl shadow-sm border border-slate-200 group hover:border-[var(--main-color)] transition-all duration-500">
              <div class="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-50 transition-colors">
                <svg class="w-8 h-8 text-[var(--main-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              </div>
              <h4 class="text-2xl font-bold mb-6">データドリブン</h4>
              <p class="text-[var(--text-light)] text-sm leading-loose mb-8">
                「勘」に頼らない。独自の解析ツールを用い、ユーザーの行動を可視化。事実に基づいた最適な打ち手を選定します。
              </p>
              <ul class="space-y-3 text-xs font-bold text-slate-400">
                <li>・精度の高いA/Bテスト実行</li>
                <li>・LTVを最大化する導線設計</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="flow" class="py-32 px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-20">
            <h3 class="text-3xl font-black mb-4">導入までの4ステップ</h3>
            <p class="text-slate-400 uppercase tracking-widest text-[10px]">Seamless Onboarding Process</p>
          </div>
          <div class="space-y-4">
            <div class="flex flex-col md:flex-row gap-8 items-start p-10 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
              <div class="text-4xl font-black text-slate-200 italic">01</div>
              <div>
                <h4 class="text-xl font-bold mb-4">ヒアリング・現状分析</h4>
                <p class="text-sm text-[var(--text-light)] leading-loose">まずはオンラインにて貴社のビジネスモデルと現在抱えている課題を詳しく伺います。専門のコンサルタントが指標となる数値を洗い出し、ポテンシャルを可視化します。</p>
              </div>
            </div>
            <div class="flex flex-col md:flex-row gap-8 items-start p-10 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
              <div class="text-4xl font-black text-slate-200 italic">02</div>
              <div>
                <h4 class="text-xl font-bold mb-4">戦略ロードマップの提示</h4>
                <p class="text-sm text-[var(--text-light)] leading-loose">ヒアリング内容に基づき、具体的な解決策とスケジュールを提示します。「何を」「いつまでに」「どれくらいの成果」を出すのかを明確にしたロードマップを作成します。</p>
              </div>
            </div>
            <div class="flex flex-col md:flex-row gap-8 items-start p-10 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
              <div class="text-4xl font-black text-slate-200 italic">03</div>
              <div>
                <h4 class="text-xl font-bold mb-4">実行・プロダクト実装</h4>
                <p class="text-sm text-[var(--text-light)] leading-loose">合意いただいた戦略に沿って、専任チームが実装を開始します。デザインの作成、システム開発、広告運用設定など、必要なリソースをすべて投入します。</p>
              </div>
            </div>
            <div class="flex flex-col md:flex-row gap-8 items-start p-10 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
              <div class="text-4xl font-black text-slate-200 italic">04</div>
              <div>
                <h4 class="text-xl font-bold mb-4">グロース・継続改善</h4>
                <p class="text-sm text-[var(--text-light)] leading-loose">リリースはスタートに過ぎません。実際のユーザーデータを元に、PDCAサイクルを回し続けます。週次でのレポーティングを行い、成果を最大化します。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="news" class="py-32 px-6 bg-slate-50 border-t border-slate-100">
        <div class="max-w-6xl mx-auto">
          <div class="flex items-end justify-between mb-12 md:mb-16 gap-4">
            <div>
              <h3 class="text-2xl md:text-4xl font-black">最新情報</h3>
              <span class="text-xs font-bold tracking-[0.4em] uppercase text-slate-400">News</span>
            </div>
            <a href="/news" class="text-[9px] font-bold tracking-[0.3em] uppercase text-[var(--main-color)] border-b border-[var(--main-color)] pb-1 hover:opacity-70 transition-opacity shrink-0">すべて見る</a>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            <a href="/news/news-page" class="group block"><article class="p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow"><p class="text-[9px] font-bold tracking-[0.3em] uppercase text-slate-400 mb-3">2026.03.08</p><h4 class="text-base md:text-lg font-bold mb-2 group-hover:text-[var(--main-color)] transition-colors">最新情報は公開投稿から自動生成されます。</h4><p class="text-sm text-[var(--text-light)] leading-relaxed">記事の抜粋がここに表示されます。</p></article></a>
            <a href="/news/news-page" class="group block"><article class="p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow"><p class="text-[9px] font-bold tracking-[0.3em] uppercase text-slate-400 mb-3">2026.02.20</p><h4 class="text-base md:text-lg font-bold mb-2 group-hover:text-[var(--main-color)] transition-colors">ニュース記事のタイトルがここに表示されます。</h4><p class="text-sm text-[var(--text-light)] leading-relaxed">記事の抜粋がここに表示されます。</p></article></a>
          </div>
        </div>
      </section>

      <section id="blog" class="py-32 px-6 bg-white">
        <div class="max-w-6xl mx-auto">
          <div class="flex items-end justify-between mb-12 md:mb-16 gap-4">
            <div>
              <h3 class="text-2xl md:text-4xl font-black">ブログ</h3>
              <span class="text-xs font-bold tracking-[0.4em] uppercase text-slate-400">Blog</span>
            </div>
            <a href="/blog" class="text-[9px] font-bold tracking-[0.3em] uppercase text-[var(--main-color)] border-b border-[var(--main-color)] pb-1 hover:opacity-70 transition-opacity shrink-0">すべて見る</a>
          </div>
          <div class="grid md:grid-cols-2 gap-8">
            <a href="/blog/blog-page" class="group block overflow-hidden rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow"><div class="aspect-video bg-slate-100 overflow-hidden"></div><div class="p-6"><p class="text-[9px] font-bold tracking-[0.3em] uppercase text-slate-400 mb-3">2026.03.01</p><h4 class="text-base md:text-lg font-bold mb-2 group-hover:text-[var(--main-color)] transition-colors">ブログ記事は公開投稿から自動生成されます。</h4><p class="text-sm text-[var(--text-light)] leading-relaxed">記事の抜粋がここに表示されます。</p></div></a>
            <a href="/blog/blog-page" class="group block overflow-hidden rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow"><div class="aspect-video bg-slate-100 overflow-hidden"></div><div class="p-6"><p class="text-[9px] font-bold tracking-[0.3em] uppercase text-slate-400 mb-3">2026.02.15</p><h4 class="text-base md:text-lg font-bold mb-2 group-hover:text-[var(--main-color)] transition-colors">ブログ記事のタイトルがここに表示されます。</h4><p class="text-sm text-[var(--text-light)] leading-relaxed">記事の抜粋がここに表示されます。</p></div></a>
          </div>
        </div>
      </section>

      <section id="service" class="py-32 px-6 bg-slate-900 text-white">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-24">
            <h3 class="text-3xl md:text-5xl font-black mb-8">明快な料金体系</h3>
            <p class="text-slate-400 max-w-2xl mx-auto">貴社のフェーズに合わせた3つのプランをご用意しました。<br/>すべてのプランに専任のプロジェクトマネージャーがつきます。</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-10 border border-white/10 rounded-3xl flex flex-col">
              <h4 class="text-xl font-bold mb-4">Lite Plan</h4>
              <p class="text-xs text-slate-400 mb-8 font-sans">まず始めてみたい小規模チーム向け</p>
              <div class="flex items-baseline gap-1 mb-10">
                <span class="text-3xl font-black">¥19,800</span>
                <span class="text-slate-500">/月</span>
              </div>
              <ul class="space-y-4 text-sm mb-12 flex-grow">
                <li class="flex items-center gap-3 opacity-60"><svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> 基本解析機能</li>
                <li class="flex items-center gap-3 opacity-60"><svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> 月次レポート</li>
                <li class="flex items-center gap-3 opacity-30"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg> 専任担当者</li>
              </ul>
              <button class="w-full py-4 border border-white/20 rounded-xl hover:bg-white/5 transition-colors">詳細を見る</button>
            </div>
            <div class="p-10 bg-white text-[var(--accent-color)] rounded-3xl shadow-2xl relative scale-105 z-10">
              <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--main-color)] text-white text-[10px] font-bold px-6 py-1 rounded-full tracking-widest uppercase shadow-xl">Most Recommended</div>
              <h4 class="text-xl font-bold mb-4">Standard Plan</h4>
              <p class="text-xs text-slate-400 mb-8 font-sans">本格的なグロースを目指す企業向け</p>
              <div class="flex items-baseline gap-1 mb-10">
                <span class="text-4xl font-black text-[var(--main-color)]">¥49,800</span>
                <span class="text-slate-500">/月</span>
              </div>
              <ul class="space-y-4 text-sm mb-12 flex-grow">
                <li class="flex items-center gap-3"><svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> すべての解析機能</li>
                <li class="flex items-center gap-3"><svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> 週次詳細レポート</li>
                <li class="flex items-center gap-3"><svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> 専任担当PMアサイン</li>
                <li class="flex items-center gap-3"><svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> 無制限のデータ保存</li>
              </ul>
              <button class="w-full py-5 bg-[var(--accent-color)] text-white font-bold rounded-xl hover:bg-[var(--main-color)] transition-all shadow-xl">このプランで申し込む</button>
            </div>
            <div class="p-10 border border-white/10 rounded-3xl flex flex-col">
              <h4 class="text-xl font-bold mb-4">Enterprise</h4>
              <p class="text-xs text-slate-400 mb-8 font-sans">大規模組織・多角的な支援が必要な場合</p>
              <div class="flex items-baseline gap-1 mb-10">
                <span class="text-3xl font-black">Custom</span>
              </div>
              <ul class="space-y-4 text-sm mb-12 flex-grow">
                <li class="flex items-center gap-3 opacity-80"><svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> 24時間365日サポート</li>
                <li class="flex items-center gap-3 opacity-80"><svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> 独自のダッシュボード構築</li>
                <li class="flex items-center gap-3 opacity-80"><svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> 役員向け戦略コンサルティング</li>
              </ul>
              <button class="w-full py-4 border border-white/20 rounded-xl hover:bg-white/5 transition-colors">お問い合わせ</button>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" class="py-32 px-6 bg-white">
        <div class="max-w-4xl mx-auto">
          <h3 class="text-center text-3xl font-black mb-20">よくあるご質問</h3>
          <div class="divide-y divide-slate-100">
            <div class="py-8">
              <h4 class="text-lg font-bold mb-4 flex gap-4"><span class="text-red-400">Q.</span> 導入までにどれくらいの期間が必要ですか？</h4>
              <p class="text-sm text-[var(--text-light)] leading-loose pl-8">最短でヒアリングから1週間で初期設定が完了し、運用を開始できます。通常は2週間〜1ヶ月程度で本格的なフェーズに移行します。</p>
            </div>
            <div class="py-8">
              <h4 class="text-lg font-bold mb-4 flex gap-4"><span class="text-red-400">Q.</span> 途中でプランの変更は可能ですか？</h4>
              <p class="text-sm text-[var(--text-light)] leading-loose pl-8">はい、月単位でのアップグレード・ダウングレードが可能です。ビジネスの成長スピードに合わせて柔軟に調整いただけます。</p>
            </div>
            <div class="py-8">
              <h4 class="text-lg font-bold mb-4 flex gap-4"><span class="text-red-400">Q.</span> 解約金などは発生しますか？</h4>
              <p class="text-sm text-[var(--text-light)] leading-loose pl-8">いいえ、最低利用期間などの縛りは一切ございません。私たちは成果に自信があるため、不要になったらいつでも停止いただけます。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" class="py-32 px-6 bg-slate-50 border-t border-slate-100">
        <div class="max-w-5xl mx-auto text-center">
          <h3 class="text-4xl md:text-6xl font-black mb-12">次は、あなたの番です。</h3>
          <p class="text-lg text-[var(--text-light)] mb-12">
            現状を維持するか、それとも一気に飛躍するか。<br/>
            まずは無料で、あなたのビジネスの可能性を診断させてください。
          </p>
          <div class="bg-white p-12 rounded-[3rem] shadow-2xl shadow-slate-200 inline-block w-full md:w-auto">
             <div class="flex flex-col md:flex-row items-center gap-8">
                <div class="text-left">
                  <p class="text-xs font-bold text-red-500 mb-2 uppercase tracking-widest">Free Consultation</p>
                  <p class="text-xl font-bold">オンライン相談を予約する</p>
                </div>
                <button class="px-12 py-6 bg-[var(--main-color)] text-white font-bold text-xl rounded-2xl hover:bg-[var(--accent-color)] transition-all shadow-xl shadow-red-200">相談予約フォームへ</button>
             </div>
          </div>
        </div>
      </section>

      <section id="company" class="py-24 px-6 border-t border-slate-100 bg-white">
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-16">
            <div>
              <h3 class="text-2xl font-black mb-8">運営会社</h3>
              <p class="text-sm leading-loose text-[var(--text-light)] mb-8">
                私たちはテクノロジーとデザインの力で、あらゆるビジネスのボトルネックを解消することを目指すクリエイティブ・エージェンシーです。
              </p>
            </div>
            <div class="bg-slate-50 p-8 rounded-2xl">
              <table class="w-full text-sm">
                <tr class="border-b border-slate-200"><th class="py-4 text-left font-bold text-slate-400 uppercase tracking-widest text-[10px]">Company</th><td class="py-4 text-right">株式会社ProductX</td></tr>
                <tr class="border-b border-slate-200"><th class="py-4 text-left font-bold text-slate-400 uppercase tracking-widest text-[10px]">Location</th><td class="py-4 text-right">東京都港区六本木 1-2-3</td></tr>
                <tr><th class="py-4 text-left font-bold text-slate-400 uppercase tracking-widest text-[10px]">Established</th><td class="py-4 text-right">2018年4月</td></tr>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-16 bg-[var(--accent-color)] text-white/40 text-center text-xs tracking-[0.2em] font-bold">
      <div class="mb-8 opacity-100 text-white font-black tracking-tighter text-xl">PRODUCT<span class="text-[var(--main-color)]">X</span></div>
      &copy; 2026 PRODUCTX INC. ALL RIGHTS RESERVED.
    </footer>
  </div>
</div>`
};
