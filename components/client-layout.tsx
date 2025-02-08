'use client';

import { ThemeProvider } from 'next-themes';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { motion, AnimatePresence } from 'framer-motion';

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="fixed inset-0 bg-gradient-radial from-primary/5 via-background to-background -z-10" />
      
      <AnimatePresence mode="wait">
        <motion.div
          className="min-h-screen flex flex-col relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.nav 
            className="w-full border-b border-b-foreground/10 backdrop-blur-md bg-background/30 fixed top-0 z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="w-full max-w-7xl mx-auto flex justify-between items-center py-4 px-5">
              <motion.div 
                className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                感谢潘总交流会
              </motion.div>
              <ThemeSwitcher />
            </div>
          </motion.nav>

          <main className="flex-1 w-full mt-16">
            <div className="w-full max-w-7xl mx-auto px-4 py-8">
              {children}
            </div>
          </main>

          <motion.footer 
            className="w-full border-t border-foreground/10 mt-auto backdrop-blur-md bg-background/30"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="max-w-7xl mx-auto py-8 px-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <p className="text-sm text-foreground/70">
                  © 2025 感谢潘总交流会
                </p>
              </div>
              <motion.div 
                className="text-sm text-foreground/50"
                whileHover={{ scale: 1.05, color: 'var(--primary)' }}
              >
                共创美好未来
              </motion.div>
            </div>
          </motion.footer>
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
