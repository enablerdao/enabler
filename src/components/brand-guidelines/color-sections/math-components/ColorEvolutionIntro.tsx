
import React from 'react';
import { motion } from 'framer-motion';

const ColorEvolutionIntro: React.FC = () => {
  return (
    <div className="mb-6">
      <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-5 border-b pb-2">色の成長ストーリー</h3>
      
      <p className="text-base mb-4 leading-relaxed">
        私たちの青は「深い海」からスタートします。そこから徐々に上へ上へと昇っていき、
        「広い空」へ、そして最終的には「宇宙の無限」へとつながっていきます。
      </p>
      
      <motion.div
        className="p-4 bg-gradient-to-t from-blue-500 to-sky-200 rounded-lg mb-4 text-white"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-medium">
          人の可能性は最初は海の底に眠る真珠のよう。それを見つけ、育て、
          やがて空高く飛ばせるようになるまで、ずっと一緒に歩んでいきたい。
          そんな思いを、この「下から上へ」の色の旅に込めています。
        </p>
      </motion.div>
      
      <p className="text-base mb-4 leading-relaxed">
        最終的な色は、まるで宇宙から見た地球の青のように、
        希望と可能性に満ちた明るい青になります。
        （このペースだと完成まで100年以上かかりますが、気長にお付き合いください）
      </p>
    </div>
  );
};

export default ColorEvolutionIntro;
