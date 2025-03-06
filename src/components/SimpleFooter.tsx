
import React from 'react';

const SimpleFooter = () => {
  return (
    <footer className="py-8 bg-gray-100">
      <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Enabler, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default SimpleFooter;
