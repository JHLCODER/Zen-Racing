import React from 'react';
import { FadeIn } from './FadeIn';
import { Users, Zap, Target } from 'lucide-react';
import { ReactiveTitle } from './ReactiveTitle';
import { useLanguage } from '../contexts/LanguageContext';

const TEAM_MEMBERS_EN = [
  { name: "Johnson Huang", role: "Team Leader / Production Manager / Marketing" },
  { name: "Jagrav Lalwani", role: "Resource Manager / Sponsorship Manager / Marketing Manager" },
  { name: "Taavi Toiviainen", role: "Lead Engineer" },
  { name: "Shuoyuan Zhang", role: "Local Marketing Engineer" },
  { name: "Yokoi Takuma", role: "Operations Manager" },
  { name: "Keane Wong", role: "Engineer" },
];

const TEAM_MEMBERS_ZH = [
  { name: "Johnson Huang", role: "队长 / 生产经理 / 市场营销" },
  { name: "Jagrav Lalwani", role: "资源经理 / 赞助经理 / 市场经理" },
  { name: "Taavi Toiviainen", role: "首席工程师" },
  { name: "Shuoyuan Zhang", role: "本地营销工程师" },
  { name: "Yokoi Takuma", role: "运营经理" },
  { name: "Keane Wong", role: "工程师" },
];

export const About: React.FC = () => {
  const { t, language } = useLanguage();
  const members = language === 'zh' ? TEAM_MEMBERS_ZH : TEAM_MEMBERS_EN;

  return (
    <section id="about" className="py-32 bg-gray-100 dark:bg-zen-darkgray relative transition-colors duration-500">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zen-cyan/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- PART 1: PHILOSOPHY --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-black/10 dark:border-white/10 pb-8">
          <FadeIn direction="right">
            <h2 className="text-zen-cyan font-mono tracking-widest uppercase text-xs font-bold mb-2">{t('identify')}</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-zen-black dark:text-zen-silver uppercase tracking-tight">
                <ReactiveTitle text={t('thePhilosophy')} />
            </h3>
          </FadeIn>
          <FadeIn delay={200} direction="left">
            <p className="text-gray-600 dark:text-zen-silver/60 max-w-md text-right mt-4 md:mt-0 font-mono text-sm">
              {t('philDesc')}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {[
            { 
              icon: <Target size={32} />, 
              title: t('philPrecision'), 
              desc: t('philPrecisionDesc') 
            },
            { 
              icon: <Users size={32} />, 
              title: t('philSynergy'), 
              desc: t('philSynergyDesc') 
            },
            { 
              icon: <Zap size={32} />, 
              title: t('philInnovation'), 
              desc: t('philInnovationDesc') 
            }
          ].map((item, idx) => (
            <FadeIn key={idx} delay={idx * 150} direction="up" className="h-full">
              <div className="group relative p-8 h-full border border-black/10 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:bg-black/[0.02] dark:hover:bg-white/[0.04] transition-all duration-500 overflow-hidden shadow-sm dark:shadow-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zen-silver to-zen-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="text-gray-700 dark:text-zen-silver group-hover:text-zen-cyan transition-colors duration-300 mb-8 p-3 bg-black/5 dark:bg-white/5 inline-block rounded-sm">
                  {item.icon}
                </div>
                
                <h4 className="text-2xl font-bold text-zen-black dark:text-zen-silver uppercase tracking-wider mb-4 font-tech group-hover:translate-x-2 transition-transform duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-zen-silver/70 leading-relaxed font-light text-sm border-l border-black/10 dark:border-white/10 pl-4 group-hover:border-zen-cyan/50 transition-colors">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* --- PART 2: MEET THE TEAM --- */}
        <div className="relative">
           <div className="text-center mb-16">
              <FadeIn direction="up">
                 <h2 className="text-zen-cyan font-mono tracking-widest uppercase text-xs font-bold mb-2">{t('personnel')}</h2>
                 <div className="text-4xl md:text-6xl font-bold text-zen-black dark:text-zen-silver uppercase tracking-tight flex justify-center">
                    <ReactiveTitle text={t('meetTheTeam')} />
                 </div>
              </FadeIn>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.map((member, idx) => (
                 <FadeIn key={idx} delay={idx * 100} direction="up">
                    <div className="group relative bg-white dark:bg-zen-black border border-black/10 dark:border-white/10 hover:border-zen-cyan/50 transition-all duration-500 overflow-hidden p-8 hover:bg-zen-cyan/5">
                       {/* Text Info Only */}
                       <div className="flex flex-col items-center text-center">
                          <h4 className="text-xl font-bold font-tech uppercase tracking-wide mb-2 transition-all duration-300 group-hover:scale-125">
                             <span className="
                                text-zen-black dark:text-zen-silver
                                group-hover:text-transparent 
                                group-hover:bg-clip-text 
                                group-hover:bg-[linear-gradient(110deg,#9e8229_0%,#D4AF37_25%,#fff8db_50%,#D4AF37_75%,#9e8229_100%)] 
                                group-hover:bg-[length:200%_100%] 
                                group-hover:animate-shine
                                group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]
                                transition-all
                             ">
                                {member.name}
                             </span>
                          </h4>
                          <div className="flex items-center gap-2 mt-3 justify-center w-full">
                             <div className="h-px w-4 bg-zen-cyan shrink-0"></div>
                             <p className="text-xs font-mono text-zen-cyan uppercase tracking-widest whitespace-pre-wrap leading-relaxed max-w-[80%]">
                                {member.role}
                             </p>
                             <div className="h-px w-4 bg-zen-cyan shrink-0"></div>
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