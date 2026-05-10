import { Announcement } from "@/types";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AnnouncementsProps {
  announcements: Announcement[];
}

export function Announcements({ announcements }: AnnouncementsProps) {
  return (
    <section id="announcements" className="border-b border-border bg-muted/25 py-20 sm:py-24">
      <div className="section-shell max-w-4xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-medium text-muted-foreground">Changelog</p>
          <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
            公告
          </h2>
        </div>
        <div className="space-y-3">
          {announcements.map((announcement, index) => (
            <Card
              key={index}
              className="border-border bg-background transition-colors hover:bg-card"
            >
              <CardHeader className="pb-3">
                <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    {index === 0 && <Badge variant="secondary">最新</Badge>}
                    <CardTitle className="text-base font-semibold leading-6">{announcement.title}</CardTitle>
                  </div>
                  <time className="text-sm text-muted-foreground">
                    {announcement.date}
                  </time>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{announcement.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
