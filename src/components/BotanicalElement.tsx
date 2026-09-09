import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'motion/react';

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
  origin?: string;
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
  origin = 'bottom center',
}: BotanicalProps) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || !interactive) return;

    // Subtle random idle breeze trigger
    const breezeInterval = setInterval(() => {
      if (!isHovered && Math.random() > 0.6) {
        controls.start({
          rotate: [angle, angle + 0.6, angle - 0.3, angle],
          transition: { duration: 4.5, ease: "easeInOut" }
        });
      }
    }, 8000);

    return () => clearInterval(breezeInterval);
  }, [angle, controls, isHovered, interactive, reducedMotion]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!reducedMotion && interactive) {
      controls.start({
        rotate: [angle, angle + 1.2, angle - 0.6, angle],
        transition: { duration: 3, ease: "easeInOut" }
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
        src={`${getAssetPath()}?v=6`}
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
        style={{ transform: `rotate(${angle}deg)`, transformOrigin: origin }}
      >
        {renderGraphic()}
      </div>
    );
  }

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ rotate: angle }}
      animate={controls}
      className={`pointer-events-auto select-none flex items-end justify-center ${className}`}
      style={{ transformOrigin: origin }}
    >
      {renderGraphic()}
    </motion.div>
  );
}
