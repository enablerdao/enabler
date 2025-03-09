
import React from 'react';

const SpecialColorFormula: React.FC = () => {
  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-3 mt-5">特別カラーの計算方法</h4>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-5">
        <pre className="text-sm md:text-base font-mono overflow-x-auto p-4 bg-gray-100 rounded-lg mb-2">
{`H（色相）= (f × 137.5) mod 360
S（彩度）= 0.75（固定）
V（明度）= 1（固定）

※ f はフィボナッチ数の順序（1,2,3…）です。`}
        </pre>
        <p className="text-sm text-gray-700">
          この方法で得られる色は、「黄金角（137.5度）」という自然界の最も美しい角度を利用しているため、自然界に調和する美しい色が得られます。
        </p>
      </div>
    </div>
  );
};

export default SpecialColorFormula;
