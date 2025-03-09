
import React, { useEffect, useRef } from 'react';
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
  },
  { 
    name: 'IBM', 
    logo: '/partners/ibm.svg',
    alt: 'IBM logo' 
  },
  { 
    name: 'Sony', 
    logo: '/partners/sony.svg',
    alt: 'Sony logo' 
  }
];

const PartnerLogos = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    // Clone logos for seamless looping
    const cloneItems = () => {
      const items = scrollContainer.querySelectorAll('.logo-item');
      items.forEach(item => {
        const clone = item.cloneNode(true);
        scrollContainer.appendChild(clone);
      });
    };
    
    cloneItems();
    
    let animationId: number;
    let scrollPosition = 0;
    
    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollPosition += 0.5; // Adjust speed here
      
      // Reset position when we've scrolled the width of the original items
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };
    
    // Start scrolling animation
    animationId = requestAnimationFrame(scroll);
    
    // Pause animation when user hovers
    const pauseAnimation = () => {
      cancelAnimationFrame(animationId);
    };
    
    const resumeAnimation = () => {
      animationId = requestAnimationFrame(scroll);
    };
    
    scrollContainer.addEventListener('mouseenter', pauseAnimation);
    scrollContainer.addEventListener('mouseleave', resumeAnimation);
    
    return () => {
      cancelAnimationFrame(animationId);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', pauseAnimation);
        scrollContainer.removeEventListener('mouseleave', resumeAnimation);
      }
    };
  }, []);
  
  return (
    <section className="py-12 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <MotionBox>
          <h3 className="text-xl font-medium text-center text-gray-600 mb-10">導入企業・パートナー企業</h3>
        </MotionBox>
        
        <div 
          ref={scrollContainerRef} 
          className="flex items-center gap-12 overflow-x-hidden whitespace-nowrap relative"
        >
          {partners.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="logo-item flex-shrink-0">
              <img 
                src={partner.logo} 
                alt={partner.alt} 
                className="h-10 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
