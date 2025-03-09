
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
            <h4 className="text-lg font-semibold mb-3">ディープブルー (#22B6FF)</h4>
            <p className="text-base mb-4 leading-relaxed">
              Enablerの創業カラーは、「可能性の海」を象徴する深い青色です。
              この色は、無限の広がりを持つ空の色、そして可能性に満ちた海の色を表現しています。
              創業理念である「一人ひとりの可能性を広げる」という思いをこの鮮やかなブルーに込めています。
            </p>
            <p className="text-base mb-4 leading-relaxed">
              年月が経つにつれて、このブルーは徐々に明るく、より透明感のある色へと変化していきます。
              これは、Enablerが徐々に「空気のような存在」へと進化していくことを表しています。
              つまり、誰もが当たり前のように使え、存在を意識せずとも自然に価値を提供できる、
              そんな理想の姿を目指しています。
            </p>
            <p className="text-base leading-relaxed">
              最終的には真っ白にはなりませんが、ほぼ白に近い、透明感のある存在へと変化していく様子を
              色の変化として表現しています。この色の進化は、会社の成長と共に、より広く、より透明に、
              より自然に人々の可能性を広げていくという願いが込められています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundingColorSection;
