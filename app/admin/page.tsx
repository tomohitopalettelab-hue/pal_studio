"use client";

import React, { useState, useEffect } from 'react';
import { Layout, Check, RotateCcw, Monitor, Smartphone, Search, Eye, EyeOff, Plus, Sparkles, Loader2, Grid } from 'lucide-react';
import { TEMPLATES } from '../lib/templates';

type Customer = {
  id: string;
  name: string;
  status: 'hearing' | 'reviewing' | 'completed';
  answers: { q: string, a: string }[];
  htmlCode: string;
  updatedAt: string;
  description?: string;
  isTemplate?: boolean;
};

export default function PaletteLab() {
  const [viewMode, setViewMode] = useState<'pc' | 'mobile'>('pc');
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [labMode, setLabMode] = useState<'work' | 'templates'>('work');
  const [aiInstruction, setAiInstruction] = useState("");
  const [isApplying, setIsApplying] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);
  
  const [activeSections, setActiveSections] = useState<{ [key: string]: boolean }>({
    "1": true, "2": true, "3": true, "4": true, "5": true
  });

  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);

  const refreshCustomers = async () => {
    try {
      const response = await fetch('/api/get-customers');
      const dbData = await response.json();
      
      // テンプレートデータをCustomer型に変換
      const templateData: Customer[] = TEMPLATES.map(t => ({
        id: `tpl-${t.id}`,
        name: t.name,
        status: 'completed',
        answers: [],
        htmlCode: t.html,
        updatedAt: new Date().toISOString(),
        description: t.description,
        isTemplate: true
      }));

      const combinedData = [...templateData, ...(Array.isArray(dbData) ? dbData : [])];
      setCustomers(combinedData);
      
      if (combinedData.length > 0 && !selectedCustomerId) {
        setSelectedCustomerId(combinedData[0].id);
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

  const selectedCustomer = customers.find(c => c.id === selectedCustomerId) || customers[0];

  const handleApplyAiAdjustment = async () => {
    if (!aiInstruction || !selectedCustomer) return;
    setIsApplying(true);
    try {
      const response = await fetch('/api/generate', {
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

  const handleInitialGeneration = async () => {
    if (!selectedCustomer) return;
    setIsApplying(true);
    try {
      // データが存在しない場合のガード処理を追加
      const answerSummary = (selectedCustomer.answers || []).map(a => `${a.q}: ${a.a}`).join("\n");
      const baseTemplate = customers.find(c => c.id.startsWith('tpl-'))?.htmlCode || selectedCustomer.htmlCode || "";

      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `以下の内容でホームページを作ってください。\n${answerSummary}\nベースにするHTML: ${baseTemplate}`,
          history: []
        })
      });

      // サーバーエラーの場合の処理を追加
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ text: response.statusText }));
        throw new Error(errorData.text || `Server error: ${response.status}`);
      }

      const data = await response.json();
      const cleanedText = (data.text || "").replace(/```html/g, "").replace(/```/g, "").trim();

      if (cleanedText) {
        setCustomers(prev => prev.map(c => 
          c.id === selectedCustomerId ? { ...c, htmlCode: cleanedText, status: 'reviewing' } : c
        ));
      }
    } catch (error: any) {
      console.error("Generation Error:", error);
      alert(`初期生成に失敗しました: ${error.message}`);
    } finally {
      setIsApplying(false);
    }
  };

  const handleSaveAsTemplate = async () => {
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
        alert("保存しました！");
        await refreshCustomers();
      }
    } catch (error) {
      alert("保存に失敗しました。");
    } finally {
      setIsLoadingData(false);
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
          <button onClick={refreshCustomers} className="p-2 hover:bg-slate-800 rounded-full transition-colors">
            <RotateCcw className={`w-4 h-4 ${isLoadingData ? 'animate-spin' : ''}`} />
          </button>
          <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700">
            <button onClick={() => setViewMode('pc')} className={`p-1.5 rounded ${viewMode === 'pc' ? 'bg-slate-600' : 'hover:bg-slate-700'}`}><Monitor className="w-4 h-4" /></button>
            <button onClick={() => setViewMode('mobile')} className={`p-1.5 rounded ${viewMode === 'mobile' ? 'bg-slate-600' : 'hover:bg-slate-700'}`}><Smartphone className="w-4 h-4" /></button>
          </div>
          <button onClick={() => setLabMode('templates')} className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all ${labMode === 'templates' ? 'bg-indigo-500 text-white shadow-lg' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}>
            <Grid className="w-4 h-4" /> Templates
          </button>
          <button onClick={handleSaveAsTemplate} className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all active:scale-95">
            <Plus className="w-4 h-4" /> 保存
          </button>
          <button className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all active:scale-95"><Check className="w-4 h-4" /> 送信</button>
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
              customers.map(customer => (
                <button 
                  key={customer.id} 
                  onClick={() => {
                    setSelectedCustomerId(customer.id);
                    setLabMode('work');
                  }} 
                  className={`w-full p-4 flex items-center justify-between border-b border-slate-50 transition-all ${selectedCustomerId === customer.id ? 'bg-indigo-50 border-r-4 border-r-indigo-500' : 'hover:bg-slate-50'}`}>
                  <div className="text-left">
                    <p className="font-bold text-sm truncate w-40">{customer.name}</p>
                    <p className={`text-[10px] uppercase font-bold ${customer.id.startsWith('tpl-') ? 'text-purple-500' : 'text-slate-400'}`}>
                      {customer.id.startsWith('tpl-') ? 'TEMPLATE' : customer.status}
                    </p>
                  </div>
                </button>
              ))
            )}
          </div>
        </nav>

        <aside className="w-72 bg-slate-50 border-r border-slate-200 flex flex-col shrink-0 overflow-y-auto p-4 space-y-6">
          {selectedCustomer && (
            <>
              {/* 【復活】ヒアリング内容セクション */}
              <section className="space-y-4">
                <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hearing Answers</h2>
                <div className="space-y-2 bg-white p-3 rounded-xl border border-slate-200 shadow-sm overflow-hidden max-h-48 overflow-y-auto">
                  {selectedCustomer.answers && selectedCustomer.answers.length > 0 ? (
                    selectedCustomer.answers.map((ans, i) => (
                      <div key={i} className="mb-2 last:mb-0">
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Q: {ans.q}</p>
                        <p className="text-[11px] font-medium text-slate-700 leading-tight">{ans.a}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-[10px] text-slate-400 italic text-center py-2">No answers available.</p>
                  )}
                </div>
              </section>

              <section className="space-y-4 pt-4 border-t border-slate-200">
                <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Initial Generation</h2>
                <button 
                  onClick={handleInitialGeneration}
                  disabled={isApplying}
                  className="w-full py-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white rounded-2xl text-[10px] font-black tracking-widest uppercase shadow-xl transition-all flex flex-col items-center justify-center gap-2 disabled:opacity-50 active:scale-95"
                >
                  <Sparkles className="w-6 h-6 text-yellow-300" />
                  <span>Generate Draft</span>
                </button>
              </section>

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
                <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase italic">{selectedCustomer.name} - {selectedCustomer.id}</div>
              </div>
              <div className="flex-1 w-full flex justify-center items-stretch overflow-hidden bg-slate-300/50 rounded-2xl">
                {activeTab === 'preview' ? (
                  <div className={`bg-white transition-all duration-500 shadow-2xl relative flex flex-col ${viewMode === 'pc' ? 'w-full h-full' : 'w-[375px] h-[667px] my-auto mx-auto rounded-[40px] border-[12px] border-slate-900 overflow-hidden shrink-0'}`}>
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
                    <pre className="text-emerald-400 text-xs font-mono leading-relaxed">
                      <code>{getProcessedHtml(selectedCustomer.htmlCode)}</code>
                    </pre>
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