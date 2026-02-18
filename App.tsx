import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="bg-background min-h-screen w-full overflow-hidden">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;