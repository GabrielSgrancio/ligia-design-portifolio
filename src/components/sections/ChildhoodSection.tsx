import PhotoCard from '../PhotoCard';
import BotanicalElement from '../BotanicalElement';

export default function ChildhoodSection() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32 px-6 sm:px-12 bg-[#F4ECE9]/50 border-t border-[#E8CDD2]/30 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-12 right-10 opacity-30 pointer-events-none">
        <BotanicalElement variant="branch" size={55} />
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center sm:text-left">
          <span className="text-[11px] font-mono tracking-widest text-[#A46F78] uppercase">
            02 • Infância e Mirantão
          </span>
        </div>

        {/* Album Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Childhood Photo */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <PhotoCard
              label="[FOTO DE INFÂNCIA]"
              aspect="aspect-[3/4]"
              angle={-2}
              tapeAngle={2}
              tapePosition="top-left"
              className="w-64 sm:w-72"
            />
          </div>

          {/* Center: Storytelling Text */}
          <div className="lg:col-span-4 text-center lg:text-left space-y-6 px-2 sm:px-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#302B2D] leading-snug font-normal">
              Eu vim de <br className="hidden sm:inline" />
              <span className="italic text-[#493D40]">Mirantão.</span>
            </h2>

            <div className="pt-2">
              <span className="inline-block font-mono text-xs text-[#A46F78] bg-[#FAF8F7] px-3 py-1.5 rounded-xs border border-[#E8CDD2]/60">
                [HISTÓRIA DE INFÂNCIA E ORIGENS EM MIRANTÃO]
              </span>
            </div>
          </div>

          {/* Right: Mirantão Photo */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <PhotoCard
              label="[FOTO DE MIRANTÃO]"
              sublabel="Minas Gerais"
              aspect="aspect-[3/4]"
              angle={2}
              tapeAngle={-3}
              tapePosition="top-right"
              className="w-64 sm:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
