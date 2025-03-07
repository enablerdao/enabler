
import React from 'react';
import { Star } from 'lucide-react';
import { ServiceFeature } from '@/lib/types/service';

interface ServiceFeatureTagsProps {
  features: ServiceFeature[];
}

export const ServiceFeatureTags: React.FC<ServiceFeatureTagsProps> = ({ features }) => {
  if (!features || features.length === 0) return null;
  
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {features.slice(0, 2).map((feature) => (
        <span key={feature.title} className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
          <Star size={10} className="mr-1" /> {feature.title}
        </span>
      ))}
      {features.length > 2 && (
        <span className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
          +{features.length - 2}
        </span>
      )}
    </div>
  );
};
