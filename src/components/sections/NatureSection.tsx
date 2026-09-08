import PhotoCard from '../PhotoCard';
import BotanicalElement from '../BotanicalElement';

export default function NatureSection() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-12 bg-[#F4ECE9]/45 border-t border-[#E8CDD2]/30 overflow-hidden">
      {/* Delicate floating dried stem */}
      <div className="absolute top-16 right-16 opacity-30 pointer-events-none">
        <BotanicalElement variant="stem" size={80} />
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div>
          <span className="text-[11px] font-mono tracking-widest text-[#A46F78] uppercase">
            04 • Mirantão e a natureza
          </span>
        </div>

        {/* Narrative & Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Photos side-by-side or layered */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center order-2 lg:order-1">
            <div className="flex justify-center">
              <PhotoCard
                label="[FOTO NATUREZA 01]"
                sublabel="Mirantão"
                aspect="aspect-[3/4]"
                angle={-1.5}
                tapeAngle={3}
                tapePosition="top-center"
                className="w-56 sm:w-64"
              />
            </div>

            <div className="flex justify-center pt-6 sm:pt-12">
              <PhotoCard
                label="[FOTO NATUREZA 02]"
                aspect="aspect-[4/5]"
                angle={2}
                tapeAngle={-2}
                tapePosition="top-right"
                className="w-56 sm:w-64"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#302B2D] leading-[1.18] font-normal">
              A natureza <br />
              também me <br />
              <span className="italic text-[#493D40]">ensinou a criar.</span>
            </h2>

            <div className="pt-2">
              <span className="inline-block font-mono text-xs text-[#A46F78] bg-[#FAF8F7] px-3 py-1.5 rounded-xs border border-[#E8CDD2]/60">
                [TEXTO SOBRE A CONEXÃO ENTRE A NATUREZA, MIRANTÃO E A FORMA DE OBSERVAR O MUNDO]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
