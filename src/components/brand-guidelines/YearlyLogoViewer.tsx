
import React, { useState, useCallback, useRef } from 'react';
import { ChevronDown, Copy, ZoomIn, ZoomOut, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LogoVariations from './LogoVariations';
import { calculateColorForYear, calculateSpecialAccentColor } from './color-utils/color-calculator';
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

const YearlyLogoViewer: React.FC = () => {
  const [visibleYears, setVisibleYears] = useState(12);
  const foundingYear = 2022; // Keep the actual founding year for reference
  const startDisplayYear = 2025; // Start displaying from 2025
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();
  
  // Show very long-term evolution including well beyond the 231st year
  const totalYears = 1000;
  
  // State for Fibonacci color visualization
  const [showFibonacciViz, setShowFibonacciViz] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const vizContainerRef = useRef<HTMLDivElement>(null);
  
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
  
  // Generate years array from start display year to visible limit
  const years = Array.from(
    { length: Math.min(visibleYears, totalYears) }, 
    (_, i) => startDisplayYear + i
  );
  
  // Generate Fibonacci sequence for visualization
  const generateFibonacciSequence = (length: number) => {
    const sequence = [1, 1];
    for (let i = 2; i < length; i++) {
      sequence.push(sequence[i-1] + sequence[i-2]);
    }
    return sequence;
  };
  
  // Generate golden ratio-based positions for the Fibonacci spiral
  const generateFibonacciPositions = (count: number, centerX: number, centerY: number) => {
    const positions = [];
    const goldenRatio = 1.618033988749895;
    
    for (let i = 0; i < count; i++) {
      const angle = i * goldenRatio * Math.PI * 2;
      const radius = Math.sqrt(i) * 20 * zoomLevel;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      positions.push({ x, y, size: Math.max(5, 30 - i * 0.5) * zoomLevel });
    }
    
    return positions;
  };
  
  return (
    <div className="mt-6 space-y-6">
      <h3 className="text-lg font-semibold mb-4">ロゴ年次変遷（{startDisplayYear}年〜）</h3>
      <p className="text-sm text-gray-600 mb-4">
        ※ブランドカラーは毎年変化します。色をクリックするとコピーできます。<br />
        ※会社は2022年に創業しましたが、ロゴ表示は2025年から始まります。
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {years.map(year => {
          // For 2025 (first year), use the specified color
          const color = year === 2025 
            ? { hex: '#25b6ff', name: 'スカイブルー', rgb: '37, 182, 255' }
            : calculateColorForYear(year);
          const specialAccent = calculateSpecialAccentColor(year);
          const yearsSinceFounding = year - foundingYear;
          
          return (
            <div 
              key={year} 
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex flex-col items-center"
            >
              <div className="h-32 flex items-center justify-center mb-2 relative">
                <LogoVariations variant="modern" size="md" year={year} />
                <div className="absolute bottom-0 text-xs text-gray-500 bg-white/80 px-2 py-0.5 rounded">
                  {year}年（創業から{yearsSinceFounding}年目）
                </div>
              </div>
              
              <div className="text-center w-full mt-3">
                <div className="flex justify-between items-center gap-4">
                  {/* Brand color - larger rectangle with color code inside */}
                  <div 
                    className="flex-1 h-24 rounded-md flex flex-col items-center justify-center cursor-pointer group transition-all hover:shadow-md relative"
                    style={{ backgroundColor: color.hex }}
                    onClick={() => copyToClipboard(color.hex, "ブランドカラー")}
                  >
                    <span className="text-white text-sm font-medium drop-shadow-sm mb-1">
                      ブランド
                    </span>
                    <span className="text-white text-xs bg-black/20 px-2 py-1 rounded-sm">
                      {color.hex}
                    </span>
                    <Copy size={14} className="absolute top-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  {/* Special accent color - larger rectangle with color code inside */}
                  <div 
                    className="flex-1 h-24 rounded-md flex flex-col items-center justify-center cursor-pointer group transition-all hover:shadow-md relative" 
                    style={{ backgroundColor: specialAccent.hex }}
                    onClick={() => handleSpecialColorClick(specialAccent.hex, year)}
                  >
                    <span className="text-white text-sm font-medium drop-shadow-sm mb-1">
                      特別
                    </span>
                    <span className="text-white text-xs bg-black/20 px-2 py-1 rounded-sm">
                      {specialAccent.hex}
                    </span>
                    <ZoomIn size={14} className="absolute top-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {visibleYears < totalYears && (
        <div className="flex justify-center mt-4">
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex flex-col"
          >
            <div className="flex justify-between items-center p-4 text-white">
              <div>
                <h3 className="text-lg font-semibold">フィボナッチ数列の色彩表現</h3>
                <p className="text-sm opacity-80">
                  {selectedYear}年のフィボナッチ特別カラー: {selectedColor}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20"
                  onClick={handleZoomOut}
                >
                  <ZoomOut size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20"
                  onClick={handleZoomIn}
                >
                  <ZoomIn size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20"
                  onClick={handleCloseViz}
                >
                  <X size={20} />
                </Button>
              </div>
            </div>
            
            <div 
              ref={vizContainerRef}
              className="flex-1 overflow-hidden relative"
            >
              <div 
                className="absolute inset-0 transform-gpu transition-transform duration-500"
                style={{ 
                  transform: `scale(${zoomLevel})`
                }}
              >
                {generateFibonacciPositions(233, window.innerWidth / 2, window.innerHeight / 2).map((pos, index) => {
                  // Generate color variations based on Fibonacci sequence and original color
                  const hslMatch = selectedColor.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
                  
                  // Adjust lightness based on index
                  const adjustedColor = calculateSpecialAccentColor(
                    (selectedYear || 2025) + index
                  ).hex;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                        transition: { 
                          delay: index * 0.005,
                          duration: 0.3
                        }
                      }}
                      className="absolute rounded-full flex items-center justify-center text-xs text-white/80 font-mono overflow-hidden"
                      style={{
                        left: pos.x,
                        top: pos.y,
                        width: pos.size,
                        height: pos.size,
                        backgroundColor: adjustedColor,
                        zIndex: 1000 - index,
                      }}
                    >
                      {index < 30 && pos.size > 20 ? 
                        generateFibonacciSequence(30)[index] : null}
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            <div className="p-4 text-white text-sm">
              <p>上の円はフィボナッチ数列に従って配置され、ゴールデンスパイラルを形成しています。</p>
              <p>特別カラーが年を追うごとにフィボナッチ数列の法則で変化する様子を視覚化しています。</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default YearlyLogoViewer;
