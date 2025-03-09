
import React from 'react';
import { ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ZoomControlsProps } from './types';

const ZoomControls: React.FC<ZoomControlsProps> = ({ zoomLevel, onZoom }) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onZoom('out')}
        disabled={zoomLevel <= 1}
        title="縮小表示（多いロゴ）"
      >
        <ZoomOut className="h-4 w-4" />
      </Button>
      <div className="text-xs text-gray-500 w-5 text-center">{zoomLevel}</div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => onZoom('in')}
        disabled={zoomLevel >= 5}
        title="拡大表示（少ないロゴ）"
      >
        <ZoomIn className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ZoomControls;
