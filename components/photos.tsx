import Image from "next/image";
import { Photo } from "@/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PhotosProps {
  photos: Photo[];
}

export function Photos({ photos }: PhotosProps) {
  return (
    <section id="photos" className="border-b border-border py-20 sm:py-24">
      <div className="section-shell">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-medium text-muted-foreground">Gallery</p>
            <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
              服务器截图
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            玩家建筑、地图进度和日常记录会放在这里。
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <Card
              key={photo.id}
              className="group overflow-hidden border-border bg-card transition-colors hover:bg-muted/40"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border bg-muted">
                <Image
                  src={photo.imageUrl}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-base font-semibold leading-6">{photo.title}</CardTitle>
                  <time className="text-xs text-muted-foreground">
                    {photo.date}
                  </time>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{photo.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
