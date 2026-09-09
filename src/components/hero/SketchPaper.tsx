import React from 'react';

export default function SketchPaper() {
  return (
    <div
      className="relative w-[135px] h-[155px] px-3.5 py-4 bg-cover shadow-[0_6px_16px_rgba(43,33,27,0.09)] flex flex-col justify-between"
      style={{
        backgroundImage: "url('/assets/vintage-paper.jpg')",
        backgroundPosition: '30% 70%',
        clipPath: 'polygon(0% 2%, 98% 0%, 100% 97%, 2% 100%)',
      }}
    >
      {/* Top tiny tape for this paper */}
      <div className="absolute -top-2 left-[35px] z-20 pointer-events-none">
        <div className="w-8 h-2.5 opacity-70"
          style={{
            backgroundImage: "url('/assets/tape-01.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'rotate(3deg)',
          }}
        />
      </div>
      
      {/* Hand-drawn composition study elements */}
      <div className="relative flex-1 opacity-65">
        <svg viewBox="0 0 100 90" className="w-full h-full" strokeWidth="1.0">
          {/* Open circle — composition focal point */}
          <circle cx="28" cy="18" r="8" fill="none" stroke="#4A4038" strokeWidth="0.9" />
          
          {/* Horizontal rule — visual rhythm */}
          <line x1="48" y1="28" x2="82" y2="28" stroke="#4A4038" strokeWidth="0.8" />
          
          {/* Curved bracket — composition boundary */}
          <path d="M18,42 Q28,32 38,42" fill="none" stroke="#4A4038" strokeWidth="0.8" />
          
          {/* Vertical guide */}
          <line x1="62" y1="38" x2="62" y2="58" stroke="#4A4038" strokeWidth="0.6" strokeDasharray="2,2" />
          
          {/* Small x mark */}
          <line x1="76" y1="62" x2="82" y2="68" stroke="#4A4038" strokeWidth="0.7" />
          <line x1="82" y1="62" x2="76" y2="68" stroke="#4A4038" strokeWidth="0.7" />
          
          {/* Tiny dot */}
          <circle cx="42" cy="68" r="1.5" fill="#4A4038" stroke="none" />
          
          {/* Arc — crop/composition mark */}
          <path d="M12,72 Q28,60 44,72" fill="none" stroke="#4A4038" strokeWidth="0.7" />
        </svg>
      </div>

      {/* Tiny process annotation — almost secondary metadata */}
      <div className="text-[7.5px] tracking-[0.12em] text-[#4A4038]/75 uppercase font-sans font-medium leading-tight">
        <span>forma · ritmo · respiro</span>
      </div>
    </div>
  );
}
