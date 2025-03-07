
import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from './animation-variants';
import IllustrationBackground from './IllustrationBackground';
import ConnectingLines from './ConnectingLines';
import ConceptNode from './ConceptNode';
import { colors } from './constants';

interface SimpleIllustrationProps {
  className?: string;
}

const SimpleIllustration: React.FC<SimpleIllustrationProps> = ({ className }) => {
  return (
    <motion.div
      className={`w-full max-w-2xl mx-auto ${className}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative w-full h-[440px] rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100/30 p-6 overflow-hidden shadow-md">
        <IllustrationBackground />
        
        {/* タイトル */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-10 relative z-10"
          variants={itemVariants}
        >
          可能性を広げる社会をつくる
        </motion.h2>

        {/* 中央の要素 - 個人 */}
        <ConceptNode 
          type="center"
          icon="Users"
          label="一人ひとり"
          color={colors.primary}
          position="center"
        />

        {/* アイデア */}
        <ConceptNode 
          type="satellite"
          icon="Sparkles"
          label="アイデア"
          color={colors.idea}
          position="topLeft"
        />

        {/* テクノロジー */}
        <ConceptNode 
          type="satellite"
          icon="Zap"
          label="テクノロジー"
          color={colors.tech}
          position="topRight"
        />

        {/* つながり */}
        <ConceptNode 
          type="satellite"
          icon="Users"
          label="つながり"
          color={colors.community}
          position="bottomLeft"
        />

        {/* 成長 */}
        <ConceptNode 
          type="satellite"
          icon="Rocket"
          label="成長"
          color={colors.growth}
          position="bottomRight"
        />

        {/* 接続線 */}
        <ConnectingLines colors={colors} />
      </div>
    </motion.div>
  );
};

export default SimpleIllustration;
