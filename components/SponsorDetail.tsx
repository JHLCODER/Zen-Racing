import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SPONSOR_TIERS, SPONSOR_TIERS_ZH } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, CheckCircle2, Mail, ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { ReactiveTitle } from './ReactiveTitle';
import { useTheme } from '../contexts/ThemeContext';

export const SponsorDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const [isExiting, setIsExiting] = useState(false);
  
  const allTiers = language === 'en' ? SPONSOR_TIERS : SPONSOR_TIERS_ZH;
  const tier = allTiers.find(t => t.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleBack = () => {
    setIsExiting(true);
    
    // Delay navigation to allow exit animation to play
    setTimeout(() => {
        // Navigate to home with state indicating we are returning from a detail page
        // This tells Home.tsx to snap to the sponsors section instead of the top
        navigate('/', { state: { returnToSponsors: true } });
    }, 400); 
  };

  if (!tier) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zen-black text-white">
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Plan Not Found</h2>
            <button onClick={() => navigate('/')} className="text-zen-cyan hover:underline">Return Home</button>
        </div>
      </div>
    );
  }

  // Determine styles based on tier (similar to Sponsorship.tsx)
  const isPlatinum = tier.id === 'platinum';
  const isGold = tier.id === 'gold';
  const isSilver = tier.id === 'silver';
  const isProduct = tier.id === 'product';
  const isCollaboration = tier.id === 'collaboration';

  let accentColor = 'text-zen-black dark:text-zen-silver';
  let glowColor = 'rgba(255, 255, 255, 0.2)';
  let borderColor = 'border-black/10 dark:border-white/10';
  let titleColorHex = '#4fb4c3'; // Default Cyan
  
  if (isGold) {
      accentColor = 'text-zen-gold';
      glowColor = 'rgba(212, 175, 55, 0.4)';
      borderColor = 'border-zen-gold/50';
      titleColorHex = '#D4AF37'; // Gold
  } else if (isPlatinum) {
      accentColor = 'text-[#b9f2ff]';
      glowColor = 'rgba(185, 242, 255, 0.5)';
      borderColor = 'border-[#b9f2ff]/50';
      titleColorHex = '#b9f2ff'; // Platinum
  } else if (isSilver) {
      accentColor = 'text-zen-black dark:text-zen-silver';
      glowColor = 'rgba(227, 227, 227, 0.3)';
      borderColor = 'border-zen-silver/50';
      titleColorHex = '#e3e3e3'; // Silver
  } else if (isProduct || isCollaboration) {
      accentColor = 'text-zen-cyan';
      glowColor = 'rgba(79, 180, 195, 0.4)';
  }

  return (
    <div className={`min-h-screen pt-32 pb-20 bg-zen-silver dark:bg-zen-black relative overflow-hidden transition-all duration-500 ease-in-out ${isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
       {/* Background */}
       <div className="absolute inset-0 bg-tech-grid-light dark:bg-transparent bg-[size:60px_60px] opacity-30 pointer-events-none"></div>
       <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-b from-transparent to-zen-black/5 dark:to-black/80 pointer-events-none"></div>
       
       <div 
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none transition-colors duration-500"
         style={{ backgroundColor: glowColor }}
       ></div>

       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={handleBack} 
            className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-gray-500 hover:text-zen-black dark:text-gray-400 dark:hover:text-white mb-12 transition-colors group"
          >
             <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
             {language === 'en' ? 'Back to Overview' : '返回概览'}
          </button>

          <FadeIn direction="up">
            <div className={`bg-white dark:bg-white/[0.03] border ${borderColor} rounded-2xl overflow-hidden shadow-2xl relative transition-colors duration-500`}>
                {/* Header Bar */}
                <div className={`h-2 w-full ${isGold ? 'bg-zen-gold' : isPlatinum ? 'bg-[#b9f2ff]' : isSilver ? 'bg-zen-silver' : isProduct ? 'bg-zen-cyan' : 'bg-gray-300'}`}></div>
                
                <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                        <div>
                             <h4 className="text-zen-cyan font-mono tracking-widest uppercase text-xs font-bold mb-2">
                                {language === 'en' ? 'Sponsorship Plan' : '赞助计划'}
                             </h4>
                             <h1 className={`text-5xl md:text-6xl font-bold font-tech uppercase tracking-tight ${accentColor}`}>
                                 <ReactiveTitle text={tier.name} baseColor={titleColorHex} />
                             </h1>
                        </div>
                        <div className={`text-4xl md:text-5xl font-bold font-tech ${accentColor}`}>
                            {tier.price}
                        </div>
                    </div>

                    <p className="text-lg text-gray-700 dark:text-zen-silver/80 leading-relaxed mb-12 border-l-2 border-black/10 dark:border-white/10 pl-6">
                        {tier.detailedDescription || "Join the team and fuel the future."}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h3 className="text-xl font-bold text-zen-black dark:text-white uppercase font-tech mb-6 flex items-center gap-2">
                                {language === 'en' ? 'Core Benefits' : '核心权益'}
                            </h3>
                            <ul className="space-y-4">
                                {(tier.detailedBenefits || tier.benefits).map((benefit, idx) => (
                                    <li key={idx} className="flex items-start text-base group">
                                        <CheckCircle2 size={20} className={`mr-3 shrink-0 mt-0.5 transition-colors ${accentColor}`} />
                                        <span className="text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                                            {benefit}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Visual / Context placeholder */}
                        <div className="bg-gray-100 dark:bg-black/40 border border-black/5 dark:border-white/5 rounded-xl p-8 flex flex-col justify-center items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-zen-cyan/10 flex items-center justify-center mb-4">
                                <Mail className="text-zen-cyan" size={32} />
                            </div>
                            <h4 className="text-zen-black dark:text-white font-bold text-lg mb-2">
                                {language === 'en' ? 'Interested?' : '感兴趣？'}
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                                {language === 'en' 
                                  ? 'Contact our sponsorship manager directly to secure this package.' 
                                  : '直接联系我们的赞助经理以获取此套餐。'}
                            </p>
                            <button 
                                onClick={() => navigate(`/sponsor/${tier.id}/contact`)}
                                className="px-6 py-3 bg-zen-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-wider text-sm rounded hover:bg-zen-cyan dark:hover:bg-zen-cyan dark:hover:text-black transition-colors flex items-center gap-2"
                            >
                                {language === 'en' ? 'Contact Us' : '联系我们'} <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          </FadeIn>
       </div>
    </div>
  );
};