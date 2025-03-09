import { useState, useEffect, useRef } from 'react';

export const useLogoScroller = (startingYear: number, initialZoomLevel: number) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [visibleYears, setVisibleYears] = useState<number[]>([]);
  const [zoomLevel, setZoomLevel] = useState(initialZoomLevel);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  
  // Calculate initial number of visible years based on zoom level
  const getInitialYearCount = () => {
    // Exponentially increase the number of logos at lower zoom levels
    if (zoomLevel <= 1) {
      return 150; // Significantly more logos at lowest zoom
    } else if (zoomLevel === 2) {
      return 60; // Many logos at zoom level 2
    } else {
      // Original behavior for higher zoom levels
      const baseCount = 30;
      return baseCount * (6 - zoomLevel); // Inverse relationship: lower zoom = more logos
    }
  };
  
  // Initialize with years based on zoom level
  useEffect(() => {
    const yearCount = getInitialYearCount();
    const initialYears = Array.from(
      { length: yearCount }, 
      (_, i) => startingYear + i
    );
    setVisibleYears(initialYears);
  }, [zoomLevel, startingYear]);
  
  // Handle scrolling
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    
    // If we're close to the end, add more years
    if (scrollWidth - (scrollLeft + clientWidth) < 500) {
      const lastYear = visibleYears[visibleYears.length - 1];
      // Add many more logos at once when zoomed out
      const newYearsCount = zoomLevel <= 1 ? 100 : (zoomLevel === 2 ? 50 : Math.max(10, Math.floor(50 / zoomLevel)));
      const newYears = Array.from(
        { length: newYearsCount }, 
        (_, i) => lastYear + i + 1
      );
      setVisibleYears(prev => [...prev, ...newYears]);
      setShowRightArrow(true);
    }
  };
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [visibleYears, zoomLevel]);
  
  // Handle arrow navigation
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = 500; // Larger scroll amount
    const currentScroll = scrollContainerRef.current.scrollLeft;
    
    scrollContainerRef.current.scrollTo({
      left: direction === 'left' 
        ? Math.max(0, currentScroll - scrollAmount) 
        : currentScroll + scrollAmount,
      behavior: 'smooth'
    });
  };
  
  // Handle touch swipe for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      scroll(diff > 0 ? 'right' : 'left');
    }
    
    setTouchStart(null);
  };
  
  // Handle zoom in/out
  const handleZoom = (direction: 'in' | 'out') => {
    setZoomLevel(prev => {
      if (direction === 'in') {
        return Math.min(prev + 1, 5); // Max zoom level is 5
      } else {
        return Math.max(prev - 1, 1); // Min zoom level is 1
      }
    });
  };
  
  // Calculate container style based on zoom level
  const getContainerStyle = () => {
    if (zoomLevel <= 1) {
      // For lowest zoom level, use dense grid layout with many tiny logos
      return {
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(${getCardWidth()}, 1fr))`,
        gap: getGap(),
        overflowX: 'auto' as const,
        overflowY: 'auto' as const,
        maxHeight: '400px',
      };
    } else if (zoomLevel === 2) {
      // For zoom level 2, use a less dense grid but still compact
      return {
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(${getCardWidth()}, 1fr))`,
        gap: getGap(),
        overflowX: 'auto' as const,
        overflowY: 'auto' as const,
        maxHeight: '400px',
      };
    } else {
      // For higher zoom levels (3+), keep horizontal layout
      return {
        display: 'flex',
        flexDirection: 'row' as const,
        flexWrap: 'nowrap' as const,
        gap: getGap(),
        overflowX: 'auto' as const,
        overflowY: 'hidden' as const,
      };
    }
  };
  
  // Calculate card width based on zoom level
  const getCardWidth = () => {
    if (zoomLevel <= 1) {
      return '60px'; // Much smaller at lowest zoom
    } else if (zoomLevel === 2) {
      return '120px'; // Still small at zoom level 2
    } else {
      // For higher zoom levels, use the original scaling formula with increased base width
      const baseWidth = 180; // Base width for zoom level 3
      return `${baseWidth * (zoomLevel / 3)}px`;
    }
  };
  
  // Calculate gap between cards
  const getGap = () => {
    if (zoomLevel <= 1) {
      return '2px'; // Minimal gap at lowest zoom
    } else if (zoomLevel === 2) {
      return '4px'; // Small gap at zoom level 2
    } else {
      return `${8 * (zoomLevel / 3)}px`; // Normal gap at higher zoom levels
    }
  };
  
  return {
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
  };
};
