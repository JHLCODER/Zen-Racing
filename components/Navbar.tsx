import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, NAV_ITEMS_ZH } from '../constants';
import { Menu, X, Sparkles, Languages, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  onOpenAI: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAI }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, switchLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = language === 'en' ? NAV_ITEMS : NAV_ITEMS_ZH;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    
    // If not on home page, navigate home first
    if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation then scroll
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300); // Increased timeout slightly for hash router stability
    } else {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  const handleLanguageChange = () => {
    switchLanguage();
  };

  return (
    <nav 
      className={`fixed z-50 transition-all duration-1000 ease-luxury flex items-center left-1/2 -translate-x-1/2
        ${scrolled 
          ? 'top-6 w-[92%] max-w-6xl rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-xl py-2 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
          : 'top-0 w-full rounded-none border border-transparent bg-transparent py-6 shadow-none'
        }
      `}
    >
      <div className={`w-full ${scrolled ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => scrollToSection('hero')}>
            {/* Logo Image Replacement */}
            <img 
              src="/zen-logo.png" 
              alt="Zen Racing" 
              className={`object-contain transition-all duration-500 filter ${theme === 'light' ? 'invert brightness-0' : 'invert-0'} ${scrolled ? 'h-8' : 'h-12'}`}
            />
          </div>
          
          <div className="hidden md:block">
            <div className={`ml-10 flex items-center ${language === 'zh' ? 'space-x-10' : 'space-x-6'}`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-zen-black dark:text-zen-silver hover:text-zen-cyan dark:hover:text-zen-cyan font-medium transition-colors duration-300 uppercase relative group
                    ${language === 'zh' ? 'text-base tracking-[0.15em]' : 'text-sm tracking-widest'}
                  `}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zen-cyan transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              
              <div className="h-6 w-px bg-black/10 dark:bg-white/10 mx-2"></div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="text-zen-black dark:text-zen-silver hover:text-zen-cyan transition-colors p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
                title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Translate Button */}
              <button
                onClick={handleLanguageChange}
                className="text-zen-black dark:text-zen-silver hover:text-zen-cyan transition-colors p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
                title={language === 'en' ? "Switch to Chinese" : "Switch to English"}
              >
                <Languages size={18} />
                {language === 'en' ? 'CN' : 'EN'}
              </button>

              <button
                onClick={onOpenAI}
                className={`ml-2 bg-zen-cyan/10 border border-zen-cyan/50 text-zen-cyan hover:bg-zen-cyan hover:text-black rounded-full font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-[0_0_10px_rgba(79,180,195,0.1)] hover:shadow-[0_0_20px_rgba(79,180,195,0.4)]
                  ${scrolled ? 'px-4 py-1.5 text-xs' : 'px-4 py-2 text-sm'}
                `}
              >
                <Sparkles size={16} />
                {language === 'en' ? 'Ask Zen AI' : '询问 AI'}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
                onClick={toggleTheme}
                className="text-zen-black dark:text-zen-silver hover:text-zen-cyan transition-colors p-1"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

             <button
                onClick={handleLanguageChange}
                className="text-zen-black dark:text-zen-silver hover:text-zen-cyan transition-colors p-1"
              >
                <Languages size={20} />
              </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zen-black dark:text-zen-silver hover:text-zen-cyan transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className={`md:hidden absolute left-0 w-full glass-panel border-b border-black/10 dark:border-white/10 py-4 transition-all duration-300 ${scrolled ? 'top-[calc(100%+10px)] rounded-2xl' : 'top-full'}`}>
          <div className="flex flex-col space-y-4 px-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-zen-black dark:text-zen-silver hover:text-zen-cyan text-sm font-medium uppercase tracking-widest py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenAI();
              }}
              className="text-left text-zen-cyan font-bold uppercase tracking-widest py-2 flex items-center gap-2"
            >
              <Sparkles size={16} />
              {language === 'en' ? 'Ask Zen AI' : '询问 AI'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};