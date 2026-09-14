import React from 'react';
import MirrorScene from './MirrorScene';
import LeftArtifacts from './LeftArtifacts';
import RightArtifacts from './RightArtifacts';
import BottomNote from './BottomNote';

export default function HeroReplica() {
  const handleScrollToNext = () => {
    const nextSection = document.getElementById('sobre') || document.querySelector('main > section:nth-child(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introdução e Espelho"
      className="relative w-full h-screen min-h-[720px] max-h-[1050px] overflow-hidden flex items-center justify-center"
    >
      {/* Main Art-Directed Wall Stage */}
      <div className="relative z-10 w-full max-w-[1440px] h-full mx-auto flex flex-col justify-between items-center px-4 sm:px-8 pt-4 pb-2">
        {/* Upper space for fixed Header */}
        <div className="w-full h-6 flex-shrink-0" />

        {/* Central Physical Wall Composition */}
        <div className="relative w-full flex-1 max-h-[890px] flex items-center justify-center">
          {/* Left Physical Artifacts */}
          <div className="hidden md:block">
            <LeftArtifacts />
          </div>

          {/* Centerpiece: Ornate Mirror with Lígia's Reflection & Centered HTML Typography */}
          <div className="relative z-20">
            <MirrorScene onExploreClick={handleScrollToNext} />
          </div>

          {/* Right Physical Artifacts */}
          <div className="hidden md:block">
            <RightArtifacts />
          </div>
        </div>

        {/* Bottom Torn Paper Note positioned right under the mirror bottom rosette */}
        <div className="relative z-30 -mt-2 pb-1.5 flex justify-center w-full">
          <BottomNote />
        </div>
      </div>
    </section>
  );
}
