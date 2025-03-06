
export interface Service {
  id: number;
  rank: 'S' | 'A' | 'B' | 'C';
  nameEn: string;
  nameJp: string;
  marketSize: string;
  domain: string;
  goal: string;
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
  mission: string;
  vision: string;
  address: string;
  email: string;
  phone: string;
  established: string;
  ceo: string;
  employees: string;
  socialLinks: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}
