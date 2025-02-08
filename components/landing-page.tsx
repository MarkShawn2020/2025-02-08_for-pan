'use client';

import dynamic from 'next/dynamic';

const ParticlesBackground = dynamic(() => import('./particles-background'), {
  ssr: false
});

const AnimatedContent = dynamic(() => import('./animated-content'), {
  ssr: false
});

export default function LandingPage() {
  return (
    <main className="flex-1 w-full min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90 relative overflow-hidden">
      <ParticlesBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      <AnimatedContent />
    </main>
  );
}
