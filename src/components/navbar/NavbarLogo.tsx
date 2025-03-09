
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../Logo';
import { logoVariants } from './animation-variants';

interface NavbarLogoProps {
  scrolled: boolean;
}

const NavbarLogo: React.FC<NavbarLogoProps> = ({ scrolled }) => {
  return (
    <motion.div
      initial="normal"
      animate={scrolled ? "scrolled" : "normal"}
      variants={logoVariants}
    >
      <Link to="/" className="flex items-center space-x-2">
        <Logo size={scrolled ? 'sm' : 'md'} variant="svg" />
      </Link>
    </motion.div>
  );
};

export default NavbarLogo;
