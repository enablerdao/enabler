
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const navbarClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full',
    scrolled 
      ? 'bg-white/90 backdrop-blur-md shadow-subtle py-3' 
      : 'bg-transparent py-5'
  );

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '/blog', isPage: true },
    { name: 'Contact', href: '#contact' },
    // Removed "ブランド" item as requested
  ];

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      color: "#0ea5e9",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const logoVariants = {
    normal: { scale: 1 },
    scrolled: { 
      scale: 0.95,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial="normal"
            animate={scrolled ? "scrolled" : "normal"}
            variants={logoVariants}
          >
            <Link to="/" className="flex items-center space-x-2">
              <Logo size={scrolled ? 'sm' : 'md'} variant="svg" />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
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
          </div>

          <motion.button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsOpen(false)}
                >
                  <X />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

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
                        onClick={() => setIsOpen(false)}
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
                        onClick={() => setIsOpen(false)}
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
    </nav>
  );
};

export default Navbar;
