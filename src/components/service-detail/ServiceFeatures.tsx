
import React from 'react';
import { Calendar, Wrench, MessageCircle, BarChart } from 'lucide-react';
import { ServiceFeature } from '@/lib/types/service';
import { MotionBox } from '@/components/ui/motion-box';

interface ServiceFeaturesProps {
  features: ServiceFeature[];
  serviceColor: string;
}

export const ServiceFeatures = ({ features, serviceColor }: ServiceFeaturesProps) => {
  if (!features || features.length === 0) return null;

  // Map feature titles to appropriate icons
  const getIconForFeature = (title: string) => {
    if (title.includes('予約')) return <Calendar className="w-5 h-5" />;
    if (title.includes('清掃')) return <Wrench className="w-5 h-5" />; // Changed from Broom to Wrench
    if (title.includes('ゲスト対応')) return <MessageCircle className="w-5 h-5" />;
    if (title.includes('収支')) return <BarChart className="w-5 h-5" />;
    // Default icon if no match
    return <Calendar className="w-5 h-5" />;
  };

  return (
    <MotionBox delay={350}>
      <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
        <h2 className="text-xl font-bold mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>🌟 主な機能</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="border border-gray-100 rounded-lg p-5 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-3">
                <div className={`p-2.5 rounded-full mr-3`} style={{ backgroundColor: `${serviceColor}20`, color: serviceColor }}>
                  {getIconForFeature(feature.title)}
                </div>
                <h3 className="font-bold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </MotionBox>
  );
};

export default ServiceFeatures;
