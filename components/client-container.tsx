'use client';

import { MouseCursor } from './mouse-cursor';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const ParticlesBackground = dynamic(() => import('./particles-background'), {
  ssr: false
});

export function ClientContainer({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 背景效果 */}
      <ParticlesBackground />
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/95 to-background/90" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-background/50 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(0,0,0,0))]" />
      </div>

      {/* 鼠标跟随效果 */}
      <MouseCursor />

      {/* 装饰元素 */}
      <motion.div 
        className="fixed top-1/4 -right-12 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="fixed bottom-1/4 -left-12 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 50, -20, 0],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
      />

      {children}
    </>
  );
}
