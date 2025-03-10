
import React from 'react';
import { FriendlyLoading } from '../ui/friendly-loading';

export const ServiceLoadingIndicator = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <FriendlyLoading 
        variant="robot"
        size="lg"
      />
    </div>
  );
};
