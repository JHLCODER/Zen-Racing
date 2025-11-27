import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { SponsorDetail } from './components/SponsorDetail';
import { SponsorContact } from './components/SponsorContact';
import { Footer } from './components/Footer';
import { AIChatModal } from './components/AIChatModal';
import { CustomCursor } from './components/CustomCursor';
import { LanguageTransition } from './components/LanguageTransition';

const App: React.FC = () => {
  const [isAIOpen, setIsAIOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-zen-silver dark:bg-zen-black text-zen-black dark:text-white selection:bg-zen-cyan selection:text-black cursor-none transition-colors duration-500">
        <CustomCursor />
        <LanguageTransition />
        {/* Navbar and Footer persist across routes */}
        <Navbar onOpenAI={() => setIsAIOpen(true)} />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sponsor/:id" element={<SponsorDetail />} />
            <Route path="/sponsor/:id/contact" element={<SponsorContact />} />
            {/* Fallback route to catch any matching errors */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
        
        <AIChatModal isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
      </div>
    </Router>
  );
};

export default App;