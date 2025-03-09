
import React from 'react';

const SpecialAccentColorIntro: React.FC = () => {
  return (
    <div className="mb-6">
      <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-5 border-b pb-2 mt-12">特別な周年のアクセントカラー（グリーン）</h3>
      
      <p className="text-base mb-4 leading-relaxed">
        Enablerは、フィボナッチ数列の累積和（1年目、3年目、6年目、11年目…）の節目の年にだけ、通常のブルーとは異なる特別なアクセントカラーを使用します。
      </p>
      
      <p className="text-base mb-4 leading-relaxed">
        アクセントカラーは「黄金角（約137.5度）」を用いて決定されます。これは自然界において最も美しい調和を生み出す角度であり、特別な節目を美しく祝福する意味を込めています。
      </p>
    </div>
  );
};

export default SpecialAccentColorIntro;
