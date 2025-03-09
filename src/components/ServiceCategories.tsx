
import React, { useState } from 'react';
import { services } from '@/lib/data';
import { ServiceCategory, categoryInfo } from '@/lib/types/service';
import { MotionBox } from './ui/motion-box';
import { CategorySelector } from './service-categories/CategorySelector';
import { SearchBar } from './service-categories/SearchBar';
import { CategorySection } from './service-categories/CategorySection';
import { ServiceGrid } from './service-categories/ServiceGrid';
import { filterServices, getServicesByCategory } from './service-categories/utils';

const ServiceCategories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'ALL'>('ALL');
  
  const allCategories = Object.keys(categoryInfo) as ServiceCategory[];
  const filteredServices = filterServices(services, searchQuery, activeCategory);
  
  return (
    <section id="services" className="section-padding py-16 md:py-20">
      <div className="container mx-auto px-2 sm:px-4 md:px-6">
        <MotionBox>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Enabler サービスエコシステム
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            テクノロジーで、あなたの日常をもっと豊かに。
          </p>
        </MotionBox>
        
        <MotionBox delay={100}>
          <CategorySelector 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </MotionBox>
        
        <MotionBox delay={200}>
          <SearchBar 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </MotionBox>
        
        {/* Display categories in rows when no search or "ALL" category is active */}
        {searchQuery === '' && activeCategory === 'ALL' ? (
          <div className="space-y-12 md:space-y-16">
            {allCategories.map((category, idx) => {
              const categoryServices = getServicesByCategory(services, category);
              if (categoryServices.length === 0) return null;
              
              return (
                <CategorySection
                  key={category}
                  category={category}
                  services={categoryServices}
                  index={idx}
                />
              );
            })}
          </div>
        ) : (
          <ServiceGrid services={filteredServices} />
        )}
      </div>
    </section>
  );
};

export default ServiceCategories;
