import React, { useRef, useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import MirrorFrame from './MirrorFrame';
import MirrorReflection from './MirrorReflection';

interface InteractiveMirrorProps {
  className?: string;
  onExploreClick?: () => void;
}

/**
 * InteractiveMirror
 * The signature protagonist of the portfolio.
 * An authentic antique carved oval wall mirror occupying a large portion of the viewport.
 * Features an optical parallax reflection that responds to mouse movement, creating subtle depth.
 */
export default function InteractiveMirror({
  className = '',
  onExploreClick,
}: InteractiveMirrorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current || reducedMotion) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;

    setCursor({
      x: Math.max(-1, Math.min(1, x)),
      y: Math.max(-1, Math.min(1, y)),
    });
  };

  const handlePointerLeave = () => {
    setIsInteracting(false);
    setCursor({ x: 0, y: 0 });
  };

  return (
    <div className={`relative flex justify-center items-center ${className}`}>
      {/* Dominant Mirror Container (Commanding protagonist presence) */}
      <div
        ref={containerRef}
        onPointerMove={handlePointerMove}
        onPointerEnter={() => setIsInteracting(true)}
        onPointerLeave={handlePointerLeave}
        className="relative w-[480px] sm:w-[620px] md:w-[740px] lg:w-[860px] xl:w-[980px] 2xl:w-[1040px] transition-transform duration-700 ease-out"
        style={{ perspective: 1200 }}
      >
        {/* Physical Antique Oval Carved Frame */}
        <MirrorFrame>
          {/* Glass & Real Atmospheric Lígia Reflection */}
          <MirrorReflection
            cursorX={cursor.x}
            cursorY={cursor.y}
            isInteracting={isInteracting}
            reducedMotion={reducedMotion}
          >
            {/* Top Eyebrow / Salutation */}
            <div className="pt-8 sm:pt-11 md:pt-14 text-center pointer-events-none">
              <span className="text-[10px] sm:text-[11px] md:text-xs font-sans tracking-[0.32em] text-[#FAF8F7]/85 uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                Olá, eu sou
              </span>
            </div>

            {/* Central Identity & Core Narrative Statement */}
            <div className="flex flex-col items-center text-center px-4 sm:px-8 space-y-2 sm:space-y-3.5 md:space-y-4 my-auto pointer-events-none">
              <h1
                className="font-serif text-5xl sm:text-6xl md:text-[72px] lg:text-[84px] font-normal text-[#FAF8F7] leading-tight tracking-tight"
                style={{
                  textShadow: '0 4px 18px rgba(24, 18, 20, 0.65), 0 1px 3px rgba(0, 0, 0, 0.8)',
                }}
              >
                Lígia Dias
              </h1>

              <div className="text-[10px] sm:text-xs md:text-[13px] font-sans tracking-[0.24em] text-[#FAF8F7]/95 uppercase font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                UX/UI Designer
                <span className="text-[#E8CDD2]/70 mx-2 sm:mx-3">•</span>
                Product Designer
              </div>

              <div className="w-px h-6 sm:h-8 md:h-10 bg-gradient-to-b from-transparent via-[#FAF8F7]/40 to-transparent my-1 sm:my-2" />

              <p
                className="font-serif italic text-[17px] sm:text-lg md:text-[22px] text-[#FAF8F7]/95 max-w-[280px] sm:max-w-[360px] md:max-w-[420px] leading-relaxed font-light"
                style={{
                  textShadow: '0 2px 12px rgba(24, 18, 20, 0.7), 0 1px 2px rgba(0, 0, 0, 0.8)',
                }}
              >
                &ldquo;Antes de criar, <br />
                eu precisei aprender a olhar.&rdquo;
              </p>
            </div>

            {/* Bottom Explore / Scroll Cue */}
            <div className="pb-8 sm:pb-10 md:pb-14 text-center pointer-events-auto">
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex flex-col items-center space-y-1 text-[#FAF8F7]/80 hover:text-[#FAF8F7] transition-all group cursor-pointer"
                aria-label="Explorar narrativa do portfolio"
              >
                <span className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-sans font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                  Explorar
                </span>
                <ChevronDown className="w-4 h-4 text-[#FAF8F7]/75 transition-transform duration-300 group-hover:translate-y-1" />
              </button>
            </div>
          </MirrorReflection>
        </MirrorFrame>
      </div>
    </div>
  );
}
