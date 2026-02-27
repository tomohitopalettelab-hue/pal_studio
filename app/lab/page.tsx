"use client";

import React, { useState, useEffect } from 'react';
import { Layout, Check, RotateCcw, Monitor, Smartphone, Search, Eye, EyeOff, Plus, Sparkles, Loader2 } from 'lucide-react';

type Customer = {
  id: string;
  name: string;
  status: 'hearing' | 'reviewing' | 'completed';
  answers: { q: string, a: string }[];
  htmlCode: string;
  updatedAt: string;
};

export default function PaletteLab() {
  const [viewMode, setViewMode] = useState<'pc' | 'mobile'>('pc');
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [aiInstruction, setAiInstruction] = useState("");
  const [isApplying, setIsApplying] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true); // DB読み込み中フラグ
  
  const [activeSections, setActiveSections] = useState<{ [key: string]: boolean }>({
    "1": true, "2": true, "3": true, "4": true
  });

  // 初期値は空にする
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);

  // --- DBからデータを取得する関数 ---
  const refreshCustomers = async () => {
    try {
      const response = await fetch('/api/get-customers');
      const data = await response.json();
      if (Array.isArray(data)) {
        setCustomers(data);
        // まだ選択されていない場合、一番上の顧客を選択
        if (data.length > 0 && !selectedCustomerId) {
          setSelectedCustomerId(data[0].id);
        }
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoadingData(false);
    }
  };

  // 画面起動時に実行
  useEffect(() => {
    refreshCustomers();
  }, []);

  const selectedCustomer = customers.find(c => c.id === selectedCustomerId) || customers[0];

  // 1. AIによる微調整・修正機能
  const handleApplyAiAdjustment = async () => {
    if (!aiInstruction || !selectedCustomer) return;
    setIsApplying(true);
    try {
      // サーバー側のAPIルートを使用（APIキーは.env.localから読み込まれる）
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: aiInstruction,
          history: [
            { role: 'ai', content: `現在のHTMLはこれです: ${selectedCustomer.htmlCode}` }
          ]
        })
      });

      const data = await response.json();
      const cleanedText = (data.text || "").replace(/```html/g, "").replace(/```/g, "").trim();

      if (cleanedText) {
        setCustomers(prev => prev.map(c => c.id === selectedCustomerId ? { ...c, htmlCode: cleanedText } : c));
      }
    } catch (error: any) {
      console.error("Gemini Error:", error);
      alert(`AIエラー: ${error.message}`);
    } finally {
      setIsApplying(false);
      setAiInstruction("");
    }
  };

  // 2. ヒアリング内容から初稿をまるごと自動生成する機能
  const handleInitialGeneration = async () => {
    if (!selectedCustomer) return;
    setIsApplying(true);
    try {
      const answerSummary = selectedCustomer.answers.map(a => `${a.q}: ${a.a}`).join("\n");
      const baseTemplate = customers.find(c => c.name.includes('Cafe'))?.htmlCode || selectedCustomer.htmlCode;

      // サーバー側のAPIルートを使用
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `以下の内容でホームページを作ってください。\n${answerSummary}\nベースにするHTML: ${baseTemplate}`,
          history: []
        })
      });

      const data = await response.json();
      const cleanedText = (data.text || "").replace(/```html/g, "").replace(/```/g, "").trim();

      if (cleanedText) {
        setCustomers(prev => prev.map(c => 
          c.id === selectedCustomerId ? { ...c, htmlCode: cleanedText, status: 'reviewing' } : c
        ));
      }
    } catch (error: any) {
      console.error("Generation Error:", error);
      alert("初期生成に失敗しました。");
    } finally {
      setIsApplying(false);
    }
  };

  const getProcessedHtml = (html: string) => {
    if (!html) return "";
    let processed = html;
    Object.keys(activeSections).forEach(id => {
      if (!activeSections[id]) {
        processed = processed.replace(`data-id="${id}"`, `data-id="${id}" style="display: none;"`);
      }
    });
    return processed;
  };

  return (
    <div className="h-screen w-full flex flex-col bg-[#F0F2F5] overflow-hidden text-slate-800 font-sans">
      <header className="h-14 w-full bg-slate-900 text-white flex items-center justify-between px-6 shrink-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-500 p-1 rounded-lg"><Layout className="w-5 h-5" /></div>
          <h1 className="text-sm font-black tracking-tighter uppercase italic">Palette Lab</h1>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={refreshCustomers} 
            className="p-2 hover:bg-slate-800 rounded-full transition-colors"
            title="最新データに更新"
          >
            <RotateCcw className={`w-4 h-4 ${isLoadingData ? 'animate-spin' : ''}`} />
          </button>
          <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700">
            <button onClick={() => setViewMode('pc')} className={`p-1.5 rounded ${viewMode === 'pc' ? 'bg-slate-600' : 'hover:bg-slate-700'}`}><Monitor className="w-4 h-4" /></button>
            <button onClick={() => setViewMode('mobile')} className={`p-1.5 rounded ${viewMode === 'mobile' ? 'bg-slate-600' : 'hover:bg-slate-700'}`}><Smartphone className="w-4 h-4" /></button>
          </div>
          <button className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all active:scale-95"><Check className="w-4 h-4" /> プレビューをお客さんに送信</button>
        </div>
      </header>

      <div className="flex-1 w-full flex overflow-hidden">
        {/* サイドバー：顧客リスト */}
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
                <p className="text-[10px] font-bold uppercase tracking-widest">Loading DB...</p>
              </div>
            ) : customers.length === 0 ? (
              <div className="p-10 text-center text-slate-400">
                <p className="text-[10px] font-bold uppercase tracking-widest">No Customers Yet</p>
              </div>
            ) : (
              customers.map(customer => (
                <button key={customer.id} onClick={() => setSelectedCustomerId(customer.id)} className={`w-full p-4 flex items-center justify-between border-b border-slate-50 transition-all ${selectedCustomerId === customer.id ? 'bg-indigo-50 border-r-4 border-r-indigo-500' : 'hover:bg-slate-50'}`}>
                  <div className="text-left">
                    <p className="font-bold text-sm truncate w-40">{customer.name}</p>
                    <p className={`text-[10px] uppercase font-bold ${customer.status === 'hearing' ? 'text-orange-500' : customer.status === 'reviewing' ? 'text-indigo-500' : 'text-green-500'}`}>
                      {customer.status}
                    </p>
                  </div>
                  <span className="text-[8px] text-slate-400 font-mono">{customer.updatedAt}</span>
                </button>
              ))
            )}
          </div>
        </nav>

        {/* コントロールパネル */}
        <aside className="w-72 bg-slate-50 border-r border-slate-200 flex flex-col shrink-0 overflow-y-auto p-4 space-y-6">
          {selectedCustomer && (
            <>
              <section className="space-y-4">
                <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Initial Generation</h2>
                {selectedCustomer.status === 'hearing' ? (
                  <button 
                    onClick={handleInitialGeneration}
                    disabled={isApplying}
                    className="w-full py-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 hover:from-indigo-500 hover:to-pink-400 text-white rounded-2xl text-[10px] font-black tracking-[0.2em] uppercase shadow-xl transition-all flex flex-col items-center justify-center gap-2 animate-pulse active:scale-95 disabled:opacity-50"
                  >
                    <Sparkles className="w-6 h-6 text-yellow-300" />
                    <span>Generate First Draft</span>
                  </button>
                ) : (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-700">
                    <Check className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-tight">初稿生成済み</span>
                  </div>
                )}
              </section>

              <section className="space-y-4 pt-4 border-t border-slate-200">
                <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hearing Answers</h2>
                <div className="space-y-2 bg-white p-3 rounded-xl border border-slate-200 shadow-sm overflow-hidden max-h-48 overflow-y-auto">
                   {selectedCustomer.answers.map((ans, i) => (
                     <div key={i} className="mb-2">
                       <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Q: {ans.q}</p>
                       <p className="text-[11px] font-medium text-slate-700">{ans.a}</p>
                     </div>
                   ))}
                </div>
              </section>

              <section className="space-y-4 pt-4 border-t border-slate-200">
                <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Page Structure</h2>
                <div className="space-y-2">
                  {[{ id: "1", name: "Hero (看板)" }, { id: "2", name: "Philosophy (想い)" }, { id: "4", name: "Footer (フッター)" }].map(section => (
                    <button key={section.id} onClick={() => setActiveSections(prev => ({ ...prev, [section.id]: !prev[section.id] }))} className={`w-full p-3 rounded-xl flex items-center justify-between border transition-all ${activeSections[section.id] ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-100 border-transparent opacity-50'}`}>
                      <span className="text-xs font-bold">{section.name}</span>
                      {activeSections[section.id] ? <Eye className="w-4 h-4 text-indigo-500" /> : <EyeOff className="w-4 h-4 text-slate-300" />}
                    </button>
                  ))}
                </div>
              </section>

              <section className="space-y-4 pt-4 border-t border-slate-200">
                <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">AI Tuning</h2>
                <textarea 
                  value={aiInstruction}
                  onChange={(e) => setAiInstruction(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleApplyAiAdjustment(); } }}
                  className="w-full h-32 p-4 bg-white border border-slate-200 rounded-2xl text-xs outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner resize-none" 
                  placeholder="細かい修正指示を入力..."
                ></textarea>
                <button onClick={handleApplyAiAdjustment} disabled={isApplying || !aiInstruction} className={`w-full py-3 rounded-2xl text-[10px] font-black tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-lg ${isApplying ? 'bg-slate-400 cursor-not-allowed' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
                  {isApplying ? 'Applying...' : <><RotateCcw className="w-3 h-3" /> Apply Adjustments</>}
                </button>
              </section>
            </>
          )}
        </aside>

        {/* プレビューエリア */}
        <main className="flex-1 w-full bg-slate-200 p-4 flex flex-col overflow-hidden">
          {selectedCustomer ? (
            <>
              <div className="flex justify-between items-center mb-4 px-2">
                <div className="flex gap-2">
                  <button onClick={() => setActiveTab('preview')} className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${activeTab === 'preview' ? 'bg-slate-800 text-white shadow-lg' : 'bg-white/50 text-slate-500'}`}>Preview</button>
                  <button onClick={() => setActiveTab('code')} className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${activeTab === 'code' ? 'bg-slate-800 text-white shadow-lg' : 'bg-white/50 text-slate-500'}`}>Code</button>
                </div>
                <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase italic">{selectedCustomer.name} - {selectedCustomer.id}</div>
              </div>
              <div className="flex-1 w-full flex justify-center items-stretch overflow-hidden bg-slate-300/50 rounded-2xl p-0 shadow-inner">
                {activeTab === 'preview' ? (
                  <div className={`bg-white transition-all duration-500 shadow-2xl relative flex flex-col ${viewMode === 'pc' ? 'w-full h-full' : 'w-[375px] h-[667px] my-auto mx-auto rounded-[40px] border-[12px] border-slate-900 overflow-hidden shrink-0'}`}>
                    {viewMode === 'mobile' && <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-slate-900 rounded-b-2xl z-10"></div>}
                    <iframe 
                      key={selectedCustomer.htmlCode}
                      srcDoc={`
                        <html>
                          <head>
                            <script src="https://cdn.tailwindcss.com"></script>
                            <style>body { margin: 0; padding: 0; } body::-webkit-scrollbar { display: none; }</style>
                          </head>
                          <body>${getProcessedHtml(selectedCustomer.htmlCode)}</body>
                        </html>
                      `}
                      className="flex-1 w-full h-full border-none" 
                    />
                  </div>
                ) : (
                  <div className="w-full h-full bg-slate-900 p-6 overflow-auto text-left rounded-xl shadow-2xl">
                    <pre className="text-emerald-400 text-xs font-mono leading-relaxed italic">
                      <code>{getProcessedHtml(selectedCustomer.htmlCode)}</code>
                    </pre>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="h-full flex items-center justify-center text-slate-400 italic">顧客を選択してください</div>
          )}
        </main>
      </div>
    </div>
  );
}