
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ 
  isOpen, 
  onClick,
  'aria-expanded': ariaExpanded,
  'aria-controls': ariaControls
}) => {
  return (
    <motion.button
      className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none focus:ring-2 focus:ring-enabler-500 rounded-md"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      whileTap={{ scale: 0.9 }}
    >
      <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
      <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
      <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
    </motion.button>
  );
};

export default MobileMenuButton;
