
import React from 'react';
import { Compass, Sparkles } from 'lucide-react';
import { MotionBox } from '@/components/ui/motion-box';

interface ServiceMissionVisionProps {
  mission: string;
  vision: string;
  serviceColor: string;
}

export const ServiceMissionVision = ({ mission, vision, serviceColor }: ServiceMissionVisionProps) => {
  return (
    <MotionBox delay={150}>
      <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
        <div className="flex items-center mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>
          <Compass className="mr-3" style={{ color: serviceColor }} />
          <h2 className="text-xl font-bold">ミッション</h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-8 italic border-l-4 pl-4 py-2" style={{ borderColor: serviceColor }}>
          "{mission}"
        </p>
        
        <div className="flex items-center mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>
          <Sparkles className="mr-3" style={{ color: serviceColor }} />
          <h2 className="text-xl font-bold">ビジョン</h2>
        </div>
        <p className="text-gray-700 leading-relaxed italic border-l-4 pl-4 py-2" style={{ borderColor: serviceColor }}>
          "{vision}"
        </p>
      </div>
    </MotionBox>
  );
};

export default ServiceMissionVision;
