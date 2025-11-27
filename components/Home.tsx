import React, { useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from './Hero';
import { About } from './About';
import { WhatIsF1 } from './WhatIsF1';
import { Engineering } from './Engineering';
import { Sustainability } from './Sustainability';
import { Sponsorship } from './Sponsorship';
import { Timeline } from './Timeline';
import { Contact } from './Contact';

export const Home: React.FC = () => {
  const location = useLocation();
  // Start transparent to hide any initial jumps
  const [opacity, setOpacity] = useState(0);

  useLayoutEffect(() => {
    // Disable browser's default scroll restoration to take full manual control
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const state = location.state as { returnToSponsors?: boolean } | null;

    if (state?.returnToSponsors) {
      // Case 1: Returning from Detail Page -> Snap to Sponsorship Grid
      const anchor = document.getElementById('sponsorship-grid-anchor');
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
      // Clear state so a refresh sends user to top
      window.history.replaceState({}, document.title);
    } else {
      // Case 2: Default Load / Refresh -> Force Snap to Top (Hero)
      window.scrollTo(0, 0);
    }

    // Reveal content after position is set
    requestAnimationFrame(() => {
      setOpacity(1);
    });
  }, [location]);

  return (
    <div className="transition-opacity duration-500 ease-out min-h-screen" style={{ opacity: opacity }}>
      <Hero />
      <WhatIsF1 />
      <About />
      <Engineering />
      <Timeline />
      <Sustainability />
      <Sponsorship />
      <Contact />
    </div>
  );
};