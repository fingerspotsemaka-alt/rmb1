export type PublicationType = 'hybrid' | 'journal' | 'gallery';

export type PublicationCategory = 
  | 'Pendidikan & Pelatihan'
  | 'Bakti Sosial & Lingkungan'
  | 'Seminar & Riset'
  | 'Ekspedisi & Lapangan'
  | 'Seni & Kebudayaan'
  | 'Organisasi & Tata Kelola';

export type PublicationStatus = 'published' | 'draft' | 'archived';

export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  photographer?: string;
  timestamp?: string;
}

export interface JournalContent {
  abstract: string;
  background: string;
  activitiesProcess: string[];
  findingsAndResults: string[];
  evaluation: string;
  followUpPlan: string;
  participantsCount: number;
  impactMetrics: string;
}

export interface JournalComment {
  id: string;
  author: string;
  text: string;
  date: string;
}

export interface Publication {
  id: string;
  title: string;
  slug: string;
  type: PublicationType;
  category: PublicationCategory;
  date: string; // YYYY-MM-DD
  location: string;
  organizer: string;
  author: {
    name: string;
    role: string;
    division: string;
  };
  status: PublicationStatus;
  summary: string;
  coverImage: string;
  gallery: GalleryPhoto[];
  journal: JournalContent;
  tags: string[];
  viewsCount: number;
  likesCount: number;
  isBookmarked?: boolean;
  comments?: JournalComment[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface FilterState {
  search: string;
  category: string;
  type: string;
  status: string;
  onlyBookmarked?: boolean;
  sortBy: 'date-desc' | 'date-asc' | 'views-desc' | 'likes-desc' | 'title-asc';
}

export type DashboardViewMode = 'grid' | 'timeline' | 'location';
