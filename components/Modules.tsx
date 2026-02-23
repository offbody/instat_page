import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ModuleProps {
  title: string;
  description: string;
  image: string;
  sources?: string;
  scenario?: string;
  techStack: string[];
  index: number;
}

const Module: React.FC<ModuleProps> = ({ title, description, image, sources, scenario, techStack, index }) => {
  return (
    <motion.div 
      className="flex flex-col gap-6 md:gap-8 lg:gap-10"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
    >
      {/* 1. Title */}
      <h3 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-normal text-white leading-[1.2] lg:leading-[64px] tracking-tight max-w-[700px] whitespace-pre-line">
        {title}
      </h3>

      {/* 2. Image Preview */}
      <div className="relative group overflow-hidden rounded-xl border border-white/5 bg-[#161616]">
        <img 
          src={image} 
          alt={title.replace('\n', ' ')} 
          className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* 3. Subtitle */}
      <h4 className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] font-normal text-white leading-[1.3] lg:leading-[39px] tracking-tight max-w-[860px] whitespace-pre-line">
        {description}
      </h4>

      {/* 4. Description */}
      <div className="flex flex-col gap-4 md:gap-6 max-w-[690px]">
        {sources && (
          <div className="flex flex-col gap-2">
            <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-normal text-[#808080] leading-[1.3] lg:leading-[27px]">Источники собираемых данных:</span>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-normal text-[#808080] leading-[1.3] lg:leading-[27px] whitespace-pre-line">
              {sources}
            </p>
          </div>
        )}

        {scenario && (
          <div className="flex flex-col gap-3 md:gap-4">
            <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-normal text-[#808080] leading-[1.3] lg:leading-[27px]">Логический сценарий:</span>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-normal text-[#808080] leading-[1.3] lg:leading-[27px] whitespace-pre-line">
              {scenario}
            </p>
          </div>
        )}
      </div>

      {/* 5. Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-2">
        {techStack.map((tech) => (
          <span 
            key={tech}
            className="px-2 md:px-3 py-1 md:py-1.5 rounded-md border border-white/10 bg-white/5 text-[10px] md:text-[12px] font-mono text-white/60 uppercase tracking-wider hover:border-primary/50 hover:text-white transition-colors cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export const Modules: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section 
      id="analytics" 
      ref={containerRef}
      className="relative w-full bg-[#191919] pt-[40px] md:pt-[120px] pb-[50px] md:pb-[80px] px-6 md:px-[48px] overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute top-[300px] right-6 md:right-[48px] w-[200px] md:w-[434px] h-[176px] md:h-[383px] pointer-events-none select-none z-0"
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundColor: '#888888',
            maskImage: 'url("https://raw.githubusercontent.com/offbody/instat_page/main/media/analytics/instat-element.svg")',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskImage: 'url("https://raw.githubusercontent.com/offbody/instat_page/main/media/analytics/instat-element.svg")',
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat'
          }}
        />
      </motion.div>

      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]) }}
        className="absolute bottom-0 left-6 md:left-[48px] w-[200px] md:w-[434px] h-[176px] md:h-[383px] pointer-events-none select-none z-0"
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundColor: '#888888',
            maskImage: 'url("https://raw.githubusercontent.com/offbody/instat_page/main/media/analytics/instat-element.svg")',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskImage: 'url("https://raw.githubusercontent.com/offbody/instat_page/main/media/analytics/instat-element.svg")',
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat'
          }}
        />
      </motion.div>

      <div className="relative z-10 w-full">
        {/* Mobile Header: Number -> Title -> Subtitle */}
        <div className="flex flex-col lg:hidden mb-16 md:mb-24 gap-8">
          {/* Number */}
          <motion.div 
            className="flex items-stretch gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-[2px] bg-[#0066FF]"></div>
            <div className="flex flex-col gap-3 py-1">
              <span className="text-[24px] md:text-[32px] font-medium text-white leading-none">002</span>
              <span className="text-[14px] md:text-[16px] text-white/40 uppercase tracking-wider leading-none whitespace-nowrap">Инструменты</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2 
            className="text-[32px] sm:text-[40px] md:text-[56px] leading-[1.1] font-normal text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            Модули и инструменты
          </motion.h2>

          {/* Subtitle (Intro Text) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <p className="font-sans font-normal text-[18px] md:text-[22px] leading-[1.4] text-[#808080] max-w-[640px]">
              В первых версиях Платформы Инстат мы разрабатываем базовые инструменты для формирования статистики и метрик устойчивого развития бизнеса по тем KPI's, которые отображены в методологии основных государственных стандартов оценки ответственного бизнеса — Стандарта общественного капитала бизнеса, ЭКГ-рейтинга и пр. На базе этих метрик искусственный интеллект прогнозирует устойчивое развитие на следующий отчётный период
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[80px] gap-y-[100px]">
          
          {/* Left Column (Desktop) / All Cards (Mobile) */}
          <div className="flex flex-col gap-[100px] md:gap-[160px] lg:gap-0">
            {/* Intro Text (Desktop Only) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block lg:mb-[120px]"
            >
              <p className="font-sans font-normal text-[18px] md:text-[22px] leading-[1.4] text-[#808080] max-w-[640px]">
                В первых версиях Платформы Инстат мы разрабатываем базовые инструменты для формирования статистики и метрик устойчивого развития бизнеса по тем KPI's, которые отображены в методологии основных государственных стандартов оценки ответственного бизнеса — Стандарта общественного капитала бизнеса, ЭКГ-рейтинга и пр. На базе этих метрик искусственный интеллект прогнозирует устойчивое развитие на следующий отчётный период
              </p>
            </motion.div>

            <div className="flex flex-col gap-[100px] md:gap-[160px]">
              <Module 
                index={0}
                title={"Матрица\nустойчивого развития"}
                description="Собирает и консолидирует данные бизнеса в понятные KPI's, включая национальные приоритеты РФ"
                image="https://raw.githubusercontent.com/offbody/instat_page/main/media/analytics/matrix%402x.png"
                sources={`• государственные учреждения (ФНС, ПФР и пр.),
• источники о деловой репутации (РНП, ЭКГ-рейтинг, и пр.)
• данные анкеты СОКБ, включая данные цифрового документооборота предприятия (1С:Бухгалтерия, 1С:ЗУП, 1С: ERP и т.п.), а так же прочие источники документооборота предприятия (регистры, счета, формы, справочники, табели и пр.) собранные в автоматическом и ручном режиме`}
                techStack={['CRON/AIRFLOW', 'PYTHON', 'API/ODATA/REST', 'POSTGRESQL', 'FASTAPI', 'REDIS']}
              />

              {/* Card 1 for mobile (to keep order 0, 1, 2, 3) */}
              <div className="lg:hidden">
                <Module 
                  index={1}
                  title="Аналитически-ассистирующая модель Инстат AI"
                  description="Прогнозирует результаты достижения целей развития посредством методик экстраполяционного и CAGR-анализа, создаёт отчёты с возможностью выгрузки."
                  image="https://raw.githubusercontent.com/offbody/instat_page/main/media/analytics/ai-model%402x.png"
                  sources={`• Данные матрицы устойчивости развития предприятия
• Модуль скоринга Стандарта общественного капитала бизнеса
• Внешние инструменты анализа (напр. OSINT, Scraping и пр.)`}
                  techStack={['SQLALCHEMY', 'PYTHON', 'FASTAPI', 'NUMPY/SCIPY', 'CELERY', 'AI REASONING (OPEN CLAW + QWEN)']}
                />
              </div>

              <Module 
                index={2}
                title={"Модуль анкетирования\nи скоринга по СОКБ"}
                description="Упрощает процесс сбора данных и скоринг по Стандарту Общественного Капитала Бизнеса, в том числе расчёт показателей на базе Инстат AI"
                image="https://raw.githubusercontent.com/offbody/instat_page/main/media/analytics/sokb%402x.png"
                sources={`• Цифровой документооборот предприятия (1С:Бухгалтерия, 1С:ЗУП, 1С: ERP и т.п),
• прочие источники документооборота предприятия (регистры, счета, формы, справочники, табели и пр.)`}
                techStack={['FASTAPI', 'API/ODATA/REST', 'REDIS', 'POSTGRESQL', 'AI EXTRACTOR', 'STRUCTURED OUTPUT']}
              />

              {/* Card 3 for mobile */}
              <div className="lg:hidden">
                <Module 
                  index={3}
                  title={"База экспертов\nустойчивого развития"}
                  description="Даёт возможность сквозного взаимодействия субъектам бизнеса и экспертам в сфере ESG/GRI/SASB комплаенса, верификаторам СОКБ в единой цифровой среде"
                  image="https://raw.githubusercontent.com/offbody/instat_page/main/media/analytics/experts%402x.png"
                  scenario={`• Субъект бизнеса - инициирует процедуру оценки Стандарта общественного капитала бизнеса; хочет получить услуги консалтинга по одному из KPI/направлений.

• Внешний верификатор СОКБ/Эксперт устойчивого развития - по запросу от пользователя подключается напрямую в модуль анкеты/метрики/KPI's, в двух пользовательских ролях, "Консультант" и "Модератор" с соответствующими правами.`}
                  techStack={['REDIS', 'WEBSOCKET', 'TYPESCRIPT', 'JSON']}
                />
              </div>
            </div>
          </div>

          {/* Right Column (Desktop Only) */}
          <div className="hidden lg:flex flex-col">
            {/* Section Label & Title - Aligned to intro text top */}
            <div className="flex flex-row justify-between items-start mb-[140px]">
              <motion.h2 
                className="text-[44px] sm:text-[50px] md:text-[64px] leading-[1.05] font-normal text-white max-w-[500px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                Модули и инструменты
              </motion.h2>

              <motion.div 
                className="flex items-stretch gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              >
                <div className="w-[2px] bg-[#0066FF]"></div>
                <div className="flex flex-col gap-5 py-1">
                  <span className="text-[32px] font-medium text-white leading-none">002</span>
                  <span className="text-[16px] text-white/40 uppercase tracking-wider leading-none whitespace-nowrap">Инструменты</span>
                </div>
              </motion.div>
            </div>

            {/* Shifted Right Column Cards */}
            <div className="flex flex-col gap-[100px] md:gap-[160px] mt-[218px]">
              <Module 
                index={1}
                title="Аналитически-ассистирующая модель Инстат AI"
                description="Прогнозирует результаты достижения целей развития посредством методик экстраполяционного и CAGR-анализа, создаёт отчёты с возможностью выгрузки."
                image="https://raw.githubusercontent.com/offbody/instat_page/main/media/analytics/ai-model%402x.png"
                sources={`• Данные матрицы устойчивости развития предприятия
• Модуль скоринга Стандарта общественного капитала бизнеса
• Внешние инструменты анализа (напр. OSINT, Scraping и пр.)`}
                techStack={['SQLALCHEMY', 'PYTHON', 'FASTAPI', 'NUMPY/SCIPY', 'CELERY', 'AI REASONING (OPEN CLAW + QWEN)']}
              />

              <Module 
                index={3}
                title={"База экспертов\nустойчивого развития"}
                description="Даёт возможность сквозного взаимодействия субъектам бизнеса и экспертам в сфере ESG/GRI/SASB комплаенса, верификаторам СОКБ в единой цифровой среде"
                image="https://raw.githubusercontent.com/offbody/instat_page/main/media/analytics/experts%402x.png"
                scenario={`• Субъект бизнеса - инициирует процедуру оценки Стандарта общественного капитала бизнеса; хочет получить услуги консалтинга по одному из KPI/направлений.

• Внешний верификатор СОКБ/Эксперт устойчивого развития - по запросу от пользователя подключается напрямую в модуль анкеты/метрики/KPI's, в двух пользовательских ролях, "Консультант" и "Модератор" с соответствующими правами.`}
                techStack={['REDIS', 'WEBSOCKET', 'TYPESCRIPT', 'JSON']}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
