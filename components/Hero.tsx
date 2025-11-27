import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { ReactiveTitle } from './ReactiveTitle';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState(0);
  const { t } = useLanguage();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => requestAnimationFrame(() => setScrollPos(window.scrollY));
    const handleMouseMove = (e: MouseEvent) => {
        requestAnimationFrame(() => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            setMousePos({ x, y });
        });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToConcept = () => {
    const element = document.getElementById('concept');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-zen-silver dark:bg-zen-black transition-colors duration-500">
      
      {/* Spotlight Follower (Mouse Interaction) */}
      <div 
        className="absolute pointer-events-none w-[800px] h-[800px] bg-zen-cyan/10 rounded-full blur-[100px] transition-transform duration-75 ease-out z-0"
        style={{
            left: '50%',
            top: '50%',
            transform: `translate3d(calc(-50% + ${mousePos.x * 100}px), calc(-50% + ${mousePos.y * 100}px), 0)`
        }}
      />

      {/* Background Layers */}
      <div className="absolute inset-0 z-0 select-none">
        <div 
            className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-10 dark:opacity-30 mix-blend-multiply dark:mix-blend-luminosity transition-all duration-500 ease-out will-change-transform"
            style={{ transform: `scale(1.1) translate3d(${mousePos.x * -10}px, ${mousePos.y * -10 + scrollPos * 0.1}px, 0)` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-zen-silver via-zen-silver/80 to-zen-silver dark:from-zen-black dark:via-zen-black/80 dark:to-zen-black transition-colors duration-500"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(79,180,195,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,180,195,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Massive Background Logo Image */}
        <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[90vw] text-center pointer-events-none opacity-5 will-change-transform flex justify-center items-center"
            style={{ transform: `translate3d(-50%, calc(-50% + ${scrollPos * 0.2}px), 0)` }}
        >
             <img 
                src="/zen-logo.png" 
                alt="Zen Racing Background" 
                className={`w-[80%] md:w-[60%] h-auto object-contain grayscale transition-all duration-500 ${theme === 'light' ? 'invert opacity-10' : 'invert-0 opacity-10'}`}
             />
        </div>
      </div>

      {/* Main Content */}
      <div 
        className="relative z-10 text-center px-4 max-w-7xl mx-auto will-change-transform"
        style={{ 
            transform: `translate3d(${mousePos.x * -20}px, ${mousePos.y * -20 + scrollPos * 0.3}px, 0)`,
            opacity: Math.max(0, 1 - scrollPos / 700)
        }}
      >
        <FadeIn direction="up" duration={1200}>
          <div className="flex items-center justify-center gap-4 mb-2 relative z-20">
             <div className="h-px w-8 md:w-12 bg-zen-cyan"></div>
             <p className="text-zen-black dark:text-zen-silver font-mono tracking-[0.2em] uppercase text-xs md:text-sm font-bold">
                {t('heroSubtitle')}
             </p>
             <div className="h-px w-8 md:w-12 bg-zen-cyan"></div>
          </div>
        
          <h1 className="flex flex-col items-center justify-center leading-[0.85] font-tech font-bold tracking-tight mb-4">
            <ReactiveTitle text={t('precision')} className="text-6xl md:text-8xl lg:text-9xl" />
            <ReactiveTitle text={t('speed')} className="text-6xl md:text-8xl lg:text-9xl" />
            <ReactiveTitle text={t('control')} className="text-6xl md:text-8xl lg:text-9xl" />
          </h1>

          <p className="text-zen-black dark:text-white font-bold font-mono text-sm tracking-widest uppercase mb-6 opacity-90 drop-shadow-md">
             {t('poweredBySponsor')}
          </p>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-8">
            {t('mission')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
                onClick={scrollToContact}
                className="group relative px-8 py-4 bg-zen-cyan text-zen-black font-bold uppercase tracking-[0.2em] text-sm overflow-hidden transition-all duration-1000 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] border border-transparent rounded hover:border-zen-gold/50"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%)] bg-[length:250%_250%] animate-shine opacity-0 group-hover:opacity-50"></div>
                <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors">
                    {t('partnerWithUs')} <ArrowRight size={16} />
                </span>
            </button>
            
            <button 
                onClick={scrollToConcept}
                className="px-8 py-4 border border-zen-black dark:border-zen-silver text-zen-black dark:text-zen-silver font-bold uppercase tracking-[0.2em] text-sm hover:bg-zen-black hover:text-white dark:hover:bg-zen-silver dark:hover:text-black transition-all duration-300 rounded"
            >
              {t('discoverZen')}
            </button>
          </div>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce transition-opacity duration-300"
        style={{ opacity: Math.max(0, 1 - scrollPos / 200) }}
      >
        <ChevronDown className="text-zen-cyan" size={32} />
      </div>
    </section>
  );
};