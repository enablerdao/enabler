
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { BookOpen } from 'lucide-react';
import { companyInfo } from '@/lib/data';
import { motion } from 'framer-motion';

const BrandStory = () => {
  return (
    <MotionBox delay={200}>
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <BookOpen className="text-enabler-600 mr-3" size={24} />
          <h2 className="text-2xl font-bold text-gray-900">1. ブランドストーリーと理念</h2>
        </div>
        <div className="bg-white p-4 md:p-8 rounded-xl shadow-subtle">
          <p className="text-lg mb-4 leading-relaxed">
            「Enabler（イネブラ）」は、人々が持つ可能性をテクノロジーの力で引き出し、実現するために2022年に誕生しました。誰もが持っている可能性の種を育て、未来をともに創るパートナーとして、温かな視点で寄り添い続けています。
          </p>
          
          <motion.div 
            className="my-6 p-5 border-l-4 border-enabler-400 bg-blue-50 italic text-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            私たちは一人ひとりの可能性を広げ、それぞれの夢の実現をサポートします。
          </motion.div>
        </div>
      </section>
    </MotionBox>
  );
};

export default BrandStory;
