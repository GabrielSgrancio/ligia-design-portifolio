import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import MirrorFrame from './MirrorFrame';
import MirrorReflection from './MirrorReflection';

interface InteractiveMirrorProps {
  className?: string;
  onExploreClick?: () => void;
}

/**
 * InteractiveMirror
 * The signature protagonist of the portfolio:
 * An authentic antique carved oval wall mirror occupying 45-55% of the viewport width.
 * Features an organic, subtle, inertia-driven water/glass displacement that reacts
 * with slow, elegant physics when touched or hovered, settling back to rest.
 */
export default function InteractiveMirror({
  className = '',
  onExploreClick,
}: InteractiveMirrorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const filterId = 'vintage-mirror-distortion';

  // Motion reduction preference
  const [reducedMotion, setReducedMotion] = useState(false);

  // Interaction State
  const [isInteracting, setIsInteracting] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [rippleIntensity, setRippleIntensity] = useState(0);

  // Mutable Physics Refs for 60fps jitter-free RAF loop with inertia
  const targetPosRef = useRef({ x: 0, y: 0 });
  const currentPosRef = useRef({ x: 0, y: 0 });
  const targetScaleRef = useRef(0);
  const currentScaleRef = useRef(0);
  const prevPosRef = useRef({ x: 0, y: 0 });
  const rafIdRef = useRef<number | null>(null);
  const isLoopRunningRef = useRef(false);
  const turbulenceRef = useRef<SVGFETurbulenceElement | null>(null);
  const displacementRef = useRef<SVGFEDisplacementMapElement | null>(null);
  const phaseRef = useRef(0);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Smooth Inertial Physics Loop (Subtle, slow, organic water/glass displacement)
  const updatePhysics = useCallback(() => {
    if (reducedMotion) {
      isLoopRunningRef.current = false;
      return;
    }

    // Slow, organic lerp for physical glass weight and delayed inertia
    const lerpFactor = 0.038;
    currentPosRef.current.x += (targetPosRef.current.x - currentPosRef.current.x) * lerpFactor;
    currentPosRef.current.y += (targetPosRef.current.y - currentPosRef.current.y) * lerpFactor;

    // Calculate instantaneous velocity
    const dx = currentPosRef.current.x - prevPosRef.current.x;
    const dy = currentPosRef.current.y - prevPosRef.current.y;
    const velocity = Math.sqrt(dx * dx + dy * dy);
    prevPosRef.current = { ...currentPosRef.current };

    // Target displacement scale: extremely subtle, calm optical undulation (preserves photographic integrity)
    if (isInteracting) {
      targetScaleRef.current = Math.min(0.5 + velocity * 8, 1.5);
    } else {
      targetScaleRef.current = 0;
    }

    // Smooth damping decay
    currentScaleRef.current += (targetScaleRef.current - currentScaleRef.current) * 0.025;

    // Advance undulating glass phase very slowly
    phaseRef.current += 0.0035 + velocity * 0.012;
    const baseFreqX = 0.009 + Math.sin(phaseRef.current * 0.5) * 0.0015;
    const baseFreqY = 0.012 + Math.cos(phaseRef.current * 0.4) * 0.0015;

    // Direct DOM mutation on SVG filter for optimal 60fps performance without React re-render overhead
    if (displacementRef.current) {
      displacementRef.current.setAttribute('scale', currentScaleRef.current.toFixed(2));
    }
    if (turbulenceRef.current) {
      turbulenceRef.current.setAttribute(
        'baseFrequency',
        `${baseFreqX.toFixed(4)} ${baseFreqY.toFixed(4)}`
      );
    }

    // Sync React state for lighting highlights (throttled by RAF)
    setCursorPos({
      x: Number(currentPosRef.current.x.toFixed(3)),
      y: Number(currentPosRef.current.y.toFixed(3)),
    });
    setRippleIntensity(Number((currentScaleRef.current / 3.5).toFixed(3)));

    // Continue loop only while interacting or physics is settling
    const isSettling =
      currentScaleRef.current > 0.04 ||
      Math.abs(currentPosRef.current.x - targetPosRef.current.x) > 0.004 ||
      Math.abs(currentPosRef.current.y - targetPosRef.current.y) > 0.004;

    if (isInteracting || isSettling) {
      rafIdRef.current = requestAnimationFrame(updatePhysics);
    } else {
      isLoopRunningRef.current = false;
      if (displacementRef.current) {
        displacementRef.current.setAttribute('scale', '0');
      }
      setRippleIntensity(0);
    }
  }, [isInteracting, reducedMotion]);

  // Start RAF loop when needed
  const startPhysicsLoop = useCallback(() => {
    if (!isLoopRunningRef.current && !reducedMotion) {
      isLoopRunningRef.current = true;
      rafIdRef.current = requestAnimationFrame(updatePhysics);
    }
  }, [updatePhysics, reducedMotion]);

  useEffect(() => {
    if (isInteracting) {
      startPhysicsLoop();
    }
  }, [isInteracting, startPhysicsLoop]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  // Mouse tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

    targetPosRef.current = {
      x: Math.max(-1, Math.min(1, x)),
      y: Math.max(-1, Math.min(1, y)),
    };

    if (!isInteracting) {
      setIsInteracting(true);
    }
    startPhysicsLoop();
  };

  const handleMouseEnter = () => {
    setIsInteracting(true);
    startPhysicsLoop();
  };

  const handleMouseLeave = () => {
    setIsInteracting(false);
    targetPosRef.current = { x: 0, y: 0 };
    startPhysicsLoop();
  };

  // Touch handling
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((touch.clientY - rect.top) / rect.height) * 2 - 1;

    targetPosRef.current = {
      x: Math.max(-1, Math.min(1, x)),
      y: Math.max(-1, Math.min(1, y)),
    };

    if (!isInteracting) {
      setIsInteracting(true);
    }
    startPhysicsLoop();
  };

  const handleTouchEnd = () => {
    setIsInteracting(false);
    targetPosRef.current = { x: 0, y: 0 };
    startPhysicsLoop();
  };

  return (
    <div className={`relative flex justify-center items-center ${className}`}>
      {/* Invisible Inline SVG Filter for Organic Water/Glass Undulation */}
      <svg
        aria-hidden="true"
        className="absolute w-0 h-0 pointer-events-none opacity-0 overflow-hidden"
        style={{ position: 'absolute', width: 0, height: 0 }}
      >
        <defs>
          <filter
            id={filterId}
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              ref={turbulenceRef}
              type="fractalNoise"
              baseFrequency="0.009 0.012"
              numOctaves="2"
              seed="19"
              result="undulatingWater"
            />
            <feDisplacementMap
              ref={displacementRef}
              in="SourceGraphic"
              in2="undulatingWater"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displacedReflection"
            />
          </filter>
        </defs>
      </svg>

      {/* Dominant Mirror Container (Commanding 45-55% visual width on desktop) */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleTouchEnd}
        className="relative w-[420px] sm:w-[560px] md:w-[680px] lg:w-[800px] xl:w-[920px] cursor-grab active:cursor-grabbing transition-transform duration-700 ease-out"
        style={{
          perspective: 1200,
        }}
      >
        {/* Physical Antique Oval Carved Frame */}
        <MirrorFrame>
          {/* Glass & Real Atmospheric Lígia Reflection */}
          <MirrorReflection
            cursorX={cursorPos.x}
            cursorY={cursorPos.y}
            rippleIntensity={rippleIntensity}
            isInteracting={isInteracting}
            filterId={filterId}
            reducedMotion={reducedMotion}
          >
            {/* Top Eyebrow / Salutation */}
            <div className="pt-6 sm:pt-9 md:pt-11 text-center pointer-events-none">
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.32em] text-[#FAF8F7]/80 uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                Olá, eu sou
              </span>
            </div>

            {/* Central Identity & Core Narrative Statement */}
            <div className="flex flex-col items-center text-center px-4 sm:px-8 space-y-2 sm:space-y-3 md:space-y-3.5 my-auto pointer-events-none">
              {/* Grand Display Name: Lígia Dias (Clear presence and hierarchy) */}
              <h1
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal text-[#FAF8F7] leading-tight tracking-tight"
                style={{
                  textShadow:
                    '0 4px 18px rgba(24, 18, 20, 0.65), 0 1px 3px rgba(0, 0, 0, 0.8)',
                }}
              >
                Lígia Dias
              </h1>

              {/* Professional Disciplines: UX/UI DESIGNER • PRODUCT DESIGNER */}
              <div className="text-[11px] sm:text-xs md:text-sm font-sans tracking-[0.24em] text-[#FAF8F7]/95 uppercase font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                UX/UI Designer
                <span className="text-[#E8CDD2]/70 mx-2">•</span>
                Product Designer
              </div>

              {/* Delicate Subtle Vertical Separator */}
              <div className="w-px h-5 sm:h-7 bg-gradient-to-b from-transparent via-[#FAF8F7]/50 to-transparent my-1" />

              {/* Signature Philosophy Statement */}
              <p
                className="font-serif italic text-base sm:text-lg md:text-xl text-[#FAF8F7]/95 max-w-[280px] sm:max-w-[340px] leading-relaxed font-light"
                style={{
                  textShadow:
                    '0 2px 12px rgba(24, 18, 20, 0.7), 0 1px 2px rgba(0, 0, 0, 0.8)',
                }}
              >
                &ldquo;Antes de criar, <br />
                eu precisei aprender a olhar.&rdquo;
              </p>
            </div>

            {/* Bottom Explore / Scroll Cue */}
            <div className="pb-5 sm:pb-7 md:pb-9 text-center pointer-events-auto">
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex flex-col items-center space-y-1 text-[#FAF8F7]/80 hover:text-[#FAF8F7] transition-all group cursor-pointer"
                aria-label="Explorar narrativa do portfolio"
              >
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-sans font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                  Explorar
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-[#FAF8F7]/75 transition-transform duration-300 group-hover:translate-y-1" />
              </button>
            </div>
          </MirrorReflection>
        </MirrorFrame>
      </div>
    </div>
  );
}
