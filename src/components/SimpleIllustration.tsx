
import React, { useEffect, useRef } from 'react';

interface SimpleIllustrationProps {
  className?: string;
}

const SimpleIllustration: React.FC<SimpleIllustrationProps> = ({ className }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    
    // 中央の人物のアニメーション
    const centralPerson = svg.querySelector('#central-person');
    if (centralPerson) {
      centralPerson.animate(
        [
          { transform: 'translateY(0) scale(1)' },
          { transform: 'translateY(-5px) scale(1.02)' },
          { transform: 'translateY(0) scale(1)' },
        ],
        {
          duration: 3000,
          iterations: Infinity,
          easing: 'ease-in-out',
        }
      );
    }
    
    // アイデアバブルのアニメーション
    const ideaBubble = svg.querySelector('#idea-bubble');
    if (ideaBubble) {
      ideaBubble.animate(
        [
          { transform: 'scale(1) rotate(0deg)', opacity: 1 },
          { transform: 'scale(1.05) rotate(2deg)', opacity: 0.9 },
          { transform: 'scale(1) rotate(0deg)', opacity: 1 },
        ],
        {
          duration: 2000,
          iterations: Infinity,
          easing: 'ease-in-out',
        }
      );
    }
    
    // テクノロジーバブルのアニメーション
    const techBubble = svg.querySelector('#tech-bubble');
    if (techBubble) {
      techBubble.animate(
        [
          { transform: 'rotate(0deg)' },
          { transform: 'rotate(360deg)' },
        ],
        {
          duration: 20000,
          iterations: Infinity,
          easing: 'linear',
        }
      );
    }
    
    // コミュニティバブルのアニメーション
    const communityBubble = svg.querySelector('#community-bubble');
    if (communityBubble) {
      communityBubble.animate(
        [
          { transform: 'scale(1) translate(0, 0)' },
          { transform: 'scale(1.03) translate(-2px, 2px)' },
          { transform: 'scale(1) translate(0, 0)' },
        ],
        {
          duration: 2500,
          iterations: Infinity,
          easing: 'ease-in-out',
        }
      );
    }
    
    // 成長バブルのアニメーション
    const growthBubble = svg.querySelector('#growth-bubble');
    if (growthBubble) {
      growthBubble.animate(
        [
          { transform: 'translateY(0) rotate(0deg)' },
          { transform: 'translateY(-8px) rotate(2deg)' },
          { transform: 'translateY(0) rotate(0deg)' },
        ],
        {
          duration: 2800,
          iterations: Infinity,
          easing: 'ease-in-out',
        }
      );
    }
    
    // 接続線のアニメーション
    const connectionLines = svg.querySelectorAll('.connection-line');
    connectionLines.forEach((line, index) => {
      line.animate(
        [
          { strokeDashoffset: 100, opacity: 0.5 },
          { strokeDashoffset: 0, opacity: 1 },
        ],
        {
          duration: 2000 + (index * 200),
          iterations: Infinity,
          easing: 'linear',
        }
      );
    });
    
    // 3D効果を強化するためのマウス追従アニメーション
    const allElements = svg.querySelectorAll('g[id]');
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = svg.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      allElements.forEach((el) => {
        const depth = parseFloat(el.getAttribute('data-depth') || '1');
        const moveX = x * 10 * depth;
        const moveY = y * 10 * depth;
        el.setAttribute('transform', `translate(${moveX}, ${moveY})`);
      });
    };
    
    svg.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      svg.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className={`w-full max-w-md mx-auto my-8 ${className}`}>
      <svg ref={svgRef} viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-lg">
        {/* 背景グラデーション */}
        <defs>
          <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.4" />
          </linearGradient>
          
          {/* 3D効果のためのフィルター */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3" />
          </filter>
          
          {/* 3D効果のためのグラデーション */}
          <linearGradient id="sphere-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          
          {/* 光沢効果 */}
          <radialGradient id="sphere-highlight" cx="30%" cy="30%" r="50%" fx="30%" fy="30%">
            <stop offset="0%" stopColor="white" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* 背景 */}
        <rect x="0" y="0" width="400" height="350" rx="20" fill="url(#bg-gradient)" />
        
        {/* タイトル - 影の追加による3D効果 */}
        <text x="200" y="40" fill="#0369A1" fontFamily="sans-serif" fontSize="22" fontWeight="bold" textAnchor="middle" filter="url(#dropShadow)">
          可能性を広げる社会をつくる
        </text>
        
        {/* 中央の人物 - 個人を表現 */}
        <g id="central-person" data-depth="1">
          <circle cx="200" cy="150" r="44" fill="#0EA5E9" opacity="0.9" />
          <circle cx="200" cy="150" r="38" fill="#FFFFFF" />
          
          {/* 3D効果を強化した頭部 */}
          <circle cx="200" cy="130" r="14" fill="url(#sphere-gradient)" />
          <circle cx="200" cy="130" r="14" fill="url(#sphere-highlight)" />
          
          {/* 3D効果を強化した体 */}
          <rect x="188" y="145" width="24" height="30" rx="10" fill="url(#sphere-gradient)" />
          <ellipse cx="200" cy="185" rx="14" ry="5" fill="#0EA5E9" opacity="0.2" /> {/* 影 */}
        </g>
        
        {/* アイデア - 3D効果強化 */}
        <g id="idea-bubble" data-depth="1.5" filter="url(#glow)">
          <circle cx="110" cy="90" r="30" fill="#F97316" opacity="0.7" />
          <circle cx="110" cy="90" r="24" fill="#FFFFFF" />
          <path d="M110,80 L110,92 M110,97 L110,97" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
          <circle cx="110" cy="78" r="3" fill="#F97316" />
          
          {/* 光の反射を追加 */}
          <circle cx="105" cy="85" r="6" fill="white" opacity="0.3" />
        </g>
        
        {/* テクノロジー - 3D効果強化 */}
        <g id="tech-bubble" data-depth="1.3" filter="url(#glow)">
          <circle cx="290" cy="90" r="30" fill="#8B5CF6" opacity="0.7" />
          <circle cx="290" cy="90" r="24" fill="#FFFFFF" />
          <path d="M280,90 L300,90 M290,80 L290,100" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" />
          
          {/* 光の反射を追加 */}
          <circle cx="285" cy="85" r="6" fill="white" opacity="0.3" />
        </g>
        
        {/* コミュニティ - 3D効果強化 */}
        <g id="community-bubble" data-depth="1.4" filter="url(#glow)">
          <circle cx="110" cy="210" r="30" fill="#22C55E" opacity="0.7" />
          <circle cx="110" cy="210" r="24" fill="#FFFFFF" />
          <circle cx="103" cy="205" r="6" fill="#22C55E" />
          <circle cx="117" cy="205" r="6" fill="#22C55E" />
          <path d="M103,218 Q110,225 117,218" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
          
          {/* 光の反射を追加 */}
          <circle cx="105" cy="205" r="6" fill="white" opacity="0.3" />
        </g>
        
        {/* 成長 - 3D効果強化 */}
        <g id="growth-bubble" data-depth="1.2" filter="url(#glow)">
          <circle cx="290" cy="210" r="30" fill="#EF4444" opacity="0.7" />
          <circle cx="290" cy="210" r="24" fill="#FFFFFF" />
          <path d="M280,220 L290,200 L300,220" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* 光の反射を追加 */}
          <circle cx="285" cy="205" r="6" fill="white" opacity="0.3" />
        </g>
        
        {/* 接続線 - アニメーション用にクラスと属性を追加 */}
        <path d="M168,127 L128,110" stroke="#F97316" strokeWidth="2" strokeDasharray="4" className="connection-line" />
        <path d="M232,127 L272,110" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="4" className="connection-line" />
        <path d="M168,173 L128,190" stroke="#22C55E" strokeWidth="2" strokeDasharray="4" className="connection-line" />
        <path d="M232,173 L272,190" stroke="#EF4444" strokeWidth="2" strokeDasharray="4" className="connection-line" />
        
        {/* ラベル - 3D効果と視認性の向上 */}
        <rect x="85" y="50" width="50" height="20" rx="10" fill="white" opacity="0.9" filter="url(#dropShadow)" />
        <text x="110" y="65" fill="#F97316" fontFamily="sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle">アイデア</text>
        
        <rect x="255" y="50" width="80" height="20" rx="10" fill="white" opacity="0.9" filter="url(#dropShadow)" />
        <text x="290" y="65" fill="#8B5CF6" fontFamily="sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle">テクノロジー</text>
        
        <rect x="85" y="240" width="50" height="20" rx="10" fill="white" opacity="0.9" filter="url(#dropShadow)" />
        <text x="110" y="255" fill="#22C55E" fontFamily="sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle">つながり</text>
        
        <rect x="255" y="240" width="80" height="20" rx="10" fill="white" opacity="0.9" filter="url(#dropShadow)" />
        <text x="290" y="255" fill="#EF4444" fontFamily="sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle">成長</text>
        
        <rect x="175" y="200" width="50" height="20" rx="10" fill="white" opacity="0.9" filter="url(#dropShadow)" />
        <text x="200" y="215" fill="#0EA5E9" fontFamily="sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle">一人ひとり</text>
      </svg>
    </div>
  );
};

export default SimpleIllustration;
