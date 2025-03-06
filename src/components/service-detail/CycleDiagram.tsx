
import React from 'react';

interface CycleDiagramProps {
  color: string;
}

export const CycleDiagram = ({ color }: CycleDiagramProps) => (
  <svg className="w-full h-auto max-w-md mx-auto my-8" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="200" cy="200" r="150" fill={`${color}10`} stroke={color} strokeWidth="2" strokeDasharray="8 8"/>
    
    <circle cx="200" cy="50" r="40" fill={`${color}20`} stroke={color} strokeWidth="2"/>
    <text x="200" y="55" textAnchor="middle" fill={color} fontWeight="bold">計画</text>
    
    <circle cx="350" cy="200" r="40" fill={`${color}20`} stroke={color} strokeWidth="2"/>
    <text x="350" y="205" textAnchor="middle" fill={color} fontWeight="bold">実行</text>
    
    <circle cx="200" cy="350" r="40" fill={`${color}20`} stroke={color} strokeWidth="2"/>
    <text x="200" y="355" textAnchor="middle" fill={color} fontWeight="bold">測定</text>
    
    <circle cx="50" cy="200" r="40" fill={`${color}20`} stroke={color} strokeWidth="2"/>
    <text x="50" y="205" textAnchor="middle" fill={color} fontWeight="bold">改善</text>
    
    <path d="M229 72 L321 172" stroke={color} strokeWidth="2" strokeDasharray="5 5"/>
    <polygon points="321,172 330,180 315,182" fill={color}/>
    
    <path d="M329 229 L229 321" stroke={color} strokeWidth="2" strokeDasharray="5 5"/>
    <polygon points="229,321 220,330 217,315" fill={color}/>
    
    <path d="M171 329 L79 229" stroke={color} strokeWidth="2" strokeDasharray="5 5"/>
    <polygon points="79,229 70,220 85,217" fill={color}/>
    
    <path d="M71 171 L171 79" stroke={color} strokeWidth="2" strokeDasharray="5 5"/>
    <polygon points="171,79 180,70 182,85" fill={color}/>
  </svg>
);
