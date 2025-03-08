
import React from "react";
import { DiagramNode } from "./DiagramNode";
import { Brain, Globe, Lightbulb, Rocket, Sparkles, Sprout, Users } from "lucide-react";
import { motion } from "framer-motion";

const SocietyDiagram = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8 mb-12">
      <div className="relative flex flex-col items-center">
        {/* Apply animation styles to the diagram container */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 md:gap-10 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Center node */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
            <motion.div 
              className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-enabler-100/50 backdrop-blur-sm"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>

          {/* Surrounding nodes */}
          <DiagramNode 
            color="#0284c7" 
            japaneseText="一人ひとり" 
            englishText="Individual" 
            description="個性を大切に" 
            delayIndex={0}
            size="lg"
            icon={Users}
          />
          
          <DiagramNode 
            color="#10B981" 
            japaneseText="アイデア" 
            englishText="Ideas" 
            description="新しい考えと創造性" 
            delayIndex={1}
            icon={Lightbulb}
          />
          
          <DiagramNode 
            color="#8B5CF6" 
            japaneseText="テクノロジー" 
            englishText="Technology" 
            description="革新的な解決策" 
            delayIndex={2}
            icon={Sparkles}
          />
          
          <DiagramNode 
            color="#F59E0B" 
            japaneseText="つながり" 
            englishText="Connections" 
            description="人と社会とのつながり" 
            delayIndex={3}
            icon={Globe}
          />
          
          <DiagramNode 
            color="#EC4899" 
            japaneseText="成長" 
            englishText="Growth" 
            description="可能性の拡大と進化" 
            delayIndex={4}
            icon={Sprout}
          />
          
          <DiagramNode 
            color="#EF4444" 
            japaneseText="挑戦" 
            englishText="Challenges" 
            description="新たな価値の創造" 
            delayIndex={5}
            icon={Rocket}
          />
          
          <DiagramNode 
            color="#6366F1" 
            japaneseText="思考" 
            englishText="Thinking" 
            description="未来を考える力" 
            delayIndex={6}
            icon={Brain}
          />
        </motion.div>
        
        {/* Caption */}
        <motion.div 
          className="mt-8 text-center max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-sm text-sm text-gray-700">
            各要素が相互に作用し、一人ひとりの可能性を広げる社会の実現に貢献します
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SocietyDiagram;
