import React, { useState, useCallback, useRef } from 'react';
import { ChevronDown, Download, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { AnimatePresence } from 'framer-motion';
import { calculateColorForYear, calculateSpecialAccentColor } from './color-utils/color-calculator';
import LogoYearCard from './logo-card/LogoYearCard';
import FibonacciVisualization from './fibonacci/FibonacciVisualization';
import { isFibonacciSumYear } from './logo-variants/logoUtils';

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
  
  // Function to download SVG
  const downloadSVG = useCallback((year: number) => {
    const svgElement = document.getElementById(`logo-svg-${year}`);
    if (!svgElement) return;
    
    // Get the SVG content
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);
    
    // Create download link
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = `enabler-logo-${year}.svg`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    // Release the URL object
    setTimeout(() => URL.revokeObjectURL(svgUrl), 100);
    
    // Show toast notification
    toast({
      title: "ダウンロードしました",
      description: `Enablerロゴ（${year}年版）をダウンロードしました`,
    });
  }, [toast]);
  
  // Function to copy SVG code
  const copySVGCode = useCallback((year: number) => {
    const svgElement = document.getElementById(`logo-svg-${year}`);
    if (!svgElement) return;
    
    // Get the SVG content
    const svgData = new XMLSerializer().serializeToString(svgElement);
    
    // Copy to clipboard
    navigator.clipboard.writeText(svgData);
    
    // Show toast notification
    toast({
      title: "コピーしました",
      description: `SVGコード（${year}年版）をクリップボードにコピーしました`,
    });
  }, [toast]);
  
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {years.map(year => {
          // Calculate the color for this year
          const color = calculateColorForYear(year);
          const specialAccent = calculateSpecialAccentColor(year);
          
          return (
            <div key={year} className="border rounded-lg p-4 bg-white shadow-sm">
              <h4 className="text-lg font-semibold mb-2">{year}年</h4>
              
              <div className="flex flex-col space-y-3">
                <div className="relative bg-gray-50 p-4 rounded-md flex justify-center items-center h-40">
                  <svg 
                    id={`logo-svg-${year}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 200 70" 
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <linearGradient id={`modernGradient-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22B6FF" />
                        <stop offset="100%" stopColor={color.hex} />
                      </linearGradient>
                      <linearGradient id={`reverseGradient-${year}`} x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor={color.hex} />
                        <stop offset="100%" stopColor="#22B6FF" />
                      </linearGradient>
                      <linearGradient id={`middleLineGradient-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22B6FF" />
                        <stop offset="100%" stopColor={specialAccent.hex} />
                      </linearGradient>
                    </defs>
                    <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
                    <rect x="15" y="25" width="60" height="3" rx="1.5" fill={`url(#modernGradient-${year})`}/>
                    <rect x="15" y="33" width="37" height="3" rx="1.5" fill={`url(#middleLineGradient-${year})`}/>
                    <rect x="15" y="41" width="60" height="3" rx="1.5" fill={`url(#reverseGradient-${year})`}/>
                    <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill={`url(#modernGradient-${year})`}>ENABLER</text>
                  </svg>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div 
                    className="p-2 rounded cursor-pointer text-center"
                    style={{ backgroundColor: color.hex, color: parseInt(color.hex.slice(1, 3), 16) > 150 ? '#000' : '#fff' }}
                    onClick={() => copyToClipboard(color.hex, `ブランドカラー（${year}年）`)}
                  >
                    {color.hex}
                  </div>
                  
                  {isFibonacciSumYear(year) && (
                    <div 
                      className="p-2 rounded cursor-pointer text-center"
                      style={{ backgroundColor: specialAccent.hex, color: parseInt(specialAccent.hex.slice(1, 3), 16) > 150 ? '#000' : '#fff' }}
                      onClick={() => handleSpecialColorClick(specialAccent.hex, year)}
                    >
                      {specialAccent.hex}
                    </div>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 flex items-center justify-center gap-1"
                    onClick={() => downloadSVG(year)}
                  >
                    <Download size={14} /> SVG保存
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 flex items-center justify-center gap-1"
                    onClick={() => copySVGCode(year)}
                  >
                    <Copy size={14} /> コードコピー
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {visibleYears < totalYears && (
        <div className="flex justify-center mt-6">
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
