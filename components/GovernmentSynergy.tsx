import React from 'react';
import { motion } from 'framer-motion';

interface SynergyCardProps {
  number: string;
  title: string;
  relations: Array<{ left: string; right: string }>;
  delay?: number;
}

const SynergyCard: React.FC<SynergyCardProps> = ({ number, title, relations, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
    className="relative p-6 rounded-[12px] bg-[#CCD1DD]/[0.01] border border-[#302F2F] backdrop-blur-[7.2px] flex flex-col gap-[40px] h-full"
  >
    {/* Green Badge */}
    <div className="h-[16px] px-[4px] w-fit min-w-[15px] rounded-[3px] bg-[#B3DF72] flex items-center justify-center self-start">
      <span className="text-[11px] font-[653] text-[#292A2E] uppercase leading-[16px] font-['Inter']">{number}</span>
    </div>

    <h3 className="text-[28px] md:text-[36px] lg:text-[44px] font-normal text-white leading-[1.1] tracking-tight">
      {title}
    </h3>

    <div className="flex flex-col gap-4">
      {relations.map((rel, i) => (
        <div key={i} className="flex items-center gap-2 sm:gap-4 group">
          <div className="flex-1 sm:flex-none sm:w-fit px-3 sm:px-4 py-2 sm:py-3 rounded-[12px] bg-[#282828] text-[13px] sm:text-[14px] md:text-[18px] text-white/90 text-center transition-colors group-hover:bg-[#333333]">
            {rel.left}
          </div>
          <span className="text-[#B3DF72] font-bold text-[16px] sm:text-[20px] shrink-0">=</span>
          <div className="flex-1 sm:flex-none sm:w-fit px-3 sm:px-4 py-2 sm:py-3 rounded-[12px] bg-[#282828] text-[13px] sm:text-[14px] md:text-[18px] text-white/90 text-center transition-colors group-hover:bg-[#333333]">
            {rel.right}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export const GovernmentSynergy: React.FC = () => {
  return (
    <section id="goverment" className="relative w-full bg-[#191919] pt-[48px] md:pt-[64px] pb-[50px] md:pb-[80px] px-6 md:px-[48px]">
      <div className="relative z-10 w-full flex flex-col gap-16 md:gap-24">
        
        {/* Header 004 */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
          {/* Center: Section Number & Title (Mobile) */}
          <motion.div 
            className="flex items-stretch gap-6 lg:w-[20%] lg:justify-center order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <div className="w-[2px] bg-[#0066FF]"></div>
            <div className="flex flex-col gap-3 md:gap-5 py-1">
              <span className="text-[24px] md:text-[32px] font-medium text-white leading-none">004</span>
              <span className="text-[14px] md:text-[16px] text-white/40 uppercase tracking-wider leading-none">Для государства</span>
              
              {/* Title for Mobile/Tablet */}
              <h2 className="lg:hidden text-[32px] sm:text-[44px] md:text-[56px] leading-[1.1] font-normal text-white tracking-tight mt-4">
                <span className="italic">Синергия приоритетов</span> бизнеса и государства
              </h2>
            </div>
          </motion.div>

          {/* Left: Title (Desktop Only) */}
          <motion.div 
            className="hidden lg:block lg:w-[40%] order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <h2 className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-[1.1] font-normal text-white tracking-tight lg:max-w-[700px]">
              <span className="italic">Синергия приоритетов</span> бизнеса и государства
            </h2>
          </motion.div>

          {/* Right: Description */}
          <motion.div 
            className="lg:w-[35%] order-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <p className="font-sans font-normal text-[18px] md:text-[22px] leading-[1.4] text-[#808080]">
              Приоритеты субъектов бизнеса и государства взаимосвязаны. Государство формирует стратегические ориентиры развития - экономический рост, повышение благосостояния граждан, технологический суверенитет, устойчивость финансовой системы и пр. В свою очередь, бизнес напрямую заинтересован в предсказуемой и стабильной государственной политике, развитой инфраструктуре, доступе к финансированию и защите прав собственности.
            </p>
          </motion.div>
        </div>

        {/* Synergy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SynergyCard 
            number="01"
            title="Экономическое развитие и технологический суверенитет"
            relations={[
              { left: "Рост ВВП и налоговой базы", right: "Рост прибыли и капитализации" },
              { left: "Технологический суверенитет", right: "Расширение рынков" },
              { left: "Развитие стратегических отраслей", right: "Повышение производительности" },
              { left: "Развитие инфраструктуры", right: "Снижение издержек" }
            ]}
            delay={0.1}
          />
          <SynergyCard 
            number="02"
            title="Общественное развитие и социальная устойчивость"
            relations={[
              { left: "Повышение уровня жизни", right: "Доступ к квалифицированным кадрам" },
              { left: "Снижение безработицы", right: "Стабильный потребительский спрос" },
              { left: "Развитие человеческого капитала", right: "Предсказуемая социальная среда" },
              { left: "Социальная стабильность", right: "Устойчивость операционной деятельности" }
            ]}
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};
