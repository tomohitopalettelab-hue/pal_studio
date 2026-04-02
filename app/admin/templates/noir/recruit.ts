import type { TemplateVariant } from '../types';

export const noirRecruitTemplate: TemplateVariant = {
  id: 'variant-noir-recruit',
  templateId: 'template-noir',
  name: 'Recruit',
  pageSlug: 'recruit',
  description: 'Noir / 採用情報ページ',
  html: `<div class="template-root" style="--main-color: #c8161d; --main-dark: #1a1a1a; --accent-color: #f7f7f5; --text-color: #1a1a1a; --text-light: #999999; --bg-color: #ffffff; --section-gap: 0; --section-padding: 4rem 0;">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
    .template-root { font-family: 'Noto Sans JP', sans-serif; }
    .template-root .font-en { font-family: 'Cormorant Garamond', serif; }
    .template-root .dac-line { stroke: var(--main-color); stroke-width: 0.5; opacity: 0.15; }
  </style>
  <div class="min-h-screen text-[var(--text-color)] bg-[var(--bg-color)]">

    <header class="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100/60">
      <div class="max-w-7xl mx-auto px-6 md:px-10 h-20 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="font-en text-2xl font-light tracking-widest text-[var(--main-dark)]">Company <span class="text-[var(--main-color)]">Name</span></div>
        </div>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-8 text-xs font-medium tracking-[0.2em] uppercase">
          <a href="#concept" class="hover:text-[var(--main-color)] transition-colors">About</a>
          <a href="#service" class="hover:text-[var(--main-color)] transition-colors">Service</a>
          <a href="#works" class="hover:text-[var(--main-color)] transition-colors">Works</a>
          <a href="#company" class="hover:text-[var(--main-color)] transition-colors">Company</a>
          <a href="#contact" class="border border-[var(--text-color)] px-5 py-2 hover:bg-[var(--text-color)] hover:text-white transition-all">Contact</a>
        </nav>
      </div>
    </header>

    <main>
      <!-- Page Hero -->
      <section class="relative py-32 bg-[var(--main-dark)] overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000" class="w-full h-full object-cover opacity-30" alt="Recruit Hero">
        </div>
        <svg class="absolute inset-0 w-full h-full z-[1] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line class="dac-line" x1="10%" y1="0" x2="10%" y2="100%" />
          <line class="dac-line" x1="90%" y1="0" x2="90%" y2="100%" />
        </svg>
        <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <p class="text-xs text-white/40 tracking-widest mb-6"><a href="#" class="hover:text-white transition-colors">HOME</a> <span class="mx-2">&gt;</span> 採用情報</p>
          <p class="font-en text-sm tracking-[0.3em] text-white/50 mb-4 uppercase">( Recruit )</p>
          <h1 class="font-en text-5xl md:text-7xl font-light text-white">採用情報</h1>
        </div>
      </section>

      <!-- Culture / Values -->
      <section class="py-28 bg-white relative overflow-hidden">
        <svg class="absolute top-0 right-0 w-64 h-64 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="60" r="120" fill="none" class="dac-line" stroke-width="0.5" />
          <circle cx="200" cy="60" r="80" fill="none" class="dac-line" stroke-width="0.5" />
        </svg>
        <div class="max-w-6xl mx-auto px-6">
          <div class="mb-20">
            <p class="font-en text-xs tracking-[0.3em] text-[var(--main-color)] mb-4 uppercase">Our Culture</p>
            <h2 class="font-en text-4xl md:text-5xl font-light">Culture &amp; <span class="italic">Values</span></h2>
            <div class="w-12 h-px bg-[var(--main-color)] mt-6"></div>
          </div>
          <div class="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p class="text-sm text-[var(--text-light)] leading-[2.2] font-light mb-8">
                私たちは、クリエイティビティとテクノロジーの融合によって新しい価値を生み出すことを大切にしています。一人ひとりが主体的に考え、挑戦できる環境を整え、共に成長していく文化を築いています。
              </p>
              <div class="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                <div>
                  <span class="font-en text-3xl font-light text-[var(--main-color)]">01</span>
                  <h4 class="text-base font-medium mt-3 mb-2">挑戦を歓迎する</h4>
                  <p class="text-xs text-[var(--text-light)] leading-relaxed font-light">失敗を恐れず、新しいことに挑む姿勢を大切にしています。</p>
                </div>
                <div>
                  <span class="font-en text-3xl font-light text-[var(--main-color)]">02</span>
                  <h4 class="text-base font-medium mt-3 mb-2">共に成長する</h4>
                  <p class="text-xs text-[var(--text-light)] leading-relaxed font-light">チームで学び合い、個人とチームの成長を同時に追求します。</p>
                </div>
                <div>
                  <span class="font-en text-3xl font-light text-[var(--main-color)]">03</span>
                  <h4 class="text-base font-medium mt-3 mb-2">本質を追求する</h4>
                  <p class="text-xs text-[var(--text-light)] leading-relaxed font-light">表面的な解決ではなく、根本から考え抜くプロフェッショナリズム。</p>
                </div>
                <div>
                  <span class="font-en text-3xl font-light text-[var(--main-color)]">04</span>
                  <h4 class="text-base font-medium mt-3 mb-2">多様性を尊重する</h4>
                  <p class="text-xs text-[var(--text-light)] leading-relaxed font-light">異なる視点やバックグラウンドが、創造性の源泉です。</p>
                </div>
              </div>
            </div>
            <div class="relative">
              <div class="overflow-hidden aspect-[3/4]">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" class="w-full h-full object-cover" alt="Team Culture">
              </div>
              <div class="absolute -bottom-6 -left-6 w-48 h-48 border border-[var(--main-color)]/20"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Open Positions -->
      <section class="py-28 bg-[var(--accent-color)] relative overflow-hidden">
        <svg class="absolute bottom-0 left-0 w-full h-px pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line class="dac-line" x1="0" y1="0" x2="100%" y2="0" />
        </svg>
        <div class="max-w-6xl mx-auto px-6">
          <div class="mb-20">
            <p class="font-en text-xs tracking-[0.3em] text-[var(--main-color)] mb-4 uppercase">Open Positions</p>
            <h2 class="font-en text-4xl md:text-5xl font-light">募集職種</h2>
            <div class="w-12 h-px bg-[var(--main-color)] mt-6"></div>
          </div>
          <div class="space-y-6">
            <!-- Job Card 1 -->
            <div class="bg-white p-8 md:p-10 group hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div class="flex-1">
                  <p class="font-en text-xs tracking-[0.2em] text-[var(--main-color)] mb-2 uppercase">Design</p>
                  <h4 class="text-xl font-medium mb-3">UI/UX デザイナー</h4>
                  <p class="text-sm text-[var(--text-light)] leading-relaxed font-light mb-4">ユーザー体験を軸としたデジタルプロダクトのデザインを担当していただきます。ブランディングからUIデザインまで幅広く携わることができます。</p>
                  <div class="flex flex-wrap gap-3">
                    <span class="text-xs border border-gray-200 px-3 py-1 text-[var(--text-light)] font-light">正社員</span>
                    <span class="text-xs border border-gray-200 px-3 py-1 text-[var(--text-light)] font-light">東京</span>
                    <span class="text-xs border border-gray-200 px-3 py-1 text-[var(--text-light)] font-light">経験3年以上</span>
                  </div>
                </div>
                <div class="flex-shrink-0">
                  <a href="#" class="inline-block border border-[var(--main-dark)] text-[var(--main-dark)] px-8 py-3 text-xs tracking-widest hover:bg-[var(--main-dark)] hover:text-white transition-all uppercase">Detail</a>
                </div>
              </div>
            </div>
            <!-- Job Card 2 -->
            <div class="bg-white p-8 md:p-10 group hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div class="flex-1">
                  <p class="font-en text-xs tracking-[0.2em] text-[var(--main-color)] mb-2 uppercase">Engineering</p>
                  <h4 class="text-xl font-medium mb-3">フロントエンドエンジニア</h4>
                  <p class="text-sm text-[var(--text-light)] leading-relaxed font-light mb-4">React/Next.jsを中心としたモダンなフロントエンド開発をリードしていただきます。パフォーマンスとアクセシビリティを重視した開発環境です。</p>
                  <div class="flex flex-wrap gap-3">
                    <span class="text-xs border border-gray-200 px-3 py-1 text-[var(--text-light)] font-light">正社員</span>
                    <span class="text-xs border border-gray-200 px-3 py-1 text-[var(--text-light)] font-light">東京 / リモート可</span>
                    <span class="text-xs border border-gray-200 px-3 py-1 text-[var(--text-light)] font-light">経験2年以上</span>
                  </div>
                </div>
                <div class="flex-shrink-0">
                  <a href="#" class="inline-block border border-[var(--main-dark)] text-[var(--main-dark)] px-8 py-3 text-xs tracking-widest hover:bg-[var(--main-dark)] hover:text-white transition-all uppercase">Detail</a>
                </div>
              </div>
            </div>
            <!-- Job Card 3 -->
            <div class="bg-white p-8 md:p-10 group hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div class="flex-1">
                  <p class="font-en text-xs tracking-[0.2em] text-[var(--main-color)] mb-2 uppercase">Marketing</p>
                  <h4 class="text-xl font-medium mb-3">デジタルマーケター</h4>
                  <p class="text-sm text-[var(--text-light)] leading-relaxed font-light mb-4">データ分析に基づくマーケティング戦略の立案・実行を担当。SEO/SEM、SNS運用、コンテンツマーケティングなど幅広い領域をカバーします。</p>
                  <div class="flex flex-wrap gap-3">
                    <span class="text-xs border border-gray-200 px-3 py-1 text-[var(--text-light)] font-light">正社員</span>
                    <span class="text-xs border border-gray-200 px-3 py-1 text-[var(--text-light)] font-light">東京</span>
                    <span class="text-xs border border-gray-200 px-3 py-1 text-[var(--text-light)] font-light">経験不問</span>
                  </div>
                </div>
                <div class="flex-shrink-0">
                  <a href="#" class="inline-block border border-[var(--main-dark)] text-[var(--main-dark)] px-8 py-3 text-xs tracking-widest hover:bg-[var(--main-dark)] hover:text-white transition-all uppercase">Detail</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Benefits -->
      <section class="py-28 bg-white relative overflow-hidden">
        <div class="max-w-6xl mx-auto px-6">
          <div class="mb-20">
            <p class="font-en text-xs tracking-[0.3em] text-[var(--main-color)] mb-4 uppercase">Benefits</p>
            <h2 class="font-en text-4xl md:text-5xl font-light">福利厚生</h2>
            <div class="w-12 h-px bg-[var(--main-color)] mt-6"></div>
          </div>
          <div class="grid md:grid-cols-3 gap-12">
            <div class="group">
              <div class="flex items-baseline gap-4 mb-6">
                <span class="font-en text-5xl font-light text-[var(--main-color)]/30">01</span>
              </div>
              <h4 class="text-lg font-medium mb-4">フレックスタイム制</h4>
              <p class="text-sm text-[var(--text-light)] leading-[2] font-light">コアタイムなしの完全フレックス。自分のリズムで最高のパフォーマンスを発揮できる環境を整えています。</p>
              <div class="w-8 h-px bg-[var(--main-color)] mt-6 group-hover:w-16 transition-all duration-500"></div>
            </div>
            <div class="group">
              <div class="flex items-baseline gap-4 mb-6">
                <span class="font-en text-5xl font-light text-[var(--main-color)]/30">02</span>
              </div>
              <h4 class="text-lg font-medium mb-4">スキルアップ支援</h4>
              <p class="text-sm text-[var(--text-light)] leading-[2] font-light">書籍購入補助、カンファレンス参加費全額負担、外部研修制度など、継続的な学びをサポートします。</p>
              <div class="w-8 h-px bg-[var(--main-color)] mt-6 group-hover:w-16 transition-all duration-500"></div>
            </div>
            <div class="group">
              <div class="flex items-baseline gap-4 mb-6">
                <span class="font-en text-5xl font-light text-[var(--main-color)]/30">03</span>
              </div>
              <h4 class="text-lg font-medium mb-4">リモートワーク</h4>
              <p class="text-sm text-[var(--text-light)] leading-[2] font-light">週3日までのリモートワークが可能。在宅勤務手当やモニター貸与など、快適な環境づくりを支援します。</p>
              <div class="w-8 h-px bg-[var(--main-color)] mt-6 group-hover:w-16 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Application CTA -->
      <section class="py-28 bg-[var(--main-dark)] text-white relative overflow-hidden">
        <svg class="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(255,255,255,0.05)" stroke-width="0.5" />
        </svg>
        <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p class="font-en text-xs tracking-[0.3em] text-[var(--main-color)] mb-4 uppercase">Join Our Team</p>
          <h2 class="font-en text-4xl md:text-5xl font-light mb-6">Application</h2>
          <div class="w-12 h-px bg-[var(--main-color)] mx-auto mb-10"></div>
          <p class="text-sm text-white/50 font-light leading-[2] mb-12">
            私たちと一緒に、まだ見ぬ未来を創りませんか。<br>
            ご応募・ご質問は、お気軽にお問い合わせください。
          </p>
          <div class="flex flex-col md:flex-row justify-center items-center gap-4">
            <a href="#" class="bg-[var(--main-color)] text-white w-full md:w-auto px-12 py-4 text-sm tracking-widest hover:opacity-80 transition-all uppercase">
              エントリーフォーム
            </a>
            <a href="#" class="border border-white/30 text-white w-full md:w-auto px-12 py-4 text-sm tracking-widest hover:bg-white hover:text-[var(--main-dark)] transition-all uppercase">
              お問い合わせ
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-[#111] text-white pt-20 pb-10 relative overflow-hidden">
      <svg class="absolute top-0 left-0 w-full h-px pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="100%" y2="0" stroke="var(--main-color)" stroke-width="2" />
      </svg>
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div class="col-span-2 md:col-span-1">
            <div class="font-en text-xl font-light tracking-widest mb-6">Company Name</div>
            <p class="text-xs text-white/40 leading-loose font-light">
              株式会社サンプル<br>
              〒000-0000<br>
              東京都渋谷区1-1-1<br>
              TEL: 000-0000-0000
            </p>
          </div>
          <div>
            <h4 class="text-xs font-medium mb-6 tracking-[0.2em] uppercase text-white/60">Company</h4>
            <ul class="space-y-3 text-sm text-white/40 font-light">
              <li><a href="#" class="hover:text-[var(--main-color)] transition-colors">会社概要</a></li>
              <li><a href="#" class="hover:text-[var(--main-color)] transition-colors">代表挨拶</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-medium mb-6 tracking-[0.2em] uppercase text-white/60">Service</h4>
            <ul class="space-y-3 text-sm text-white/40 font-light">
              <li><a href="#" class="hover:text-[var(--main-color)] transition-colors">サービス一覧</a></li>
              <li><a href="#" class="hover:text-[var(--main-color)] transition-colors">実績紹介</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-medium mb-6 tracking-[0.2em] uppercase text-white/60">Other</h4>
            <ul class="space-y-3 text-sm text-white/40 font-light">
              <li><a href="#" class="hover:text-[var(--main-color)] transition-colors">採用情報</a></li>
              <li><a href="#" class="hover:text-[var(--main-color)] transition-colors">ブログ</a></li>
              <li><a href="#" class="hover:text-[var(--main-color)] transition-colors">お問い合わせ</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-white/10 pt-6 text-center text-xs text-white/30 font-light tracking-widest">
          <p>&copy; Company Name. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  </div>
</div>`,
};
