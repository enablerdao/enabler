
import React from 'react';
import { Service } from '@/lib/data';
import { Link } from 'react-router-dom';
import { ArrowRight, Edit } from 'lucide-react';
import { serviceEditLinks } from './utils';
import { logActivity } from '@/lib/logger';

interface ServiceCardFooterProps {
  service: Service;
}

export const ServiceCardFooter: React.FC<ServiceCardFooterProps> = ({ service }) => {
  const handleCardClick = () => {
    logActivity('serviceCardClick', {
      serviceId: service.id,
      serviceName: service.nameEn
    });
  };

  const hasEditLink = serviceEditLinks[service.nameEn as keyof typeof serviceEditLinks];
  
  return (
    <>
      <div className="flex flex-wrap justify-between items-end mt-auto pt-3 border-t border-gray-100">
        <span className="text-sm text-gray-600 inline-flex items-center gap-1">
          {service.domain}
        </span>
        <span className="text-xs text-gray-500 mt-2">目標: {service.goal}</span>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <Link 
          to={`/service/${service.id}`}
          onClick={handleCardClick}
          className="inline-flex items-center text-sm text-enabler-600 hover:text-enabler-700 font-medium transition-colors"
        >
          詳細を見る <ArrowRight size={16} className="ml-1" />
        </Link>
        
        {hasEditLink && (
          <span 
            className="inline-flex items-center text-sm text-amber-600 font-medium"
          >
            編集ツール <Edit size={16} className="ml-1" />
          </span>
        )}
      </div>
    </>
  );
};
