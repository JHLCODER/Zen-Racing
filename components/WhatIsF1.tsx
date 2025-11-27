import React, { useEffect, useState, useRef } from 'react';
import { FadeIn } from './FadeIn';
import { ReactiveTitle } from './ReactiveTitle';
import { Trophy, PenTool, Wind, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Helper component for counting up numbers
const AnimatedStat = ({ value, label, suffix = '', decimals = 0 }: { value: number, label: string, suffix?: string, decimals?: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    
                    const duration = 2000;
                    const startTime = performance.now();

                    const animate = (currentTime: number) => {
                        const elapsedTime = currentTime - startTime;
                        const progress = Math.min(elapsedTime / duration, 1);
                        const easeOut = 1 - Math.pow(1 - progress, 3);

                        const currentVal = value * easeOut;
                        setCount(decimals > 0 ? Number(currentVal.toFixed(decimals)) : Math.floor(currentVal));

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(value);
                        }
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value, hasAnimated, decimals]);

    return (
        <div ref={ref} className="relative group cursor-default">
            <div className="text-3xl md:text-4xl font-mono font-bold text-gray-800 dark:text-zen-silver mb-2 tabular-nums relative z-10 group-hover:text-zen-cyan transition-colors duration-300">
                {count}{suffix}
            </div>
            <div className="text-xs text-zen-cyan uppercase tracking-wider font-bold border-t border-black/10 dark:border-white/10 pt-2 inline-block group-hover:border-zen-cyan transition-colors duration-300">
                {label}
            </div>
            <div className="absolute inset-0 bg-zen-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none"></div>
        </div>
    );
};

export const WhatIsF1: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="concept" className="py-24 bg-white dark:bg-zen-black relative overflow-hidden transition-colors duration-500">
      {/* Background Abstract Track - Animated */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none select-none">
         <div className="absolute -right-[20%] top-[10%] w-[60%] h-[120%] border-[40px] border-zen-cyan/10 rounded-[100%] transform rotate-12 skew-x-12 blur-sm animate-spin-slow" style={{ animationDuration: '60s' }}></div>
         <div className="absolute -right-[22%] top-[12%] w-[60%] h-[120%] border-[2px] border-gray-400/20 dark:border-zen-silver/20 rounded-[100%] transform rotate-12 skew-x-12 animate-spin-slow" style={{ animationDuration: '45s', animationDirection: 'reverse' }}></div>
         
         <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-zen-cyan/40 rounded-full animate-pulse-slow"></div>
         <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-gray-400/20 dark:bg-zen-silver/20 rounded-full animate-bounce" style={{ animationDuration: '8s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <FadeIn direction="right">
              <h2 className="text-zen-cyan font-mono tracking-widest uppercase text-xs font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-zen-cyan rounded-full animate-pulse"></span>
                {t('theCompetition')}
              </h2>
              <div className="mb-6 relative">
                <h3 className="text-4xl md:text-5xl font-bold text-zen-black dark:text-zen-silver leading-tight relative z-10">
                   <ReactiveTitle text={t('engineeringAt80')} /> <br />
                   <div className="mt-4 flex flex-wrap items-baseline gap-3">
                     <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-zen-cyan to-gray-800 dark:from-white dark:via-zen-cyan dark:to-white animate-pulse-slow">
                        {t('stemRacing')}
                     </span>
                     <span className="text-2xl md:text-3xl text-gray-500 dark:text-zen-silver/50 font-medium">
                        {t('f1InSchools')}
                     </span>
                   </div>
                </h3>
                <p className="mt-4 text-zen-cyan font-mono tracking-widest uppercase text-sm font-bold">
                    {t('whatIsStem')}
                </p>
              </div>
              <p className="text-gray-700 dark:text-zen-silver/70 text-lg leading-relaxed mb-6 font-light">
                 {t('stemDesc1')}
              </p>
              <div className="text-gray-700 dark:text-zen-silver/70 text-lg leading-relaxed mb-10 font-light">
                 {t('stemDesc2')}
                 <br className="mt-2" />
                 <a 
                    href="https://www.stemracing.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zen-cyan hover:text-black dark:hover:text-white transition-colors font-bold mt-2 group"
                 >
                    {t('clickToLearn')}
                    <ExternalLink size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </a>
              </div>

              <div className="grid grid-cols-3 gap-8 border-t border-black/10 dark:border-white/10 pt-8">
                  <AnimatedStat value={60} label={t('countries')} suffix="+" />
                  <AnimatedStat value={1.8} label={t('students')} suffix="M+" decimals={1} />
                  <AnimatedStat value={29000} label={t('schools')} suffix="+" />
              </div>
           </FadeIn>

           <div className="grid gap-6">
              {[
                  { icon: <PenTool size={20} />, title: t('design'), desc: t('designDesc') },
                  { icon: <Wind size={20} />, title: t('analyze'), desc: t('analyzeDesc') },
                  { icon: <Trophy size={20} />, title: t('compete'), desc: t('competeDesc') }
              ].map((item, i) => (
                  <FadeIn key={i} delay={i * 150} direction="left">
                      <div className="group relative flex items-center gap-6 p-6 border border-black/10 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] rounded-r-xl border-l-4 border-l-gray-400 dark:border-l-zen-silver overflow-hidden transition-all duration-500 hover:border-l-zen-cyan hover:bg-black/[0.05] dark:hover:bg-white/[0.05]">
                          <div className="absolute inset-0 bg-gradient-to-r from-zen-cyan/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                          <div className="absolute top-0 left-0 w-[2px] h-full bg-zen-cyan/50 blur-[2px] translate-x-[-100%] group-hover:translate-x-[500px] transition-transform duration-1000 ease-linear opacity-0 group-hover:opacity-100"></div>

                          <div className="relative z-10 flex items-center gap-4">
                              <div className="p-3 bg-white dark:bg-zen-black/50 border border-black/10 dark:border-white/10 rounded-full text-gray-700 dark:text-zen-silver group-hover:bg-zen-cyan group-hover:text-black transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                  {item.icon}
                              </div>
                              <div>
                                  <h4 className="text-lg font-bold text-zen-black dark:text-zen-silver font-tech uppercase tracking-wide mb-1 group-hover:text-zen-cyan transition-colors">{item.title}</h4>
                                  <p className="text-sm text-gray-600 dark:text-zen-silver/50 group-hover:text-gray-900 dark:group-hover:text-zen-silver/80 transition-colors font-light">{item.desc}</p>
                              </div>
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