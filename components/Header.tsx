
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'О платформе', id: 'features' },
    { name: 'Инструменты', id: 'analytics' },
    { name: 'Для бизнеса', id: 'business' },
    { name: 'Для государства', id: 'goverment' },
    { name: 'Связь с нами', id: 'contacts' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

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
      <nav 
        className="absolute top-0 left-0 w-full z-[100] px-6 md:px-[48px] py-4 md:py-6 flex justify-between items-center text-white bg-transparent"
      >
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="https://raw.githubusercontent.com/offbody/instat_page/main/media/instat-logo.svg" 
            alt="Инстат" 
            className="h-7 md:h-8 w-auto"
          />
        </div>

        {/* Navigation - Desktop (Middle) */}
        <div className="hidden lg:flex items-center gap-[40px] absolute left-1/2 -translate-x-1/2">
          {menuItems.map((item) => (
            <a 
              key={item.name}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-[14px] font-medium tracking-wide text-white/70 hover:text-white transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right: Menu Toggle */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col gap-1.5 items-end group p-2" 
            aria-label="Открыть меню"
          >
            <div className="w-6 h-0.5 bg-white transition-all group-hover:w-4"></div>
            <div className="w-6 h-0.5 bg-white transition-all group-hover:w-6"></div>
          </button>
        </div>
      </nav>

      {/* Floating Burger Menu (Visible on Scroll) */}
      <div 
        className={`fixed top-6 right-6 md:right-[48px] z-[110] transition-all duration-500 transform ${
          scrolled && !isMenuOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-10 opacity-0 scale-90 pointer-events-none'
        }`}
      >
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center gap-1 group transition-all hover:bg-white/20"
          aria-label="Открыть меню"
        >
          <div className="w-5 h-0.5 bg-white transition-all group-hover:w-3"></div>
          <div className="w-5 h-0.5 bg-white transition-all group-hover:w-5"></div>
        </button>
      </div>

      {/* Full-screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-background transform transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] overflow-hidden ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Subtle Background Grid Texture */}
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>

        {/* Large Subtle Background Logo */}
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
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`group block text-4xl md:text-7xl font-normal text-white tracking-tighter transition-all duration-500 hover:pl-4 ${
                  isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              >
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Demo Access Button in Menu - Positioned bottom right on desktop */}
          <div 
            className={`mt-12 lg:mt-0 lg:absolute lg:bottom-16 lg:right-[48px] transition-all duration-700 delay-500 z-30 ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a 
              href="https://xn--80aa5afjdkos.xn--80appqfb.xn--p1ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-[60px] md:h-[72px] px-8 rounded-[9px] bg-[#0066FF]/[0.12] backdrop-blur-[10px] border border-white/5 transition-all hover:bg-[#0066FF]/[0.18] group"
            >
              <span className="font-['Inter_Tight'] font-medium text-[18px] md:text-[24px] text-white">
                Демо-доступ к платформе
              </span>
            </a>
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
          </div>
        </div>
      </div>
    </>
  );
};
