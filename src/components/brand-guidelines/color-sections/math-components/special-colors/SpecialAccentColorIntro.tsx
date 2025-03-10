
import React, { useState } from 'react';
import SpecialColorCircles from './components/SpecialColorCircles';
import SpecialYearColorExplanation from './components/SpecialYearColorExplanation';
import AccentColorDetail from './components/AccentColorDetail';
import MathPrinciplesSection from './components/MathPrinciplesSection';
import GuidelinesSection from './components/GuidelinesSection';
import MilestoneYearsSection from './components/MilestoneYearsSection';
import { useClipboard } from './hooks/useClipboard';
import { specialYearColors, fibonacciMilestones } from './data/colorData';

const SpecialAccentColorIntro: React.FC = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isTheoryOpen, setIsTheoryOpen] = useState(false);
  const [isGuidelinesOpen, setIsGuidelinesOpen] = useState(false);
  const [isMilestoneOpen, setIsMilestoneOpen] = useState(false);
  const { copyColorToClipboard } = useClipboard();

  return (
    <div className="mb-10">
      <h3 className="text-2xl md:text-3xl font-semibold mb-5 md:mb-6 border-b pb-3 mt-12">アクセントカラー</h3>
      
      <SpecialYearColorExplanation copyColorToClipboard={copyColorToClipboard} />
      
      <AccentColorDetail 
        isOpen={isDetailOpen} 
        setIsOpen={setIsDetailOpen} 
      />
      
      <h4 className="text-xl font-semibold mb-4">アクセントカラー一覧</h4>
      
      <SpecialColorCircles 
        specialYearColors={specialYearColors} 
        copyColorToClipboard={copyColorToClipboard} 
      />
      
      <MilestoneYearsSection 
        isMilestoneOpen={isMilestoneOpen} 
        setIsMilestoneOpen={setIsMilestoneOpen}
        fibonacciMilestones={fibonacciMilestones}
      />
      
      <MathPrinciplesSection 
        isTheoryOpen={isTheoryOpen} 
        setIsTheoryOpen={setIsTheoryOpen} 
      />
      
      <GuidelinesSection 
        isGuidelinesOpen={isGuidelinesOpen} 
        setIsGuidelinesOpen={setIsGuidelinesOpen} 
      />
    </div>
  );
};

export default SpecialAccentColorIntro;
