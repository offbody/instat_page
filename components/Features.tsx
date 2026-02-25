import React from 'react';
import { motion } from 'framer-motion';

export const Features: React.FC = () => {
  return (
    <section id="features" className="relative min-h-screen md:min-h-[800px] lg:min-h-screen w-full bg-[#191919] pt-[80px] md:pt-[100px] pb-12 px-6 md:px-[48px] overflow-hidden landscape:py-20">
      <div className="w-full flex flex-col gap-[12px]">
        
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-8 mb-8 lg:mb-0">
          
          {/* Center: Section Number & Label - Reordered for mobile */}
          <motion.div 
            className="flex items-stretch gap-6 lg:w-[20%] lg:justify-center order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <div className="w-[2px] bg-[#0066FF]"></div>
            <div className="flex flex-col gap-3 py-1">
              <span className="text-[24px] md:text-[32px] font-medium text-white leading-none">001</span>
              <span className="text-[14px] md:text-[16px] text-white/40 uppercase tracking-wider leading-none">О платформе</span>
            </div>
          </motion.div>

          {/* Left: Title */}
          <motion.div 
            className="lg:w-[40%] order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <h2 className="text-[32px] sm:text-[40px] md:text-[56px] leading-[1.1] font-normal text-white max-w-[600px]">
              Платформа Инстат
            </h2>
          </motion.div>

          {/* Right: Description */}
          <motion.div 
            className="lg:w-[35%] order-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <p className="font-sans font-normal text-[18px] md:text-[22px] leading-[1.4] text-[#808080] max-w-[640px]">
              Платформа Инстат — это цифровое решение, объединяющее все необходимые инструменты для устойчивого развития в единую экосистему данных.
            </p>
          </motion.div>
        </div>

        {/* Dashboard Visual */}
        <motion.div 
          className="w-full mt-4 lg:mt-[-40px] order-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        >
          <div className="relative overflow-hidden">
            <img 
              src="https://raw.githubusercontent.com/offbody/instat_page/main/media/features/features-visual.png" 
              alt="Интерфейс платформы Инстат" 
              className="w-full h-auto block"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
