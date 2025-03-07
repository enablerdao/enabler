
export type ServiceRank = 'S' | 'A' | 'B' | 'C';

export type ServiceCategory = 
  'STAY_TRAVEL' | 
  'LIFE_COMMUNITY' | 
  'WORK_PRODUCTIVITY' | 
  'HEALTH_WELLNESS' | 
  'INVEST_GROW';

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
  buttonText?: string; // Add buttonText property to fix build errors
}

export interface Testimonial {
  author: string;
  position?: string;
  company?: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface UseCase {
  title: string;
  description: string;
  result: string;
  image?: string;
}

export interface UniquePoint {
  title: string;
  description: string;
  icon?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: number;
  rank: ServiceRank;
  nameEn: string;
  nameJp: string;
  marketSize: string;
  domain: string;
  disableLinks?: boolean;
  goal: string;
  description?: string;
  catchphrase?: string;
  features?: ServiceFeature[];
  color?: string;
  category?: ServiceCategory;
  emoji?: string;
  mission?: string;
  vision?: string;
  targetAudience?: string;
  specificAudience?: string;
  midtermGoal?: string;
  longtermGoal?: string;
  launchDate?: string;
  pricing?: PricingTier[];
  testimonials?: Testimonial[];
  useCases?: UseCase[];
  uniquePoints?: UniquePoint[];
  faqs?: FAQ[];
  quote?: string;
  quoteAuthor?: string;
  apiInfo?: any; // Add apiInfo property to fix build errors
  currentListings?: number; // Add current listings count
}

// Add these interfaces to fix build errors
export interface ApiInfo {
  [key: string]: any;
}

export interface PricingPlan {
  [key: string]: any;
}

export interface CompanyInfo {
  [key: string]: any;
}

export const categoryInfo: Record<ServiceCategory, { name: string; description: string }> = {
  'STAY_TRAVEL': {
    name: '滞在・旅行',
    description: '宿泊施設や旅行に関連するサービス'
  },
  'LIFE_COMMUNITY': {
    name: '生活・コミュニティ',
    description: '日常生活を豊かにするコミュニティサービス'
  },
  'WORK_PRODUCTIVITY': {
    name: '仕事・生産性',
    description: '仕事の効率化や生産性向上に関するサービス'
  },
  'HEALTH_WELLNESS': {
    name: '健康・ウェルネス',
    description: '健康維持や心身の健全性を促進するサービス'
  },
  'INVEST_GROW': {
    name: '投資・成長',
    description: '資産形成や自己成長に関するサービス'
  }
};
