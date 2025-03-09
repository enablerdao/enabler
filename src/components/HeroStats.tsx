
import React from 'react';
import { motion } from 'framer-motion';
import { MotionBox } from './ui/motion-box';

const HeroStats = () => {
  const stats = [
    { label: 'サービス数', value: '17+' },
    { label: 'ユーザー', value: '2.5万+' },
    { label: '平均満足度', value: '4.8/5' },
    { label: '導入企業', value: '200+' }
  ];
  
  return (
    <div className="bg-white py-12 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <MotionBox 
              key={stat.label}
              delay={index * 100}
            >
              <div className="px-1">
                <h3 className="text-4xl font-bold text-enabler-600 mb-2">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            </MotionBox>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroStats;
