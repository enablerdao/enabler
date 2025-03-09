
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { BookOpen, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const BrandAssetRules = () => {
  const doExamples = [
    "ロゴの周りに適切な余白を設ける",
    "公式カラーコードを使用する",
    "SVGまたはPNG形式で使用する",
  ];
  
  const dontExamples = [
    "ロゴを引き伸ばしたり変形させたりする",
    "ロゴカラーを勝手に変更する",
    "ロゴを低解像度で使用する",
  ];

  return (
    <MotionBox delay={800}>
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <BookOpen className="text-enabler-600 mr-3" size={24} />
          <h2 className="text-2xl font-bold text-gray-900">7. ブランド資産使用ルール</h2>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-subtle">
          <p className="text-lg mb-6">
            ロゴやブランドカラーを外部利用する場合は、公式のロゴファイル（SVG、PNG）を使用し、必ずガイドラインを遵守してください。独自解釈での変更はブランドの一貫性を損なう可能性があります。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <motion.div 
              className="bg-green-50 p-5 rounded-lg border border-green-100"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-medium text-green-800 mb-3 flex items-center">
                <span className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center text-green-700 mr-2">✓</span>
                推奨例
              </h3>
              <ul className="space-y-2">
                {doExamples.map((example, index) => (
                  <li key={`do-${index}`} className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-green-200 flex-shrink-0 flex items-center justify-center text-green-700 mr-2 mt-0.5">✓</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-red-50 p-5 rounded-lg border border-red-100"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-medium text-red-800 mb-3 flex items-center">
                <span className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center text-red-700 mr-2">×</span>
                避けるべき例
              </h3>
              <ul className="space-y-2">
                {dontExamples.map((example, index) => (
                  <li key={`dont-${index}`} className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-red-200 flex-shrink-0 flex items-center justify-center text-red-700 mr-2 mt-0.5">×</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400 flex"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AlertTriangle className="text-yellow-500 mr-3 flex-shrink-0" size={24} />
            <p className="text-sm">
              <span className="font-medium">お問い合わせ:</span> ブランドやロゴに関するご質問・利用申請は、以下までご連絡ください。<br />
              メール：brand@enabler.jp<br />
              専用フォーム：<a href="#" className="text-blue-600 underline">Webページへ</a>
            </p>
          </motion.div>
        </div>
      </section>
    </MotionBox>
  );
};

export default BrandAssetRules;
