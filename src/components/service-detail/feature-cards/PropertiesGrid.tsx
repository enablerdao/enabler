
import React from 'react';
import { ServiceFeature } from '@/lib/types/service';
import { PropertyCard } from './PropertyCard';

interface PropertiesGridProps {
  features: ServiceFeature[];
  serviceColor: string;
}

export const PropertiesGrid = ({ features, serviceColor }: PropertiesGridProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <PropertyCard key={index} feature={feature} serviceColor={serviceColor} />
      ))}
    </div>
  );
};
