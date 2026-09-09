import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InteractiveMirror from '../mirror/InteractiveMirror';
import LeftWallComposition from '../hero/LeftWallComposition';
import RightWallComposition from '../hero/RightWallComposition';
import Tape from '../Tape';

export default function HeroMirror() {
  const [mirantaoLoaded, setMirantaoLoaded] = useState(false);
  const [mirantaoError, setMirantaoError] = useState(false);

  // We keep onExploreClick just to scroll down conceptually (placeholder for now)
  const handleExploreClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative w-full min-h-screen bg-[#D5CBC2] flex items-center justify-center overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. SCENE LIGHTING & BACKGROUND ATMOSPHERE                                  */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img
          src="/assets/wall-texture.jpg"
          alt="Textura de parede"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
        />
        <div
          className="absolute inset-0 opacity-[0.85] mix-blend-multiply"
          style={{
            background: 'linear-gradient(to right, rgba(166, 150, 140, 0.4) 0%, rgba(200, 185, 175, 0.1) 40%, rgba(200, 185, 175, 0.1) 60%, rgba(140, 120, 110, 0.5) 100%)'
          }}
        />
        <div
          className="absolute top-0 right-0 w-[50vw] h-[80vh] opacity-25 mix-blend-screen"
          style={{
            background: 'radial-gradient(circle at top right, rgba(255,248,240,0.8) 0%, transparent 70%)'
          }}
        />
      </div>

      {/* ========================================================================= */}
      {/* 2. THE WALL STAGE (Desktop Composition)                                    */}
      {/* ========================================================================= */}
      <div className="relative w-full max-w-[1600px] mx-auto min-h-[720px] lg:h-[calc(100vh-4rem)] lg:min-h-[760px] lg:max-h-[1080px] z-20 flex lg:block flex-col items-center pt-24 pb-12 lg:pt-0 lg:pb-0 gap-12 lg:gap-0">

        {/* ------------------------------------------------------------- */}
        {/* CENTER PROTAGONIST: Interactive Antique Mirror                */}
        {/* ------------------------------------------------------------- */}
        <motion.div 
          className="relative lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-[48%] z-20"
          initial={{ opacity: 0, scale: 0.985, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <InteractiveMirror onExploreClick={handleExploreClick} />
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* LEFT WALL COMPOSITION (Desktop Only)                          */}
        {/* ------------------------------------------------------------- */}
        <div className="hidden lg:block absolute left-[2%] xl:left-[4%] 2xl:left-[8%] top-[12%] xl:top-[16%] z-30">
          <LeftWallComposition />
        </div>

        {/* ------------------------------------------------------------- */}
        {/* RIGHT WALL COMPOSITION (Desktop Only)                         */}
        {/* ------------------------------------------------------------- */}
        <div className="hidden lg:block absolute right-[3%] xl:right-[5%] 2xl:right-[9%] top-[25%] xl:top-[28%] z-30">
          <RightWallComposition />
        </div>

        {/* ------------------------------------------------------------- */}
        {/* BOTTOM NARRATIVE PAPER                                        */}
        {/* ------------------------------------------------------------- */}
        <motion.div 
          className="relative lg:absolute lg:left-1/2 lg:bottom-[8%] lg:-translate-x-1/2 z-30 pointer-events-none mt-8 lg:mt-0"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="relative px-6 py-2.5 bg-cover bg-no-repeat shadow-[0_4px_12px_rgba(43,33,27,0.06)]"
            style={{
              backgroundImage: "url('/assets/vintage-paper.jpg')",
              backgroundPosition: '40% 60%',
              clipPath: 'polygon(1% 0%, 100% 2%, 99% 98%, 0% 100%)',
            }}
          >
            {/* Top tiny tape */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-30">
              <Tape angle={1} width="w-12" height="h-3" opacity={0.85} />
            </div>

            <p className="relative z-10 font-handwriting text-[20px] font-medium text-[#2f2723] tracking-wide text-center drop-shadow-sm opacity-90 mix-blend-multiply">
              Foi em frente ao espelho que tudo começou.
            </p>
          </div>
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE FALLBACK (Simplified artifact stack)                   */}
        {/* ------------------------------------------------------------- */}
        <div className="block lg:hidden w-full max-w-[320px] mx-auto flex flex-col gap-8 z-30 pb-16">
          <div className="flex justify-center transform scale-90">
            <RightWallComposition />
          </div>
        </div>

      </div>
    </section>
  );
}
