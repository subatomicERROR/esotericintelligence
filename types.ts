export enum ContentType {
  Article = 'Article',
  Quote = 'Quote',
  Poem = 'Poem',
  Research = 'Research Paper',
}

export enum ContentCategory {
  Quantum = 'Quantum',
  Spiritual = 'Spiritual',
  Research = 'Research',
}

export interface ContentItem {
  id: string;
  type: ContentType;
  title: string;
  author: string;
  preview: string;
  category: ContentCategory;
  price: number;
  isPremium: boolean;
  published: boolean;
  pdfUrl?: string;
  createdAt: string; // ISO 8601 date string
}

export type Page = 'Home' | 'Quantum' | 'Spiritual' | 'Research' | 'My Library' | 'Admin';

export interface PageProps {
  purchasedItems: Set<string>;
  onPurchase: (item: ContentItem) => void;
  showToast: (message: string, type: 'success' | 'error') => void;
  content: ContentItem[];
}

export interface AdminDashboardProps {
  showToast: (message: string, type: 'success' | 'error') => void;
  content: ContentItem[];
  setContent: React.Dispatch<React.SetStateAction<ContentItem[]>>;
  purchasedItems: Set<string>;
}


declare global {
  interface Window {
    Razorpay: any;
  }
}
