import React from 'react';

export default function RightArtifacts() {
  return (
    <div className="absolute inset-y-0 right-0 w-[40%] pointer-events-none select-none z-20">
      {/* 07 · Right Photo Strip (tucked beside the mirror frame, tall 3-frame strip) */}
      <div
        className="absolute z-20"
        style={{
          top: '18%',
          left: '3%',
          width: '36%',
          maxWidth: '144px',
          transform: 'rotate(1deg)',
        }}
      >
        <img
          src="/assets/hero-v2/07_right_photo_strip.png"
          alt="Tira de fotos"
          className="w-full h-auto object-contain drop-shadow-[6px_12px_22px_rgba(40,30,20,0.18)]"
          draggable={false}
        />
      </div>

      {/* 08 · Quote Note ("Beleza também está nos detalhes...") */}
      <div
        className="absolute z-10"
        style={{
          top: '22%',
          left: '40%',
          width: '42%',
          maxWidth: '168px',
          transform: 'rotate(-2deg)',
        }}
      >
        <img
          src="/assets/hero-v2/08_quote_note.png"
          alt="Anotação: Beleza também está nos detalhes que o tempo deixa."
          className="w-full h-auto object-contain drop-shadow-[6px_12px_20px_rgba(40,30,20,0.16)]"
          draggable={false}
        />
      </div>

      {/* 09 · Small Purple Botanical (tucked beside quote note) */}
      <div
        className="absolute z-30"
        style={{
          top: '36%',
          left: '58%',
          width: '26%',
          maxWidth: '106px',
          transform: 'rotate(-6deg)',
        }}
      >
        <img
          src="/assets/hero-v2/09_small_purple_botanical.png"
          alt="Flor roxa seca"
          className="w-full h-auto object-contain drop-shadow-[4px_8px_14px_rgba(40,30,20,0.18)]"
          draggable={false}
        />
      </div>

      {/* 10 · Blush Handwritten Note ("Processo também é parte da beleza. ♡") */}
      <div
        className="absolute z-10"
        style={{
          top: '59%',
          left: '26%',
          width: '45%',
          maxWidth: '182px',
          transform: 'rotate(3.5deg)',
        }}
      >
        <img
          src="/assets/hero-v2/10_blush_handwritten_note.png"
          alt="Nota blush: Processo também é parte da beleza."
          className="w-full h-auto object-contain drop-shadow-[6px_14px_22px_rgba(40,30,20,0.18)]"
          draggable={false}
        />
      </div>
    </div>
  );
}
