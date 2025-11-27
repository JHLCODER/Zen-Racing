import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  // Use refs for direct DOM manipulation (bypasses React render cycle for performance)
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  
  // Track position via refs to avoid re-renders on every pixel move
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  
  // State only for visual style changes (hover/visible), not coordinates
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
      
      // Update inner dot INSTANTLY for zero latency feel
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%) scale(${isHovering ? 2 : 1})`;
      }
    };

    const onMouseDown = () => setIsHovering(true);
    const onMouseUp = () => setIsHovering(false);

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);
    
    const onElementMouseEnter = () => setIsHovering(true);
    const onElementMouseLeave = () => setIsHovering(false);

    // Animation loop for the outer ring (creates the smooth "lag" effect intentionally, but performantly)
    let rafId: number;
    const animateRing = () => {
      // Linear Interpolation (Lerp) for smooth movement
      // 0.15 = speed factor (higher is faster)
      const ease = 0.15;
      
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`;
      }

      rafId = requestAnimationFrame(animateRing);
    };

    // Add Listeners
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    
    // Start loop
    rafId = requestAnimationFrame(animateRing);

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll("a, button, input, textarea, [role='button']");
      interactiveElements.forEach(el => {
        el.addEventListener("mouseenter", onElementMouseEnter);
        el.addEventListener("mouseleave", onElementMouseLeave);
      });
    };

    const removeHoverListeners = () => {
        const interactiveElements = document.querySelectorAll("a, button, input, textarea, [role='button']");
        interactiveElements.forEach(el => {
          el.removeEventListener("mouseenter", onElementMouseEnter);
          el.removeEventListener("mouseleave", onElementMouseLeave);
        });
    };

    // Initial add
    addHoverListeners();

    // Watch for DOM changes to attach listeners to new elements
    const observer = new MutationObserver(() => {
        removeHoverListeners();
        addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      removeHoverListeners();
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [isHovering, isVisible]); // Re-run if hover state changes to update scale immediately

  // Don't render on touch devices
  if (typeof navigator !== 'undefined' && typeof window !== 'undefined') {
      if (window.matchMedia("(pointer: coarse)").matches) return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] mix-blend-difference">
      {/* Inner Dot - Tracks Instantly */}
      <div 
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-4 h-4 bg-zen-cyan rounded-full transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
            willChange: 'transform',
            pointerEvents: 'none' // Ensure click-through
        }}
      />
      
      {/* Outer Ring - Smooth Follow */}
      <div 
        ref={cursorRingRef}
        className={`fixed top-0 left-0 w-8 h-8 border border-zen-silver rounded-full transition-all duration-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
            borderColor: isHovering ? '#4fb4c3' : '#e3e3e3',
            willChange: 'transform',
            pointerEvents: 'none'
        }}
      />
    </div>
  );
};