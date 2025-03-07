
import React from 'react';
import { motion } from 'framer-motion';

interface ConnectingLinesProps {
  colors: {
    idea: string;
    tech: string;
    community: string;
    growth: string;
  };
}

const ConnectingLines: React.FC<ConnectingLinesProps> = ({ colors }) => {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
      <motion.path
        d="M140,150 L200,200"
        stroke={colors.idea}
        strokeWidth="2"
        strokeDasharray="5 5"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { 
            pathLength: 1, 
            opacity: 1,
            transition: { duration: 1, delay: 0.5 }
          }
        }}
      />
      <motion.path
        d="M260,150 L200,200"
        stroke={colors.tech}
        strokeWidth="2"
        strokeDasharray="5 5"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { 
            pathLength: 1, 
            opacity: 1,
            transition: { duration: 1, delay: 0.7 }
          }
        }}
      />
      <motion.path
        d="M140,250 L200,200"
        stroke={colors.community}
        strokeWidth="2"
        strokeDasharray="5 5"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { 
            pathLength: 1, 
            opacity: 1,
            transition: { duration: 1, delay: 0.9 }
          }
        }}
      />
      <motion.path
        d="M260,250 L200,200"
        stroke={colors.growth}
        strokeWidth="2"
        strokeDasharray="5 5"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { 
            pathLength: 1, 
            opacity: 1,
            transition: { duration: 1, delay: 1.1 }
          }
        }}
      />
    </svg>
  );
};

export default ConnectingLines;
