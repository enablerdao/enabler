
import React from 'react';
import { MessageCircleHeart, CheckCircle2 } from 'lucide-react';
import { UniquePoint } from '@/lib/types/service';
import { MotionBox } from '@/components/ui/motion-box';

interface ServiceUniquePointsProps {
  uniquePoints: UniquePoint[];
  serviceColor: string;
}

export const ServiceUniquePoints = ({ uniquePoints, serviceColor }: ServiceUniquePointsProps) => {
  if (!uniquePoints || uniquePoints.length === 0) return null;

  return (
    <MotionBox delay={600}>
      <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
        <div className="flex items-center mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>
          <MessageCircleHeart className="mr-3" style={{ color: serviceColor }} />
          <h2 className="text-xl font-bold">他にはない特徴</h2>
        </div>
        <div className="space-y-4">
          {uniquePoints.map((point, index) => (
            <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-subtle hover:shadow-md transition-all duration-300">
              <div className="p-2.5 rounded-full mr-4 mt-1" style={{ backgroundColor: `${serviceColor}20`, color: serviceColor }}>
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">{point.title}</h3>
                <p className="text-gray-700">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MotionBox>
  );
};

export default ServiceUniquePoints;
