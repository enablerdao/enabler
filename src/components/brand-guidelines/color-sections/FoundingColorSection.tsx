
import React from 'react';
import { ColorInfo } from '../color-utils/types';
import { motion } from 'framer-motion';

interface FoundingColorSectionProps {
  foundingYearColor: ColorInfo;
}

const FoundingColorSection: React.FC<FoundingColorSectionProps> = ({ foundingYearColor }) => {
  return (
    <div className="mb-6 md:mb-10">
      <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-5 border-b pb-2">創業カラーの由来</h3>
      
      <div className="bg-gray-50 p-5 rounded-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <motion.div
            className="h-32 w-32 md:h-40 md:w-40 rounded-lg flex-shrink-0"
            style={{ backgroundColor: foundingYearColor.hex }}
            animate={{
              boxShadow: [
                '0 0 0 rgba(34, 182, 255, 0)',
                '0 0 20px rgba(34, 182, 255, 0.5)',
                '0 0 0 rgba(34, 182, 255, 0)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="flex-1">
            <h4 className="text-lg font-semibold mb-3">ディープブルー ({foundingYearColor.hex})</h4>
            <p className="text-base leading-relaxed">
              創業メンバーが「何色にする？」と議論したとき、空と海を見上げて思いついたのがこの色。
              「人の可能性って、空や海みたいに広いよね」というシンプルな発想から生まれました。
              （実は最初はピンク推しのメンバーもいましたが、熱い議論の末に青に決まりました）
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundingColorSection;
