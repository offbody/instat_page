import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header onContactClick={() => {}} />

      <main>
        <Hero />
        <DashboardPreview />
      </main>
    </div>
  );
};

export default App;
