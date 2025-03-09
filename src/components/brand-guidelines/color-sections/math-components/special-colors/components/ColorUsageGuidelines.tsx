
import React from 'react';
import { motion } from 'framer-motion';

const ColorUsageGuidelines: React.FC = () => {
  // Get current year to display in the guidelines
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.div 
      className="mt-6 flex flex-col md:flex-row gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-blue-50 p-4 rounded-lg flex-1">
        <h5 className="font-medium mb-2">基本カラーの使い方（{currentYear}年版）</h5>
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="font-medium">基本カラー</span>：メインのブランドカラーとして、ロゴ、アイコン、見出しなどに使用</li>
          <li><span className="font-medium">注意点</span>：創業年（2022年）の場合、基本カラーのみ存在し、特別アクセントカラーはありません</li>
          <li>ブランドの一貫性を保ちながら、毎年少しずつ進化するデザインを実現します</li>
        </ul>
      </div>
      
      <div className="bg-green-50 p-4 rounded-lg flex-1">
        <h5 className="font-medium mb-2">特別アクセントカラーの特徴（{currentYear}年現在）</h5>
        <ul className="list-disc pl-5 space-y-2">
          <li>フィボナッチ数列の年（1,2,3,5,8年目...）に節目として新しく設定</li>
          <li>創業年（2022年）には特別アクセントカラーはなく、2025年から始まります</li>
          <li>一度設定された特別アクセントカラーは次の節目が来るまで固定</li>
          <li>自然界の黄金角（約137.5度）に基づく色相で設計</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ColorUsageGuidelines;
