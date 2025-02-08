'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// 动态导入组件，并添加加载状态
const ParticlesBackground = dynamic(
  () => import('./particles-background').then(mod => mod.default),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90" />
  }
);

const AnimatedContent = dynamic(
  () => import('./animated-content').then(mod => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center relative z-10 animate-pulse">
        <div className="h-12 w-3/4 mx-auto bg-primary/10 rounded-lg mb-8" />
        <div className="h-6 w-1/2 mx-auto bg-primary/10 rounded-lg" />
      </div>
    )
  }
);

export default function LandingPage() {
  return (
    <main className="flex-1 w-full min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90 relative overflow-hidden">
      <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-b from-background to-background/90" />}>
        <ParticlesBackground />
      </Suspense>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      <Suspense fallback={
        <div className="max-w-4xl mx-auto px-4 py-16 text-center relative z-10 animate-pulse">
          <div className="h-12 w-3/4 mx-auto bg-primary/10 rounded-lg mb-8" />
          <div className="h-6 w-1/2 mx-auto bg-primary/10 rounded-lg" />
        </div>
      }>
        <AnimatedContent />
      </Suspense>
    </main>
  );
}
