
import React from 'react';
import { motion } from 'framer-motion';
import { spinVariants } from './animation-variants';

const IllustrationBackground: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100/30" />
      
      <motion.div
        className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-blue-200 opacity-20 blur-xl"
        variants={spinVariants}
        animate="spin"
        custom={45}
      />
      <motion.div
        className="absolute -left-16 -bottom-16 w-36 h-36 rounded-full bg-purple-200 opacity-20 blur-xl"
        variants={spinVariants}
        animate="spin"
        custom={50}
      />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent)]" />
    </>
  );
};

export default IllustrationBackground;
