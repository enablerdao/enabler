
import React, { useState } from 'react';
import { services } from '@/lib/data';
import ServiceCard from './ServiceCard';
import { MotionBox } from './ui/motion-box';
import { Search } from 'lucide-react';

type RankType = 'S' | 'A' | 'B' | 'C' | 'All';

const ServicesGrid = () => {
  const [activeRank, setActiveRank] = useState<RankType>('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredServices = services
    .filter(service => activeRank === 'All' || service.rank === activeRank)
    .filter(service => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        service.nameEn.toLowerCase().includes(query) ||
        service.nameJp.toLowerCase().includes(query) ||
        service.description?.toLowerCase().includes(query) ||
        service.features?.some(f => f.title.toLowerCase().includes(query) || f.description.toLowerCase().includes(query))
      );
    });
  
  const rankFilters: { label: string; value: RankType; color: string }[] = [
    { label: 'すべて', value: 'All', color: 'bg-gray-200 text-gray-700' },
    { label: 'Sランク', value: 'S', color: 'bg-srank/10 text-srank' },
    { label: 'Aランク', value: 'A', color: 'bg-arank/10 text-arank' },
    { label: 'Bランク', value: 'B', color: 'bg-brank/10 text-brank' },
    { label: 'Cランク', value: 'C', color: 'bg-crank/10 text-crank' },
  ];
  
  return (
    <section id="services" className="section-padding py-20">
      <div className="container mx-auto px-6">
        <MotionBox>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            サービスポートフォリオ
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            時代の変化を先取りする革新的なサービスを提供しています。各サービスは市場規模とビジネスモデルの成熟度を基にランク分けされています。
          </p>
        </MotionBox>
        
        <MotionBox delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
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
        
        <MotionBox delay={200}>
          <div className="relative max-w-md mx-auto mb-12">
            <input
              type="text"
              placeholder="サービスを検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-full border border-gray-300 focus:border-enabler-400 focus:ring-2 focus:ring-enabler-200 outline-none transition"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </MotionBox>
        
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">検索条件に一致するサービスがありません。</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;
