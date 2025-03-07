
import React from 'react';
import { ServiceFeature } from '@/lib/types/service';
import { FeatureCard } from './FeatureCard';

interface FeaturesGridProps {
  features: ServiceFeature[];
  serviceColor: string;
}

export const FeaturesGrid = ({ features, serviceColor }: FeaturesGridProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} serviceColor={serviceColor} />
      ))}
    </div>
  );
};
