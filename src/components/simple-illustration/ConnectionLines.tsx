
import React from 'react';
import { motion } from 'framer-motion';

const ConnectionLines: React.FC = () => {
  return (
    <>
      {/* Connection lines with animation */}
      <motion.path 
        d="M350 275 C325 225, 300 200, 250 200" 
        stroke="#ff9d42" 
        strokeWidth="2" 
        fill="none" 
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.path 
        d="M250 200 C300 200, 325 225, 350 275" 
        stroke="#ff9d42" 
        strokeWidth="2" 
        fill="none" 
        strokeLinecap="round" 
        strokeOpacity="0.4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
      <motion.circle 
        cx="350" 
        cy="275" 
        r="4" 
        fill="#ff9d42"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      />
      
      <motion.path 
        d="M450 275 C475 225, 500 200, 550 200" 
        stroke="#aa7df3" 
        strokeWidth="2" 
        fill="none" 
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />
      <motion.path 
        d="M550 200 C500 200, 475 225, 450 275" 
        stroke="#aa7df3" 
        strokeWidth="2" 
        fill="none" 
        strokeLinecap="round" 
        strokeOpacity="0.4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
      <motion.circle 
        cx="450" 
        cy="275" 
        r="4" 
        fill="#aa7df3"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.9 }}
      />
      
      <motion.path 
        d="M350 325 C325 375, 300 400, 250 400" 
        stroke="#5fe3a1" 
        strokeWidth="2" 
        fill="none" 
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      />
      <motion.path 
        d="M250 400 C300 400, 325 375, 350 325" 
        stroke="#5fe3a1" 
        strokeWidth="2" 
        fill="none" 
        strokeLinecap="round" 
        strokeOpacity="0.4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 1, delay: 1 }}
      />
      <motion.circle 
        cx="350" 
        cy="325" 
        r="4" 
        fill="#5fe3a1"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1.1 }}
      />
      
      <motion.path 
        d="M450 325 C475 375, 500 400, 550 400" 
        stroke="#ff7d6f" 
        strokeWidth="2" 
        fill="none" 
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      />
      <motion.path 
        d="M550 400 C500 400, 475 375, 450 325" 
        stroke="#ff7d6f" 
        strokeWidth="2" 
        fill="none" 
        strokeLinecap="round" 
        strokeOpacity="0.4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 1, delay: 1.2 }}
      />
      <motion.circle 
        cx="450" 
        cy="325" 
        r="4" 
        fill="#ff7d6f"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1.3 }}
      />
    </>
  );
};

export default ConnectionLines;
