
import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '@/lib/data';
import { MotionBox } from './ui/motion-box';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { logActivity } from '@/lib/logger';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const rankColorMap = {
  'S': 'bg-srank/10',
  'A': 'bg-arank/10',
  'B': 'bg-brank/10',
  'C': 'bg-crank/10',
};

const rankTextColorMap = {
  'S': 'text-srank',
  'A': 'text-arank',
  'B': 'text-brank',
  'C': 'text-crank',
};

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const delayBase = 100;
  const staggerDelay = index * 50;
  
  const handleExternalLinkClick = () => {
    logActivity('externalLink', {
      serviceId: service.id,
      serviceName: service.nameEn,
      additionalData: {
        location: 'service-card',
        domain: service.domain
      }
    });
  };
  
  return (
    <MotionBox 
      delay={delayBase + staggerDelay}
      className="h-full"
    >
      <div 
        className={cn(
          "h-full p-6 rounded-xl border bg-white shadow-subtle hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1",
          `rank-${service.rank.toLowerCase()}`
        )}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className={cn(
              "inline-block px-2.5 py-1 rounded-full text-xs font-bold", 
              rankColorMap[service.rank],
              rankTextColorMap[service.rank]
            )}>
              Rank {service.rank}
            </span>
          </div>
          <span className="text-sm text-gray-500">{service.marketSize}</span>
        </div>
        
        <h3 className="text-lg font-bold mb-1">{service.nameEn}</h3>
        <p className="text-sm text-gray-600 mb-3">{service.nameJp}</p>
        
        {service.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{service.description}</p>
        )}
        
        <div className="flex flex-wrap justify-between items-end mt-auto pt-3 border-t border-gray-100">
          <a 
            href={`https://${service.domain}`} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleExternalLinkClick}
            className="text-sm text-enabler-600 hover:text-enabler-700 inline-flex items-center gap-1 transition-colors"
          >
            {service.domain} <ExternalLink size={14} />
          </a>
          <span className="text-xs text-gray-500 mt-2">目標: {service.goal}</span>
        </div>
        
        <div className="mt-4 text-right">
          <Link 
            to={`/service/${service.id}`}
            className="inline-flex items-center text-sm text-enabler-600 hover:text-enabler-700 font-medium transition-colors"
          >
            詳細を見る <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </MotionBox>
  );
};

export default ServiceCard;
