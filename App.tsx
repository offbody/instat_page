import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DashboardPreview } from './components/DashboardPreview';
import { AIDemo } from './components/AIDemo';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenContact = () => setIsContactModalOpen(true);
  const handleCloseContact = () => setIsContactModalOpen(false);

  return (
    <div className="bg-background min-h-screen w-full overflow-x-hidden">
      <Header onContactClick={handleOpenContact} />
      <main>
        <Hero />
        <Features />
        <DashboardPreview />
        <AIDemo />
      </main>
      <Footer onContactClick={handleOpenContact} />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={handleCloseContact} 
      />
    </div>
  );
};

export default App;