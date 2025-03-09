
import React, { useState, useRef } from 'react';
import { services } from '@/lib/data';
import { Service, ServiceCategory, categoryInfo } from '@/lib/types/service';
import { MotionBox } from './ui/motion-box';
import { Button } from './ui/button';
import ServiceCard from './ServiceCard';
import { Search, Hotel, Users, Briefcase, HeartPulse, TrendingUp, ChevronRight, ChevronLeft } from 'lucide-react';

const ServiceCategories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'ALL'>('ALL');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const categoryRowRefs = useRef<Record<ServiceCategory, React.RefObject<HTMLDivElement>>>({} as any);
  
  // Initialize refs for each category
  const allCategories = Object.keys(categoryInfo) as ServiceCategory[];
  allCategories.forEach(category => {
    if (!categoryRowRefs.current[category]) {
      categoryRowRefs.current[category] = React.createRef<HTMLDivElement>();
    }
  });
  
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
  
  const getServicesByCategory = (category: ServiceCategory) => {
    return services.filter(service => service.category === category);
  };
  
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
  
  const scrollCategoryLeft = (category: ServiceCategory) => {
    if (categoryRowRefs.current[category].current) {
      categoryRowRefs.current[category].current?.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollCategoryRight = (category: ServiceCategory) => {
    if (categoryRowRefs.current[category].current) {
      categoryRowRefs.current[category].current?.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Check if a category has enough items to scroll
  const hasScrollableContent = (category: ServiceCategory) => {
    const categoryServices = getServicesByCategory(category);
    return categoryServices.length > (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
  };

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
        
        <MotionBox delay={100}>
          <div className="relative mb-8">
            <div className="flex items-center">
              <button 
                onClick={scrollLeft}
                className="absolute left-0 z-10 bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-enabler-400 hidden md:flex"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div 
                ref={scrollContainerRef}
                className="flex items-center gap-3 py-2 overflow-x-auto scrollbar-hide mx-auto scroll-smooth"
                style={{ 
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
              >
                <Button
                  onClick={() => setActiveCategory('ALL')}
                  variant={activeCategory === 'ALL' ? 'default' : 'outline'}
                  className="rounded-full whitespace-nowrap flex-shrink-0"
                >
                  すべて
                </Button>
                
                {allCategories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    variant={activeCategory === category ? 'default' : 'outline'}
                    className="rounded-full flex items-center whitespace-nowrap flex-shrink-0"
                  >
                    {getCategoryIcon(category)}
                    {categoryInfo[category].name}
                  </Button>
                ))}
              </div>
              
              <button 
                onClick={scrollRight}
                className="absolute right-0 z-10 bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-enabler-400 flex items-center justify-center"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Scroll indicator */}
            <div className="hidden md:flex items-center justify-center mt-3">
              <div className="flex space-x-1">
                <span className="w-8 h-1 bg-enabler-300 rounded-full"></span>
                <span className="w-1 h-1 bg-enabler-200 rounded-full"></span>
                <span className="w-1 h-1 bg-enabler-200 rounded-full"></span>
              </div>
            </div>
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
        
        {/* Display categories in rows when no search or "ALL" category is active */}
        {searchQuery === '' && activeCategory === 'ALL' ? (
          <div className="space-y-16">
            {allCategories.map((category, idx) => {
              const categoryServices = getServicesByCategory(category);
              if (categoryServices.length === 0) return null;
              
              return (
                <MotionBox key={category} delay={300 + idx * 100}>
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="bg-enabler-100 p-3 rounded-full mr-3">
                          {getCategoryIcon(category)}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          {categoryInfo[category].name}
                        </h3>
                        <span className="ml-3 text-gray-500">
                          {categoryInfo[category].name}
                        </span>
                      </div>
                      
                      {hasScrollableContent(category) && (
                        <div className="flex gap-2">
                          <button 
                            onClick={() => scrollCategoryLeft(category)}
                            className="bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-enabler-400"
                            aria-label={`Scroll ${category} left`}
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button 
                            onClick={() => scrollCategoryRight(category)}
                            className="bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-enabler-400"
                            aria-label={`Scroll ${category} right`}
                          >
                            <ChevronRight size={20} />
                          </button>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-center text-gray-600 mb-8">
                      {categoryInfo[category].description}
                    </p>
                    
                    <div className="relative">
                      {hasScrollableContent(category) && (
                        <div className="absolute right-0 top-0 bottom-0 z-10 bg-gradient-to-l from-white via-white/80 to-transparent w-16 h-full flex items-center justify-end pr-2">
                          <div className="bg-white/90 rounded-full p-1 shadow-sm animate-pulse">
                            <ChevronRight className="text-enabler-500" size={18} />
                          </div>
                        </div>
                      )}
                      
                      <div 
                        ref={categoryRowRefs.current[category]}
                        className="flex gap-6 lg:gap-8 pb-4 overflow-x-auto hide-scrollbar scroll-smooth"
                      >
                        {categoryServices.map((service, index) => (
                          <div key={service.id} className="w-full min-w-[300px] max-w-[400px] flex-shrink-0">
                            <ServiceCard service={service} index={index} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </MotionBox>
              );
            })}
          </div>
        ) : (
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
