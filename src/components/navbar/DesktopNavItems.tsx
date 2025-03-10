
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, Menu, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavLink } from './types';
import { menuItemVariants } from './animation-variants';

interface DesktopNavItemsProps {
  primaryNavLinks: NavLink[];
  secondaryNavLinks: NavLink[];
}

const DesktopNavItems: React.FC<DesktopNavItemsProps> = ({ 
  primaryNavLinks, 
  secondaryNavLinks 
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="hidden md:flex items-center space-x-8">
      {/* Primary Nav Links */}
      {primaryNavLinks.map((link, index) => (
        <motion.div
          key={link.name}
          initial="hidden"
          animate="visible"
          custom={index}
          variants={menuItemVariants}
          whileHover="hover"
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          className="relative"
        >
          {link.isPage ? (
            <Link
              to={link.href}
              className="text-gray-700 transition-all duration-200 text-sm font-medium flex items-center gap-1"
            >
              {hoveredIndex === index && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-enabler-500"
                >
                  <Sparkles size={14} />
                </motion.span>
              )}
              {link.name}
              {hoveredIndex === index && (
                <motion.span
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight size={14} />
                </motion.span>
              )}
            </Link>
          ) : (
            <a
              href={link.href}
              className="text-gray-700 transition-all duration-200 text-sm font-medium flex items-center gap-1"
            >
              {hoveredIndex === index && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-enabler-500"
                >
                  <Sparkles size={14} />
                </motion.span>
              )}
              {link.name}
            </a>
          )}
          <motion.div
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-enabler-500 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ originX: 0 }}
          />
        </motion.div>
      ))}

      {/* Sitemap Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <motion.button
          initial="hidden"
          animate="visible"
          custom={primaryNavLinks.length}
          variants={menuItemVariants}
          whileHover="hover"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="text-gray-700 transition-all duration-200 text-sm font-medium flex items-center gap-1"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
        >
          <List size={18} className="text-gray-700" />
          <span className="ml-1">サイトマップ</span>
        </motion.button>
        
        {isDropdownOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-50 py-3 px-4"
          >
            <h3 className="text-sm font-semibold mb-2 text-gray-800 border-b pb-2">サイトマップ</h3>
            <div className="grid grid-cols-1 gap-2 pt-1">
              {secondaryNavLinks.map((link, index) => (
                <div key={link.name}>
                  {link.isPage ? (
                    <Link
                      to={link.href}
                      className="text-gray-700 hover:text-enabler-600 text-sm flex items-center gap-1"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <ChevronRight size={14} className="text-enabler-500" />
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-700 hover:text-enabler-600 text-sm flex items-center gap-1"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <ChevronRight size={14} className="text-enabler-500" />
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              
              <div className="mt-2 pt-2 border-t">
                <Link
                  to="/sitemap"
                  className="text-enabler-600 hover:text-enabler-800 text-sm font-medium flex items-center gap-1"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <List size={14} className="text-enabler-600" />
                  詳細サイトマップを見る
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DesktopNavItems;
