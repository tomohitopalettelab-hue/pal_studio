"use client";

import { useEffect, useMemo, useRef, useState } from 'react';

type PostStatus = 'draft' | 'published';

type PostItem = {
  id: string;
  title: string;
  slug: string;
  slugAuto?: boolean;
  bodyHtml: string;
  bodyText?: string;
  excerpt: string;
  status: PostStatus;
  postType: 'blog' | 'news';
  tags?: string[];
  publishedAt: string;
  imageUrl?: string;
  imageAlt?: string;
  createdAt: string;
  updatedAt: string;
};

type MediaAsset = {
  id: string;
  paletteId: string;
  fileName: string;
  originalName: string;
  mimeType: string;
  sizeBytes: number;
  url: string;
  createdAt: string;
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
    slugAuto: true,
    bodyHtml: '',
    bodyText: '',
    excerpt: '',
    status: 'published',
    postType: 'news',
    tags: [],
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

const buildSlugFromTypeAndDate = (postType: PostItem['postType'], publishedAt: string) => {
  const baseDate = publishedAt ? new Date(publishedAt) : new Date();
  const safeDate = Number.isNaN(baseDate.getTime()) ? new Date() : baseDate;
  const y = safeDate.getFullYear();
  const m = String(safeDate.getMonth() + 1).padStart(2, '0');
  const d = String(safeDate.getDate()).padStart(2, '0');
  const hh = String(safeDate.getHours()).padStart(2, '0');
  const mm = String(safeDate.getMinutes()).padStart(2, '0');
  return `${postType}-${y}${m}${d}-${hh}${mm}`;
};

const buildAutoDraft = (
  customerName: string,
  title: string,
  excerpt: string,
  postType: PostItem['postType'],
  targetLength: number,
) => {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const dateLabel = `${y}/${m}/${d}`;
  const headline = title || `${dateLabel}のお知らせ`;
  const summary = excerpt || `${customerName || '当社'}からの最新情報をお届けします。`;
  const typeLabel = postType === 'blog' ? 'ブログ' : '最新情報';
  const chunks = [
    `${customerName || '当社'}の${typeLabel}をお知らせします。`,
    `${dateLabel}に公開しました。`,
    '概要',
    `・${summary}`,
    '詳細',
    `${summary}に関する背景やポイントを簡潔にまとめています。`,
    'お問い合わせ',
    'ご不明点がございましたらお気軽にお問い合わせください。',
    '今後ともよろしくお願いいたします。',
  ];

  let bodyText = chunks.join('\n\n');
  const numericLength = Number.isFinite(targetLength) ? targetLength : 0;
  const maxLength = Math.max(200, numericLength || 0);
  while (bodyText.length < maxLength) {
    bodyText = `${bodyText}\n\n${summary}`;
  }

  return {
    title: headline,
    excerpt: summary,
    bodyText,
    bodyHtml: textToHtml(bodyText),
  };
};

const getPostTypeLabel = (postType: PostItem['postType']) => (
  postType === 'blog' ? 'ブログ' : '最新情報'
);

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
  const [mediaAssets, setMediaAssets] = useState<MediaAsset[]>([]);
  const [mediaError, setMediaError] = useState('');
  const [mediaLoading, setMediaLoading] = useState(false);
  const [isUploadingMedia, setIsUploadingMedia] = useState(false);
  const mediaInputRef = useRef<HTMLInputElement>(null);

  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const loginInFlightRef = useRef(false);
  const [isGeneratingDraft, setIsGeneratingDraft] = useState(false);
  const [showGeneratedToast, setShowGeneratedToast] = useState(false);
  const [draftLength, setDraftLength] = useState(400);
  const [tagInput, setTagInput] = useState('');

  const selectedPost = useMemo(
    () => posts.find((post) => post.id === selectedPostId) || null,
    [posts, selectedPostId],
  );

  const customerId = session?.customer?.customerId || session?.customer?.id || '';
  const PALETTE_ID_REGEX = /^[A-Z][0-9]{4}$/;
  const canUseMedia = Boolean(session?.authenticated && PALETTE_ID_REGEX.test(customerId));
  const imageAssets = mediaAssets.filter((asset) => String(asset.mimeType || '').startsWith('image/'));

  const formatBytes = (value: number): string => {
    if (!Number.isFinite(value) || value <= 0) return '0 KB';
    if (value < 1024) return `${value} B`;
    const kb = value / 1024;
    if (kb < 1024) return `${kb.toFixed(1)} KB`;
    const mb = kb / 1024;
    return `${mb.toFixed(1)} MB`;
  };

  const loadSession = async (options?: { preserveOnFailure?: boolean }) => {
    setIsLoading(true);
    let sessionData: SessionPayload | undefined;
    try {
      const res = await fetch('/api/main/session', { cache: 'no-store', credentials: 'include' });
      sessionData = (await res.json()) as SessionPayload;
      if (sessionData?.authenticated) {
        setSession(sessionData);
        const loadedPosts = Array.isArray(sessionData.posts) ? sessionData.posts : [];
        const normalizedPosts: PostItem[] = loadedPosts.map((post) => ({
          ...post,
          postType: post.postType === 'blog' ? 'blog' : 'news',
          tags: Array.isArray(post.tags) ? post.tags : [],
        }));
        setPosts(normalizedPosts);
        if (normalizedPosts.length > 0) {
          setSelectedPostId(normalizedPosts[0].id);
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

  const loadMediaAssets = async (paletteId: string) => {
    if (!paletteId) return;
    setMediaLoading(true);
    setMediaError('');
    try {
      const response = await fetch(`/api/media?paletteId=${encodeURIComponent(paletteId)}`);
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data?.success === false) {
        throw new Error(data?.error || `メディア取得に失敗しました (${response.status})`);
      }
      const assets = Array.isArray(data?.assets) ? data.assets : [];
      setMediaAssets(assets);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'メディア取得に失敗しました。';
      setMediaError(message);
      setMediaAssets([]);
    } finally {
      setMediaLoading(false);
    }
  };

  const handleMediaUpload = async (file: File, paletteId: string) => {
    try {
      const formData = new FormData();
      formData.set('paletteId', paletteId);
      formData.set('file', file, file.name || 'upload');
      const response = await fetch('/api/media/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data?.success === false) {
        throw new Error(data?.error || `アップロードに失敗しました (${response.status})`);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'アップロードに失敗しました。';
      setMediaError(message);
      throw error;
    }
  };

  const handleMediaFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (!files.length || !canUseMedia) return;
    setIsUploadingMedia(true);
    setMediaError('');
    try {
      for (const file of files) {
        await handleMediaUpload(file, customerId);
      }
      await loadMediaAssets(customerId);
    } finally {
      setIsUploadingMedia(false);
      event.target.value = '';
    }
  };

  const handleMediaSelect = (asset: MediaAsset) => {
    if (!selectedPost) return;
    const url = String(asset.url || '').trim();
    if (!url) return;
    updatePost(selectedPost.id, {
      imageUrl: url,
      imageAlt: selectedPost.imageAlt || asset.originalName || '',
    });
  };

  useEffect(() => {
    loadSession();
  }, []);

  useEffect(() => {
    if (!canUseMedia) {
      setMediaAssets([]);
      setMediaError('');
      return;
    }
    void loadMediaAssets(customerId);
  }, [canUseMedia, customerId]);

  useEffect(() => {
    if (!selectedPost) return;
    const slugValue = String(selectedPost.slug || '').trim();
    const shouldAuto = !slugValue || slugValue.length < 3 || selectedPost.slugAuto;
    if (!shouldAuto) return;
    const nextSlug = buildSlugFromTypeAndDate(selectedPost.postType, selectedPost.publishedAt);
    if (nextSlug) {
      updatePost(selectedPost.id, { slug: nextSlug, slugAuto: true });
    }
  }, [selectedPostId, selectedPost?.postType, selectedPost?.publishedAt]);

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

  const addTagToPost = (postId: string, rawTag: string) => {
    const tag = String(rawTag || '').trim();
    if (!tag) return;
    updatePost(postId, {
      tags: Array.from(new Set([...(selectedPost?.tags || []), tag])),
    });
  };

  const removeTagFromPost = (postId: string, tag: string) => {
    updatePost(postId, {
      tags: (selectedPost?.tags || []).filter((t) => t !== tag),
    });
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

    try {
      const res = await fetch('/api/main/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          title,
          excerpt,
          postType: selectedPost.postType,
          length: draftLength,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) {
        const fallback = buildAutoDraft(
          session?.customer?.name || '',
          title,
          excerpt,
          selectedPost.postType,
          draftLength,
        );
        updatePost(selectedPost.id, {
          bodyText: fallback.bodyText,
          bodyHtml: fallback.bodyHtml,
          slug: selectedPost.slug || buildSlugFromTypeAndDate(selectedPost.postType, selectedPost.publishedAt),
        });
        setSaveError(data?.error || '自動生成に失敗しました。');
      } else {
        const generatedText = String(data.text || '').trim();
        updatePost(selectedPost.id, {
          bodyText: generatedText,
          bodyHtml: textToHtml(generatedText),
          slug: selectedPost.slug || buildSlugFromTypeAndDate(selectedPost.postType, selectedPost.publishedAt),
        });
        setShowGeneratedToast(true);
        setTimeout(() => setShowGeneratedToast(false), 1800);
      }
    } catch {
      const fallback = buildAutoDraft(
        session?.customer?.name || '',
        title,
        excerpt,
        selectedPost.postType,
        draftLength,
      );
      updatePost(selectedPost.id, {
        bodyText: fallback.bodyText,
        bodyHtml: fallback.bodyHtml,
        slug: selectedPost.slug || buildSlugFromTypeAndDate(selectedPost.postType, selectedPost.publishedAt),
      });
      setSaveError('自動生成に失敗しました。');
    } finally {
      setIsGeneratingDraft(false);
    }
  };

  const handleSave = async () => {
    setSaveError('');
    if (!session?.authenticated) {
      const refreshed = await loadSession();
      if (!refreshed?.authenticated) {
        setSaveError('ログインが切れました。再ログインしてください。');
        return;
      }
    }

    const normalizedPosts = posts.map((post) => {
      const nextSlug = String(post.slug || '').trim().toLowerCase();
      if (nextSlug) return post;
      const generated = buildSlugFromTypeAndDate(post.postType, post.publishedAt);
      return generated ? { ...post, slug: generated } : post;
    });

    const slugMap = new Map<string, number>();
    for (const post of normalizedPosts) {
      const slug = String(post.slug || '').trim().toLowerCase();
      if (!slug) {
        setSaveError('スラッグが空の投稿があります。');
        return;
      }
      const key = `${post.postType}:${slug}`;
      slugMap.set(key, (slugMap.get(key) || 0) + 1);
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
      if (res.status === 401) {
        setSaveError('ログインが切れました。再ログインしてください。');
        return;
      }
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
      <main className="min-h-screen bg-gradient-to-br from-white to-[#E6F7F9] flex items-center justify-center">
        <MainScrollStyles />
        <div className="flex flex-col items-center gap-4 text-[#00B7CE]">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-xl bg-[#00B7CE]/20 animate-pulse" />
            <svg className="animate-spin h-8 w-8 relative" viewBox="0 0 24 24">
              <circle className="opacity-10" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
              <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
          <p className="text-[10px] font-black tracking-[0.3em] uppercase opacity-60">読み込み中</p>
        </div>
      </main>
    );
  }

  if (!session?.authenticated) {
    return (
      <main className="min-h-screen bg-gradient-to-tr from-[#F0FDFF] via-white to-[#F0FDFF] flex items-center justify-center p-6 font-sans text-slate-900">
        <MainScrollStyles />
        <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,183,206,0.1)] border border-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#00B7CE]" />
          <div className="p-10">
            <div className="mb-10 text-center">
              <h1 className="text-3xl font-black tracking-tighter text-slate-900 mb-2">Palette Studio</h1>
              <div className="inline-block px-3 py-1 bg-[#00B7CE]/10 rounded-full">
                <p className="text-[11px] font-bold text-[#00B7CE] uppercase tracking-wider">お客様ログイン</p>
              </div>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">ログインID</label>
                <input
                  value={loginId}
                  onChange={(event) => setLoginId(event.target.value)}
                  className="w-full px-5 py-4 bg-slate-50/50 border border-slate-100 rounded-2xl text-sm transition-all focus:bg-white focus:ring-4 focus:ring-[#00B7CE]/10 focus:border-[#00B7CE] outline-none"
                  placeholder="A0001"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">パスワード</label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(event) => setLoginPassword(event.target.value)}
                  className="w-full px-5 py-4 bg-slate-50/50 border border-slate-100 rounded-2xl text-sm transition-all focus:bg-white focus:ring-4 focus:ring-[#00B7CE]/10 focus:border-[#00B7CE] outline-none"
                  placeholder="••••••••"
                />
              </div>
              
              {loginError && (
                <div className="bg-red-50/80 backdrop-blur text-red-500 text-[11px] font-bold p-4 rounded-2xl border border-red-100 text-center">
                  {loginError}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full py-4 bg-[#00B7CE] hover:bg-[#00A5BB] text-white rounded-2xl text-sm font-black shadow-[0_12px_24px_-6px_rgba(0,183,206,0.4)] transition-all active:scale-[0.98] disabled:opacity-60"
              >
                {isLoggingIn ? '認証中...' : 'ログインする'}
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FDFF] font-sans text-slate-900 selection:bg-[#00B7CE]/20">
      <MainScrollStyles />
      {showGeneratedToast && (
        <div className="fixed top-8 right-8 z-[100] animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-[#00B7CE]/20 px-5 py-4 text-sm font-bold text-slate-800 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)]">
            <span className="flex h-2 w-2 rounded-full bg-[#00B7CE] animate-ping" />
            自動生成が完了しました
          </div>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto p-4 md:p-10">
        {/* Header */}
        <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-1 bg-[#00B7CE] rounded-full" />
              <p className="text-[11px] uppercase tracking-[0.4em] text-[#00B7CE] font-black">Pal Studio</p>
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">投稿管理</h1>
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[11px] bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm text-slate-500 font-bold">
                {session.customer?.name || '顧客名未設定'}
              </span>
              <span className="text-[11px] text-slate-300 font-mono">ID: {customerId}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a
              href={`/${customerId}/news`}
              className="px-6 py-3 text-sm font-bold rounded-2xl border border-slate-100 bg-white/50 text-slate-600 hover:bg-white hover:shadow-md transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              公開ページを見る
            </a>
            <button
              onClick={handleCreatePost}
              className="px-6 py-3 text-sm font-bold rounded-2xl bg-white text-slate-800 border border-slate-100 hover:border-[#00B7CE]/30 shadow-sm transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-[#00B7CE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
              新規作成
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-10 py-3 text-sm font-black rounded-2xl bg-[#00B7CE] text-white hover:bg-[#00A5BB] shadow-[0_10px_20px_-5px_rgba(0,183,206,0.3)] transition-all disabled:opacity-60"
            >
              {isSaving ? '保存中...' : '変更を保存'}
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-10">
          {/* List Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white/60 backdrop-blur-md rounded-[2rem] border border-white shadow-[0_8px_32px_rgba(0,0,0,0.02)] overflow-hidden h-fit">
              <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">記事一覧</h2>
                <span className="text-[10px] font-black bg-[#00B7CE]/10 text-[#00B7CE] px-2 py-0.5 rounded-full">{posts.length}</span>
              </div>
              <div className="p-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
                {posts.length === 0 ? (
                  <p className="py-10 text-center text-xs text-slate-300">記事がありません</p>
                ) : (
                  <div className="space-y-2">
                    {posts.map((post) => (
                      <button
                        key={post.id}
                        onClick={() => setSelectedPostId(post.id)}
                        className={`w-full text-left rounded-[1.25rem] px-5 py-4 transition-all relative overflow-hidden group ${
                          selectedPostId === post.id
                            ? 'bg-white shadow-[0_10px_25px_-5px_rgba(0,183,206,0.15)] ring-1 ring-[#00B7CE]/20'
                            : 'hover:bg-white/50'
                        }`}
                      >
                        {selectedPostId === post.id && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00B7CE]" />}
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <p className={`text-[13px] font-bold truncate ${selectedPostId === post.id ? 'text-slate-900' : 'text-slate-600'}`}>
                            {post.title || '無題'}
                          </p>
                          <span className={`shrink-0 text-[9px] px-1.5 py-0.5 rounded-md font-black uppercase tracking-tighter ${
                            post.status === 'published' ? 'text-[#00B7CE] bg-[#00B7CE]/10' : 'text-slate-300 bg-slate-100'
                          }`}>
                            {post.status === 'published' ? '公開' : '下書き'}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-300 font-mono truncate tracking-tight uppercase">
                          {getPostTypeLabel(post.postType)} / {post.slug || '未設定'}
                        </p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Editor Main */}
          <section className="bg-white/80 backdrop-blur-md rounded-[2.5rem] border border-white shadow-[0_8px_40px_rgba(0,0,0,0.03)] overflow-hidden">
            {!selectedPost ? (
              <div className="flex flex-col items-center justify-center py-40 px-10 text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-white to-slate-50 rounded-[2rem] border border-white shadow-sm flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#00B7CE]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                </div>
                <div>
                  <h3 className="text-slate-900 font-black">記事が選択されていません</h3>
                  <p className="text-sm text-slate-400 mt-1">左のリストから編集したいコンテンツを選んでください。</p>
                </div>
              </div>
            ) : (
              <div className="divide-y divide-slate-50">
                <div className="p-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#00B7CE]/10 rounded-2xl flex items-center justify-center text-[#00B7CE]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-slate-900 tracking-tight">コンテンツ編集</h2>
                      <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">
                        {getPostTypeLabel(selectedPost.postType)} 編集
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeletePost(selectedPost.id)}
                    className="p-3 text-red-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v2m3 4s5 5.5 5 5-5 5-5 5" /></svg>
                  </button>
                </div>

                <div className="p-8 lg:p-12 space-y-12">
                  {/* Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">タイトル</label>
                      <input
                        value={selectedPost.title}
                        onChange={(event) => updatePost(selectedPost.id, { title: event.target.value })}
                        className="w-full px-6 py-4 bg-slate-50/50 border border-slate-100 rounded-[1.25rem] text-[15px] font-bold text-slate-800 focus:bg-white focus:ring-4 focus:ring-[#00B7CE]/5 focus:border-[#00B7CE] transition-all outline-none"
                        placeholder="タイトルを入力..."
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">URLスラッグ</label>
                      <div className="flex gap-2">
                        <input
                          value={selectedPost.slug}
                          onChange={(event) => updatePost(selectedPost.id, { slug: event.target.value, slugAuto: false })}
                          className="flex-1 px-6 py-4 bg-slate-50/50 border border-slate-100 rounded-[1.25rem] text-sm font-mono text-[#00B7CE] focus:bg-white focus:ring-4 focus:ring-[#00B7CE]/5 outline-none"
                        />
                        <button
                          onClick={() => updatePost(selectedPost.id, { slug: buildSlugFromTypeAndDate(selectedPost.postType, selectedPost.publishedAt), slugAuto: true })}
                          className="px-5 bg-white border border-slate-100 hover:border-[#00B7CE]/30 text-slate-400 hover:text-[#00B7CE] rounded-[1.25rem] text-[10px] font-black transition-all uppercase"
                        >
                          再生成
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Settings */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-3">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">タイプ</label>
                      <select
                        value={selectedPost.postType}
                        onChange={(event) => updatePost(selectedPost.id, { postType: event.target.value as PostItem['postType'], slugAuto: true })}
                        className="w-full appearance-none px-6 py-4 bg-slate-50/50 border border-slate-100 rounded-[1.25rem] text-sm font-bold text-slate-700 outline-none cursor-pointer focus:bg-white focus:border-[#00B7CE] transition-all"
                      >
                        <option value="news">最新情報</option>
                        <option value="blog">ブログ</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">公開状態</label>
                      <select
                        value={selectedPost.status}
                        onChange={(event) => updatePost(selectedPost.id, { status: event.target.value as PostStatus })}
                        className="w-full appearance-none px-6 py-4 bg-slate-50/50 border border-slate-100 rounded-[1.25rem] text-sm font-bold text-slate-700 outline-none cursor-pointer focus:bg-white focus:border-[#00B7CE] transition-all"
                      >
                        <option value="draft">📁 下書き</option>
                        <option value="published">🚀 公開</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">公開日時</label>
                      <input
                        type="datetime-local"
                        value={toDatetimeLocal(selectedPost.publishedAt)}
                        onChange={(event) => updatePost(selectedPost.id, { publishedAt: toIsoFromLocal(event.target.value) })}
                        className="w-full px-6 py-4 bg-slate-50/50 border border-slate-100 rounded-[1.25rem] text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-[#00B7CE] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">タグ</label>
                    <div className="flex flex-wrap gap-2">
                      {(selectedPost.tags || []).map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => removeTagFromPost(selectedPost.id, tag)}
                          className="px-3 py-1 rounded-full bg-[#00B7CE]/10 text-[#00B7CE] text-[10px] font-bold uppercase tracking-widest"
                          title="クリックで削除"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <input
                        value={tagInput}
                        onChange={(event) => setTagInput(event.target.value)}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter') {
                            event.preventDefault();
                            addTagToPost(selectedPost.id, tagInput);
                            setTagInput('');
                          }
                        }}
                        className="flex-1 px-4 py-3 bg-slate-50/50 border border-slate-100 rounded-[1.25rem] text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-[#00B7CE] transition-all"
                        placeholder="タグを追加"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          addTagToPost(selectedPost.id, tagInput);
                          setTagInput('');
                        }}
                        className="px-5 py-3 bg-white border border-slate-100 rounded-[1.25rem] text-[10px] font-black text-[#00B7CE] hover:border-[#00B7CE]/40 transition-all uppercase"
                      >
                        追加
                      </button>
                    </div>
                  </div>

                  {/* Media Section */}
                  <div className="p-8 bg-gradient-to-br from-white to-[#F0FDFF] rounded-[2rem] border border-white shadow-inner space-y-6">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-4 bg-[#00B7CE] rounded-full" />
                      <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-widest">メディア</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-slate-400 ml-1">カバー画像URL</label>
                        <input
                          value={selectedPost.imageUrl || ''}
                          onChange={(event) => updatePost(selectedPost.id, { imageUrl: event.target.value })}
                          className="w-full px-5 py-3 bg-white border border-slate-100 rounded-xl text-sm outline-none focus:border-[#00B7CE]"
                          placeholder="https://..."
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-slate-400 ml-1">画像Altテキスト</label>
                        <input
                          value={selectedPost.imageAlt || ''}
                          onChange={(event) => updatePost(selectedPost.id, { imageAlt: event.target.value })}
                          className="w-full px-5 py-3 bg-white border border-slate-100 rounded-xl text-sm outline-none focus:border-[#00B7CE]"
                          placeholder="画像の説明"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">メディア一覧</div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => loadMediaAssets(customerId)}
                            disabled={!canUseMedia || mediaLoading}
                            className="px-3 py-1.5 rounded-full text-[10px] font-black border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 disabled:opacity-50"
                          >
                            更新
                          </button>
                          <button
                            onClick={() => mediaInputRef.current?.click()}
                            disabled={!canUseMedia || isUploadingMedia}
                            className="px-3.5 py-1.5 rounded-full text-[10px] font-black text-white bg-[#00B7CE] hover:bg-[#009FB3] disabled:opacity-50"
                          >
                            {isUploadingMedia ? 'アップロード中' : 'アップロード'}
                          </button>
                          <input
                            ref={mediaInputRef}
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleMediaFileChange}
                            className="hidden"
                          />
                        </div>
                      </div>

                      {!canUseMedia && (
                        <div className="text-[11px] text-slate-400">顧客IDの認証後に利用できます。</div>
                      )}

                      {canUseMedia && mediaLoading && (
                        <div className="text-[11px] text-slate-400">読み込み中...</div>
                      )}

                      {canUseMedia && !mediaLoading && mediaError && (
                        <div className="text-[11px] text-red-500">{mediaError}</div>
                      )}

                      {canUseMedia && !mediaLoading && !mediaError && imageAssets.length === 0 && (
                        <div className="text-[11px] text-slate-400">まだメディアがありません。</div>
                      )}

                      {canUseMedia && !mediaLoading && imageAssets.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {imageAssets.map((asset) => (
                            <button
                              key={asset.id}
                              type="button"
                              onClick={() => handleMediaSelect(asset)}
                              className="group text-left rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition overflow-hidden"
                            >
                              <div className="aspect-[4/3] bg-slate-100">
                                <img
                                  src={asset.url}
                                  alt={asset.originalName || 'media'}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="px-3 py-2">
                                <p className="text-[10px] font-bold text-slate-600 truncate">{asset.originalName || asset.fileName}</p>
                                <p className="text-[9px] text-slate-400">{formatBytes(Number(asset.sizeBytes || 0))}</p>
                                <p className="text-[9px] text-[#00B7CE] font-bold mt-1">この画像を設定</p>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                      <div className="w-1.5 h-4 bg-slate-200 rounded-full" />
                      概要
                    </div>
                    <textarea
                      value={selectedPost.excerpt || ''}
                      onChange={(event) => updatePost(selectedPost.id, { excerpt: event.target.value })}
                      className="w-full px-6 py-5 bg-white border border-slate-100 rounded-[1.5rem] text-[14px] leading-[1.7] text-slate-700 focus:ring-4 focus:ring-[#00B7CE]/5 focus:border-[#00B7CE] transition-all outline-none min-h-[140px]"
                      placeholder="本文の要点や見出し用の短い説明を入力してください..."
                    />
                  </div>

                  {/* Body Content */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                        <div className="w-1.5 h-4 bg-slate-200 rounded-full" />
                        本文
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                          <span className="text-[10px] font-black text-slate-300 uppercase">文字数</span>
                          <input
                            type="number"
                            value={draftLength}
                            onChange={(event) => setDraftLength(Number(event.target.value))}
                            className="w-16 bg-transparent text-[11px] font-bold text-[#00B7CE] outline-none"
                          />
                        </div>
                        <button
                          onClick={handleGenerateDraft}
                          disabled={isGeneratingDraft}
                          className="px-5 py-2 text-[11px] font-black rounded-full bg-white text-[#00B7CE] border border-[#00B7CE]/20 hover:bg-[#00B7CE] hover:text-white transition-all disabled:opacity-30 shadow-sm"
                        >
                          {isGeneratingDraft ? '生成中...' : '本文を自動生成'}
                        </button>
                      </div>
                    </div>
                    <textarea
                      value={selectedPost.bodyText ?? htmlToText(selectedPost.bodyHtml)}
                      onChange={(event) => {
                        const nextText = event.target.value;
                        updatePost(selectedPost.id, { bodyText: nextText, bodyHtml: textToHtml(nextText) });
                      }}
                      className="w-full px-8 py-8 bg-white border border-slate-100 rounded-[2rem] text-[15px] leading-[1.8] text-slate-700 focus:ring-4 focus:ring-[#00B7CE]/5 focus:border-[#00B7CE] transition-all outline-none min-h-[400px]"
                      placeholder="本文を入力してください..."
                    />
                  </div>

                  {/* Preview UI */}
                  <div className="space-y-6">
                    <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">プレビュー</h3>
                    <article className="max-w-2xl mx-auto border border-white bg-white/40 rounded-[2.5rem] p-10 shadow-sm">
                      <div className="flex items-center gap-3 text-[10px] font-black text-[#00B7CE]/50 uppercase tracking-[0.2em] mb-4">
                        <span>{getPostTypeLabel(selectedPost.postType)}</span>
                        <div className="w-1 h-1 rounded-full bg-slate-200" />
                        <span>{toDatetimeLocal(selectedPost.publishedAt).split('T')[0]}</span>
                      </div>
                      <h2 className="text-3xl font-black text-slate-900 leading-tight mb-6">{selectedPost.title || 'タイトル未入力'}</h2>
                      {selectedPost.imageUrl && (
                        <img src={selectedPost.imageUrl} className="w-full h-64 object-cover rounded-[1.5rem] mb-8 shadow-lg shadow-[#00B7CE]/5" />
                      )}
                      <div className="prose prose-slate prose-sm max-w-none opacity-80" dangerouslySetInnerHTML={{ __html: selectedPost.bodyHtml || '' }} />
                    </article>
                  </div>

                  {/* Footer */}
                  <div className="pt-10 border-t border-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-[10px] text-slate-300 font-bold uppercase tracking-widest">
                      <svg className="w-4 h-4 text-[#00B7CE] opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                      {customerId} / {selectedPost.slug || '未設定'}
                    </div>
                    <p className="text-[9px] text-slate-200 font-black uppercase tracking-[0.3em]">Palette Studio 編集画面</p>
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
