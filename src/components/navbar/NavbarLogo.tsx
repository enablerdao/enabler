
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { logoVariants } from './animation-variants';
import LogoVariations from '../brand-guidelines/LogoVariations';

interface NavbarLogoProps {
  scrolled: boolean;
}

const NavbarLogo: React.FC<NavbarLogoProps> = ({ scrolled }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.div
      initial="normal"
      animate={scrolled ? "scrolled" : "normal"}
      variants={logoVariants}
      className="flex items-center"
    >
      <Link to="/" className="flex items-center">
        <div className={scrolled ? "w-64" : "w-80"}> {/* Increased from w-52/w-64 to w-64/w-80 (approximately 120% more) */}
          <LogoVariations variant="modern" size={scrolled ? "md" : "lg"} year={currentYear} />
        </div>
      </Link>
    </motion.div>
  );
};

export default NavbarLogo;
