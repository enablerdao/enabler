
import { Service, ServiceCategory } from '../types/service';

export const serviceCategories: Record<ServiceCategory, Service[]> = {
  STAY_TRAVEL: [],
  LIFE_COMMUNITY: [],
  WORK_PRODUCTIVITY: [],
  HEALTH_WELLNESS: [],
  INVEST_GROW: []
};

// This will be populated after import to avoid circular dependencies
export const initializeServiceCategories = (allServices: Service[]) => {
  // Reset all categories
  Object.keys(serviceCategories).forEach(key => {
    serviceCategories[key as ServiceCategory] = [];
  });

  // Populate categories
  allServices.forEach(service => {
    if (service.category) {
      serviceCategories[service.category].push(service);
    }
  });

  // Sort services within each category by rank and priority
  Object.keys(serviceCategories).forEach(key => {
    serviceCategories[key as ServiceCategory].sort((a, b) => {
      const rankOrder = { 'S': 0, 'A': 1, 'B': 2, 'C': 3 };
      const rankDiff = (rankOrder[a.rank as keyof typeof rankOrder] || 99) - 
                      (rankOrder[b.rank as keyof typeof rankOrder] || 99);
      
      if (rankDiff !== 0) return rankDiff;
      
      const aPriority = a.priority || 99;
      const bPriority = b.priority || 99;
      return aPriority - bPriority;
    });
  });
};
