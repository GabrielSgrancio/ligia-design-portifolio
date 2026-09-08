import { motion } from 'motion/react';
import Tape from './Tape';

interface PhotoCardProps {
  label: string;
  sublabel?: string;
  aspect?: string; // e.g. 'aspect-[3/4]', 'aspect-[4/3]', 'aspect-[1/1]'
  angle?: number;
  hasTape?: boolean;
  tapeAngle?: number;
  tapePosition?: 'top-center' | 'top-left' | 'top-right';
  handwrittenNote?: string;
  handwrittenPosition?: 'bottom-left' | 'bottom-right' | 'top-right';
  className?: string;
  imageSrc?: string;
  alt?: string;
}

export default function PhotoCard({
  label,
  sublabel,
  aspect = 'aspect-[3/4]',
  angle = 0,
  hasTape = true,
  tapeAngle = -3,
  tapePosition = 'top-center',
  handwrittenNote,
  handwrittenPosition = 'bottom-right',
  className = '',
  imageSrc,
  alt,
}: PhotoCardProps) {
  const getTapePosClass = () => {
    switch (tapePosition) {
      case 'top-left':
        return '-top-3 left-4';
      case 'top-right':
        return '-top-3 right-4';
      case 'top-center':
      default:
        return '-top-3 left-1/2 -translate-x-1/2';
    }
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {hasTape && (
        <Tape
          angle={tapeAngle}
          className={`absolute ${getTapePosClass()}`}
        />
      )}

      <motion.div
        whileHover={{
          y: -4,
          rotate: angle + (angle >= 0 ? 0.6 : -0.6),
          boxShadow:
            '0 12px 24px -6px rgba(48, 43, 45, 0.08), 0 4px 8px -2px rgba(48, 43, 45, 0.04)',
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ transform: `rotate(${angle}deg)` }}
        className="relative bg-[#FAF6F4] p-3 sm:p-4 rounded-[2px] border border-[#E8CDD2]/60 shadow-[0_4px_12px_-2px_rgba(48,43,45,0.05)] cursor-pointer group select-none transition-shadow"
      >
        {/* Photo print area */}
        <div
          className={`w-full ${aspect} bg-[#F4ECE9]/90 rounded-[1px] border border-[#D9D9D6]/70 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden`}
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={alt || label}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-[1px]"
            />
          ) : (
            <div className="flex flex-col items-center justify-center space-y-2.5 max-w-[85%]">
              {/* Subtle archival insignia */}
              <div className="w-7 h-7 rounded-full border border-[#A46F78]/30 flex items-center justify-center text-[#A46F78]/60 text-[10px]">
                ✦
              </div>
              <span className="font-serif text-sm sm:text-base tracking-wide text-[#302B2D]/90 font-medium">
                {label}
              </span>
              {sublabel && (
                <span className="text-[10px] sm:text-[11px] text-[#6A565B] font-sans tracking-widest uppercase">
                  {sublabel}
                </span>
              )}
            </div>
          )}

          {/* Film grain and delicate surface reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#302B2D]/[0.02] via-transparent to-white/[0.12] pointer-events-none" />
        </div>
      </motion.div>

      {/* Handwritten note attached to the corner */}
      {handwrittenNote && (
        <div
          className={`absolute ${
            handwrittenPosition === 'bottom-right'
              ? '-bottom-5 -right-6'
              : handwrittenPosition === 'bottom-left'
              ? '-bottom-5 -left-6'
              : '-top-5 -right-6'
          } z-20 pointer-events-none`}
        >
          <p className="font-handwriting text-[#A46F78] text-base sm:text-lg font-medium tracking-wide -rotate-2 whitespace-nowrap drop-shadow-2xs">
            {handwrittenNote}
          </p>
        </div>
      )}
    </div>
  );
}
