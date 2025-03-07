
import React from 'react';
import { CalendarClock, Target, BarChart3 } from 'lucide-react';
import { Service } from '@/lib/types/service';
import { MotionBox } from '@/components/ui/motion-box';

interface ServiceRoadmapProps {
  service: Service;
  serviceColor: string;
}

export const ServiceRoadmap = ({ service, serviceColor }: ServiceRoadmapProps) => {
  return (
    <MotionBox delay={800}>
      <div className="bg-white p-6 rounded-xl shadow-subtle">
        <h2 className="text-xl font-bold mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>開発ロードマップ</h2>
        <div className="space-y-5">
          <div className="flex items-start bg-white p-4 rounded-lg shadow-subtle hover:shadow-md transition-all duration-300">
            <div className="p-2 rounded-full mr-4" style={{ backgroundColor: `${serviceColor}20`, color: serviceColor }}>
              <CalendarClock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">短期目標</h3>
              <p className="text-gray-700">{service.goal}</p>
            </div>
          </div>
          
          <div className="flex items-start bg-white p-4 rounded-lg shadow-subtle hover:shadow-md transition-all duration-300">
            <div className="p-2 rounded-full mr-4" style={{ backgroundColor: `${serviceColor}20`, color: serviceColor }}>
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">中期目標</h3>
              <p className="text-gray-700">{service.midtermGoal || '市場シェアの拡大とユーザー基盤の確立'}</p>
            </div>
          </div>
          
          <div className="flex items-start bg-white p-4 rounded-lg shadow-subtle hover:shadow-md transition-all duration-300">
            <div className="p-2 rounded-full mr-4" style={{ backgroundColor: `${serviceColor}20`, color: serviceColor }}>
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">長期目標</h3>
              <p className="text-gray-700">{service.longtermGoal || '業界リーダーとしての地位確立と海外展開'}</p>
            </div>
          </div>

          {service.catchphrase && (
            <div className="mt-8 pt-4 border-t border-gray-100 text-center">
              <p className="text-lg font-medium italic" style={{ color: serviceColor }}>
                "{service.catchphrase}"
              </p>
            </div>
          )}
        </div>
      </div>
    </MotionBox>
  );
};

export default ServiceRoadmap;
