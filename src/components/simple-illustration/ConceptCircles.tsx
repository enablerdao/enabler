
import React from 'react';
import { motion } from 'framer-motion';

const ConceptCircles: React.FC = () => {
  return (
    <>
      {/* Four surrounding circles with animation */}
      <motion.circle 
        cx="250" 
        cy="200" 
        r="65" 
        fill="url(#ideaGradient)" 
        filter="url(#dropShadow)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.circle 
        cx="550" 
        cy="200" 
        r="65" 
        fill="url(#techGradient)" 
        filter="url(#dropShadow)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      <motion.circle 
        cx="250" 
        cy="400" 
        r="65" 
        fill="url(#connectGradient)" 
        filter="url(#dropShadow)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      <motion.circle 
        cx="550" 
        cy="400" 
        r="65" 
        fill="url(#growthGradient)" 
        filter="url(#dropShadow)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      
      {/* Center Circle with animation */}
      <motion.circle 
        cx="400" 
        cy="300" 
        r="80" 
        fill="url(#centerGradient)" 
        filter="url(#dropShadow)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      />
    </>
  );
};

export default ConceptCircles;
