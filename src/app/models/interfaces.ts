// Data models for Kefraya Village Website

export interface NewsItem {
  id: number;
  title: string;
  titleAr: string;
  content: string;
  contentAr: string;
  date: string;
  image?: string;
  category: 'news' | 'announcement' | 'event';
}

export interface Event {
  id: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  date: string;
  time: string;
  location: string;
  locationAr: string;
  image?: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

export interface CommitteeMember {
  id: number;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  photo?: string;
  email?: string;
  phone?: string;
  bio?: string;
  bioAr?: string;
}

export interface Complaint {
  id: number;
  title: string;
  description: string;
  category: 'infrastructure' | 'services' | 'environment' | 'other';
  status: 'submitted' | 'under_review' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high';
  submittedBy: string;
  submittedDate: string;
  resolvedDate?: string;
  response?: string;
}

export interface WishlistItem {
  id: number;
  title: string;
  description: string;
  category: 'infrastructure' | 'social' | 'cultural' | 'environmental';
  estimatedCost?: number;
  priority: 'low' | 'medium' | 'high';
  submittedBy: string;
  submittedDate: string;
  status: 'submitted' | 'under_review' | 'approved' | 'in_progress' | 'completed';
  votes: number;
  funded: boolean;
}

export interface DonationProject {
  id: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  targetAmount: number;
  currentAmount: number;
  currency: 'USD' | 'EUR' | 'LBP';
  category: 'infrastructure' | 'education' | 'healthcare' | 'social' | 'cultural';
  status: 'active' | 'completed' | 'paused';
  startDate: string;
  endDate?: string;
  images?: string[];
  donors: number;
}

export interface VillageInfo {
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  history: string;
  historyAr: string;
  population: number;
  area: number;
  altitude: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  images: string[];
  landmarks: string[];
  landmarksAr: string[];
}

export interface Language {
  code: 'en' | 'ar' | 'fr';
  name: string;
  nativeName: string;
} 