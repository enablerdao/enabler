
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
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  // Define primary navigation links with translations
  const primaryNavLinks: NavLink[] = [
    { name: t('home'), href: '/', isPage: true },
    { name: t('brand'), href: '/brand-guidelines', isPage: true },
    { name: t('services'), href: '/services', isPage: false },
    { name: t('blog'), href: '/blog', isPage: true },
  ];
  
  // Secondary links for the sitemap dropdown
  const secondaryNavLinks: NavLink[] = [
    { name: t('company'), href: '/company-info', isPage: true },
    { name: t('press'), href: '/press', isPage: true },
    { name: t('pointsProgram'), href: '/points-program', isPage: true },
    { name: t('contact'), href: '/contact', isPage: false },
  ];

  // Handle navigation to services from any page
  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // If on home page, just scroll to services section
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on different page, navigate to home page and then scroll to services
      navigate('/', { state: { scrollToServices: true } });
    }
    if (isOpen) setIsOpen(false);
  };

  // Handle navigation to contact from any page
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // If on home page, just scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on different page, navigate to home page and then scroll to contact
      navigate('/', { state: { scrollToContact: true } });
    }
    if (isOpen) setIsOpen(false);
  };

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

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full',
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-subtle py-3' 
        : 'bg-transparent py-5',
      className
    )} aria-label="Main Navigation">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <NavbarLogo scrolled={scrolled} />
          
          <div className="flex items-center gap-6">
            <DesktopNavItems 
              primaryNavLinks={primaryNavLinks} 
              secondaryNavLinks={secondaryNavLinks}
              onServiceClick={handleServiceClick}
              onContactClick={handleContactClick}
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
        onServiceClick={handleServiceClick}
        onContactClick={handleContactClick}
        menuRef={menuRef}
        id="mobile-menu"
        aria-hidden={!isOpen}
      />
    </nav>
  );
};

export default Navbar;
