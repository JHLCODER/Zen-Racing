import React, { useEffect, useRef, useState } from 'react';

export const SectionDivider: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5, rootMargin: "0px 0px -10% 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full flex items-center justify-center py-0 overflow-visible z-30 pointer-events-none" style={{ height: '2px' }}>
       {/* Trigger Element */}
       <div ref={ref} className="absolute w-full h-1 opacity-0 top-0" />

       {/* Left Line */}
       <div className={`h-px bg-gradient-to-r from-transparent via-zen-silver/20 to-zen-cyan/50 w-full max-w-[45%] transform transition-all duration-1000 ease-luxury origin-right ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} />
       
       {/* Center Node */}
       <div className={`relative w-2 h-2 shrink-0 mx-4 transform transition-all duration-700 delay-150 ${isVisible ? 'scale-100 rotate-45 opacity-100' : 'scale-0 rotate-0 opacity-0'}`}>
          <div className="absolute inset-0 bg-zen-black border border-zen-cyan shadow-[0_0_10px_rgba(79,180,195,0.8)]" />
          <div className={`absolute inset-0 bg-zen-cyan/50 ${isVisible ? 'animate-ping' : ''}`} style={{ animationDuration: '3s' }} />
       </div>

       {/* Right Line */}
       <div className={`h-px bg-gradient-to-l from-transparent via-zen-silver/20 to-zen-cyan/50 w-full max-w-[45%] transform transition-all duration-1000 ease-luxury origin-left ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} />
    </div>
  );
};