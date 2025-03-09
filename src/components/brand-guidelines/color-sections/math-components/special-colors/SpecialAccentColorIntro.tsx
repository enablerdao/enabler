
import React from 'react';

const SpecialAccentColorIntro: React.FC = () => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl md:text-3xl font-semibold mb-5 md:mb-6 border-b pb-3 mt-12">特別な周年のアクセントカラー</h3>
      
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-6 border border-green-100">
        <p className="text-lg mb-5 leading-relaxed">
          2025年は特別な緑色 <span className="bg-[#4CAF50] text-white px-3 py-1 rounded-md font-medium">#4CAF50</span> を採用しています。この緑色は「新芽」「成長」「希望」を象徴しています。創業から3年目の2025年は、種から芽が出て、しっかりと根を張り、これから大きく成長していく時期です。
        </p>
        
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-5">
          <div className="bg-[#22B6FF] text-white text-lg font-medium p-4 rounded-lg text-center w-full md:w-1/3">
            2022年（創業の年のカラー）<br/>#22B6FF
          </div>
          <div className="text-3xl text-gray-400">→</div>
          <div className="bg-[#2BBCFF] text-white text-lg font-medium p-4 rounded-lg text-center w-full md:w-1/3">
            2025年（現在のカラー）<br/>#2BBCFF
          </div>
          <div className="text-3xl text-gray-400">+</div>
          <div className="bg-[#4CAF50] text-white text-lg font-medium p-4 rounded-lg text-center w-full md:w-1/3">
            2025年（特別アクセント）<br/>#4CAF50
          </div>
        </div>
        
        <p className="text-lg leading-relaxed">
          海の青から始まり、陸の緑を経て、やがて空へ—自然界の成長過程をブランドの成長に重ね合わせています。この緑は創業者がインスピレーションを得た公園の若葉の色を基にしています。
        </p>
      </div>
      
      <p className="text-lg mb-5 leading-relaxed">
        これからもフィボナッチ数列の年（1,2,3,5,8...）に新しい色が加わります。これらの特別な色は「黄金角（約137.5度）」という、自然界の法則から生まれます。ひまわりの種やパイナップルの模様と同じ原理です。
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-[#4CAF50] mb-2"></div>
          <p className="text-center">2025年（緑）</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-[#E54D4D] mb-2"></div>
          <p className="text-center">2026年（赤）</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-[#A24DE5] mb-2"></div>
          <p className="text-center">2028年（紫）</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-[#E5D24D] mb-2"></div>
          <p className="text-center">2033年（黄）</p>
        </div>
      </div>
    </div>
  );
};

export default SpecialAccentColorIntro;
