import Image from 'next/image';
import { ClientContent } from './client-content';

export default function HomeContent() {
  return (
    <div className="relative min-h-screen">
      {/* 背景图片 */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background to-background" />
      </div>

      {/* 主要内容 */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          {/* 标题区域 */}
          <div className="text-center mb-12 md:mb-20">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text mb-4">
              感谢潘总交流会
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80">
              共创美好未来
            </p>
          </div>

          {/* 照片展示 */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12 md:mb-20">
            <Image
              src="/heying.png"
              alt="感谢潘总交流会合影"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">难忘的交流时刻</h2>
              <p className="text-white/90 text-lg">共同探讨，共创未来</p>
            </div>
          </div>

          {/* 动态内容 */}
          <ClientContent />
        </div>
      </div>
    </div>
  );
}
