import type { TemplateVariant } from '../types';

export const noirAboutTemplate: TemplateVariant = {
  id: 'variant-noir-about',
  templateId: 'template-noir',
  name: 'About',
  pageSlug: 'about',
  description: 'Noir / 企業概要ページ',
  html: `<div class="template-root" style="--main-color: #c8161d; --main-dark: #111; --accent-color: #f7f7f5; --text-color: #1a1a1a; --text-light: #999; --bg-color: #fff;">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
    .template-root { font-family: 'Noto Sans JP', sans-serif; color: var(--text-color); background: var(--bg-color); -webkit-font-smoothing: antialiased; }
    .template-root .font-display { font-family: 'Cormorant Garamond', serif; }
    .template-root .section-label { font-family: 'Cormorant Garamond', serif; font-size: 0.9rem; font-weight: 300; color: var(--text-light); }
    .template-root .u-btn { display: inline-flex; align-items: center; gap: 16px; font-family: 'Cormorant Garamond', serif; font-size: 0.95rem; padding: 14px 32px; border: 1px solid var(--text-light); transition: all 0.4s; }
    .template-root .u-btn:hover { background: var(--text-color); color: #fff; border-color: var(--text-color); }
  </style>

  <header style="border-bottom: 1px solid #e5e5e5; padding: 20px 0;">
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 60px; display: flex; align-items: center; justify-content: space-between;">
      <div class="font-display" style="font-size: 1.15rem; font-weight: 400; letter-spacing: 0.18em;">COMPANY NAME</div>
      <nav data-sync="site-pages" style="display: flex; gap: 40px; font-family: 'Cormorant Garamond', serif; font-size: 0.9rem; color: var(--text-light);"></nav>
    </div>
  </header>

  <main>
    <!-- Hero -->
    <section style="padding: 80px 0 60px; background: var(--accent-color);">
      <div style="max-width: 1200px; margin: 0 auto; padding: 0 60px;">
        <nav style="font-size: 0.75rem; color: var(--text-light); margin-bottom: 32px; display: flex; gap: 8px; align-items: center;">
          <a href="/" style="color: var(--text-light); text-decoration: none;">HOME</a>
          <span>/</span>
          <span style="color: var(--text-color);">ABOUT</span>
        </nav>
        <p class="section-label" style="margin-bottom: 12px;">ABOUT</p>
        <h1 class="font-display" style="font-size: 2.8rem; font-weight: 300; letter-spacing: 0.04em; margin: 0;">企業概要</h1>
        <div style="width: 40px; height: 1px; background: var(--main-color); margin-top: 32px;"></div>
      </div>
    </section>

    <!-- Mission -->
    <section style="padding: 100px 0; background: var(--bg-color);">
      <div style="max-width: 1200px; margin: 0 auto; padding: 0 60px;">
        <p class="section-label" style="margin-bottom: 12px;">MISSION</p>
        <h2 class="font-display" style="font-size: 2rem; font-weight: 300; margin: 0 0 24px;">私たちの使命</h2>
        <div style="width: 40px; height: 1px; background: var(--main-color); margin-bottom: 48px;"></div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;">
          <div>
            <p style="font-size: 0.95rem; line-height: 2.2; color: var(--text-light); font-weight: 300;">
              私たちは「本質を見つめるデザイン」を信念に、ビジネスの根幹に寄り添う戦略的なクリエイティブを追求しています。変化の激しい時代において、表層的な美しさだけでなく、本質的な価値を届けることが私たちの使命です。
            </p>
            <p style="font-size: 0.95rem; line-height: 2.2; color: var(--text-light); font-weight: 300; margin-top: 20px;">
              デザインとテクノロジーの融合で、企業の可能性を最大化し、すべてのブランドがその本質を美しく伝えられる世界を創造します。
            </p>
          </div>
          <div style="aspect-ratio: 4/3; background: var(--accent-color); display: flex; align-items: center; justify-content: center;">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Mission" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
        </div>
      </div>
    </section>

    <!-- Company Overview -->
    <section style="padding: 100px 0; background: var(--accent-color);">
      <div style="max-width: 1200px; margin: 0 auto; padding: 0 60px;">
        <p class="section-label" style="margin-bottom: 12px;">OVERVIEW</p>
        <h2 class="font-display" style="font-size: 2rem; font-weight: 300; margin: 0 0 24px;">会社概要</h2>
        <div style="width: 40px; height: 1px; background: var(--main-color); margin-bottom: 48px;"></div>
        <div style="max-width: 800px;">
          <dl style="margin: 0;">
            <div style="display: flex; border-bottom: 1px solid #e5e5e5; padding: 20px 0;">
              <dt style="width: 160px; font-size: 0.85rem; font-weight: 500; flex-shrink: 0;">会社名</dt>
              <dd style="margin: 0; font-size: 0.85rem; color: var(--text-light); font-weight: 300;">株式会社サンプル</dd>
            </div>
            <div style="display: flex; border-bottom: 1px solid #e5e5e5; padding: 20px 0;">
              <dt style="width: 160px; font-size: 0.85rem; font-weight: 500; flex-shrink: 0;">設立</dt>
              <dd style="margin: 0; font-size: 0.85rem; color: var(--text-light); font-weight: 300;">2010年4月</dd>
            </div>
            <div style="display: flex; border-bottom: 1px solid #e5e5e5; padding: 20px 0;">
              <dt style="width: 160px; font-size: 0.85rem; font-weight: 500; flex-shrink: 0;">所在地</dt>
              <dd style="margin: 0; font-size: 0.85rem; color: var(--text-light); font-weight: 300;">〒000-0000 東京都渋谷区1-1-1 サンプルビル 5F</dd>
            </div>
            <div style="display: flex; border-bottom: 1px solid #e5e5e5; padding: 20px 0;">
              <dt style="width: 160px; font-size: 0.85rem; font-weight: 500; flex-shrink: 0;">代表者</dt>
              <dd style="margin: 0; font-size: 0.85rem; color: var(--text-light); font-weight: 300;">代表取締役 山田 太郎</dd>
            </div>
            <div style="display: flex; border-bottom: 1px solid #e5e5e5; padding: 20px 0;">
              <dt style="width: 160px; font-size: 0.85rem; font-weight: 500; flex-shrink: 0;">資本金</dt>
              <dd style="margin: 0; font-size: 0.85rem; color: var(--text-light); font-weight: 300;">1,000万円</dd>
            </div>
            <div style="display: flex; border-bottom: 1px solid #e5e5e5; padding: 20px 0;">
              <dt style="width: 160px; font-size: 0.85rem; font-weight: 500; flex-shrink: 0;">事業内容</dt>
              <dd style="margin: 0; font-size: 0.85rem; color: var(--text-light); font-weight: 300; line-height: 1.8;">Webサイトの企画・制作・運用<br>ブランディング・CI/VI設計<br>デジタルマーケティング支援</dd>
            </div>
            <div style="display: flex; padding: 20px 0;">
              <dt style="width: 160px; font-size: 0.85rem; font-weight: 500; flex-shrink: 0;">TEL</dt>
              <dd style="margin: 0; font-size: 0.85rem; color: var(--text-light); font-weight: 300;">000-0000-0000</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section style="padding: 100px 0; background: var(--bg-color); text-align: center;">
      <div style="max-width: 1200px; margin: 0 auto; padding: 0 60px;">
        <p class="section-label" style="margin-bottom: 12px;">CONTACT</p>
        <h2 class="font-display" style="font-size: 2rem; font-weight: 300; margin: 0 0 16px;">お問い合わせ</h2>
        <p style="font-size: 0.85rem; color: var(--text-light); font-weight: 300; margin-bottom: 40px;">ご質問・ご相談はお気軽にお問い合わせください。</p>
        <a href="/contact" data-page-slug="contact" class="u-btn" style="text-decoration: none; color: var(--text-color);">
          お問い合わせはこちら <span style="font-size: 0.8rem;">&rarr;</span>
        </a>
      </div>
    </section>
  </main>

  <footer style="background: #111; color: rgba(255,255,255,0.4); padding: 40px 0;">
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 60px; display: flex; justify-content: space-between; align-items: center;">
      <span class="font-display" style="font-size: 1rem; letter-spacing: 0.2em;">COMPANY NAME</span>
      <small style="font-size: 0.7rem; letter-spacing: 0.15em;">&copy; Company Name</small>
    </div>
  </footer>
</div>`,
};
