
import React from 'react';
import { LogoVariantProps } from './types';
import { calculateColorForYear, foundingColor, generateFibonacciAccentColorForYear, calculateGoldenRatio } from './logoUtils';

const ThreeLinesLogo: React.FC<LogoVariantProps> = ({ size, year = new Date().getFullYear() }) => {
  // 現在の年のブランドカラーを取得
  const currentYearColor = calculateColorForYear(year);
  // 特定の年のフィボナッチアクセントカラー情報を取得
  const fibonacciAccentInfo = generateFibonacciAccentColorForYear(year);
  // デフォルト幅60の黄金比セグメントを取得
  const goldenSegments = calculateGoldenRatio(60);
  
  // 黄金比に基づいて真ん中の線の幅を計算
  const middleLineWidth = goldenSegments.segment1;

  return (
    <>
      <defs>
        <linearGradient id={`modernGradient-threelines-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={foundingColor} />
          <stop offset="100%" stopColor={currentYearColor} />
        </linearGradient>
        <linearGradient id={`reverseGradient-threelines-${year}`} x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={currentYearColor} />
          <stop offset="100%" stopColor={foundingColor} />
        </linearGradient>
        <linearGradient id={`middleLineGradient-threelines-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={foundingColor} />
          <stop offset="100%" stopColor={fibonacciAccentInfo.specialColor} />
        </linearGradient>
      </defs>
      <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
      {/* 第1線 - 設立カラーからの標準グラデーション */}
      <rect x="15" y="25" width="60" height="3" rx="1.5" fill={`url(#modernGradient-threelines-${year})`}/>
      {/* 中央線 - 黄金比に基づいた短い幅 */}
      <rect x="15" y="33" width={middleLineWidth} height="3" rx="1.5" fill={`url(#middleLineGradient-threelines-${year})`}/>
      {/* 第3線 - 逆グラデーション */}
      <rect x="15" y="41" width="60" height="3" rx="1.5" fill={`url(#reverseGradient-threelines-${year})`}/>
    </>
  );
};

export default ThreeLinesLogo;
