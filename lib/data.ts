import { Announcement, Feature, Photo } from '@/types';
import announcementsData from '@/data/announcements.json';
import featuresData from '@/data/features.json';
import photosData from '@/data/photos.json';

export function getAnnouncements(): Announcement[] {
  const announcements = announcementsData as Announcement[];
  // Sort by date from newest to oldest
  return announcements.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getFeatures(): Feature[] {
  return featuresData as Feature[];
}

export function getPhotos(): Photo[] {
  return photosData as Photo[];
}
