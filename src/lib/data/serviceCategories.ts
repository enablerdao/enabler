
import { Service, ServiceCategory } from '../types/service';
import { services } from './index';

// Group services by their categories
export const serviceCategories = services.reduce((acc, service) => {
  if (service.category) {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
  }
  return acc;
}, {} as Record<ServiceCategory, Service[]>);

// Sort services within each category by rank
for (const category in serviceCategories) {
  serviceCategories[category as ServiceCategory].sort((a, b) => {
    // Sort by rank first (S > A > B > C)
    const rankOrder = { 'S': 0, 'A': 1, 'B': 2, 'C': 3 };
    const rankDiff = rankOrder[a.rank as keyof typeof rankOrder] - rankOrder[b.rank as keyof typeof rankOrder];
    
    if (rankDiff !== 0) return rankDiff;
    
    // If same rank, sort by ID (lower ID = higher priority)
    return a.id - b.id;
  });
}
