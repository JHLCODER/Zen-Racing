import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '../utils/translations';

type Language = 'en' | 'zh';
type TransitionStage = 'idle' | 'entering' | 'exiting';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  switchLanguage: () => void;
  transitionStage: TransitionStage;
  t: (key: keyof typeof translations.en) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [transitionStage, setTransitionStage] = useState<TransitionStage>('idle');

  const t = (key: keyof typeof translations.en) => {
    return translations[language][key] || translations['en'][key] || key;
  };

  const switchLanguage = () => {
    if (transitionStage !== 'idle') return;

    setTransitionStage('entering');
    
    // Wait for the fade-in to cover the screen
    setTimeout(() => {
      setLanguage(prev => prev === 'en' ? 'zh' : 'en');
      setTransitionStage('exiting');
      
      // Wait for fade-out to finish before unmounting/resetting
      setTimeout(() => {
        setTransitionStage('idle');
      }, 1200); 
    }, 1200); 
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, switchLanguage, transitionStage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};