import React from 'react';
import { MotionBox } from './ui/motion-box';

const partners = [
  { 
    name: 'Amazon', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    alt: 'Amazon logo' 
  },
  { 
    name: 'Microsoft', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    alt: 'Microsoft logo' 
  },
  { 
    name: 'Google', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    alt: 'Google logo' 
  },
  { 
    name: 'Apple', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    alt: 'Apple logo' 
  },
  { 
    name: 'Meta', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
    alt: 'Meta logo' 
  },
  { 
    name: 'OpenAI', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
    alt: 'OpenAI logo' 
  },
  { 
    name: 'Supabase', 
    logo: 'https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png',
    alt: 'Supabase logo' 
  },
  { 
    name: 'Netlify', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg',
    alt: 'Netlify logo' 
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
