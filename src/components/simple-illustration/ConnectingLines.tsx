
import React from 'react';
import { motion } from 'framer-motion';
import { pathVariants } from './animation-variants';

interface ConnectingLinesProps {
  colors: {
    idea: string;
    tech: string;
    community: string;
    growth: string;
  };
}

const ConnectingLines: React.FC<ConnectingLinesProps> = ({ colors }) => {
  // Fibonacci sequence for path calculations
  const fib = [1, 1, 2, 3, 5, 8, 13, 21];
  
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
      {/* Line from center to top-left (Idea) */}
      <motion.path
        d="M200,200 C180,180 150,160 80,130"
        stroke={colors.idea}
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: fib[0] * 0.2 }}
      />

      {/* Line from center to top-right (Technology) */}
      <motion.path
        d="M200,200 C220,180 250,160 320,130"
        stroke={colors.tech}
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: fib[1] * 0.2 }}
      />

      {/* Line from center to bottom-left (Community) */}
      <motion.path
        d="M200,200 C180,220 150,240 80,265"
        stroke={colors.community}
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: fib[2] * 0.2 }}
      />

      {/* Line from center to bottom-right (Growth) */}
      <motion.path
        d="M200,200 C220,220 250,240 320,265"
        stroke={colors.growth}
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: fib[3] * 0.2 }}
      />
      
      {/* Fibonacci spiral decorative element */}
      <motion.path
        d="M200,200 Q210,190 220,190 Q230,190 230,180 Q230,170 240,170 Q250,170 250,160 Q250,150 260,150"
        stroke="rgba(66, 133, 244, 0.3)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="5,5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 2, delay: 2 }}
      />
      
      <motion.path
        d="M200,200 Q190,210 190,220 Q190,230 180,230 Q170,230 170,240 Q170,250 160,250 Q150,250 150,260"
        stroke="rgba(66, 133, 244, 0.3)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="5,5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 2, delay: 2.5 }}
      />
    </svg>
  );
};

export default ConnectingLines;
