'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function MouseCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // 检查鼠标下的元素是否可点击
      const target = e.target as HTMLElement;
      const computed = window.getComputedStyle(target);
      setIsPointer(computed.cursor === 'pointer' || target.tagName === 'BUTTON' || target.tagName === 'A');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      >
        <motion.div
          className="w-8 h-8 bg-white rounded-full opacity-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
