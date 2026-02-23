import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Modules } from './components/Modules';
import { BusinessSection } from './components/BusinessSection';
import { GovernmentSynergy } from './components/GovernmentSynergy';
import { Contacts } from './components/Contacts';
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
        <Modules />
        <BusinessSection />
        <GovernmentSynergy />
        <Contacts />
      </main>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={handleCloseContact} 
      />
    </div>
  );
};

export default App;