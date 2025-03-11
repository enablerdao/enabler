
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavLink } from './types';
import { mobileMenuVariants, mobileItemVariants } from './animation-variants';
import LanguageSwitcher from './LanguageSwitcher';

interface MobileNavProps {
  isOpen: boolean;
  primaryNavLinks: NavLink[];
  secondaryNavLinks: NavLink[];
  onItemClick: () => void;
  onServiceClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  onContactClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  menuRef: React.RefObject<HTMLDivElement>;
  id?: string;
  'aria-hidden'?: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ 
  isOpen, 
  primaryNavLinks,
  secondaryNavLinks,
  onItemClick,
  onServiceClick,
  onContactClick,
  menuRef,
  id,
  'aria-hidden': ariaHidden
}) => {
  const allLinks = [...primaryNavLinks, ...secondaryNavLinks];
  
  const handleNavLinkClick = (link: NavLink, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (link.name === 'サービス' || link.name === 'Services') {
      onServiceClick?.(e);
    } else if (link.name === 'お問い合わせ' || link.name === 'Contact') {
      onContactClick?.(e);
    } else {
      onItemClick();
    }
  };
  
  return (
    <div ref={menuRef} id={id} aria-hidden={ariaHidden}>
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
              {/* Primary Navigation Links */}
              {primaryNavLinks.map((link, index) => (
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
                      onClick={(e) => handleNavLinkClick(link, e)}
                    >
                      <Sparkles className="mr-2 text-enabler-500" size={14} />
                      {link.name}
                    </a>
                  )}
                </motion.div>
              ))}
              
              {/* Section separator */}
              <motion.div
                custom={primaryNavLinks.length}
                variants={mobileItemVariants}
                className="pt-2 pb-1"
              >
                <div className="flex items-center">
                  <List size={18} className="text-enabler-600 mr-2" />
                  <h3 className="text-sm font-semibold text-gray-700">サイトマップ</h3>
                </div>
              </motion.div>
              
              {/* Secondary Navigation Links */}
              {secondaryNavLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  custom={primaryNavLinks.length + 1 + index}
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
                        <ChevronRight className="mr-2 text-enabler-500" size={14} />
                        {link.name}
                      </span>
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="block text-gray-700 hover:text-enabler-600 text-sm font-medium py-2 flex items-center"
                      onClick={(e) => handleNavLinkClick(link, e)}
                    >
                      <ChevronRight className="mr-2 text-enabler-500" size={14} />
                      {link.name}
                    </a>
                  )}
                </motion.div>
              ))}
              
              {/* Full sitemap link */}
              <motion.div
                custom={allLinks.length + 2}
                variants={mobileItemVariants}
                className="pt-2 border-b border-gray-100 pb-2"
              >
                <Link
                  to="/sitemap"
                  className="block text-enabler-600 hover:text-enabler-800 text-sm font-medium py-2 flex items-center"
                  onClick={onItemClick}
                >
                  <List className="mr-2" size={16} />
                  詳細サイトマップを見る
                </Link>
              </motion.div>
              
              {/* Language Switcher in mobile menu */}
              <motion.div 
                custom={allLinks.length + 3}
                variants={mobileItemVariants}
                className="pt-2"
              >
                <div className="flex justify-center">
                  <LanguageSwitcher />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
