
import { Service } from '../types/service';
import { companyInfo } from './company';
import { sRankServices } from './services-s-rank';
import { aRankServices } from './services-a-rank';
import { bRankServices } from './services-b-rank';
import { cRankServices } from './services-c-rank';

// Combine all services
export const services: Service[] = [
  ...sRankServices,
  ...aRankServices,
  ...bRankServices,
  ...cRankServices
];

export { companyInfo };
