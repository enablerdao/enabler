
import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { pulseVariants } from '../simple-illustration/animation-variants';

interface ServiceETAProps {
  eta: string;
}

export const ServiceETA: React.FC<ServiceETAProps> = ({ eta }) => {
  return (
    <div className="flex items-center mb-4 bg-gray-50 rounded-md p-2 border border-gray-100">
      <motion.div
        variants={pulseVariants}
        animate="pulse"
        className="text-enabler-500 mr-2"
      >
        <Clock size={14} />
      </motion.div>
      <div>
        <p className="text-xs text-gray-500">次のリリース:</p>
        <p className="text-sm font-medium">{eta}</p>
      </div>
    </div>
  );
};
