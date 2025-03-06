
import React from 'react';

interface ProcessDiagramProps {
  color: string;
}

export const ProcessDiagram = ({ color }: ProcessDiagramProps) => (
  <svg className="w-full h-auto max-w-xl mx-auto my-8" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="70" width="120" height="60" rx="8" fill={`${color}20`} stroke={color} strokeWidth="2"/>
    <text x="110" y="105" textAnchor="middle" fill={color} fontWeight="bold">収集</text>
    
    <path d="M170 100 L230 100" stroke={color} strokeWidth="2" strokeDasharray="5 5"/>
    <polygon points="230,95 240,100 230,105" fill={color}/>
    
    <rect x="240" y="70" width="120" height="60" rx="8" fill={`${color}20`} stroke={color} strokeWidth="2"/>
    <text x="300" y="105" textAnchor="middle" fill={color} fontWeight="bold">分析</text>
    
    <path d="M360 100 L420 100" stroke={color} strokeWidth="2" strokeDasharray="5 5"/>
    <polygon points="420,95 430,100 420,105" fill={color}/>
    
    <rect x="430" y="70" width="120" height="60" rx="8" fill={`${color}20`} stroke={color} strokeWidth="2"/>
    <text x="490" y="105" textAnchor="middle" fill={color} fontWeight="bold">最適化</text>
    
    <path d="M550 100 L610 100" stroke={color} strokeWidth="2" strokeDasharray="5 5"/>
    <polygon points="610,95 620,100 610,105" fill={color}/>
    
    <rect x="620" y="70" width="120" height="60" rx="8" fill={`${color}20`} stroke={color} strokeWidth="2"/>
    <text x="680" y="105" textAnchor="middle" fill={color} fontWeight="bold">結果</text>
  </svg>
);
