import type { TemplateVariant } from '../types';

export const noirContactTemplate: TemplateVariant = {
  id: 'variant-noir-contact',
  templateId: 'template-noir',
  name: 'Contact',
  pageSlug: 'contact',
  description: 'Noir / お問い合わせページ',
  html: `<div class="template-root" style="--main-color: #c8161d; --main-dark: #1a1a1a; --accent-color: #f7f7f5; --text-color: #1a1a1a; --text-light: #999999; --bg-color: #ffffff; --section-gap: 0; --section-padding: 4rem 0;">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
    .template-root { font-family: 'Noto Sans JP', sans-serif; }
    .template-root .font-en { font-family: 'Cormorant Garamond', serif; }
    .template-root .dac-line { stroke: var(--main-color); stroke-width: 0.5; opacity: 0.15; }
    .template-root .form-input { width: 100%; padding: 0.875rem 1.25rem; border: 1px solid #e0e0e0; font-family: 'Noto Sans JP', sans-serif; font-size: 0.875rem; color: #1a1a1a; background: #ffffff; transition: border-color 0.2s, box-shadow 0.2s; outline: none; }
    .template-root .form-input:focus { border-color: var(--main-color); box-shadow: 0 0 0 2px color-mix(in srgb, var(--main-color) 8%, transparent); }
    .template-root .form-input::placeholder { color: #bbb; }
    .template-root select.form-input { cursor: pointer; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23c8161d'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 1rem center; background-size: 1rem; padding-right: 2.5rem; }
    .template-root textarea.form-input { resize: vertical; min-height: 180px; }
    .template-root .form-label { display: block; font-weight: 500; font-size: 0.8rem; margin-bottom: 0.5rem; color: #1a1a1a; letter-spacing: 0.05em; }
    .template-root .form-label .required { color: var(--main-color); margin-left: 0.35rem; font-size: 0.65rem; font-weight: 500; }
  </style>
  <div class="min-h-screen text-[var(--text-color)] bg-[var(--bg-color)]">

    <header class="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100/60">
      <div class="max-w-7xl mx-auto px-6 md:px-10 h-20 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="font-en text-2xl font-light tracking-widest text-[var(--main-dark)]">Company <span class="text-[var(--main-color)]">Name</span></div>
        </div>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-8 text-xs font-medium tracking-[0.2em] uppercase"></nav>
      </div>
    </header>

    <main>
      <!-- Page Hero -->
      <section class="relative py-32 bg-[var(--main-dark)] overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000" class="w-full h-full object-cover opacity-25" alt="Contact Hero">
        </div>
        <svg class="absolute inset-0 w-full h-full z-[1] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line class="dac-line" x1="10%" y1="0" x2="10%" y2="100%" />
          <line class="dac-line" x1="90%" y1="0" x2="90%" y2="100%" />
        </svg>
        <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <p class="text-xs text-white/40 tracking-widest mb-6"><a href="#" class="hover:text-white transition-colors">HOME</a> <span class="mx-2">&gt;</span> お問い合わせ</p>
          <p class="font-en text-sm tracking-[0.3em] text-white/50 mb-4 uppercase">( Contact )</p>
          <h1 class="font-en text-5xl md:text-7xl font-light text-white">お問い合わせ</h1>
        </div>
      </section>

      <!-- Contact Form + Side Info -->
      <section class="py-28 bg-white relative overflow-hidden">
        <svg class="absolute top-0 right-0 w-64 h-64 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="60" r="120" fill="none" class="dac-line" stroke-width="0.5" />
        </svg>
        <div class="max-w-6xl mx-auto px-6">
          <div class="mb-16">
            <p class="font-en text-xs tracking-[0.3em] text-[var(--main-color)] mb-4 uppercase">Contact Form</p>
            <h2 class="font-en text-4xl md:text-5xl font-light">お問い合わせ<span class="italic font-en">フォーム</span></h2>
            <div class="w-12 h-px bg-[var(--main-color)] mt-6"></div>
          </div>
          <p class="text-sm text-[var(--text-light)] font-light leading-[2] mb-14 max-w-2xl">
            お問い合わせ内容をご記入の上、送信ボタンを押してください。<br>
            担当者より2営業日以内にご連絡いたします。<span class="text-[var(--main-color)]">*</span> は必須項目です。
          </p>

          <div class="grid lg:grid-cols-3 gap-16">
            <!-- Form -->
            <div class="lg:col-span-2">
              <form data-palette-form="contact" class="space-y-8">
                <div>
                  <label class="form-label">お名前 <span class="required">*必須</span></label>
                  <input type="text" name="name" class="form-input" placeholder="山田 太郎" required>
                </div>
                <div>
                  <label class="form-label">メールアドレス <span class="required">*必須</span></label>
                  <input type="email" name="email" class="form-input" placeholder="info@example.com" required>
                </div>
                <div>
                  <label class="form-label">電話番号</label>
                  <input type="tel" name="phone" class="form-input" placeholder="000-0000-0000">
                </div>
                <div>
                  <label class="form-label">お問い合わせ種別 <span class="required">*必須</span></label>
                  <select name="category" class="form-input" required>
                    <option value="" disabled selected>選択してください</option>
                    <option value="service">サービスに関するお問い合わせ</option>
                    <option value="estimate">お見積もりのご依頼</option>
                    <option value="recruit">採用に関するお問い合わせ</option>
                    <option value="other">その他</option>
                  </select>
                </div>
                <div>
                  <label class="form-label">メッセージ <span class="required">*必須</span></label>
                  <textarea name="message" class="form-input" placeholder="お問い合わせ内容をご記入ください" required></textarea>
                </div>
                <div class="pt-4">
                  <button type="submit" class="bg-[var(--main-color)] text-white px-14 py-4 text-sm tracking-widest hover:opacity-80 transition-all uppercase">
                    送信する
                  </button>
                </div>
              </form>
            </div>

            <!-- Side Info -->
            <div class="lg:col-span-1">
              <div class="border-l border-gray-200 pl-8 space-y-10">
                <div>
                  <p class="font-en text-xs tracking-[0.2em] text-[var(--main-color)] mb-3 uppercase">Tel</p>
                  <p class="text-lg font-light tracking-wider">000-0000-0000</p>
                  <p class="text-xs text-[var(--text-light)] font-light mt-1">受付時間: 平日 9:00 - 18:00</p>
                </div>
                <div>
                  <p class="font-en text-xs tracking-[0.2em] text-[var(--main-color)] mb-3 uppercase">Email</p>
                  <p class="text-sm font-light">info@example.com</p>
                </div>
                <div>
                  <p class="font-en text-xs tracking-[0.2em] text-[var(--main-color)] mb-3 uppercase">Address</p>
                  <p class="text-sm text-[var(--text-light)] font-light leading-loose">
                    〒000-0000<br>
                    東京都渋谷区1-1-1<br>
                    サンプルビル 5F
                  </p>
                </div>
                <div>
                  <p class="font-en text-xs tracking-[0.2em] text-[var(--main-color)] mb-3 uppercase">Business Hours</p>
                  <p class="text-sm text-[var(--text-light)] font-light leading-loose">
                    月〜金: 9:00 - 18:00<br>
                    土日祝: 休業
                  </p>
                </div>
              </div>
            </div>
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
