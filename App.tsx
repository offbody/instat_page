import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

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