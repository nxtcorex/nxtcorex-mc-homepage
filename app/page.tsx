import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Features } from "@/components/features";
import { Photos } from "@/components/photos";
import { Announcements } from "@/components/announcements";
import { QQGroup } from "@/components/qq-group";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

import announcementsData from "@/data/announcements.json";
import featuresData from "@/data/features.json";
import photosData from "@/data/photos.json";

export default function Home() {
  // Sort announcements by date (newest first)
  const sortedAnnouncements = [...announcementsData].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <>
      <Header />
      <main className="w-full bg-background">
        <Hero />
        <About />
        <Features features={featuresData} />
        <Photos photos={photosData} />
        <Announcements announcements={sortedAnnouncements} />
        <QQGroup />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
