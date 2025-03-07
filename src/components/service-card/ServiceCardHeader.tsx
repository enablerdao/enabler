
import React from 'react';
import { Service } from '@/lib/data';
import ServiceLogo from '../ServiceLogo';
import { cn } from '@/lib/utils';
import { rankColorMap, rankTextColorMap } from './utils';

interface ServiceCardHeaderProps {
  service: Service;
}

export const ServiceCardHeader: React.FC<ServiceCardHeaderProps> = ({ service }) => {
  return (
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center">
        <ServiceLogo serviceName={service.nameEn} size="sm" />
        {service.emoji && (
          <span className="text-xl ml-2" role="img" aria-label={service.nameEn}>
            {service.emoji}
          </span>
        )}
      </div>
      
      <div className="flex flex-col items-end">
        <span className={cn(
          "inline-block px-2.5 py-1 rounded-full text-xs font-bold mt-1", 
          rankColorMap[service.rank],
          rankTextColorMap[service.rank]
        )}>
          Rank {service.rank}
        </span>
      </div>
    </div>
  );
};
