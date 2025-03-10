
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { NavLink, NavbarProps } from './types';
import DesktopNavItems from './DesktopNavItems';
import MobileNav from './MobileNav';
import MobileMenuButton from './MobileMenuButton';
import NavbarLogo from './NavbarLogo';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu } from 'lucide-react';

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  // Define primary navigation links with translations
  const primaryNavLinks: NavLink[] = [
    { name: t('home'), href: '/', isPage: true },
    { name: t('brand'), href: '/brand-guidelines', isPage: true },
    { name: t('services'), href: '/#services', isPage: false },
    { name: t('blog'), href: '/blog', isPage: true },
  ];
  
  // Secondary links for the sitemap dropdown
  const secondaryNavLinks: NavLink[] = [
    { name: t('company'), href: '/company-info', isPage: true },
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
    <nav className={navbarClasses} aria-label="Main Navigation">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <NavbarLogo scrolled={scrolled} />
          
          <div className="flex items-center gap-6">
            <DesktopNavItems 
              primaryNavLinks={primaryNavLinks} 
              secondaryNavLinks={secondaryNavLinks}
            />
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
          </div>
          
          <MobileMenuButton 
            isOpen={isOpen} 
            onClick={() => setIsOpen(!isOpen)} 
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          />
        </div>
      </div>

      <MobileNav 
        isOpen={isOpen} 
        primaryNavLinks={primaryNavLinks}
        secondaryNavLinks={secondaryNavLinks}
        onItemClick={() => setIsOpen(false)}
        menuRef={menuRef}
        id="mobile-menu"
        aria-hidden={!isOpen}
      />
    </nav>
  );
};

export default Navbar;
