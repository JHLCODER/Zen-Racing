import React from 'react';
import { FadeIn } from './FadeIn';
import { TIMELINE, TIMELINE_ZH } from '../constants';
import { ReactiveTitle } from './ReactiveTitle';
import { useLanguage } from '../contexts/LanguageContext';

export const Timeline: React.FC = () => {
  const { t, language } = useLanguage();
  const timeline = language === 'en' ? TIMELINE : TIMELINE_ZH;

  return (
    <section className="py-32 bg-gray-100 dark:bg-zen-darkgray overflow-hidden relative transition-colors duration-500">
       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <FadeIn direction="down">
            <h3 className="text-4xl md:text-6xl font-bold text-zen-black dark:text-zen-silver uppercase tracking-tight">
              <ReactiveTitle text={t('teamProgress')} />
            </h3>
          </FadeIn>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-zen-cyan/30 to-transparent"></div>

          <div className="space-y-16">
            {timeline.map((event, idx) => (
              <FadeIn key={idx} delay={idx * 100} direction={idx % 2 === 0 ? 'left' : 'right'}>
                <div className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-5/12"></div>
                  
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-[5px] md:-translate-x-1/2 w-3 h-3 bg-white dark:bg-black border border-zen-cyan shadow-[0_0_10px_rgba(79,180,195,0.5)] rounded-full z-10"></div>
                  
                  <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-zen-cyan font-mono font-bold text-2xl block mb-2 opacity-80">{event.year}</span>
                    <h4 className="text-zen-black dark:text-zen-silver font-bold text-xl mb-3 font-tech uppercase tracking-wide">{event.title}</h4>
                    <p className="text-gray-600 dark:text-zen-silver/60 text-sm leading-relaxed border-l border-black/10 dark:border-white/10 pl-4 md:border-l-0 md:pl-0">{event.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};