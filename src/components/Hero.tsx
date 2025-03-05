
import React from 'react';
import { MotionBox } from './ui/motion-box';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-enabler-100 rounded-full blur-3xl opacity-30 animate-subtle-pulse"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-enabler-200 rounded-full blur-3xl opacity-20 animate-subtle-pulse"></div>
      
      <div className="container mx-auto px-6 py-16 text-center">
        <MotionBox delay={100}>
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-enabler-800 uppercase bg-enabler-100 rounded-full">
            株式会社イネブラ | Enabler, Inc.
          </span>
        </MotionBox>
        
        <MotionBox delay={300}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-enabler-700 to-enabler-500">
            テクノロジーで可能性を広げる
          </h1>
        </MotionBox>
        
        <MotionBox delay={500}>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            革新的なデジタルサービスで人々の生活を豊かにし、
            より良い未来を創造するための挑戦を続けています。
          </p>
        </MotionBox>
        
        <MotionBox delay={700}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-enabler-600 text-white font-medium transition-all duration-200 hover:bg-enabler-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              サービス一覧を見る
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-enabler-600 font-medium border border-enabler-200 transition-all duration-200 hover:bg-enabler-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              会社情報
            </a>
          </div>
        </MotionBox>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#services" className="flex flex-col items-center text-gray-400 hover:text-enabler-600 transition-colors">
            <span className="text-sm mb-2">詳細を見る</span>
            <ChevronDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
