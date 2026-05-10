import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export function QQGroup() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell max-w-3xl text-center">
        <p className="mb-3 text-sm font-medium text-muted-foreground">Community</p>
        <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
          加入社区
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
          加群后可以查看维护通知、玩家交流和开服相关信息。
        </p>
        <Card className="mx-auto mb-6 mt-8 max-w-sm border-border bg-card">
          <CardContent className="p-6">
            <p className="font-mono text-3xl font-semibold tracking-normal sm:text-4xl">
              1011484183
            </p>
          </CardContent>
        </Card>
        <Button
          asChild
          size="lg"
          className="h-11 rounded-md px-5"
        >
          <Link
            href="https://qm.qq.com/q/kUNYWdUBbi"
            target="_blank"
            rel="noopener noreferrer"
          >
            加入 QQ 群
            <ArrowUpRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
