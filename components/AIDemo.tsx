import React, { useState } from 'react';
import { generateEsgStrategy } from '../services/geminiService';
import { Sparkles, Loader2, ArrowRight, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export const AIDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);
    const strategy = await generateEsgStrategy(input);
    setResult(strategy);
    setLoading(false);
  };

  return (
    <section id="ai-demo" className="py-32 bg-brand-950 relative border-t border-white/5">
      <div className="w-full px-4 md:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Left Column: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-bold mb-8">
              <Sparkles className="w-4 h-4" />
              <span>POWERED BY GEMINI AI</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
              AI СТРАТЕГ <br />
              <span className="text-brand-500">24/7</span>
            </h2>
            
            <p className="text-xl text-brand-300 leading-relaxed mb-12">
              Не просто данные, а интеллект. Наш AI анализирует специфику вашего бизнеса и предлагает конкретные шаги для улучшения ESG-профиля за секунды.
            </p>

            <div className="hidden lg:block">
              <div className="flex items-center gap-4 text-brand-400/60 mb-4">
                <Bot className="w-6 h-6" />
                <span className="font-mono text-sm">AI_AGENT_STATUS: ONLINE</span>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-brand-500/50 to-transparent"></div>
            </div>
          </div>

          {/* Right Column: Interactive Demo */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-brand-500/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative bg-brand-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-brand-300 mb-2 ml-1">Описание компании</label>
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Например: Агрохолдинг в Краснодарском крае, выращиваем пшеницу, 1200 сотрудников..."
                    className="w-full h-40 bg-brand-950/50 border border-brand-700/50 rounded-2xl p-6 text-white placeholder-brand-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all resize-none text-lg"
                  />
                </div>
                
                <button
                  onClick={handleGenerate}
                  disabled={loading || !input.trim()}
                  className={`w-full flex justify-center items-center gap-3 py-4 rounded-xl font-bold text-lg transition-all ${
                    loading || !input.trim() 
                      ? 'bg-brand-800 text-brand-500 cursor-not-allowed' 
                      : 'bg-white text-brand-950 hover:bg-brand-100'
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Обработка данных...
                    </>
                  ) : (
                    <>
                      Сгенерировать стратегию
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              {result && (
                <div className="mt-8 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="bg-brand-950/50 rounded-2xl p-6 border border-brand-500/20">
                    <div className="flex items-center gap-3 mb-4 text-brand-accent">
                      <Sparkles className="w-5 h-5" />
                      <span className="font-bold uppercase tracking-wider text-sm">AI Рекомендация</span>
                    </div>
                    <div className="prose prose-invert prose-sm max-w-none text-brand-100/90 leading-relaxed">
                       <ReactMarkdown>{result}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};