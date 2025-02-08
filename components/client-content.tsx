'use client';

import { motion } from 'framer-motion';

export function ClientContent() {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* 活动亮点 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: '深度交流',
            description: '与潘总面对面交流，分享经验与见解'
          },
          {
            title: '共同愿景',
            description: '探讨未来发展方向，规划共同目标'
          },
          {
            title: '团队凝聚',
            description: '增进团队理解，提升团队协作能力'
          }
        ].map((item, index) => (
          <motion.div
            key={item.title}
            className="p-6 rounded-xl bg-primary/5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
              {item.title}
            </h3>
            <p className="text-foreground/80">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 倒计时或其他动态内容可以在这里添加 */}
    </motion.div>
  );
}
