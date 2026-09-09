import React from 'react';

export default function PaletteScrap() {
  return (
    <div
      className="relative w-[145px] px-3.5 py-3.5 bg-cover shadow-[0_5px_14px_rgba(43,33,27,.10)]"
      style={{
        backgroundImage: "url('/assets/vintage-paper.jpg')",
        backgroundPosition: '10% 80%',
        clipPath: 'polygon(1% 2%, 99% 0%, 98% 97%, 0% 100%)',
      }}
    >
      {/* Four physical paint/material swatches with intentional irregularity */}
      <div className="flex gap-2 justify-center">
        {/* Warm cream */}
        <span
          className="w-[26px] h-[34px] rounded-[2px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.06)]"
          style={{
            background: 'linear-gradient(155deg, #EDE3D5 0%, #E0D4C3 100%)',
            transform: 'rotate(-2deg)',
          }}
        />
        
        {/* Dusty rose */}
        <span
          className="w-[24px] h-[32px] rounded-[1px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.06)]"
          style={{
            background: 'linear-gradient(145deg, #C09196 0%, #B08388 100%)',
            transform: 'rotate(1.5deg) translateY(2px)',
          }}
        />
        
        {/* Muted olive */}
        <span
          className="w-[25px] h-[35px] rounded-[2px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.06)]"
          style={{
            background: 'linear-gradient(160deg, #8A8E68 0%, #767A56 100%)',
            transform: 'rotate(-3deg) translateY(-1px)',
          }}
        />
        
        {/* Copper / warm brown — with tiny pencil circle */}
        <div className="relative">
          <span
            className="block w-[24px] h-[33px] rounded-[1px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.06)]"
            style={{
              background: 'linear-gradient(150deg, #9A6548 0%, #7E4F38 100%)',
              transform: 'rotate(2deg)',
            }}
          />
          {/* Pencil circle mark */}
          <svg className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none stroke-[#413632]/50 fill-none" viewBox="0 0 40 44">
            <ellipse cx="20" cy="22" rx="14" ry="16" strokeWidth="0.7" strokeDasharray="2,3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
