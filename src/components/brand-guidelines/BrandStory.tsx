
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
          <h2 className="text-2xl font-bold text-gray-900">1. ブランドストーリー - 私たちの旅</h2>
        </div>
        <div className="bg-white p-4 md:p-8 rounded-xl shadow-subtle">
          <p className="text-lg mb-4 leading-relaxed">
            こんにちは、「Enabler（イネブラ）」です！2022年生まれの若いブランドですが、大きな夢を持っています。
            私たちは「可能性の種」を見つけるのが得意。あなたの中にある才能や夢を、テクノロジーの力でそっと後押しする、そんな頼れる友達になりたいと思っています。
          </p>
          
          <motion.div 
            className="my-6 p-5 border-l-4 border-enabler-400 bg-blue-50 italic text-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            誰にでも眠っている可能性がある。私たちはその種を一緒に育てる、あたたかな園丁でありたい。
          </motion.div>
          
          <p className="text-lg leading-relaxed">
            誰もが持っている可能性の種を育て、未来をともに創るパートナーとして、あたたかな視点で寄り添い続けています。
          </p>
        </div>
      </section>
    </MotionBox>
  );
};

export default BrandStory;
