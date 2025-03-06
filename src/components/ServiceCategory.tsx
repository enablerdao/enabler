
import React, { ReactNode } from 'react';

interface ServiceItemProps {
  title: string;
  tagline: string;
  description: string;
  bullets?: { icon: string; text: string }[];
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, tagline, description, bullets }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-gray-700 mb-4 italic">{tagline}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      {bullets && (
        <ul className="space-y-2">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">{bullet.icon}</span>
              <span>{bullet.text}</span>
            </li>
          ))}
        </ul>
      )}
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
