
import React from 'react';
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden relative">
      {/* ドラえもん風の背景要素 - 四次元ポケット風の円形 */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-40 blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-30 blur-xl"></div>
      
      {/* タケコプター風の小さな要素 */}
      <motion.div 
        className="absolute top-40 right-20 w-16 h-16"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full border-4 border-blue-400 rounded-full border-dashed opacity-40"></div>
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            「あったらいいな」を超えて、<br/>
            <span className="text-gradient bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400">なくてはならない</span>へ。
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="text-blue-500">ど</span>こでもドアを開けるような、
            <span className="text-blue-500">ら</span>くらく未来を創る、
            <span className="text-blue-500">え</span>がおあふれる体験を、
            <span className="text-blue-500">も</span>っと身近に。
            <span className="text-blue-500">ん</span>なの夢を叶えます。
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-8">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-blue-300/50 transition-all duration-300"
            >
              サービスを見る
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 border border-gray-200 font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-300"
            >
              お問い合わせ
            </motion.button>
          </div>
        </motion.div>
        
        {/* ドラえもんの鈴のような円形の背景要素 */}
        <motion.div 
          className="absolute -bottom-48 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full opacity-30 blur-3xl -z-10"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
