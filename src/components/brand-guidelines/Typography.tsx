
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Type } from 'lucide-react';
import { motion } from 'framer-motion';

const Typography = () => {
  return (
    <MotionBox delay={500}>
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <Type className="text-enabler-600 mr-3" size={24} />
          <h2 className="text-2xl font-bold text-gray-900">4. フォント選び</h2>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-subtle">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-semibold mb-4">和文フォント</h3>
              <p className="text-6xl mb-2 font-sans">あア阿</p>
              <p className="text-lg font-medium">Noto Sans JP</p>
              <p className="text-gray-600">Regular, Bold</p>
              <p className="text-sm text-gray-500 mt-2 italic">
                読みやすくて親しみやすい、それでいて信頼感のあるデザインです。
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-semibold mb-4">欧文フォント</h3>
              <p className="text-6xl mb-2 font-sans">Aa1</p>
              <p className="text-lg font-medium">Montserrat</p>
              <p className="text-gray-600">Regular, Medium, Bold</p>
              <p className="text-sm text-gray-500 mt-2 italic">
                モダンで読みやすく、少し個性もあるフォントです。
              </p>
            </motion.div>
          </div>
          <p className="text-lg mt-6">
            文字と文字の間には適切な「呼吸」（余白）を。窮屈な文章は読みにくいですからね。
          </p>
        </div>
      </section>
    </MotionBox>
  );
};

export default Typography;
