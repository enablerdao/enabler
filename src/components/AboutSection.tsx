
import React from 'react';
import { companyInfo } from '@/lib/data';
import { MotionBox } from './ui/motion-box';
import { Briefcase, MapPin, Mail, Phone, Calendar } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <MotionBox>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">会社情報</h2>
          </MotionBox>
          
          <div className="bg-white rounded-xl shadow-subtle p-8 md:p-10">
            <MotionBox delay={200}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{companyInfo.nameJp}</h3>
                <p className="text-gray-600">{companyInfo.nameEn}</p>
              </div>
            </MotionBox>
            
            <MotionBox delay={300}>
              <div className="mb-8">
                <p className="text-gray-700 mb-6">{companyInfo.description}</p>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-enabler-50 border border-enabler-100">
                    <h4 className="font-bold text-enabler-800 mb-2">ミッション</h4>
                    <p className="text-gray-700">{companyInfo.mission}</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-enabler-50 border border-enabler-100">
                    <h4 className="font-bold text-enabler-800 mb-2">ビジョン</h4>
                    <p className="text-gray-700">{companyInfo.vision}</p>
                  </div>
                </div>
              </div>
            </MotionBox>
            
            <MotionBox delay={400}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-enabler-600 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-700">設立</h4>
                      <p className="text-gray-600">{companyInfo.established}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Briefcase className="w-5 h-5 text-enabler-600 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-700">事業内容</h4>
                      <p className="text-gray-600">デジタルサービスの開発・運営</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-enabler-600 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-700">所在地</h4>
                      <p className="text-gray-600">{companyInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-enabler-600 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-700">メールアドレス</h4>
                      <a href={`mailto:${companyInfo.email}`} className="text-enabler-600 hover:underline">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-enabler-600 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-700">電話番号</h4>
                      <p className="text-gray-600">{companyInfo.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </MotionBox>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
