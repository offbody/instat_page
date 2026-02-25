import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen min-h-[100svh] w-full flex flex-col justify-end px-6 md:px-[48px] pb-10 md:pb-[48px] overflow-hidden bg-background landscape:py-20">
      
      {/* Background Image with Zoom-out and Fade-in */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat animate-zoom-out"
        style={{ backgroundImage: `url('https://raw.githubusercontent.com/offbody/instat_page/main/media/hero/hero-bg.png')` }}
      ></div>

      {/* Dark overlay for better readability on mobile */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-background via-transparent to-transparent md:hidden"></div>

      <div className="relative z-[70] w-full flex flex-col xl:flex-row items-end justify-between gap-10 md:gap-12">
        
        {/* Left: Text Block with Staggered Fade-Up */}
        <div className="flex flex-col items-start gap-4 md:gap-[24px] xl:w-1/2 pb-4 animate-reveal-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] md:leading-[1.05] font-normal text-white max-w-[800px]">
            <span className="md:hidden">Платформа для управления устойчивым развитием</span>
            <span className="hidden md:inline">Платформа для управления устойчивым развитием и митигацией</span>
          </h1>
          <p className="text-[16px] md:text-[18px] lg:text-[22px] font-normal md:font-medium text-white/80 leading-[1.4] max-w-[838px]">
            <span className="md:hidden">Цифровое решение для управления устойчивым развитием бизнеса</span>
            <span className="hidden md:inline">Разрабатываем решение для автоматизации управления устойчивым развитием компаний, прогнозирования рисков, и формирования нефинансовой отчётности по госстандартам на базе AI-аналитики</span>
          </p>
        </div>

        {/* Right: Demo Card with Scale-in */}
        <div className="w-full xl:w-1/2 flex justify-end">
          <motion.div 
            className="w-full max-w-[898px] lg:h-[360px] bg-[#202020] rounded-[12px] flex flex-col relative overflow-hidden p-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Dashboard Preview Image (Aligned Top Right) */}
            <div className="absolute top-6 right-6 w-[80%] h-auto pointer-events-none z-0">
              <img 
                src="https://raw.githubusercontent.com/offbody/instat_page/main/media/contacts/dashboard-preview.png" 
                alt="" 
                className="w-full h-auto object-contain object-right-top"
                loading="lazy"
              />
            </div>

            {/* Main Content Section (Текст+Кнопка+Карточка) */}
            <div className="relative z-10 w-full flex-1 flex flex-col justify-between items-start gap-5">
              {/* Grid Icon */}
              <div className="flex-none">
                <img 
                  src="https://raw.githubusercontent.com/offbody/instat_page/main/media/hero/demo-grid.svg" 
                  alt="" 
                  className="w-[36px] h-[36px]"
                  loading="lazy"
                />
              </div>

              {/* Title + Description + Button Section (Заголовок+Описание+Кнопка) */}
              <div className="flex flex-col items-start gap-5 w-full mt-auto">
                <div className="flex flex-col gap-2">
                  <h3 className="font-['Inter_Tight'] font-normal text-[24px] sm:text-[32px] leading-tight text-white w-full">
                    Демо-доступ
                  </h3>
                  <p className="font-['Inter_Tight'] font-medium text-[16px] sm:text-[20px] leading-snug text-white w-full max-w-[414px]">
                    Ознакомьтесь с базовым функционалом платформы в один клик
                  </p>
                </div>
                
                {/* Button */}
                <a 
                  href="https://xn--80aa5afjdkos.xn--80appqfb.xn--p1ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-[60px] sm:h-[72px] p-3 rounded-[9px] bg-[#0066FF]/[0.12] backdrop-blur-[10px] transition-all hover:bg-[#0066FF]/[0.18] group"
                >
                  <span className="font-['Inter_Tight'] font-medium text-[16px] sm:text-[20px] leading-[24px] text-white">
                    Демо-доступ к платформе Инстат
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};