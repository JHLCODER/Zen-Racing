import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-100 dark:bg-black py-12 border-t border-black/10 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                <span className="w-6 h-6 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center text-xs bg-white dark:bg-black text-zen-black dark:text-zen-silver font-tech">禅</span>
                <span className="text-zen-black dark:text-zen-silver font-bold tracking-widest font-tech">ZEN RACING</span>
            </div>
            <p className="text-gray-500 dark:text-zen-silver/40 text-sm font-mono">
            {t('rights')}
            </p>
        </div>

        <div className="flex items-center gap-4 opacity-50 hover:opacity-80 transition-opacity">
            <p className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-zen-silver/40 text-right hidden sm:block whitespace-pre-line">{t('officialPartner')}</p>
            <div className="h-8 w-px bg-black/10 dark:bg-white/10 hidden sm:block"></div>
            <div className="flex items-center">
                <img 
                    src="/super-fortune-logo.png" 
                    alt="Super Fortune Logo" 
                    className="h-6 object-contain filter dark:invert"
                />
            </div>
        </div>
      </div>
    </footer>
  );
};