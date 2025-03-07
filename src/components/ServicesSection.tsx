
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCardLoader from './ui/service-card-loader';
import { services } from '@/lib/data';
import LogoRenderer from './logo/LogoRenderer';

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
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
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
            未来を変える革新的なサービスをご紹介します
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    className="bg-white rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md border border-gray-100"
                  >
                    <div className="h-40 bg-gradient-to-r from-gray-50 to-gray-100 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20">
                          <LogoRenderer 
                            serviceName={service.nameEn} 
                            style={{
                              bgColor: 'bg-gray-100',
                              textColor: 'text-gray-800',
                              fontFamily: 'font-sans',
                              gradient: 'from-gray-300 to-gray-400'
                            }}
                            variant="fibonacci"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <h3 className="text-xl font-medium text-gray-900">{service.nameEn}</h3>
                      </div>
                      <p className="text-gray-600 mb-5">{service.description}</p>
                      <button className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-medium transition-colors duration-300">
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
