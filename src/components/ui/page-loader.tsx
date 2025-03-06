
import React from 'react';
import { motion } from 'framer-motion';
import LoadingIndicator from './loading-indicator';

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
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="relative w-16 h-16 bg-blue-500 rounded-full overflow-hidden"
        >
          <div className="absolute bottom-0 w-full h-3/5 bg-white rounded-t-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 rounded-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
            </div>
          </div>
        </motion.div>
        
        <div className="flex space-x-2">
          <LoadingIndicator variant="bell" size="sm" />
          <motion.p 
            className="text-lg font-medium text-gray-700"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            読み込み中...
          </motion.p>
          <LoadingIndicator variant="bell" size="sm" />
        </div>
      </div>
    </motion.div>
  );
};

export default PageLoader;
