
import React, { useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { AnimatePresence } from 'framer-motion';
import { calculateColorForYear, calculateSpecialAccentColor } from './color-utils/color-calculator';
import LogoYearCard from './logo-card/LogoYearCard';
import FibonacciVisualization from './fibonacci/FibonacciVisualization';

const YearlyLogoViewer: React.FC = () => {
  const [visibleYears, setVisibleYears] = useState(12);
  const foundingYear = 2022; // Keep the actual founding year for reference
  const startDisplayYear = 2025; // Start displaying from 2025 as the first special year (green)
  const { toast } = useToast();
  
  // Show very long-term evolution including well beyond the 231st year
  const totalYears = 1000;
  
  // State for Fibonacci color visualization
  const [showFibonacciViz, setShowFibonacciViz] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  
  const handleLoadMore = useCallback(() => {
    setVisibleYears(prev => prev + 12);
  }, []);
  
  const copyToClipboard = useCallback((text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "コピーしました",
      description: `${label}をクリップボードにコピーしました`,
    });
  }, [toast]);
  
  const handleSpecialColorClick = useCallback((color: string, year: number) => {
    setSelectedColor(color);
    setSelectedYear(year);
    setShowFibonacciViz(true);
    setZoomLevel(1);
  }, []);
  
  const handleCloseViz = useCallback(() => {
    setShowFibonacciViz(false);
  }, []);
  
  const handleZoomIn = useCallback(() => {
    setZoomLevel(prev => Math.min(prev + 0.5, 5));
  }, []);
  
  const handleZoomOut = useCallback(() => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  }, []);
  
  // Generate years array starting with 2025 (green) then 2026 (first Fibonacci sum year/cycle 1)
  const years = [2025, 2026];
  
  // Add in all the other visible years up to the limit
  for (let i = 2; i < visibleYears; i++) {
    const year = startDisplayYear + i;
    years.push(year);
  }
  
  return (
    <div className="mt-4 space-y-4">
      <h3 className="text-lg font-semibold mb-3">ロゴ年次変遷（{startDisplayYear}年〜）</h3>
      <p className="text-sm text-gray-600 mb-3">
        ※ブランドカラーは毎年変化します。色をクリックするとコピーできます。<br />
        ※2025年は特別な緑色、2026年は1年目のフィボナッチ年です。
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {years.map(year => {
          // Calculate the color for this year
          const color = calculateColorForYear(year);
          const specialAccent = calculateSpecialAccentColor(year);
          
          return (
            <LogoYearCard
              key={year}
              year={year}
              foundingYear={foundingYear}
              color={color}
              specialAccent={specialAccent}
              onColorCopy={copyToClipboard}
              onSpecialColorClick={handleSpecialColorClick}
            />
          );
        })}
      </div>
      
      {visibleYears < totalYears && (
        <div className="flex justify-center mt-3">
          <Button 
            variant="outline" 
            onClick={handleLoadMore}
            className="flex items-center gap-2"
          >
            さらに表示する <ChevronDown size={16} />
          </Button>
        </div>
      )}
      
      {/* Fibonacci Color Visualization */}
      <AnimatePresence>
        {showFibonacciViz && selectedColor && (
          <FibonacciVisualization
            selectedColor={selectedColor}
            selectedYear={selectedYear}
            zoomLevel={zoomLevel}
            onClose={handleCloseViz}
            onZoomIn={handleZoomIn}
            onZoomOut={handleZoomOut}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default YearlyLogoViewer;
