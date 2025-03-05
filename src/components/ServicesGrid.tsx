
import React, { useState } from 'react';
import { services } from '@/lib/data';
import ServiceCard from './ServiceCard';
import { MotionBox } from './ui/motion-box';

type RankType = 'S' | 'A' | 'B' | 'C' | 'All';

const ServicesGrid = () => {
  const [activeRank, setActiveRank] = useState<RankType>('All');
  
  const filteredServices = activeRank === 'All' 
    ? services 
    : services.filter(service => service.rank === activeRank);
  
  const rankFilters: { label: string; value: RankType; color: string }[] = [
    { label: 'すべて', value: 'All', color: 'bg-gray-200 text-gray-700' },
    { label: 'Sランク', value: 'S', color: 'bg-srank/10 text-srank' },
    { label: 'Aランク', value: 'A', color: 'bg-arank/10 text-arank' },
    { label: 'Bランク', value: 'B', color: 'bg-brank/10 text-brank' },
    { label: 'Cランク', value: 'C', color: 'bg-crank/10 text-crank' },
  ];
  
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-6">
        <MotionBox>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            サービスポートフォリオ
          </h2>
        </MotionBox>
        
        <MotionBox delay={200}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {rankFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveRank(filter.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeRank === filter.value 
                    ? `${filter.color} shadow-sm` 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </MotionBox>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
