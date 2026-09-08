import { useState } from 'react';
import { motion } from 'motion/react';

export interface BotanicalProps {
  className?: string;
  variant?:
    | 'stem'
    | 'flower'
    | 'branch'
    | 'pressed-rose'
    | 'wildflower'
    | 'eucalyptus'
    | 'gypsophila'
    | 'pressed-pink-flower';
  size?: number;
  interactive?: boolean;
  angle?: number;
}

/**
 * BotanicalElement
 * Archival pressed botanicals inspired by vintage herbarium sheets.
 * Uses photorealistic image assets with multiply blend mode.
 */
export default function BotanicalElement({
  className = '',
  variant = 'stem',
  size = 64,
  interactive = true,
  angle = 0,
}: BotanicalProps) {
  const [isBreeze, setIsBreeze] = useState(false);

  const getAssetPath = () => {
    switch (variant) {
      case 'gypsophila':
      case 'wildflower':
        return '/assets/botanical-01.png';
      case 'pressed-pink-flower':
      case 'pressed-rose':
      case 'flower':
        return '/assets/botanical-02.png';
      case 'stem':
      case 'branch':
      case 'eucalyptus':
      default:
        return '/assets/botanical-03.png';
    }
  };

  const renderGraphic = () => {
    return (
      <img
        src={`${getAssetPath()}?v=2`}
        alt={`Botanical ${variant}`}
        style={{ width: size, height: 'auto' }}
        className="max-w-none object-contain filter drop-shadow-[1px_2px_2px_rgba(40,30,20,0.2)] pointer-events-none"
      />
    );
  };

  if (!interactive) {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none select-none flex items-end justify-center ${className}`}
        style={{ transform: `rotate(${angle}deg)` }}
      >
        {renderGraphic()}
      </div>
    );
  }

  return (
    <motion.div
      onMouseEnter={() => setIsBreeze(true)}
      onMouseLeave={() => setIsBreeze(false)}
      animate={{
        rotate: isBreeze ? angle + 2.5 : angle,
        y: isBreeze ? -2 : 0,
        filter: isBreeze
          ? 'drop-shadow(0 4px 8px rgba(48,43,45,0.12))'
          : 'drop-shadow(0 2px 4px rgba(48,43,45,0.06))',
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`pointer-events-auto select-none cursor-default flex items-end justify-center ${className}`}
      style={{ transformOrigin: 'bottom center' }}
    >
      {renderGraphic()}
    </motion.div>
  );
}
