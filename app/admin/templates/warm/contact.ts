import type { TemplateVariant } from '../types';

export const warmContactTemplate: TemplateVariant = {
  id: 'variant-warm-contact',
  templateId: 'template-warm',
  name: 'Contact',
  pageSlug: 'contact',
  description: 'Warm / お問い合わせページ',
  html: `
<div class="template-root" style="--main-color: #c59500; --main-dark: #9a7500; --accent-color: #FDFBF7; --text-color: #333333; --text-light: #6b7280; --bg-color: #ffffff;">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&family=Quicksand:wght@600;700&display=swap');
    .template-root { font-family: 'Noto Sans JP', sans-serif; }
    .template-root .font-en { font-family: 'Quicksand', sans-serif; }
    .template-root .bubble-field { position: absolute; inset: 0; pointer-events: none; z-index: 5; }
    .template-root .bubble { position: absolute; border-radius: 9999px; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0)); opacity: 0.5; filter: blur(0.5px); animation: warmFloat 16s ease-in-out infinite; }
    .template-root .bubble-warm { background: radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--main-color) 25%, transparent), transparent); }
    @keyframes warmFloat { 0% { transform: translateY(0); } 50% { transform: translateY(-18px); } 100% { transform: translateY(0); } }
    .template-root .form-input { width: 100%; padding: 0.875rem 1.25rem; border: 2px solid #e5e7eb; border-radius: 1rem; font-family: 'Noto Sans JP', sans-serif; font-size: 0.875rem; color: #333333; background: #FDFBF7; transition: border-color 0.2s, box-shadow 0.2s; outline: none; }
    .template-root .form-input:focus { border-color: var(--main-color); box-shadow: 0 0 0 3px color-mix(in srgb, var(--main-color) 10%, transparent); }
    .template-root .form-input::placeholder { color: #9ca3af; }
    .template-root select.form-input { cursor: pointer; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23c59500'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 1rem center; background-size: 1.1rem; padding-right: 2.5rem; }
    .template-root textarea.form-input { resize: vertical; min-height: 160px; }
    .template-root .form-label { display: block; font-weight: 900; font-size: 0.85rem; margin-bottom: 0.5rem; color: #333333; }
    .template-root .form-label .required { color: var(--main-color); margin-left: 0.25rem; font-size: 0.7rem; }
  </style>
  <div class="min-h-screen text-[var(--text-color)] bg-[var(--accent-color)]">
    <header class="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 md:px-10 h-20 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-[var(--main-color)] flex items-center justify-center text-white font-black rounded-full text-sm">W</div>
          <div class="font-black text-xl tracking-tight">Company <span class="text-[var(--main-color)] font-bold">Name</span></div>
        </div>
        <nav data-sync="site-pages" class="hidden md:flex items-center gap-6 text-sm font-black tracking-widest"></nav>
      </div>
    </header>

    <main>
      <section id="top" class="pt-32 pb-16 bg-[#F4F7F9] relative overflow-hidden">
        <div class="bubble-field">
          <span class="bubble bubble-warm" style="width:180px;height:180px;left:5%;top:20%;animation-delay:0.5s;"></span>
          <span class="bubble bubble-warm" style="width:120px;height:120px;left:80%;top:60%;animation-delay:1.5s;"></span>
        </div>
        <div class="max-w-6xl mx-auto px-6 relative z-10">
          <nav class="mb-6 text-xs font-bold text-gray-400 flex items-center gap-2">
            <a href="/" class="hover:text-[var(--main-color)] transition-colors">HOME</a>
            <span class="text-gray-300">&gt;</span>
            <span class="text-[var(--main-color)]">お問い合わせ</span>
          </nav>
          <p class="font-en font-bold text-sm tracking-[0.3em] text-[var(--main-color)] uppercase mb-2">CONTACT</p>
          <h1 class="text-4xl md:text-5xl font-black leading-tight mb-6">
            お<span class="text-[var(--main-color)]">問い合わせ</span>
          </h1>
          <p class="text-[var(--text-light)] max-w-2xl leading-loose text-base">
            ご質問やご相談を承ります。お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      <!-- フォーム -->
      <section class="py-20 bg-white relative overflow-hidden">
        <div class="bubble-field">
          <span class="bubble" style="width:110px;height:110px;left:3%;top:20%;animation-delay:1s;"></span>
          <span class="bubble" style="width:90px;height:90px;left:90%;top:60%;animation-delay:2.2s;"></span>
        </div>
        <div class="max-w-5xl mx-auto px-6">
          <div class="grid lg:grid-cols-3 gap-12">
            <!-- 会社情報 -->
            <div class="lg:col-span-1">
              <div class="bg-[var(--accent-color)] rounded-[40px] p-8 shadow-md sticky top-28">
                <h3 class="font-black text-xl mb-6 flex items-center gap-2">
                  <span class="w-1.5 h-6 bg-[var(--main-color)] rounded-full block"></span>
                  会社情報
                </h3>
                <div class="space-y-6 text-sm">
                  <div>
                    <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">Company</p>
                    <p class="font-black text-base leading-relaxed">株式会社サンプル</p>
                  </div>
                  <div>
                    <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">Address</p>
                    <p class="font-bold leading-relaxed text-gray-600">〒000-0000<br>東京都渋谷区1-1-1</p>
                  </div>
                  <div class="border-t border-gray-200 pt-5 space-y-3">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 bg-[var(--main-color)]/10 rounded-full flex items-center justify-center shrink-0">
                        <svg class="w-4 h-4 text-[var(--main-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                      </div>
                      <div>
                        <p class="text-xs text-gray-400 font-bold">TEL</p>
                        <p class="font-black text-sm">000-0000-0000</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 bg-[var(--main-color)]/10 rounded-full flex items-center justify-center shrink-0">
                        <svg class="w-4 h-4 text-[var(--main-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                      </div>
                      <div>
                        <p class="text-xs text-gray-400 font-bold">Email</p>
                        <p class="font-black text-sm">info@example.com</p>
                      </div>
                    </div>
                  </div>
                  <div class="border-t border-gray-200 pt-5">
                    <div class="flex items-start gap-3">
                      <div class="w-8 h-8 bg-[var(--main-color)]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <svg class="w-4 h-4 text-[var(--main-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      </div>
                      <div>
                        <p class="text-xs text-gray-400 font-bold mb-1">営業時間</p>
                        <p class="font-black text-sm">月〜金 9:00 - 18:00</p>
                        <p class="text-xs text-gray-400 font-bold mt-1">土日祝日はお休みです</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- フォーム -->
            <div class="lg:col-span-2">
              <div class="bg-[#F4F7F9] rounded-[40px] p-8 md:p-12 shadow-md">
                <h3 class="font-black text-xl mb-2 flex items-center gap-2">
                  <span class="w-1.5 h-6 bg-[var(--main-color)] rounded-full block"></span>
                  お問い合わせフォーム
                </h3>
                <p class="text-sm text-[var(--text-light)] mb-8">
                  <span class="text-[var(--main-color)] font-bold">*</span> は必須項目です。
                </p>
                <form class="space-y-6" data-palette-form="contact">
                  <div>
                    <label class="form-label">お名前<span class="required">* 必須</span></label>
                    <input type="text" name="name" class="form-input" placeholder="例：山田 太郎" required>
                  </div>
                  <div>
                    <label class="form-label">会社名<span class="text-xs font-bold text-gray-400 ml-2">（任意）</span></label>
                    <input type="text" name="company" class="form-input" placeholder="例：株式会社○○">
                  </div>
                  <div>
                    <label class="form-label">メールアドレス<span class="required">* 必須</span></label>
                    <input type="email" name="email" class="form-input" placeholder="例：example@company.com" required>
                  </div>
                  <div>
                    <label class="form-label">電話番号<span class="text-xs font-bold text-gray-400 ml-2">（任意）</span></label>
                    <input type="tel" name="tel" class="form-input" placeholder="例：03-0000-0000">
                  </div>
                  <div>
                    <label class="form-label">お問い合わせ種別<span class="required">* 必須</span></label>
                    <select name="category" class="form-input" required>
                      <option value="" disabled selected>お問い合わせの種別を選択してください</option>
                      <option value="service">サービスについて</option>
                      <option value="recruit">採用について</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  <div>
                    <label class="form-label">お問い合わせ内容<span class="required">* 必須</span></label>
                    <textarea name="message" class="form-input" placeholder="ご質問・ご相談の内容をできるだけ詳しくご記入ください。" required rows="6"></textarea>
                  </div>
                  <div class="pt-2">
                    <button type="submit" class="w-full bg-[var(--main-color)] text-white py-5 rounded-full font-black text-lg tracking-widest hover:opacity-80 transition-all shadow-xl flex items-center justify-center gap-3">
                      送信する
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-[var(--accent-color)] pt-14 pb-10 border-t border-gray-200">
      <div class="max-w-6xl mx-auto px-6 text-center text-xs font-bold text-gray-400">
        <p>&copy; Company Name. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  </div>
</div>
`,
};
