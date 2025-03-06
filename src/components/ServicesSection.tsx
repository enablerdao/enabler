import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCardLoader from './ui/service-card-loader';
import { services } from '@/lib/data';

// Keep the existing ServicesSection component but add loading state
const ServicesSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-gray-900 mb-4">
            先進的なサービス
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            未来を変えるドラえもんのひみつ道具のような革新的なサービスをご紹介します
          </p>
        </motion.div>
        
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ServiceCardLoader count={6} />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5,
                      delay: index * 0.1
                    }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
                  >
                    <div className="h-40 bg-gradient-to-r from-blue-50 to-sky-50 relative overflow-hidden">
                      {service.image && (
                        <img 
                          src={service.image} 
                          alt={service.name} 
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-600 text-lg font-semibold">{service.icon || service.name.charAt(0)}</span>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900">{service.name}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <button className="w-full py-2.5 px-4 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full font-medium transition-colors duration-300">
                        詳細を見る
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;
