
import { Service, ServiceCategory } from '../types/service';
import { companyInfo } from './company';
import { sRankServices } from './services-s-rank';
import { aRankServices } from './services-a-rank';
import { bRankServices } from './services-b-rank';
import { cRankServices } from './services-c-rank';
import { serviceCategories } from './serviceCategories';

// Add domains for services that might not be in the rank files yet
const additionalDomains = {
  'Enabliss': 'enablisslife.com',
  'HealthGenius': 'healthgeniushq.com'
};

// Assign categories to services
const categorizeServices = (services: Service[]): Service[] => {
  return services.map(service => {
    let category: ServiceCategory | undefined;
    
    // STAY & TRAVEL category
    if (['Enabliss', 'TimeDrop', 'StayFlow'].includes(service.nameEn)) {
      category = 'STAY_TRAVEL';
    }
    // LIFE & COMMUNITY category
    else if (['PetPals', 'Kireasy', 'FoodSaver', 'Unused', 'MatchSense', 'TravelMate', 'LocalBites'].includes(service.nameEn)) {
      category = 'LIFE_COMMUNITY';
    }
    // WORK & PRODUCTIVITY category
    else if (['TaskTrust', 'Aicademy', 'AIFit', 'Skillity', 'DojoFlow'].includes(service.nameEn)) {
      category = 'WORK_PRODUCTIVITY';
    }
    // HEALTH & WELLNESS category
    else if (['HealthGenius', 'EmotionSeed', 'Wellstay'].includes(service.nameEn)) {
      category = 'HEALTH_WELLNESS';
    }
    // INVEST & GROW category
    else if (['FundNest', 'EcoStay', 'SeniorKnowledge'].includes(service.nameEn)) {
      category = 'INVEST_GROW';
    }
    
    // Add emoji based on service name
    let emoji: string | undefined;
    switch (service.nameEn) {
      case 'Enabliss': emoji = '🏝️'; break;
      case 'TimeDrop': emoji = '📅'; break;
      case 'StayFlow': emoji = '🏠'; break;
      case 'PetPals': emoji = '🐾'; break;
      case 'Kireasy': emoji = '🧹'; break;
      case 'FoodSaver': emoji = '🍴'; break;
      case 'Unused': emoji = '🌿'; break;
      case 'MatchSense': emoji = '💍'; break;
      case 'TravelMate': emoji = '🌎'; break;
      case 'LocalBites': emoji = '🥘'; break;
      case 'TaskTrust': emoji = '✅'; break;
      case 'Aicademy': emoji = '📚'; break;
      case 'AIFit': emoji = '💪'; break;
      case 'Skillity': emoji = '🎯'; break;
      case 'DojoFlow': emoji = '🥋'; break;
      case 'HealthGenius': emoji = '🧬'; break;
      case 'EmotionSeed': emoji = '🌱'; break;
      case 'Wellstay': emoji = '🧘‍♂️'; break;
      case 'FundNest': emoji = '📈'; break;
      case 'EcoStay': emoji = '♻️'; break;
      case 'SeniorKnowledge': emoji = '👵'; break;
    }
    
    // Check if this service needs a domain from additionalDomains
    if (additionalDomains[service.nameEn as keyof typeof additionalDomains] && !service.domain) {
      return { 
        ...service, 
        category, 
        emoji, 
        domain: additionalDomains[service.nameEn as keyof typeof additionalDomains] 
      };
    }
    
    return { ...service, category, emoji };
  });
};

// Combine all services
export const services: Service[] = categorizeServices([
  ...sRankServices,
  ...aRankServices,
  ...bRankServices,
  ...cRankServices
]);

export { companyInfo, serviceCategories };
