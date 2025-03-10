
import React from 'react';
import { FriendlyLoading } from '../ui/friendly-loading';
import Navbar from '../Navbar';
import Footer from '../Footer';

export const ServiceLoadingIndicator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <FriendlyLoading 
          variant="robot"
          size="lg"
        />
      </div>
      <Footer />
    </div>
  );
};
