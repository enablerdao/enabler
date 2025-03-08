
import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from './animation-variants';

const IllustrationTitle: React.FC = () => {
  return (
    <motion.div className="text-center mb-10 relative z-10" variants={itemVariants}>
      <h2 className="text-3xl md:text-4xl font-light text-[#1d1d1f] drop-shadow-sm">
        可能性を広げる社会をつくる
      </h2>
      <p className="text-sm md:text-lg font-light text-[#86868b] mt-1">
        Creating a society that expands possibilities
      </p>
    </motion.div>
  );
};

export default IllustrationTitle;
