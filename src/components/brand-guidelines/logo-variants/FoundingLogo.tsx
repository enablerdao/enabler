
import React from 'react';
import { LogoVariantProps } from './types';

const FoundingLogo: React.FC<LogoVariantProps> = ({ size }) => {
  return (
    <img 
      src="/lovable-uploads/85dd8f76-5a2d-4d47-a7a8-b01b7098b335.png" 
      alt="Enabler 設立時ロゴ" 
      className="object-contain" 
    />
  );
};

export default FoundingLogo;
