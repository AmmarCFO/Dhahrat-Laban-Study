import React from 'react';

const Header: React.FC<{ 
    onToggleLanguage: () => void;
    onOpenCompSet: () => void;
}> = ({ onToggleLanguage, onOpenCompSet }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
             <span className="text-3xl font-extrabold text-[#4A2C5A] tracking-tight">Mathwaa</span>
          </div>
          <div className="flex items-center gap-3">
             <button 
                onClick={onOpenCompSet}
                className="px-4 py-2 text-sm font-bold text-[#4A2C5A] bg-white border border-[#4A2C5A]/10 rounded-lg hover:bg-[#F5F5F7] hover:border-[#4A2C5A]/30 transition-all shadow-sm"
              >
                Comparison Set
              </button>
              <div className="w-[1px] h-6 bg-gray-200"></div>
              <button 
                onClick={onToggleLanguage}
                className="px-4 py-2 text-sm font-semibold text-[#4A2C5A] bg-[#A99484]/10 rounded-lg hover:bg-[#A99484]/20 transition-colors"
              >
                العربية
              </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;