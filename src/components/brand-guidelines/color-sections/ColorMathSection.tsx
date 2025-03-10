
import React from 'react';
import { calculateFibonacciSums } from './math-components/utils/FibonacciCalculator';
import ColorEvolutionIntro from './math-components/color-evolution/ColorEvolutionIntro';
import ColorFormula from './math-components/color-evolution/ColorFormula';
import ColorEvolutionVisualization from './math-components/color-evolution/ColorEvolutionVisualization';
import SpecialAccentColorIntro from './math-components/special-colors/SpecialAccentColorIntro';
import SpecialColorExamplesTable from './math-components/special-colors/SpecialColorExamplesTable';
import SpecialAccentVisualization from './math-components/special-colors/SpecialAccentVisualization';
import ColorSummary from './math-components/summary/ColorSummary';

interface ColorMathSectionProps {
  copyToClipboard: (text: string, label: string) => void;
  foundingYearColor: any;
}

const ColorMathSection: React.FC<ColorMathSectionProps> = ({ 
  copyToClipboard, 
  foundingYearColor 
}) => {
  // Generate Fibonacci numbers sequence - extended for long-term calculations
  const fibonacciSequence = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584];
  const foundingYear = 2022;
  
  // Use the utility function to calculate Fibonacci sums
  const fibonacciSums = calculateFibonacciSums(fibonacciSequence);
  
  return (
    <div className="mb-6 md:mb-10">
      <ColorEvolutionIntro />
      
      <ColorFormula copyToClipboard={copyToClipboard} />
      
      <ColorEvolutionVisualization 
        fibonacciSums={fibonacciSums} 
        foundingYear={foundingYear} 
      />
      
      <SpecialAccentColorIntro />
      
      <SpecialColorExamplesTable 
        fibonacciSums={fibonacciSums} 
        foundingYear={foundingYear} 
      />
      
      <SpecialAccentVisualization 
        fibonacciSums={fibonacciSums} 
        foundingYear={foundingYear} 
      />
      
      <ColorSummary />
    </div>
  );
};

export default ColorMathSection;
