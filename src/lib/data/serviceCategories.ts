
import { services } from './index';
import { Service, ServiceCategory } from '../types/service';

// Group services by their categories
const categorizedServices = services.reduce((acc, service) => {
  if (service.category) {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
  }
  return acc;
}, {} as Record<ServiceCategory, Service[]>);

export const serviceCategories = categorizedServices;
