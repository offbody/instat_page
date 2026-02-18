import React from 'react';

export const Header: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-[48px] py-10 flex justify-between items-center text-white opacity-0 animate-reveal-down">
      {/* Logo */}
      <div className="flex items-center">
        <img 
          src="https://raw.githubusercontent.com/offbody/instat_page/main/media/instat-logo.svg" 
          alt="Инстат" 
          className="h-8 w-auto"
        />
      </div>

      {/* Navigation - Hidden as per user request to remove other screens */}
      <div className="hidden md:flex items-center gap-[40px]">
      </div>

      {/* Burger Menu */}
      <button className="flex flex-col gap-2.5 items-end group" aria-label="Меню">
        <div className="w-12 h-0.5 bg-white transition-all group-hover:w-10"></div>
        <div className="w-12 h-0.5 bg-white transition-all group-hover:w-12"></div>
      </button>
    </nav>
  );
};