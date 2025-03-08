
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Target, Eye, MessageCircleHeart } from 'lucide-react';

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
                className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-4 shadow-md" 
                style={{ backgroundColor: serviceColor }}
              >
                <Target className="w-6 h-6" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">🚩 ミッション</h3>
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <p 
                  className="text-gray-700 p-4 border-l-4 relative"
                  style={{ 
                    borderColor: serviceColor,
                    boxShadow: `inset 0 0 10px ${serviceColor}10` 
                  }}
                >
                  {mission}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-4 shadow-md" 
                style={{ backgroundColor: serviceColor }}
              >
                <Eye className="w-6 h-6" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">🌎 ビジョン</h3>
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <p 
                  className="text-gray-700 p-4 border-l-4 relative"
                  style={{ 
                    borderColor: serviceColor,
                    boxShadow: `inset 0 0 10px ${serviceColor}10` 
                  }}
                >
                  {vision}
                </p>
              </div>
            </div>
          </div>
          
          {brandStory && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg relative">
              <div className="absolute -top-5 left-4 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-100 flex items-center" style={{ borderTopColor: serviceColor }}>
                <MessageCircleHeart className="w-5 h-5 mr-2" style={{ color: serviceColor }} />
                <h3 className="text-lg font-semibold">ブランドストーリー</h3>
              </div>
              <p className="text-gray-700 whitespace-pre-line pt-2">
                {brandStory}
              </p>
            </div>
          )}
        </div>
      </div>
    </MotionBox>
  );
};
