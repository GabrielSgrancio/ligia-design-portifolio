import React from 'react';
import { motion } from 'framer-motion';
import Tape from '../Tape';

export default function QuotePaper() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, rotate: 1.8 }}
      animate={{ opacity: 1, y: 0, rotate: 1.8 }}
      transition={{ duration: 1.5, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-[190px] min-h-[220px] px-6 py-8 flex flex-col items-center justify-center bg-cover shadow-[0_10px_24px_rgba(45,34,27,.10)]"
      style={{
        backgroundImage: "url('/assets/vintage-paper.jpg')",
        backgroundPosition: '80% 20%',
        clipPath: 'polygon(0% 1%, 100% 0%, 99% 99%, 1% 100%)',
      }}
    >
      {/* Tape Wrapper */}
      <div className="absolute -top-3 left-[42px] z-20">
        <Tape angle={-6} width="w-14" height="h-4" opacity={0.84} />
      </div>

      <p className="font-serif text-[27px] leading-[1.14] text-[#413632] font-normal text-center drop-shadow-sm">
        Design começa<br />
        no olhar<br />
        para o outro.
      </p>

      {/* Pencil underline beneath "outro." */}
      <span className="absolute bottom-[49px] right-[28px] w-[32px] h-[1.5px] bg-[#806B61]/60 rotate-[-4deg] rounded-full" />
    </motion.div>
  );
}
