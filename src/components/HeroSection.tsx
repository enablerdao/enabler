
import React from 'react';
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-gray-900 mb-6">
            「あったらいいな」を超えて、<br/>
            <span className="text-gradient bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">なくてはならない</span>へ。
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
            テクノロジーの力で、あなたの毎日をちょっと感動的に。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-8">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-blue-200/40 transition-all duration-300"
            >
              サービスを見る
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-blue-600 border border-gray-200 font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-300"
            >
              お問い合わせ
            </motion.button>
          </div>
        </motion.div>
        
        {/* Subtle background shape */}
        <div className="absolute -bottom-48 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full opacity-30 blur-3xl -z-10"></div>
      </div>
    </section>
  );
};

export default HeroSection;
