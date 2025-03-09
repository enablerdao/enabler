
import React from 'react';
import ColorEvolutionIntro from './math-components/ColorEvolutionIntro';
import ColorFormula from './math-components/ColorFormula';
import ColorEvolutionVisualization from './math-components/ColorEvolutionVisualization';
import SpecialAccentColorIntro from './math-components/SpecialAccentColorIntro';
import SpecialColorFormula from './math-components/SpecialColorFormula';
import SpecialColorExamplesTable from './math-components/SpecialColorExamplesTable';
import SpecialAccentVisualization from './math-components/SpecialAccentVisualization';
import ColorSummary from './math-components/ColorSummary';
import FibonacciCalculator from './math-components/FibonacciCalculator';

interface ColorMathSectionProps {
  copyToClipboard: (text: string, label: string) => void;
  foundingYearColor: any;
}

const ColorMathSection: React.FC<ColorMathSectionProps> = ({ copyToClipboard, foundingYearColor }) => {
  // Generate Fibonacci numbers sequence - extended for long-term calculations
  const fibonacciSequence = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584];
  const foundingYear = 2022;
  
  // Use the FibonacciCalculator component to calculate the Fibonacci sums
  const { fibonacciSums } = FibonacciCalculator({ fibonacciSequence });
  
  return (
    <div className="mb-6 md:mb-10">
      <ColorEvolutionIntro />
      
      <ColorFormula copyToClipboard={copyToClipboard} />
      
      <ColorEvolutionVisualization 
        fibonacciSums={fibonacciSums} 
        foundingYear={foundingYear} 
      />
      
      <SpecialAccentColorIntro />
      
      <SpecialColorFormula />
      
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
