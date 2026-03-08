"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Layout, Check, RotateCcw, Monitor, Smartphone, Search, Eye, EyeOff, Plus, Sparkles, Loader2, Grid, Image as ImageIcon, Upload, Wand2, X, Camera, Copy } from 'lucide-react';
import html2canvas from 'html2canvas';
import {
  templates,
  Template,
  TEMPLATE_DEFAULT_ID,
  getTemplateById,
  hasTemplateId,
  hasTemplateVariantId,
  getTemplateVariantById,
  templateVariants,
} from './templates';

type Customer = {
  id: string;
  customer_id?: string;
  loginId?: string;
  loginPassword?: string;
  name: string;
  status: 'hearing' | 'reviewing' | 'completed';
  answers: { q: string, a: string }[];
  htmlCode: string;
  pages?: { slug: string; title: string; htmlCode: string; templateId?: string; templateVariantId?: string; order?: number }[];
  updatedAt: string;
  selectedTemplateId?: string;
  publishPathTemplate?: string;
  description?: string;
  isTemplate?: boolean;
  draftGenerated?: boolean;
};

type PalDbAccount = {
  id: string;
  paletteId: string;
  name: string;
  status: string;
  isStandard?: boolean;
  updatedAt?: string;
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

// AIのレスポンスからHTMLとコメントを分離するヘルパー関数
const extractHtmlAndComment = (text: string) => {
  const codeBlockRegex = /```html([\s\S]*?)```/;
  const match = text.match(codeBlockRegex);
  
  if (match) {
    return {
      html: match[1].trim(),
      comment: text.replace(match[0], "").trim()
    };
  }
  
  // コードブロックがない場合、HTMLタグで簡易判定
  const htmlTagRegex = /<html[\s\S]*<\/html>/i;
  const htmlMatch = text.match(htmlTagRegex);
  if (htmlMatch) {
    return {
      html: htmlMatch[0],
      comment: text.replace(htmlMatch[0], "").trim()
    };
  }

  return { html: text, comment: "" };
};

export default function PaletteLab() {
  const DEFAULT_PUBLISH_PATH_TEMPLATE = '/{id}/pages';


  const [viewMode, setViewMode] = useState<'pc' | 'mobile'>('pc');
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [labMode, setLabMode] = useState<'work' | 'templates'>('work');
  const [aiInstruction, setAiInstruction] = useState("");
  const [isApplying, setIsApplying] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);
  
  // 画像編集用ステート
  const [editingImage, setEditingImage] = useState<{ pid: string, src: string, alt: string } | null>(null);
  const [imageSearchQuery, setImageSearchQuery] = useState("");
  const [searchedImages, setSearchedImages] = useState<any[]>([]);
  const [isSearchingImage, setIsSearchingImage] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [imageTab, setImageTab] = useState<'upload' | 'search' | 'generate' | 'media'>('search');
  const [generatedImageUrl, setGeneratedImageUrl] = useState("");
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedImageError, setGeneratedImageError] = useState("");
  const [showHearingChat, setShowHearingChat] = useState(false);
  const [mediaAssets, setMediaAssets] = useState<MediaAsset[]>([]);
  const [mediaError, setMediaError] = useState('');
  const [mediaLoading, setMediaLoading] = useState(false);
  const [isUploadingMedia, setIsUploadingMedia] = useState(false);
  const [editingText, setEditingText] = useState<{ index: number; tag: string; text: string } | null>(null);
  const [textDraft, setTextDraft] = useState("");
  const [draggingPageSlug, setDraggingPageSlug] = useState<string | null>(null);
  const [dragOverPageSlug, setDragOverPageSlug] = useState<string | null>(null);
  const [palDbAccounts, setPalDbAccounts] = useState<PalDbAccount[]>([]);
  const mediaInputRef = useRef<HTMLInputElement>(null);

  const TEXT_EDIT_SELECTOR = 'h1,h2,h3,h4,h5,h6,p,span,a,li,button,strong,em,small,label,td,th,blockquote';
  const STANDARD_SECTION_KEYS = ['news', 'blog'] as const;
  
  const [activeSections, setActiveSections] = useState<{ [key: string]: boolean }>({
    "top": true,
    "concept": true,
    "features": true,
    "service": true,
    "works": true,
    "company": true,
    "news": true,
    "blog": true
  });

  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);
  const [originalCustomer, setOriginalCustomer] = useState<Customer | null>(null); // server copy for dirty check
  const [isDirty, setIsDirty] = useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(TEMPLATE_DEFAULT_ID);
  const [selectedSitePageSlug, setSelectedSitePageSlug] = useState<string>('top');
  const [selectedNewPageSlug, setSelectedNewPageSlug] = useState<string>('about');


  const PALETTE_ID_PATTERN = /^[A-Z][0-9]{4}$/i;

  const normalizeAnswerValue = (value: string): string => {
    const raw = String(value || '').trim();
    if (!raw) return '';
    const arrow = raw.match(/(?:->|→)\s*(.+)$/);
    const candidate = (arrow?.[1] || raw).trim();
    return candidate.replace(/^\d+\.\s*/, '').trim();
  };

  const deriveNameFromAnswers = (answers?: { q: string; a: string }[]): string => {
    const list = Array.isArray(answers) ? answers : [];
    const companyQ = list.find((item) => /(屋号|会社名|法人名|ブランド名|サービス名)/.test(String(item?.q || '')));
    if (companyQ) {
      const val = normalizeAnswerValue(companyQ.a || '');
      if (val && !PALETTE_ID_PATTERN.test(val)) return val;
    }
    const fallback = list
      .map((item) => normalizeAnswerValue(item?.a || ''))
      .find((value) => value && !PALETTE_ID_PATTERN.test(value) && value.length <= 64);
    return fallback || '';
  };

  const resolveCustomerDisplayName = (customer?: Customer | null): string => {
    if (!customer) return '名称未設定';
    const raw = String(customer.name || '').trim();
    if (raw && !PALETTE_ID_PATTERN.test(raw)) return raw;
    const fromAnswers = deriveNameFromAnswers(customer.answers);
    if (fromAnswers) return fromAnswers;
    return raw && !PALETTE_ID_PATTERN.test(raw)
      ? raw
      : '名称未設定';
  };

  const toDateLabel = (raw?: string | null): string => {
    if (!raw) return '未設定';
    const date = new Date(raw);
    if (Number.isNaN(date.getTime())) return String(raw);
    return date.toLocaleDateString('ja-JP');
  };

  const formatBytes = (value: number): string => {
    if (!Number.isFinite(value) || value <= 0) return '0 KB';
    if (value < 1024) return `${value} B`;
    const kb = value / 1024;
    if (kb < 1024) return `${kb.toFixed(1)} KB`;
    const mb = kb / 1024;
    return `${mb.toFixed(1)} MB`;
  };

  const resolvePaletteId = (customer?: Customer | null): string => {
    return String(customer?.customer_id || customer?.id || '').trim().toUpperCase();
  };

  const refreshCustomers = async () => {
    try {
      const [response, accountResponse] = await Promise.all([
        fetch('/api/get-customers'),
        fetch('/api/pal-db/accounts'),
      ]);

      const dbData = await response.json();
      const dbCustomers = Array.isArray(dbData) ? dbData : [];
      const accountData = await accountResponse.json().catch(() => ({}));
      const accounts: PalDbAccount[] = Array.isArray(accountData.accounts) ? accountData.accounts : [];
      setPalDbAccounts(accounts);
      const accountMap = new Map(accounts.map((item) => [item.paletteId, item]));
      const accountPaletteIds = new Set(accounts.map((item) => item.paletteId));

      const mergedCustomers = dbCustomers
        .map((customer: Customer) => {
        const paletteId = customer.customer_id || customer.id;
        const account = accountMap.get(paletteId);
        if (!account) {
          return {
            ...customer,
            name: resolveCustomerDisplayName(customer),
          };
        }
        const accountName = String(account.name || '').trim();
        return {
          ...customer,
          customer_id: paletteId,
          name: accountName && !PALETTE_ID_PATTERN.test(accountName)
            ? accountName
            : resolveCustomerDisplayName(customer),
        };
      })
        .filter((customer: Customer) => {
          const paletteId = customer.customer_id || customer.id;
          return accountPaletteIds.has(String(paletteId || ''));
        });

      const missingCustomers: Customer[] = accounts
        .filter((account) => !mergedCustomers.some((customer) => (customer.customer_id || customer.id) === account.paletteId))
        .map((account) => ({
          id: `acc-${account.id}`,
          customer_id: account.paletteId,
          name: (String(account.name || '').trim() && !PALETTE_ID_PATTERN.test(String(account.name || '').trim()))
            ? String(account.name).trim()
            : '名称未設定',
          status: 'hearing',
          answers: [],
          htmlCode: '',
          updatedAt: account.updatedAt || new Date().toISOString(),
          description: '',
        }));

      const mergedAndMissing = [...mergedCustomers, ...missingCustomers];
      
      // テンプレートデータをCustomer型に変換
      const templateData: Customer[] = templates.map(t => ({
        id: `tpl-${t.id}`,
        name: t.name,
        status: 'completed',
        answers: [],
        htmlCode: t.html,
        updatedAt: new Date().toISOString(),
        description: t.description,
        isTemplate: true
      }));

      const combinedData = [...templateData, ...mergedAndMissing];
      setCustomers(combinedData);
      
      if (combinedData.length > 0 && !selectedCustomerId) {
        // 実際の顧客がいればそれを優先的に選択、いなければ最初のテンプレートを選択
        setSelectedCustomerId(mergedAndMissing.length > 0 ? mergedAndMissing[0].id : combinedData[0].id);
      }
      // reset original when we refresh the list if currently selected exists
      if (selectedCustomerId) {
        const found = combinedData.find(c => c.id === selectedCustomerId);
        setOriginalCustomer(found || null);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoadingData(false);
    }
  };

  useEffect(() => {
    refreshCustomers();
  }, []);

  // iframeからのメッセージ受信（画像クリック検知）
  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (event.data.type === 'IMAGE_CLICK') {
        setEditingImage(event.data);
        setImageSearchQuery(event.data.alt || "business"); // altを初期キーワードにする
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const selectedCustomer = customers.find(c => c.id === selectedCustomerId) || customers[0];
  const studioPublicOrigin = (process.env.NEXT_PUBLIC_STUDIO_ORIGIN || 'https://studio.palette-lab.com').replace(/\/$/, '');
  const activePaletteId = resolvePaletteId(selectedCustomer);
  const selectedAccount = palDbAccounts.find((account) => String(account.paletteId || '').trim().toUpperCase() === activePaletteId);
  const canShowStandardSections = Boolean(selectedCustomer && !selectedCustomer.isTemplate && selectedAccount?.isStandard);
  const canUseMedia = Boolean(selectedCustomer && !selectedCustomer.isTemplate && PALETTE_ID_PATTERN.test(activePaletteId));
  const visibleSectionKeys = Object.keys(activeSections).filter((key) => (
    canShowStandardSections || !STANDARD_SECTION_KEYS.includes(key as (typeof STANDARD_SECTION_KEYS)[number])
  ));

  const normalizePageSlug = (raw: string) => {
    const normalized = String(raw || '').trim().toLowerCase().replace(/^\/+/, '');
    if (!normalized) return 'top';
    return normalized.replace(/[^a-z0-9-_]/g, '-').replace(/-+/g, '-');
  };

  const deriveTitleFromSlug = (slug: string) => {
    const s = normalizePageSlug(slug);
    return s === 'top' ? 'Top' : s.charAt(0).toUpperCase() + s.slice(1);
  };

  const buildPublishPath = (customer: Customer) => {
    const identifier = String(customer?.customer_id || customer?.id || '').trim();
    if (!identifier) return '';
    const normalized = normalizePublishPathTemplate(customer.publishPathTemplate);
    const replaced = normalized
      .replaceAll('{id}', encodeURIComponent(identifier))
      .replaceAll('{customer_id}', encodeURIComponent(identifier));
    if (/^https?:\/\//i.test(replaced)) {
      try {
        const url = new URL(replaced);
        return url.pathname || '';
      } catch {
        return '';
      }
    }
    return replaced.startsWith('/') ? replaced : `/${replaced}`;
  };

  const buildPageHref = (slug: string, basePath: string) => {
    const normalizedSlug = normalizePageSlug(slug);
    if (normalizedSlug === 'top') return basePath || '/';
    const baseForSubpages = basePath.endsWith('/pages')
      ? basePath.replace(/\/pages$/, '')
      : basePath;
    if (!baseForSubpages) return `/${normalizedSlug}`;
    return `${baseForSubpages.replace(/\/$/, '')}/${normalizedSlug}`;
  };

  const syncNavWithSitePages = (
    html: string,
    pages: { slug: string; title: string }[],
    basePath: string,
  ) => {
    if (!html) return html;
    const parser = new DOMParser();
    const parsed = parser.parseFromString(html, 'text/html');
    const nav = parsed.querySelector('nav[data-sync="site-pages"]')
      || parsed.querySelector('header nav')
      || parsed.querySelector('nav');
    if (!nav) return html;

    const anchors = Array.from(nav.querySelectorAll('a')) as HTMLAnchorElement[];
    if (anchors.length === 0) return html;

    const templateAnchor = anchors[0].cloneNode(true) as HTMLAnchorElement;
    anchors.forEach((anchor) => anchor.remove());

    pages.forEach((page) => {
      const link = templateAnchor.cloneNode(true) as HTMLAnchorElement;
      link.setAttribute('href', buildPageHref(page.slug, basePath));
      link.textContent = page.title || deriveTitleFromSlug(page.slug);
      nav.appendChild(link);
    });

    return /<html[\s>]/i.test(html)
      ? parsed.documentElement.outerHTML
      : parsed.body.innerHTML;
  };

  const getCustomerPages = (customer?: Customer | null) => {
    if (!customer) return [] as { slug: string; title: string; htmlCode: string; templateId?: string; templateVariantId?: string; order?: number }[];
    const fromPayload = Array.isArray(customer.pages)
      ? customer.pages
          .filter((page) => page && typeof page.slug === 'string')
          .map((page, index) => ({
            slug: normalizePageSlug(page.slug),
            title: String(page.title || deriveTitleFromSlug(page.slug || 'top')),
            htmlCode: String(page.htmlCode || ''),
            templateId: String((page as any).templateId || ''),
            templateVariantId: String((page as any).templateVariantId || ''),
            order: Number.isFinite(Number((page as any).order)) ? Number((page as any).order) : index,
          }))
      : [];

    const unique = new Map<string, { slug: string; title: string; htmlCode: string; templateId?: string; templateVariantId?: string; order?: number }>();
    fromPayload.forEach((page) => {
      if (!unique.has(page.slug)) unique.set(page.slug, page);
    });

    const topHtml = String(customer.htmlCode || unique.get('top')?.htmlCode || '');
    unique.set('top', {
      slug: 'top',
      title: unique.get('top')?.title || 'Top',
      htmlCode: topHtml,
      templateId: unique.get('top')?.templateId || '',
      templateVariantId: unique.get('top')?.templateVariantId || '',
      order: Number.isFinite(Number(unique.get('top')?.order)) ? Number(unique.get('top')?.order) : 0,
    });

    const pages = Array.from(unique.values());
    pages.sort((a, b) => (Number(a.order) || 0) - (Number(b.order) || 0));
    return pages;
  };

  const selectedCustomerPages = getCustomerPages(selectedCustomer);
  const activePage = selectedCustomerPages.find((page) => page.slug === selectedSitePageSlug) || selectedCustomerPages[0];
  const activePageHtml = String(activePage?.htmlCode || '');
  const activePageTemplateId = hasTemplateVariantId(String(activePage?.templateVariantId || ''))
    ? String(activePage?.templateVariantId || '')
    : (hasTemplateId(String(activePage?.templateId || ''))
      ? String(activePage?.templateId || '')
      : selectedTemplateId);
  const activePageVariants = templateVariants.filter(
    (variant) => variant.pageSlug === String(activePage?.slug || ''),
  );
  const availableSlugOptions = Array.from(new Set([
    'about',
    'service',
    'works',
    'company',
    'news',
    'contact',
    'faq',
    'flow',
    'pricing',
    'menu',
    'gallery',
    ...templateVariants.map((variant) => variant.pageSlug),
  ])).filter((slug) => slug && slug !== 'top' && slug !== 'news-page' && slug !== 'blog-page');

  const updateSelectedCustomerPages = (updater: (pages: { slug: string; title: string; htmlCode: string; templateId?: string; templateVariantId?: string; order?: number }[]) => { slug: string; title: string; htmlCode: string; templateId?: string; templateVariantId?: string; order?: number }[]) => {
    setCustomers((prev) => prev.map((customer) => {
      if (customer.id !== selectedCustomerId) return customer;
      const nextPages = updater(getCustomerPages(customer));
      const normalizedPages = nextPages.map((page, index) => ({
        slug: normalizePageSlug(page.slug),
        title: String(page.title || deriveTitleFromSlug(page.slug)),
        htmlCode: String(page.htmlCode || ''),
        templateId: String(page.templateId || ''),
        templateVariantId: String(page.templateVariantId || ''),
        order: index,
      }));
      const basePath = buildPublishPath(customer);
      const syncedPages = normalizedPages.map((page) => ({
        ...page,
        htmlCode: syncNavWithSitePages(page.htmlCode, normalizedPages, basePath),
      }));
      const topPage = syncedPages.find((page) => page.slug === 'top');
      return {
        ...customer,
        pages: syncedPages,
        htmlCode: topPage ? topPage.htmlCode : customer.htmlCode,
      };
    }));
  };

  const updateActivePageHtml = (nextHtml: string) => {
    if (!activePage) return;
    updateSelectedCustomerPages((pages) => pages.map((page) => (
      page.slug === activePage.slug ? { ...page, htmlCode: nextHtml } : page
    )));
  };

  const reorderSitePages = (fromSlug: string, toSlug: string) => {
    if (!selectedCustomer) return;
    if (fromSlug === toSlug) return;
    const pages = getCustomerPages(selectedCustomer);
    const fromIndex = pages.findIndex((page) => page.slug === fromSlug);
    const toIndex = pages.findIndex((page) => page.slug === toSlug);
    if (fromIndex < 0 || toIndex < 0) return;

    const next = [...pages];
    const [moved] = next.splice(fromIndex, 1);
    next.splice(toIndex, 0, moved);
    updateSelectedCustomerPages(() => next);
  };

  const handleAddSitePage = () => {
    if (!selectedCustomer) return;
    const slug = normalizePageSlug(selectedNewPageSlug);
    if (!slug || slug === 'top') return;
    const pages = getCustomerPages(selectedCustomer);
    if (pages.some((page) => page.slug === slug)) {
      alert('同じslugのページが既にあります。');
      return;
    }
    const defaultTitle = deriveTitleFromSlug(slug);
    const rawTitle = prompt('ページ名を入力してください（ナビに表示されます）', defaultTitle);
    if (rawTitle === null) return;
    const title = String(rawTitle || '').trim() || defaultTitle;
    const topPage = pages.find((page) => page.slug === 'top');
    const seedHtml = String(topPage?.htmlCode || selectedCustomer.htmlCode || '').trim();
    const pageTemplateId = hasTemplateId(selectedTemplateId) ? selectedTemplateId : TEMPLATE_DEFAULT_ID;
    const defaultVariant = templateVariants.find((variant) => variant.pageSlug === slug);
    updateSelectedCustomerPages((prev) => [...prev, {
      slug,
      title,
      templateId: defaultVariant?.templateId || pageTemplateId,
      templateVariantId: defaultVariant?.id || '',
      htmlCode: slug === 'top'
        ? String(selectedCustomer.htmlCode || '')
        : (seedHtml || `<main><section id="top" class="p-8"><h1>${deriveTitleFromSlug(slug)} page</h1><p>このページを編集してください。</p></section></main>`),
    }]);
    setSelectedSitePageSlug(slug);
  };

  const handleRemoveSitePage = (slug: string) => {
    if (slug === 'top') {
      alert('topページは削除できません。');
      return;
    }
    if (!confirm(`/${slug} ページを削除しますか？`)) return;
    updateSelectedCustomerPages((pages) => pages.filter((page) => page.slug !== slug));
    if (selectedSitePageSlug === slug) {
      setSelectedSitePageSlug('top');
    }
  };

  const normalizePublishPathTemplate = (raw?: string) => {
    const value = String(raw || '').trim();
    if (!value) return DEFAULT_PUBLISH_PATH_TEMPLATE;
    if (/^https?:\/\//i.test(value)) return value;
    return value.startsWith('/') ? value : `/${value}`;
  };

  const buildPublishUrl = (identifier: string, template?: string, originOverride?: string) => {
    const normalized = normalizePublishPathTemplate(template);
    const encodedId = encodeURIComponent(identifier);
    const resolvedPath = normalized
      .replaceAll('{id}', encodedId)
      .replaceAll('{customer_id}', encodedId);

    if (/^https?:\/\//i.test(resolvedPath)) return resolvedPath;
    const fallbackOrigin = typeof window !== 'undefined' ? window.location.origin : '';
    const baseOrigin = (originOverride || fallbackOrigin || '').replace(/\/$/, '');
    return baseOrigin ? `${baseOrigin}${resolvedPath}` : resolvedPath;
  };

  const getCustomerMainUrl = (customer?: Customer | null) => {
    if (!customer) return '';
    const identifier = customer.customer_id || customer.id;
    if (!identifier) return '';
    return buildPublishUrl(identifier, customer.publishPathTemplate, studioPublicOrigin);
  };

  const copyCustomerMainUrl = async (customer?: Customer | null) => {
    if (!customer || typeof window === 'undefined') return;
    const fullUrl = getCustomerMainUrl(customer);
    if (!fullUrl) return;
    try {
      await navigator.clipboard.writeText(fullUrl);
      alert('送信先URLをコピーしました。');
    } catch {
      prompt('コピーしてください', fullUrl);
    }
  };


  // 顧客選択時のみ、dirty判定用のスナップショットを更新
  useEffect(() => {
    if (selectedCustomer) {
      setOriginalCustomer({ ...selectedCustomer });
    } else {
      setOriginalCustomer(null);
    }
  }, [selectedCustomerId]);

  useEffect(() => {
    if (!selectedCustomer) return;
    const pages = getCustomerPages(selectedCustomer);
    if (pages.length === 0) {
      setSelectedSitePageSlug('top');
      return;
    }
    if (!pages.some((page) => page.slug === selectedSitePageSlug)) {
      setSelectedSitePageSlug(pages[0].slug);
    }
  }, [selectedCustomerId, selectedCustomer?.pages, selectedCustomer?.htmlCode]);

  // warn on unload if there are unsaved changes
  useEffect(() => {
    const handler = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [isDirty]);

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
        await handleMediaUpload(file, activePaletteId);
      }
      await loadMediaAssets(activePaletteId);
    } finally {
      setIsUploadingMedia(false);
      event.target.value = '';
    }
  };

  const copyMediaUrl = async (url: string) => {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      alert('URLをコピーしました。');
    } catch {
      prompt('コピーしてください', url);
    }
  };

  const handleMediaSelect = (asset: MediaAsset) => {
    const url = String(asset.url || '').trim();
    if (!url) return;
    if (editingImage) {
      applyNewImage(url);
      return;
    }
    void copyMediaUrl(url);
  };

  useEffect(() => {
    if (!canUseMedia) {
      setMediaAssets([]);
      setMediaError('');
      return;
    }
    void loadMediaAssets(activePaletteId);
  }, [activePaletteId, canUseMedia]);

  // dirty判定：selectedCustomer と originalCustomer を比較
  useEffect(() => {
    if (!selectedCustomer || !originalCustomer) {
      setIsDirty(false);
      return;
    }
    const a = JSON.stringify({
      name: selectedCustomer.name,
      status: selectedCustomer.status,
      publishPathTemplate: selectedCustomer.publishPathTemplate,
      description: selectedCustomer.description,
      htmlCode: selectedCustomer.htmlCode,
      pages: getCustomerPages(selectedCustomer),
      answers: selectedCustomer.answers
    });
    const b = JSON.stringify({
      name: originalCustomer.name,
      status: originalCustomer.status,
      publishPathTemplate: originalCustomer.publishPathTemplate,
      description: originalCustomer.description,
      htmlCode: originalCustomer.htmlCode,
      pages: getCustomerPages(originalCustomer),
      answers: originalCustomer.answers
    });
    setIsDirty(a !== b);
  }, [selectedCustomer, originalCustomer]);

  // プレビュー用の簡易HTML判定
  const normalizeHtmlString = (s?: string) => {
    if (!s) return "";
    let t = s.trim();
    t = t.replace(/^```html\s*/i, '').replace(/\s*```$/i, '');
    t = t.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    return t;
  };

  const isHtmlText = (html?: string) => {
    if (!html) return false;
    const sample = normalizeHtmlString(html);
    return /<[^>]+>/.test(sample);
  };

  const isRenderableHtml = (html?: string) => {
    if (!html) return false;
    const normalized = normalizeHtmlString(html);
    if (normalized.length < 40) return false;
    return /<(html|body|main|section|div|header|footer)\b/i.test(normalized);
  };

  // テンプレート自動選択ロジック
  const autoSelectTemplate = (answers: { q: string, a: string }[]) => {
    if (!answers || answers.length === 0) return TEMPLATE_DEFAULT_ID;

    const text = answers.map(a => a.a).join(" ").toLowerCase();
    const scores: { [key: string]: number } = {};

    templates.forEach(t => {
      scores[t.id] = 0;
      t.tags.forEach(tag => {
        // タグそのものが含まれているか
        if (text.includes(tag)) scores[t.id] += 3;
        
        // タグに関連する日本語キーワードのマッチング（簡易版）
        const keywords: {[key: string]: string[]} = {
          'simple': ['シンプル', 'すっきり', '簡潔', '標準'],
          'luxury': ['高級', 'エレガント', '上品', '高価', 'ラグジュアリー'],
          'business': ['企業', '会社', '信頼', '誠実', 'ビジネス', 'コーポレート'],
          'pop': ['元気', '明るい', '楽しい', 'ポップ', '子供', 'キッズ'],
          'minimal': ['ミニマル', '余白', '洗練', '無駄のない', '白'],
          'dark': ['クール', 'かっこいい', '黒', 'ダーク', '夜', 'テック'],
          'natural': ['自然', 'オーガニック', '優しい', '緑', 'カフェ', 'ナチュラル'],
          'japanese': ['和風', '日本', '伝統', '和食', '旅館'],
          'portfolio': ['写真', '作品', 'ポートフォリオ', 'ギャラリー', 'クリエイター'],
          'lp': ['販売', '集客', 'ランディング', '訴求', 'コンバージョン']
        };

        if (keywords[tag]) {
          keywords[tag].forEach(k => {
            if (text.includes(k)) scores[t.id] += 1;
          });
        }
      });
    });

    // スコアが最も高いテンプレートIDを返す
    const sortedTemplates = Object.entries(scores).sort(([, a], [, b]) => b - a);
    // スコアが0より大きいものがあればそれを、なければデフォルト(modern)を返す
    return sortedTemplates[0][1] > 0 ? sortedTemplates[0][0] : TEMPLATE_DEFAULT_ID;
  };

  // 顧客選択時にテンプレートを自動選択
  useEffect(() => {
    if (selectedCustomer && !selectedCustomer.isTemplate && selectedCustomer.answers) {
      const explicitTemplateId = String(
        (selectedCustomer as any).selectedTemplateId || (selectedCustomer as any).templateId || '',
      ).trim();
      if (hasTemplateId(explicitTemplateId)) {
        setSelectedTemplateId(explicitTemplateId);
      } else {
        const recommendedId = autoSelectTemplate(selectedCustomer.answers);
        setSelectedTemplateId(recommendedId);
      }
    }
  }, [selectedCustomerId]);

  const handleApplyAiAdjustment = async () => {
    if (!aiInstruction || !selectedCustomer) return;
    setIsApplying(true);
    try {
      const tuningPrompt = `
あなたはWebデザイナーです。以下の編集指示に従って、現在のHTMLを修正してください。

【編集指示】
${aiInstruction}

【厳守ルール】
1. 返答はHTMLコードのみ。
2. 必ず \`\`\`html ... \`\`\` で囲むこと。
3. 既存レイアウト構造（大枠のタグ構造）は維持すること。

【現在のHTML】
${activePageHtml}
      `;

      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system: 'あなたはHTML編集アシスタントです。指示に従ってHTMLのみを返してください。',
          message: tuningPrompt,
          history: []
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ text: response.statusText }));
        throw new Error(errorData.text || `Server error: ${response.status}`);
      }

      const data = await response.json();
      const { html, comment } = extractHtmlAndComment(data.text || "");
      const normalized = normalizeHtmlString(html || data.text || "");
      const htmlToApply = normalized || html;

      if (isRenderableHtml(htmlToApply)) {
        updateActivePageHtml(htmlToApply);
        setCustomers(prev => prev.map(c => c.id === selectedCustomerId ? ({
          ...c,
          description: comment || c.description,
        }) : c));
      } else {
        // HTMLと判定できない場合は、htmlCodeを上書きせずにdescriptionに保存しておく
        setCustomers(prev => prev.map(c => c.id === selectedCustomerId ? ({ ...c, description: (data.text || comment || c.description) }) : c));
        alert('AI Tuningの結果から有効なHTMLを抽出できませんでした。指示を具体的にして再実行してください。');
      }
    } catch (error: any) {
      console.error("Gemini Error:", error);
      alert(`AIエラー: ${error.message}`);
    } finally {
      setIsApplying(false);
      setAiInstruction("");
    }
  };

  // ヒアリング内容からテーマを検出
  const detectTheme = (answers: { q: string, a: string }[] = []): string => {
    if (!answers || answers.length === 0) return "シンプルで信頼感のある";
    
    const text = answers.map(a => a.a).join(" ").toLowerCase();
    
    const themeKeywords: { [key: string]: string[] } = {
      "高級感・エレガント": ["高級", "エレガント", "上品", "高価", "ラグジュアリー", "プレミアム"],
      "シンプル・ミニマル": ["シンプル", "すっきり", "簡潔", "ミニマル", "余白", "洗練"],
      "ビジネス・コーポレート": ["企業", "会社", "信頼", "誠実", "ビジネス", "コーポレート", "法人"],
      "親しみやすい・ナチュラル": ["自然", "オーガニック", "優しい", "緑", "カフェ", "ナチュラル"],
      "クール・モダン": ["クール", "かっこいい", "黒", "ダーク", "テック", "未来"],
      "ポップ・元気": ["元気", "明るい", "楽しい", "ポップ", "子供", "カラフル"],
      "クリエイティブ・ポートフォリオ": ["写真", "作品", "ポートフォリオ", "ギャラリー"],
      "和風・伝統的": ["和風", "日本", "伝統", "和食", "旅館"],
    };
    
    const scores: { [key: string]: number } = {};
    Object.entries(themeKeywords).forEach(([theme, keywords]) => {
      scores[theme] = 0;
      keywords.forEach(kw => {
        if (text.includes(kw)) scores[theme] += 1;
      });
    });
    
    const sortedThemes = Object.entries(scores).sort(([, a], [, b]) => b - a);
    return sortedThemes[0][1] > 0 ? sortedThemes[0][0] : "シンプルで信頼感のある";
  };

  const handleInitialGeneration = async () => {
    if (!selectedCustomer) return;
    setIsApplying(true);
    try {
      // お客様回答と（必要なら）代替データを扱うための変数
      let templateSelectionAnswers = selectedCustomer.answers || [];

      // ヒアリング内容のサマリー（answers から Q&A をまとめる）
      let answerSummary = templateSelectionAnswers
        .filter(a => a.q && a.a) // q と a が両方存在するもののみ
        .map(a => `Q: ${a.q.substring(0, 100)}...\nA: ${a.a}`) // 質問は最初の100文字のみ
        .join("\n\n");
      
      if (!answerSummary || answerSummary.trim().length === 0) {
        // テンプレートが選択されており回答がない場合、直近の顧客回答を代替
        const fallback = customers.find(c => !c.isTemplate && c.answers && c.answers.length > 0);
        if (fallback) {
          templateSelectionAnswers = fallback.answers || [];
          answerSummary = templateSelectionAnswers
            .filter(a => a.q && a.a)
            .map(a => `Q: ${a.q.substring(0, 100)}...\nA: ${a.a}`)
            .join("\n\n");
          alert("選択中の顧客にヒアリングデータがありません。直近の顧客回答を使用して生成します。\n（mainで生成・保存したレコードを先にご選択ください）");
        } else {
          alert("ヒアリング内容がありません。mainで完全なヒアリングを行ってください。");
          setIsApplying(false);
          return;
        }
      }
      // テンプレートレコード選択時は `tpl-` 接頭辞を除去して実IDに変換する。
      const templateIdFromTemplateRecord = selectedCustomer.isTemplate
        ? selectedCustomer.id.replace(/^tpl-/, '')
        : '';

      const shouldGenerateAllPages = !selectedCustomer.draftGenerated;
      const pagesToGenerate = shouldGenerateAllPages
        ? selectedCustomerPages
        : (activePage ? [activePage] : []);

      for (const page of pagesToGenerate) {
        const pageSlug = String(page?.slug || 'top');
        const pageTitle = String(page?.title || deriveTitleFromSlug(pageSlug));
        const variantId = String(page?.templateVariantId || '').trim();
        const pageTemplateId = String(page?.templateId || '').trim();

        let recommendedTemplateId: string;
        let baseHtml = '';
        let templateLabel = '';

        if (hasTemplateVariantId(variantId)) {
          const variant = getTemplateVariantById(variantId);
          const template = getTemplateById(variant?.templateId || TEMPLATE_DEFAULT_ID);
          recommendedTemplateId = template.id;
          baseHtml = String(variant?.html || template.html);
          templateLabel = `${template.name} / ${variant?.name || 'Variant'}`;
        } else if (hasTemplateId(pageTemplateId)) {
          recommendedTemplateId = pageTemplateId;
          const template = getTemplateById(recommendedTemplateId);
          recommendedTemplateId = template.id;
          baseHtml = template.html;
          templateLabel = template.name;
        } else if (hasTemplateId(selectedTemplateId)) {
          recommendedTemplateId = selectedTemplateId;
          const template = getTemplateById(recommendedTemplateId);
          recommendedTemplateId = template.id;
          baseHtml = template.html;
          templateLabel = template.name;
        } else if (hasTemplateId(templateIdFromTemplateRecord)) {
          recommendedTemplateId = templateIdFromTemplateRecord;
          const template = getTemplateById(recommendedTemplateId);
          recommendedTemplateId = template.id;
          baseHtml = template.html;
          templateLabel = template.name;
        } else {
          recommendedTemplateId = autoSelectTemplate(templateSelectionAnswers);
          const template = getTemplateById(recommendedTemplateId);
          recommendedTemplateId = template.id;
          baseHtml = template.html;
          templateLabel = template.name;
        }

        setSelectedTemplateId(recommendedTemplateId);

        const prompt = `
      あなたはWebデザイナーです。以下の「ヒアリング内容」の**テーマ**を理解した上で、「ベースHTML」の中身（テキスト、画像URL、配色クラス）を書き換えて、顧客専用のHTMLを作成してください。

      【対象ページ】
      /${pageSlug} (${pageTitle})

      【デザインテーマ】
      お客様のサイトのテーマは「${detectTheme(templateSelectionAnswers)}」です。このテーマに沿ったデザイン・表現・色選びを心がけてください。

      【言語ポリシー】
      **本文・見出し・説明文は日本語をメインにしてください。**
      英語は以下のようなデザイン要素としてのみ使用してください：
      - サイト全体の雰囲気を上品にするための英語タグライン（例: "Premium Quality", "Innovation", "Trust"）
      - セクションヘッダーの小さなラベル（例: "ABOUT US", "OUR SERVICES"）
      - ボタンラベルはシンプルな英語（例: "Learn More", "Contact Us"）
      
      ただし、日本語での適切な表現がある場合は日本語を優先してください。

      【制約事項】
      1. **HTML構造（タグの入れ子構造やクラス名）は極力維持**してください。レイアウトを大きく壊さないでください。
      2. テキストはヒアリング内容に合わせて魅力的なものに変更してください。【重要】日本語をメインにしてください。
      3. 画像は \`https://placehold.co/600x400\` などのプレースホルダー画像、またはUnsplash等の実在するURLに差し替えてください。
      4. 配色はTailwind CSSのクラスを変更して調整してください（例: bg-indigo-600 -> bg-pink-500 など）。
      5. **最後に、完成したHTMLコードのみを \`\`\`html ... \`\`\` で囲んで出力してください。説明や雑談は含めないでください。**

      【ヒアリング内容】
      ${answerSummary}

      【ベースHTML】
      ${baseHtml}
      `;

        // 高負荷や503エラーに備えてリトライを行う
        let response: Response;
        let attempt = 0;
        const maxAttempts = 3;
        while (true) {
          attempt++;
          response = await fetch('/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              system: prompt,
              history: []
            })
          });

          if (response.ok) break;

          if (response.status === 503 && attempt < maxAttempts) {
            console.warn(`AIモデル高負荷: ${attempt}/${maxAttempts} リトライ中...`);
            await new Promise(r => setTimeout(r, 1000 * attempt));
            continue;
          }

          const errorData = await response.json().catch(() => ({ text: response.statusText }));
          throw new Error(errorData.text || `Server error: ${response.status}`);
        }

        const data = await response.json();
        const { html, comment } = extractHtmlAndComment(data.text || "");
        const normalized = normalizeHtmlString(html || data.text || "");

        const memo = `ページ: /${pageSlug}\nテンプレート: ${templateLabel || '(unknown)'}\nプロンプト:\n${prompt.trim()}`;

        if (/<[^>]+>/.test(normalized)) {
          const generatedHtml = normalized || html;
          updateSelectedCustomerPages((pages) => pages.map((p) => (
            p.slug === pageSlug ? { ...p, htmlCode: generatedHtml } : p
          )));
          setCustomers(prev => prev.map(c =>
            c.id === selectedCustomerId
              ? {
                ...c,
                description: memo,
                status: 'reviewing',
                selectedTemplateId: recommendedTemplateId,
                draftGenerated: shouldGenerateAllPages ? true : c.draftGenerated,
              }
              : c
          ));
        } else {
          setCustomers(prev => prev.map(c => 
            c.id === selectedCustomerId
              ? {
                ...c,
                status: 'reviewing',
                selectedTemplateId: recommendedTemplateId,
                draftGenerated: shouldGenerateAllPages ? true : c.draftGenerated,
              }
              : c
          ));
        }
      }
    } catch (error: any) {
      console.error("Generation Error:", error);
      alert(`初期生成に失敗しました: ${error.message}`);
    } finally {
      setIsApplying(false);
    }
  };

  // 保存（既存レコードを上書き）
  const handleSaveCustomer = async () => {
    if (!selectedCustomer) return;
    setIsLoadingData(true);
    try {
      await updateCustomer({}); // empty updates -> send whole object
      alert("上書き保存しました！");
      // 保存後にオリジナルスナップショットを更新
      setOriginalCustomer({ ...selectedCustomer });
      setIsDirty(false);
    } catch (error) {
      console.error("Save error", error);
      alert("保存に失敗しました。");
    } finally {
      setIsLoadingData(false);
    }
  };

  // (任意) コピーして新規レコード化するヘルパー
  const handleDuplicateCustomer = async () => {
    if (!selectedCustomer) return;
    const newName = prompt("名前を入力して保存:", `${selectedCustomer.name} のコピー`);
    if (!newName) return;

    setIsLoadingData(true);
    try {
      const response = await fetch('/api/save-customer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...selectedCustomer,
          id: `data-${Date.now()}`,
          name: newName,
          updatedAt: new Date().toLocaleDateString()
        })
      });

      if (response.ok) {
        alert("コピーを保存しました！");
        await refreshCustomers();
      }
    } catch (error) {
      console.error("Duplicate error", error);
      alert("保存に失敗しました。");
    } finally {
      setIsLoadingData(false);
    }
  };

  const handlePublish = async () => {
    if (!selectedCustomer) return;

    if (!selectedCustomer.htmlCode && !activePageHtml) {
      alert("公開するHTMLがありません。編集またはAI生成を行ってください。");
      return;
    }

    if (!confirm("現在の内容で公開ページを作成しますか？")) return;

    setIsLoadingData(true);
    try {
      // 常に新しい公開ページを発行したいので、
      // 既存の ID を破棄してバックエンド側に新規生成させる。
      // 通常はテンプレートから公開する場合のみ生成していたが、
      // 何度公開しても同じ URL になってしまう問題を防ぐため。
      const payload = {
        ...selectedCustomer,
        updatedAt: new Date().toISOString(),
      } as any;

      if (!canShowStandardSections) {
        const htmlCode = payload.htmlCode ? getProcessedHtml(payload.htmlCode, false) : payload.htmlCode;
        const pages = Array.isArray(payload.pages)
          ? payload.pages.map((page: any) => ({
              ...page,
              htmlCode: page?.htmlCode ? getProcessedHtml(page.htmlCode, false) : page?.htmlCode,
            }))
          : payload.pages;
        payload.htmlCode = htmlCode;
        payload.pages = pages;
      }

      // ID は新規採番させるが、customer_id は契約判定に必要なので保持する。
      delete payload.id;
      delete payload.isTemplate;

      const response = await fetch('/api/save-customer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // 保存処理が完了したら一覧を更新してから URL を組み立て
        const { customer: savedCustomer } = await response.json();
        await refreshCustomers();
        setSelectedCustomerId(savedCustomer.id);

        // customers サーバーから発行される ID があれば優先して使用
        const identifier = savedCustomer.customer_id || savedCustomer.id;
        const publicUrl = buildPublishUrl(identifier, savedCustomer.publishPathTemplate || selectedCustomer.publishPathTemplate);
        if (confirm(`公開しました！\nURL: ${publicUrl}\n\nページを開きますか？`)) {
          window.open(publicUrl, '_blank');
        }
      } else {
        const err = await response.json().catch(() => ({}));
        alert(`保存に失敗しました: ${String((err as { error?: string }).error || 'unknown error')}`);
      }
    } catch (error) {
      console.error("Publish Error:", error);
      alert("エラーが発生しました。");
    } finally {
      setIsLoadingData(false);
    }
  };

  // 追加: 顧客削除ハンドラ
  const handleDeleteCustomer = async () => {
    if (!selectedCustomer) return;
    if (!confirm("本当にこの顧客を削除しますか？")) return;
    try {
      const res = await fetch('/api/delete-customer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selectedCustomer.id }),
      });
      if (res.ok) {
        setSelectedCustomerId(null);
        await refreshCustomers();
        alert("削除しました。");
      } else {
        alert("削除に失敗しました。");
      }
    } catch (e) {
      console.error("Delete Error", e);
      alert("削除中にエラーが発生しました。");
    }
  };

  // 共通: 顧客情報をサーバーへ保存して一覧を更新するユーティリティ
  const updateCustomer = async (updates: Partial<Customer>) => {
    if (!selectedCustomer) return;
    const payload = {
      ...selectedCustomer,
      ...updates,
      selectedTemplateId,
      updatedAt: new Date().toISOString(),
    } as any;
    const res = await fetch('/api/save-customer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({}));
      const message = (errorBody as { error?: string }).error || 'Save request failed';
      throw new Error(message);
    }

    const { customer: saved } = await res.json();
    await refreshCustomers();
    setSelectedCustomerId(saved.id);
    return saved;
  };

  // 画像検索ハンドラ
  const handleImageSearch = async () => {
    if (!imageSearchQuery) return;
    setIsSearchingImage(true);
    try {
      const res = await fetch('/api/search-images', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: imageSearchQuery })
      });
      const data = await res.json();
      setSearchedImages(data.images || []);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSearchingImage(false);
    }
  };

  const handleGenerateImage = async () => {
    const prompt = String(imageSearchQuery || '').trim();
    if (!prompt) {
      setGeneratedImageError('画像生成プロンプトを入力してください。');
      return;
    }

    setIsGeneratingImage(true);
    setGeneratedImageError('');
    setGeneratedImageUrl('');

    try {
      const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1280&height=720&nologo=true&seed=${Date.now()}`;

      // 実際に画像が読み込めるかを確認してから表示する。
      await new Promise<void>((resolve, reject) => {
        const img = new Image();
        const timer = window.setTimeout(() => reject(new Error('画像生成がタイムアウトしました。')), 15000);
        img.onload = () => {
          window.clearTimeout(timer);
          resolve();
        };
        img.onerror = () => {
          window.clearTimeout(timer);
          reject(new Error('画像の取得に失敗しました。'));
        };
        img.src = url;
      });

      setGeneratedImageUrl(url);
    } catch (error) {
      const message = error instanceof Error ? error.message : '画像生成に失敗しました。';
      setGeneratedImageError(message);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleScreenshot = async () => {
    if (!iframeRef.current?.contentWindow) {
      alert('プレビューの読み込みが完了していません。');
      return;
    }

    try {
      const canvas = await html2canvas(iframeRef.current.contentWindow.document.body, {
        useCORS: true, // 外部画像を許可
        allowTaint: true,
        scale: 2, // 高解像度化
      });
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `palette-ai-screenshot-${Date.now()}.png`;
      link.click();
      link.remove();
    } catch (error) {
      console.error('Screenshot failed:', error);
      alert('スクリーンショットの撮影に失敗しました。');
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
    } finally {
      window.location.href = '/login';
    }
  };

  // 画像適用ハンドラ
  const applyNewImage = (newSrc: string) => {
    if (!selectedCustomer || !editingImage) return;

    // pidからインデックスを抽出 (例: "img-0" -> 0)
    const indexMatch = editingImage.pid.match(/img-(\d+)/);
    if (!indexMatch) return;
    const targetIndex = parseInt(indexMatch[1], 10);

    let currentIndex = 0;
    // imgタグを検索して、targetIndex番目のものを置換
    const updatedHtml = activePageHtml.replace(/<img\s+([^>]*?)>/gi, (match) => {
      const imageIndex = currentIndex;
      currentIndex += 1;

      if (imageIndex !== targetIndex) {
        return match;
      }

      // src属性を置換（ダブルクォート/シングルクォート両対応）
      if (/\ssrc\s*=\s*"[^"]*"/i.test(match)) {
        return match.replace(/\ssrc\s*=\s*"[^"]*"/i, ` src="${newSrc}"`);
      }
      if (/\ssrc\s*=\s*'[^']*'/i.test(match)) {
        return match.replace(/\ssrc\s*=\s*'[^']*'/i, ` src="${newSrc}"`);
      }

      // src属性がない場合は付与
      return match.replace('<img', `<img src="${newSrc}"`);
    });

    updateActivePageHtml(updatedHtml);
    setEditingImage(null); // モーダルを閉じる
  };

  const getEditableTextElements = (root: ParentNode) => {
    return Array.from(root.querySelectorAll(TEXT_EDIT_SELECTOR)).filter((el) => {
      const htmlEl = el as HTMLElement;
      if (htmlEl.closest('script,style,noscript')) return false;
      if (htmlEl.tagName.toLowerCase() === 'a' && htmlEl.closest('nav') === null && htmlEl.getAttribute('href')?.startsWith('#')) {
        return false;
      }
      const text = htmlEl.textContent?.trim() || '';
      if (!text) return false;
      return !htmlEl.querySelector(TEXT_EDIT_SELECTOR);
    }) as HTMLElement[];
  };

  const applyTextChange = () => {
    if (!selectedCustomer || !editingText) return;

    const parser = new DOMParser();
    const sourceHtml = activePageHtml || '';
    const parsed = parser.parseFromString(sourceHtml, 'text/html');
    const editable = getEditableTextElements(parsed);
    const target = editable[editingText.index];

    if (!target) {
      alert('対象テキストが見つかりませんでした。もう一度選択してください。');
      return;
    }

    target.textContent = textDraft;

    const updatedHtml = /<html[\s>]/i.test(sourceHtml)
      ? parsed.documentElement.outerHTML
      : parsed.body.innerHTML;

    updateActivePageHtml(updatedHtml);
    setEditingText(null);
    setTextDraft('');
  };

  // ファイルアップロードハンドラ
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        applyNewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const getProcessedHtml = (html: string, enableEdit: boolean = true) => {
    if (!html) return "";
    let processed = html;
    const sectionState = canShowStandardSections
      ? activeSections
      : { ...activeSections, news: false, blog: false };
    
    Object.keys(sectionState).forEach(id => {
      if (!sectionState[id]) {
        const regex = new RegExp(`id="${id}"`, 'g');
        processed = processed.replace(regex, `id="${id}" hidden style="display: none !important;"`);
      }
    });

    if (enableEdit) {
      // imgタグにユニークID (data-pid) を付与し、クリックイベント用のスタイルを追加
      let imgIndex = 0;
      // 既存のdata-pidがない場合のみ付与
      processed = processed.replace(/<img\s+([^>]*?)>/gi, (match, attrs) => {
        if (attrs.includes('data-pid')) return match;
        const pid = `img-${imgIndex}`;
        imgIndex++;
        return `<img data-pid="${pid}" ${attrs} style="cursor: pointer; transition: 0.2s; outline: 2px solid transparent;" onmouseover="this.style.outline='4px solid #4f46e5'; this.style.zIndex='100';" onmouseout="this.style.outline='2px solid transparent'">`;
      });

      // クリックイベントを親ウィンドウに送信するスクリプトを注入
      processed += `
        <script>
          function findImageFromPoint(target, event) {
            if (target && target.tagName === 'IMG') return target;
            if (target && target.closest) {
              const closestImg = target.closest('img');
              if (closestImg) return closestImg;
            }
            const x = event && typeof event.clientX === 'number' ? event.clientX : 0;
            const y = event && typeof event.clientY === 'number' ? event.clientY : 0;
            const stack = document.elementsFromPoint(x, y) || [];
            return stack.find(el => el.tagName === 'IMG') || null;
          }

          document.body.addEventListener('click', function(e) {
            const img = findImageFromPoint(e.target, e);
            if (!img) return;
            e.preventDefault();
            e.stopPropagation();
            window.parent.postMessage({ type: 'IMAGE_CLICK', pid: img.getAttribute('data-pid'), src: img.src, alt: img.alt }, '*');
          }, true);
        </script>
      `;
    }

    return processed;
  };

  const handlePreviewFrameLoad = () => {
    const iframe = iframeRef.current;
    if (!iframe?.contentDocument) return;

    const doc = iframe.contentDocument;
    const win = iframe.contentWindow as (Window & { __paletteImageClickHandler?: (e: MouseEvent) => void }) | null;
    if (!win) return;

    if (win.__paletteImageClickHandler) {
      doc.removeEventListener('click', win.__paletteImageClickHandler, true);
    }

    const clickHandler = (e: MouseEvent) => {
      const direct = (e.target as HTMLElement | null)?.closest?.('img') as HTMLImageElement | null;
      const layered = doc
        .elementsFromPoint(e.clientX, e.clientY)
        .find((el) => el instanceof HTMLImageElement) as HTMLImageElement | undefined;
      const target = direct || layered || null;
      if (target) {
        e.preventDefault();
        e.stopPropagation();

        setEditingImage({
          pid: target.getAttribute('data-pid') || 'img-0',
          src: target.src,
          alt: target.alt || ''
        });
        setImageSearchQuery(target.alt || 'business');
        return;
      }

      const textDirect = (e.target as HTMLElement | null)?.closest?.(TEXT_EDIT_SELECTOR) as HTMLElement | null;
      const textLayered = doc
        .elementsFromPoint(e.clientX, e.clientY)
        .find((el) => (el as HTMLElement).matches?.(TEXT_EDIT_SELECTOR)) as HTMLElement | undefined;
      const textTarget = textDirect || textLayered || null;
      if (!textTarget) return;

      const textElements = getEditableTextElements(doc);
      const index = textElements.findIndex((el) => el === textTarget);
      if (index < 0) return;

      e.preventDefault();
      e.stopPropagation();

      const currentText = textTarget.textContent || '';
      setEditingText({
        index,
        tag: textTarget.tagName.toLowerCase(),
        text: currentText
      });
      setTextDraft(currentText);
    };

    win.__paletteImageClickHandler = clickHandler;
    doc.addEventListener('click', clickHandler, true);
  };

  return (
    <div className="h-screen w-full flex flex-col bg-[#F0F2F5] overflow-hidden text-slate-800 font-sans">
      {/* 画像編集モーダル */}
      {editingImage && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh]">
            <div className="p-4 border-b flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                <ImageIcon className="w-4 h-4" /> 画像を変更
              </h3>
              <button onClick={() => setEditingImage(null)} className="p-1 hover:bg-slate-200 rounded-full"><X className="w-5 h-5" /></button>
            </div>
            
            <div className="flex border-b">
              <button onClick={() => setImageTab('search')} className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 ${imageTab === 'search' ? 'border-b-2 border-indigo-500 text-indigo-600 bg-indigo-50' : 'text-slate-500 hover:bg-slate-50'}`}>
                <Search className="w-4 h-4" /> 素材検索 (無料)
              </button>
              <button onClick={() => setImageTab('upload')} className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 ${imageTab === 'upload' ? 'border-b-2 border-indigo-500 text-indigo-600 bg-indigo-50' : 'text-slate-500 hover:bg-slate-50'}`}>
                <Upload className="w-4 h-4" /> アップロード
              </button>
              <button onClick={() => setImageTab('media')} className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 ${imageTab === 'media' ? 'border-b-2 border-indigo-500 text-indigo-600 bg-indigo-50' : 'text-slate-500 hover:bg-slate-50'}`}>
                <ImageIcon className="w-4 h-4" /> メディア
              </button>
              <button onClick={() => setImageTab('generate')} className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 ${imageTab === 'generate' ? 'border-b-2 border-indigo-500 text-indigo-600 bg-indigo-50' : 'text-slate-500 hover:bg-slate-50'}`}>
                <Wand2 className="w-4 h-4" /> AI生成
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 bg-slate-50">
              {imageTab === 'search' && (
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={imageSearchQuery} 
                      onChange={(e) => setImageSearchQuery(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleImageSearch()}
                      placeholder="キーワード (例: cafe, office, nature)" 
                      className="flex-1 p-3 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button onClick={handleImageSearch} disabled={isSearchingImage} className="px-6 bg-slate-800 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-700">
                      {isSearchingImage ? 'Searching...' : 'Search'}
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {searchedImages.map((img) => (
                      <button key={img.id} onClick={() => applyNewImage(img.url)} className="group relative aspect-video bg-slate-200 rounded-lg overflow-hidden hover:ring-2 ring-indigo-500 transition-all">
                        <img src={img.thumb} alt={img.alt} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                        <p className="absolute bottom-1 left-1 text-[8px] text-white opacity-0 group-hover:opacity-100 truncate w-full px-1">{img.photographer}</p>
                      </button>
                    ))}
                  </div>
                  {searchedImages.length === 0 && !isSearchingImage && (
                    <p className="text-center text-slate-400 text-xs py-8">キーワードを入力して検索してください</p>
                  )}
                </div>
              )}

              {imageTab === 'upload' && (
                <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-slate-300 rounded-2xl bg-white hover:bg-slate-50 transition-colors relative">
                  <input type="file" accept="image/*" onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                  <Upload className="w-12 h-12 text-slate-300 mb-4" />
                  <p className="text-sm font-bold text-slate-500">クリックして画像を選択</p>
                  <p className="text-xs text-slate-400 mt-2">またはドラッグ＆ドロップ</p>
                </div>
              )}

              {imageTab === 'media' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs text-slate-500">アップロード済みメディアから選択できます。</p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => loadMediaAssets(activePaletteId)}
                        disabled={!canUseMedia || mediaLoading}
                        className="px-3 py-1.5 text-[10px] font-bold rounded-md bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50"
                      >
                        更新
                      </button>
                      <button
                        onClick={() => mediaInputRef.current?.click()}
                        disabled={!canUseMedia || isUploadingMedia}
                        className="px-3 py-1.5 text-[10px] font-bold rounded-md bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-50"
                      >
                        {isUploadingMedia ? 'アップロード中' : 'アップロード'}
                      </button>
                    </div>
                  </div>

                  {!canUseMedia && (
                    <p className="text-[10px] text-slate-400">顧客IDの認証が完了していません。</p>
                  )}

                  {canUseMedia && mediaLoading && (
                    <p className="text-[10px] text-slate-400">読み込み中...</p>
                  )}

                  {canUseMedia && !mediaLoading && mediaError && (
                    <p className="text-[10px] text-red-500">{mediaError}</p>
                  )}

                  {canUseMedia && !mediaLoading && !mediaError && mediaAssets.length === 0 && (
                    <p className="text-[10px] text-slate-400">まだメディアがありません。</p>
                  )}

                  {canUseMedia && !mediaLoading && mediaAssets.length > 0 && (
                    <div className="grid grid-cols-3 gap-3">
                      {mediaAssets.filter((asset) => String(asset.mimeType || '').startsWith('image/')).map((asset) => (
                        <button
                          key={asset.id}
                          type="button"
                          onClick={() => handleMediaSelect(asset)}
                          className="group relative aspect-video bg-slate-200 rounded-lg overflow-hidden hover:ring-2 ring-indigo-500 transition-all"
                        >
                          <img src={asset.url} alt={asset.originalName || 'media'} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                          <span className="absolute bottom-1 left-1 text-[8px] text-white opacity-0 group-hover:opacity-100 truncate w-full px-1">
                            {asset.originalName || asset.fileName}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {imageTab === 'generate' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-500 bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <strong>AI生成 (Beta):</strong> 理想の画像が見つからない場合に利用してください。プロンプトに基づいて画像を生成します。
                  </p>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={imageSearchQuery} 
                      onChange={(e) => setImageSearchQuery(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleGenerateImage()}
                      placeholder="どんな画像を作りますか？ (例: futuristic city with neon lights)" 
                      className="flex-1 p-3 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button 
                      onClick={handleGenerateImage}
                      disabled={isGeneratingImage}
                      className="px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:opacity-90"
                    >
                      {isGeneratingImage ? 'Generating...' : 'Generate'}
                    </button>
                  </div>
                  {generatedImageError && (
                    <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg p-2">{generatedImageError}</p>
                  )}
                  {generatedImageUrl && (
                    <div className="mt-4">
                      <div className="aspect-video bg-slate-200 rounded-xl overflow-hidden relative group">
                        <img src={generatedImageUrl} className="w-full h-full object-cover" />
                        <button 
                          onClick={() => applyNewImage(generatedImageUrl)}
                          className="absolute bottom-4 right-4 px-6 py-2 bg-white text-slate-900 rounded-full font-bold text-xs shadow-lg hover:scale-105 transition-transform"
                        >
                          この画像を使用する
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* テキスト編集モーダル */}
      {editingText && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col">
            <div className="p-4 border-b flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-sm uppercase tracking-widest">テキストを編集 ({editingText.tag})</h3>
              <button onClick={() => { setEditingText(null); setTextDraft(''); }} className="p-1 hover:bg-slate-200 rounded-full"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-5 bg-slate-50">
              <textarea
                value={textDraft}
                onChange={(e) => setTextDraft(e.target.value)}
                className="w-full h-40 p-3 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500 resize-none bg-white"
              />
            </div>
            <div className="p-4 border-t bg-white flex justify-end gap-2">
              <button
                onClick={() => { setEditingText(null); setTextDraft(''); }}
                className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg text-sm font-bold hover:bg-slate-300 transition"
              >
                キャンセル
              </button>
              <button
                onClick={applyTextChange}
                className="px-5 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold hover:bg-indigo-700 transition"
              >
                反映
              </button>
            </div>
          </div>
        </div>
      )}

      <header className="h-14 w-full bg-slate-900 text-white flex items-center justify-between px-6 shrink-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-500 p-1 rounded-lg"><Layout className="w-5 h-5" /></div>
          <h1 className="text-sm font-black tracking-tighter uppercase italic">Palette Lab</h1>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={refreshCustomers} className="p-2 hover:bg-slate-800 rounded-full transition-colors">
            <RotateCcw className={`w-4 h-4 ${isLoadingData ? 'animate-spin' : ''}`} />
          </button>
          <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700">
            <button onClick={() => setViewMode('pc')} className={`p-1.5 rounded ${viewMode === 'pc' ? 'bg-slate-600' : 'hover:bg-slate-700'}`}><Monitor className="w-4 h-4" /></button>
            <button onClick={() => setViewMode('mobile')} className={`p-1.5 rounded ${viewMode === 'mobile' ? 'bg-slate-600' : 'hover:bg-slate-700'}`}><Smartphone className="w-4 h-4" /></button>
          </div>
          <button onClick={handleScreenshot} title="Download Screenshot" className="p-2 bg-slate-800 rounded-lg border border-slate-700 hover:bg-slate-700">
            <Camera className="w-4 h-4" />
          </button>
          <button
            onClick={() => setLabMode(prev => prev === 'templates' ? 'work' : 'templates')}
            className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all ${labMode === 'templates' ? 'bg-indigo-500 text-white shadow-lg' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}
          >
            <Grid className="w-4 h-4" /> {labMode === 'templates' ? 'Back to Work' : 'Templates'}
          </button>
          <button onClick={handleSaveCustomer} disabled={!isDirty} className={`bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all active:scale-95 ${isDirty ? 'ring-2 ring-yellow-400' : 'opacity-50 cursor-not-allowed'}`}>
            <Plus className="w-4 h-4" /> 保存
            {isDirty && <span className="ml-2 text-[10px] font-bold text-yellow-400">未保存</span>}
          </button>
          {/* 以下はオプション：コピーして別レコードを作成 */}
          <button onClick={handleDuplicateCustomer} className="bg-slate-600 hover:bg-slate-500 px-3 py-2 rounded-full text-[9px] font-bold flex items-center gap-1 transition-all active:scale-95">
            <Copy className="w-3 h-3" /> 複製
          </button>
          <button onClick={handlePublish} className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all active:scale-95"><Check className="w-4 h-4" /> 送信</button>
          <button onClick={handleLogout} className="bg-slate-500 hover:bg-slate-400 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all active:scale-95">ログアウト</button>
        </div>
      </header>

      <div className="flex-1 w-full flex overflow-hidden">
        <nav className="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0">
          <div className="p-4 border-b space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input type="text" placeholder="検索..." className="w-full bg-slate-100 border-none rounded-xl py-2 pl-9 text-xs outline-none" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {isLoadingData ? (
              <div className="p-10 flex flex-col items-center gap-2 text-slate-400">
                <Loader2 className="w-6 h-6 animate-spin" />
                <p className="text-[10px] font-bold uppercase tracking-widest">Loading...</p>
              </div>
            ) : (
              customers.filter(c => !c.isTemplate).map(customer => (
                <button 
                  key={customer.id} 
                  onClick={() => {
                    setSelectedCustomerId(customer.id);
                    setLabMode('work');
                  }} 
                  className={`w-full p-4 flex items-center justify-between border-b border-slate-50 transition-all ${selectedCustomerId === customer.id ? 'bg-indigo-50 border-r-4 border-r-indigo-500' : 'hover:bg-slate-50'}`}>
                  <div className="text-left">
                    <p className="font-bold text-sm truncate w-40">{resolveCustomerDisplayName(customer)}</p>
                    {!customer.id.startsWith('tpl-') && (
                      <p className="text-[10px] uppercase font-bold text-slate-400">{customer.status}</p>
                    )}
                    {customer.id.startsWith('tpl-') && (
                      <p className="text-[10px] uppercase font-bold text-purple-500">TEMPLATE</p>
                    )}
                  </div>
                </button>
              ))
            )}
          </div>
        </nav>

        <aside className="w-72 bg-slate-50 border-r border-slate-200 flex flex-col shrink-0 overflow-y-auto p-4 space-y-6">
          {selectedCustomer && (
            <>
              {/* 顧客名編集 */}
              <section className="space-y-2">
                <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">顧客名</h2>
                <input
                  type="text"
                  value={resolveCustomerDisplayName(selectedCustomer)}
                  onChange={(e) => {
                    const newName = e.target.value;
                    setCustomers(prev => prev.map(c => c.id === selectedCustomerId ? { ...c, name: newName } : c));
                  }}
                  className="w-full p-2 bg-white border border-slate-200 rounded-lg text-xs outline-none focus:border-indigo-500"
                />
                <div className="text-[10px]">
                  ステータス: <span className="font-bold uppercase">{selectedCustomer.status}</span>
                </div>
                <div className="text-[10px]">
                  最終更新: <span className="font-bold">{toDateLabel(selectedCustomer.updatedAt)}</span>
                </div>
                {!selectedCustomer.isTemplate && (
                  <div className="mt-2 rounded-lg border border-slate-200 bg-white p-2.5 space-y-1.5">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Customer Main URL</p>
                    <a
                      href={getCustomerMainUrl(selectedCustomer)}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-[11px] text-indigo-600 break-all hover:underline"
                    >
                      {getCustomerMainUrl(selectedCustomer)}
                    </a>
                    <button
                      onClick={() => copyCustomerMainUrl(selectedCustomer)}
                      className="px-2.5 py-1.5 text-[10px] font-bold rounded-md bg-slate-100 hover:bg-slate-200 transition"
                    >
                      URLをコピー
                    </button>

                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">送信先パス</p>
                      <input
                        type="text"
                        value={selectedCustomer.publishPathTemplate || ''}
                        onChange={(e) => {
                          const publishPathTemplate = e.target.value;
                          setCustomers(prev => prev.map(c => c.id === selectedCustomerId ? { ...c, publishPathTemplate } : c));
                        }}
                        className="w-full p-2 bg-white border border-slate-200 rounded-lg text-xs outline-none focus:border-indigo-500"
                        placeholder={DEFAULT_PUBLISH_PATH_TEMPLATE}
                      />
                      <p className="text-[10px] text-slate-400 leading-relaxed">
                        例: /sumidokoro, /{'{id}'}, /{'{id}'}/pages, /main?cid={'{id}'}（未設定時は /{'{id}'}/pages）
                      </p>
                    </div>
                  </div>
                )}
              </section>

              {/* Section Control */}
              <section className="space-y-4">
                <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Layout Sections</h2>
                <div className="grid grid-cols-2 gap-2">
                  {visibleSectionKeys.map(key => (
                    <button
                      key={key}
                      onClick={() => setActiveSections(prev => ({ ...prev, [key]: !prev[key] }))}
                      className={`px-3 py-2 rounded-lg border text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-between ${
                        activeSections[key] 
                          ? 'bg-white border-indigo-200 text-indigo-600 shadow-sm' 
                          : 'bg-slate-100 border-slate-200 text-slate-400'
                      }`}
                    >
                      <span>{key}</span>
                      <div className={`w-1.5 h-1.5 rounded-full ${activeSections[key] ? 'bg-indigo-500' : 'bg-slate-300'}`} />
                    </button>
                  ))}
                </div>
              </section>

              {/* 進捗ステータス（テンプレートには表示しない） */}
              {!selectedCustomer.isTemplate && (
                <section className="space-y-2">
                  <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">進捗</h2>
                  <select
                    value={selectedCustomer.status}
                    onChange={(e) => {
                      const newStatus = e.target.value as Customer['status'];
                      setCustomers(prev => prev.map(c => c.id === selectedCustomerId ? { ...c, status: newStatus } : c));
                      updateCustomer({ status: newStatus });
                    }}
                    className="w-full p-2 bg-white border border-slate-200 rounded-lg text-xs outline-none focus:border-indigo-500"
                  >
                    <option value="hearing">hearing</option>
                    <option value="reviewing">reviewing</option>
                    <option value="completed">completed</option>
                  </select>
                </section>
              )}

              {/* 削除ボタン（テンプレートは消せないように） */}
              {!selectedCustomer.isTemplate && (
                <section className="space-y-2">
                  <button 
                    onClick={handleDeleteCustomer}
                    className="w-full py-2 bg-red-600 text-white rounded-lg text-xs font-bold hover:bg-red-500 transition"
                  >
                    顧客を削除
                  </button>
                </section>
              )}

              {/* Generation Memo (Hearing Answersの上に配置) */}
              <section className="space-y-4">
                <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Generation Memo (生成時メモ)</h2>
                <textarea
                  value={selectedCustomer.description || ""}
                  onChange={(e) => {
                    const newDesc = e.target.value;
                    setCustomers(prev => prev.map(c => c.id === selectedCustomerId ? { ...c, description: newDesc } : c));
                  }}
                  className="w-full h-24 p-3 bg-white border border-slate-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-indigo-500 resize-none shadow-sm text-slate-600"
                  placeholder="AIからのコメントやメモ..."
                />
              </section>

              <section className="space-y-4 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">メディア一覧</h2>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => loadMediaAssets(activePaletteId)}
                      disabled={!canUseMedia || mediaLoading}
                      className="px-2.5 py-1 text-[10px] font-bold rounded-md bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50"
                    >
                      更新
                    </button>
                    <button
                      onClick={() => mediaInputRef.current?.click()}
                      disabled={!canUseMedia || isUploadingMedia}
                      className="px-2.5 py-1 text-[10px] font-bold rounded-md bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-50"
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
                  <p className="text-[10px] text-slate-400">顧客IDの認証が完了していません。</p>
                )}

                {canUseMedia && mediaLoading && (
                  <p className="text-[10px] text-slate-400">読み込み中...</p>
                )}

                {canUseMedia && !mediaLoading && mediaError && (
                  <p className="text-[10px] text-red-500">{mediaError}</p>
                )}

                {canUseMedia && !mediaLoading && !mediaError && mediaAssets.length === 0 && (
                  <p className="text-[10px] text-slate-400">まだメディアがありません。</p>
                )}

                {canUseMedia && !mediaLoading && mediaAssets.length > 0 && (
                  <div className="grid grid-cols-2 gap-2">
                    {mediaAssets.map((asset) => {
                      const isVideo = String(asset.mimeType || '').startsWith('video/');
                      return (
                        <div key={asset.id} className="rounded-lg border border-slate-200 bg-white overflow-hidden shadow-sm">
                          <button
                            type="button"
                            onClick={() => handleMediaSelect(asset)}
                            className="w-full aspect-[4/3] bg-slate-100 flex items-center justify-center"
                          >
                            {isVideo ? (
                              <video src={asset.url} className="w-full h-full object-cover" muted playsInline preload="metadata" />
                            ) : (
                              <img src={asset.url} alt={asset.originalName || 'media'} className="w-full h-full object-cover" />
                            )}
                          </button>
                          <div className="px-2 py-1 text-[9px] text-slate-500">
                            <div className="truncate">{asset.originalName || asset.fileName}</div>
                            <div className="text-[8px]">{formatBytes(Number(asset.sizeBytes || 0))}</div>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleMediaSelect(asset)}
                            className="w-full px-2 py-1 text-[9px] font-bold text-indigo-600 border-t border-slate-200 hover:bg-slate-50"
                          >
                            {editingImage ? 'この画像を適用' : 'URLをコピー'}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </section>

              {/* 【復活】ヒアリング内容セクション */}
              <section className="space-y-4 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hearing Answers</h2>
                  <button onClick={() => setShowHearingChat(true)} className="text-xs text-indigo-600 font-bold">チャット表示</button>
                </div>
                <div className="space-y-2 bg-white p-3 rounded-xl border border-slate-200 shadow-sm overflow-hidden max-h-[55vh] overflow-y-auto">
                  {selectedCustomer.answers && selectedCustomer.answers.length > 0 ? (
                    selectedCustomer.answers.map((ans, i) => (
                      <div key={i} className="mb-2 last:mb-0">
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter whitespace-pre-wrap break-words">Q: {ans.q}</p>
                        {ans.a?.startsWith('data:image') ? (
                          <div className="mt-1">
                            <img src={ans.a} alt="Answer Image" className="max-w-full h-auto rounded-lg border border-slate-200 max-h-40 object-contain" />
                          </div>
                        ) : (
                          <p className="text-[11px] font-medium text-slate-700 leading-relaxed whitespace-pre-wrap break-words">{ans.a}</p>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-[10px] text-slate-400 italic text-center py-2">No answers available.</p>
                  )}
                </div>
              </section>

              {showHearingChat && selectedCustomer && (
                <div className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                  <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh] border border-slate-100">
                    <div className="p-5 border-b flex justify-between items-center bg-gradient-to-r from-indigo-50 to-blue-50">
                      <h3 className="font-bold text-sm text-slate-800">ヒアリング会話</h3>
                      <button onClick={() => setShowHearingChat(false)} className="p-1 hover:bg-slate-200 rounded-full transition"><X className="w-5 h-5 text-slate-600" /></button>
                    </div>
                    <div className="p-6 overflow-y-auto flex-1 bg-slate-50 space-y-3">
                      {(() => {
                        const parsed = (selectedCustomer.answers || []).flatMap((item) => {
                          const messages: { role: 'user' | 'assistant'; content: string; isImage?: boolean }[] = [];

                          if (item.q?.trim()) {
                            messages.push({ role: 'assistant', content: item.q });
                          }

                          if (item.a?.trim()) {
                            messages.push({
                              role: 'user',
                              content: item.a,
                              isImage: item.a.startsWith('data:image')
                            });
                          }

                          return messages;
                        });

                        return parsed.map((m, i) => {
                          const isUser = m.role === 'user';
                          const roleDisplay = isUser ? '👤 お客様' : '🤖 AI';
                          return (
                            <div key={i} className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
                              <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
                                <span className={`text-[10px] font-bold mb-1 ${isUser ? 'text-slate-500' : 'text-indigo-600'}`}>
                                  {roleDisplay}
                                </span>
                                <div className={`max-w-sm px-4 py-3 rounded-2xl shadow-sm ${
                                  isUser 
                                    ? 'bg-indigo-600 text-white rounded-br-none' 
                                    : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                                }`}>
                                  {m.isImage ? (
                                    <img src={m.content} alt="Answer Image" className="max-w-full h-auto rounded-lg max-h-56 object-contain" />
                                  ) : (
                                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{m.content}</p>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        });
                      })()}
                    </div>
                    <div className="p-5 border-t flex justify-end bg-slate-50">
                      <button onClick={() => setShowHearingChat(false)} className="px-6 py-2.5 bg-indigo-600 text-white rounded-full font-bold text-sm hover:bg-indigo-700 transition shadow-sm">
                        閉じる
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <section className="space-y-4 pt-4 border-t border-slate-200">
                <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">AI Tuning</h2>
                <textarea 
                  value={aiInstruction}
                  onChange={(e) => setAiInstruction(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleApplyAiAdjustment(); } }}
                  className="w-full h-32 p-4 bg-white border border-slate-200 rounded-2xl text-xs outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner resize-none" 
                  placeholder="指示を入力..."
                ></textarea>
                <button onClick={handleApplyAiAdjustment} disabled={isApplying || !aiInstruction} className={`w-full py-3 rounded-2xl text-[10px] font-black tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-lg ${isApplying ? 'bg-slate-400' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
                  {isApplying ? 'Applying...' : 'Apply Adjustments'}
                </button>
              </section>
            </>
          )}
        </aside>

        <main className="flex-1 w-full bg-slate-200 p-4 flex flex-col overflow-hidden">
          {labMode === 'templates' ? (
            <div className="w-full h-full overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
                {customers.filter(c => c.isTemplate).map(template => (
                  <button 
                    key={template.id} 
                    onClick={() => {
                      setSelectedCustomerId(template.id);
                      setLabMode('work');
                    }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all text-left flex flex-col group border border-slate-200 h-80"
                  >
                    <div className="h-40 bg-slate-100 relative overflow-hidden border-b border-slate-100">
                      <div className="absolute inset-0 pointer-events-none select-none opacity-80 group-hover:opacity-100 transition-opacity">
                        <iframe 
                          srcDoc={`<html><body style="transform: scale(0.4); transform-origin: top left; width: 250%; overflow: hidden;">${template.htmlCode}</body></html>`}
                          className="w-full h-full border-none pointer-events-none"
                          tabIndex={-1}
                        />
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-bold text-slate-800 mb-1">{template.name}</h3>
                      <p className="text-xs text-slate-500 line-clamp-2 mb-4">{template.description}</p>
                      <div className="mt-auto pt-3 border-t border-slate-100 flex justify-between items-center">
                        <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">TEMPLATE</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : selectedCustomer ? (
            <div className="flex-1 w-full flex flex-col overflow-hidden">
              <div className="flex justify-between items-center mb-4 px-2">
                <div className="flex gap-2">
                  <button onClick={() => setActiveTab('preview')} className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${activeTab === 'preview' ? 'bg-slate-800 text-white shadow-lg' : 'bg-white/50 text-slate-500'}`}>Preview</button>
                  <button onClick={() => setActiveTab('code')} className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${activeTab === 'code' ? 'bg-slate-800 text-white shadow-lg' : 'bg-white/50 text-slate-500'}`}>Code</button>
                </div>
                <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase italic">{resolveCustomerDisplayName(selectedCustomer)} - {selectedCustomer.id}</div>
              </div>
              <section className="mb-4 px-2 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Site Pages</h2>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleInitialGeneration}
                      disabled={isApplying}
                      className="px-4 py-2 rounded-md bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white text-[10px] font-black uppercase tracking-wider shadow-lg disabled:opacity-50"
                    >
                      Generate Draft
                    </button>
                    <div className="flex items-center gap-2">
                      <select
                        value={selectedNewPageSlug}
                        onChange={(e) => setSelectedNewPageSlug(e.target.value)}
                        className="p-1.5 bg-white border border-slate-200 rounded-md text-[10px] font-bold uppercase tracking-wider"
                      >
                        {availableSlugOptions.map((slug) => (
                          <option key={slug} value={slug}>/{slug}</option>
                        ))}
                      </select>
                      <button
                        onClick={handleAddSitePage}
                        className="px-3 py-1.5 rounded-md bg-slate-800 text-white text-[10px] font-bold uppercase tracking-wider hover:bg-slate-700"
                      >
                        + Add Page
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {selectedCustomerPages.map((page) => {
                    const selected = selectedSitePageSlug === page.slug;
                    const dragOver = dragOverPageSlug === page.slug && draggingPageSlug !== page.slug;
                    return (
                      <div
                        key={page.slug}
                        draggable
                        onDragStart={(e) => {
                          setDraggingPageSlug(page.slug);
                          setDragOverPageSlug(null);
                          e.dataTransfer.effectAllowed = 'move';
                          e.dataTransfer.setData('text/plain', page.slug);
                        }}
                        onDragOver={(e) => {
                          e.preventDefault();
                          if (dragOverPageSlug !== page.slug) setDragOverPageSlug(page.slug);
                        }}
                        onDragLeave={() => {
                          if (dragOverPageSlug === page.slug) setDragOverPageSlug(null);
                        }}
                        onDrop={(e) => {
                          e.preventDefault();
                          const fromSlug = draggingPageSlug || e.dataTransfer.getData('text/plain');
                          if (fromSlug) reorderSitePages(fromSlug, page.slug);
                          setDraggingPageSlug(null);
                          setDragOverPageSlug(null);
                        }}
                        onDragEnd={() => {
                          setDraggingPageSlug(null);
                          setDragOverPageSlug(null);
                        }}
                        className={`px-2 py-1.5 rounded-lg border text-[10px] font-bold tracking-wider transition-all flex items-center gap-2 shrink-0 ${
                          selected
                            ? 'bg-slate-900 border-slate-900 text-white'
                            : 'bg-white border-slate-200 text-slate-500'
                        } ${dragOver ? 'ring-2 ring-indigo-300 border-indigo-300' : ''}`}
                      >
                        <button onClick={() => setSelectedSitePageSlug(page.slug)} className="flex items-center gap-2">
                          <span className="uppercase">/{page.slug}</span>
                          <span className={`text-[9px] ${selected ? 'text-slate-300' : 'text-slate-400'}`}>
                            {page.title || deriveTitleFromSlug(page.slug)}
                          </span>
                        </button>
                        {page.slug !== 'top' && (
                          <button onClick={() => handleRemoveSitePage(page.slug)} className={`text-[9px] ${selected ? 'text-slate-300' : 'text-slate-400'}`}>
                            x
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Page Template</span>
                  <select
                    value={activePageTemplateId}
                    onChange={(e) => {
                      const nextTemplateId = e.target.value;
                      if (!activePage) return;
                      if (hasTemplateVariantId(nextTemplateId)) {
                        const variant = getTemplateVariantById(nextTemplateId);
                        updateSelectedCustomerPages((pages) => pages.map((page) => (
                          page.slug === activePage.slug
                            ? { ...page, templateVariantId: nextTemplateId, templateId: variant?.templateId || page.templateId }
                            : page
                        )));
                        return;
                      }
                      updateSelectedCustomerPages((pages) => pages.map((page) => (
                        page.slug === activePage.slug ? { ...page, templateId: nextTemplateId, templateVariantId: '' } : page
                      )));
                    }}
                    className="flex-1 p-2 bg-white border border-slate-200 rounded-lg text-[10px] outline-none focus:border-indigo-500"
                  >
                    {templates.map(t => (
                      <option key={t.id} value={t.id}>{t.name}</option>
                    ))}
                    {activePageVariants.length > 0 && (
                      <optgroup label="Variants">
                        {activePageVariants.map((variant) => (
                          <option key={variant.id} value={variant.id}>
                            {getTemplateById(variant.templateId).name} / {variant.name}
                          </option>
                        ))}
                      </optgroup>
                    )}
                  </select>
                </div>
              </section>
              <div className="flex-1 w-full flex justify-center items-stretch overflow-hidden bg-slate-300/50 rounded-2xl">
                {activeTab === 'preview' ? (
                  <div className={`bg-white transition-all duration-500 shadow-2xl relative flex flex-col ${viewMode === 'pc' ? 'w-full h-full' : 'w-[375px] h-[667px] my-auto mx-auto rounded-[40px] border-[12px] border-slate-900 overflow-hidden shrink-0'}`}>
                    {isHtmlText(activePageHtml) ? (
                      <iframe 
                        ref={iframeRef}
                        key={`${selectedCustomer.id}:${activePage?.slug || 'top'}:${activePageHtml}`}
                        onLoad={handlePreviewFrameLoad}
                        srcDoc={`
                          <html>
                            <head>
                              <script src="https://cdn.tailwindcss.com"></script>
                              <style>body { margin: 0; padding: 0; } body::-webkit-scrollbar { display: none; }</style>
                            </head>
                            <body>${getProcessedHtml(activePageHtml)}</body>
                          </html>
                        `}
                        className="flex-1 w-full h-full border-none" 
                      />
                    ) : (
                      <div className="flex-1 w-full h-full p-6 overflow-auto text-left">
                        <div className="text-sm text-slate-500 mb-4">HTMLプレビューが利用できません。Generation Memoを表示します。</div>
                        <div className="mb-3 text-[11px] text-slate-500">Debug: htmlLength: <span className="font-mono text-slate-700">{activePageHtml ? activePageHtml.length : 0}</span> - isHtml: <span className="font-mono">{isHtmlText(activePageHtml) ? 'yes' : 'no'}</span></div>
                        <div className="whitespace-pre-wrap text-sm text-slate-700 bg-white p-4 rounded-lg border border-slate-100 mb-3">{selectedCustomer.description || '（メモなし）'}</div>
                        <details className="bg-white border border-slate-100 rounded-lg p-3 text-xs text-slate-500">
                          <summary className="cursor-pointer font-bold text-slate-600 mb-2">正規化された HTML（デバッグ）</summary>
                          <pre className="text-[11px] text-slate-700 max-h-56 overflow-auto bg-slate-50 p-3 rounded">{normalizeHtmlString(activePageHtml)}</pre>
                        </details>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-full h-full bg-slate-900 p-6 overflow-auto text-left rounded-xl shadow-2xl">
                    {isHtmlText(activePageHtml) ? (
                      <pre className="text-emerald-400 text-xs font-mono leading-relaxed">
                        <code>{getProcessedHtml(activePageHtml)}</code>
                      </pre>
                    ) : (
                      <div>
                        <div className="text-white text-sm whitespace-pre-wrap mb-3">{selectedCustomer.description || '（メモなし）'}</div>
                        <div className="text-[11px] text-slate-300">Debug: htmlLength: <span className="font-mono">{activePageHtml ? activePageHtml.length : 0}</span> - isHtml: <span className="font-mono">{isHtmlText(activePageHtml) ? 'yes' : 'no'}</span></div>
                        <details className="mt-3 text-xs text-slate-300">
                          <summary className="cursor-pointer">正規化された HTML（デバッグ表示）</summary>
                          <pre className="mt-2 text-[11px] text-slate-200 bg-slate-800 p-3 rounded max-h-72 overflow-auto">{normalizeHtmlString(activePageHtml)}</pre>
                        </details>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-slate-400 italic">顧客を選択してください</div>
          )}
        </main>
      </div>
    </div>
  );
}