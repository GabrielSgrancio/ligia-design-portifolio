import React from 'react';

interface MirrorReflectionProps {
  children?: React.ReactNode;
  isInteracting?: boolean;
  reducedMotion?: boolean;
  cursorX?: number; // normalized -1..1
  cursorY?: number; // normalized -1..1
}

export default function MirrorReflection({
  children,
  isInteracting = false,
  reducedMotion = false,
  cursorX = 0,
  cursorY = 0,
}: MirrorReflectionProps) {
  const focusX = ((cursorX + 1) / 2) * 100;
  const focusY = ((cursorY + 1) / 2) * 100;

  // Reflection moves subtly against the viewer movement to simulate optical depth.
  const reflectionX = reducedMotion ? 0 : cursorX * -8;
  const reflectionY = reducedMotion ? 0 : cursorY * -5;

  // Glass glare reacts differently to create depth (moves with or against but at different rate).
  const glareX = reducedMotion ? 0 : cursorX * 12;
  const glareY = reducedMotion ? 0 : cursorY * 8;

  const focusMask = reducedMotion
    ? 'none'
    : `radial-gradient(
        circle 135px at ${focusX}% ${focusY}%,
        rgba(0,0,0,0.95) 0%,
        rgba(0,0,0,0.72) 28%,
        rgba(0,0,0,0.28) 58%,
        transparent 82%
      )`;

  const reflectionTransform = `translate3d(${reflectionX}px, ${reflectionY}px, 0) scale(1.025)`;

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-[#110f0e]">

      {/* Reflection stack */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: reflectionTransform,
          transition: isInteracting
            ? 'transform 180ms ease-out'
            : 'transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'transform',
        }}
      >
        {/* BASE REFLECTION - heavily blurred, dark, warm */}
        <img
          src="/assets/ligia-reflection.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            transform: 'scale(1.035)',
            filter: 'blur(6px) brightness(0.80) contrast(0.82) saturate(0.65) sepia(0.22)',
          }}
        />

        {/* LOCAL "LOOKING CLOSER" REFLECTION - sharper, revealed by hover mask */}
        {!reducedMotion && (
          <img
            src="/assets/ligia-reflection.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{
              transform: 'scale(1.035)',
              filter: 'blur(2.8px) brightness(0.84) contrast(0.88) saturate(0.72) sepia(0.18)',
              opacity: isInteracting ? 0.38 : 0,
              maskImage: focusMask,
              WebkitMaskImage: focusMask,
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              transition: 'opacity 500ms ease',
              willChange: 'mask-image, opacity',
            }}
          />
        )}
      </div>

      {/* warm antique mercury wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none mix-blend-multiply"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              rgba(88, 72, 60, 0.06) 20%,
              rgba(56, 44, 38, 0.18) 60%,
              rgba(26, 20, 17, 0.55) 100%
            )
          `,
        }}
      />

      {/* subtle atmospheric glass veil */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none mix-blend-screen"
        style={{
          background: 'linear-gradient(120deg, rgba(255,240,218,0.22), rgba(240,220,190,0.08) 38%, transparent 52%, rgba(255,248,236,0.06) 72%)',
        }}
      />

      {/* independent glare */}
      <div
        aria-hidden="true"
        className="absolute -inset-[12%] pointer-events-none mix-blend-screen"
        style={{
          transform: `translate3d(${glareX}px, ${glareY}px, 0)`,
          transition: isInteracting
            ? 'transform 220ms ease-out'
            : 'transform 1400ms cubic-bezier(0.16, 1, 0.3, 1)',
          background: `
            linear-gradient(
              125deg,
              transparent 18%,
              rgba(255,250,242,0.13) 38%,
              rgba(255,255,255,0.04) 48%,
              transparent 62%
            )
          `,
        }}
      />

      {/* editorial content overlay */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between py-10 pointer-events-none">
        {children}
      </div>
    </div>
  );
}
