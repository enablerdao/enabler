
import React from 'react';
import { ArrowLeft, Shield, Zap, TrendingUp, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Service } from '@/lib/types/service';
import { MotionBox } from '@/components/ui/motion-box';
import ServiceLogo from '@/components/ServiceLogo';
import { categoryInfo } from '@/lib/types/service';

interface ServiceHeroProps {
  service: Service;
}

export const ServiceHero = ({ service }: ServiceHeroProps) => {
  const navigate = useNavigate();
  
  const rankColorMap = {
    'S': 'bg-srank text-white',
    'A': 'bg-arank text-white',
    'B': 'bg-brank text-white',
    'C': 'bg-crank text-white',
  };

  const rankGradientMap = {
    'S': 'from-srank/20 to-srank/5',
    'A': 'from-arank/20 to-arank/5',
    'B': 'from-brank/20 to-brank/5',
    'C': 'from-crank/20 to-crank/5',
  };

  // Get category information if available
  const categoryData = service.category ? categoryInfo[service.category] : null;

  // Determine icon based on rank
  const getRankIcon = () => {
    switch(service.rank) {
      case 'S': return <Shield className="w-5 h-5 text-white" />;
      case 'A': return <Zap className="w-5 h-5 text-white" />;
      case 'B': return <TrendingUp className="w-5 h-5 text-white" />;
      case 'C': return <Target className="w-5 h-5 text-white" />;
      default: return null;
    }
  };

  return (
    <div className={`w-full bg-gradient-to-b ${rankGradientMap[service.rank]} py-12`}>
      <div className="container mx-auto px-6">
        <MotionBox>
          <button 
            onClick={() => navigate('/#services')}
            className="mb-6 flex items-center text-gray-600 hover:text-enabler-600 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            サービス一覧に戻る
          </button>
        </MotionBox>
        
        <div className="flex flex-col md:flex-row items-center mb-8">
          <MotionBox delay={100} className="mb-4 md:mb-0 md:mr-6">
            <div className="relative">
              <ServiceLogo serviceName={service.nameEn} size="lg" />
              {service.emoji && (
                <span className="absolute -top-2 -right-2 text-2xl">
                  {service.emoji}
                </span>
              )}
            </div>
          </MotionBox>
          
          <div>
            <MotionBox delay={150}>
              <div className="flex items-center mb-2">
                <h1 className="text-3xl md:text-4xl font-bold mr-3">{service.nameEn}</h1>
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold ${rankColorMap[service.rank]}`}>
                  {getRankIcon()}
                  Rank {service.rank}
                </span>
              </div>
              <p className="text-xl text-gray-700 mb-3">{service.nameJp}</p>
            </MotionBox>
            
            {categoryData && (
              <MotionBox delay={200}>
                <span className="inline-block px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
                  {categoryData.name}
                </span>
              </MotionBox>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
