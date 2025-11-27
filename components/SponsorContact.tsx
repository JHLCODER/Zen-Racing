import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SPONSOR_TIERS, SPONSOR_TIERS_ZH } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, Loader2, CheckCircle, AlertCircle, Building2, User, Phone, Send } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { ReactiveTitle } from './ReactiveTitle';
import { useTheme } from '../contexts/ThemeContext';

export const SponsorContact: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  
  const allTiers = language === 'en' ? SPONSOR_TIERS : SPONSOR_TIERS_ZH;
  const tier = allTiers.find(t => t.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  if (!tier) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zen-black text-white">
        <button onClick={() => navigate('/')}>Return Home</button>
      </div>
    );
  }

  // Determine styling based on tier
  const isPlatinum = tier.id === 'platinum';
  const isGold = tier.id === 'gold';
  const isSilver = tier.id === 'silver';
  const isProduct = tier.id === 'product';
  
  let accentColor = 'text-zen-black dark:text-zen-silver';
  let glowColor = 'rgba(79, 180, 195, 0.2)';
  let borderColor = 'border-zen-cyan/30';
  let btnColor = 'bg-zen-black dark:bg-zen-silver text-white dark:text-black hover:bg-zen-cyan';
  let titleColorHex = '#4fb4c3'; // Default Cyan

  if (isGold) {
      accentColor = 'text-zen-gold';
      glowColor = 'rgba(212, 175, 55, 0.3)';
      borderColor = 'border-zen-gold/50';
      btnColor = 'bg-zen-gold text-black hover:bg-white';
      titleColorHex = '#D4AF37'; // Gold
  } else if (isPlatinum) {
      accentColor = 'text-[#b9f2ff]';
      glowColor = 'rgba(185, 242, 255, 0.4)';
      borderColor = 'border-[#b9f2ff]/50';
      btnColor = 'bg-[#b9f2ff] text-black hover:bg-white';
      titleColorHex = '#b9f2ff'; // Platinum
  } else if (isSilver) {
      accentColor = 'text-zen-black dark:text-zen-silver';
      glowColor = 'rgba(227, 227, 227, 0.3)';
      borderColor = 'border-zen-silver/50';
      btnColor = 'bg-zen-black dark:bg-zen-silver text-white dark:text-black hover:bg-white dark:hover:bg-white';
      titleColorHex = '#e3e3e3'; // Silver
  } else if (isProduct) {
      accentColor = 'text-zen-cyan';
      glowColor = 'rgba(79, 180, 195, 0.3)';
      borderColor = 'border-zen-cyan/50';
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Generate payload with specific flags for the backend
    const payload = {
        ...formData,
        subject: `[SPONSORSHIP APP] ${tier.name} - ${formData.company}`,
        tierId: tier.id,
        isSponsorship: true
    };

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
      } else {
         console.error('Server error');
         setStatus('error'); 
      }
    } catch (error) {
      console.error('Network error', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-zen-silver dark:bg-zen-black relative overflow-hidden transition-colors duration-500">
       
       {/* Ambient Background */}
       <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
       <div 
         className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] rounded-full blur-[120px] pointer-events-none transition-colors duration-500 opacity-40"
         style={{ backgroundColor: glowColor }}
       ></div>

       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <button 
            onClick={() => navigate(`/sponsor/${id}`)} 
            className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-gray-500 hover:text-zen-black dark:text-gray-400 dark:hover:text-white mb-8 transition-colors group"
          >
             <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
             {t('backToDetails')}
          </button>

          <FadeIn direction="up">
             <div className="text-center mb-10">
                <h2 className="text-sm font-mono tracking-widest uppercase font-bold text-gray-500 dark:text-gray-400 mb-2">
                    {t('applyFor')}
                </h2>
                <h1 className={`text-4xl md:text-5xl font-bold font-tech uppercase tracking-tight mb-2 ${accentColor}`}>
                    <ReactiveTitle text={tier.name} baseColor={titleColorHex} />
                </h1>
                <p className={`text-xl font-mono ${accentColor} opacity-80`}>{tier.price}</p>
             </div>

             <div className={`glass-panel bg-white/60 dark:bg-black/40 border ${borderColor} rounded-2xl overflow-hidden relative shadow-2xl backdrop-blur-md`}>
                
                {status === 'success' ? (
                    <div className="p-16 text-center flex flex-col items-center animate-in fade-in zoom-in duration-500">
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ring-1 ring-current ${accentColor} bg-current/10`}>
                            <CheckCircle size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-zen-black dark:text-white font-tech uppercase mb-4">{t('appReceived')}</h3>
                        <p className="text-gray-600 dark:text-gray-300 max-w-md leading-relaxed">
                            {t('appThankYou')}
                        </p>
                        <button 
                            onClick={() => navigate('/')}
                            className="mt-8 px-8 py-3 bg-transparent border border-gray-300 dark:border-white/20 hover:border-zen-cyan text-zen-black dark:text-white rounded uppercase tracking-widest text-sm transition-colors"
                        >
                            Return Home
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
                        {/* Company & Role */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase text-gray-500 dark:text-gray-400 font-bold tracking-wider flex items-center gap-2">
                                    <Building2 size={14} /> {t('companyName')}
                                </label>
                                <input 
                                    type="text" name="company" required value={formData.company} onChange={handleChange}
                                    className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded p-4 text-zen-black dark:text-zen-silver focus:outline-none focus:border-current focus:ring-1 focus:ring-current transition-all"
                                    style={{ color: 'inherit' }}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase text-gray-500 dark:text-gray-400 font-bold tracking-wider flex items-center gap-2">
                                    <User size={14} /> {t('position')}
                                </label>
                                <input 
                                    type="text" name="position" required value={formData.position} onChange={handleChange}
                                    className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded p-4 text-zen-black dark:text-zen-silver focus:outline-none focus:border-current focus:ring-1 focus:ring-current transition-all"
                                />
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase text-gray-500 dark:text-gray-400 font-bold tracking-wider">{t('name')}</label>
                                <input 
                                    type="text" name="name" required value={formData.name} onChange={handleChange}
                                    className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded p-4 text-zen-black dark:text-zen-silver focus:outline-none focus:border-current focus:ring-1 focus:ring-current transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase text-gray-500 dark:text-gray-400 font-bold tracking-wider">{t('email')}</label>
                                <input 
                                    type="email" name="email" required value={formData.email} onChange={handleChange}
                                    className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded p-4 text-zen-black dark:text-zen-silver focus:outline-none focus:border-current focus:ring-1 focus:ring-current transition-all"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                             <label className="text-xs uppercase text-gray-500 dark:text-gray-400 font-bold tracking-wider flex items-center gap-2">
                                <Phone size={14} /> {t('phone')}
                             </label>
                             <input 
                                type="tel" name="phone" value={formData.phone} onChange={handleChange}
                                className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded p-4 text-zen-black dark:text-zen-silver focus:outline-none focus:border-current focus:ring-1 focus:ring-current transition-all"
                             />
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label className="text-xs uppercase text-gray-500 dark:text-gray-400 font-bold tracking-wider">{t('partnershipGoals')}</label>
                            <textarea 
                                name="message" rows={5} required value={formData.message} onChange={handleChange}
                                className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded p-4 text-zen-black dark:text-zen-silver focus:outline-none focus:border-current focus:ring-1 focus:ring-current transition-all resize-none"
                            ></textarea>
                        </div>

                        {/* Error Message Display */}
                        {status === 'error' && (
                           <div className="p-3 bg-red-500/10 border border-red-500/50 rounded flex items-center gap-2 text-red-500 text-sm animate-in fade-in">
                              <AlertCircle size={16} />
                              <span>{language === 'en' ? 'Connection failed. Please check your internet or try again later.' : '连接失败。请检查您的网络或稍后重试。'}</span>
                           </div>
                        )}

                        <button 
                            type="submit" 
                            disabled={status === 'sending'}
                            className={`w-full py-4 font-bold uppercase tracking-[0.2em] rounded shadow-lg transition-all flex items-center justify-center gap-2 ${btnColor} disabled:opacity-70`}
                        >
                            {status === 'sending' ? (
                                <> <Loader2 className="animate-spin" size={20} /> {t('transmitting')} </>
                            ) : (
                                <> {t('submitApplication')} <Send size={18} /> </>
                            )}
                        </button>
                    </form>
                )}
             </div>
          </FadeIn>
       </div>
    </div>
  );
};