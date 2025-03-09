
import React from 'react';

const ColorSummary: React.FC = () => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-4 md:mb-5 border-b pb-2 mt-12">ブランドカラーのまとめ</h3>
      
      <div className="bg-gray-50 p-5 rounded-lg">
        <ul className="list-disc pl-5 space-y-2">
          <li>通常のカラーは、深い青から明るい空色、そして限りなく淡いブルーへと進化し、Enablerの絶え間ない成長と広がり続ける可能性を象徴します。</li>
          <li>特別な節目の周年には、黄金角から算出されるアクセントカラーが登場し、その節目を華やかに彩ります。</li>
        </ul>
        <p className="mt-3 text-sm font-medium">
          Enablerはこれらのカラーを通じて、人々の可能性をより豊かに、そして自然に広げる存在として、未来へ向けて進化していきます。
        </p>
      </div>
    </div>
  );
};

export default ColorSummary;
