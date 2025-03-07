
import React from 'react';
import { Service } from '@/lib/types/service';
import { MotionBox } from '@/components/ui/motion-box';
import { StandardRoadmap } from './roadmap/StandardRoadmap';
import { PortfolioRoadmap } from './roadmap/PortfolioRoadmap';

interface ServiceRoadmapProps {
  service: Service;
  serviceColor: string;
}

export const ServiceRoadmap = ({ service, serviceColor }: ServiceRoadmapProps) => {
  const isPortfolio = service.nameEn === 'StayFlow Portfolio';
  
  return (
    <MotionBox delay={800}>
      <div className="bg-white p-6 rounded-xl shadow-subtle">
        <h2 className="text-xl font-bold mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>
          {isPortfolio ? "長期ブランディングビジョン" : "開発ロードマップ"}
        </h2>
        
        {isPortfolio ? (
          <PortfolioRoadmap serviceColor={serviceColor} catchphrase={service.catchphrase} />
        ) : (
          <StandardRoadmap service={service} serviceColor={serviceColor} />
        )}
      </div>
    </MotionBox>
  );
};

export default ServiceRoadmap;
