import { useState } from 'react';
import InteractiveMirror from '../mirror/InteractiveMirror';
import BotanicalElement from '../BotanicalElement';
import Tape from '../Tape';

/**
 * HeroMirror (Home)
 * Editorial Photographic Atmosphere:
 * "Antes de criar, eu precisei aprender a olhar."
 *
 * Designed to look like an authentic 35mm analog photograph of a real room:
 * - Mineral lime-wash plaster wall with subtle exposure falloff and fine photographic grain
 * - Soft, natural afternoon daylight entering from an unseen window
 * - Central antique carved oval mirror reflecting Lígia in natural soft-focus shallow depth of field
 * - Neutral photographic Polaroid placeholder prepared for Mirantão real photo
 * - Real dried pressed botanicals and personal paper artifacts taped to the wall
 */
export default function HeroMirror() {
  const [mirantaoLoaded, setMirantaoLoaded] = useState(false);
  const [mirantaoError, setMirantaoError] = useState(false);

  const handleScrollDown = () => {
    const nextSection = document.getElementById('infancia');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center pt-20 pb-16 sm:pt-24 sm:pb-20 px-4 sm:px-6 md:px-10 lg:px-12 overflow-hidden bg-[#EAE5DF]"
    >
      {/* ========================================================================= */}
      {/* 1. PHYSICAL ROOM: REAL PHOTOGRAPHIC PLASTER WALL                          */}
      {/* ========================================================================= */}
      
      {/* Real Wall Texture Image */}
      <img 
        src="/assets/wall-texture.jpg" 
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-110"
        style={{ filter: 'brightness(1.05) contrast(0.95)' }}
      />

      {/* Subtle Natural Ambient Exposure Falloff (enhancing the window light from the image) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-soft-light"
        style={{
          background:
            'radial-gradient(ellipse 100% 100% at 20% 15%, rgba(255, 255, 255, 0.9) 0%, rgba(200, 190, 180, 0) 60%, rgba(50, 40, 30, 0.4) 100%)',
        }}
      />

      {/* Subtle floor ambient shadow at very bottom */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-40 pointer-events-none opacity-30"
        style={{
          background:
            'linear-gradient(to top, rgba(38, 30, 26, 0.08) 0%, transparent 100%)',
        }}
      />

      {/* ========================================================================= */}
      {/* 2. THE CENTRAL SCENE: PROTAGONIST MIRROR + PHYSICAL WALL SCRAPBOOK        */}
      {/* ========================================================================= */}
      <div className="relative w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 sm:gap-14 lg:gap-16 xl:gap-20 z-20">
        
        {/* ======================================================================= */}
        {/* LEFT ARTIFACTS: DRIED BOTANICALS & MIRANTÃO POLAROID                     */}
        {/* ======================================================================= */}
        <div className="order-2 lg:order-1 flex flex-row lg:flex-col items-center lg:items-end justify-center gap-6 sm:gap-8 lg:gap-10 w-full lg:w-auto lg:max-w-[280px] xl:max-w-[320px]">
          
          {/* 1. Dried Pressed Botanicals (Baby's breath & pressed flower) */}
          <div className="relative select-none transition-transform duration-700 ease-out hover:rotate-1 hover:scale-[1.015]">
            
            {/* Top Left Botanical (Pansy) */}
            <div className="absolute -top-24 -left-16 z-20 transform -rotate-12 pointer-events-none">
              <div className="relative w-[150px] h-[150px] flex items-center justify-center">
                <BotanicalElement variant="wildflower" size={150} angle={0} className="relative z-10" />
                {/* Tape placed on the edge of the pansy petal */}
                <Tape angle={-10} width="w-10" height="h-3" className="absolute z-20" style={{ top: '25px', left: '75px', transform: 'translateX(-50%)' }} opacity={0.8} />
              </div>
            </div>

            {/* Pink Pressed Geranium (with stem) */}
            <div className="absolute top-8 -left-32 z-20 transform rotate-12 pointer-events-none">
              <div className="relative w-[160px] h-[160px] flex items-center justify-center">
                <BotanicalElement variant="pressed-pink-flower" size={160} angle={0} className="relative z-10" />
                {/* Tape placed over the stem at the bottom right */}
                <Tape angle={15} width="w-8" height="h-2.5" className="absolute z-20" style={{ top: '115px', left: '95px' }} opacity={0.8} />
              </div>
            </div>
          </div>

          {/* 2. Neutral Photographic Polaroid Placeholder (Mirantão) */}
          <div
            className="relative select-none transition-all duration-500 hover:rotate-0 -rotate-3 hover:scale-[1.015] hover:-translate-y-1"
            style={{
              filter:
                'drop-shadow(0 12px 24px rgba(36, 28, 24, 0.12)) drop-shadow(0 2px 6px rgba(36, 28, 24, 0.06))',
            }}
          >
            {/* Real Frosted Tape at top edge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
              <Tape angle={-2} width="w-16 sm:w-18" height="h-4.5 sm:h-5" opacity={0.9} />
            </div>

            {/* Polaroid Frame (Authentic thick photo paper) */}
            <div
              className="relative p-3 pb-3.5 sm:p-3.5 sm:pb-4 bg-[#FDFBF7] border border-[#E8DFD5] rounded-[2px] w-42 sm:w-46 md:w-50 overflow-hidden"
              style={{
                boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 1)',
              }}
            >
              {/* Photo Area: Neutral Photographic Emulsion Placeholder (Ready for real photo) */}
              <div className="relative z-10 w-full aspect-square overflow-hidden rounded-[1px] bg-[#665E58]">
                {/* If user uploads /mirantao.jpg or /polaroid-mirantao.jpg, load directly */}
                {!mirantaoError && (
                  <img
                    src="/mirantao.jpg"
                    alt="Mirantão"
                    onLoad={() => setMirantaoLoaded(true)}
                    onError={() => {
                      const img = new Image();
                      img.src = '/polaroid-mirantao.jpg';
                      img.onload = () => setMirantaoLoaded(true);
                      img.onerror = () => setMirantaoError(true);
                    }}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      mirantaoLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                )}

                {/* Neutral Photographic Tone Placeholder (Not an illustration, not a fake landscape) */}
                {(!mirantaoLoaded || mirantaoError) && (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center p-4 text-center select-none"
                    style={{
                      background:
                        'linear-gradient(145deg, #7A726C 0%, #635B55 50%, #4D4641 100%)',
                    }}
                  >
                    {/* Archival silver photographic paper subtle sheen */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-15"
                      style={{
                        background:
                          'radial-gradient(circle at 40% 30%, rgba(255,255,255,0.4) 0%, transparent 70%)',
                      }}
                    />

                    {/* Neutral archival photo indicator */}
                    <div className="relative z-10 flex flex-col items-center space-y-1.5 opacity-80">
                      <div className="w-8 h-8 rounded-full border border-[#D5CBC2]/40 flex items-center justify-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E8DDD4]/60" />
                      </div>
                      <span className="text-[10px] font-sans tracking-[0.2em] text-[#E8DDD4] uppercase font-medium">
                        Fotografia
                      </span>
                      <span className="text-[9px] font-sans text-[#C2B5A9] tracking-wider">
                        Mirantão
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom White Margin Handwritten Caption */}
              <div className="pt-2.5 pb-1 text-center">
                <p className="font-handwriting text-[18px] sm:text-[20px] text-[#362f2d] opacity-85 mix-blend-multiply tracking-tight">
                  Mirantão, sempre.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* CENTER: THE PROTAGONIST VINTAGE OVAL INTERACTIVE MIRROR                  */}
        {/* ======================================================================= */}
        <div className="order-1 lg:order-2 flex flex-col items-center flex-shrink-0 z-30">
          <InteractiveMirror onExploreClick={handleScrollDown} />

          {/* ITEM 12: "Foi em frente ao espelho que tudo começou."                    */}
          {/* Real antique paper label strip taped directly to the wall below mirror   */}
          <div
            className="mt-5 sm:mt-6 relative select-none transition-all duration-500 hover:rotate-0 -rotate-1 hover:scale-[1.015]"
            style={{
              filter:
                'drop-shadow(0 6px 14px rgba(38, 30, 26, 0.08)) drop-shadow(0 1px 3px rgba(38, 30, 26, 0.04))',
            }}
          >
            {/* Frosted Tape securing the label strip */}
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
              <Tape angle={1} width="w-12 sm:w-14" height="h-3.5 sm:h-4" opacity={0.85} />
            </div>

            {/* Aged Paper Label Strip */}
            <div
              className="relative px-5 py-2 sm:px-6 sm:py-2.5 bg-cover bg-no-repeat overflow-hidden"
              style={{
                backgroundImage: "url('/assets/vintage-paper.jpg')",
                backgroundPosition: '40% 60%',
                boxShadow: 'inset 0 1px 3px rgba(255, 255, 255, 0.6), inset 0 -1px 3px rgba(0,0,0,0.1), 0 4px 6px -1px rgba(0,0,0,0.1)',
                clipPath: 'polygon(1% 0%, 100% 2%, 99% 98%, 0% 100%)',
              }}
            >
              <div className="absolute inset-0 bg-[#ffffff] opacity-30 pointer-events-none" />
              <p className="relative z-10 font-handwriting text-[18px] sm:text-[20px] font-medium text-[#2f2723] tracking-wide text-center drop-shadow-sm">
                Foi em frente ao espelho que tudo começou.
              </p>
            </div>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* RIGHT ARTIFACTS: BLUSH MEMO NOTE & ARCHIVAL MANIFESTO                   */}
        {/* ======================================================================= */}
        <div className="order-3 flex flex-row lg:flex-col items-center lg:items-start justify-center gap-6 sm:gap-8 lg:gap-9 w-full lg:w-auto lg:max-w-[280px] xl:max-w-[320px]">
          
          {/* 1. Blush Pink Note: "a mesma menina ainda está aqui ♡" */}
          <div
            className="relative select-none transition-all duration-500 hover:rotate-0 rotate-2 hover:scale-[1.015] hover:-translate-y-0.5"
            style={{
              filter:
                'drop-shadow(0 12px 24px rgba(38, 30, 26, 0.11)) drop-shadow(0 2px 6px rgba(38, 30, 26, 0.06))',
            }}
          >
            {/* Frosted Tape securing the note */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
              <Tape angle={3} width="w-14 sm:w-16" height="h-4 sm:h-4.5" opacity={0.88} />
            </div>

            {/* Note Paper Card */}
            <div
              className="relative p-4 sm:p-5 w-44 sm:w-48 md:w-52 bg-cover bg-no-repeat overflow-hidden"
              style={{
                backgroundImage: "url('/assets/vintage-paper.jpg')",
                backgroundPosition: '10% 20%',
                boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 6px rgba(0,0,0,0.05)',
                clipPath: 'polygon(0% 1%, 99% 0%, 100% 99%, 1% 100%)',
              }}
            >
              <div className="absolute inset-0 bg-[#f7ebeb] opacity-40 mix-blend-multiply pointer-events-none" />
              <p className="relative z-10 font-handwriting text-[24px] sm:text-[26px] md:text-[28px] text-[#302121] font-semibold leading-[1.2] text-center drop-shadow-sm">
                a mesma menina <br />
                ainda está aqui <span className="text-[#8B5E66] text-[22px] align-text-top ml-1">♡</span>
              </p>
            </div>
          </div>

          {/* 2. Archival Deckle-Edge Parchment Paper Scrap */}
          <div
            className="relative select-none transition-all duration-500 hover:rotate-0 -rotate-1 hover:scale-[1.015] hover:-translate-y-0.5"
            style={{
              filter:
                'drop-shadow(0 8px 18px rgba(38, 30, 26, 0.09)) drop-shadow(0 1px 4px rgba(38, 30, 26, 0.04))',
            }}
          >
            {/* Small corner tape */}
            <div className="absolute -top-2.5 right-2 z-30 pointer-events-none">
              <Tape angle={-15} width="w-10 sm:w-12" height="h-3 sm:h-3.5" opacity={0.85} />
            </div>

            {/* Deckle Edge Parchment with fiber texture */}
            <div
              className="relative px-5 py-4 sm:px-6 sm:py-5 w-36 sm:w-40 md:w-44 bg-cover bg-no-repeat overflow-hidden"
              style={{
                backgroundImage: "url('/assets/vintage-paper.jpg')",
                backgroundPosition: '80% 90%',
                boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.4), inset 0 -2px 8px rgba(0,0,0,0.06)',
                clipPath: 'polygon(2% 1%, 98% 3%, 99% 97%, 1% 99%, 0% 50%)',
              }}
            >
              <div className="relative z-10 flex flex-col items-center text-center space-y-1.5 font-serif text-xs sm:text-sm tracking-[0.24em] text-[#635054] uppercase font-light">
                <span className="hover:text-[#2A2022] transition-colors">olhar</span>
                <span className="w-3 h-px bg-[#D9C4BD]" />
                <span className="hover:text-[#2A2022] transition-colors">criar</span>
                <span className="w-3 h-px bg-[#D9C4BD]" />
                <span className="hover:text-[#2A2022] transition-colors">conectar</span>
                <span className="w-3 h-px bg-[#D9C4BD]" />
                <span className="hover:text-[#2A2022] transition-colors">transformar</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
