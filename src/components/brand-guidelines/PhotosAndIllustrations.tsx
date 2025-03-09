
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Image } from 'lucide-react';
import { motion } from 'framer-motion';

const PhotosAndIllustrations = () => {
  // Example photos and illustrations
  const examples = [
    { type: "photo", color: "bg-blue-100" },
    { type: "illustration", color: "bg-green-100" },
    { type: "photo", color: "bg-yellow-100" },
    { type: "illustration", color: "bg-purple-100" }
  ];

  return (
    <MotionBox delay={600}>
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <Image className="text-enabler-600 mr-3" size={24} />
          <h2 className="text-2xl font-bold text-gray-900">5. 写真とイラスト</h2>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-subtle">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 border-l-4 border-blue-400 bg-blue-50">
              <h3 className="font-semibold mb-2">写真</h3>
              <p>明るく、温かく、思わず「いいね」と言いたくなるような写真を選びましょう</p>
            </div>
            
            <div className="p-4 border-l-4 border-green-400 bg-green-50">
              <h3 className="font-semibold mb-2">イラスト</h3>
              <p>シンプルで優しいタッチが基本。難しく考えずに、素直な気持ちで描かれたものを</p>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {examples.map((example, idx) => (
              <motion.div
                key={idx}
                className={`${example.color} rounded-lg h-24 flex items-center justify-center ${idx === 1 || idx === 3 ? "border-2 border-dashed border-gray-300" : ""}`}
                whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xs font-medium">
                  {example.type === "photo" ? "📷 写真サンプル" : "🖌️ イラストサンプル"}
                </span>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-6 p-3 bg-yellow-50 rounded-lg border border-yellow-200 text-sm">
            <p className="font-medium">📝 ヒント:</p>
            <p>写真やイラストは、ブランドの個性を表現する大切な要素です。統一感を持たせることで、一貫したイメージを伝えることができます。</p>
          </div>
        </div>
      </section>
    </MotionBox>
  );
};

export default PhotosAndIllustrations;
