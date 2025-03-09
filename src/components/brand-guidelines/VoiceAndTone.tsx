
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const VoiceAndTone = () => {
  return (
    <MotionBox delay={700}>
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <MessageSquare className="text-enabler-600 mr-3" size={24} />
          <h2 className="text-2xl font-bold text-gray-900">6. 話し方と言葉選び</h2>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-subtle">
          <p className="text-lg mb-6">
            Enablerは堅苦しいロボットではありません。友達のように話しかけてください。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div 
              className="p-5 bg-green-50 rounded-lg border border-green-100"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <p className="font-medium text-green-800 mb-3">心がけること：</p>
              <ul className="list-disc pl-6 space-y-2 text-green-700">
                <li>親しみやすく（でも馴れ馴れしくなく）</li>
                <li>共感を大切に（「わかります」は魔法の言葉）</li>
                <li>前向きに（でもリアルに）</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="p-5 bg-red-50 rounded-lg border border-red-100"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <p className="font-medium text-red-800 mb-3">避けたいこと：</p>
              <ul className="list-disc pl-6 space-y-2 text-red-700">
                <li>否定的な表現（「できません」より「こうするといいですよ」）</li>
                <li>威圧的な言い方（「〜しなければならない」はNG）</li>
                <li>あいまいな表現（「たぶん」「かもしれない」の連発）</li>
              </ul>
            </motion.div>
          </div>
          
          <div className="mt-8 p-5 bg-blue-50 rounded-lg relative">
            <div className="mb-3 flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 mr-3">💬</div>
              <h3 className="font-medium text-blue-800">会話例</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded border border-blue-100">
                <p className="font-medium text-red-600 mb-1">❌ 避けたい言い方</p>
                <p className="text-gray-700">「ご要望の実装は不可能です。別の方法を検討してください。」</p>
              </div>
              
              <div className="bg-white p-3 rounded border border-green-200">
                <p className="font-medium text-green-600 mb-1">✅ 推奨する言い方</p>
                <p className="text-gray-700">「なるほど、面白いアイデアですね！現状ではちょっと難しい部分もありますが、こんな方法だと実現できそうです。」</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionBox>
  );
};

export default VoiceAndTone;
