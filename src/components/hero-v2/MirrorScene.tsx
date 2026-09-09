import React, { useState, useEffect } from 'react';

interface MirrorSceneProps {
  onExploreClick?: () => void;
}

export default function MirrorScene({ onExploreClick }: MirrorSceneProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Very restrained subtle parallax (-3px to +3px)
      const x = (e.clientX / window.innerWidth - 0.5) * 6;
      const y = (e.clientY / window.innerHeight - 0.5) * 6;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollDown = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const nextSection = document.getElementById('sobre') || document.querySelector('main > section:nth-child(2)');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{
        transform: `translate3d(${mousePos.x * 0.35}px, ${mousePos.y * 0.35}px, 0)`,
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Ornate Oval Mirror Frame with Lígia Reflection */}
      <div className="relative inline-block">
        {/* Mirror Photographic Centerpiece */}
        <img
          src="/assets/hero-v2/ligia-foto-espelho-moldura.png"
          alt="Lígia Dias no espelho"
          className="h-[min(91vh,810px)] w-auto max-w-[92vw] object-contain drop-shadow-[-8px_16px_32px_rgba(45,30,20,0.26)] drop-shadow-[0_4px_14px_rgba(45,30,20,0.14)] pointer-events-none"
          draggable={false}
        />

        {/* Subtle Specular Glare / Glass Sheen Overlay */}
        <div
          className="absolute inset-[10%] rounded-[50%] pointer-events-none opacity-30 mix-blend-overlay"
          style={{
            background: 'radial-gradient(ellipse 65% 55% at 35% 25%, rgba(255,255,255,0.4) 0%, rgba(255,245,230,0.1) 50%, transparent 100%)',
          }}
        />

        {/* Typography Overlay (Lígia's smile and face are 100% visible and clear above the text) */}
        <div className="absolute inset-0 flex flex-col items-center select-none pointer-events-none px-6 sm:px-10 pt-[47.5%]">
          {/* OLÁ, EU SOU */}
          <span className="font-sans text-[8.5px] sm:text-[9.5px] md:text-[10px] tracking-[0.3em] text-[#efe7dd]/90 uppercase font-light mb-0.5 drop-shadow-[0_1px_3px_rgba(15,10,8,0.45)]">
            OLÁ, EU SOU
          </span>

          {/* Lígia Dias */}
          <h1
            className="font-serif text-[40px] sm:text-[48px] md:text-[56px] lg:text-[62px] font-normal text-[#fcf9f4] tracking-[-0.015em] leading-[1.02] drop-shadow-[0_2px_12px_rgba(15,10,8,0.42)]"
            style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
          >
            Lígia Dias
          </h1>

          {/* UX/UI DESIGNER · PRODUCT DESIGNER */}
          <p className="font-sans text-[8px] sm:text-[9px] md:text-[9.5px] tracking-[0.24em] text-[#ede3d5]/85 uppercase font-light mt-0.5 mb-1.5 drop-shadow-[0_1px_3px_rgba(15,10,8,0.35)]">
            UX/UI DESIGNER &nbsp;·&nbsp; PRODUCT DESIGNER
          </p>

          {/* Small vertical separator line */}
          <div className="w-[1px] h-3.5 sm:h-4 bg-[#ede4da]/50 my-1 drop-shadow-sm" />

          {/* “Antes de criar, eu precisei aprender a olhar.” */}
          <p className="font-serif italic text-[12px] sm:text-[13px] md:text-[13.5px] text-[#faf5ed]/95 leading-[1.4] max-w-[240px] sm:max-w-[270px] my-1 text-center drop-shadow-[0_1px_4px_rgba(15,10,8,0.35)]">
            “Antes de criar,<br />eu precisei aprender a olhar.”
          </p>

          {/* EXPLORAR & Chevron button */}
          <div
            onClick={handleScrollDown}
            className="mt-3.5 sm:mt-4 flex flex-col items-center pointer-events-auto cursor-pointer group transition-transform duration-300 hover:translate-y-0.5"
            role="button"
            tabIndex={0}
            aria-label="Explorar portfólio"
          >
            <span className="font-sans text-[7.5px] sm:text-[8px] md:text-[8.5px] tracking-[0.28em] text-[#e8ded3]/75 uppercase font-medium group-hover:text-[#ffffff] transition-colors">
              EXPLORAR
            </span>
            <svg
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#e8ded3]/65 mt-0.5 animate-bounce group-hover:text-[#ffffff] transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
