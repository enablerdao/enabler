
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { NavLink, NavbarProps } from './types';
import DesktopNavItems from './DesktopNavItems';
import MobileNav from './MobileNav';
import MobileMenuButton from './MobileMenuButton';
import NavbarLogo from './NavbarLogo';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  // Define navigation links with translations
  const navLinks: NavLink[] = [
    { name: t('home'), href: '/', isPage: true },
    { name: t('services'), href: '/#services', isPage: false },
    { name: t('blog'), href: '/blog', isPage: true },
    { name: t('company'), href: '/company-info', isPage: true },
    { name: t('brand'), href: '/brand-guidelines', isPage: true },
    { name: t('press'), href: '/press', isPage: true },
    { name: t('pointsProgram'), href: '/points-program', isPage: true },
    { name: t('contact'), href: '/#contact', isPage: false },
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
          
          <div className="flex items-center gap-6">
            <DesktopNavItems navLinks={navLinks} />
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
          </div>
          
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
