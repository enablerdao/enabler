
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Calculator } from 'lucide-react';

const FixedColorValues = () => {
  return (
    <MotionBox delay={900}>
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <Calculator className="text-enabler-600 mr-3" size={24} />
          <h2 className="text-2xl font-bold text-gray-900">8. ブランドカラーの固定値</h2>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-subtle">
          <p className="text-lg mb-6">
            Enablerのブランドカラーは2022年の設立時に定められた固定値で、プロダクトやサービス全体で一貫して使用します。
          </p>
          <div className="overflow-x-auto">
            <div className="flex space-x-4 min-w-max">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-lg" style={{ backgroundColor: '#22B6FF' }}></div>
                <p className="mt-2 font-medium">メインカラー</p>
                <p className="text-sm text-gray-600">#22B6FF</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-lg" style={{ backgroundColor: '#1E90FF' }}></div>
                <p className="mt-2 font-medium">サブカラー</p>
                <p className="text-sm text-gray-600">#1E90FF</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-lg" style={{ backgroundColor: '#79D300' }}></div>
                <p className="mt-2 font-medium">アクセントカラー</p>
                <p className="text-sm text-gray-600">#79D300</p>
              </div>
            </div>
          </div>
          <p className="text-lg mt-6">
            これらのカラーは、あらゆるマーケティング資料や製品において一貫して使用することで、Enablerのブランドの統一性と認知度を高めます。
          </p>
        </div>
      </section>
    </MotionBox>
  );
};

export default FixedColorValues;
