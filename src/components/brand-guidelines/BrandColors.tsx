
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Palette } from 'lucide-react';
import Logo from '@/components/Logo';

const BrandColors = ({ fixedMainColor, fixedHex }: { fixedMainColor: string, fixedHex: string }) => {
  return (
    <MotionBox delay={400}>
      <section className="mb-8 md:mb-16">
        <div className="flex items-center mb-4 md:mb-6">
          <Palette className="text-enabler-600 mr-2 md:mr-3" size={24} />
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">3. ブランドカラー</h2>
        </div>
        <div className="bg-white p-4 md:p-8 rounded-xl shadow-subtle">
          <p className="text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
            Enablerのブランドカラーは2022年の設立時に定められ、不変の色として使用されています。
          </p>
          
          {/* Logo and color evolution visualization */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">ブランドカラーとロゴの進化</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6 bg-gray-50 p-3 md:p-4 rounded-lg">
              <div className="flex flex-col items-center">
                <p className="text-xs md:text-sm font-semibold mb-1 md:mb-2">2022 設立時</p>
                <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm flex justify-center items-center mb-2 md:mb-3">
                  <Logo variant="svg" size="md" />
                </div>
                <div 
                  className="h-6 md:h-8 w-20 md:w-24 rounded-md shadow-sm" 
                  style={{ backgroundColor: fixedMainColor }}
                ></div>
                <p className="text-xs mt-1">{fixedHex}</p>
              </div>
              
              <div className="flex flex-col items-center">
                <p className="text-xs md:text-sm font-semibold mb-1 md:mb-2">現在のブランド</p>
                <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm flex justify-center items-center mb-2 md:mb-3">
                  <Logo variant="default" size="md" />
                </div>
                <div className="flex space-x-1 md:space-x-2">
                  <div 
                    className="h-6 md:h-8 w-10 md:w-12 rounded-md shadow-sm" 
                    style={{ backgroundColor: fixedMainColor }}
                  ></div>
                  <div 
                    className="h-6 md:h-8 w-10 md:w-12 rounded-md shadow-sm" 
                    style={{ backgroundColor: '#1E90FF' }}
                  ></div>
                </div>
                <p className="text-xs mt-1">グラデーション適用</p>
              </div>
              
              <div className="flex flex-col items-center">
                <p className="text-xs md:text-sm font-semibold mb-1 md:mb-2">未来のビジョン</p>
                <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm flex justify-center items-center mb-2 md:mb-3">
                  <Logo variant="fibonacci" size="md" />
                </div>
                <div className="flex space-x-1">
                  <div 
                    className="h-6 md:h-8 w-6 md:w-8 rounded-md shadow-sm" 
                    style={{ backgroundColor: fixedMainColor }}
                  ></div>
                  <div 
                    className="h-6 md:h-8 w-6 md:w-8 rounded-md shadow-sm" 
                    style={{ backgroundColor: '#1E90FF' }}
                  ></div>
                  <div 
                    className="h-6 md:h-8 w-6 md:w-8 rounded-md shadow-sm" 
                    style={{ backgroundColor: '#79D300' }}
                  ></div>
                </div>
                <p className="text-xs mt-1">拡張カラーパレット</p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-gray-600 mt-2">
              メインカラー（{fixedHex}）は2022年設立時から変わらず、当社のアイデンティティの核として継続して使用されています。
            </p>
          </div>
          
          <div className="mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">不変のアイデンティティカラー</h3>
            <p className="text-base md:text-lg mb-3 md:mb-4 leading-relaxed">
              ブランドカラーはイネブラの原点を象徴し、すべてのプロダクトやサービスで統一的に使用されます。
            </p>
            <div className="bg-gray-50 p-3 md:p-4 rounded-lg mb-3 md:mb-4">
              <div className="font-mono text-xs md:text-sm p-2 md:p-3">
                メインカラー: RGB(34,182,255) → HEX: {fixedHex}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
            <div className="flex flex-col">
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">メインカラー</h3>
              <div 
                className="h-20 md:h-24 rounded-lg shadow-sm mb-1 md:mb-2" 
                style={{ backgroundColor: fixedMainColor }}
              ></div>
              <p className="text-xs md:text-sm text-gray-600">スカイブルー ({fixedHex})</p>
              <p className="text-xs text-gray-500">2022年設立時に定められた不変の色</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">アクセントカラー</h3>
              <div 
                className="h-20 md:h-24 rounded-lg shadow-sm mb-1 md:mb-2" 
                style={{ backgroundColor: '#79D300' }}
              ></div>
              <p className="text-xs md:text-sm text-gray-600">若草色 (#79D300)</p>
              <p className="text-xs text-gray-500">成長、生命力、安心感</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">補助カラー</h3>
              <div className="grid grid-cols-2 gap-2 h-20 md:h-24">
                <div 
                  className="rounded-lg shadow-sm border border-gray-200" 
                  style={{ backgroundColor: '#FFFFFF' }}
                ></div>
                <div 
                  className="rounded-lg shadow-sm" 
                  style={{ backgroundColor: '#C0C0C0' }}
                ></div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-1 md:mt-2">
                <p className="text-xs md:text-sm text-gray-600">ホワイト (#FFFFFF)</p>
                <p className="text-xs md:text-sm text-gray-600">シルバー (#C0C0C0)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionBox>
  );
};

export default BrandColors;
