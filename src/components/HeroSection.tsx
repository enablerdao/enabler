
import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-600 mb-3">株式会社イネブラ | Enabler, Inc.</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            「あったらいいな」を超えて、「なくてはならない」へ。
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            テクノロジーの力で、あなたの毎日をちょっと感動的に。
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
