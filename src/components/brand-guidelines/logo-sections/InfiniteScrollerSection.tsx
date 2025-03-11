
import React from 'react';
import { motion } from 'framer-motion';
import InfiniteLogoScroller from '../infinite-scroller/InfiniteLogoScroller';

const InfiniteScrollerSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-100"
    >
      <h3 className="text-lg font-semibold mb-4 text-indigo-900">毎年進化するロゴデザイン（2022年〜）</h3>
      <p className="text-sm text-indigo-700 mb-4">フィボナッチ数列に基づき、横スクロールで無限にロゴの変化を確認できます</p>
      <div className="h-[350px] md:h-[400px]">
        <InfiniteLogoScroller />
      </div>
    </motion.div>
  );
};

export default InfiniteScrollerSection;
