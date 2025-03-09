
import React from 'react';

const ColorUsageGuidelines: React.FC = () => {
  return (
    <div className="mt-6 flex flex-col md:flex-row gap-4">
      <div className="bg-blue-50 p-4 rounded-lg flex-1">
        <h5 className="font-medium mb-2">基本カラーとアクセントカラーの使い方</h5>
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="font-medium">基本カラー</span>：メインのブランドカラーとして、ロゴ、アイコン、見出しなどに使用</li>
          <li><span className="font-medium">特別カラー</span>：特別な周年の広告、キャンペーン、記念グッズなどに使用</li>
          <li>両方のカラーを組み合わせることで、ブランドの歴史と成長を表現できます</li>
        </ul>
      </div>
      
      <div className="bg-green-50 p-4 rounded-lg flex-1">
        <h5 className="font-medium mb-2">特別カラーの特徴</h5>
        <ul className="list-disc pl-5 space-y-2">
          <li>フィボナッチ数列の年（1,2,3,5,8年目...）に節目として新しく設定</li>
          <li>一度設定された特別カラーは次の節目が来るまで固定</li>
          <li>自然界の黄金角（約137.5度）に基づく色相で設計</li>
          <li>長期的なブランド戦略における色彩の一貫性を保ちます</li>
        </ul>
      </div>
    </div>
  );
};

export default ColorUsageGuidelines;
