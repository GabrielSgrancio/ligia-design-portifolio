import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PhotoCard from '../PhotoCard';
import BotanicalElement from '../BotanicalElement';
import { PhaseItem } from '../../types';

const phasesData: PhaseItem[] = [
  {
    id: 'menina',
    label: 'A Menina',
    context: 'Mirantão / início do olhar',
    placeholderText: '[TEXTO SOBRE A FASE: A MENINA]',
    imagePlaceholder: '[FOTO: A MENINA]',
  },
  {
    id: 'maquiadora',
    label: 'A Maquiadora',
    context: 'Estética, escuta, cuidado, detalhe',
    placeholderText: '[TEXTO SOBRE A FASE: A MAQUIADORA]',
    imagePlaceholder: '[FOTO: A MAQUIADORA]',
  },
  {
    id: 'designer',
    label: 'A Designer',
    context: 'UX/UI, produto, empatia, estrutura, tecnologia',
    placeholderText: '[TEXTO SOBRE A FASE: A DESIGNER]',
    imagePlaceholder: '[FOTO: A DESIGNER]',
  },
];

export default function ThreePhasesSection() {
  const [activePhase, setActivePhase] = useState<string>('menina');

  const current = phasesData.find((p) => p.id === activePhase) || phasesData[0];

  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-12 bg-[#FAF8F7] border-t border-[#E8CDD2]/30 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-[11px] font-mono tracking-widest text-[#A46F78] uppercase">
            05 • Trajetória
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#302B2D] font-normal">
            Diferentes fases, <span className="italic text-[#A46F78]">a mesma essência.</span>
          </h2>
        </div>

        {/* Phase Selector Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-full bg-[#F4ECE9] border border-[#E8CDD2]/50 gap-1 sm:gap-2">
            {phasesData.map((phase) => {
              const isActive = phase.id === activePhase;
              return (
                <button
                  key={phase.id}
                  onClick={() => setActivePhase(phase.id)}
                  className={`px-4 sm:px-6 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#FAF8F7] text-[#302B2D] font-medium shadow-xs border border-[#E8CDD2]/70'
                      : 'text-[#6A565B] hover:text-[#302B2D]'
                  }`}
                >
                  {phase.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Phase Display */}
        <div className="bg-[#FAF6F4] p-8 sm:p-12 rounded-sm border border-[#E8CDD2]/40 shadow-xs">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              {/* Left: Photo / Visual card */}
              <div className="lg:col-span-5 flex justify-center">
                <PhotoCard
                  label={current.imagePlaceholder}
                  aspect="aspect-[3/4]"
                  angle={-1.5}
                  tapeAngle={2}
                  className="w-56 sm:w-64"
                />
              </div>

              {/* Right: Phase Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-[#A46F78] font-mono">
                    {current.context}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#302B2D]">
                    {current.label}
                  </h3>
                </div>

                <div className="pt-2">
                  <span className="inline-block font-mono text-xs text-[#A46F78] bg-[#FAF8F7] px-3 py-1.5 rounded-xs border border-[#E8CDD2]/60">
                    {current.placeholderText}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
