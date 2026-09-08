import PhotoCard from '../PhotoCard';
import BotanicalElement from '../BotanicalElement';

export default function MakeupSection() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-12 bg-[#FAF8F7] border-t border-[#E8CDD2]/30 overflow-hidden">
      {/* Pressed dried rose accent */}
      <div className="absolute bottom-10 left-8 opacity-35 pointer-events-none">
        <BotanicalElement variant="pressed-rose" size={70} />
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div>
          <span className="text-[11px] font-mono tracking-widest text-[#A46F78] uppercase">
            03 • A maquiagem — Primeira forma de criar
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Storytelling Text */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#302B2D] leading-[1.18] font-normal">
              Foi em frente <br />
              ao espelho que <br />
              <span className="italic text-[#A46F78]">tudo começou.</span>
            </h2>

            <div className="pt-2">
              <span className="inline-block font-mono text-xs text-[#A46F78] bg-[#FAF6F4] px-3 py-1.5 rounded-xs border border-[#E8CDD2]/60">
                [TEXTO SOBRE A MAQUIAGEM COMO PRIMEIRA EXPRESSÃO DE DESIGN, ESCUTA E CUIDADO]
              </span>
            </div>

            {/* Refined quote note */}
            <div className="pt-2">
              <div className="bg-[#FAF6F4] p-4 rounded-[2px] border border-[#E8CDD2]/60 inline-block -rotate-1 shadow-xs">
                <p className="font-handwriting text-lg sm:text-xl text-[#A46F78]">
                  Foi em frente ao espelho que tudo começou.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Tactile Collage of Makeup Photographs */}
          <div className="lg:col-span-7 relative">
            <div className="relative min-h-[380px] sm:min-h-[460px] flex items-center justify-center">
              {/* Photo 1: Left tilted */}
              <div className="absolute left-0 sm:left-4 top-2 sm:top-6 z-10">
                <PhotoCard
                  label="[FOTO MAQUIAGEM 01]"
                  aspect="aspect-[3/4]"
                  angle={-4}
                  tapeAngle={-5}
                  tapePosition="top-left"
                  className="w-48 sm:w-56"
                />
              </div>

              {/* Photo 2: Center elevated */}
              <div className="relative z-20">
                <PhotoCard
                  label="[FOTO MAQUIAGEM 02]"
                  aspect="aspect-[4/5]"
                  angle={1}
                  tapeAngle={2}
                  tapePosition="top-center"
                  className="w-52 sm:w-64"
                />
              </div>

              {/* Photo 3: Right tilted */}
              <div className="absolute right-0 sm:right-4 bottom-2 sm:bottom-6 z-15">
                <PhotoCard
                  label="[FOTO MAQUIAGEM 03]"
                  aspect="aspect-[3/4]"
                  angle={5}
                  tapeAngle={-4}
                  tapePosition="top-right"
                  className="w-48 sm:w-56"
                />
              </div>

              {/* Small botanical accent between the photos */}
              <div className="absolute top-0 right-12 z-30 pointer-events-none">
                <BotanicalElement variant="flower" size={44} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
