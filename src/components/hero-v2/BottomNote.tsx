import React from 'react';

export default function BottomNote() {
  return (
    <div className="relative inline-flex items-center justify-center px-8 py-2 sm:py-2.5 select-none pointer-events-none">
      {/* Physical Paper Strip with Torn Deckle Edges and Texture */}
      <div
        className="relative px-7 py-1.5 shadow-[0_3px_10px_rgba(40,30,20,0.12)] border border-[#d8c8b6]/40"
        style={{
          backgroundColor: '#f1e6d6',
          backgroundImage: `
            radial-gradient(#3a2e22 0.35px, transparent 0.35px),
            linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(220,205,190,0.3) 100%)
          `,
          backgroundSize: '12px 12px, 100% 100%',
          clipPath: 'polygon(1% 12%, 4% 3%, 9% 8%, 15% 2%, 22% 9%, 31% 3%, 42% 8%, 53% 2%, 65% 7%, 76% 2%, 87% 7%, 95% 2%, 99% 10%, 98% 30%, 100% 52%, 98% 75%, 99% 92%, 96% 98%, 89% 93%, 79% 98%, 68% 92%, 56% 97%, 45% 91%, 34% 97%, 21% 92%, 12% 98%, 3% 92%, 1% 72%, 2% 45%, 0% 25%)',
        }}
      >
        {/* Left piece of tape */}
        <div
          className="absolute -left-3 -top-1 w-6 h-4 bg-[#ece4d6]/65 backdrop-blur-[0.5px] border-t border-b border-white/40 shadow-[0_1px_2px_rgba(0,0,0,0.06)] -rotate-6"
          style={{ mixBlendMode: 'multiply' }}
        />

        {/* Right piece of tape */}
        <div
          className="absolute -right-3 -bottom-1 w-6 h-4 bg-[#ece4d6]/65 backdrop-blur-[0.5px] border-t border-b border-white/40 shadow-[0_1px_2px_rgba(0,0,0,0.06)] rotate-3"
          style={{ mixBlendMode: 'multiply' }}
        />

        {/* Torn Paper Text */}
        <p className="font-serif italic text-[12px] sm:text-[13px] md:text-[13.5px] text-[#46372d] tracking-[0.02em] whitespace-nowrap drop-shadow-[0_0.5px_0_rgba(255,255,255,0.6)]">
          “Foi em frente ao espelho que tudo começou.”
        </p>
      </div>
    </div>
  );
}
