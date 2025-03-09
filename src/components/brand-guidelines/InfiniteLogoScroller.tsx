
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import { calculateColorForYear } from './color-utils/color-calculator';
import LogoCard from './infinite-scroller/LogoCard';
import ScrollControls from './infinite-scroller/ScrollControls';
import ZoomControls from './infinite-scroller/ZoomControls';
import HeaderInfo from './infinite-scroller/HeaderInfo';
import InfoPanel from './infinite-scroller/InfoPanel';
import { useLogoScroller } from './infinite-scroller/useLogoScroller';

const InfiniteLogoScroller: React.FC = () => {
  const { toast } = useToast();
  const startingYear = 2025; // Starting from 2025
  
  const {
    scrollContainerRef,
    visibleYears,
    zoomLevel,
    showLeftArrow,
    showRightArrow,
    getContainerStyle,
    handleTouchStart,
    handleTouchEnd,
    handleZoom,
    scroll
  } = useLogoScroller(startingYear, 3); // Initial zoom level is 3 (medium)
  
  // Copy logo SVG code to clipboard
  const copySVG = (year: number) => {
    const svgElement = document.getElementById(`infinite-logo-${year}`);
    if (!svgElement) return;
    
    const svgData = new XMLSerializer().serializeToString(svgElement);
    navigator.clipboard.writeText(svgData);
    
    toast({
      title: "SVGコードをコピーしました",
      description: `${year}年版のロゴSVGコードをクリップボードにコピーしました。`,
    });
  };
  
  // Copy color code to clipboard
  const copyColor = (color: string, year: number) => {
    navigator.clipboard.writeText(color);
    
    toast({
      title: "カラーコードをコピーしました",
      description: `${year}年版のカラーコード「${color}」をクリップボードにコピーしました。`,
    });
  };

  return (
    <div className="relative">
      <InfoPanel />
      
      <div className="flex justify-between items-center mb-4">
        <HeaderInfo visibleYears={visibleYears} />
        <ZoomControls zoomLevel={zoomLevel} onZoom={handleZoom} />
      </div>
      
      <ScrollControls 
        showLeftArrow={showLeftArrow} 
        showRightArrow={showRightArrow} 
        zoomLevel={zoomLevel} 
        onScroll={scroll} 
      />
      
      <div 
        ref={scrollContainerRef}
        className={`pb-10 pt-4 px-2 hide-scrollbar transition-all duration-300 ${zoomLevel <= 2 ? 'border rounded-lg bg-gray-50/50' : ''}`}
        style={getContainerStyle()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {visibleYears.map(year => (
          <LogoCard 
            key={year} 
            year={year} 
            zoomLevel={zoomLevel} 
            onCopySVG={copySVG} 
            onCopyColor={copyColor} 
          />
        ))}
      </div>
      
      <style>
        {`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        `}
      </style>
    </div>
  );
};

export default InfiniteLogoScroller;
