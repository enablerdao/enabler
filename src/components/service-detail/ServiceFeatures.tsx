
import React from 'react';
import { ServiceFeature } from '@/lib/types/service';
import { MotionBox } from '@/components/ui/motion-box';
import { FeaturesGrid } from './feature-cards/FeaturesGrid';
import { PropertiesGrid } from './feature-cards/PropertiesGrid';

interface ServiceFeaturesProps {
  features: ServiceFeature[];
  serviceColor: string;
}

export const ServiceFeatures = ({ features, serviceColor }: ServiceFeaturesProps) => {
  if (!features || features.length === 0) return null;
  
  // Check if this is StayFlow Portfolio
  const isPortfolio = window.location.pathname.includes('StayFlow%20Portfolio');

  return (
    <MotionBox delay={350}>
      <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
        <h2 className="text-xl font-bold mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>
          {isPortfolio ? "🏡 厳選物件紹介" : "🌟 主な機能"}
        </h2>
        
        {isPortfolio ? (
          <PropertiesGrid features={features} serviceColor={serviceColor} />
        ) : (
          <FeaturesGrid features={features} serviceColor={serviceColor} />
        )}
      </div>
    </MotionBox>
  );
};

export default ServiceFeatures;
