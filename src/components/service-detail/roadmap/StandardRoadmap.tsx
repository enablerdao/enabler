
import React from 'react';
import { CalendarClock, Target, BarChart3 } from 'lucide-react';
import { Service } from '@/lib/types/service';
import { GoalItem } from './GoalItem';

interface StandardRoadmapProps {
  service: Service;
  serviceColor: string;
}

export const StandardRoadmap = ({ service, serviceColor }: StandardRoadmapProps) => {
  return (
    <div className="space-y-5">
      <GoalItem 
        icon={CalendarClock}
        title="短期目標"
        description={service.goal}
        serviceColor={serviceColor}
      />
      
      <GoalItem 
        icon={Target}
        title="中期目標"
        description={service.midtermGoal || '市場シェアの拡大とユーザー基盤の確立'}
        serviceColor={serviceColor}
      />
      
      <GoalItem 
        icon={BarChart3}
        title="長期目標"
        description={service.longtermGoal || '業界リーダーとしての地位確立と海外展開'}
        serviceColor={serviceColor}
      />

      {service.catchphrase && (
        <div className="mt-8 pt-4 border-t border-gray-100 text-center">
          <p className="text-lg font-medium italic" style={{ color: serviceColor }}>
            "{service.catchphrase}"
          </p>
        </div>
      )}
    </div>
  );
};
