
import React from 'react';
import { motion } from 'framer-motion';
import { spinVariants } from './animation-variants';

const IllustrationBackground: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default IllustrationBackground;
