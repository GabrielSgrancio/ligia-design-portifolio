import { motion } from 'motion/react';
import { ArrowRight, Smartphone, Users, TrendingUp, Sparkles } from 'lucide-react';
import BotanicalElement from '../BotanicalElement';

interface TrampolimSectionProps {
  onOpenCaseStudy: () => void;
}

export default function TrampolimSection({ onOpenCaseStudy }: TrampolimSectionProps) {
  return (
    <section id="projetos" className="relative py-24 sm:py-32 px-6 sm:px-12 bg-[#F4ECE9]/45 border-t border-[#E8CDD2]/30 overflow-hidden">
      {/* Decorative botanical */}
      <div className="absolute top-12 right-12 opacity-35 pointer-events-none">
        <BotanicalElement variant="stem" size={75} />
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#A46F78] uppercase">
              06 • Projeto em Destaque — UX/UI & Product Design
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#302B2D] mt-2">
              Trampolim
            </h2>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6A565B] px-3 py-1 bg-[#FAF8F7] rounded-full border border-[#E8CDD2]/60">
              Product Design · UX/UI
            </span>
          </div>
        </div>

        {/* Hero Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text & Key Highlights */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <p className="font-serif text-2xl sm:text-3xl text-[#302B2D] italic">
                "Pequenos passos, grandes evoluções."
              </p>
              <p className="text-base sm:text-lg text-[#493D40] leading-relaxed">
                Um aplicativo de desenvolvimento pessoal em grupo, criado para transformar metas em progresso real. Com uma experiência simples e motivadora, ele conecta pessoas que evoluem juntas.
              </p>
            </div>

            {/* Scope / Discipline badge */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-[#FAF6F4] text-[#302B2D] rounded-xs border border-[#E8CDD2]/60 text-xs font-mono">
                UX/UI & Product Design
              </span>
            </div>

            {/* Action button to open lateral case study */}
            <div className="pt-4">
              <button
                onClick={onOpenCaseStudy}
                className="inline-flex items-center space-x-3 px-6 py-3.5 rounded-xs bg-[#302B2D] text-[#FAF8F7] hover:bg-[#A46F78] transition-all duration-200 shadow-sm group cursor-pointer"
              >
                <span className="text-xs uppercase tracking-widest font-medium">
                  Ver mais sobre o projeto
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right: Editorial Mockup Presentation */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md min-h-[380px] flex items-center justify-center">
              {/* Screen 01 - Physical Photo / Screen Card */}
              <div className="absolute left-2 top-2 z-10">
                <div className="w-48 sm:w-56 bg-[#FAF6F4] p-3 rounded-[2px] border border-[#E8CDD2]/60 shadow-xs -rotate-2">
                  <div className="aspect-[9/16] bg-[#F4ECE9]/80 rounded-[1px] border border-[#D9D9D6]/70 flex flex-col items-center justify-center p-4 text-center">
                    <span className="font-mono text-xs text-[#A46F78] font-medium tracking-wide">
                      [TRAMPOLIM SCREEN 01]
                    </span>
                  </div>
                </div>
              </div>

              {/* Screen 02 - Overlapping Card */}
              <div className="relative z-20">
                <div className="w-52 sm:w-60 bg-[#FAF6F4] p-3.5 rounded-[2px] border border-[#E8CDD2]/80 shadow-md rotate-1">
                  <div className="aspect-[9/16] bg-[#FAF8F7] rounded-[1px] border border-[#D9D9D6]/80 flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-10 h-10 rounded-full border border-[#A46F78]/40 flex items-center justify-center text-[#A46F78] text-xs mb-2">
                      ✦
                    </div>
                    <span className="font-mono text-xs text-[#302B2D] font-medium tracking-wide">
                      [TRAMPOLIM SCREEN 02]
                    </span>
                  </div>
                </div>
              </div>

              {/* Trampolim Logo Badge */}
              <div className="absolute -bottom-4 right-4 z-30 bg-[#FAF8F7] px-3.5 py-1.5 rounded-xs border border-[#E8CDD2] shadow-xs">
                <span className="font-mono text-[10px] text-[#A46F78] uppercase">
                  [TRAMPOLIM LOGO]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
