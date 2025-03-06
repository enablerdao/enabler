
import React from 'react';
import { Users, Lightbulb, Rocket, Code } from 'lucide-react';

interface SimpleIllustrationProps {
  className?: string;
}

const SimpleIllustration: React.FC<SimpleIllustrationProps> = ({ className }) => {
  return (
    <div className={`w-full max-w-md mx-auto my-8 ${className}`}>
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background gradient */}
        <defs>
          <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="400" height="300" rx="20" fill="url(#bg-gradient)" />
        
        {/* Title with better positioning and more space */}
        <text x="200" y="40" fill="#0369A1" fontFamily="sans-serif" fontSize="16" fontWeight="bold" textAnchor="middle">可能性を広げる社会をつくる</text>
        
        {/* Central person - representing individual */}
        <circle cx="200" cy="150" r="40" fill="#0EA5E9" opacity="0.9" />
        <circle cx="200" cy="150" r="34" fill="#FFFFFF" />
        <circle cx="200" cy="130" r="12" fill="#0EA5E9" /> {/* head */}
        <rect x="188" y="145" width="24" height="30" rx="10" fill="#0EA5E9" /> {/* body */}
        
        {/* Ideas and possibilities - repositioned for better spacing */}
        <g id="idea-bubble">
          <circle cx="120" cy="90" r="30" fill="#F97316" opacity="0.7" />
          <circle cx="120" cy="90" r="24" fill="#FFFFFF" />
          <path d="M120,80 L120,92 M120,97 L120,97" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
          <circle cx="120" cy="78" r="3" fill="#F97316" />
        </g>
        
        {/* Technology - repositioned */}
        <g id="tech-bubble">
          <circle cx="280" cy="90" r="30" fill="#8B5CF6" opacity="0.7" />
          <circle cx="280" cy="90" r="24" fill="#FFFFFF" />
          <path d="M270,90 L290,90 M280,80 L280,100" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" />
        </g>
        
        {/* Community - repositioned */}
        <g id="community-bubble">
          <circle cx="120" cy="210" r="30" fill="#22C55E" opacity="0.7" />
          <circle cx="120" cy="210" r="24" fill="#FFFFFF" />
          <circle cx="113" cy="205" r="6" fill="#22C55E" />
          <circle cx="127" cy="205" r="6" fill="#22C55E" />
          <path d="M113,218 Q120,225 127,218" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
        </g>
        
        {/* Growth - repositioned */}
        <g id="growth-bubble">
          <circle cx="280" cy="210" r="30" fill="#EF4444" opacity="0.7" />
          <circle cx="280" cy="210" r="24" fill="#FFFFFF" />
          <path d="M270,220 L280,200 L290,220" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        
        {/* Connection lines - adjusted for new positions */}
        <path d="M168,127 L128,110" stroke="#F97316" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M232,127 L272,110" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M168,173 L128,190" stroke="#22C55E" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M232,173 L272,190" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 4" />
        
        {/* Labels with improved positioning */}
        <text x="120" y="70" fill="#F97316" fontFamily="sans-serif" fontSize="12" fontWeight="bold" textAnchor="middle">アイデア</text>
        <text x="280" y="70" fill="#8B5CF6" fontFamily="sans-serif" fontSize="12" fontWeight="bold" textAnchor="middle">テクノロジー</text>
        <text x="120" y="240" fill="#22C55E" fontFamily="sans-serif" fontSize="12" fontWeight="bold" textAnchor="middle">つながり</text>
        <text x="280" y="240" fill="#EF4444" fontFamily="sans-serif" fontSize="12" fontWeight="bold" textAnchor="middle">成長</text>
        <text x="200" y="200" fill="#0EA5E9" fontFamily="sans-serif" fontSize="12" fontWeight="bold" textAnchor="middle">一人ひとり</text>
      </svg>
      
      {/* Interactive elements - additional explanation */}
      <div className="mt-6 grid grid-cols-2 gap-6 text-center text-sm">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-orange-100 mb-2">
            <Lightbulb size={20} className="text-orange-500" />
          </div>
          <span className="text-gray-700">新しい発想</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-purple-100 mb-2">
            <Code size={20} className="text-purple-500" />
          </div>
          <span className="text-gray-700">テクノロジー</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-green-100 mb-2">
            <Users size={20} className="text-green-500" />
          </div>
          <span className="text-gray-700">人のつながり</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-red-100 mb-2">
            <Rocket size={20} className="text-red-500" />
          </div>
          <span className="text-gray-700">可能性の拡大</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleIllustration;
