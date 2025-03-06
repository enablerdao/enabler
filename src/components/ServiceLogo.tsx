
import React from 'react';
import { cn } from '@/lib/utils';
import { ServiceLogoProps } from './logo/types';
import { getStyleForService, sizeClasses } from './logo/styles';
import LogoRenderer from './logo/LogoRenderer';

const ServiceLogo: React.FC<ServiceLogoProps> = ({ 
  serviceName,
  size = 'md',
  className,
  variant = 'default'
}) => {
  const style = getStyleForService(serviceName, variant);
  
  return (
    <div className={cn(
      `rounded-md flex items-center justify-center ${sizeClasses[size]}`,
      style.bgColor,
      style.textColor,
      style.fontFamily,
      className
    )}>
      <LogoRenderer 
        serviceName={serviceName}
        style={style}
        variant={variant}
      />
    </div>
  );
};

export default ServiceLogo;
