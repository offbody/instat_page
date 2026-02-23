
import React, { useState } from 'react';
import { X, CheckCircle2, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'loading' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    ogrn: '',
    phone: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStep('success');
    }, 1500);
  };

  const handleClose = () => {
    onClose();
    // Reset after animation duration
    setTimeout(() => {
      setStep('form');
      setFormData({ name: '', organization: '', ogrn: '', phone: '' });
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={handleClose}
      ></div>

      {/* Modal Card - Styled like the Demo Card in Hero */}
      <div className="relative w-full max-w-[560px] bg-[#161616] border border-white/5 rounded-[12px] p-8 md:p-12 shadow-2xl animate-reveal-up overflow-hidden">
        
        {/* Subtle Grid Decoration (Matching Demo Card) */}
        <div className="absolute top-[24px] left-[24px] opacity-40 pointer-events-none">
          <img 
            src="https://raw.githubusercontent.com/offbody/instat_page/main/media/hero/demo-grid.svg" 
            alt="Decoration" 
            className="w-5 h-5"
          />
        </div>

        <button 
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 text-white/30 hover:text-white transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="relative z-10">
          {step === 'form' && (
            <>
              <div className="mb-10">
                <h2 className="text-[32px] font-normal text-white mb-3 leading-tight tracking-tight">Связаться с нами</h2>
                <p className="text-[18px] font-normal text-white/60 leading-snug">
                  Оставьте заявку, и наш специалист свяжется с вами для обсуждения деталей проекта.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="block text-[13px] font-medium text-white/40 uppercase tracking-widest ml-1">Имя</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Иван Иванов"
                    className="w-full bg-[#0a0a0a] border border-white/5 rounded-[9px] px-5 py-4 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-white/10 text-[16px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-[13px] font-medium text-white/40 uppercase tracking-widest ml-1">Организация</label>
                    <input
                      required
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({...formData, organization: e.target.value})}
                      placeholder="ООО 'Компания'"
                      className="w-full bg-[#0a0a0a] border border-white/5 rounded-[9px] px-5 py-4 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-white/10 text-[16px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[13px] font-medium text-white/40 uppercase tracking-widest ml-1">ОГРН/ОГРНИП</label>
                    <input
                      type="text"
                      value={formData.ogrn}
                      onChange={(e) => setFormData({...formData, ogrn: e.target.value})}
                      placeholder="Опционально"
                      className="w-full bg-[#0a0a0a] border border-white/5 rounded-[9px] px-5 py-4 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-white/10 text-[16px]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[13px] font-medium text-white/40 uppercase tracking-widest ml-1">Телефон</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-[#0a0a0a] border border-white/5 rounded-[9px] px-5 py-4 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-white/10 text-[16px]"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="flex items-center justify-center h-[72px] w-full rounded-[9px] text-[20px] font-medium text-white transition-all hover:brightness-110 active:scale-[0.98] border border-white/5 shadow-[0_0_20px_rgba(4,113,255,0.1)]"
                    style={{
                      background: 'linear-gradient(90deg, #103A70 0%, #162436 100%)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    Отправить запрос
                  </button>
                  <p className="mt-6 text-[12px] text-white/30 leading-relaxed text-center">
                    Нажимая кнопку, вы соглашаетесь с <br/>
                    <span className="text-white/50 underline cursor-pointer hover:text-white transition-colors">политикой обработки персональных данных</span>
                  </p>
                </div>
              </form>
            </>
          )}

          {step === 'loading' && (
            <div className="py-24 flex flex-col items-center justify-center text-center">
              <Loader2 className="w-12 h-12 text-primary animate-spin mb-6 opacity-80" />
              <h3 className="text-[24px] font-normal text-white mb-2">Отправка...</h3>
              <p className="text-white/50">Ваш запрос обрабатывается</p>
            </div>
          )}

          {step === 'success' && (
            <div className="py-16 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-[32px] font-normal text-white mb-4 tracking-tight">Заявка принята</h3>
              <p className="text-[18px] text-white/60 mb-12 max-w-[320px] leading-snug">
                Мы получили ваше сообщение и свяжемся с вами в течение рабочего дня.
              </p>
              <button
                onClick={handleClose}
                className="h-[60px] px-12 bg-white/5 hover:bg-white/10 text-white font-medium rounded-[9px] transition-all border border-white/10"
              >
                Вернуться на сайт
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
