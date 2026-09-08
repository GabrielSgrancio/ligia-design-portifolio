import React from 'react';

interface MirrorFrameProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * MirrorFrame
 * Authentic antique oval mirror with natural photographic materiality.
 * Uses a generated photorealistic image asset for true material realism.
 */
export default function MirrorFrame({ children, className = '' }: MirrorFrameProps) {
  return (
    <div className={`relative select-none ${className} flex items-center justify-center`}>
      {/* 1. The Real Reflection (Sits behind the frame) */}
      {/* Precisely measured oval opening of the Wikimedia frame */}
      <div 
        className="absolute z-0 overflow-hidden"
        style={{
          left: '21.4%',
          top: '12.4%',
          width: '57%',
          height: '75.7%',
          clipPath: 'ellipse(50% 50% at 50% 50%)',
          boxShadow: 'inset 0 0 16px rgba(0,0,0,0.6)', // Shadow cast by the physical frame lip onto the glass
        }}
      >
        {children}
      </div>

      {/* 2. The Photorealistic Antique Frame Asset */}
      {/* Using true transparent PNG for the frame */}
      <img 
        src="/assets/antique-mirror-frame.png?v=3" 
        alt="Antique oval mirror frame"
        className="relative z-10 w-full h-auto object-contain pointer-events-none"
        style={{
          // Minimal color grading to preserve the natural antique gold
          filter: 'drop-shadow(4px 12px 16px rgba(30,24,20,0.3))'
        }}
      />
    </div>
  );
}
