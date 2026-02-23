import React from 'react';
import { motion } from 'framer-motion';

interface PersonProps {
  photo: string;
  name: string;
  role: string;
  email: string;
  phone: string;
}

const Person: React.FC<PersonProps> = ({ photo, name, role, email, phone }) => (
  <div className="flex flex-col p-6 gap-[32px] bg-[#282828] rounded-[12px] flex-1">
    <div className="flex flex-col gap-[24px]">
      <img src={photo} alt={name} className="w-[88px] h-[88px] rounded-full grayscale object-cover" />
      <div className="flex flex-col gap-[4px]">
        <h4 className="font-['Inter_Tight'] font-normal text-[32px] leading-[39px] text-white">{name}</h4>
        <span className="font-['Inter_Tight'] font-medium text-[16px] leading-[19px] text-[#808080]">{role}</span>
      </div>
    </div>
    <div className="w-full h-[1px] border-t border-[#7F7F7F]"></div>
    <div className="flex flex-col gap-[8px]">
      <a href={`mailto:${email}`} className="font-['Inter_Tight'] font-medium text-[20px] leading-[24px] text-[#808080] hover:text-white transition-colors">{email}</a>
      <a href={`tel:${phone.replace(/\D/g, '')}`} className="font-['Inter_Tight'] font-medium text-[20px] leading-[24px] text-[#808080] hover:text-white transition-colors">{phone}</a>
    </div>
  </div>
);

export const Contacts: React.FC = () => {
  const menuItems = [
    { name: 'О платформе', id: 'features' },
    { name: 'Инструменты', id: 'analytics' },
    { name: 'Для бизнеса', id: 'business' },
    { name: 'Для государства', id: 'goverment' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contacts" className="relative w-full bg-[#191919] pt-[100px] md:pt-[160px] pb-[60px] md:pb-[80px] px-6 md:px-[48px] overflow-hidden">
      {/* Background Decor - INSTAT Text */}
      <div className="absolute top-[48px] left-[48px] right-[48px] pointer-events-none z-0">
        <img 
          src="https://raw.githubusercontent.com/offbody/instat_page/main/media/contacts/instat-bage.png" 
          alt="" 
          className="w-full h-auto object-contain select-none"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col">
        {/* Header 005 */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-24 md:mb-32">
          {/* Left: Title */}
          <motion.div 
            className="lg:w-[45%]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-['Inter_Tight'] text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-[1.1] font-normal text-white tracking-tight max-w-[800px]">
              Ответим на вопросы о платформе, её финансовой модели и первичной интеграции
            </h2>
          </motion.div>

          {/* Center: Description */}
          <motion.div 
            className="lg:w-[35%]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <p className="font-sans font-normal text-[18px] md:text-[20px] leading-[1.4] text-[#808080] max-w-[640px]">
              Подробно объясним, как устроена полезная и финансовая модель, на чём формируется доход и какие возможности она открывает для потенциальных партнёров и пользователей; разберём процесс первичной интеграции, от технических требований и сроков подключения до практических шагов запуска.
            </p>
          </motion.div>

          {/* Right: Section Number */}
          <motion.div 
            className="flex items-stretch gap-6 lg:w-[15%] lg:justify-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="w-[2px] bg-[#0066FF]"></div>
            <div className="flex flex-col gap-3 md:gap-5 py-1">
              <span className="text-[24px] md:text-[32px] font-medium text-white leading-none">005</span>
              <span className="text-[14px] md:text-[16px] text-white/40 uppercase tracking-wider leading-none">Контакты</span>
            </div>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-stretch">
          {/* Left Card: Feedback */}
          <motion.div 
            className="relative p-6 rounded-[12px] bg-[#202020] flex flex-col gap-[40px] h-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <div className="h-[16px] px-[4px] w-fit min-w-[15px] rounded-[3px] bg-[#0066FF] flex items-center justify-center self-start">
              <span className="text-[11px] font-[653] text-white uppercase leading-[16px] font-['Inter']">ОБРАТНАЯ СВЯЗЬ</span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-[30px] w-full mt-auto">
              <Person 
                photo="https://raw.githubusercontent.com/offbody/instat_page/main/media/contacts/%D1%81eo-avatar.png"
                name="Игорь Богданов"
                role="Директор по развитию"
                email="ceo@инстат.рф"
                phone="+7 (965) 024-53-46"
              />
              <Person 
                photo="https://raw.githubusercontent.com/offbody/instat_page/main/media/contacts/cto-avatar.png"
                name="Евгений Соболев"
                role="Технический директор"
                email="cto@инстат.рф"
                phone="+7 (969) 710-68-06"
              />
            </div>
          </motion.div>

          {/* Right Card: Demo Access (New Version) */}
          <motion.div 
            className="relative p-6 rounded-[12px] bg-[#202020] flex flex-col h-full overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Dashboard Preview Image (Aligned Top Right) */}
            <div className="absolute top-6 right-6 w-[80%] h-auto pointer-events-none z-0">
              <img 
                src="https://raw.githubusercontent.com/offbody/instat_page/main/media/contacts/dashboard-preview.png" 
                alt="" 
                className="w-full h-auto object-contain object-right-top"
              />
              {/* Subtle gradient to ensure text readability if needed, but user asked to remove previous gradient. 
                  However, a small fade might be needed if the image is too bright. 
                  The user said "убери градиент" in the previous turn, so I'll keep it clean. */}
            </div>

            {/* Main Content Section (Текст+Кнопка+Карточка) */}
            <div className="relative z-10 w-full flex-1 flex flex-col justify-between items-start gap-5">
              {/* Grid Icon */}
              <div className="flex-none">
                <img 
                  src="https://raw.githubusercontent.com/offbody/instat_page/main/media/hero/demo-grid.svg" 
                  alt="" 
                  className="w-[36px] h-[36px]"
                />
              </div>

              {/* Title + Description + Button Section (Заголовок+Описание+Кнопка) */}
              <div className="flex flex-col items-start gap-5 w-full mt-auto">
                <div className="flex flex-col gap-2">
                  <h3 className="font-['Inter_Tight'] font-normal text-[32px] leading-[39px] text-white w-full">
                    Демо-доступ
                  </h3>
                  <p className="font-['Inter_Tight'] font-medium text-[20px] leading-[24px] text-white w-full max-w-[414px]">
                    Ознакомьтесь с базовым функционалом платформы в один клик
                  </p>
                </div>
                
                {/* Button */}
                <a 
                  href="https://xn--80aa5afjdkos.xn--80appqfb.xn--p1ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-[72px] p-3 rounded-[9px] bg-[#0066FF]/[0.12] backdrop-blur-[10px] transition-all hover:bg-[#0066FF]/[0.18] group"
                >
                  <span className="font-['Inter_Tight'] font-medium text-[20px] leading-[24px] text-white">
                    Демо-доступ к платформе Инстат
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-[100px] md:mt-[120px] flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 pt-8 border-t border-white/5">
          {/* Legal Info */}
          <div className="flex flex-col gap-2 max-w-[800px]">
            <p className="font-['Inter_Tight'] font-medium text-[22px] leading-[27px] text-[#808080]">
              © 2026 Общество с ограниченной ответственностью «РУИКС».<br />
              Все права защищены. Любое использование материалов возможно только с письменного разрешения правообладателя.
            </p>
          </div>

          {/* Navigation Menu */}
          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            {menuItems.map((item) => (
              <a 
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="font-['Inter_Tight'] font-medium text-[22px] leading-[27px] text-[#808080] hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};
