
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
        d="M110,125 L160,190"
        stroke={colors.idea}
        strokeWidth="2.5"
        strokeDasharray="6 4"
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { 
            pathLength: 1, 
            opacity: 1,
            transition: { duration: 1.2, delay: 0.5 }
          }
        }}
      />
      <motion.path
        d="M290,125 L180,190"
        stroke={colors.tech}
        strokeWidth="2.5"
        strokeDasharray="6 4"
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { 
            pathLength: 1, 
            opacity: 1,
            transition: { duration: 1.2, delay: 0.7 }
          }
        }}
      />
      <motion.path
        d="M110,275 L160,210"
        stroke={colors.community}
        strokeWidth="2.5"
        strokeDasharray="6 4"
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { 
            pathLength: 1, 
            opacity: 1,
            transition: { duration: 1.2, delay: 0.9 }
          }
        }}
      />
      <motion.path
        d="M290,275 L180,210"
        stroke={colors.growth}
        strokeWidth="2.5"
        strokeDasharray="6 4"
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { 
            pathLength: 1, 
            opacity: 1,
            transition: { duration: 1.2, delay: 1.1 }
          }
        }}
      />
    </svg>
  );
};

export default ConnectingLines;
