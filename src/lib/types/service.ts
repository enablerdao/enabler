
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
