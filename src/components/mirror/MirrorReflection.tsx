import React, { useState } from 'react';

interface MirrorReflectionProps {
  children?: React.ReactNode;
  interactive?: boolean;
  filterId?: string;
  isInteracting?: boolean;
  reducedMotion?: boolean;
  cursorX?: number;
  cursorY?: number;
  rippleIntensity?: number;
}

/**
 * MirrorReflection
 * Art-directed photographic reflection of Lígia in an antique silver-mercury mirror.
 */
export default function MirrorReflection({
  children,
  filterId,
  isInteracting = false,
  reducedMotion = false,
  cursorX = 0,
  cursorY = 0,
}: MirrorReflectionProps) {
  // Subtle natural optical parallax shift when moving the cursor
  const reflectionShiftX = reducedMotion ? 0 : cursorX * 6;
  const reflectionShiftY = reducedMotion ? 0 : cursorY * 4;

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-transparent">

      {/* ========================================================================= */}
      {/* 1. [LÍGIA'S REAL REFLECTION]                                              */}
      {/* ========================================================================= */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-transform"
        style={{
          // Apply SVG displacement filter for calm water undulation
          filter: filterId && !reducedMotion ? `url(#${filterId})` : undefined,
          transform: `translate(${reflectionShiftX}px, ${reflectionShiftY}px)`,
          transition: isInteracting
            ? 'transform 0.18s ease-out'
            : 'transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <img
          src="/assets/ligia-reflection.jpg"
          alt=""
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-[1200ms] ${isInteracting ? 'scale-[1.03]' : 'scale-100'}`}
          style={{
            // Photographic treatment: Deep antique glass feel, murky and warm, less digital contrast
            filter: `blur(${isInteracting ? '4px' : '2px'}) brightness(0.85) contrast(0.85) sepia(0.2) saturate(0.8)`,
          }}
        />
        
        {/* Subtle glass reflection overlay to tie it to the environment (light from window) */}
        <div 
          className="absolute inset-0 opacity-25 pointer-events-none mix-blend-screen"
          style={{
            background: 'linear-gradient(135deg, rgba(255,250,240,0.8) 0%, transparent 45%, rgba(255,250,240,0.05) 100%)'
          }}
        />

        {/* Antique Mirror Foxing/Oxidation (Darkened edges typical of old mercury mirrors) */}
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply"
          style={{
            background: 'radial-gradient(circle at center, transparent 40%, rgba(30,24,20,0.4) 80%, rgba(20,15,10,0.8) 100%)'
          }}
        />
      </div>

      {/* ========================================================================= */}
      {/* 2. TYPOGRAPHIC & EDITORIAL OVERLAY                                        */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 flex flex-col justify-between z-20 pointer-events-none select-none py-10">
        {children}
      </div>
    </div>
  );
}
