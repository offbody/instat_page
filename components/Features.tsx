import React from 'react';
import { motion } from 'framer-motion';

export const Features: React.FC = () => {
  return (
    <section 
      id="features" 
      className="relative w-full bg-[#191919] pt-[104px] pb-[48px] px-6 md:px-[48px] overflow-hidden"
    >
      {/* Background Dashboard Image (Desktop Only) */}
      <div className="hidden lg:block absolute top-[136px] left-[48px] right-[48px] z-0 pointer-events-none">
        <motion.img 
          src="https://raw.githubusercontent.com/offbody/instat_page/main/media/platform/platform-preview.png" 
          alt="" 
          className="w-full h-auto"
          initial={{ opacity: 0, scale: 1.05, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col gap-12 lg:gap-0">
        
        {/* Header Section: 3 Columns on Desktop, Vertical Stack on Mobile/Tablet */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-8 lg:gap-0">
          
          {/* Column 1: Title (Order 2 on Mobile/Tablet) */}
          <motion.div 
            className="order-2 lg:order-1 lg:w-[30%]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-['Inter_Tight'] font-normal text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] text-white">
              О платформе
            </h2>
          </motion.div>

          {/* Column 2: Indicator (Order 1 on Mobile/Tablet) */}
          <motion.div 
            className="order-1 lg:order-2 lg:w-[20%] flex lg:justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="flex items-stretch gap-6">
              <div className="w-[2px] bg-[#0066FF]"></div>
              <div className="flex flex-col gap-3 py-1">
                <span className="font-['Inter_Tight'] font-medium text-[24px] md:text-[32px] text-white leading-none">001</span>
                <span className="font-['Inter_Tight'] text-[14px] md:text-[16px] text-white/40 uppercase tracking-wider leading-none">О платформе</span>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Description (Order 3 on Mobile/Tablet) */}
          <motion.div 
            className="order-3 lg:order-3 lg:w-[40%] lg:flex lg:justify-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <p className="font-['Inter_Tight'] font-normal text-[18px] md:text-[22px] leading-[1.4] text-[#808080] lg:max-w-[640px]">
              Платформа Инстат — это цифровое решение, объединяющее инструменты для анализа, управления и прогноза устойчивого развития бизнеса в единую экосистему.
            </p>
          </motion.div>
        </div>

        {/* Dashboard Visual for Mobile/Tablet (Visible only below LG) */}
        <motion.div 
          className="lg:hidden w-full mt-4"
          initial={{ opacity: 0, scale: 1.05, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <img 
            src="https://raw.githubusercontent.com/offbody/instat_page/main/media/platform/platform-preview.png" 
            alt="Интерфейс платформы Инстат" 
            className="w-full h-auto"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </motion.div>

        {/* Invisible image to set the section height based on the dashboard image aspect ratio */}
        <div className="hidden lg:block w-full pointer-events-none">
          <img 
            src="https://raw.githubusercontent.com/offbody/instat_page/main/media/platform/platform-preview.png" 
            alt="" 
            className="w-full h-auto opacity-0"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};
