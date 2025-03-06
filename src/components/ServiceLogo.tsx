
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  HeartHandshake, 
  LayoutGrid, 
  UserCheck, 
  Utensils
} from 'lucide-react';

interface ServiceLogoProps {
  serviceName: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const ServiceLogo: React.FC<ServiceLogoProps> = ({ 
  serviceName,
  size = 'md',
  className
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };
  
  // Service-specific styling
  const logoStyles: Record<string, {
    bgColor: string;
    textColor: string;
    fontFamily: string;
    icon: React.ReactNode;
    iconColor: string;
  }> = {
    'PetPals': {
      bgColor: 'bg-amber-100',
      textColor: 'text-amber-800',
      fontFamily: 'font-serif',
      icon: <HeartHandshake strokeWidth={1.5} />,
      iconColor: 'text-amber-600'
    },
    'TaskTrust': {
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-800',
      fontFamily: 'font-mono',
      icon: <LayoutGrid strokeWidth={1.5} />,
      iconColor: 'text-blue-600'
    },
    'MatchSense': {
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-800',
      fontFamily: 'font-sans font-light tracking-wider',
      icon: <UserCheck strokeWidth={1.5} />,
      iconColor: 'text-purple-600'
    },
    'TasteFund': {
      bgColor: 'bg-green-100',
      textColor: 'text-green-800',
      fontFamily: 'font-display tracking-tight',
      icon: <Utensils strokeWidth={1.5} />,
      iconColor: 'text-green-600'
    }
  };
  
  // Default styling if service not found
  const defaultStyle = {
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-800',
    fontFamily: 'font-display',
    icon: <HeartHandshake strokeWidth={1.5} />,
    iconColor: 'text-gray-600'
  };
  
  const style = logoStyles[serviceName] || defaultStyle;
  
  return (
    <div className={cn(
      "flex items-center gap-2", 
      className
    )}>
      <div className={cn(
        "rounded-lg flex items-center justify-center",
        style.bgColor,
        sizeClasses[size]
      )}>
        <div className={style.iconColor}>
          {style.icon}
        </div>
      </div>
      
      <span className={cn(
        "font-bold",
        style.textColor,
        style.fontFamily
      )}>
        {serviceName}
      </span>
    </div>
  );
};

export default ServiceLogo;
