
import React from 'react';
import { motion } from 'framer-motion';
import { spinVariants } from './animation-variants';

const IllustrationBackground: React.FC = () => {
  // Fibonacci sequence for positioning elements
  const fib = [1, 1, 2, 3, 5, 8, 13, 21, 34];
  
  return (
    <>
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100/20" />
      
      {/* Fibonacci-based background elements */}
      {fib.slice(2, 7).map((num, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-20 blur-xl"
          style={{
            width: `${num * 5}px`,
            height: `${num * 5}px`,
            background: `rgba(${120 + index * 20}, ${150 + index * 10}, ${255 - index * 5}, 0.15)`,
            left: `${((index * 89) % 100) + 10}%`,
            top: `${((index * 55) % 100) + 5}%`,
            transformOrigin: 'center',
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.15, 0.2, 0.15],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5
          }}
        />
      ))}
      
      {/* Top-right circular blur */}
      <motion.div
        className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-purple-200 opacity-15 blur-xl"
        variants={spinVariants}
        animate="spin"
        custom={55}
      />
      
      {/* Bottom-left circular blur */}
      <motion.div
        className="absolute -left-16 -bottom-16 w-36 h-36 rounded-full bg-green-200 opacity-15 blur-xl"
        variants={spinVariants}
        animate="spin"
        custom={60}
      />
      
      {/* Fibonacci spiral element */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-5" 
        viewBox="0 0 400 400" 
        fill="none"
      >
        <motion.path
          d="M200,200 
          C200,200 200,187 213,187 
          C226,187 226,174 226,161 
          C226,148 239,148 252,148 
          C265,148 265,135 265,122 
          C265,109 278,109 291,109 
          C304,109 304,96 304,83"
          stroke="#5B9CF1"
          strokeWidth="2"
          fill="none"
          strokeDasharray="320"
          initial={{ strokeDashoffset: 320 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
          d="M200,200 
          C200,200 200,213 187,213 
          C174,213 174,226 174,239 
          C174,252 161,252 148,252 
          C135,252 135,265 135,278 
          C135,291 122,291 109,291 
          C96,291 96,304 96,317"
          stroke="#5B9CF1"
          strokeWidth="2"
          fill="none"
          strokeDasharray="320"
          initial={{ strokeDashoffset: 320 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>
      
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.9),transparent)]" />
    </>
  );
};

export default IllustrationBackground;
