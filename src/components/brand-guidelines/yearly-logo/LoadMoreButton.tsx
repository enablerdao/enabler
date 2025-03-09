
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LoadMoreButtonProps {
  onLoadMore: () => void;
  showButton: boolean;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onLoadMore, showButton }) => {
  if (!showButton) return null;
  
  return (
    <div className="flex justify-center mt-6">
      <Button 
        variant="outline" 
        onClick={onLoadMore}
        className="flex items-center gap-2"
      >
        さらに表示する <ChevronDown size={16} />
      </Button>
    </div>
  );
};

export default LoadMoreButton;
