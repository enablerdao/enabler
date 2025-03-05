
import React from 'react';
import { MotionBox } from './ui/motion-box';

const partners = [
  { name: 'Amazon', logo: 'https://placehold.co/100x40/5e5e5e/FFFFFF.png?text=Amazon' },
  { name: 'Microsoft', logo: 'https://placehold.co/100x40/5e5e5e/FFFFFF.png?text=Microsoft' },
  { name: 'Google', logo: 'https://placehold.co/100x40/5e5e5e/FFFFFF.png?text=Google' },
  { name: 'Apple', logo: 'https://placehold.co/100x40/5e5e5e/FFFFFF.png?text=Apple' },
  { name: 'IBM', logo: 'https://placehold.co/100x40/5e5e5e/FFFFFF.png?text=IBM' },
  { name: 'SONY', logo: 'https://placehold.co/100x40/5e5e5e/FFFFFF.png?text=SONY' }
];

const PartnerLogos = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <MotionBox>
          <h3 className="text-xl font-medium text-center text-gray-600 mb-10">導入企業・パートナー企業</h3>
        </MotionBox>
        
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner, index) => (
            <MotionBox key={partner.name} delay={index * 50}>
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="h-10 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </MotionBox>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
