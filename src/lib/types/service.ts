
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
  disableLinks?: boolean; // Add this property
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
}
