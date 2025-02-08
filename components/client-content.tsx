'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ParallaxCard } from './parallax-card';

export function ClientContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const items = [
    {
      title: '深度交流',
      description: '与潘总面对面交流，分享经验与见解',
      icon: '🤝'
    },
    {
      title: '共同愿景',
      description: '探讨未来发展方向，规划共同目标',
      icon: '🎯'
    },
    {
      title: '团队凝聚',
      description: '增进团队理解，提升团队协作能力',
      icon: '🌟'
    }
  ];

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, scale }}
      className="space-y-16 py-12"
    >
      {/* 活动亮点 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <ParallaxCard
            key={item.title}
            className="group cursor-pointer"
          >
            <motion.div
              className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-lg
                         border border-primary/10 shadow-xl hover:shadow-primary/20 transition-shadow duration-500"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="text-4xl mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1, type: 'spring' }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
                {item.title}
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {item.description}
              </p>
              <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-transparent opacity-0 
                          group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            </motion.div>
          </ParallaxCard>
        ))}
      </div>

      {/* 动态标语 */}
      <motion.div 
        className="text-center py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary/70 to-primary text-transparent bg-clip-text"
          animate={{
            backgroundPosition: ['0%', '100%'],
            transition: {
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse'
            }
          }}
          style={{ backgroundSize: '200%' }}
        >
          让我们携手共创美好未来
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
