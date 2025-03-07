
import React from 'react';
import { Compass, Sparkles } from 'lucide-react';
import { MotionBox } from '@/components/ui/motion-box';

interface ServiceMissionVisionProps {
  mission: string;
  vision: string;
  serviceColor: string;
  serviceName?: string; // Add optional service name prop
}

export const ServiceMissionVision = ({ mission, vision, serviceColor, serviceName }: ServiceMissionVisionProps) => {
  // If this is StayFlow, use the specific mission and vision
  const isStayFlow = serviceName === 'StayFlow';
  
  const displayMission = isStayFlow 
    ? "宿泊施設運営をシンプルにし、ホストが『おもてなし』に集中できる環境を作る。"
    : mission;
    
  const displayVision = isStayFlow
    ? "テクノロジーの力で、民泊の複雑さをゼロにし、世界中どこでも最高の宿泊体験を実現する。"
    : vision;
    
  return (
    <MotionBox delay={150}>
      <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
        <div className="flex items-center mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>
          <Compass className="mr-3" style={{ color: serviceColor }} />
          <h2 className="text-xl font-bold">ミッション</h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-8 italic border-l-4 pl-4 py-2" style={{ borderColor: serviceColor }}>
          "{displayMission}"
        </p>
        
        <div className="flex items-center mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>
          <Sparkles className="mr-3" style={{ color: serviceColor }} />
          <h2 className="text-xl font-bold">ビジョン</h2>
        </div>
        <p className="text-gray-700 leading-relaxed italic border-l-4 pl-4 py-2" style={{ borderColor: serviceColor }}>
          "{displayVision}"
        </p>
        
        {isStayFlow && (
          <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="font-bold text-blue-800 mb-2">ブランドストーリー</h3>
            <p className="text-gray-700 text-sm">
              StayFlowは「面倒」や「手間」を排除し、宿泊施設の運営管理を完全にシームレスにすることで、
              ホストが本来の価値である『ゲストへのおもてなし』に集中できる世界を目指しています。
              宿泊施設の業務を「流れるように」スムーズにすることから、『StayFlow』という名前が生まれました。
            </p>
            <p className="text-gray-700 text-sm mt-2">
              宿泊業界をテクノロジーで変革し、誰もが気軽にホスティングを楽しめる社会を作ります。
            </p>
          </div>
        )}
      </div>
    </MotionBox>
  );
};

export default ServiceMissionVision;
