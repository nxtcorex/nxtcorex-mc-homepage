export function About() {
  return (
    <section id="about" className="border-b border-border py-20 sm:py-24">
      <div className="section-shell grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <div>
          <p className="mb-3 text-sm font-medium text-muted-foreground">About</p>
          <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
            保持 Minecraft 原本的节奏。
          </h2>
        </div>
        <div className="max-w-2xl space-y-4 text-base leading-7 text-muted-foreground">
          <p>
            这是一个纯净的 Minecraft 生存服务器，没有复杂的插件和规则。
          </p>
          <p>
            我们相信简单的游戏体验才是最好的。在这里，你可以专注于建造、探索和与朋友一起玩。
          </p>
        </div>
      </div>
    </section>
  );
}
