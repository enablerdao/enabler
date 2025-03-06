
import React, { ReactNode, useState } from 'react';

interface ServiceItemProps {
  title: string;
  tagline: string;
  description: string;
  bullets?: { icon: string; text: string }[];
  mission?: string;
  vision?: string;
  domain?: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ 
  title, 
  tagline, 
  description, 
  bullets,
  mission,
  vision,
  domain
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-gray-700 mb-4 italic">{tagline}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {bullets && (
        <ul className="space-y-2 mb-4">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">{bullet.icon}</span>
              <span>{bullet.text}</span>
            </li>
          ))}
        </ul>
      )}
      
      {(mission || vision || domain) && expanded && (
        <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
          {mission && (
            <div className="mb-3">
              <h5 className="font-semibold text-sm text-gray-700">ミッション:</h5>
              <p className="text-gray-600">{mission}</p>
            </div>
          )}
          
          {vision && (
            <div className="mb-3">
              <h5 className="font-semibold text-sm text-gray-700">ビジョン:</h5>
              <p className="text-gray-600">{vision}</p>
            </div>
          )}
          
          {domain && (
            <div className="text-sm text-blue-500 hover:underline">
              {domain}
            </div>
          )}
        </div>
      )}
      
      <div className="text-sm text-gray-400 mt-2 text-right">
        {expanded ? "▲ 閉じる" : "▼ 詳しく見る"}
      </div>
    </div>
  );
};

interface ServiceCategoryProps {
  title: string;
  icon: string;
  children: ReactNode;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ title, icon, children }) => {
  return (
    <div className="mb-16">
      <h3 className="text-xl font-semibold mb-6 flex items-center">
        <span className="mr-2">{icon}</span> {title}
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {children}
      </div>
    </div>
  );
};

export { ServiceCategory, ServiceItem };
