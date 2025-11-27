import React, { useEffect, useRef, useState } from 'react';
import { FadeIn } from './FadeIn';
import { Leaf, Recycle, Wind } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Sustainability: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="sustainability" className="py-28 bg-gray-100 dark:bg-zen-darkgray transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
                <div className="inline-flex items-center justify-center p-3 bg-zen-cyan/10 rounded-full mb-6 ring-1 ring-zen-cyan/30">
                    <Leaf className="text-zen-cyan" size={24} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-zen-black dark:text-zen-silver mb-6">{t('efficiencyIs')}<br/><span className="text-zen-cyan">{t('sustainability')}</span></h2>
                <p className="text-gray-700 dark:text-zen-silver/70 text-lg mb-8 leading-relaxed">
                    {t('sustDesc')}
                </p>
                <div className="h-px w-full bg-gradient-to-r from-zen-cyan/50 to-transparent mb-8"></div>
            </FadeIn>

            <div className="space-y-8">
                <FadeIn delay={100} direction="left">
                    <div className="flex items-start gap-5 group">
                    <div className="p-3 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded group-hover:border-zen-cyan/50 transition-colors">
                        <Recycle className="text-gray-600 dark:text-zen-silver group-hover:text-zen-cyan transition-colors" size={24} />
                    </div>
                    <div>
                        <h4 className="text-zen-black dark:text-zen-silver font-bold mb-1 text-lg">{t('zeroWaste')}</h4>
                        <p className="text-sm text-gray-600 dark:text-zen-silver/50 group-hover:text-gray-900 dark:group-hover:text-zen-silver/80 transition-colors">{t('zeroWasteDesc')}</p>
                    </div>
                    </div>
                </FadeIn>
                <FadeIn delay={200} direction="left">
                    <div className="flex items-start gap-5 group">
                    <div className="p-3 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded group-hover:border-zen-cyan/50 transition-colors">
                        <Wind className="text-gray-600 dark:text-zen-silver group-hover:text-zen-cyan transition-colors" size={24} />
                    </div>
                    <div>
                        <h4 className="text-zen-black dark:text-zen-silver font-bold mb-1 text-lg">{t('efficientAero')}</h4>
                        <p className="text-sm text-gray-600 dark:text-zen-silver/50 group-hover:text-gray-900 dark:group-hover:text-zen-silver/80 transition-colors">{t('efficientAeroDesc')}</p>
                    </div>
                    </div>
                </FadeIn>
                <FadeIn delay={300} direction="left">
                    <div className="flex items-start gap-5 group">
                    <div className="p-3 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded group-hover:border-zen-cyan/50 transition-colors">
                        <Leaf className="text-gray-600 dark:text-zen-silver group-hover:text-zen-cyan transition-colors" size={24} />
                    </div>
                    <div>
                        <h4 className="text-zen-black dark:text-zen-silver font-bold mb-1 text-lg">{t('sourcedLocally')}</h4>
                        <p className="text-sm text-gray-600 dark:text-zen-silver/50 group-hover:text-gray-900 dark:group-hover:text-zen-silver/80 transition-colors">{t('sourcedLocallyDesc')}</p>
                    </div>
                    </div>
                </FadeIn>
            </div>
        </div>
      </div>
    </section>
  );
};