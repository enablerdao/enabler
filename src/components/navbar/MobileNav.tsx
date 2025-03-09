
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavLink } from './types';
import { mobileMenuVariants, mobileItemVariants } from './animation-variants';

interface MobileNavProps {
  isOpen: boolean;
  navLinks: NavLink[];
  onItemClick: () => void;
  menuRef: React.RefObject<HTMLDivElement>;
}

const MobileNav: React.FC<MobileNavProps> = ({ 
  isOpen, 
  navLinks, 
  onItemClick,
  menuRef 
}) => {
  return (
    <div ref={menuRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden overflow-hidden bg-white shadow-md"
          >
            <motion.div className="container mx-auto px-6 py-4 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  custom={index}
                  variants={mobileItemVariants}
                  whileHover={{ x: 5 }}
                  className="border-b border-gray-100 pb-2"
                >
                  {link.isPage ? (
                    <Link
                      to={link.href}
                      className="block text-gray-700 hover:text-enabler-600 text-sm font-medium py-2 flex items-center justify-between"
                      onClick={onItemClick}
                    >
                      <span className="flex items-center">
                        <Sparkles className="mr-2 text-enabler-500" size={14} />
                        {link.name}
                      </span>
                      <ChevronRight size={16} className="text-enabler-500" />
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="block text-gray-700 hover:text-enabler-600 text-sm font-medium py-2 flex items-center"
                      onClick={onItemClick}
                    >
                      <Sparkles className="mr-2 text-enabler-500" size={14} />
                      {link.name}
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
