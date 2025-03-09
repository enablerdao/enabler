
import React from 'react';
import { Waves, MapPin, Building, Mountain } from 'lucide-react';
import { ServiceFeature } from '@/lib/types/service';

interface PropertyCardProps {
  feature: ServiceFeature;
  serviceColor: string;
}

export const PropertyCard = ({ feature, serviceColor }: PropertyCardProps) => {
  // Get icon based on property location
  const getIconForProperty = (title: string) => {
    if (title.includes('ハワイ')) return <Waves className="w-5 h-5" />;
    if (title.includes('熱海')) return <MapPin className="w-5 h-5" />;
    if (title.includes('東京')) return <Building className="w-5 h-5" />;
    if (title.includes('北海道')) return <Mountain className="w-5 h-5" />;
    return <Building className="w-5 h-5" />;
  };

  return (
    <div 
      className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 m-1"
    >
      {feature.images && feature.images.length > 0 && (
        <div className="property-images mb-3">
          <div className="grid grid-cols-2 gap-1">
            {feature.images.map((image, imgIndex) => (
              <div 
                key={imgIndex} 
                className={`${imgIndex === 0 ? 'col-span-2' : 'col-span-1'} h-48 overflow-hidden`}
              >
                <img 
                  src={image} 
                  alt={`${feature.title} - image ${imgIndex + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-3">
          <div className={`p-2.5 rounded-full mr-3`} style={{ backgroundColor: `${serviceColor}20`, color: serviceColor }}>
            {getIconForProperty(feature.title)}
          </div>
          <h3 className="font-bold text-gray-800">{feature.title}</h3>
        </div>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    </div>
  );
};
