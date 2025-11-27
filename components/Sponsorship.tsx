import React, { useState, useRef } from 'react';
import { FadeIn } from './FadeIn';
import { SPONSOR_TIERS, SPONSOR_TIERS_ZH } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { ReactiveTitle } from './ReactiveTitle';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

export const Sponsorship: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const allTiers = language === 'en' ? SPONSOR_TIERS : SPONSOR_TIERS_ZH;

  // Separate Platinum Sponsor for the top banner
  const featuredSponsor = allTiers.find(t => t.id === 'platinum');
  // Filter the rest for the bottom grid
  const gridTiers = allTiers.filter(t => t.id !== 'platinum');

  // Platinum Spotlight State
  const platinumRef = useRef<HTMLDivElement>(null);
  const [platinumMouse, setPlatinumMouse] = useState({ x: 0, y: 0 });
  const [platinumOpacity, setPlatinumOpacity] = useState(0);

  const handlePlatinumMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (platinumRef.current) {
        const rect = platinumRef.current.getBoundingClientRect();
        setPlatinumMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const handleTierClick = (id: string) => {
    navigate(`/sponsor/${id}`);
  };

  const getTierStyles = (id: string) => {
    switch (id) {
      case 'gold':
        return {
          hoverClass: 'hover:shadow-[0_0_80px_rgba(212,175,55,0.8)] hover:border-zen-gold border-zen-gold/40 group-hover:shadow-[0_0_80px_rgba(212,175,55,0.8)]',
          spotlight: 'rgba(212, 175, 55, 0.4)',
          textColor: 'text-zen-gold'
        };
      case 'silver':
        return {
          hoverClass: 'hover:shadow-[0_0_80px_rgba(255,255,255,0.8)] hover:border-white border-white/40 group-hover:shadow-[0_0_80px_rgba(255,255,255,0.8)]',
          spotlight: 'rgba(255, 255, 255, 0.4)',
          textColor: 'text-white'
        };
      case 'platinum':
         return {
            hoverClass: 'hover:shadow-[0_0_100px_rgba(185,242,255,0.9)] hover:border-[#b9f2ff] border-[#b9f2ff]/50',
            spotlight: 'rgba(185, 242, 255, 0.5)',
            textColor: 'text-[#b9f2ff]'
         }
      default:
        // Product, Collaboration, etc.
        return {
          hoverClass: 'hover:shadow-[0_0_40px_rgba(79,180,195,0.4)] hover:border-zen-cyan border-zen-cyan/20',
          spotlight: 'rgba(79, 180, 195, 0.25)',
          textColor: 'text-zen-cyan'
        };
    }
  };

  return (
    <section id="sponsorship" className="py-32 bg-zen-silver dark:bg-zen-black relative transition-colors duration-500">
      {/* Anchor for back navigation alignment */}
      <div id="sponsorship-grid-anchor" className="absolute -top-32 left-0 w-full h-4"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- PART 1: CURRENT SPONSORS (THE ADVERTISEMENT) --- */}
        <div className="mb-32 text-center">
             <FadeIn direction="up">
                {/* Big Reactive Title */}
                <div className="mb-8 flex justify-center">
                    <h2 className="text-5xl md:text-7xl font-bold font-tech uppercase tracking-tight">
                        <ReactiveTitle text={t('ourPartners')} />
                    </h2>
                </div>

                {/* Title Sponsor Label - Styled Better */}
                <div className="flex items-center justify-center gap-4 mb-8 opacity-80">
                    <div className="h-px w-12 bg-zen-gold"></div>
                    <span className="text-zen-gold font-mono tracking-[0.3em] uppercase text-sm font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                        {t('titleSponsor')}
                    </span>
                    <div className="h-px w-12 bg-zen-gold"></div>
                </div>

                {/* Sponsor Card */}
                <div className="group relative w-full max-w-4xl mx-auto h-64 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-black/40 backdrop-blur-sm transition-all duration-500 hover:border-zen-cyan/50 hover:shadow-[0_0_50px_rgba(79,180,195,0.2)] flex items-center justify-center p-8">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zen-cyan/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Content - Image Only */}
                    <div className="relative z-10">
                        <img 
                            src="/super-fortune-logo.png" 
                            alt="Super Fortune Imp. Exp." 
                            className="h-24 md:h-32 object-contain filter dark:invert opacity-90 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        />
                    </div>
                </div>
             </FadeIn>
        </div>


        {/* --- PART 2: SALES PITCH --- */}
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-zen-cyan font-mono tracking-widest uppercase text-xs font-bold mb-2">{t('fuelTheFuture')}</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-zen-black dark:text-zen-silver uppercase tracking-tight">
                <ReactiveTitle text={t('partnershipTiers')} />
            </h3>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-zen-silver/60">
                {t('sponsDesc')}
            </p>
          </FadeIn>
        </div>

        {/* --- FEATURED SPONSOR BANNER (PLATINUM) --- */}
        {featuredSponsor && (
          <FadeIn direction="up" className="mb-12">
            <div 
              ref={platinumRef}
              onMouseMove={handlePlatinumMove}
              onMouseEnter={() => setPlatinumOpacity(1)}
              onMouseLeave={() => setPlatinumOpacity(0)}
              onClick={() => handleTierClick(featuredSponsor.id)}
              className="group relative w-full h-64 md:h-80 rounded-2xl overflow-hidden cursor-pointer border border-[#b9f2ff]/40 transition-all duration-500 shadow-lg hover:shadow-[0_0_120px_rgba(185,242,255,0.8)] hover:border-[#b9f2ff] hover:scale-[1.01]"
            >
                {/* Background Image (Layer 0) */}
                <div className="absolute inset-0 bg-black z-0">
                    <img 
                        src="/car-hud.png" 
                        alt={featuredSponsor.name}
                        className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    {/* Diamond Sparkle Effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#b9f2ff]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-slow"></div>
                </div>

                {/* Spotlight Overlay (Layer 1) */}
                <div
                    className="pointer-events-none absolute -inset-px transition duration-300 z-10"
                    style={{
                        opacity: platinumOpacity,
                        background: `radial-gradient(800px circle at ${platinumMouse.x}px ${platinumMouse.y}px, rgba(185, 242, 255, 0.3), transparent 40%)`,
                    }}
                />
                
                {/* Content (Layer 2) */}
                <div className="relative z-20 flex flex-col items-center justify-center h-full text-center p-8 text-white">
                    <h4 className="text-sm font-mono uppercase tracking-[0.2em] text-[#b9f2ff] mb-2 group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_10px_rgba(185,242,255,0.8)]">
                      {language === 'en' ? 'Exclusive Partner' : '独家合作伙伴'}
                    </h4>
                    <h3 className="text-3xl md:text-5xl font-bold font-tech uppercase tracking-tight mb-4 group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_25px_rgba(185,242,255,0.8)]">
                        <ReactiveTitle text={featuredSponsor.name} baseColor="#b9f2ff" />
                    </h3>
                    <p className="max-w-lg mb-6 text-zen-silver/80 group-hover:text-white transition-colors font-medium">
                      {featuredSponsor.benefits.slice(0, 3).join(' • ')}
                    </p>
                    <div className="mt-auto pt-4">
                        <span className="inline-flex items-center gap-2 px-6 py-3 border border-[#b9f2ff] text-[#b9f2ff] font-bold uppercase tracking-widest text-sm rounded group-hover:bg-[#b9f2ff] group-hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(185,242,255,0.3)] group-hover:shadow-[0_0_40px_rgba(185,242,255,0.6)]">
                            {t('viewPlan')} <ArrowRight size={16} />
                        </span>
                    </div>
                </div>
            </div>
          </FadeIn>
        )}

        {/* --- GRID TIERS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridTiers.map((tier) => {
            const styles = getTierStyles(tier.id);
            return (
              <FadeIn key={tier.id} delay={100} direction="up">
                <SpotlightCard
                  className={`p-8 h-full cursor-pointer flex flex-col transition-all duration-500 bg-white/80 dark:bg-zen-black/50 ${tier.highlight ? 'border-2 border-zen-cyan' : ''} ${styles.hoverClass} hover:scale-[1.02] group shadow-sm dark:shadow-none`}
                  spotlightColor={styles.spotlight}
                  onClick={() => handleTierClick(tier.id)}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className={`text-2xl font-bold font-tech uppercase tracking-wide transition-colors duration-300 ${styles.textColor} drop-shadow-md`}>{tier.name}</h3>
                      <p className={`text-xl font-mono ${styles.textColor} opacity-90`}>{tier.price}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <CheckCircle2 size={16} className={`mr-3 mt-0.5 shrink-0 ${styles.textColor}`} />
                        <span className="text-gray-700 dark:text-zen-silver/70 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                      <span className={`group/link inline-flex items-center text-sm font-bold uppercase tracking-wider ${styles.textColor}`}>
                          {t('viewPlan')} <ArrowRight size={16} className="ml-2 transition-transform group-hover/link:translate-x-1" />
                      </span>
                  </div>
                </SpotlightCard>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};