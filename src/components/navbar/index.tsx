
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { NavLink, NavbarProps } from './types';
import DesktopNavItems from './DesktopNavItems';
import MobileNav from './MobileNav';
import MobileMenuButton from './MobileMenuButton';
import NavbarLogo from './NavbarLogo';

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Define navigation links
  const navLinks: NavLink[] = [
    { name: 'Home', href: '/', isPage: true },
    { name: 'Services', href: '/#services', isPage: false },
    { name: 'Blog', href: '/blog', isPage: true },
    { name: 'Company', href: '/company-info', isPage: true },
    { name: 'Brand', href: '/brand-guidelines', isPage: true },
    { name: 'Press', href: '/press', isPage: true },
    { name: 'Points Program', href: '/points-program', isPage: true },
    { name: 'Contact', href: '/#contact', isPage: false },
  ];

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
      : 'bg-transparent py-5',
    className
  );

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <NavbarLogo scrolled={scrolled} />
          
          <DesktopNavItems navLinks={navLinks} />
          
          <MobileMenuButton 
            isOpen={isOpen} 
            onClick={() => setIsOpen(!isOpen)} 
          />
        </div>
      </div>

      <MobileNav 
        isOpen={isOpen} 
        navLinks={navLinks} 
        onItemClick={() => setIsOpen(false)}
        menuRef={menuRef}
      />
    </nav>
  );
};

export default Navbar;
