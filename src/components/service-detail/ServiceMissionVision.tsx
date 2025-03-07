
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Target, Eye } from 'lucide-react';

interface ServiceMissionVisionProps {
  mission: string;
  vision: string;
  brandStory?: string;
  serviceColor: string;
  serviceName: string;
}

export const ServiceMissionVision: React.FC<ServiceMissionVisionProps> = ({ 
  mission, 
  vision, 
  brandStory,
  serviceColor, 
  serviceName 
}) => {
  return (
    <MotionBox delay={250}>
      <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
        <h2 className="text-xl font-bold mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>
          ミッション＆ビジョン
        </h2>
        
        <div className="space-y-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-4" 
                style={{ backgroundColor: serviceColor }}
              >
                <Target className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">🚩 ミッション</h3>
              <p className="text-gray-700 bg-gray-50 p-4 rounded-lg border-l-4" style={{ borderColor: serviceColor }}>
                {mission}
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-4" 
                style={{ backgroundColor: serviceColor }}
              >
                <Eye className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">🌎 ビジョン</h3>
              <p className="text-gray-700 bg-gray-50 p-4 rounded-lg border-l-4" style={{ borderColor: serviceColor }}>
                {vision}
              </p>
            </div>
          </div>
          
          {brandStory && (
            <div className="mt-6 p-5 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">🗒️ ブランドストーリー</h3>
              <p className="text-gray-700 whitespace-pre-line">
                {brandStory}
              </p>
            </div>
          )}
        </div>
      </div>
    </MotionBox>
  );
};
