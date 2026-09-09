import React from 'react';

export default function LeftArtifacts() {
  return (
    <div className="absolute inset-y-0 left-0 w-[40%] pointer-events-none select-none z-10">
      {/* 03 · Large Dried Flower Stem (delicate gypsophila specimen with tape) */}
      <div
        className="absolute"
        style={{
          top: '2%',
          left: '-2%',
          width: '70%',
          maxWidth: '300px',
          transform: 'rotate(-4deg)',
        }}
      >
        <img
          src="/assets/hero-v2/03_large_dried_flower_stem.png"
          alt="Ramo floral seco"
          className="w-full h-auto object-contain drop-shadow-[-8px_14px_22px_rgba(40,30,20,0.22)]"
          draggable={false}
        />
      </div>

      {/* 04 · Pressed Pink Flower (independent specimen with tape) */}
      <div
        className="absolute"
        style={{
          top: '38%',
          left: '43%',
          width: '28%',
          maxWidth: '116px',
          transform: 'rotate(-2deg)',
        }}
      >
        <img
          src="/assets/hero-v2/04_pressed_pink_flower.png"
          alt="Flor prensada rosa"
          className="w-full h-auto object-contain drop-shadow-[-4px_8px_14px_rgba(40,30,20,0.18)]"
          draggable={false}
        />
      </div>

      {/* 05 · Left Sketch Note ("ideias também florescem.") */}
      <div
        className="absolute z-10"
        style={{
          top: '53%',
          left: '10%',
          width: '52%',
          maxWidth: '220px',
          transform: 'rotate(-4.5deg)',
        }}
      >
        <img
          src="/assets/hero-v2/05_left_sketch_note.png"
          alt="Anotação com desenho geométrico: ideias também florescem"
          className="w-full h-auto object-contain drop-shadow-[-6px_12px_20px_rgba(40,30,20,0.18)]"
          draggable={false}
        />
      </div>

      {/* 06 · Palette Swatch Card (overlapping bottom-right of sketch note) */}
      <div
        className="absolute z-20"
        style={{
          top: '66%',
          left: '44%',
          width: '33%',
          maxWidth: '136px',
          transform: 'rotate(4deg)',
        }}
      >
        <img
          src="/assets/hero-v2/06_palette_swatch_card.png"
          alt="Cartela de cores"
          className="w-full h-auto object-contain drop-shadow-[-4px_8px_14px_rgba(40,30,20,0.2)]"
          draggable={false}
        />
      </div>
    </div>
  );
}
