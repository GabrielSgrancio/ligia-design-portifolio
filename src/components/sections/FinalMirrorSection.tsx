import { motion } from 'motion/react';
import BotanicalElement from '../BotanicalElement';
import { ArrowUp } from 'lucide-react';

export default function FinalMirrorSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-28 sm:py-36 px-6 sm:px-12 bg-[#FAF8F7] border-t border-[#E8CDD2]/40 overflow-hidden text-center">
      {/* Background accents */}
      <div className="absolute top-10 left-12 opacity-35 pointer-events-none">
        <BotanicalElement variant="stem" size={70} />
      </div>
      <div className="absolute bottom-16 right-12 opacity-35 pointer-events-none">
        <BotanicalElement variant="pressed-rose" size={70} />
      </div>

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <div className="space-y-2">
          <span className="text-[11px] font-mono tracking-widest text-[#A46F78] uppercase block">
            09 • Encerramento
          </span>
          <p className="font-serif text-2xl sm:text-3xl text-[#302B2D] italic">
            "Obrigada por chegar até aqui."
          </p>
        </div>

        {/* Panoramic / Oval Mirror Motif */}
        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full max-w-xl aspect-[16/7] rounded-full p-2.5 sm:p-3.5 bg-gradient-to-r from-[#FAF6F4] via-[#F4ECE9] to-[#E8CDD2]/50 shadow-[0_12px_30px_-8px_rgba(48,43,45,0.08)] border-2 border-[#D9D9D6]/80"
          >
            <div className="w-full h-full rounded-full border border-[#A46F78]/25 p-1.5 sm:p-2 bg-[#F4ECE9]/35">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-r from-[#302B2D]/10 via-[#F3E5E7]/30 to-[#FAF8F7] flex items-center justify-center text-center p-4">
                <div className="absolute inset-0 mirror-reflection opacity-75 pointer-events-none" />

                <div className="relative z-10 space-y-1">
                  <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#302B2D] tracking-tight">
                    O espelho mudou.{' '}
                    <span className="italic text-[#A46F78]">Eu também.</span>
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#6A565B]">
                    Mirantão, Minas Gerais
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing notes & back to top */}
        <div className="pt-6 space-y-6">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#6A565B] hover:text-[#302B2D] transition-colors cursor-pointer group"
          >
            <span>voltar ao início</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#A46F78] transition-transform group-hover:-translate-y-1" />
          </button>

          <div className="text-[11px] font-sans tracking-widest text-[#6A565B]/80 uppercase space-y-1 pt-6 border-t border-[#E8CDD2]/30">
            <p>© {new Date().getFullYear()} Lígia Dias — UX/UI & Product Design</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
