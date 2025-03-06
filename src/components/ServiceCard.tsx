
import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '@/lib/data';
import { MotionBox } from './ui/motion-box';
import { ExternalLink, ArrowRight, Star, Edit } from 'lucide-react';
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

const rankBorderMap = {
  'S': 'border-srank/20',
  'A': 'border-arank/20',
  'B': 'border-brank/20',
  'C': 'border-crank/20',
};

// Map for service editing tools
const serviceEditLinks = {
  'PetPals': 'https://lovable.dev/projects/0e180acf-b16f-4575-bade-365eb8474690',
  'TaskTrust': 'https://lovable.dev/projects/10977e27-7b88-4bb8-8066-fae0ab704715',
  'MatchSense': 'https://lovable.dev/projects/1af4d4cb-7101-45cf-b4a0-affd18aa1e0a',
  'TasteFund': 'https://lovable.dev/projects/6eb4455a-e9da-4f39-b6a9-ff5deb8b4565',
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
  
  const handleCardClick = () => {
    logActivity('serviceCardClick', {
      serviceId: service.id,
      serviceName: service.nameEn
    });
  };

  const hasEditLink = serviceEditLinks[service.nameEn as keyof typeof serviceEditLinks];
  
  return (
    <MotionBox 
      delay={delayBase + staggerDelay}
      className="h-full"
    >
      <div 
        className={cn(
          "h-full p-6 rounded-xl border bg-white shadow-subtle hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1",
          `rank-${service.rank.toLowerCase()}`,
          rankBorderMap[service.rank]
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
        
        <Link to={`/service/${service.id}`} onClick={handleCardClick}>
          <h3 className="text-lg font-bold mb-1 group-hover:text-enabler-600 transition-colors">{service.nameEn}</h3>
        </Link>
        <p className="text-sm text-gray-600 mb-3">{service.nameJp}</p>
        
        {service.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{service.description}</p>
        )}
        
        {service.catchphrase && (
          <div className="mb-4 italic text-sm text-gray-700 bg-gray-50 p-3 rounded-md border border-gray-100">
            "{service.catchphrase}"
          </div>
        )}
        
        {service.features && (
          <div className="flex flex-wrap gap-2 mb-4">
            {service.features.slice(0, 2).map((feature) => (
              <span key={feature.title} className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                <Star size={10} className="mr-1" /> {feature.title}
              </span>
            ))}
            {service.features.length > 2 && (
              <span className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                +{service.features.length - 2}
              </span>
            )}
          </div>
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
        
        <div className="mt-4 flex justify-between items-center">
          <Link 
            to={`/service/${service.id}`}
            onClick={handleCardClick}
            className="inline-flex items-center text-sm text-enabler-600 hover:text-enabler-700 font-medium transition-colors"
          >
            詳細を見る <ArrowRight size={16} className="ml-1" />
          </Link>
          
          {hasEditLink && (
            <a 
              href={hasEditLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-amber-600 hover:text-amber-700 font-medium transition-colors"
            >
              編集ツール <Edit size={16} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </MotionBox>
  );
};

export default ServiceCard;
