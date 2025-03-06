
import React from 'react';
import { Users, Lightbulb, Rocket, Code } from 'lucide-react';

interface SimpleIllustrationProps {
  className?: string;
}

const SimpleIllustration: React.FC<SimpleIllustrationProps> = ({ className }) => {
  return (
    <div className={`w-full max-w-md mx-auto my-8 ${className}`}>
      <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background gradient */}
        <defs>
          <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="400" height="280" rx="20" fill="url(#bg-gradient)" />
        
        {/* Central person - representing individual */}
        <circle cx="200" cy="140" r="40" fill="#0EA5E9" opacity="0.9" />
        <circle cx="200" cy="140" r="34" fill="#FFFFFF" />
        <circle cx="200" cy="120" r="12" fill="#0EA5E9" /> {/* head */}
        <rect x="188" y="135" width="24" height="30" rx="10" fill="#0EA5E9" /> {/* body */}
        
        {/* Ideas and possibilities */}
        <g id="idea-bubble">
          <circle cx="140" cy="80" r="30" fill="#F97316" opacity="0.7" />
          <circle cx="140" cy="80" r="24" fill="#FFFFFF" />
          <path d="M140,70 L140,82 M140,87 L140,87" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
          <circle cx="140" cy="68" r="3" fill="#F97316" />
        </g>
        
        {/* Technology */}
        <g id="tech-bubble">
          <circle cx="260" cy="80" r="30" fill="#8B5CF6" opacity="0.7" />
          <circle cx="260" cy="80" r="24" fill="#FFFFFF" />
          <path d="M250,80 L270,80 M260,70 L260,90" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" />
        </g>
        
        {/* Community */}
        <g id="community-bubble">
          <circle cx="140" cy="200" r="30" fill="#22C55E" opacity="0.7" />
          <circle cx="140" cy="200" r="24" fill="#FFFFFF" />
          <circle cx="133" cy="195" r="6" fill="#22C55E" />
          <circle cx="147" cy="195" r="6" fill="#22C55E" />
          <path d="M133,208 Q140,215 147,208" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
        </g>
        
        {/* Growth */}
        <g id="growth-bubble">
          <circle cx="260" cy="200" r="30" fill="#EF4444" opacity="0.7" />
          <circle cx="260" cy="200" r="24" fill="#FFFFFF" />
          <path d="M250,210 L260,190 L270,210" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        
        {/* Connection lines */}
        <path d="M172,117 L148,90" stroke="#F97316" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M228,117 L252,90" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M172,163 L148,190" stroke="#22C55E" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M228,163 L252,190" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 4" />
        
        {/* Labels */}
        <text x="130" y="65" fill="#F97316" fontFamily="sans-serif" fontSize="9" fontWeight="bold" textAnchor="middle">アイデア</text>
        <text x="270" y="65" fill="#8B5CF6" fontFamily="sans-serif" fontSize="9" fontWeight="bold" textAnchor="middle">テクノロジー</text>
        <text x="140" y="225" fill="#22C55E" fontFamily="sans-serif" fontSize="9" fontWeight="bold" textAnchor="middle">つながり</text>
        <text x="260" y="225" fill="#EF4444" fontFamily="sans-serif" fontSize="9" fontWeight="bold" textAnchor="middle">成長</text>
        <text x="200" y="190" fill="#0EA5E9" fontFamily="sans-serif" fontSize="10" fontWeight="bold" textAnchor="middle">一人ひとり</text>
        
        {/* Title */}
        <text x="200" y="30" fill="#0369A1" fontFamily="sans-serif" fontSize="12" fontWeight="bold" textAnchor="middle">可能性を広げる社会をつくる</text>
      </svg>
      
      {/* Interactive elements - additional explanation */}
      <div className="mt-4 grid grid-cols-2 gap-4 text-center text-sm">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-8 h-8 rounded-full bg-blue-100 mb-1">
            <Lightbulb size={16} className="text-blue-600" />
          </div>
          <span className="text-gray-700">新しい発想</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-8 h-8 rounded-full bg-blue-100 mb-1">
            <Code size={16} className="text-blue-600" />
          </div>
          <span className="text-gray-700">テクノロジー</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-8 h-8 rounded-full bg-blue-100 mb-1">
            <Users size={16} className="text-blue-600" />
          </div>
          <span className="text-gray-700">人のつながり</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-8 h-8 rounded-full bg-blue-100 mb-1">
            <Rocket size={16} className="text-blue-600" />
          </div>
          <span className="text-gray-700">可能性の拡大</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleIllustration;
