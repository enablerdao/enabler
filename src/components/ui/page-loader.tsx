
import React from 'react';
import { motion } from 'framer-motion';

interface PageLoaderProps {
  isLoading: boolean;
}

const PageLoader = ({ isLoading }: PageLoaderProps) => {
  if (!isLoading) return null;
  
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div className="flex flex-col items-center space-y-6">
        <motion.div
          animate={{ 
            opacity: [0.5, 1, 0.5],
            scale: [0.98, 1, 0.98],
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="w-16 h-16"
        >
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="20" fill="#F5F5F7" />
            <path
              d="M24,14 A10,10 0 0,1 34,24 A10,10 0 0,1 24,34 A10,10 0 0,1 14,24 A10,10 0 0,1 24,14"
              stroke="#1D1D1F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="1 3"
            />
            <circle cx="24" cy="24" r="2" fill="#1D1D1F" />
          </svg>
        </motion.div>
        
        <motion.p 
          className="text-lg font-medium text-gray-700"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          読み込み中...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default PageLoader;
