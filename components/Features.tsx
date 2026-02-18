import React from 'react';
import { Leaf, ShieldCheck, Users, Globe, FileText, Zap, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-8 h-8" />,
    title: 'ЭКО МОНИТОРИНГ',
    desc: 'Scope 1, 2, 3 в реальном времени.',
    colSpan: 'lg:col-span-4'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'СОЦИАЛЬНЫЙ КАПИТАЛ',
    desc: 'D&I метрики и HR аналитика.',
    colSpan: 'lg:col-span-4'
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'GOVERNANCE',
    desc: 'Комплаенс и прозрачность.',
    colSpan: 'lg:col-span-4'
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'ОТЧЕТНОСТЬ В 1 КЛИК',
    desc: 'Генерация отчетов по стандартам GRI, SASB и TCFD. Полная автоматизация сбора данных.',
    colSpan: 'lg:col-span-8',
    highlight: true
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'AI АНАЛИТИКА',
    desc: 'Предиктивные модели рисков.',
    colSpan: 'lg:col-span-4'
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-brand-950 relative border-t border-white/5">
      <div className="w-full px-4 md:px-12 lg:px-24">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <h2 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter">
            Инструментарий <br/>
            <span className="text-brand-500">Платформы</span>
          </h2>
          <p className="max-w-md text-brand-300 text-lg leading-relaxed">
            Мы объединили все необходимые инструменты для устойчивого развития в единую экосистему данных.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`
                ${feature.colSpan} 
                group relative p-8 md:p-12 rounded-3xl border border-white/5 bg-brand-900/20 hover:bg-brand-900/40 transition-all duration-500
                ${feature.highlight ? 'bg-gradient-to-br from-brand-900/40 to-brand-800/40' : ''}
              `}
            >
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>

              <div className="flex flex-col h-full justify-between gap-12">
                <div className="w-16 h-16 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-500">
                  {feature.icon}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-brand-300/80 text-lg">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};