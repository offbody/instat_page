
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DashboardPreview } from './components/DashboardPreview';
import { AIDemo } from './components/AIDemo';
import { Footer } from './components/Footer';
// import { ContactModal } from './components/ContactModal';

const App: React.FC = () => {
  // Form is currently in reserve
  // const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  // const openContactModal = () => setIsContactModalOpen(true);
  // const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="bg-background min-h-screen w-full overflow-x-hidden">
      <Header onContactClick={() => {}} />
      <main>
        <Hero />
        <Features />
        <DashboardPreview />
        <AIDemo />
      </main>
      <Footer onContactClick={() => {}} />
      
      {/* Contact Form Modal - Reserved for later use */}
      {/* 
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
      /> 
      */}
    </div>
  );
};

export default App;
