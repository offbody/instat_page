
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer className="bg-brand-950 pt-24 pb-12 border-t border-white/10 overflow-hidden">
      <div className="w-full px-4 md:px-12 lg:px-24">
        
        {/* Big Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          <div className="space-y-6">
             <h4 className="text-brand-500 font-mono text-sm mb-6">[ МЕНЮ ]</h4>
             <ul className="space-y-4">
               {['О Платформе', 'Технологии', 'Для Инвесторов', 'Контакты'].map(item => (
                 <li key={item}>
                   <a href="#" className="text-2xl font-bold text-white hover:text-brand-400 transition-colors flex items-center gap-2 group">
                     {item}
                     <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                   </a>
                 </li>
               ))}
             </ul>
          </div>
          
          <div className="space-y-6 lg:col-span-2">
            <h4 className="text-brand-500 font-mono text-sm mb-6">[ ОФИС ]</h4>
            <p className="text-xl text-white leading-relaxed max-w-md">
              Москва, Пресненская наб. 12 <br/>
              Башня Федерация, Офис 4302
            </p>
            <p className="text-xl text-white font-mono mt-4">
              hello@instat-esg.ru
            </p>
          </div>

          <div className="flex flex-col justify-end">
            <a 
              href="https://xn--80aa5afjdkos.xn--80appqfb.xn--p1ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-white h-[64px] px-8 rounded-full font-bold text-lg transition-all w-full md:w-auto active:scale-95 text-center"
            >
              Демо-доступ
            </a>
          </div>
        </div>

        {/* Giant Text */}
        <div className="border-t border-white/10 pt-12">
          <h1 className="text-[18vw] leading-none font-bold text-white/5 select-none text-center tracking-tighter">
            INSTAT
          </h1>
          
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-brand-400/60 text-sm font-mono">
            <p>© 2024 Instat ESG Platform. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
               <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
               <a href="#" className="hover:text-white transition-colors">TERMS</a>
               <a href="#" className="hover:text-white transition-colors">SITEMAP</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
