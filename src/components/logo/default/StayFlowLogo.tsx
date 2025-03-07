
import React from 'react';
import { ServiceStyle } from '../types';

interface StayFlowLogoProps {
  style: ServiceStyle;
  variant?: 'default' | 'modern';
}

const StayFlowLogo: React.FC<StayFlowLogoProps> = ({ style }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <span className="font-bold text-xs">SF</span>
    </div>
  );
};

export default StayFlowLogo;
