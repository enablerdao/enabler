
import React from 'react';
import { Service, ServiceCategory } from '@/lib/types/service';
import { MotionBox } from '@/components/ui/motion-box';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getServiceTagline, getServiceShortDescription, getServiceBullets } from './utils';

interface CategoryServiceListProps {
  services: Service[];
  emoji: string;
  title: string;
}

const CategoryServiceList = ({ services, emoji, title }: CategoryServiceListProps) => (
  <div className="mb-20">
    <MotionBox>
      <h3 className="text-2xl font-bold mb-8 flex items-center justify-center">
        <span className="mr-2 text-3xl">{emoji}</span> {title}
      </h3>
    </MotionBox>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <MotionBox key={service.id} delay={index * 100}>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
            <h4 className="text-xl font-bold mb-2 flex items-center">
              {service.emoji && <span className="mr-2">{service.emoji}</span>}
              {service.nameEn}
              <span className="ml-2 text-gray-500 text-sm font-normal">（{service.nameJp.split(' - ')[0]}）</span>
            </h4>
            
            <p className="text-gray-600 italic mb-4">「{getServiceTagline(service.nameEn)}」</p>
            
            <p className="text-gray-700 mb-4 flex-grow">
              {getServiceShortDescription(service.nameEn, service.description)}
            </p>
            
            <ul className="mb-4">
              {getServiceBullets(service.nameEn).map((bullet, idx) => (
                <li key={idx} className="flex items-start mb-2">
                  <span className="mr-2 text-lg">{bullet.icon}</span>
                  <span className="text-sm">{bullet.text}</span>
                </li>
              ))}
            </ul>
            
            <Link 
              to={`/services/${service.id}`} 
              className="text-enabler-600 hover:text-enabler-700 flex items-center mt-auto text-sm font-medium"
            >
              詳しく見る <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </MotionBox>
      ))}
    </div>
  </div>
);

export default CategoryServiceList;
