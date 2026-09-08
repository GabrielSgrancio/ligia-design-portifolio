import { motion } from 'motion/react';
import { ArrowRight, Heart, Sparkles, Palette } from 'lucide-react';
import PhotoCard from '../PhotoCard';
import BotanicalElement from '../BotanicalElement';

interface LigiaBeautySectionProps {
  onOpenCaseStudy: () => void;
}

export default function LigiaBeautySection({ onOpenCaseStudy }: LigiaBeautySectionProps) {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-12 bg-[#FAF8F7] border-t border-[#E8CDD2]/30 overflow-hidden">
      {/* Decorative rose botanical */}
      <div className="absolute bottom-12 left-8 opacity-35 pointer-events-none">
        <BotanicalElement variant="pressed-rose" size={80} />
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#A46F78] uppercase">
              07 • Projeto em Destaque — Branding & Experiência
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#302B2D] mt-2">
              Lígia Beauty
            </h2>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6A565B] px-3 py-1 bg-[#F4ECE9] rounded-full border border-[#E8CDD2]/60">
              Branding & Experiência
            </span>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Branding Photos / Mockups */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="relative min-h-[380px] sm:min-h-[440px] w-full flex items-center justify-center">
              {/* Photo Card 1: Brand Materials */}
              <div className="absolute left-2 sm:left-6 top-4 z-10">
                <PhotoCard
                  label="[LÍGIA BEAUTY PHOTO 01]"
                  aspect="aspect-[3/4]"
                  angle={-3}
                  tapeAngle={-4}
                  tapePosition="top-left"
                  className="w-52 sm:w-60"
                />
              </div>

              {/* Photo Card 2: Space / Experience */}
              <div className="absolute right-2 sm:right-6 bottom-4 z-15">
                <PhotoCard
                  label="[LÍGIA BEAUTY PHOTO 02]"
                  aspect="aspect-[4/3]"
                  angle={3}
                  tapeAngle={2}
                  tapePosition="top-right"
                  className="w-52 sm:w-64"
                />
              </div>

              {/* Center Monogram Emblem / Logo Placeholder */}
              <div className="relative z-20 px-4 py-3 rounded-xs bg-[#FAF6F4] border border-[#A46F78]/40 shadow-xs flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="font-serif text-lg text-[#302B2D] italic tracking-wider">
                  LB
                </span>
                <span className="font-mono text-[9px] text-[#A46F78] uppercase mt-0.5">
                  [LÍGIA BEAUTY LOGO]
                </span>
              </div>
            </div>
          </div>

          {/* Right: Copy & Brand Narrative */}
          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <p className="font-serif text-2xl sm:text-3xl text-[#302B2D] italic">
                "Beleza também é liberdade."
              </p>
              <p className="text-base sm:text-lg text-[#493D40] leading-relaxed">
                Lígia Beauty é mais do que um estúdio de beleza. É um espaço de autoestima, acolhimento e transformação. Aqui, a maquiagem é uma forma de cuidar, de expressar quem você é e de se sentir bem na sua própria pele.
              </p>
            </div>

            {/* Disciplines */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-[#F4ECE9] text-[#302B2D] rounded-xs border border-[#E8CDD2]/60 text-xs font-mono">
                Branding & Experiência
              </span>
            </div>

            {/* Action button to open lateral case study */}
            <div className="pt-4">
              <button
                onClick={onOpenCaseStudy}
                className="inline-flex items-center space-x-3 px-6 py-3.5 rounded-xs border border-[#A46F78] text-[#302B2D] hover:bg-[#F3E5E7] transition-all duration-200 shadow-2xs group cursor-pointer"
              >
                <span className="text-xs uppercase tracking-widest font-medium">
                  Ver mais sobre a marca
                </span>
                <ArrowRight className="w-4 h-4 text-[#A46F78] transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
