
import React from 'react';

const SimpleFooter = () => {
  return (
    <footer className="py-10 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-semibold text-gray-700">Enabler, Inc.</p>
            <p className="text-sm text-gray-500">株式会社イネブラ</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              Facebook
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              Instagram
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Enabler, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
