
import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
          「あったらいいな」を超えて、「なくてはならない」へ。
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10">
          テクノロジーの力で、あなたの毎日をちょっと感動的に。
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <button className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300">
            サービスを見る
          </button>
          <button className="px-6 py-3 border border-purple-600 text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-colors duration-300">
            お問い合わせ
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
