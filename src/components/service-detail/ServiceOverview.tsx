
import React from 'react';
import { Service } from '@/lib/types/service';
import { MotionBox } from '@/components/ui/motion-box';
import { Progress } from '@/components/ui/progress';
import { Target } from 'lucide-react';

interface ServiceOverviewProps {
  service: Service;
  serviceColor: string;
}

export const ServiceOverview = ({ service, serviceColor }: ServiceOverviewProps) => {
  if (!service.description) return null;
  
  // Check if this is StayFlow Portfolio
  const isPortfolio = service.nameEn === 'StayFlow Portfolio';
  
  // Calculate progress percentage for StayFlow Portfolio
  const portfolioGoal = 3000;
  const currentListings = service.currentListings || 0;
  const progressPercentage = (currentListings / portfolioGoal) * 100;
  
  return (
    <MotionBox delay={250}>
      <div className={`bg-white p-6 rounded-xl shadow-subtle mb-8 border-l-4`} style={{ borderColor: serviceColor }}>
        <h2 className="text-xl font-bold mb-4">サービス概要</h2>
        <p className="text-gray-700 leading-relaxed">{service.description}</p>
        
        {isPortfolio && (
          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
            <div className="flex items-center mb-2">
              <Target className="text-amber-600 mr-2" size={20} />
              <h3 className="text-lg font-medium text-amber-800">プロジェクト目標</h3>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              ステイフローポートフォリオは、生涯をかけて訪れたいと思う特別な物件のみを厳選するプロジェクトです。イネブラーチームが独自に開発する物件や、既存オーナーの素晴らしい物件を丁寧にキュレーションし、唯一無二の宿泊体験を提供します。
            </p>
            <div className="mb-2 flex justify-between items-center">
              <span className="text-sm font-medium">現在の掲載数: {currentListings}件</span>
              <span className="text-sm font-medium">目標: {portfolioGoal}件</span>
            </div>
            <Progress value={progressPercentage} className="h-2" indicatorClassName="bg-amber-500" />
            <p className="mt-3 text-xs text-gray-500 text-right">達成率: {progressPercentage.toFixed(2)}%</p>
          </div>
        )}
        
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
