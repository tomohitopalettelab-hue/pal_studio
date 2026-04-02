import type { TemplateVariant } from '../types';

export const noirSolutionTemplate: TemplateVariant = {
  id: 'variant-noir-solution',
  templateId: 'template-noir',
  name: 'Solution',
  pageSlug: 'service',
  description: 'Noir / 事業内容ページ',
  html: `<div class="template-root" style="--main-color: #c8161d; --main-dark: #1a1a1a; --accent-color: #f7f7f5; --text-color: #1a1a1a; --text-light: #999999; --bg-color: #ffffff;">
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
      <!-- top: ページヒーロー -->
      <section id="top" class="relative py-32 bg-[var(--accent-color)] overflow-hidden">
        <svg class="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line class="dac-line" x1="10%" y1="0" x2="10%" y2="100%" />
          <line class="dac-line" x1="90%" y1="0" x2="90%" y2="100%" />
        </svg>
        <div class="relative z-10 max-w-6xl mx-auto px-6">
          <nav class="mb-8 text-xs text-[var(--text-light)] font-light flex items-center gap-2 tracking-widest">
            <a href="/" class="hover:text-[var(--main-color)] transition-colors">HOME</a>
            <span>&gt;</span>
            <span class="text-[var(--main-dark)]">事業内容</span>
          </nav>
          <p class="font-en text-xs tracking-[0.3em] text-[var(--main-color)] mb-4 uppercase">( Service )</p>
          <h1 class="font-en text-4xl md:text-6xl font-light leading-tight">事業内容</h1>
          <div class="w-12 h-px bg-[var(--main-color)] mt-8"></div>
        </div>
      </section>

      <!-- サービス紹介 -->
      <section class="py-28 bg-white relative overflow-hidden">
        <svg class="absolute top-0 right-0 w-64 h-64 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="60" r="120" fill="none" class="dac-line" stroke-width="0.5" />
          <circle cx="200" cy="60" r="80" fill="none" class="dac-line" stroke-width="0.5" />
        </svg>
        <div class="max-w-6xl mx-auto px-6">
          <div class="mb-20">
            <p class="font-en text-xs tracking-[0.3em] text-[var(--main-color)] mb-4 uppercase">( What We Do )</p>
            <h2 class="font-en text-3xl md:text-5xl font-light">Our Services</h2>
            <div class="w-12 h-px bg-[var(--main-color)] mt-6"></div>
          </div>

          <!-- サービス1: Web制作 -->
          <div class="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div class="overflow-hidden aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover" alt="Web制作">
            </div>
            <div>
              <div class="flex items-baseline gap-4 mb-6">
                <span class="font-en text-5xl font-light text-[var(--main-color)]/30">01</span>
              </div>
              <h3 class="text-2xl font-medium mb-4">Web制作</h3>
              <p class="font-en text-xs tracking-[0.2em] text-[var(--main-color)] mb-6 uppercase">Web Design &amp; Development</p>
              <p class="text-sm text-[var(--text-light)] leading-[2.2] font-light mb-6">
                企業のブランド価値を最大限に引き出すWebサイトを、企画・デザイン・開発まで一貫してご提供します。レスポンシブデザイン、パフォーマンス最適化、SEO対策まで、あらゆる側面からビジネスの成長を支援します。
              </p>
              <ul class="space-y-2 text-sm text-[var(--text-light)] font-light">
                <li class="flex items-center gap-3"><span class="w-1 h-1 bg-[var(--main-color)] flex-shrink-0"></span>コーポレートサイト制作</li>
                <li class="flex items-center gap-3"><span class="w-1 h-1 bg-[var(--main-color)] flex-shrink-0"></span>ECサイト構築</li>
                <li class="flex items-center gap-3"><span class="w-1 h-1 bg-[var(--main-color)] flex-shrink-0"></span>LP・キャンペーンサイト</li>
                <li class="flex items-center gap-3"><span class="w-1 h-1 bg-[var(--main-color)] flex-shrink-0"></span>CMS導入・運用支援</li>
              </ul>
            </div>
          </div>

          <!-- サービス2: ブランディング -->
          <div class="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div class="order-2 lg:order-1">
              <div class="flex items-baseline gap-4 mb-6">
                <span class="font-en text-5xl font-light text-[var(--main-color)]/30">02</span>
              </div>
              <h3 class="text-2xl font-medium mb-4">ブランディング</h3>
              <p class="font-en text-xs tracking-[0.2em] text-[var(--main-color)] mb-6 uppercase">Branding &amp; Identity</p>
              <p class="text-sm text-[var(--text-light)] leading-[2.2] font-light mb-6">
                企業やプロダクトの本質を見極め、一貫したブランドアイデンティティを構築します。ロゴ・VI設計からブランドガイドライン策定まで、あらゆるタッチポイントで統一感のあるブランド体験を設計します。
              </p>
              <ul class="space-y-2 text-sm text-[var(--text-light)] font-light">
                <li class="flex items-center gap-3"><span class="w-1 h-1 bg-[var(--main-color)] flex-shrink-0"></span>ロゴ・VI設計</li>
                <li class="flex items-center gap-3"><span class="w-1 h-1 bg-[var(--main-color)] flex-shrink-0"></span>ブランドガイドライン策定</li>
                <li class="flex items-center gap-3"><span class="w-1 h-1 bg-[var(--main-color)] flex-shrink-0"></span>ネーミング・タグライン開発</li>
                <li class="flex items-center gap-3"><span class="w-1 h-1 bg-[var(--main-color)] flex-shrink-0"></span>ブランド戦略コンサルティング</li>
              </ul>
            </div>
            <div class="overflow-hidden aspect-[4/3] order-1 lg:order-2">
              <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover" alt="ブランディング">
            </div>
          </div>

          <!-- サービス3: AIコンサルティング -->
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="overflow-hidden aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover" alt="AIコンサルティング">
            </div>
            <div>
              <div class="flex items-baseline gap-4 mb-6">
                <span class="font-en text-5xl font-light text-[var(--main-color)]/30">03</span>
              </div>
              <h3 class="text-2xl font-medium mb-4">AIコンサルティング</h3>
              <p class="font-en text-xs tracking-[0.2em] text-[var(--main-color)] mb-6 uppercase">AI Consulting</p>
              <p class="text-sm text-[var(--text-light)] leading-[2.2] font-light mb-6">
                最先端のAI技術を活用し、業務効率化やサービス改善を実現します。生成AIの導入支援からカスタムモデルの開発まで、お客様のビジネスに最適なAIソリューションをご提案します。
              </p>
              <ul class="space-y-2 text-sm text-[var(--text-light)] font-light">
                <li class="flex items-center gap-3"><span class="w-1 h-1 bg-[var(--main-color)] flex-shrink-0"></span>生成AI導入支援</li>
                <li class="flex items-center gap-3"><span class="w-1 h-1 bg-[var(--main-color)] flex-shrink-0"></span>業務自動化コンサルティング</li>
                <li class="flex items-center gap-3"><span class="w-1 h-1 bg-[var(--main-color)] flex-shrink-0"></span>データ分析・活用支援</li>
                <li class="flex items-center gap-3"><span class="w-1 h-1 bg-[var(--main-color)] flex-shrink-0"></span>AIプロダクト開発</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- サービスフロー -->
      <section class="py-28 bg-[var(--accent-color)] relative overflow-hidden">
        <svg class="absolute bottom-0 left-0 w-full h-px pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line class="dac-line" x1="0" y1="0" x2="100%" y2="0" />
        </svg>
        <div class="max-w-6xl mx-auto px-6">
          <div class="mb-20">
            <p class="font-en text-xs tracking-[0.3em] text-[var(--main-color)] mb-4 uppercase">( Process )</p>
            <h2 class="font-en text-3xl md:text-5xl font-light">Flow</h2>
            <div class="w-12 h-px bg-[var(--main-color)] mt-6"></div>
          </div>
          <div class="grid md:grid-cols-4 gap-8">
            <div class="relative">
              <span class="font-en text-6xl font-light text-[var(--main-color)]/20 block mb-4">01</span>
              <h4 class="text-base font-medium mb-3">ヒアリング</h4>
              <p class="text-xs text-[var(--text-light)] leading-[2] font-light">課題や目標を丁寧にヒアリングし、プロジェクトの方向性を明確にします。</p>
              <div class="hidden md:block absolute top-8 -right-4 w-8 h-px bg-[var(--main-color)]/20"></div>
            </div>
            <div class="relative">
              <span class="font-en text-6xl font-light text-[var(--main-color)]/20 block mb-4">02</span>
              <h4 class="text-base font-medium mb-3">企画・戦略立案</h4>
              <p class="text-xs text-[var(--text-light)] leading-[2] font-light">調査・分析に基づき、最適な戦略とクリエイティブの方向性をご提案します。</p>
              <div class="hidden md:block absolute top-8 -right-4 w-8 h-px bg-[var(--main-color)]/20"></div>
            </div>
            <div class="relative">
              <span class="font-en text-6xl font-light text-[var(--main-color)]/20 block mb-4">03</span>
              <h4 class="text-base font-medium mb-3">制作・開発</h4>
              <p class="text-xs text-[var(--text-light)] leading-[2] font-light">デザインと技術力を駆使し、高品質なクリエイティブを制作・実装します。</p>
              <div class="hidden md:block absolute top-8 -right-4 w-8 h-px bg-[var(--main-color)]/20"></div>
            </div>
            <div>
              <span class="font-en text-6xl font-light text-[var(--main-color)]/20 block mb-4">04</span>
              <h4 class="text-base font-medium mb-3">納品・運用支援</h4>
              <p class="text-xs text-[var(--text-light)] leading-[2] font-light">納品後も継続的な改善提案と運用サポートで、長期的な成果を実現します。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 料金目安 -->
      <section class="py-28 bg-white relative overflow-hidden">
        <svg class="absolute top-0 left-0 w-full h-px pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line class="dac-line" x1="0" y1="0" x2="100%" y2="0" />
        </svg>
        <div class="max-w-6xl mx-auto px-6">
          <div class="mb-20">
            <p class="font-en text-xs tracking-[0.3em] text-[var(--main-color)] mb-4 uppercase">( Pricing )</p>
            <h2 class="font-en text-3xl md:text-5xl font-light">Price</h2>
            <div class="w-12 h-px bg-[var(--main-color)] mt-6"></div>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="border border-gray-100 p-8">
              <p class="font-en text-xs tracking-[0.2em] text-[var(--main-color)] mb-4 uppercase">Light</p>
              <h4 class="text-lg font-medium mb-2">コーポレートサイト</h4>
              <p class="font-en text-3xl font-light text-[var(--main-dark)] mb-4">300,000<span class="text-sm">円〜</span></p>
              <div class="w-8 h-px bg-[var(--main-color)]/30 mb-4"></div>
              <ul class="space-y-2 text-xs text-[var(--text-light)] font-light">
                <li>5ページ構成</li>
                <li>レスポンシブ対応</li>
                <li>CMS導入</li>
                <li>制作期間：約1ヶ月</li>
              </ul>
            </div>
            <div class="border border-[var(--main-color)]/30 p-8 relative">
              <span class="absolute top-0 left-0 w-full h-px bg-[var(--main-color)]"></span>
              <p class="font-en text-xs tracking-[0.2em] text-[var(--main-color)] mb-4 uppercase">Standard</p>
              <h4 class="text-lg font-medium mb-2">ブランディング + Web</h4>
              <p class="font-en text-3xl font-light text-[var(--main-dark)] mb-4">800,000<span class="text-sm">円〜</span></p>
              <div class="w-8 h-px bg-[var(--main-color)]/30 mb-4"></div>
              <ul class="space-y-2 text-xs text-[var(--text-light)] font-light">
                <li>ブランド戦略策定</li>
                <li>10ページ構成</li>
                <li>オリジナルデザイン</li>
                <li>制作期間：約2〜3ヶ月</li>
              </ul>
            </div>
            <div class="border border-gray-100 p-8">
              <p class="font-en text-xs tracking-[0.2em] text-[var(--main-color)] mb-4 uppercase">Premium</p>
              <h4 class="text-lg font-medium mb-2">フルサポート</h4>
              <p class="font-en text-3xl font-light text-[var(--main-dark)] mb-4">1,500,000<span class="text-sm">円〜</span></p>
              <div class="w-8 h-px bg-[var(--main-color)]/30 mb-4"></div>
              <ul class="space-y-2 text-xs text-[var(--text-light)] font-light">
                <li>CI/VI設計含む</li>
                <li>大規模サイト構築</li>
                <li>AI機能導入</li>
                <li>制作期間：約3〜6ヶ月</li>
              </ul>
            </div>
          </div>
          <p class="text-xs text-[var(--text-light)] font-light mt-8 text-center tracking-widest">※ 上記は参考価格です。詳細はお問い合わせください。</p>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-28 bg-[var(--main-dark)] text-white relative overflow-hidden">
        <svg class="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(255,255,255,0.05)" stroke-width="0.5" />
        </svg>
        <div class="max-w-4xl mx-auto px-6 text-center">
          <p class="font-en text-xs tracking-[0.3em] text-[var(--main-color)] mb-4 uppercase">( Contact )</p>
          <h2 class="font-en text-3xl md:text-5xl font-light mb-6">Get In Touch</h2>
          <div class="w-12 h-px bg-[var(--main-color)] mx-auto mb-10"></div>
          <p class="text-sm text-white/50 font-light leading-[2] mb-12">
            サービスに関するご質問やお見積もりなど、<br>お気軽にお問い合わせください。
          </p>
          <div class="flex flex-col md:flex-row justify-center items-center gap-4">
            <a href="#" class="border border-white/30 text-white w-full md:w-auto px-12 py-4 text-sm tracking-widest hover:bg-white hover:text-[var(--main-dark)] transition-all">
              TEL. 000-0000-0000
            </a>
            <a href="#" class="bg-[var(--main-color)] text-white w-full md:w-auto px-12 py-4 text-sm tracking-widest hover:opacity-80 transition-all">
              CONTACT FORM
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
