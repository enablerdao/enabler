
import React from 'react';
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* ドラえもんのポケット風の背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-white z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzQjgyRjYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptNiAwaDZ2LTZoLTZ2NnptLTEyIDBoLTZ2Nmg2di02em0tNi02aC02djZoNnYtNnptMTIgMGg2di02aC02djZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50 z-0"></div>
      
      {/* ドラえもんの道具のような円形要素 */}
      <motion.div 
        className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-30"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="text-3xl font-display font-medium mb-6 text-gray-900">
            テクノロジーを通じて、あなたがワクワクする未来を一緒に作りませんか？
          </h3>
          <p className="text-xl font-light mb-10 text-gray-600 max-w-2xl mx-auto">
            あなたの「あったらいいな」は、<span className="text-blue-500 font-semibold">どこでもドア</span>を開ければすぐそこに。
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -10px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-400 text-white font-medium rounded-full shadow-lg hover:shadow-blue-300/30 transition-all duration-300 relative"
          >
            <span className="relative z-10">サービスについて相談する</span>
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          {/* 鈴のような小さな円形の装飾 */}
          <motion.div 
            className="w-6 h-6 bg-yellow-300 rounded-full mx-auto mt-8 shadow-md relative"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute w-full top-1/2 h-0.5 bg-yellow-600"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
