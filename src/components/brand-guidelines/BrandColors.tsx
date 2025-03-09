
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Palette } from 'lucide-react';

const BrandColors = ({ fixedMainColor, fixedHex }: { fixedMainColor: string, fixedHex: string }) => {
  return (
    <MotionBox delay={400}>
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <Palette className="text-enabler-600 mr-3" size={24} />
          <h2 className="text-2xl font-bold text-gray-900">3. ブランドカラー</h2>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-subtle">
          <p className="text-lg mb-6 leading-relaxed">
            Enablerのブランドカラーは2022年の設立時に定められ、不変の色として使用されています。
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">不変のアイデンティティカラー</h3>
            <p className="text-lg mb-4 leading-relaxed">
              ブランドカラーはイネブラの原点を象徴し、すべてのプロダクトやサービスで統一的に使用されます。
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="font-mono text-sm p-3">
                メインカラー: RGB(34,182,255) → HEX: {fixedHex}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-3">メインカラー</h3>
              <div 
                className="h-24 rounded-lg shadow-sm mb-2" 
                style={{ backgroundColor: fixedMainColor }}
              ></div>
              <p className="text-sm text-gray-600">スカイブルー ({fixedHex})</p>
              <p className="text-xs text-gray-500">2022年設立時に定められた不変の色</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-3">アクセントカラー</h3>
              <div 
                className="h-24 rounded-lg shadow-sm mb-2" 
                style={{ backgroundColor: '#79D300' }}
              ></div>
              <p className="text-sm text-gray-600">若草色 (#79D300)</p>
              <p className="text-xs text-gray-500">成長、生命力、安心感</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-3">補助カラー</h3>
              <div className="grid grid-cols-2 gap-2 h-24">
                <div 
                  className="rounded-lg shadow-sm border border-gray-200" 
                  style={{ backgroundColor: '#FFFFFF' }}
                ></div>
                <div 
                  className="rounded-lg shadow-sm" 
                  style={{ backgroundColor: '#C0C0C0' }}
                ></div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <p className="text-sm text-gray-600">ホワイト (#FFFFFF)</p>
                <p className="text-sm text-gray-600">シルバー (#C0C0C0)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionBox>
  );
};

export default BrandColors;
