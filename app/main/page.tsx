"use client";

import { useEffect, useMemo, useState } from 'react';

type PostStatus = 'draft' | 'published';

type PostItem = {
  id: string;
  title: string;
  slug: string;
  bodyHtml: string;
  excerpt: string;
  status: PostStatus;
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
    excerpt: '',
    status: 'draft',
    publishedAt: now,
    createdAt: now,
    updatedAt: now,
  };
};

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

  const selectedPost = useMemo(
    () => posts.find((post) => post.id === selectedPostId) || null,
    [posts, selectedPostId],
  );

  const customerId = session?.customer?.customerId || session?.customer?.id || '';

  const loadSession = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/main/session', { cache: 'no-store' });
      const data = (await res.json()) as SessionPayload;
      setSession(data);
      if (data?.authenticated) {
        const loadedPosts = Array.isArray(data.posts) ? data.posts : [];
        setPosts(loadedPosts);
        if (loadedPosts.length > 0) {
          setSelectedPostId(loadedPosts[0].id);
        }
      } else {
        setPosts([]);
        setSelectedPostId(null);
      }
    } catch {
      setSession({ authenticated: false });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadSession();
  }, []);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);
    try {
      const res = await fetch('/api/main/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: loginId, password: loginPassword }),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) {
        setLoginError(data?.error || 'ログインに失敗しました。');
        return;
      }
      await loadSession();
    } catch {
      setLoginError('通信エラーが発生しました。');
    } finally {
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

  const handleSave = async () => {
    setSaveError('');

    const slugMap = new Map<string, number>();
    for (const post of posts) {
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
        body: JSON.stringify({ posts }),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) {
        setSaveError(data?.error || '保存に失敗しました。');
        return;
      }
      setPosts(Array.isArray(data.posts) ? data.posts : posts);
    } catch {
      setSaveError('通信エラーが発生しました。');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <main className="min-h-screen bg-slate-100" />;
  }

  if (!session?.authenticated) {
    return (
      <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
        <div className="w-full max-w-md rounded-2xl bg-white shadow-lg border border-slate-200 p-6">
          <h1 className="text-xl font-black text-slate-900 mb-1">Palette Main</h1>
          <p className="text-xs text-slate-500 mb-5">お客様ログイン</p>
          <form onSubmit={handleLogin} className="space-y-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-500 mb-1">ID</label>
              <input
                value={loginId}
                onChange={(event) => setLoginId(event.target.value)}
                className="w-full p-2.5 border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="A0001"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-500 mb-1">Password</label>
              <input
                type="password"
                value={loginPassword}
                onChange={(event) => setLoginPassword(event.target.value)}
                className="w-full p-2.5 border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="password"
              />
            </div>
            {loginError && <p className="text-xs text-red-600">{loginError}</p>}
            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold disabled:opacity-60"
            >
              {isLoggingIn ? 'ログイン中...' : 'ログイン'}
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="max-w-6xl mx-auto p-6">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold">Palette Main</p>
            <h1 className="text-2xl font-black text-slate-900">ニュース投稿</h1>
            <p className="text-xs text-slate-500">{session.customer?.name || '顧客名未設定'} / {customerId}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={`/${customerId}/news`}
              className="px-3 py-2 text-xs font-bold rounded-lg border border-slate-300 bg-white hover:bg-slate-50"
            >
              公開ページを見る
            </a>
            <button
              onClick={handleCreatePost}
              className="px-3 py-2 text-xs font-bold rounded-lg bg-slate-900 text-white hover:bg-slate-800"
            >
              新規投稿
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-3 py-2 text-xs font-bold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-60"
            >
              {isSaving ? '保存中...' : '保存'}
            </button>
          </div>
        </header>

        {saveError && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-xs text-red-600">
            {saveError}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-4">
          <aside className="bg-white rounded-2xl border border-slate-200 p-4 h-fit">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-black text-slate-800">投稿一覧</h2>
              <span className="text-[10px] text-slate-400 font-bold">{posts.length} 件</span>
            </div>
            <div className="space-y-2">
              {posts.length === 0 && (
                <p className="text-xs text-slate-400">まだ投稿がありません。</p>
              )}
              {posts.map((post) => (
                <button
                  key={post.id}
                  onClick={() => setSelectedPostId(post.id)}
                  className={`w-full text-left rounded-xl border px-3 py-2 transition ${
                    selectedPostId === post.id
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-slate-800 truncate">{post.title || '無題'}</p>
                    <span className={`text-[10px] font-bold ${post.status === 'published' ? 'text-emerald-600' : 'text-slate-400'}`}>
                      {post.status === 'published' ? '公開' : '下書き'}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 truncate">/{customerId}/news/{post.slug || 'slug'}</p>
                </button>
              ))}
            </div>
          </aside>

          <section className="bg-white rounded-2xl border border-slate-200 p-4">
            {!selectedPost && (
              <div className="text-center text-sm text-slate-400 py-12">編集する投稿を選択してください。</div>
            )}
            {selectedPost && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-black text-slate-800">投稿編集</h2>
                  <button
                    onClick={() => handleDeletePost(selectedPost.id)}
                    className="text-[10px] font-bold text-red-500 hover:text-red-600"
                  >
                    削除
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">タイトル</label>
                    <input
                      value={selectedPost.title}
                      onChange={(event) => updatePost(selectedPost.id, { title: event.target.value })}
                      className="w-full p-2.5 border border-slate-300 rounded-lg text-sm"
                      placeholder="記事タイトル"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">スラッグ</label>
                    <div className="flex gap-2">
                      <input
                        value={selectedPost.slug}
                        onChange={(event) => updatePost(selectedPost.id, { slug: event.target.value })}
                        className="flex-1 p-2.5 border border-slate-300 rounded-lg text-sm"
                        placeholder="news-post"
                      />
                      <button
                        onClick={() => updatePost(selectedPost.id, { slug: slugify(selectedPost.title) })}
                        className="px-3 rounded-lg border border-slate-300 text-xs font-bold"
                      >
                        自動生成
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">ステータス</label>
                    <select
                      value={selectedPost.status}
                      onChange={(event) => updatePost(selectedPost.id, { status: event.target.value as PostStatus })}
                      className="w-full p-2.5 border border-slate-300 rounded-lg text-sm"
                    >
                      <option value="draft">下書き</option>
                      <option value="published">公開</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">公開日時</label>
                    <input
                      type="datetime-local"
                      value={toDatetimeLocal(selectedPost.publishedAt)}
                      onChange={(event) => updatePost(selectedPost.id, { publishedAt: toIsoFromLocal(event.target.value) })}
                      className="w-full p-2.5 border border-slate-300 rounded-lg text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">画像URL</label>
                    <input
                      value={selectedPost.imageUrl || ''}
                      onChange={(event) => updatePost(selectedPost.id, { imageUrl: event.target.value })}
                      className="w-full p-2.5 border border-slate-300 rounded-lg text-sm"
                      placeholder="https://..."
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">画像ALT</label>
                    <input
                      value={selectedPost.imageAlt || ''}
                      onChange={(event) => updatePost(selectedPost.id, { imageAlt: event.target.value })}
                      className="w-full p-2.5 border border-slate-300 rounded-lg text-sm"
                      placeholder="画像の説明"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 mb-1">概要（抜粋）</label>
                  <textarea
                    value={selectedPost.excerpt}
                    onChange={(event) => updatePost(selectedPost.id, { excerpt: event.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-lg text-sm min-h-[90px]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 mb-1">本文（HTML）</label>
                  <textarea
                    value={selectedPost.bodyHtml}
                    onChange={(event) => updatePost(selectedPost.id, { bodyHtml: event.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-lg text-sm min-h-[220px] font-mono"
                  />
                </div>

                <div className="text-[10px] text-slate-400">
                  公開URL: /{customerId}/news/{selectedPost.slug || 'slug'}
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
