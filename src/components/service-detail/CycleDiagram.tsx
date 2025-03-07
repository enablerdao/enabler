
import React from 'react';
import { Target, PlayCircle, BarChart2, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

interface CycleDiagramProps {
  color: string;
}

export const CycleDiagram = ({ color }: CycleDiagramProps) => {
  // アニメーションバリアント
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="w-full max-w-md mx-auto my-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative w-full h-80">
        {/* 中心の円 */}
        <motion.div 
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full"
          style={{ border: `2px dashed ${color}`, backgroundColor: `${color}10` }}
          animate={{ 
            rotate: 360,
            transition: { duration: 40, ease: "linear", repeat: Infinity }
          }}
        />
        
        {/* 計画 */}
        <motion.div 
          variants={itemVariants}
          className="absolute left-1/2 top-0 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2`} 
                style={{ backgroundColor: `${color}20`, border: `2px solid ${color}` }}>
              <Target size={28} color={color} />
            </div>
            <span className="font-semibold" style={{ color }}>計画</span>
          </div>
        </motion.div>
        
        {/* 実行 */}
        <motion.div 
          variants={itemVariants}
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
        >
          <div className="flex flex-col items-center">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2`} 
                style={{ backgroundColor: `${color}20`, border: `2px solid ${color}` }}>
              <PlayCircle size={28} color={color} />
            </div>
            <span className="font-semibold" style={{ color }}>実行</span>
          </div>
        </motion.div>
        
        {/* 測定 */}
        <motion.div 
          variants={itemVariants}
          className="absolute left-1/2 bottom-0 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2`} 
                style={{ backgroundColor: `${color}20`, border: `2px solid ${color}` }}>
              <BarChart2 size={28} color={color} />
            </div>
            <span className="font-semibold" style={{ color }}>測定</span>
          </div>
        </motion.div>
        
        {/* 改善 */}
        <motion.div 
          variants={itemVariants}
          className="absolute left-0 top-1/2 transform -translate-y-1/2"
        >
          <div className="flex flex-col items-center">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2`} 
                style={{ backgroundColor: `${color}20`, border: `2px solid ${color}` }}>
              <RefreshCw size={28} color={color} />
            </div>
            <span className="font-semibold" style={{ color }}>改善</span>
          </div>
        </motion.div>
        
        {/* 中心に回転するアイコン */}
        <motion.div 
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${color}30` }}
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            transition: { 
              rotate: { duration: 20, ease: "linear", repeat: Infinity },
              scale: { duration: 3, ease: "easeInOut", repeat: Infinity }
            }
          }}
        >
          <motion.div
            animate={{ 
              rotate: [0, -360],
              transition: { duration: 20, ease: "linear", repeat: Infinity }
            }}
          >
            <RefreshCw size={32} color={color} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
