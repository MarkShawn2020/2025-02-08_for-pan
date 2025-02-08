import { Button } from "@/components/ui/button";

// 倒计时组件
const CountdownTimer = () => {
  const eventDate = new Date('2025-02-08T15:00:00+08:00');
  return (
    <div className="flex gap-4 text-center">
      <div className="bg-primary/10 p-4 rounded-lg">
        <div className="text-3xl font-bold text-primary">2025</div>
        <div className="text-sm">年</div>
      </div>
      <div className="bg-primary/10 p-4 rounded-lg">
        <div className="text-3xl font-bold text-primary">02</div>
        <div className="text-sm">月</div>
      </div>
      <div className="bg-primary/10 p-4 rounded-lg">
        <div className="text-3xl font-bold text-primary">08</div>
        <div className="text-sm">日</div>
      </div>
    </div>
  );
};

// 主要内容组件
const MainContent = () => (
  <div className="max-w-4xl mx-auto px-4 py-16 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
      感谢潘总莅临指导
    </h1>
    
    <p className="text-xl md:text-2xl mb-12 text-foreground/80">
      携手共创美好未来
    </p>

    <CountdownTimer />

    <div className="mt-16 space-y-8">
      <div className="bg-card p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">交流会要点</h2>
        <ul className="text-left space-y-4 text-lg">
          <li className="flex items-center gap-2">
            <span className="text-primary">•</span>
            <span>深入探讨行业发展趋势</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">•</span>
            <span>分享宝贵经验与见解</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">•</span>
            <span>展望未来发展方向</span>
          </li>
        </ul>
      </div>

      <div className="bg-card p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">感谢寄语</h2>
        <p className="text-lg leading-relaxed">
          感谢潘总在百忙之中抽空莅临指导，您的远见卓识为我们指明了方向，
          您的宝贵建议为我们注入了新的动力。我们将继续努力，以更优异的成绩回报您的期望！
        </p>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="flex-1 w-full bg-gradient-to-b from-background to-background/95">
      <MainContent />
    </main>
  );
}
