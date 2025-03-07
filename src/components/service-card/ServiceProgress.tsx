
import React from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceProgressProps {
  progress: number;
  activity: string;
}

export const ServiceProgress: React.FC<ServiceProgressProps> = ({ progress, activity }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <div className="text-xs text-gray-600 flex items-center">
          <motion.div
            animate={{
              rotate: 360,
              transition: { duration: 2, repeat: Infinity, ease: "linear" }
            }}
          >
            <Bot size={12} className="mr-1" />
          </motion.div>
          <span>{activity}</span>
        </div>
        <span className="text-xs font-medium text-enabler-600">{progress}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-1.5">
        <motion.div 
          className={cn("h-1.5 rounded-full", progress > 80 ? "bg-green-500" : progress > 40 ? "bg-amber-500" : "bg-enabler-500")}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
    </div>
  );
};
