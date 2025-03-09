
import React from 'react';
import { Service } from '@/lib/types/service';
import ServiceCard from '../ServiceCard';

interface ServiceGridProps {
  services: Service[];
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({ services }) => {
  if (services.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">検索条件に一致するサービスがありません。</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6 pb-8 overflow-visible">
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </div>
  );
};
