
import React from 'react';
import { Calendar, Wrench, MessageCircle, BarChart } from 'lucide-react';
import { ServiceFeature } from '@/lib/types/service';

interface FeatureCardProps {
  feature: ServiceFeature;
  serviceColor: string;
}

export const FeatureCard = ({ feature, serviceColor }: FeatureCardProps) => {
  // Get icon based on feature title
  const getIconForFeature = (title: string) => {
    if (title.includes('予約')) return <Calendar className="w-5 h-5" />;
    if (title.includes('清掃')) return <Wrench className="w-5 h-5" />;
    if (title.includes('ゲスト対応')) return <MessageCircle className="w-5 h-5" />;
    if (title.includes('収支')) return <BarChart className="w-5 h-5" />;
    return <Calendar className="w-5 h-5" />;
  };

  return (
    <div 
      className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 m-1"
    >
      <div className="flex items-center mb-3">
        <div className={`p-2.5 rounded-full mr-3`} style={{ backgroundColor: `${serviceColor}20`, color: serviceColor }}>
          {getIconForFeature(feature.title)}
        </div>
        <h3 className="font-bold text-gray-800">{feature.title}</h3>
      </div>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
};
