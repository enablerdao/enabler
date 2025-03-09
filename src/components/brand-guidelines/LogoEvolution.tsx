
import React, { useState } from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { History, Copy, ChevronDown, ChevronUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import LogoVariations from './LogoVariations';

interface LogoEvolutionItem {
  year: number;
  name: string;
  description: string;
}

interface LogoEvolutionProps {
  evolutionData: LogoEvolutionItem[];
}

const LogoEvolution: React.FC<LogoEvolutionProps> = ({ evolutionData }) => {
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();
  const [expandedDecade, setExpandedDecade] = useState<number | null>(null);

  // Calculate color for any given year using the formula
  const calculateColorForYear = (year: number) => {
    const yearDiff = year - 2022;
    const r = Math.min(34 + yearDiff * 3, 224);
    const g = Math.min(182 + yearDiff * 2, 245);
    const b = 255;
    
    // Convert to HEX
    const toHex = (value: number) => {
      const hex = value.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "コピーしました",
      description: `${label}をクリップボードにコピーしました`,
    });
  };
  
  // Generate yearly logos for a decade
  const generateYearlyLogos = (startYear: number) => {
    return Array.from({ length: 10 }, (_, i) => {
      const logoYear = startYear + i;
      return {
        year: logoYear,
        color: calculateColorForYear(logoYear)
      };
    });
  };

  return (
    <MotionBox delay={500}>
      <section className="mb-6 md:mb-12">
        <div className="flex items-center mb-3 md:mb-5">
          <History className="text-enabler-600 mr-2 md:mr-3" size={24} />
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">4. ロゴの10年変遷</h2>
        </div>
        <div className="bg-white p-3 md:p-6 rounded-xl shadow-subtle">
          <p className="text-base md:text-lg mb-4 md:mb-5 leading-relaxed">
            Enablerのロゴは10年ごとに主要なアップデートが計画されています。各節目では、その時代の技術やデザイントレンドを反映しつつ、
            一貫したブランドアイデンティティを維持します。以下は10年ごとのロゴ進化の予測モデルです。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
            {evolutionData.map((item, index) => {
              const logoYear = item.year;
              const yearColor = calculateColorForYear(logoYear);
              const isPast = logoYear <= currentYear;
              const isCurrent = logoYear <= currentYear && logoYear > currentYear - 10;
              const isFuture = logoYear > currentYear;
              const isExpanded = expandedDecade === logoYear;
              
              // Choose variant based on the era
              let logoVariant: 'foundingLogo' | 'modern' | 'consistent' | 'gradient' | 'outline';
              
              if (logoYear === 2022) {
                logoVariant = 'foundingLogo';
              } else if (logoYear === 2032) {
                logoVariant = 'modern';
              } else if (logoYear === 2042) {
                logoVariant = 'gradient';
              } else if (logoYear === 2052) {
                logoVariant = 'consistent';
              } else {
                logoVariant = 'outline';
              }
              
              return (
                <div key={index} className="space-y-4">
                  <div 
                    className={`relative rounded-lg overflow-hidden ${
                      isCurrent ? 'border-2 border-blue-400' : 'border border-gray-200'
                    }`}
                  >
                    <div className="absolute top-0 right-0 px-2 py-1 text-xs text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-bl">
                      {item.name}
                    </div>
                    
                    <div className={`p-4 ${isFuture ? 'bg-gray-50' : 'bg-white'}`}>
                      <div className="mb-3 flex justify-between items-center">
                        <h3 className="text-lg font-semibold">{item.year}年</h3>
                        {isFuture && (
                          <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                            未来予測
                          </span>
                        )}
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg shadow-sm flex justify-center items-center h-24 md:h-28 mb-3">
                        <LogoVariations 
                          variant={logoVariant} 
                          size="md" 
                          year={logoYear} 
                        />
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                      
                      <div className="flex justify-between items-center">
                        <div 
                          className="flex items-center space-x-2 text-xs cursor-pointer text-gray-600 hover:text-blue-600"
                          onClick={() => copyToClipboard(yearColor, `${item.year}年ロゴカラー`)}
                        >
                          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: yearColor }}></div>
                          <span>{yearColor}</span>
                          <Copy size={12} />
                        </div>
                        
                        <button 
                          className="flex items-center text-xs text-blue-600 hover:text-blue-800 transition-colors"
                          onClick={() => setExpandedDecade(isExpanded ? null : logoYear)}
                        >
                          {isExpanded ? (
                            <>
                              <span>折りたたむ</span>
                              <ChevronUp size={16} className="ml-1" />
                            </>
                          ) : (
                            <>
                              <span>年次変化を見る</span>
                              <ChevronDown size={16} className="ml-1" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-3 bg-gray-50 rounded-lg">
                      {generateYearlyLogos(logoYear).map((yearLogo, idx) => (
                        <div key={idx} className="bg-white p-2 rounded shadow-sm">
                          <div className="flex justify-center items-center h-16 mb-1">
                            <LogoVariations 
                              variant={logoVariant} 
                              size="sm" 
                              year={yearLogo.year} 
                            />
                          </div>
                          <div className="text-center text-xs">
                            <p className="font-medium">{yearLogo.year}年</p>
                            <div className="flex items-center justify-center mt-1">
                              <div 
                                className="w-3 h-3 rounded-full mr-1" 
                                style={{ backgroundColor: yearLogo.color }}
                              ></div>
                              <span className="text-gray-600 text-[10px]">{yearLogo.color}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
            <h4 className="text-base font-semibold mb-2">10年ごとの進化コンセプト</h4>
            <ul className="text-sm space-y-1.5 pl-5 list-disc">
              <li><strong>2022年（設立時）</strong>：シンプルで視認性の高いデザイン。ブランドの基盤を確立。</li>
              <li><strong>2032年（10周年）</strong>：より洗練されたデザインに進化。現代的な要素を取り入れつつ、オリジナルの魂を維持。</li>
              <li><strong>2042年（20周年）</strong>：デジタル時代に対応した動的な要素を取り入れたデザイン。グラデーションによる立体感の表現。</li>
              <li><strong>2052年（30周年）</strong>：持続可能性とグローバル展開を象徴するミニマルでタイムレスなデザイン。</li>
              <li><strong>2062年（40周年）</strong>：次世代の技術とデザインを取り入れたアウトラインベースのモダンなアプローチ。</li>
            </ul>
          </div>
        </div>
      </section>
    </MotionBox>
  );
};

export default LogoEvolution;
