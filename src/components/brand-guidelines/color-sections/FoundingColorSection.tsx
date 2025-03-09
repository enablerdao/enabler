
import React from 'react';
import { ColorInfo } from '../color-utils/types';

interface FoundingColorSectionProps {
  foundingYearColor: ColorInfo;
}

const FoundingColorSection: React.FC<FoundingColorSectionProps> = ({ foundingYearColor }) => {
  return (
    <div className="mb-6 md:mb-10">
      <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-5 border-b pb-2">創業カラーの由来</h3>
      
      <div className="bg-gray-50 p-5 rounded-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div 
            className="h-32 w-32 md:h-40 md:w-40 rounded-lg flex-shrink-0"
            style={{ backgroundColor: foundingYearColor.hex }}
          >
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold mb-3">ディープブルー ({foundingYearColor.hex})</h4>
            <p className="text-base leading-relaxed">
              Enablerの創業カラーは、「可能性の海」を象徴する深い青色が選ばれました。
              この色は、無限の広がりを持つ空の色、そして可能性に満ちた海の色を表現しています。
              創業理念である「一人ひとりの可能性を広げる」という思いをこの鮮やかなブルーに込めています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundingColorSection;
