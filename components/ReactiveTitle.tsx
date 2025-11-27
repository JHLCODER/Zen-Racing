import React, { useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface ReactiveTitleProps {
  text: string;
  className?: string;
  baseColor?: string;
}

export const ReactiveTitle: React.FC<ReactiveTitleProps> = ({ text, className = '', baseColor = '#4fb4c3' }) => {
  const titleRef = useRef<HTMLSpanElement>(null);
  const [transform, setTransform] = useState('');
  const [bgPos, setBgPos] = useState({ x: 50, y: 50 });
  const { theme } = useTheme();

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!titleRef.current) return;

    const rect = titleRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    const rotateY = ((x / rect.width) - 0.5) * 30; 
    const rotateX = ((y / rect.height) - 0.5) * -30;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`);
    setBgPos({ x: xPercent, y: yPercent });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
    setBgPos({ x: 50, y: 50 });
  };

  // Define gradients for light and dark modes using baseColor
  const darkGradient = `radial-gradient(circle at ${bgPos.x}% ${bgPos.y}%, #ffffff 0%, #e3e3e3 25%, ${baseColor} 50%, #1a1a1a 100%)`;
  const lightGradient = `radial-gradient(circle at ${bgPos.x}% ${bgPos.y}%, #000000 0%, #1a1a1a 25%, ${baseColor} 50%, #e3e3e3 100%)`;

  return (
    <span
      ref={titleRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block bg-clip-text text-transparent transition-transform duration-100 ease-out cursor-default select-none py-2 will-change-transform ${className}`}
      style={{
        backgroundImage: theme === 'dark' ? darkGradient : lightGradient,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
        transform: transform,
        filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))'
      }}
    >
      {text}
    </span>
  );
};