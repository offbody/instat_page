import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-end px-[48px] pb-[48px] overflow-hidden bg-background">
      
      {/* Background Image with Zoom-out and Fade-in - Fixed URL to raw content */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-0 animate-zoom-out"
        style={{ backgroundImage: `url('https://raw.githubusercontent.com/offbody/instat_page/main/media/hero/hero-bg.png')` }}
      ></div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-end justify-between gap-12">
        
        {/* Left: Text Block with Staggered Fade-Up */}
        <div className="flex flex-col items-start gap-[24px] lg:w-1/2 pb-4">
          <h1 className="text-[56px] leading-[1.1] font-normal text-white max-w-[800px] opacity-0 animate-reveal-up" style={{ animationDelay: '0.4s' }}>
            Платформа для управления устойчивым развитием и митигацией Инстат
          </h1>
          <p className="text-[22px] font-medium text-white/80 leading-[1.4] max-w-[838px] opacity-0 animate-reveal-up" style={{ animationDelay: '0.6s' }}>
            Разрабатываем решение для автоматизации управления устойчивым развитием компаний, прогнозирования рисков, и формирования нефинансовой отчётности по госстандартам на базе AI-аналитики
          </p>
        </div>

        {/* Right: Demo Card with Scale-in */}
        <div className="lg:w-1/2 flex justify-end opacity-0 animate-scale-in" style={{ animationDelay: '0.9s' }}>
          <div className="w-full max-w-[898px] h-[315px] bg-[#161616] rounded-[12px] flex flex-col relative overflow-hidden p-[24px]">
            
            {/* Grid Icon */}
            <div className="absolute top-[24px] left-[24px] z-20">
              <img 
                src="https://raw.githubusercontent.com/offbody/instat_page/main/media/hero/demo-grid.svg" 
                alt="Grid decoration" 
                className="w-6 h-6 opacity-80"
              />
            </div>

            <div className="flex flex-row justify-between w-full h-[180px]">
              {/* Card Text Content */}
              <div className="flex flex-col gap-3 mt-14 pl-2 z-20">
                <h3 className="text-[44px] font-normal text-white leading-tight tracking-tight">Демо-доступ</h3>
                <p className="text-[20px] font-normal text-white/80 max-w-[420px] leading-snug">
                  Ознакомьтесь с базовым функционалом платформы в один клик
                </p>
              </div>

              {/* Dashboard Preview Image - Positioned as in the user-provided screenshot */}
              <div className="absolute top-0 right-[-10%] h-full w-[65%] pointer-events-none z-10">
                <img 
                  src="https://raw.githubusercontent.com/offbody/instat_page/main/media/hero/demo-img.png" 
                  alt="Dashboard preview" 
                  className="h-full w-full object-cover object-left opacity-90"
                />
                {/* Narrower gradient to improve visibility of the interface image */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#161616] to-transparent w-[25%]"></div>
              </div>
            </div>

            {/* Glassmorphism Button - Solid Blue with subtle glow */}
            <div className="mt-auto relative z-30">
              <a 
                href="https://xn--80aa5afjdkos.xn--80appqfb.xn--p1ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-[72px] w-full rounded-[9px] text-[20px] font-medium text-white transition-all hover:brightness-110 active:scale-[0.98] border border-white/5 shadow-[0_0_20px_rgba(4,113,255,0.15)]"
                style={{
                  background: 'linear-gradient(90deg, #103A70 0%, #162436 100%)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                Демо-доступ к платформе Инстат
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};