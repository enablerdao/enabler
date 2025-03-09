
import React, { useRef } from 'react';
import { X, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface FibonacciVisualizationProps {
  selectedColor: string;
  selectedYear: number | null;
  zoomLevel: number;
  onClose: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
}

const FibonacciVisualization: React.FC<FibonacciVisualizationProps> = ({
  selectedColor,
  selectedYear,
  zoomLevel,
  onClose,
  onZoomIn,
  onZoomOut,
}) => {
  const vizContainerRef = useRef<HTMLDivElement>(null);

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
            {selectedYear}年のフィボナッチ特別カラー: <span className="px-2 py-1 rounded" style={{ backgroundColor: selectedColor }}>{selectedColor}</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20"
            onClick={onZoomOut}
          >
            <ZoomOut size={20} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20"
            onClick={onZoomIn}
          >
            <ZoomIn size={20} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20"
            onClick={onClose}
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
            // Start from 2025
            const adjustedColor = calculateSpecialAccentColor(
              Math.max(2025, (selectedYear || 2025) + index)
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
  );
};

// Import the function needed from color-calculator
import { calculateSpecialAccentColor } from '../color-utils/color-calculator';

export default FibonacciVisualization;
