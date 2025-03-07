
import React from 'react';
import { Service } from '@/lib/types/service';
import { MotionBox } from '@/components/ui/motion-box';

interface ServiceOverviewProps {
  service: Service;
  serviceColor: string;
}

export const ServiceOverview = ({ service, serviceColor }: ServiceOverviewProps) => {
  if (!service.description) return null;
  
  return (
    <MotionBox delay={250}>
      <div className={`bg-white p-6 rounded-xl shadow-subtle mb-8 border-l-4`} style={{ borderColor: serviceColor }}>
        <h2 className="text-xl font-bold mb-4">サービス概要</h2>
        <p className="text-gray-700 leading-relaxed">{service.description}</p>
        
        {service.catchphrase && (
          <div className="mt-6 text-center">
            <p className="italic text-lg font-medium" style={{ color: serviceColor }}>
              "{service.catchphrase}"
            </p>
          </div>
        )}
      </div>
    </MotionBox>
  );
};

export default ServiceOverview;
