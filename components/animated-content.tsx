'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

// 倒计时组件
const CountdownTimer = () => {
  const eventDate = new Date('2025-02-08T15:00:00+08:00');
  return (
    <motion.div 
      className="flex gap-4 text-center"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div 
        className="bg-primary/10 backdrop-blur-sm p-6 rounded-2xl border border-primary/20"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="text-4xl font-bold text-primary">2025</div>
        <div className="text-sm">年</div>
      </motion.div>
      <motion.div 
        className="bg-primary/10 backdrop-blur-sm p-6 rounded-2xl border border-primary/20"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="text-4xl font-bold text-primary">02</div>
        <div className="text-sm">月</div>
      </motion.div>
      <motion.div 
        className="bg-primary/10 backdrop-blur-sm p-6 rounded-2xl border border-primary/20"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="text-4xl font-bold text-primary">08</div>
        <div className="text-sm">日</div>
      </motion.div>
    </motion.div>
  );
};

// 主要内容组件
const AnimatedContent = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div 
      className="max-w-4xl mx-auto px-4 py-16 text-center relative z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-purple-500 to-primary text-transparent bg-clip-text"
        style={{ y }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        感谢潘总莅临指导
      </motion.h1>
      
      <motion.p 
        className="text-2xl md:text-3xl mb-16 text-foreground/80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        携手共创美好未来
      </motion.p>

      <CountdownTimer />

      <div className="mt-20 space-y-12">
        <motion.div 
          className="bg-card/30 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-primary/10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-primary">交流会要点</h2>
          <ul className="text-left space-y-6 text-xl">
            {[
              '深入探讨行业发展趋势',
              '分享宝贵经验与见解',
              '展望未来发展方向'
            ].map((point, index) => (
              <motion.li 
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-primary text-2xl">•</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className="bg-card/30 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-primary/10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-primary">感谢寄语</h2>
          <p className="text-xl leading-relaxed">
            感谢潘总在百忙之中抽空莅临指导，您的远见卓识为我们指明了方向，
            您的宝贵建议为我们注入了新的动力。我们将继续努力，以更优异的成绩回报您的期望！
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnimatedContent;
