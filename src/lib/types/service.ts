
export interface Service {
  id: number;
  rank: 'S' | 'A' | 'B' | 'C';
  nameEn: string;
  nameJp: string;
  marketSize: string;
  domain: string;
  goal: string;
  category?: ServiceCategory;
  emoji?: string;
  description?: string;
  features?: { title: string; description: string }[];
  color?: string;
  mission?: string;
  vision?: string;
  targetAudience?: string;
  specificAudience?: string;
  midtermGoal?: string;
  longtermGoal?: string;
  launchDate?: string;
  catchphrase?: string;
  quote?: string;
  quoteAuthor?: string;
  useCases?: { title: string; description: string; result?: string }[];
  uniquePoints?: { title: string; description: string }[];
  faqs?: { question: string; answer: string }[];
  pricing?: PricingPlan[];
  testimonials?: Testimonial[];
  apiInfo?: ApiInfo;
}

export type ServiceCategory = 
  | 'STAY_TRAVEL' 
  | 'LIFE_COMMUNITY' 
  | 'WORK_PRODUCTIVITY' 
  | 'HEALTH_WELLNESS' 
  | 'INVEST_GROW';

export const categoryInfo: Record<ServiceCategory, {
  name: string;
  nameJp: string;
  icon: string;
  description: string;
}> = {
  STAY_TRAVEL: {
    name: 'STAY & TRAVEL',
    nameJp: '宿泊・旅行',
    icon: 'hotel',
    description: '宿泊や旅行に関する革新的なサービス'
  },
  LIFE_COMMUNITY: {
    name: 'LIFE & COMMUNITY',
    nameJp: '日常生活・コミュニティ',
    icon: 'users',
    description: '生活を豊かにする日常的なサービスやコミュニティの形成'
  },
  WORK_PRODUCTIVITY: {
    name: 'WORK & PRODUCTIVITY',
    nameJp: '仕事・効率化',
    icon: 'briefcase',
    description: '業務効率や生産性を向上させるためのサービス'
  },
  HEALTH_WELLNESS: {
    name: 'HEALTH & WELLNESS',
    nameJp: '健康・ウェルネス',
    icon: 'heart-pulse',
    description: '健康管理やウェルネスをサポートするサービス'
  },
  INVEST_GROW: {
    name: 'INVEST & GROW',
    nameJp: '投資・成長',
    icon: 'trending-up',
    description: '投資や成長をサポートするサービス'
  }
};

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
  buttonText?: string;
}

export interface Testimonial {
  author: string;
  position: string;
  company: string;
  content: string;
  rating?: number;
  avatar?: string;
}

export interface ApiInfo {
  endpoint: string;
  description: string;
  authentication: string;
  examples: ApiExample[];
  documentation?: string;
}

export interface ApiExample {
  language: string;
  code: string;
  description: string;
}

export interface CompanyInfo {
  nameJp: string;
  nameEn: string;
  description: string;
  slogan: string;
  mission: string;
  vision: string;
  address: string;
  email: string;
  phone: string;
  established: string;
  ceo: string;
  employees: string;
  businessActivities: string;
  openSource: string;
  socialLinks: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}
