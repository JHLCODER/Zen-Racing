import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Cpu, Sparkles } from 'lucide-react';
import { generateTeamResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIChatModal: React.FC<AIChatModalProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize or update welcome message when language changes
  useEffect(() => {
    // If messages are empty or only contain the welcome message, update it
    if (messages.length === 0 || (messages.length === 1 && messages[0].role === 'model')) {
      setMessages([
        { role: 'model', text: t('aiWelcome'), timestamp: Date.now() }
      ]);
    }
  }, [language, t]); // Add t and language dependencies

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await generateTeamResponse(input, language);
    
    const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-md bg-zen-black border border-zen-silver/20 rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.8)] flex flex-col h-[600px] max-h-[90vh] overflow-hidden relative">
        
        {/* Background decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-20 bg-zen-cyan/10 blur-xl pointer-events-none"></div>

        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-white/5 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-zen-cyan/20 rounded-full">
                 <Cpu className="text-zen-cyan" size={18} />
            </div>
            <div>
                <span className="block text-white font-tech font-bold tracking-wider text-lg leading-none">{t('zenAi')}</span>
                <span className="text-[10px] text-green-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> {t('online')}
                </span>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors hover:rotate-90 duration-300">
            <X size={24} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-thin scrollbar-thumb-zen-silver/20 scrollbar-track-transparent">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm shadow-lg ${
                msg.role === 'user' 
                  ? 'bg-zen-cyan text-black font-medium rounded-tr-sm' 
                  : 'bg-gray-900 text-gray-200 border border-white/10 rounded-tl-sm'
              }`}>
                {msg.text}
              </div>
              <span className="text-[10px] text-gray-600 mt-1 px-1">
                  {new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </span>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-900 p-4 rounded-2xl rounded-tl-sm border border-white/10 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-zen-cyan rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-zen-cyan rounded-full animate-bounce delay-75"></div>
                <div className="w-1.5 h-1.5 bg-zen-cyan rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-zen-black relative z-10">
          <div className="flex gap-3 items-center bg-gray-900/50 border border-white/10 rounded-full p-1 pl-4 focus-within:border-zen-cyan/50 focus-within:bg-gray-900 transition-colors">
            <Sparkles size={16} className="text-zen-silver/50" />
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t('aiPlaceholder')}
              className="flex-1 bg-transparent text-white text-sm focus:outline-none placeholder-gray-600 py-2"
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className="p-3 bg-white text-black rounded-full hover:bg-zen-cyan transition-colors disabled:opacity-50 disabled:hover:bg-white shadow-md"
            >
              <Send size={16} className="translate-x-0.5 translate-y-0.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};