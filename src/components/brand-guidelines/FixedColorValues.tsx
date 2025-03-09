
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Calculator } from 'lucide-react';
import Logo from '@/components/Logo';

const FixedColorValues = () => {
  return (
    <MotionBox delay={900}>
      <section className="mb-8 md:mb-16">
        <div className="flex items-center mb-4 md:mb-6">
          <Calculator className="text-enabler-600 mr-2 md:mr-3" size={24} />
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">8. ブランドカラーの固定値</h2>
        </div>
        <div className="bg-white p-4 md:p-8 rounded-xl shadow-subtle">
          <p className="text-base md:text-lg mb-4 md:mb-6">
            Enablerのブランドカラーは2022年の設立時に定められた固定値で、プロダクトやサービス全体で一貫して使用します。
          </p>
          
          {/* Logo variants with color schemes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
            <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-center">ロゴバリエーション</h3>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="flex flex-col items-center">
                  <div className="bg-white p-2 md:p-3 rounded-lg shadow-sm flex justify-center items-center h-20 md:h-24">
                    <Logo variant="svg" size="md" />
                  </div>
                  <p className="text-xs md:text-sm mt-1 md:mt-2">ベーシック</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white p-2 md:p-3 rounded-lg shadow-sm flex justify-center items-center h-20 md:h-24">
                    <Logo variant="default" size="md" />
                  </div>
                  <p className="text-xs md:text-sm mt-1 md:mt-2">スタンダード</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white p-2 md:p-3 rounded-lg shadow-sm flex justify-center items-center h-20 md:h-24">
                    <Logo variant="minimalist" size="md" />
                  </div>
                  <p className="text-xs md:text-sm mt-1 md:mt-2">ミニマル</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white p-2 md:p-3 rounded-lg shadow-sm flex justify-center items-center h-20 md:h-24">
                    <Logo variant="fibonacci" size="md" />
                  </div>
                  <p className="text-xs md:text-sm mt-1 md:mt-2">フィボナッチ</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-center">カラー固定値</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg" style={{ backgroundColor: '#22B6FF' }}></div>
                  <div>
                    <p className="text-sm md:text-base font-medium">メインカラー</p>
                    <p className="text-xs md:text-sm text-gray-600">HEX: #22B6FF / RGB: 34,182,255</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg" style={{ backgroundColor: '#1E90FF' }}></div>
                  <div>
                    <p className="text-sm md:text-base font-medium">サブカラー</p>
                    <p className="text-xs md:text-sm text-gray-600">HEX: #1E90FF / RGB: 30,144,255</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg" style={{ backgroundColor: '#79D300' }}></div>
                  <div>
                    <p className="text-sm md:text-base font-medium">アクセントカラー</p>
                    <p className="text-xs md:text-sm text-gray-600">HEX: #79D300 / RGB: 121,211,0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg mb-4 md:mb-6">
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-center">グラデーションの使用例</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-8">
              <div className="flex flex-col items-center">
                <div className="w-20 md:w-24 h-6 md:h-8 rounded-lg bg-gradient-to-r from-[#22B6FF] to-[#1E90FF]"></div>
                <p className="text-xs mt-1">標準グラデーション</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 md:w-24 h-6 md:h-8 rounded-lg bg-gradient-to-r from-[#22B6FF] via-[#1E90FF] to-[#79D300]"></div>
                <p className="text-xs mt-1">拡張グラデーション</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 md:w-24 h-6 md:h-8 rounded-lg bg-gradient-to-br from-[#22B6FF] to-[#1E90FF]"></div>
                <p className="text-xs mt-1">斜めグラデーション</p>
              </div>
            </div>
          </div>
          
          <p className="text-base md:text-lg mt-4 md:mt-6">
            これらのカラーは、あらゆるマーケティング資料や製品において一貫して使用することで、Enablerのブランドの統一性と認知度を高めます。
          </p>
        </div>
      </section>
    </MotionBox>
  );
};

export default FixedColorValues;
