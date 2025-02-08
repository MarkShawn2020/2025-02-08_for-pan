import Image from 'next/image';
import { ClientContent } from './client-content';

export default function HomeContent() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 主要内容 */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          {/* 标题区域 */}
          <div className="text-center mb-16 md:mb-24 relative">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
            <h1 className="relative text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary/70 to-primary text-transparent bg-clip-text mb-6
                         [text-shadow:0_0_30px_rgba(var(--primary-rgb),0.2)] animate-gradient">
              感谢潘总交流会
            </h1>
            <p className="text-xl md:text-3xl text-foreground/80 font-light tracking-wider">
              共创美好未来
            </p>
          </div>

          {/* 照片展示 */}
          <div className="relative max-w-5xl mx-auto mb-16 md:mb-24 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-2xl blur opacity-30 
                          group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl 
                          transform group-hover:scale-[1.01] transition duration-500">
              <Image
                src="/heying2.png"
                alt="感谢潘总交流会合影"
                fill
                className="object-cover transform scale-105 group-hover:scale-100 transition duration-1000"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition duration-500">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white/90">
                  难忘的交流时刻
                </h2>
                <p className="text-white/80 text-lg md:text-xl font-light tracking-wide">
                  共同探讨，共创未来
                </p>
              </div>
            </div>
          </div>

          {/* 动态内容 */}
          <ClientContent />
        </div>
      </div>
    </div>
  );
}
