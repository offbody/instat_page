import React from 'react';
import { motion } from 'framer-motion';

interface QuoteCardProps {
  text: React.ReactNode;
  author: string;
  className?: string;
  textClassName?: string;
  authorClassName?: string;
  delay?: number;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ text, author, className, textClassName, authorClassName, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className={`p-6 md:p-8 rounded-[12px] bg-[rgba(77,148,255,0.04)] backdrop-blur-[7.2px] border border-white/5 flex flex-col justify-between gap-6 ${className}`}
  >
    <p className={`font-normal text-white tracking-tight ${textClassName || 'text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-[1.3]'}`}>
      {text}
    </p>
    <span className={`text-[#808080] font-normal tracking-wider ${authorClassName || 'text-[14px] md:text-[16px]'}`}>
      {author}
    </span>
  </motion.div>
);

interface FeatureCardProps {
  number: string;
  title: React.ReactNode;
  items: string[];
  className?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ number, title, items, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
    className={`relative p-6 rounded-[12px] bg-[#CCD1DD]/[0.01] border border-[#302F2F] backdrop-blur-[7.2px] flex flex-col gap-[40px] ${className}`}
  >
    {/* Green Badge */}
    <div className="h-[16px] px-[4px] w-fit min-w-[15px] rounded-[3px] bg-[#B3DF72] flex items-center justify-center self-start">
      <span className="text-[11px] font-[653] text-[#292A2E] uppercase leading-[16px] font-['Inter']">{number}</span>
    </div>

    <h3 className="text-[28px] md:text-[36px] lg:text-[44px] font-normal text-white leading-[1.1] tracking-tight">
      {title}
    </h3>

    <ul className="flex flex-col gap-4 mt-auto">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-[18px] md:text-[22px] text-white/80 leading-[1.4]">
          <span className="text-[#B3DF72]">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export const BusinessSection: React.FC = () => {
  return (
    <section id="business" className="relative w-full bg-[#191919] pt-[40px] md:pt-[60px] pb-[48px] md:pb-[64px] px-6 md:px-[48px]">
      {/* Background Map Pattern */}
      <motion.div 
        className="absolute left-1/2 -translate-x-1/2 w-[1440px] h-[816px] pointer-events-none z-0"
        style={{
          top: '510px',
          backgroundImage: 'url("https://raw.githubusercontent.com/offbody/instat_page/main/media/incentives/ru-map.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      <div className="relative z-10 w-full flex flex-col gap-24 md:gap-32">
        {/* Quotes Part */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Quote 1 - Large Top Left */}
            <QuoteCard 
              className="md:col-span-4 md:row-span-2"
              textClassName="font-['Inter_Tight'] text-[24px] sm:text-[32px] lg:text-[40px] lg:leading-[48px]"
              authorClassName="text-[18px] md:text-[24px]"
              text={<>“Все нацпроекты увязаны между собой ключевой целью — <strong>обеспечение устойчивого развития</strong> страны и укрепление ее суверенитета.”</>}
              author="Владимир Владимирович Путин"
              delay={0.1}
            />

            {/* Quote 2 - Top Right */}
            <QuoteCard 
              className="md:col-span-8"
              text={<>“Российской Федерации придется столкнуться с рядом вызовов, формирующих как ограничения, так и новые возможности для развития. <strong>Национальные цели развития отвечают на эти вызовы</strong>.”</>}
              author="Единый план по достижению национальных целей развития РФ"
              delay={0.2}
            />

            {/* Quote 3 - Middle Left (Below 2) */}
            <QuoteCard 
              className="md:col-span-4"
              text={<>“Применение рекомендаций СОКБ носит добровольный характер, но они уже <strong>служат прототипом будущего национального стандарта,</strong> учитывающего особенности РФ”</>}
              author="РБК Компании"
              delay={0.3}
            />

            {/* Quote 4 - Middle Right (Below 2) */}
            <QuoteCard 
              className="md:col-span-4 md:row-span-2"
              textClassName="font-['Inter_Tight'] text-[24px] sm:text-[32px] lg:text-[40px] lg:leading-[48px]"
              authorClassName="text-[18px] md:text-[24px]"
              text={<>“К 2027 году не менее 10 тысяч российских компаний <strong>должны внедрить Стандарт общественного капитала Бизнеса</strong>.”</>}
              author="Министерство Экономического Развития Российской Федерации"
              delay={0.5}
            />

            {/* Quote 5 - Bottom Left */}
            <QuoteCard 
              className="md:col-span-8"
              text={<>“Приоритетом для России становится <strong>ориентация повестки устойчивого развития на национальный контекст</strong> — то есть адаптация международных подходов с учетом национальных особенностей, целей и приоритетов.”</>}
              author="Банк России"
              delay={0.4}
            />
          </div>
        </div>

        {/* Features Part */}
        <div className="flex flex-col gap-16 md:gap-24">
          {/* Header 003 */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
            {/* Left: Section Number */}
            <motion.div 
              className="flex items-stretch gap-6 lg:w-[20%]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <div className="w-[2px] bg-[#0066FF]"></div>
              <div className="flex flex-col gap-3 md:gap-5 py-1">
                <span className="text-[24px] md:text-[32px] font-medium text-white leading-none">003</span>
                <span className="text-[14px] md:text-[16px] text-white/40 uppercase tracking-wider leading-none">Для бизнеса</span>
              </div>
            </motion.div>

            {/* Center: Description */}
            <motion.div 
              className="lg:w-[35%]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <p className="font-sans font-normal text-[18px] md:text-[20px] leading-[1.4] text-[#808080] max-w-[640px]">
                Анкетирование и участие в ЭКГ-рейтинге, а так же анкетирование и периодическая аттестация по СОКБ открывают для бизнеса доступ к финансовым и нефинансовым мерам поддержки, которые постоянно расширяются. Ниже приведены некоторые из них:
              </p>
            </motion.div>

            {/* Right: Title */}
            <motion.div 
              className="lg:w-[40%] lg:text-right"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            >
              <h2 className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-[1.1] font-normal text-white tracking-tight lg:max-w-[700px] lg:ml-auto">
                <span className="italic">Стимулы</span> для крупного бизнеса и МСП
              </h2>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch">
            <FeatureCard 
              number="01"
              className="lg:w-[490px] shrink-0"
              title="Привилегии в госзакупках"
              items={[
                "Используется крупнейшими электронными площадками (Сбербанк-АСТ, РТС-тендер и др.).",
                "ФАС рекомендует учитывать рейтинг в тендерах."
              ]}
              delay={0.1}
            />
            <FeatureCard 
              number="02"
              className="flex-1"
              title={<>Финансовые <br /> меры поддержки</>}
              items={[
                "Инвестиционный налоговый вычет: до 8% по налогу на прибыль;",
                "Снижение предельной ставки до 5%;",
                "Увеличение компенсации до 90%.",
                "Льготные займы: от 1% до 3% годовых через региональные фонды развития промышленности."
              ]}
              delay={0.2}
            />
            <FeatureCard 
              number="03"
              className="lg:w-[490px] shrink-0"
              title="Региональные меры поддержки"
              items={[
                "Прямое включение в меры региональной поддержки (на основании принятых законов в 13+ регионах ЦФО).",
                "Присвоение статуса «ответственного бизнеса», доступ к преференциям без ухудшения условий для остальных."
              ]}
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
