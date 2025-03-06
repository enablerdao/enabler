
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';

const HeroSection = () => (
  <section className="py-20 bg-gradient-to-b from-enabler-50 to-white">
    <div className="container mx-auto px-6 text-center">
      <MotionBox>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          「あったらいいな」を超えて、「なくてはならない」へ。
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          テクノロジーの力で、あなたの毎日をちょっと感動的に。
        </p>
      </MotionBox>
    </div>
  </section>
);

export default HeroSection;
