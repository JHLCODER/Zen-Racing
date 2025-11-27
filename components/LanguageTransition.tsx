import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageTransition: React.FC = () => {
  const { transitionStage } = useLanguage();

  if (transitionStage === 'idle') return null;

  return (
    <div 
        className={`fixed inset-0 z-[200] bg-zen-black flex items-center justify-center transition-opacity duration-[1200ms] ease-luxury
            ${transitionStage === 'entering' ? 'opacity-100' : 'opacity-0'}
        `}
    >
        {/* Simple Minimal Logo during transition */}
        <div className="flex items-center gap-3 animate-pulse">
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-sm bg-black text-zen-silver font-tech">禅</span>
            <span className="text-white font-bold tracking-widest font-tech text-xl">ZEN RACING</span>
        </div>
    </div>
  );
};