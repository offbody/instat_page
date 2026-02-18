
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'О платформе', href: '#features' },
    { name: 'Инструменты', href: '#analytics' },
    { name: 'Для бизнеса', href: '#ai-demo' },
    { name: 'Для государства', href: '#' },
  ];

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-[48px] py-8 md:py-10 flex justify-between items-center text-white opacity-0 animate-reveal-down">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="https://raw.githubusercontent.com/offbody/instat_page/main/media/instat-logo.svg" 
            alt="Инстат" 
            className="h-8 w-auto"
          />
        </div>

        {/* Navigation - Desktop (Middle) */}
        <div className="hidden lg:flex items-center gap-[40px] absolute left-1/2 -translate-x-1/2">
          {menuItems.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className="text-[15px] font-medium tracking-wide text-white/70 hover:text-white transition-all duration-300 hover:translate-y-[-1px]"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Menu Toggle */}
        <div className="flex items-center">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col gap-2 items-end group p-2" 
            aria-label="Открыть меню"
          >
            <div className="w-8 h-0.5 bg-white transition-all group-hover:w-6"></div>
            <div className="w-8 h-0.5 bg-white transition-all group-hover:w-8"></div>
          </button>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-background transform transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] overflow-hidden ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Subtle Background Grid Texture */}
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>

        {/* Large Subtle Background Logo - Fixed rotation and positioning */}
        <div className={`absolute bottom-[-5%] right-[-5%] w-[60%] md:w-[40%] opacity-[0.04] pointer-events-none select-none z-0 transition-all duration-1000 delay-300 ${isMenuOpen ? 'translate-y-0 opacity-[0.04]' : 'translate-y-10 opacity-0'}`}>
          <img 
            src="https://raw.githubusercontent.com/offbody/instat_page/main/media/instat-favicon.svg" 
            alt="" 
            className="w-full h-auto"
          />
        </div>

        <div className="h-full relative z-10 flex flex-col px-6 md:px-[48px] py-8 md:py-10">
          {/* Menu Header */}
          <div className="flex justify-between items-center mb-16 md:mb-20">
            <img 
              src="https://raw.githubusercontent.com/offbody/instat_page/main/media/instat-logo.svg" 
              alt="Инстат" 
              className="h-8 w-auto"
            />
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-white/50 hover:text-white transition-colors"
              aria-label="Закрыть меню"
            >
              <X size={40} strokeWidth={1.5} />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col gap-6 md:gap-10">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`group block text-4xl md:text-7xl font-normal text-white tracking-tighter transition-all duration-500 hover:pl-4 ${
                  isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              >
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Menu Footer */}
          <div className="mt-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pb-8 relative z-20">
            <div className="space-y-4">
              <p className="text-white/40 font-mono text-sm tracking-widest uppercase">Контакты</p>
              <a 
                href="mailto:platforma@инстат.рф" 
                className="text-xl md:text-2xl text-white font-medium hover:text-primary transition-colors block"
              >
                platforma@инстат.рф
              </a>
            </div>
            
            <a 
              href="https://xn--80aa5afjdkos.xn--80appqfb.xn--p1ai/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center px-12 h-[72px] rounded-[9px] text-[20px] font-medium text-white transition-all hover:brightness-110 active:scale-[0.98] border border-white/5 shadow-[0_0_20px_rgba(4,113,255,0.15)]"
              style={{
                background: 'linear-gradient(90deg, #103A70 0%, #162436 100%)',
                backdropFilter: 'blur(10px)',
              }}
            >
              Демо-доступ к платформе
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
