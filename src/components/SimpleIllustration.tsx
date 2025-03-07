
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Users, Target, Zap } from 'lucide-react';

interface SimpleIllustrationProps {
  className?: string;
}

const SimpleIllustration: React.FC<SimpleIllustrationProps> = ({ className }) => {
  // アニメーションバリアント
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const spinVariants = {
    spin: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const colors = {
    primary: "#0EA5E9",
    idea: "#F97316",
    tech: "#8B5CF6",
    community: "#22C55E",
    growth: "#EF4444"
  };

  return (
    <motion.div
      className={`w-full max-w-2xl mx-auto ${className}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative w-full h-[400px] rounded-3xl bg-gradient-to-br from-sky-50 to-blue-100 p-6 overflow-hidden">
        {/* 背景の装飾要素 */}
        <motion.div
          className="absolute right-10 top-10 w-40 h-40 rounded-full bg-blue-200 opacity-20"
          variants={spinVariants}
          animate="spin"
        />
        <motion.div
          className="absolute left-20 bottom-20 w-32 h-32 rounded-full bg-purple-200 opacity-20"
          variants={spinVariants}
          animate="spin"
        />

        {/* タイトル */}
        <motion.h2
          className="text-2xl font-bold text-center text-blue-600 mb-8 relative z-10"
          variants={itemVariants}
        >
          可能性を広げる社会をつくる
        </motion.h2>

        {/* 中央の要素 - 個人 */}
        <motion.div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          variants={pulseVariants}
          animate="pulse"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 shadow-lg flex items-center justify-center">
            <Users size={40} color="white" />
          </div>
          <p className="text-center mt-2 font-medium text-blue-600 whitespace-nowrap">一人ひとり</p>
        </motion.div>

        {/* アイデア */}
        <motion.div
          className="absolute left-[20%] top-[30%] transform -translate-x-1/2 -translate-y-1/2 z-10"
          variants={floatVariants}
          animate="float"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 shadow-lg flex items-center justify-center">
            <Sparkles size={30} color="white" />
          </div>
          <p className="text-center mt-2 font-medium text-orange-500 whitespace-nowrap">アイデア</p>
        </motion.div>

        {/* テクノロジー */}
        <motion.div
          className="absolute right-[20%] top-[30%] transform translate-x-1/2 -translate-y-1/2 z-10"
          variants={floatVariants}
          animate="float"
          transition={{ delay: 0.5 }}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-300 to-purple-500 shadow-lg flex items-center justify-center">
            <Zap size={30} color="white" />
          </div>
          <p className="text-center mt-2 font-medium text-purple-500 whitespace-nowrap">テクノロジー</p>
        </motion.div>

        {/* つながり */}
        <motion.div
          className="absolute left-[20%] bottom-[20%] transform -translate-x-1/2 translate-y-1/2 z-10"
          variants={floatVariants}
          animate="float"
          transition={{ delay: 1 }}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-300 to-green-500 shadow-lg flex items-center justify-center">
            <Users size={30} color="white" />
          </div>
          <p className="text-center mt-2 font-medium text-green-500 whitespace-nowrap">つながり</p>
        </motion.div>

        {/* 成長 */}
        <motion.div
          className="absolute right-[20%] bottom-[20%] transform translate-x-1/2 translate-y-1/2 z-10"
          variants={floatVariants}
          animate="float"
          transition={{ delay: 1.5 }}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-300 to-red-500 shadow-lg flex items-center justify-center">
            <Rocket size={30} color="white" />
          </div>
          <p className="text-center mt-2 font-medium text-red-500 whitespace-nowrap">成長</p>
        </motion.div>

        {/* 接続線 */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
          <motion.path
            d="M140,150 L200,200"
            stroke={colors.idea}
            strokeWidth="2"
            strokeDasharray="5 5"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { 
                pathLength: 1, 
                opacity: 1,
                transition: { duration: 1, delay: 0.5 }
              }
            }}
          />
          <motion.path
            d="M260,150 L200,200"
            stroke={colors.tech}
            strokeWidth="2"
            strokeDasharray="5 5"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { 
                pathLength: 1, 
                opacity: 1,
                transition: { duration: 1, delay: 0.7 }
              }
            }}
          />
          <motion.path
            d="M140,250 L200,200"
            stroke={colors.community}
            strokeWidth="2"
            strokeDasharray="5 5"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { 
                pathLength: 1, 
                opacity: 1,
                transition: { duration: 1, delay: 0.9 }
              }
            }}
          />
          <motion.path
            d="M260,250 L200,200"
            stroke={colors.growth}
            strokeWidth="2"
            strokeDasharray="5 5"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { 
                pathLength: 1, 
                opacity: 1,
                transition: { duration: 1, delay: 1.1 }
              }
            }}
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default SimpleIllustration;
