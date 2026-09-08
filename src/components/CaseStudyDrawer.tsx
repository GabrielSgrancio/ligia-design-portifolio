import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, X, ExternalLink, Sparkles, Layers, Compass, CheckCircle2 } from 'lucide-react';
import { CaseStudyData } from '../types';

interface CaseStudyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  project: CaseStudyData | null;
}

export default function CaseStudyDrawer({
  isOpen,
  onClose,
  project,
}: CaseStudyDrawerProps) {
  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#302B2D]/40 backdrop-blur-xs"
          />

          {/* Lateral Slide-In Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 280 }}
            className="relative w-full max-w-3xl bg-[#FAF8F7] text-[#302B2D] h-full shadow-2xl overflow-y-auto z-10 border-l border-[#E8CDD2]/60"
          >
            {/* Header bar */}
            <div className="sticky top-0 bg-[#FAF8F7]/95 backdrop-blur-md border-b border-[#E8CDD2]/40 px-6 sm:px-10 py-5 flex items-center justify-between z-20">
              <button
                onClick={onClose}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#6A565B] hover:text-[#302B2D] transition-colors group cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>Voltar à narrativa</span>
              </button>

              <button
                onClick={onClose}
                aria-label="Fechar case"
                className="w-9 h-9 rounded-full border border-[#D9D9D6] flex items-center justify-center text-[#6A565B] hover:text-[#302B2D] hover:border-[#A46F78] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Case Study Content */}
            <div className="px-6 sm:px-12 py-10 space-y-12">
              {/* Project Intro */}
              <div className="space-y-4 border-b border-[#E8CDD2]/30 pb-8">
                <div className="flex items-center space-x-3 text-xs tracking-widest uppercase text-[#A46F78] font-medium">
                  <span>{project.role}</span>
                  {project.timeline && (
                    <>
                      <span>•</span>
                      <span>{project.timeline}</span>
                    </>
                  )}
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#302B2D] tracking-tight">
                  {project.title}
                </h1>

                <p className="font-serif text-xl sm:text-2xl text-[#6A565B] italic">
                  "{project.tagline}"
                </p>

                <p className="text-base text-[#493D40] leading-relaxed max-w-2xl pt-2">
                  {project.summary}
                </p>
              </div>

              {/* Case Study Sections with Placeholders */}
              <div className="space-y-10">
                {project.sections.map((sec, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-sm bg-[#FAF6F4] border border-[#E8CDD2]/40 shadow-xs space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-[#E8CDD2]/20 pb-2">
                      <h2 className="font-serif text-xl text-[#302B2D] font-medium flex items-center space-x-2">
                        <span className="text-[#A46F78] text-sm font-mono">0{idx + 1}.</span>
                        <span>{sec.title}</span>
                      </h2>
                      <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-xs bg-[#E8CDD2]/40 text-[#6A565B]">
                        {sec.placeholderKey}
                      </span>
                    </div>

                    {sec.description && (
                      <p className="text-sm text-[#493D40] leading-relaxed">
                        {sec.description}
                      </p>
                    )}

                    {/* Content slot placeholder */}
                    <div className="p-8 sm:p-12 border border-dashed border-[#BFC1C2] rounded-xs bg-[#F4ECE9]/40 flex flex-col items-center justify-center text-center space-y-2">
                      <span className="font-mono text-xs sm:text-sm text-[#A46F78] font-medium tracking-wide">
                        {sec.placeholderKey}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer navigation */}
              <div className="pt-8 border-t border-[#E8CDD2]/40 flex justify-between items-center text-sm">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-sm border border-[#A46F78] text-[#302B2D] hover:bg-[#F3E5E7] transition-colors cursor-pointer"
                >
                  Voltar ao portfólio
                </button>
                <a
                  href="#contato"
                  onClick={onClose}
                  className="text-[#A46F78] hover:underline cursor-pointer"
                >
                  Conversar sobre este projeto →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
