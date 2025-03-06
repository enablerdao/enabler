
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-2xl text-gray-900">ENABLER</div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-900 hover:text-gray-600">Home</Link>
            <Link to="/services" className="text-gray-900 hover:text-gray-600">Services</Link>
            <Link to="/about" className="text-gray-900 hover:text-gray-600">About</Link>
            <Link to="/contact" className="text-gray-900 hover:text-gray-600">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
