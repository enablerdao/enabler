
import { Service, ServiceCategory } from '../types/service';
import { companyInfo } from './company';
import { sRankServices } from './services-s-rank';
import { aRankServices } from './services-a-rank';
import { bRankServices } from './services-b-rank';
import { cRankServices } from './services-c-rank';

// Add domains for services that might not be in the rank files yet
const additionalDomains = {
  'Enabliss': 'enablisslife.com',
  'HealthGenius': 'healthgeniushq.com'
};

// Prioritize certain services to appear at the top of their categories
const servicePriority = {
  'StayFlow': 1,
  'TimeDrop': 2,
  'PetPals': 1,
  'Kireasy': 2,
  'TaskTrust': 1
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
    
    // Add priority for sorting within categories
    const priority = servicePriority[service.nameEn as keyof typeof servicePriority] || 99;
    
    // Check if this service needs a domain from additionalDomains
    if (additionalDomains[service.nameEn as keyof typeof additionalDomains] && !service.domain) {
      return { 
        ...service, 
        category, 
        emoji, 
        priority,
        domain: additionalDomains[service.nameEn as keyof typeof additionalDomains] 
      };
    }
    
    return { ...service, category, emoji, priority };
  });
};

// Combine all services and sort by rank and priority
export const services: Service[] = categorizeServices([
  ...sRankServices,
  ...aRankServices,
  ...bRankServices,
  ...cRankServices
]).sort((a, b) => {
  // First sort by rank
  const rankOrder = { 'S': 0, 'A': 1, 'B': 2, 'C': 3 };
  const rankDiff = (rankOrder[a.rank as keyof typeof rankOrder] || 99) - 
                   (rankOrder[b.rank as keyof typeof rankOrder] || 99);
  
  if (rankDiff !== 0) return rankDiff;
  
  // Then by priority (if set)
  const aPriority = a.priority || 99;
  const bPriority = b.priority || 99;
  if (aPriority !== bPriority) return aPriority - bPriority;
  
  // Then by ID
  return a.id - b.id;
});

export { companyInfo };
export { serviceCategories } from './serviceCategories';
