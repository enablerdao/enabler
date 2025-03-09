
import { Service, ServiceCategory } from '@/lib/types/service';

export const getServicesByCategory = (services: Service[], category: ServiceCategory): Service[] => {
  return services.filter(service => service.category === category);
};

export const filterServices = (
  services: Service[], 
  searchQuery: string, 
  activeCategory: ServiceCategory | 'ALL'
): Service[] => {
  return services.filter(service => {
    if (!searchQuery) return activeCategory === 'ALL' || service.category === activeCategory;
    
    const query = searchQuery.toLowerCase();
    const matchesQuery = 
      service.nameEn.toLowerCase().includes(query) ||
      service.nameJp.toLowerCase().includes(query) ||
      service.description?.toLowerCase().includes(query) ||
      service.features?.some(f => f.title.toLowerCase().includes(query) || f.description.toLowerCase().includes(query));
    
    return matchesQuery && (activeCategory === 'ALL' || service.category === activeCategory);
  });
};
