
import React from 'react';
import { MotionBox } from './ui/motion-box';

const partners = [
  { 
    name: 'Amazon', 
    logo: '/partners/amazon.svg',
    alt: 'Amazon logo' 
  },
  { 
    name: 'Microsoft', 
    logo: '/partners/microsoft.svg',
    alt: 'Microsoft logo' 
  },
  { 
    name: 'Google', 
    logo: '/partners/google.svg',
    alt: 'Google logo' 
  },
  { 
    name: 'Apple', 
    logo: '/partners/apple.svg',
    alt: 'Apple logo' 
  },
  { 
    name: 'IBM', 
    logo: '/partners/ibm.svg',
    alt: 'IBM logo' 
  },
  { 
    name: 'Meta', 
    logo: '/partners/meta.svg',
    alt: 'Meta logo' 
  }
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
                alt={partner.alt} 
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
