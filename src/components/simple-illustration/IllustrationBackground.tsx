
import React from 'react';
import { motion } from 'framer-motion';
import { spinVariants } from './animation-variants';

const IllustrationBackground: React.FC = () => {
  return (
    <>
      <motion.div
        className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-blue-200 opacity-20 blur-md"
        variants={spinVariants}
        animate="spin"
        custom={20}
      />
      <motion.div
        className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-purple-200 opacity-20 blur-md"
        variants={spinVariants}
        animate="spin"
        custom={25}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-blue-100/30" />
      <div className="absolute w-full h-full bg-grid-pattern opacity-5" />
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-blue-100/50 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-100/50 to-transparent" />
    </>
  );
};

export default IllustrationBackground;
