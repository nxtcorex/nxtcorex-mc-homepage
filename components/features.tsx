import { Feature } from "@/types";
import { Pickaxe, ShieldCheck, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeaturesProps {
  features: Feature[];
}

const icons = [Pickaxe, ShieldCheck, Sparkles];

export function Features({ features }: FeaturesProps) {
  return (
    <section id="features" className="border-b border-border bg-muted/25 py-20 sm:py-24">
      <div className="section-shell">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-medium text-muted-foreground">Features</p>
            <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
              服务器特色
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            重点放在稳定、干净和长期可玩的体验上。
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = icons[index % icons.length];

            return (
              <Card
                key={index}
                className="border-border bg-background transition-colors hover:bg-card"
              >
                <CardHeader className="gap-4 pb-3">
                  <div className="flex size-9 items-center justify-center rounded-md border border-border bg-muted">
                    <Icon className="size-4" />
                  </div>
                  <CardTitle className="text-base font-semibold leading-6">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">{feature.content}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
