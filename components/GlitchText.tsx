import React, { useState, useEffect, useRef } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '', as: Component = 'span' }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<any>(null);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

  const startGlitch = () => {
    setIsHovering(true);
    let iteration = 0;
    
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);
  };

  const stopGlitch = () => {
    setIsHovering(false);
    clearInterval(intervalRef.current);
    setDisplayText(text);
  };

  useEffect(() => {
    setDisplayText(text);
  }, [text]);

  // @ts-ignore
  return (
    <Component 
      className={`cursor-default ${className}`}
      onMouseEnter={startGlitch}
      onMouseLeave={stopGlitch}
    >
      {displayText}
    </Component>
  );
};