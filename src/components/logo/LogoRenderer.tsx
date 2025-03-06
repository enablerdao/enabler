
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
  // For fibonacci variant
  if (variant === 'fibonacci') {
    switch(serviceName) {
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
      default:
        return <DefaultFibonacciLogo style={style} />;
    }
  }
  
  // For default and modern variants
  switch(serviceName) {
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
    default:
      return <DefaultLogo style={style} variant={variant} />;
  }
};

export default LogoRenderer;
