import React from 'react';
import { motion } from 'motion/react';
import BotanicalElement from '../BotanicalElement';
import Tape from '../Tape';
import SketchPaper from './SketchPaper';
import PaletteScrap from './PaletteScrap';

export default function LeftWallComposition() {
  return (
    <motion.div
      aria-hidden="true"
      className="relative w-[320px] h-[520px] select-none pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      
      {/* PRIMARY BOTANICAL: Delicate gypsophila stem — upper-right of canvas */}
      <motion.div
        className="absolute right-[10px] top-[0px]"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <BotanicalElement
          variant="stem"
          size={220}
          interactive={true}
          angle={-6}
          origin="46% 64%"
        />
        
        {/* Tape crossing the stem — positioned where tape physically pins to wall */}
        <div className="absolute left-[85px] top-[135px] z-20 pointer-events-none">
          <Tape angle={-5} width="w-12" height="h-4" opacity={0.82} />
        </div>
      </motion.div>

      {/* SECONDARY: Pressed pink flower — lower-left, clearly separated */}
      <motion.div
        className="absolute left-[0px] top-[220px]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        <BotanicalElement
          variant="pressed-pink-flower"
          size={115}
          interactive={true}
          angle={5}
          origin="50% 80%"
        />
        
        {/* Small tape near lower stem/base */}
        <div className="absolute left-[42px] top-[88px] z-20 pointer-events-none">
          <Tape angle={12} width="w-8" height="h-3" opacity={0.78} />
        </div>
      </motion.div>

      {/* SKETCH PAPER — center-right, below botanicals */}
      <motion.div
        className="absolute right-[15px] bottom-[55px] z-30 pointer-events-auto -rotate-[2deg]"
        initial={{ opacity: 0, y: 12, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 1.2, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
      >
        <SketchPaper />
      </motion.div>

      {/* PALETTE SCRAP — bottom-left, separate from sketch */}
      <motion.div
        className="absolute left-[15px] bottom-[0px] z-10 pointer-events-auto rotate-[3deg]"
        initial={{ opacity: 0, y: 14, rotate: 3 }}
        animate={{ opacity: 1, y: 0, rotate: 3 }}
        transition={{ duration: 1.4, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
      >
        <PaletteScrap />
      </motion.div>

    </motion.div>
  );
}
