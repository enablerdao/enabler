
import React, { useEffect, useRef } from 'react';
import { companyInfo } from '@/lib/data';
import { MotionBox } from './ui/motion-box';
import { Briefcase, MapPin, Calendar, Code, Github, Sparkles, Target, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const techBgRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // High-tech background animation
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (techBgRef.current) {
        const xPos = (clientX / window.innerWidth) * 25;
        const yPos = (clientY / window.innerHeight) * 25;
        techBgRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Fake console messages for humor
    console.log("%c🚀 イネブラOS v3.14.15 booting...", "color:#36f; font-size:14px; font-weight:bold;");
    console.log("%c🧠 AI思考エンジン初期化中...", "color:#f93; font-size:12px;");
    console.log("%c✨ 量子コンピューティングモジュール: オンライン", "color:#3c6; font-size:12px;");
    console.log("%c🤖 準備完了！私たちは普通の会社です。人類支配の計画などありません。", "color:#f55; font-size:12px; font-style:italic;");
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-12 md:py-20">
      {/* Tech background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div ref={techBgRef} className="absolute inset-0 transition-transform duration-200 ease-out">
          <div className="absolute top-10 left-10 w-80 h-80 rounded-full border border-enabler-200"></div>
          <div className="absolute top-40 right-20 w-40 h-40 rounded-full border border-enabler-300"></div>
          <div className="absolute bottom-20 left-40 w-60 h-60 rounded-full border border-enabler-100"></div>
          <div className="absolute grid grid-cols-20 grid-rows-20 gap-4 opacity-20 w-screen h-screen">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-enabler-300 rounded-full"></div>
            ))}
          </div>
          {/* Binary code decoration */}
          <div className="hidden md:block absolute bottom-10 left-10 text-[8px] text-enabler-300 opacity-20 font-mono leading-tight">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i}>{Array.from({ length: 40 }).map(() => Math.round(Math.random())).join('')}</div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <MotionBox>
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 md:mb-4">会社情報</h2>
            <div className="flex justify-center items-center gap-2 mb-6 md:mb-10">
              <span className="h-px w-10 md:w-12 bg-enabler-400"></span>
              <Code size={14} className="text-enabler-500" />
              <span className="h-px w-10 md:w-12 bg-enabler-400"></span>
            </div>
          </MotionBox>
          
          <div className="bg-white rounded-xl shadow-subtle p-4 sm:p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-all duration-500">
            <MotionBox delay={200}>
              <div className="mb-4 md:mb-6 relative">
                <span className="absolute -top-3 -left-1 sm:-left-2 text-[10px] sm:text-xs text-gray-400 font-mono">/** company_name */</span>
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 bg-clip-text text-transparent bg-gradient-to-r from-enabler-700 to-enabler-500">{companyInfo.nameJp}</h3>
                <p className="text-sm sm:text-base text-gray-600">{companyInfo.nameEn}</p>
                <div className="absolute right-0 top-0 bg-gray-50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[10px] sm:text-xs font-mono text-gray-400 animate-pulse">
                  {'<'}innovation_level{'>'}99.9%{'<'}/innovation_level{'>'}
                </div>
              </div>
            </MotionBox>
            
            <MotionBox delay={300}>
              <div className="mb-5 sm:mb-8">
                <div className="space-y-3 sm:space-y-4 relative">
                  <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-gradient-to-r from-enabler-50 to-gray-50 border border-enabler-100 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-md">
                    <div className="flex items-center mb-2">
                      <div className="bg-enabler-500 p-1.5 sm:p-2 md:p-3 rounded-full mr-2 sm:mr-3 shadow-md">
                        <Target className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-enabler-800 text-sm sm:text-base md:text-lg">ミッション</h4>
                    </div>
                    <div className="pl-2 sm:pl-3 border-l-2 sm:border-l-4 border-enabler-500 mb-2">
                      <p className="text-base sm:text-lg md:text-xl font-medium text-gray-800">「あったらいいな」を「あってよかった！」に。</p>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 ml-1 sm:ml-2">{companyInfo.mission}</p>
                    <div className="mt-2 sm:mt-3 text-right">
                      <Link to="/mission-vision" className="text-enabler-600 hover:text-enabler-800 text-xs sm:text-sm font-medium inline-flex items-center">
                        もっと詳しく <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-gradient-to-r from-enabler-50 to-gray-50 border border-enabler-100 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-md">
                    <div className="flex items-center mb-2">
                      <div className="bg-enabler-500 p-1.5 sm:p-2 md:p-3 rounded-full mr-2 sm:mr-3 shadow-md">
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-enabler-800 text-sm sm:text-base md:text-lg">ビジョン</h4>
                    </div>
                    <div className="pl-2 sm:pl-3 border-l-2 sm:border-l-4 border-enabler-500 mb-2">
                      <p className="text-base sm:text-lg md:text-xl font-medium text-gray-800">テクノロジーで毎日をもっと楽しく、もっと便利に。</p>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 ml-1 sm:ml-2">{companyInfo.vision}</p>
                    <div className="mt-2 sm:mt-3 text-right">
                      <Link to="/mission-vision" className="text-enabler-600 hover:text-enabler-800 text-xs sm:text-sm font-medium inline-flex items-center">
                        もっと詳しく <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </MotionBox>
            
            <MotionBox delay={400}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start group">
                    <div className="mt-0.5 mr-2 bg-enabler-100 p-1 sm:p-1.5 rounded-md group-hover:bg-enabler-200 transition-colors">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-enabler-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xs sm:text-sm text-gray-700">設立</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{companyInfo.established}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="mt-0.5 mr-2 bg-enabler-100 p-1 sm:p-1.5 rounded-md group-hover:bg-enabler-200 transition-colors">
                      <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-enabler-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xs sm:text-sm text-gray-700">事業内容</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{companyInfo.businessActivities}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start group">
                    <div className="mt-0.5 mr-2 bg-enabler-100 p-1 sm:p-1.5 rounded-md group-hover:bg-enabler-200 transition-colors">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-enabler-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xs sm:text-sm text-gray-700">所在地</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{companyInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="mt-0.5 mr-2 bg-enabler-100 p-1 sm:p-1.5 rounded-md group-hover:bg-enabler-200 transition-colors">
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 text-enabler-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xs sm:text-sm text-gray-700">オープンソース</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{companyInfo.openSource}</p>
                    </div>
                  </div>
                </div>
              </div>
            </MotionBox>
            
            {/* Techy footer */}
            <div className="mt-3 sm:mt-5 pt-2 sm:pt-3 border-t border-gray-100 text-center">
              <code className="text-[10px] sm:text-xs text-gray-400 font-mono inline-block animate-pulse">
                $ sudo innovation --optimize --level=maximum
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
