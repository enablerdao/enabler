
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GoalItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  serviceColor: string;
}

export const GoalItem = ({ icon: Icon, title, description, serviceColor }: GoalItemProps) => {
  return (
    <div className="flex items-start bg-white p-4 rounded-lg shadow-subtle hover:shadow-md transition-all duration-300">
      <div className="p-2 rounded-full mr-4" style={{ backgroundColor: `${serviceColor}20`, color: serviceColor }}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};
