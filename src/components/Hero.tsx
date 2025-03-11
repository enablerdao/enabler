
import React from 'react';
import { MotionBox } from './ui/motion-box';
import { ChevronDown } from 'lucide-react';
import FibonacciBackground from './FibonacciBackground';
import { companyInfo } from '@/lib/data';

interface HeroProps {
  brandColor?: {
    hex: string;
    name: string;
    rgb: string;
  };
}

const Hero: React.FC<HeroProps> = ({ brandColor }) => {
  // Use the dynamic brand color or fallback to default
  const primaryColor = brandColor?.hex || '#22B6FF';
  const primaryRgb = brandColor?.rgb || '34, 182, 255';
  
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background with subtle gradient and Fibonacci animation */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"
        style={{ 
          background: `linear-gradient(to bottom, rgba(${primaryRgb}, 0.05), #ffffff)` 
        }}
      ></div>
      <FibonacciBackground />
      
      {/* Decorative elements */}
      <div 
        className="absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl opacity-30 animate-subtle-pulse"
        style={{ backgroundColor: primaryColor }}
      ></div>
      <div 
        className="absolute bottom-20 left-10 w-48 h-48 rounded-full blur-3xl opacity-20 animate-subtle-pulse"
        style={{ backgroundColor: primaryColor }}
      ></div>
      
      <div className="container mx-auto px-6 py-16 text-center">
        <MotionBox delay={100}>
          <span 
            className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-enabler-100 rounded-full"
            style={{ 
              backgroundColor: `rgba(${primaryRgb}, 0.1)`, 
              color: primaryColor 
            }}
          >
            株式会社イネブラ | Enabler, Inc.
          </span>
        </MotionBox>
        
        <MotionBox delay={300}>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight max-w-4xl mx-auto">
            <span className="relative inline-block">
              <span 
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(to right, ${primaryColor}, rgba(${primaryRgb}, 0.8))` }}
              >
                「あったらいいな」を「あってよかった！」に。
              </span>
              <span 
                className="absolute -bottom-1 left-0 w-full h-1.5 rounded-full opacity-70"
                style={{ backgroundColor: primaryColor }}
              ></span>
            </span>
          </h1>
        </MotionBox>
        
        <MotionBox delay={500}>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-700 leading-relaxed">
            テクノロジーで毎日をもっと楽しく、もっと便利に。<br />
            一人ひとりの可能性を広げ、自分らしく輝ける社会を。
          </p>
        </MotionBox>
        
        <MotionBox delay={700}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
              style={{ 
                backgroundColor: primaryColor,
                boxShadow: `0 4px 6px rgba(${primaryRgb}, 0.25)`,
              }}
            >
              サービス一覧を見る
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5"
              style={{ 
                color: primaryColor,
                borderColor: `rgba(${primaryRgb}, 0.3)`,
                backgroundColor: 'white',
              }}
            >
              会社情報
            </a>
          </div>
        </MotionBox>
        
        <div className="absolute bottom-10 left-0 right-0 mx-auto text-center">
          <a 
            href="#services" 
            className="inline-flex flex-col items-center transition-colors"
            style={{ color: `rgba(${primaryRgb}, 0.5)` }}
          >
            <span className="text-sm mb-2">詳細を見る</span>
            <ChevronDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
