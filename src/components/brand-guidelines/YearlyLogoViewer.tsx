
import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import LogoGrid from './yearly-logo/LogoGrid';
import LoadMoreButton from './yearly-logo/LoadMoreButton';
import FibonacciVisualization from './fibonacci/FibonacciVisualization';

const YearlyLogoViewer: React.FC = () => {
  const [visibleYears, setVisibleYears] = useState(12);
  const foundingYear = 2022; // Keep the actual founding year for reference
  const startDisplayYear = 2025; // Start displaying from 2025 as the first special year (green)
  
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
  
  // Generate years array - focus on specific milestone years from the table
  const years = [2022, 2025, 2026, 2028, 2031, 2033];
  
  // Add other visible years up to the limit
  for (let i = 6; i < visibleYears; i++) {
    const year = 2033 + i - 5;
    if (!years.includes(year)) {
      years.push(year);
    }
  }
  
  return (
    <div className="mt-4 space-y-4">
      <h3 className="text-lg font-semibold mb-3">ロゴ年次変遷（{foundingYear}年〜）</h3>
      <p className="text-sm text-gray-600 mb-3">
        ※ブランドカラーは毎年変化します。色をクリックするとコピーできます。<br />
        ※2025年は特別な緑色、2026年は1年目のフィボナッチ年です。
      </p>
      
      <LogoGrid 
        years={years}
        onSpecialColorClick={handleSpecialColorClick}
      />
      
      <LoadMoreButton 
        onLoadMore={handleLoadMore} 
        showButton={visibleYears < totalYears}
      />
      
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
