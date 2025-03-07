
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const navbarClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
    scrolled 
      ? 'bg-white/90 backdrop-blur-md shadow-subtle py-3' 
      : 'bg-transparent py-5'
  );

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '/blog', isPage: true },
    { name: 'ポイントプログラム', href: '/points-program', isPage: true },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Logo size={scrolled ? 'sm' : 'md'} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 hover:text-enabler-600 transition-all duration-200 text-sm font-medium"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-enabler-600 transition-all duration-200 text-sm font-medium"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={cn(
          'md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white shadow-md',
          isOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="container mx-auto px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            link.isPage ? (
              <Link
                key={link.name}
                to={link.href}
                className="block text-gray-700 hover:text-enabler-600 text-sm font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-enabler-600 text-sm font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
