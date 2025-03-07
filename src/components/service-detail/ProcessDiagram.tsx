
import React from 'react';
import { ArrowRight, Database, BarChart3, LineChart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProcessDiagramProps {
  color: string;
}

export const ProcessDiagram = ({ color }: ProcessDiagramProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const arrowVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: "100%", opacity: 1, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      className="w-full max-w-xl mx-auto my-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <motion.div variants={itemVariants} className="flex flex-col items-center mb-4 md:mb-0">
          <div className={`w-20 h-20 rounded-lg flex items-center justify-center bg-opacity-20 bg-${color}-100 mb-3`} style={{ backgroundColor: `${color}20` }}>
            <Database size={32} color={color} />
          </div>
          <span className="font-semibold text-lg" style={{ color }}>収集</span>
        </motion.div>
        
        <motion.div variants={arrowVariants} className="hidden md:block w-16 h-0.5 mx-2" style={{ backgroundColor: color }}>
          <div className="relative">
            <ArrowRight className="absolute -top-2 -right-2" size={16} color={color} />
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex flex-col items-center mb-4 md:mb-0">
          <div className={`w-20 h-20 rounded-lg flex items-center justify-center bg-opacity-20 bg-${color}-100 mb-3`} style={{ backgroundColor: `${color}20` }}>
            <BarChart3 size={32} color={color} />
          </div>
          <span className="font-semibold text-lg" style={{ color }}>分析</span>
        </motion.div>
        
        <motion.div variants={arrowVariants} className="hidden md:block w-16 h-0.5 mx-2" style={{ backgroundColor: color }}>
          <div className="relative">
            <ArrowRight className="absolute -top-2 -right-2" size={16} color={color} />
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex flex-col items-center mb-4 md:mb-0">
          <div className={`w-20 h-20 rounded-lg flex items-center justify-center bg-opacity-20 bg-${color}-100 mb-3`} style={{ backgroundColor: `${color}20` }}>
            <LineChart size={32} color={color} />
          </div>
          <span className="font-semibold text-lg" style={{ color }}>最適化</span>
        </motion.div>
        
        <motion.div variants={arrowVariants} className="hidden md:block w-16 h-0.5 mx-2" style={{ backgroundColor: color }}>
          <div className="relative">
            <ArrowRight className="absolute -top-2 -right-2" size={16} color={color} />
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex flex-col items-center">
          <div className={`w-20 h-20 rounded-lg flex items-center justify-center bg-opacity-20 bg-${color}-100 mb-3`} style={{ backgroundColor: `${color}20` }}>
            <Sparkles size={32} color={color} />
          </div>
          <span className="font-semibold text-lg" style={{ color }}>結果</span>
        </motion.div>
      </div>
    </motion.div>
  );
};
