import React from 'react';
import { FadeIn } from './FadeIn';
import { CAR_SPECS, CAR_SPECS_ZH } from '../constants';
import { Cpu, Timer } from 'lucide-react';
import { ReactiveTitle } from './ReactiveTitle';
import { useLanguage } from '../contexts/LanguageContext';

export const Engineering: React.FC = () => {
  const { t, language } = useLanguage();
  const carSpecs = language === 'en' ? CAR_SPECS : CAR_SPECS_ZH;

  return (
    <section id="engineering" className="py-32 bg-white dark:bg-zen-black relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid bg-[size:60px_60px] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-transparent to-white dark:from-zen-darkgray dark:via-transparent dark:to-zen-black"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
             <FadeIn direction="right">
                <div className="flex items-center gap-3 mb-4">
                   <Cpu className="text-zen-cyan animate-spin-slow" />
                   <h2 className="text-zen-cyan font-mono tracking-widest uppercase text-xs font-bold">{t('techSpecs')}</h2>
                </div>
                
                <h3 className="text-4xl md:text-6xl font-bold text-zen-black dark:text-zen-silver leading-none mb-2">
                   <ReactiveTitle text={t('engineered')} /> <br />
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-400">{t('for')}</span> <span className="text-zen-cyan">{t('dominance')}</span>
                </h3>
                <h4 className="text-zen-black dark:text-zen-silver font-mono text-sm tracking-widest mb-6 opacity-70 uppercase border-b border-zen-cyan/30 inline-block pb-1">
                    {t('whatIsF1Sub')}
                </h4>

                <p className="text-gray-600 dark:text-zen-silver/70 text-lg leading-relaxed mb-8">
                   {t('engDesc')}
                </p>

                {/* Track Record Display */}
                <div className="my-10 pl-6 border-l-4 border-zen-cyan/50 hover:border-zen-gold transition-colors duration-500 group/record w-full">
                    <h4 className="text-zen-cyan font-mono text-xs tracking-widest uppercase mb-1">{t('officialRecord')}</h4>
                    <div className="relative inline-block transition-transform duration-500 origin-left group-hover/record:scale-105">
                        <span className="text-6xl sm:text-7xl md:text-8xl font-bold font-tech tracking-tighter block leading-none break-all
                            text-zen-black dark:text-zen-silver
                            
                            group-hover/record:text-transparent 
                            group-hover/record:bg-clip-text 
                            group-hover/record:bg-[linear-gradient(110deg,#9e8229_0%,#D4AF37_25%,#fff8db_50%,#D4AF37_75%,#9e8229_100%)] 
                            group-hover/record:bg-[length:200%_100%] 
                            group-hover/record:animate-shine
                            group-hover/record:drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]
                            
                            dark:group-hover/record:text-transparent 
                            dark:group-hover/record:bg-clip-text
                            dark:group-hover/record:drop-shadow-[0_0_30px_rgba(212,175,55,0.6)]
                        ">
                            1.125 s
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {carSpecs.map((spec, idx) => (
                      <div 
                        key={idx} 
                        className="p-4 border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.02] rounded hover:border-zen-cyan/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(79,180,195,0.15)] hover:z-10 relative"
                      >
                         <div className="text-xs font-mono text-gray-500 dark:text-zen-silver/50 uppercase tracking-wider mb-1">{spec.label}</div>
                         <div className="text-2xl font-bold text-zen-black dark:text-zen-silver font-tech">{spec.value}</div>
                         <div className="mt-2 text-xs text-zen-cyan">{spec.detail}</div>
                      </div>
                   ))}
                </div>
             </FadeIn>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative h-[500px] flex items-center justify-center">
             <div className="absolute inset-0 bg-zen-cyan/5 rounded-full blur-[100px]"></div>
             
             {/* Abstract Car Wireframe / HUD */}
             <div className="relative z-10 w-full max-w-md aspect-[16/9] border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden group">
                
                {/* Background Image - Added as requested */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/car-hud.png" 
                        alt="Car HUD View" 
                        className="w-full h-full object-cover opacity-40 dark:opacity-60 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000 ease-out"
                    />
                    {/* Dark gradient overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
                </div>

                <div className="absolute top-4 left-4 flex gap-2 z-20">
                   <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                   <div className="text-[10px] font-mono text-zen-cyan">{t('sysOnline')}</div>
                </div>
                <div className="absolute bottom-4 right-4 text-[10px] font-mono text-gray-500 dark:text-zen-silver/50 text-right z-20">
                   {t('prototype')} <br />
                   Zen Racing Falconate
                </div>
                
                {/* Central Visual */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                   <div className="w-64 h-20 border border-zen-cyan/30 rounded relative animate-pulse-slow">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-zen-cyan/20"></div>
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-px bg-zen-cyan/20"></div>
                      
                      {/* Scanning Line */}
                      <div className="absolute top-0 bottom-0 w-px bg-zen-cyan/80 shadow-[0_0_10px_rgba(79,180,195,0.8)] animate-shine" style={{ left: '0%', animation: 'scan 3s ease-in-out infinite' }}></div>
                   </div>
                </div>

                {/* Data Points */}
                <div className="absolute top-1/4 left-1/4 p-2 border border-zen-cyan/30 bg-black/60 backdrop-blur-md text-[10px] text-zen-cyan font-mono opacity-0 group-hover:opacity-100 transition-opacity delay-100 z-20">
                   Drag: 0.27
                </div>
                <div className="absolute bottom-1/3 right-1/3 p-2 border border-zen-cyan/30 bg-black/60 backdrop-blur-md text-[10px] text-zen-cyan font-mono opacity-0 group-hover:opacity-100 transition-opacity delay-200 z-20">
                   Vel: 22m/s
                </div>
             </div>
          </div>

        </div>
      </div>
      
      <style>{`
        @keyframes scan {
            0% { left: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};