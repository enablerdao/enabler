
import React from 'react';
import { Copy } from 'lucide-react';

interface SpecialYearColorExplanationProps {
  copyColorToClipboard: (colorCode: string, colorName: string) => void;
}

const SpecialYearColorExplanation: React.FC<SpecialYearColorExplanationProps> = ({ 
  copyColorToClipboard 
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-6 border border-green-100">
      <p className="text-lg mb-5 leading-relaxed">
        2025年は特別な緑色 <span 
          className="bg-[#4CAF50] text-white px-3 py-1 rounded-md font-medium cursor-pointer inline-flex items-center gap-1"
          onClick={() => copyColorToClipboard("#4CAF50", "緑色")}
        >
          #4CAF50 <Copy className="w-3 h-3" />
        </span> を採用しています。この緑色は「新芽」「成長」「希望」を象徴しています。創業から3年目の2025年は、種から芽が出て、しっかりと根を張り、これから大きく成長していく時期です。
      </p>
      
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-5">
        <div 
          className="bg-[#22B6FF] text-white text-lg font-medium p-4 rounded-lg text-center w-full md:w-1/3 cursor-pointer"
          onClick={() => copyColorToClipboard("#22B6FF", "2022年（創業の年のカラー）")}
        >
          2022年（創業の年のカラー）<br/>#22B6FF <Copy className="w-4 h-4 inline ml-1" />
        </div>
        <div className="text-3xl text-gray-400 hidden md:block">→</div>
        <div className="text-3xl text-gray-400 md:hidden mx-auto">↓</div>
        <div 
          className="bg-[#2BBCFF] text-white text-lg font-medium p-4 rounded-lg text-center w-full md:w-1/3 cursor-pointer"
          onClick={() => copyColorToClipboard("#2BBCFF", "2025年（現在のカラー）")}
        >
          2025年（現在のカラー）<br/>#2BBCFF <Copy className="w-4 h-4 inline ml-1" />
        </div>
        <div className="text-3xl text-gray-400 hidden md:block">+</div>
        <div className="text-3xl text-gray-400 md:hidden mx-auto">+</div>
        <div 
          className="bg-[#4CAF50] text-white text-lg font-medium p-4 rounded-lg text-center w-full md:w-1/3 cursor-pointer"
          onClick={() => copyColorToClipboard("#4CAF50", "2025年（特別アクセント）")}
        >
          2025年（特別アクセント）<br/>#4CAF50 <Copy className="w-4 h-4 inline ml-1" />
        </div>
      </div>
      
      <p className="text-lg leading-relaxed">
        海の青から始まり、陸の緑を経て、やがて空へ—自然界の成長過程をブランドの成長に重ね合わせています。この緑は創業者がインスピレーションを得た公園の若葉の色を基にしています。
      </p>
    </div>
  );
};

export default SpecialYearColorExplanation;
