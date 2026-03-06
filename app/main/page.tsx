"use client";

import { useEffect, useMemo, useRef, useState } from 'react';

type PostStatus = 'draft' | 'published';

type PostItem = {
  id: string;
  title: string;
  slug: string;
  bodyHtml: string;
  bodyText?: string;
  excerpt: string;
  status: PostStatus;
  postType: 'blog' | 'news';
  publishedAt: string;
  imageUrl?: string;
  imageAlt?: string;
  createdAt: string;
  updatedAt: string;
};

type SessionPayload = {
  authenticated: boolean;
  customer?: {
    id: string;
    customerId?: string;
    name: string;
  };
  posts?: PostItem[];
};

const slugify = (value: string): string => {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\-\s]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const toDatetimeLocal = (iso: string): string => {
  if (!iso) return '';
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 16);
};

const toIsoFromLocal = (value: string): string => {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toISOString();
};

const createDraftPost = (): PostItem => {
  const now = new Date().toISOString();
  return {
    id: `post-${Date.now()}`,
    title: '',
    slug: '',
    bodyHtml: '',
    bodyText: '',
    excerpt: '',
    status: 'published',
    postType: 'news',
    publishedAt: now,
    createdAt: now,
    updatedAt: now,
  };
};

const textToHtml = (value: string): string => {
  const normalized = String(value || '').trim();
  if (!normalized) return '';
  return normalized
    .split(/\n{2,}/)
    .map((block) => `<p>${block.replace(/\n/g, '<br/>')}</p>`)
    .join('\n');
};

const htmlToText = (value: string): string => {
  const raw = String(value || '')
    .replace(/<\s*br\s*\/?>/gi, '\n')
    .replace(/<\s*\/p\s*>/gi, '\n\n')
    .replace(/<[^>]+>/g, '');
  return raw.replace(/\n{3,}/g, '\n\n').trim();
};

const buildAutoDraft = (customerName: string, title: string, excerpt: string) => {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const dateLabel = `${y}/${m}/${d}`;
  const headline = title || `${dateLabel}のお知らせ`;
  const summary = excerpt || `${customerName || '当社'}からの最新情報をお届けします。`;
  const bodyText = [
    `${customerName || '当社'}からのお知らせです。`,
    `${dateLabel}に公開しました。`,
    '概要',
    `・${summary}`,
    '詳細は以下をご確認ください。',
    '今後ともよろしくお願いいたします。',
  ].join('\n\n');

  return {
    title: headline,
    excerpt: summary,
    bodyText,
    bodyHtml: textToHtml(bodyText),
  };
};

const MainScrollStyles = () => (
  <style jsx global>{`
    html, body {
      width: 100%;
      height: 100%;
      overflow: auto !important;
      display: block;
      background-color: #f8fafc;
    }
    body {
      margin: 0;
    }
    html::-webkit-scrollbar, body::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    html::-webkit-scrollbar-track, body::-webkit-scrollbar-track {
      background: #e2e8f0;
      border-radius: 999px;
    }
    html::-webkit-scrollbar-thumb, body::-webkit-scrollbar-thumb {
      background: #94a3b8;
      border-radius: 999px;
      border: 2px solid #e2e8f0;
    }
    html::-webkit-scrollbar-thumb:hover, body::-webkit-scrollbar-thumb:hover {
      background: #64748b;
    }
    html, body {
      scrollbar-color: #94a3b8 #e2e8f0;
      scrollbar-width: thin;
    }
  `}</style>
);

export default function MainPage() {
  const [session, setSession] = useState<SessionPayload | null>(null);
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState('');

  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const loginInFlightRef = useRef(false);
  const [isGeneratingDraft, setIsGeneratingDraft] = useState(false);
  const [showGeneratedToast, setShowGeneratedToast] = useState(false);

  const selectedPost = useMemo(
    () => posts.find((post) => post.id === selectedPostId) || null,
    [posts, selectedPostId],
  );

  const customerId = session?.customer?.customerId || session?.customer?.id || '';

  const loadSession = async (options?: { preserveOnFailure?: boolean }) => {
    setIsLoading(true);
    let sessionData: SessionPayload | undefined;
    try {
      const res = await fetch('/api/main/session', { cache: 'no-store', credentials: 'include' });
      sessionData = (await res.json()) as SessionPayload;
      if (sessionData?.authenticated) {
        setSession(sessionData);
        const loadedPosts = Array.isArray(sessionData.posts) ? sessionData.posts : [];
        setPosts(loadedPosts);
        if (loadedPosts.length > 0) {
          setSelectedPostId(loadedPosts[0].id);
        }
      } else if (!options?.preserveOnFailure && !loginInFlightRef.current) {
        setSession(sessionData);
        setPosts([]);
        setSelectedPostId(null);
      }
    } catch {
      if (!options?.preserveOnFailure && !loginInFlightRef.current) {
        setSession({ authenticated: false });
      }
    } finally {
      setIsLoading(false);
    }
    return sessionData;
  };

  useEffect(() => {
    loadSession();
  }, []);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);
    loginInFlightRef.current = true;
    try {
      const res = await fetch('/api/main/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ id: loginId, password: loginPassword }),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) {
        setLoginError(data?.error || 'ログインに失敗しました。');
        return;
      }
      setSession({
        authenticated: true,
        customer: {
          id: data.paletteId,
          customerId: data.paletteId,
          name: data.accountName || '顧客名未設定',
        },
        posts: [],
      });
      const nextSession = await loadSession({ preserveOnFailure: true });
      if (nextSession && !nextSession.authenticated) {
        setLoginError('投稿の取得に失敗しました。時間をおいて再読み込みしてください。');
      }
    } catch {
      setLoginError('通信エラーが発生しました。');
    } finally {
      loginInFlightRef.current = false;
      setIsLoggingIn(false);
    }
  };

  const handleCreatePost = () => {
    const next = createDraftPost();
    setPosts((prev) => [next, ...prev]);
    setSelectedPostId(next.id);
  };

  const handleDeletePost = (postId: string) => {
    if (!confirm('この投稿を削除しますか？')) return;
    setPosts((prev) => prev.filter((post) => post.id !== postId));
    if (selectedPostId === postId) {
      setSelectedPostId(null);
    }
  };

  const updatePost = (postId: string, patch: Partial<PostItem>) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? { ...post, ...patch, updatedAt: new Date().toISOString() }
          : post,
      ),
    );
  };

  const handleGenerateDraft = async () => {
    if (!selectedPost) return;
    const title = String(selectedPost.title || '').trim();
    const excerpt = String(selectedPost.excerpt || '').trim();
    if (!title || !excerpt) {
      setSaveError('タイトルと概要（抜粋）を入力してください。');
      return;
    }

    setSaveError('');
    setIsGeneratingDraft(true);

    await new Promise((resolve) => setTimeout(resolve, 800));
    const auto = buildAutoDraft(session?.customer?.name || '', title, excerpt);
    updatePost(selectedPost.id, {
      bodyText: auto.bodyText,
      bodyHtml: auto.bodyHtml,
      slug: selectedPost.slug || slugify(title),
    });
    setIsGeneratingDraft(false);
    setShowGeneratedToast(true);
    setTimeout(() => setShowGeneratedToast(false), 1800);
  };

  const handleSave = async () => {
    setSaveError('');

    const normalizedPosts = posts.map((post) => {
      const nextSlug = String(post.slug || '').trim().toLowerCase();
      if (nextSlug) return post;
      const generated = slugify(post.title || '');
      return generated ? { ...post, slug: generated } : post;
    });

    const slugMap = new Map<string, number>();
    for (const post of normalizedPosts) {
      const slug = String(post.slug || '').trim().toLowerCase();
      if (!slug) {
        setSaveError('スラッグが空の投稿があります。');
        return;
      }
      slugMap.set(slug, (slugMap.get(slug) || 0) + 1);
    }
    const duplicates = Array.from(slugMap.entries()).filter(([, count]) => count > 1);
    if (duplicates.length > 0) {
      setSaveError('スラッグが重複しています。');
      return;
    }

    setIsSaving(true);
    try {
      const res = await fetch('/api/main/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ posts: normalizedPosts }),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) {
        setSaveError(data?.error || '保存に失敗しました。');
        return;
      }
      setPosts(Array.isArray(data.posts) ? data.posts : normalizedPosts);
    } catch {
      setSaveError('通信エラーが発生しました。');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <MainScrollStyles />
        <div className="flex flex-col items-center gap-3 text-slate-500">
          <svg className="animate-spin h-6 w-6 text-indigo-600" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <p className="text-xs font-bold tracking-widest">読み込み中...</p>
        </div>
      </main>
    );
  }

  if (!session?.authenticated) {
    return (
      <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 font-sans">
        <MainScrollStyles />
        <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
          <div className="bg-gradient-to-r from-[#0047AB] to-[#4F46E5] h-2 w-full" />
          <div className="p-8 pt-10">
            <div className="mb-8">
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">Palette Studio</h1>
              <p className="text-sm text-slate-500 mt-1">ニュース投稿ログイン</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-slate-700 ml-1">ログインID</label>
                <input
                  value={loginId}
                  onChange={(event) => setLoginId(event.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm transition-all focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none"
                  placeholder="A0001"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-slate-700 ml-1">パスワード</label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(event) => setLoginPassword(event.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm transition-all focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none"
                  placeholder="••••••••"
                />
              </div>
              
              {loginError && (
                <div className="bg-red-50 text-red-600 text-xs p-3 rounded-lg border border-red-100 animate-pulse">
                  {loginError}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-bold shadow-lg shadow-slate-200 transition-all active:scale-[0.98] disabled:opacity-60"
              >
                {isLoggingIn ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    ログイン中...
                  </span>
                ) : 'ログインする'}
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F1F5F9] font-sans">
      <MainScrollStyles />
      {showGeneratedToast && (
        <div className="fixed top-6 right-6 z-50">
          <div className="flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 shadow-lg">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            自動生成が完了しました
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-indigo-600 w-2 h-2 rounded-full" />
              <p className="text-[11px] uppercase tracking-widest text-indigo-600 font-black">コンテンツ管理</p>
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">ニュース投稿管理</h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs bg-white px-2 py-1 rounded border border-slate-200 text-slate-500 font-medium">
                {session.customer?.name || '顧客名未設定'}
              </span>
              <span className="text-xs text-slate-400">ID: {customerId}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <a
              href={`/${customerId}/news`}
              className="px-5 py-2.5 text-[13px] font-bold rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              公開ページを見る
            </a>
            <button
              onClick={handleCreatePost}
              className="px-5 py-2.5 text-[13px] font-bold rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-all flex items-center gap-2 shadow-md shadow-slate-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
              新規作成
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-8 py-2.5 text-[13px] font-bold rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-all disabled:opacity-60 shadow-lg shadow-indigo-100"
            >
              {isSaving ? '保存中...' : '変更を保存'}
            </button>
          </div>
        </header>

        {saveError && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 flex items-center gap-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
            {saveError}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8">
          {/* Sidebar: List */}
          <aside className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden h-fit sticky top-8">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h2 className="text-[13px] font-black text-slate-800 uppercase tracking-wider">記事一覧</h2>
              <span className="bg-white px-2 py-0.5 rounded-full border border-slate-200 text-[11px] text-slate-500 font-bold">{posts.length} 件</span>
            </div>
            <div className="p-3 max-h-[calc(100vh-250px)] overflow-y-auto">
              {posts.length === 0 ? (
                <div className="py-10 text-center">
                  <p className="text-xs text-slate-400">記事が存在しません</p>
                </div>
              ) : (
                <div className="space-y-1.5">
                  {posts.map((post) => (
                    <button
                      key={post.id}
                      onClick={() => setSelectedPostId(post.id)}
                      className={`w-full text-left rounded-2xl px-4 py-3.5 transition-all group ${
                        selectedPostId === post.id
                          ? 'bg-indigo-50 ring-1 ring-indigo-200'
                          : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className={`text-[13px] font-bold truncate ${selectedPostId === post.id ? 'text-indigo-700' : 'text-slate-700'}`}>
                          {post.title || '（無題の記事）'}
                        </p>
                        <span className={`shrink-0 text-[10px] px-1.5 py-0.5 rounded-md font-black uppercase tracking-tighter ${
                          post.status === 'published' 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : 'bg-slate-100 text-slate-500'
                        }`}>
                          {post.status === 'published' ? '公開' : '下書き'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-mono truncate tracking-tight">
                        /{post.slug || 'no-slug'}
                      </p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* Main Content: Editor */}
          <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            {!selectedPost ? (
              <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                </div>
                <h3 className="text-slate-900 font-bold">編集する記事を選択</h3>
                <p className="text-sm text-slate-400 mt-1">左側のリストから記事を選択するか、新規作成してください。</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {/* Editor Header */}
                <div className="p-6 flex items-center justify-between bg-slate-50/30">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-100 rounded-lg">
                      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </div>
                    <h2 className="text-lg font-black text-slate-800">エディタ</h2>
                  </div>
                  <button
                    onClick={() => handleDeletePost(selectedPost.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v2m3 4s5 5.5 5 5-5 5-5 5" /></svg>
                    記事を削除
                  </button>
                </div>

                <div className="p-8 space-y-8">
                  {/* Title & Slug */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-bold text-slate-500 ml-1 italic">タイトル</label>
                      <input
                        value={selectedPost.title}
                        onChange={(event) => {
                          const nextTitle = event.target.value;
                          const nextPatch: Partial<PostItem> = { title: nextTitle };
                          if (!String(selectedPost.slug || '').trim()) {
                            const generated = slugify(nextTitle);
                            if (generated) nextPatch.slug = generated;
                          }
                          updatePost(selectedPost.id, nextPatch);
                        }}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 transition-all outline-none font-bold text-slate-800 placeholder:font-normal"
                        placeholder="記事のタイトルを入力..."
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-bold text-slate-500 ml-1 italic">URLスラッグ</label>
                      <div className="flex gap-2">
                        <input
                          value={selectedPost.slug}
                          onChange={(event) => updatePost(selectedPost.id, { slug: event.target.value })}
                          className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 transition-all outline-none font-mono text-indigo-600"
                          placeholder="news-article-01"
                        />
                        <button
                          onClick={() => updatePost(selectedPost.id, { slug: slugify(selectedPost.title) })}
                          className="px-4 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-[11px] font-black transition-colors"
                        >
                          再生成
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Status & Date */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-bold text-slate-500 ml-1 italic">タイプ</label>
                      <div className="relative">
                        <select
                          value={selectedPost.postType}
                          onChange={(event) => updatePost(selectedPost.id, { postType: event.target.value as PostItem['postType'] })}
                          className="w-full appearance-none px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 transition-all outline-none cursor-pointer font-medium text-slate-700"
                        >
                          <option value="blog">ブログ</option>
                          <option value="news">最新情報</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-bold text-slate-500 ml-1 italic">公開ステータス</label>
                      <div className="relative">
                        <select
                          value={selectedPost.status}
                          onChange={(event) => updatePost(selectedPost.id, { status: event.target.value as PostStatus })}
                          className="w-full appearance-none px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 transition-all outline-none cursor-pointer font-medium text-slate-700"
                        >
                          <option value="draft">📁 下書きとして保存</option>
                          <option value="published">🚀 今すぐ公開する</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-bold text-slate-500 ml-1 italic">公開日時</label>
                      <input
                        type="datetime-local"
                        value={toDatetimeLocal(selectedPost.publishedAt)}
                        onChange={(event) => updatePost(selectedPost.id, { publishedAt: toIsoFromLocal(event.target.value) })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 transition-all outline-none text-slate-700"
                      />
                    </div>
                  </div>

                  {/* Image Info */}
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-6">
                    <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest">メディア</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label className="text-[12px] font-bold text-slate-600 ml-1">カバー画像URL</label>
                        <input
                          value={selectedPost.imageUrl || ''}
                          onChange={(event) => updatePost(selectedPost.id, { imageUrl: event.target.value })}
                          className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:border-indigo-500 outline-none"
                          placeholder="https://images.unsplash.com/..."
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[12px] font-bold text-slate-600 ml-1">画像代替テキスト (Alt)</label>
                        <input
                          value={selectedPost.imageAlt || ''}
                          onChange={(event) => updatePost(selectedPost.id, { imageAlt: event.target.value })}
                          className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:border-indigo-500 outline-none"
                          placeholder="画像の説明を入力"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Excerpt */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between ml-1 gap-3">
                      <label className="text-[12px] font-bold text-slate-500 italic">概要（抜粋）</label>
                      <button
                        onClick={handleGenerateDraft}
                        disabled={isGeneratingDraft}
                        className="px-3 py-1.5 text-[11px] font-black rounded-xl bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors disabled:opacity-60"
                      >
                        {isGeneratingDraft ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-3.5 w-3.5 text-indigo-600" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            生成中...
                          </span>
                        ) : '本文を自動生成'}
                      </button>
                    </div>
                    <textarea
                      value={selectedPost.excerpt}
                      onChange={(event) => updatePost(selectedPost.id, { excerpt: event.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 transition-all outline-none min-h-[100px] leading-relaxed"
                      placeholder="記事の概要を短く入力してください..."
                    />
                  </div>

                  {/* Body */}
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold text-slate-500 ml-1 italic">本文</label>
                    <textarea
                      value={selectedPost.bodyText ?? htmlToText(selectedPost.bodyHtml)}
                      onChange={(event) => {
                        const nextText = event.target.value;
                        updatePost(selectedPost.id, {
                          bodyText: nextText,
                          bodyHtml: textToHtml(nextText),
                        });
                      }}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 transition-all outline-none min-h-[200px] leading-relaxed"
                      placeholder="本文を入力してください..."
                    />
                  </div>

                  {/* Preview */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[12px] font-black text-slate-500 uppercase tracking-widest">プレビュー</h3>
                      <span className="text-[11px] text-slate-400">公開URL: /{customerId}/news/{selectedPost.slug || 'slug'}</span>
                    </div>
                    <article className="border border-slate-200 rounded-2xl p-6 bg-slate-50/40">
                      <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        <span>{selectedPost.postType === 'blog' ? 'ブログ' : '最新情報'}</span>
                        <span>・</span>
                        <span>{toDatetimeLocal(selectedPost.publishedAt).replace('T', ' ') || '公開日時未設定'}</span>
                      </div>
                      <h2 className="text-xl font-black text-slate-900 mt-2">{selectedPost.title || 'タイトル未設定'}</h2>
                      {selectedPost.imageUrl && (
                        <img
                          src={selectedPost.imageUrl}
                          alt={selectedPost.imageAlt || ''}
                          className="w-full h-56 object-cover rounded-xl mt-4"
                        />
                      )}
                      <p className="text-sm text-slate-600 mt-4">{selectedPost.excerpt || '概要が入力されていません。'}</p>
                      <div className="prose prose-slate max-w-none mt-5" dangerouslySetInnerHTML={{ __html: selectedPost.bodyHtml || '' }} />
                    </article>
                  </div>
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                      /{customerId}/news/{selectedPost.slug || '...'}
                    </div>
                    <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">Palette Studio Content Editor v2.0</p>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
