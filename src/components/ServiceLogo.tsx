
import React from 'react';
import { cn } from '@/lib/utils';

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
    iconColor: string;
  }> = {
    'PetPals': {
      bgColor: 'bg-amber-100',
      textColor: 'text-amber-800',
      fontFamily: 'font-serif',
      iconColor: '#F97316' // Orange
    },
    'TaskTrust': {
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-800',
      fontFamily: 'font-mono',
      iconColor: '#0EA5E9' // Blue
    },
    'MatchSense': {
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-800',
      fontFamily: 'font-sans font-light tracking-wider',
      iconColor: '#8B5CF6' // Purple
    },
    'TasteFund': {
      bgColor: 'bg-green-100',
      textColor: 'text-green-800',
      fontFamily: 'font-display tracking-tight',
      iconColor: '#10B981' // Green
    }
  };
  
  // Default styling if service not found
  const defaultStyle = {
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-800',
    fontFamily: 'font-display',
    iconColor: '#6B7280' // Gray
  };
  
  const style = logoStyles[serviceName] || defaultStyle;
  
  // Custom SVG Logos for each service
  const renderLogo = () => {
    switch(serviceName) {
      case 'PetPals':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="11" fill="#FFECD1" />
            <path d="M7.5,11.5 C7.5,10.7 8.2,10 9,10 C9.8,10 10.5,10.7 10.5,11.5 C10.5,12.3 9.8,13 9,13 C8.2,13 7.5,12.3 7.5,11.5 Z" fill={style.iconColor} />
            <path d="M13.5,11.5 C13.5,10.7 14.2,10 15,10 C15.8,10 16.5,10.7 16.5,11.5 C16.5,12.3 15.8,13 15,13 C14.2,13 13.5,12.3 13.5,11.5 Z" fill={style.iconColor} />
            <path d="M6,8 C6.5,6.5 7.5,6 8.5,6.5 C9.5,7 9.5,8.5 9,9.5 C8.5,10.5 7.5,10.5 6.5,10 C5.5,9.5 5.5,8 6,8 Z" fill={style.iconColor} />
            <path d="M18,8 C17.5,6.5 16.5,6 15.5,6.5 C14.5,7 14.5,8.5 15,9.5 C15.5,10.5 16.5,10.5 17.5,10 C18.5,9.5 18.5,8 18,8 Z" fill={style.iconColor} />
            <path d="M8,18.5 C10,20 14,20 16,18.5 C16.5,18 16.5,17 16,16.5 C15,15.5 11,15.5 8,16.5 C7.5,17 7.5,18 8,18.5 Z" fill={style.iconColor} />
          </svg>
        );
      case 'TaskTrust':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="3" fill="#E0F2FE" />
            <rect x="6" y="6" width="5" height="5" rx="1" fill={style.iconColor} />
            <rect x="13" y="6" width="5" height="5" rx="1" fill={style.iconColor} />
            <rect x="6" y="13" width="5" height="5" rx="1" fill={style.iconColor} />
            <rect x="13" y="13" width="5" height="5" rx="1" fill={style.iconColor} />
          </svg>
        );
      case 'MatchSense':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#F3E8FF" />
            <path d="M8,10 C8,8.3 9.3,7 11,7 C12.7,7 14,8.3 14,10 C14,11.7 12.7,13 11,13 L8,13 L8,10 Z" fill={style.iconColor} />
            <path d="M16,14 C16,12.3 17.3,11 19,11 L19,14 L16,14 Z" fill={style.iconColor} />
            <path d="M8,16 C8,17.7 9.3,19 11,19 C12.7,19 14,17.7 14,16 L14,15 L8,15 L8,16 Z" fill={style.iconColor} />
            <path d="M5,11 C5,12.7 6.3,14 8,14 L8,11 L5,11 Z" fill={style.iconColor} />
          </svg>
        );
      case 'TasteFund':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#DCFCE7" />
            <path d="M8,6 L8,12 C8,14.2 9.8,16 12,16 C14.2,16 16,14.2 16,12 L16,6" stroke={style.iconColor} strokeWidth="2" strokeLinecap="round" />
            <path d="M7,8 L9,8" stroke={style.iconColor} strokeWidth="2" strokeLinecap="round" />
            <path d="M11,8 L13,8" stroke={style.iconColor} strokeWidth="2" strokeLinecap="round" />
            <path d="M15,8 L17,8" stroke={style.iconColor} strokeWidth="2" strokeLinecap="round" />
            <path d="M12,16 L12,19" stroke={style.iconColor} strokeWidth="2" strokeLinecap="round" />
            <path d="M9,19 L15,19" stroke={style.iconColor} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#F1F5F9" />
            <path d="M12,7 L12,17" stroke={style.iconColor} strokeWidth="2" strokeLinecap="round" />
            <path d="M7,12 L17,12" stroke={style.iconColor} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
    }
  };
  
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
        {renderLogo()}
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
