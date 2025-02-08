'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PhotoSection() {
  return (
    <motion.div
      className="w-full relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Image
        src="/heying2.png"
        alt="感谢潘总交流会合影"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      <motion.div 
        className="absolute bottom-0 left-0 right-0 p-6 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-2">难忘的交流时刻</h2>
        <p className="text-white/80">共同探讨，共创未来</p>
      </motion.div>
    </motion.div>
  );
}
