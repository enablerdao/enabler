
import React from 'react';
import { ServiceStyle } from './types';

// Default logos
import EnablissLogo from './default/EnablissLogo';
import PetPalsLogo from './default/PetPalsLogo';
import TaskTrustLogo from './default/TaskTrustLogo';
import MatchSenseLogo from './default/MatchSenseLogo';
import TasteFundLogo from './default/TasteFundLogo';
import DefaultLogo from './default/DefaultLogo';

// Fibonacci logos
import EnablissFibonacciLogo from './fibonacci/EnablissFibonacciLogo';
import PetPalsFibonacciLogo from './fibonacci/PetPalsFibonacciLogo';
import TaskTrustFibonacciLogo from './fibonacci/TaskTrustFibonacciLogo';
import MatchSenseFibonacciLogo from './fibonacci/MatchSenseFibonacciLogo';
import TasteFundFibonacciLogo from './fibonacci/TasteFundFibonacciLogo';
import DefaultFibonacciLogo from './fibonacci/DefaultFibonacciLogo';

interface LogoRendererProps {
  serviceName: string;
  style: ServiceStyle;
  variant: 'default' | 'modern' | 'fibonacci';
}

const LogoRenderer: React.FC<LogoRendererProps> = ({ serviceName, style, variant }) => {
  // For services that share the same logo style
  const normalizeServiceName = (name: string) => {
    // StayFlow Portfolio uses same logo components as StayFlow
    if (name === 'StayFlow Portfolio') return 'StayFlow';
    return name;
  };
  
  const normalizedName = normalizeServiceName(serviceName);
  
  // For fibonacci variant
  if (variant === 'fibonacci') {
    switch(normalizedName) {
      case 'Enabliss':
        return <EnablissFibonacciLogo style={style} />;
      case 'PetPals':
        return <PetPalsFibonacciLogo style={style} />;
      case 'TaskTrust':
        return <TaskTrustFibonacciLogo style={style} />;
      case 'MatchSense':
        return <MatchSenseFibonacciLogo style={style} />;
      case 'TasteFund':
        return <TasteFundFibonacciLogo style={style} />;
      case 'StayFlow':
        // Use a default logo with StayFlow styling
        return <DefaultFibonacciLogo style={style} />;
      case 'TravelMate':
        // Use a default logo with TravelMate styling
        return <DefaultFibonacciLogo style={style} />;
      default:
        return <DefaultFibonacciLogo style={style} />;
    }
  }
  
  // For default and modern variants
  switch(normalizedName) {
    case 'Enabliss':
      return <EnablissLogo style={style} variant={variant} />;
    case 'PetPals':
      return <PetPalsLogo style={style} variant={variant} />;
    case 'TaskTrust':
      return <TaskTrustLogo style={style} variant={variant} />;
    case 'MatchSense':
      return <MatchSenseLogo style={style} variant={variant} />;
    case 'TasteFund':
      return <TasteFundLogo style={style} variant={variant} />;
    case 'StayFlow':
      // Simple text-based logo for StayFlow
      return (
        <div className="text-center font-bold text-xs flex items-center justify-center w-full h-full">
          {serviceName === 'StayFlow Portfolio' ? 'S.F.P' : 'SF'}
        </div>
      );
    case 'TravelMate':
      // Simple text-based logo for TravelMate
      return (
        <div className="text-center font-bold text-xs flex items-center justify-center w-full h-full">
          TM
        </div>
      );
    default:
      return <DefaultLogo style={style} variant={variant} />;
  }
};

export default LogoRenderer;
