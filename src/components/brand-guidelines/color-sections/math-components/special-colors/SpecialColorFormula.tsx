
import React from 'react';
import { motion } from 'framer-motion';

const SpecialColorFormula: React.FC = () => {
  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-3 mt-5">特別カラーの計算方法</h4>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <pre className="text-sm md:text-base font-mono overflow-x-auto p-4 bg-gray-100 rounded-lg mb-2">
{`H（色相）= (f × 137.5) mod 360
S（彩度）= 0.75（固定）
V（明度）= 1（固定）

※ f はフィボナッチ数の順序（1,2,3…）です。`}
          </pre>
          <p className="text-sm text-gray-700">
            この方法で得られる色は、「黄金角（137.5度）」という自然界の最も美しい角度を利用しているため、自然界に調和する美しい色が得られます。ひまわりの種やパイナップルの模様と同じ法則です。自然の美しさに学ぶ—それも私たちの大切にしていることです。
          </p>
        </motion.div>
        
        <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-100 text-blue-700 italic text-sm">
          「毎年同じだと飽きちゃうよね」ということで、節目の年には特別な色も登場します。
          2025年は緑色 (#4CAF50)、これからもフィボナッチ数列の年（1,2,3,5,8...）に
          新しい色が加わります。
        </div>
      </div>
    </div>
  );
};

export default SpecialColorFormula;
