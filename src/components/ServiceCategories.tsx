
import React, { useState } from 'react';
import { services } from '@/lib/data';
import { Service, ServiceCategory, categoryInfo } from '@/lib/types/service';
import { MotionBox } from './ui/motion-box';
import { Button } from './ui/button';
import ServiceCard from './ServiceCard';
import { Search, Hotel, Users, Briefcase, HeartPulse, TrendingUp } from 'lucide-react';

const ServiceCategories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'ALL'>('ALL');
  
  // Assign category icons dynamically
  const getCategoryIcon = (category: ServiceCategory) => {
    switch(category) {
      case 'STAY_TRAVEL':
        return <Hotel className="mr-2" size={18} />;
      case 'LIFE_COMMUNITY':
        return <Users className="mr-2" size={18} />;
      case 'WORK_PRODUCTIVITY':
        return <Briefcase className="mr-2" size={18} />;
      case 'HEALTH_WELLNESS':
        return <HeartPulse className="mr-2" size={18} />;
      case 'INVEST_GROW':
        return <TrendingUp className="mr-2" size={18} />;
    }
  };
  
  // Get services by category
  const getServicesByCategory = (category: ServiceCategory) => {
    return services.filter(service => service.category === category);
  };
  
  // Filter services by search query
  const filteredServices = services.filter(service => {
    if (!searchQuery) return activeCategory === 'ALL' || service.category === activeCategory;
    
    const query = searchQuery.toLowerCase();
    const matchesQuery = 
      service.nameEn.toLowerCase().includes(query) ||
      service.nameJp.toLowerCase().includes(query) ||
      service.description?.toLowerCase().includes(query) ||
      service.features?.some(f => f.title.toLowerCase().includes(query) || f.description.toLowerCase().includes(query));
    
    return matchesQuery && (activeCategory === 'ALL' || service.category === activeCategory);
  });
  
  // All available categories
  const allCategories = Object.keys(categoryInfo) as ServiceCategory[];
  
  return (
    <section id="services" className="section-padding py-20">
      <div className="container mx-auto px-6">
        <MotionBox>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Enabler サービスエコシステム
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            テクノロジーで、あなたの日常をもっと豊かに。
          </p>
        </MotionBox>
        
        {/* Category filters */}
        <MotionBox delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button
              onClick={() => setActiveCategory('ALL')}
              variant={activeCategory === 'ALL' ? 'default' : 'outline'}
              className="rounded-full"
            >
              すべて
            </Button>
            
            {allCategories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? 'default' : 'outline'}
                className="rounded-full flex items-center"
              >
                {getCategoryIcon(category)}
                {categoryInfo[category].name}
              </Button>
            ))}
          </div>
        </MotionBox>
        
        {/* Search box */}
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
        
        {/* Display by category when not searching or filtering */}
        {searchQuery === '' && activeCategory === 'ALL' ? (
          <div className="space-y-16">
            {allCategories.map((category, idx) => {
              const categoryServices = getServicesByCategory(category);
              if (categoryServices.length === 0) return null;
              
              return (
                <MotionBox key={category} delay={300 + idx * 100}>
                  <div className="mb-8">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-enabler-100 p-3 rounded-full mr-3">
                        {getCategoryIcon(category)}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {categoryInfo[category].name}
                      </h3>
                      <span className="ml-3 text-gray-500">
                        {categoryInfo[category].nameJp}
                      </span>
                    </div>
                    <p className="text-center text-gray-600 mb-8">
                      {categoryInfo[category].description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                      {categoryServices.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                      ))}
                    </div>
                  </div>
                </MotionBox>
              );
            })}
          </div>
        ) : (
          // Display filtered results
          filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">検索条件に一致するサービスがありません。</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ServiceCategories;
