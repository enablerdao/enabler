
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { HelpCircle, Mail, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQContact = () => {
  return (
    <MotionBox delay={1000}>
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <HelpCircle className="text-enabler-600 mr-3" size={24} />
          <h2 className="text-2xl font-bold text-gray-900">お問い合わせ</h2>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-subtle">
          <p className="text-lg mb-6">
            ブランドについて質問があれば、いつでもご連絡ください！
            「これってOK？」と思ったら、まずは聞いてみるのが一番です。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.a
              href="mailto:brand@enabler.jp"
              className="p-5 bg-blue-50 rounded-lg border border-blue-100 flex items-center no-underline hover:no-underline"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                backgroundColor: "rgba(239, 246, 255, 1)"
              }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="text-blue-500 mr-4 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-medium text-blue-800 mb-1">メールでお問い合わせ</h3>
                <p className="text-blue-700">brand@enabler.jp</p>
              </div>
            </motion.a>
            
            <motion.a
              href="https://www.enabler.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-green-50 rounded-lg border border-green-100 flex items-center no-underline hover:no-underline"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                backgroundColor: "rgba(240, 253, 244, 1)"
              }}
              transition={{ duration: 0.2 }}
            >
              <Globe className="text-green-500 mr-4 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-medium text-green-800 mb-1">公式ウェブサイト</h3>
                <p className="text-green-700">www.enabler.jp</p>
              </div>
            </motion.a>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-sm text-gray-500">
              © 2025 Enabler, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </MotionBox>
  );
};

export default FAQContact;
