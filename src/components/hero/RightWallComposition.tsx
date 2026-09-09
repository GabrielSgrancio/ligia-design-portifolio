import React from 'react';
import { motion } from 'motion/react';
import QuotePaper from './QuotePaper';
import BotanicalElement from '../BotanicalElement';
import Tape from '../Tape';

export default function RightWallComposition() {
  return (
    <motion.div
      className="relative w-[280px] h-[340px] select-none pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      
      {/* Quote Paper — main visual weight */}
      <motion.div
        className="absolute left-0 top-[40px] z-20 pointer-events-auto"
        initial={{ opacity: 0, y: 10, rotate: 1.8 }}
        animate={{ opacity: 1, y: 0, rotate: 1.8 }}
        transition={{ duration: 1.5, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <QuotePaper />
      </motion.div>

      {/* Tiny Botanical Accent — independently taped to wall, NOT touching the paper */}
      <motion.div
        className="absolute right-[5px] top-[0px] z-10"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <BotanicalElement
          variant="wildflower"
          size={55}
          interactive={false}
          angle={18}
          origin="50% 80%"
        />
        
        {/* Independent tiny tape — clearly on the wall */}
        <div className="absolute bottom-[8px] left-[12px] z-20 pointer-events-none">
          <Tape angle={-15} width="w-5" height="h-2" opacity={0.72} />
        </div>
      </motion.div>

    </motion.div>
  );
}
