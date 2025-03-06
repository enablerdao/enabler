
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardLoaderProps {
  count?: number;
}

const ServiceCardLoader = ({ count = 3 }: ServiceCardLoaderProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
        >
          <div className="h-40 bg-gradient-to-r from-blue-50 to-sky-50 animate-pulse" />
          <div className="p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 animate-pulse" />
              <div className="h-6 w-2/3 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-100 rounded animate-pulse" />
              <div className="h-4 bg-gray-100 rounded animate-pulse w-5/6" />
              <div className="h-4 bg-gray-100 rounded animate-pulse w-4/6" />
            </div>
            <div className="pt-2">
              <div className="h-10 bg-blue-50 rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceCardLoader;
