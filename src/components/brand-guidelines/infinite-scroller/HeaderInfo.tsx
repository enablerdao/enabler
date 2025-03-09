
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { HeaderInfoProps } from './types';

const HeaderInfo: React.FC<HeaderInfoProps> = ({ visibleYears }) => {
  if (visibleYears.length === 0) return null;
  
  return (
    <div className="text-sm text-gray-600">
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="font-normal">
          <span className="font-semibold">{visibleYears[0]}年</span> 〜 <span className="font-semibold">{visibleYears[visibleYears.length - 1]}年</span>
        </Badge>
        <span className="text-gray-500">（{visibleYears.length}ロゴ表示中）</span>
      </div>
    </div>
  );
};

export default HeaderInfo;
