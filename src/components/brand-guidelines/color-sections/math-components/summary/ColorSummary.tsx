
import React from 'react';

const ColorSummary: React.FC = () => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-4 md:mb-5 border-b pb-2 mt-12">ブランドカラーのまとめ</h3>
      
      <div className="bg-gray-50 p-5 rounded-lg">
        <h4 className="font-medium mb-3">ロゴの3本線の意味:</h4>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>上の線: 創業カラーから現在のブランドカラーへ変化するグラデーション</li>
          <li>中央の線: 黄金比で短くデザインされ、創業カラーから特別なアクセントカラーへのグラデーション</li>
          <li>下の線: 現在のブランドカラーから創業カラーへ戻るリバースグラデーション</li>
        </ul>
        
        <h4 className="font-medium mb-3">カラー進化の意味:</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>通常のカラーは、深い青から明るい空色、そして透明感のあるブルーへと進化し、Enablerの成長と可能性を象徴</li>
          <li>特別な節目の周年には、黄金角から算出されるアクセントカラーが登場し、その節目を彩る</li>
        </ul>
      </div>
    </div>
  );
};

export default ColorSummary;
