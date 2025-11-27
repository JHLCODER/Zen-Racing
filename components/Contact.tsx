import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { Mail, Instagram, Linkedin, Twitter, ArrowUpRight, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 bg-white dark:bg-zen-black relative transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <FadeIn direction="right">
            <div>
              <h2 className="text-zen-cyan font-mono tracking-widest uppercase text-xs font-bold mb-4">{t('communication')}</h2>
              <h3 className="text-5xl font-bold text-zen-black dark:text-zen-silver mb-8">{t('startYourEngine')}</h3>
              <p className="text-gray-600 dark:text-zen-silver/60 mb-12 text-lg font-light max-w-md">
                {t('contactDesc')}
              </p>
              
              <div className="space-y-8">
                <a href="mailto:zenracingteam@gmail.com" className="group flex items-center text-2xl text-zen-black dark:text-zen-silver hover:text-zen-cyan dark:hover:text-zen-cyan transition-colors font-tech">
                  <Mail className="mr-4 text-gray-500 dark:text-zen-silver" /> zenracingteam@gmail.com <ArrowUpRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                </a>
                <div className="flex gap-6 mt-8">
                  {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                      <div key={i} className="p-4 bg-gray-100 dark:bg-white/5 rounded-full hover:bg-zen-cyan hover:text-black text-gray-600 dark:text-zen-silver transition-all cursor-pointer hover:shadow-[0_0_20px_rgba(79,180,195,0.4)]">
                        <Icon size={24} />
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200} direction="left">
            <form onSubmit={handleSubmit} className="space-y-6 p-8 glass-panel rounded-xl relative overflow-hidden bg-white/50 dark:bg-transparent">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase text-gray-500 dark:text-zen-silver/50 font-bold tracking-wider">{t('name')}</label>
                    <input 
                      type="text" 
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={status === 'sending'}
                      className="w-full bg-gray-100 dark:bg-black/50 border border-gray-300 dark:border-white/10 rounded p-4 text-zen-black dark:text-zen-silver focus:outline-none focus:border-zen-cyan/50 focus:ring-1 focus:ring-zen-cyan/50 transition-all disabled:opacity-50" 
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase text-gray-500 dark:text-zen-silver/50 font-bold tracking-wider">{t('email')}</label>
                    <input 
                      type="email" 
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={status === 'sending'}
                      className="w-full bg-gray-100 dark:bg-black/50 border border-gray-300 dark:border-white/10 rounded p-4 text-zen-black dark:text-zen-silver focus:outline-none focus:border-zen-cyan/50 focus:ring-1 focus:ring-zen-cyan/50 transition-all disabled:opacity-50" 
                    />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs uppercase text-gray-500 dark:text-zen-silver/50 font-bold tracking-wider">{t('subject')}</label>
                <input 
                  type="text" 
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  className="w-full bg-gray-100 dark:bg-black/50 border border-gray-300 dark:border-white/10 rounded p-4 text-zen-black dark:text-zen-silver focus:outline-none focus:border-zen-cyan/50 focus:ring-1 focus:ring-zen-cyan/50 transition-all disabled:opacity-50" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase text-gray-500 dark:text-zen-silver/50 font-bold tracking-wider">{t('message')}</label>
                <textarea 
                  name="message"
                  id="message"
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  className="w-full bg-gray-100 dark:bg-black/50 border border-gray-300 dark:border-white/10 rounded p-4 text-zen-black dark:text-zen-silver focus:outline-none focus:border-zen-cyan/50 focus:ring-1 focus:ring-zen-cyan/50 transition-all resize-none disabled:opacity-50"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending' || status === 'success'}
                className={`w-full font-bold uppercase tracking-[0.2em] py-4 transition-all shadow-lg flex items-center justify-center gap-2
                  ${status === 'success' 
                    ? 'bg-green-500 text-black cursor-default' 
                    : status === 'error'
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-zen-black dark:bg-zen-silver text-white dark:text-black hover:bg-zen-cyan dark:hover:bg-zen-cyan hover:shadow-[0_0_20px_rgba(79,180,195,0.3)]'
                  }
                  disabled:opacity-80
                `}
              >
                {status === 'sending' && (
                  <>
                    <Loader2 className="animate-spin" size={20} /> {t('transmitting')}
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle size={20} /> {t('received')}
                  </>
                )}
                {status === 'error' && (
                  <>
                    <AlertCircle size={20} /> {t('failed')}
                  </>
                )}
                {status === 'idle' && t('transmit')}
              </button>

              {status === 'success' && (
                <div className="absolute inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center z-20 text-center p-8 animate-in fade-in duration-300">
                   <div className="w-16 h-16 bg-zen-cyan/20 rounded-full flex items-center justify-center mb-4 ring-1 ring-zen-cyan">
                      <CheckCircle className="text-zen-cyan" size={32} />
                   </div>
                   <h4 className="text-2xl font-bold text-zen-black dark:text-white mb-2 font-tech">{t('dataReceived')}</h4>
                   <p className="text-gray-600 dark:text-zen-silver/60">{t('thankYou')}</p>
                </div>
              )}
            </form>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};