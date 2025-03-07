
import React, { useEffect, useRef } from 'react';
import { companyInfo } from '@/lib/data';
import { MotionBox } from './ui/motion-box';
import { Briefcase, MapPin, Calendar, Code, Cpu, BrainCircuit, Github } from 'lucide-react';
import SimpleIllustration from './simple-illustration';

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
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
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
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <MotionBox>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">会社情報</h2>
            <div className="flex justify-center items-center gap-2 mb-12">
              <span className="h-px w-12 bg-enabler-400"></span>
              <Code size={16} className="text-enabler-500" />
              <span className="h-px w-12 bg-enabler-400"></span>
            </div>
          </MotionBox>
          
          <div className="bg-white rounded-xl shadow-subtle p-8 md:p-10 border border-gray-100 hover:shadow-xl transition-all duration-500">
            <MotionBox delay={200}>
              <div className="mb-8 relative">
                <span className="absolute -top-3 -left-3 text-xs text-gray-400 font-mono">/** company_name */</span>
                <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-enabler-700 to-enabler-500">{companyInfo.nameJp}</h3>
                <p className="text-gray-600">{companyInfo.nameEn}</p>
                <div className="absolute right-0 top-0 bg-gray-50 px-2 py-1 rounded text-xs font-mono text-gray-400 animate-pulse">
                  {'<'}innovation_level{'>'}99.9%{'<'}/innovation_level{'>'}
                </div>
              </div>
            </MotionBox>
            
            <MotionBox delay={300}>
              <div className="mb-8">
                <p className="text-gray-700 mb-6 relative">
                  {companyInfo.description}
                  <span className="absolute -right-2 -bottom-2 text-enabler-300 opacity-50">_</span>
                </p>
                
                {/* Added the modern illustration */}
                <SimpleIllustration className="my-10" />
                
                <div className="space-y-4 relative">
                  <div className="p-5 rounded-lg bg-gradient-to-r from-enabler-50 to-gray-50 border border-enabler-100 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-md">
                    <div className="flex items-center mb-2">
                      <BrainCircuit className="w-5 h-5 text-enabler-600 mr-2" />
                      <h4 className="font-bold text-enabler-800">ミッション</h4>
                    </div>
                    <p className="text-gray-700">{companyInfo.mission}</p>
                  </div>
                  
                  <div className="p-5 rounded-lg bg-gradient-to-r from-enabler-50 to-gray-50 border border-enabler-100 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-md">
                    <div className="flex items-center mb-2">
                      <Cpu className="w-5 h-5 text-enabler-600 mr-2" />
                      <h4 className="font-bold text-enabler-800">ビジョン</h4>
                    </div>
                    <p className="text-gray-700">{companyInfo.vision}</p>
                  </div>
                </div>
              </div>
            </MotionBox>
            
            <MotionBox delay={400}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start group">
                    <div className="mt-0.5 mr-3 bg-enabler-100 p-2 rounded-md group-hover:bg-enabler-200 transition-colors">
                      <Calendar className="w-5 h-5 text-enabler-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">設立</h4>
                      <p className="text-gray-600">{companyInfo.established}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="mt-0.5 mr-3 bg-enabler-100 p-2 rounded-md group-hover:bg-enabler-200 transition-colors">
                      <Briefcase className="w-5 h-5 text-enabler-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">事業内容</h4>
                      <p className="text-gray-600">{companyInfo.businessActivities}</p>
                      <p className="text-xs text-gray-400 font-mono mt-1">// その他、宇宙の謎を解明する秘密プロジェクトも進行中</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start group">
                    <div className="mt-0.5 mr-3 bg-enabler-100 p-2 rounded-md group-hover:bg-enabler-200 transition-colors">
                      <MapPin className="w-5 h-5 text-enabler-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">所在地</h4>
                      <p className="text-gray-600">{companyInfo.address}</p>
                      <p className="text-xs text-gray-400 italic mt-1">*実際の場所は量子空間内にありますが、郵便物は東京でお受け取りしています</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="mt-0.5 mr-3 bg-enabler-100 p-2 rounded-md group-hover:bg-enabler-200 transition-colors">
                      <Github className="w-5 h-5 text-enabler-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">オープンソース</h4>
                      <p className="text-gray-600">{companyInfo.openSource}</p>
                    </div>
                  </div>
                </div>
              </div>
            </MotionBox>
            
            {/* Techy footer */}
            <div className="mt-12 pt-4 border-t border-gray-100 text-center">
              <code className="text-xs text-gray-400 font-mono inline-block animate-pulse">
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
