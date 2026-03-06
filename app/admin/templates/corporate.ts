import type { Template } from './types';

export const corporateTemplate: Template = {
  id: 'template-corporate',
  name: 'Corporate: 信頼と実績',
  tags: ['business', 'trust', 'blue', 'firm'],
  description: '企業情報、事業内容を整理して見せる、信頼感重視の堅実なデザイン。',
  html: `<div class="template-root" style="--main-color: #1e40af; --main-dark: #1e3a8a; --accent-color: #f8fafc; --text-color: #1e293b; --text-light: #64748b; --bg-color: #ffffff;">
  <div class="min-h-screen font-sans text-[var(--text-color)] bg-[var(--bg-color)]">
    
    <header class="bg-white border-b-2 border-[var(--main-color)] sticky top-0 z-50 shadow-sm">
      <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-[var(--main-color)] flex items-center justify-center text-white font-bold rounded-sm">CI</div>
          <div class="font-black text-2xl tracking-tighter text-[var(--main-dark)] uppercase">Corporate <span class="text-[var(--main-color)] font-light">Inc.</span></div>
        </div>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-10">
          <a href="#concept" class="text-[15px] font-bold text-[var(--text-color)] hover:text-[var(--main-color)] transition-colors">Philosophy</a>
          <a href="#features" class="text-[15px] font-bold text-[var(--text-color)] hover:text-[var(--main-color)] transition-colors">Strengths</a>
          <a href="#service" class="text-[15px] font-bold text-[var(--text-color)] hover:text-[var(--main-color)] transition-colors">Solutions</a>
          <a href="#company" class="px-6 py-2.5 bg-[var(--main-color)] text-white text-sm font-bold rounded hover:bg-[var(--main-dark)] transition-all">お問い合わせ</a>
        </nav>
      </div>
    </header>

    <main>
      <section id="top" class="relative bg-[var(--main-dark)] text-white py-32 px-6 overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 100 L100 0 L100 100 Z" fill="white"/></svg>
        </div>
        <div class="relative max-w-5xl mx-auto">
          <div class="inline-block px-4 py-1 bg-white/10 border-l-4 border-white mb-6 text-sm font-bold tracking-widest uppercase">Since 1990</div>
          <h2 class="text-5xl md:text-7xl font-black leading-tight mb-8">信頼を未来へつなぐ、<br/><span class="text-blue-400 font-light italic">Solution Partner.</span></h2>
          <p class="text-xl opacity-80 max-w-2xl leading-relaxed mb-12">確かな技術と豊富な実績に基づき、複雑化する社会課題に対して、最適かつ持続可能な価値を共創します。</p>
          <div class="flex gap-4">
            <div class="h-1 w-24 bg-blue-400 mt-4"></div>
            <p class="font-bold text-sm tracking-[0.2em] pt-1 uppercase">Reliability and Progress</p>
          </div>
        </div>
      </section>

      <section id="concept" class="py-28 px-6 max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-20 items-center">
          <div class="relative h-[400px] bg-slate-100 rounded-lg overflow-hidden border-8 border-white shadow-2xl">
            <div class="absolute inset-0 bg-gradient-to-tr from-[var(--main-color)]/20 to-transparent"></div>
            </div>
          <div>
            <span class="text-[var(--main-color)] font-black text-sm tracking-[0.3em] uppercase mb-4 block">Concept</span>
            <h3 class="text-4xl font-bold mb-8 text-[var(--main-dark)]">誠実さとスピードで、<br/>一歩先の価値を。</h3>
            <p class="text-lg leading-loose text-[var(--text-light)] mb-6">1990年の創業以来、私たちは一貫してお客様の課題解決に向き合ってきました。変化の激しい現代において、変わらない誠実さと、止まらない技術革新で、お客様の期待を超える最高のパートナーであり続けます。</p>
            <div class="flex items-center gap-4 py-4 border-t border-slate-100">
               <span class="text-3xl font-black text-[var(--main-color)]">35</span>
               <p class="text-sm font-bold text-[var(--text-light)] tracking-tighter leading-tight">Years of<br/>Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="py-28 px-6 bg-[var(--accent-color)] border-y border-slate-200">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h3 class="text-3xl font-bold text-[var(--main-dark)] mb-4">私たちの3つの強み</h3>
            <div class="w-16 h-1 bg-[var(--main-color)] mx-auto"></div>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-10 shadow-sm border-b-4 border-[var(--main-color)] group hover:shadow-xl transition-all">
              <div class="text-5xl font-black text-slate-100 mb-6 transition-colors group-hover:text-[var(--main-color)]/10">01</div>
              <h4 class="text-xl font-bold mb-4">確かな実績</h4>
              <p class="text-sm text-[var(--text-light)] leading-relaxed">年間1,000件以上のプロジェクトを完遂。多様な業界で培った知見が、確実な成果を支えます。</p>
            </div>
            <div class="bg-white p-10 shadow-sm border-b-4 border-[var(--main-color)] group hover:shadow-xl transition-all">
              <div class="text-5xl font-black text-slate-100 mb-6 transition-colors group-hover:text-[var(--main-color)]/10">02</div>
              <h4 class="text-xl font-bold mb-4">専門家集団</h4>
              <p class="text-sm text-[var(--text-light)] leading-relaxed">有資格者や各分野のスペシャリストがチームを構成。専門性の高い課題にも、多角的な視点で解決策を提示します。</p>
            </div>
            <div class="bg-white p-10 shadow-sm border-b-4 border-[var(--main-color)] group hover:shadow-xl transition-all">
              <div class="text-5xl font-black text-slate-100 mb-6 transition-colors group-hover:text-[var(--main-color)]/10">03</div>
              <h4 class="text-xl font-bold mb-4">徹底した管理</h4>
              <p class="text-sm text-[var(--text-light)] leading-relaxed">ISO取得済みの厳格な品質・情報管理体制を構築。安定した品質と高いセキュリティをお約束します。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="service" class="py-28 px-6 max-w-5xl mx-auto">
        <div class="text-center mb-16">
          <h3 class="text-3xl font-bold text-[var(--main-dark)] mb-4">事業内容</h3>
          <p class="text-[var(--text-light)]">多岐にわたる専門技術でビジネスを加速させます</p>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="flex items-center p-8 bg-white border border-slate-200 rounded hover:border-[var(--main-color)] transition-all group">
            <div class="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mr-6 group-hover:bg-[var(--main-color)] group-hover:text-white transition-colors italic font-bold">C</div>
            <div class="font-bold text-lg">コンサルティング事業</div>
          </div>
          <div class="flex items-center p-8 bg-white border border-slate-200 rounded hover:border-[var(--main-color)] transition-all group">
            <div class="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mr-6 group-hover:bg-[var(--main-color)] group-hover:text-white transition-colors italic font-bold">S</div>
            <div class="font-bold text-lg">システム開発受託事業</div>
          </div>
          <div class="flex items-center p-8 bg-white border border-slate-200 rounded hover:border-[var(--main-color)] transition-all group">
            <div class="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mr-6 group-hover:bg-[var(--main-color)] group-hover:text-white transition-colors italic font-bold">M</div>
            <div class="font-bold text-lg">保守・運用マネジメント</div>
          </div>
          <div class="flex items-center p-8 bg-white border border-slate-200 rounded hover:border-[var(--main-color)] transition-all group">
            <div class="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mr-6 group-hover:bg-[var(--main-color)] group-hover:text-white transition-colors italic font-bold">A</div>
            <div class="font-bold text-lg">AI・DX推進支援事業</div>
          </div>
        </div>
      </section>

      <section id="works" class="py-24 px-6 bg-white border-t border-slate-100">
        <div class="max-w-6xl mx-auto">
          <div class="flex justify-between items-end mb-12">
            <h3 class="text-2xl font-bold text-[var(--main-dark)]">導入実績</h3>
            <span class="text-xs font-bold uppercase tracking-widest text-slate-400">Case Studies</span>
          </div>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="p-6 border border-slate-200 rounded-lg bg-slate-50">
              <p class="text-xs font-bold text-[var(--main-color)] uppercase tracking-widest mb-3">Manufacturing</p>
              <h4 class="text-lg font-bold mb-2">製造ラインDX化</h4>
              <p class="text-sm text-[var(--text-light)] leading-relaxed">稼働率を可視化し、年間コストを18%削減。</p>
            </div>
            <div class="p-6 border border-slate-200 rounded-lg bg-slate-50">
              <p class="text-xs font-bold text-[var(--main-color)] uppercase tracking-widest mb-3">Finance</p>
              <h4 class="text-lg font-bold mb-2">業務プロセス最適化</h4>
              <p class="text-sm text-[var(--text-light)] leading-relaxed">承認フローの自動化で処理速度を2.4倍へ。</p>
            </div>
            <div class="p-6 border border-slate-200 rounded-lg bg-slate-50">
              <p class="text-xs font-bold text-[var(--main-color)] uppercase tracking-widest mb-3">Retail</p>
              <h4 class="text-lg font-bold mb-2">店舗UX刷新</h4>
              <p class="text-sm text-[var(--text-light)] leading-relaxed">NPS改善と購買率向上を同時に実現。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="company" class="py-28 px-6 bg-slate-900 text-white">
        <div class="max-w-5xl mx-auto">
          <div class="grid md:grid-cols-3 gap-12">
            <div>
              <h3 class="text-3xl font-bold mb-6">Company<br/>Information</h3>
              <p class="text-sm text-slate-400 leading-loose">私たちの組織概要と、これまでの歩み、そして透明性の高い経営体制についてご紹介します。</p>
            </div>
            <div class="md:col-span-2">
              <dl class="divide-y divide-white/10">
                <div class="grid grid-cols-3 py-6">
                  <dt class="text-slate-400 font-bold text-sm uppercase">Representative</dt>
                  <dd class="col-span-2 font-bold">代表取締役 山田 太郎</dd>
                </div>
                <div class="grid grid-cols-3 py-6">
                  <dt class="text-slate-400 font-bold text-sm uppercase">Capital</dt>
                  <dd class="col-span-2 font-bold">5,000万円</dd>
                </div>
                <div class="grid grid-cols-3 py-6">
                  <dt class="text-slate-400 font-bold text-sm uppercase">Employees</dt>
                  <dd class="col-span-2 font-bold">120名（連結・2026年現在）</dd>
                </div>
                <div class="grid grid-cols-3 py-6">
                  <dt class="text-slate-400 font-bold text-sm uppercase">License</dt>
                  <dd class="col-span-2 font-bold text-sm">ISO 9001, ISO 27001取得済み</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-black text-white py-16 text-center border-t border-white/5">
      <div class="font-black text-xl mb-6 tracking-widest uppercase">Corporate Inc.</div>
      <p class="text-[10px] tracking-[0.2em] text-slate-500">&copy; 2026 CORPORATE INC. ALL RIGHTS RESERVED.</p>
    </footer>
  </div>
</div>`
};
