
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Target, Eye, MessageCircleHeart, Sparkles } from 'lucide-react';

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
      <div className="bg-white p-6 rounded-xl shadow-subtle mb-8 overflow-hidden relative">
        {/* Decorative background elements */}
        <div 
          className="absolute -right-16 -top-16 w-32 h-32 rounded-full opacity-10"
          style={{ backgroundColor: serviceColor }}
        ></div>
        <div 
          className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full opacity-5"
          style={{ backgroundColor: serviceColor }}
        ></div>
        
        <h2 className="text-xl font-bold mb-8 border-b pb-3 flex items-center" style={{ borderColor: `${serviceColor}40` }}>
          <Sparkles className="w-5 h-5 mr-2" style={{ color: serviceColor }} />
          ミッション＆ビジョン
        </h2>
        
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-start gap-4 group hover:bg-gray-50 p-2 rounded-lg transition-all duration-300">
            <div className="flex-shrink-0">
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-110" 
                style={{ backgroundColor: serviceColor }}
              >
                <Target className="w-7 h-7" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-3 flex items-center tracking-wide">
                <span style={{ color: serviceColor }}>MISSION</span>
                <span className="mx-2">|</span>
                <span>ミッション</span>
              </h3>
              <div className="bg-gray-50 rounded-lg overflow-hidden group-hover:shadow-md transition-all">
                <p 
                  className="text-gray-700 p-5 border-l-4 relative text-base leading-relaxed"
                  style={{ 
                    borderColor: serviceColor,
                    boxShadow: `inset 0 0 15px ${serviceColor}10` 
                  }}
                >
                  {mission}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-start gap-4 group hover:bg-gray-50 p-2 rounded-lg transition-all duration-300">
            <div className="flex-shrink-0">
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-110" 
                style={{ backgroundColor: serviceColor }}
              >
                <Eye className="w-7 h-7" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-3 flex items-center tracking-wide">
                <span style={{ color: serviceColor }}>VISION</span>
                <span className="mx-2">|</span>
                <span>ビジョン</span>
              </h3>
              <div className="bg-gray-50 rounded-lg overflow-hidden group-hover:shadow-md transition-all">
                <p 
                  className="text-gray-700 p-5 border-l-4 relative text-base leading-relaxed"
                  style={{ 
                    borderColor: serviceColor,
                    boxShadow: `inset 0 0 15px ${serviceColor}10` 
                  }}
                >
                  {vision}
                </p>
              </div>
            </div>
          </div>
          
          {brandStory && (
            <div className="mt-10 p-8 bg-gray-50 rounded-lg relative group hover:shadow-md transition-all">
              <div 
                className="absolute -top-6 left-6 bg-white px-4 py-2 rounded-lg shadow-sm border flex items-center" 
                style={{ 
                  borderTopColor: serviceColor,
                  borderTopWidth: '3px' 
                }}
              >
                <MessageCircleHeart className="w-5 h-5 mr-2" style={{ color: serviceColor }} />
                <h3 className="text-lg font-semibold tracking-wide">ブランドストーリー</h3>
              </div>
              <div className="mt-2">
                <p className="text-gray-700 whitespace-pre-line pt-2 leading-relaxed">
                  {brandStory}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </MotionBox>
  );
};
