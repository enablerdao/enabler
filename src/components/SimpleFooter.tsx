
import React from 'react';
import { motion } from "framer-motion";

const SimpleFooter = () => {
  return (
    <footer className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-medium text-lg text-gray-900"
            >
              Enabler, Inc.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 mt-1"
            >
              株式会社イネブラ
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-500 mt-6 text-sm max-w-md"
            >
              テクノロジーの力で、あなたの毎日をちょっと感動的に。私たちは、人々の生活をより豊かにする革新的なサービスを提供します。
            </motion.p>
          </div>
          
          <div className="flex flex-col md:items-end md:justify-between">
            <div className="flex space-x-6 md:space-x-8">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                Twitter
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                Facebook
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                Instagram
              </a>
            </div>
            
            <div className="mt-8 md:mt-0 text-right">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Enabler, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
