import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Copy, Server } from "lucide-react";

export function Hero() {
  return (
    <section className="site-grid relative border-b border-border">
      <div className="section-shell flex min-h-[100svh] flex-col items-center justify-center py-28 text-center sm:py-32">
        <div className="mb-6 flex items-center justify-center">
          <Image
            src="https://www.nxtcorex.cn/img/logo_c.webp"
            alt="nxtcorex mc"
            width={64}
            height={64}
            className="size-16"
            priority
          />
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-normal text-foreground sm:text-6xl md:text-7xl">
          nxtcorex mc
        </h1>

        <p className="mt-5 max-w-2xl text-balance text-base leading-7 text-muted-foreground sm:text-lg">
          纯净生存，少一点规则，多一点建造和探索。
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="group h-11 rounded-md px-5">
            <Link href="#contact">
              加入服务器
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-11 rounded-md bg-background/80 px-5">
            <Link href="#about">查看规则</Link>
          </Button>
        </div>

        <div className="mt-12 grid w-full max-w-3xl overflow-hidden rounded-lg border border-border bg-card text-left shadow-sm sm:grid-cols-2">
          <div className="border-b border-border p-4 sm:border-b-0 sm:border-r">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium">
              <Server className="size-4" />
              服务器地址
            </div>
            <p className="font-mono text-sm text-muted-foreground">mc.nxtcorex.cn</p>
          </div>
          <div className="p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium">
              <Copy className="size-4" />
              交流群
            </div>
            <p className="font-mono text-sm text-muted-foreground">1011484183</p>
          </div>
        </div>
      </div>
    </section>
  );
}
