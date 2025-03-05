
import React from 'react';
import { MotionBox } from './ui/motion-box';
import { Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        <MotionBox>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">お問い合わせ</h2>
        </MotionBox>
        
        <MotionBox delay={200}>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            サービスに関するご質問やご相談など、お気軽にお問い合わせください。
            担当者が迅速にご対応いたします。
          </p>
        </MotionBox>
        
        <div className="max-w-2xl mx-auto">
          <MotionBox delay={300}>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-enabler-500 focus:border-transparent transition-all duration-200"
                    placeholder="山田 太郎"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-enabler-500 focus:border-transparent transition-all duration-200"
                    placeholder="your-email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  件名
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-enabler-500 focus:border-transparent transition-all duration-200"
                  placeholder="お問い合わせの件名"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-enabler-500 focus:border-transparent transition-all duration-200"
                  placeholder="お問い合わせ内容をご記入ください"
                ></textarea>
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-enabler-600 text-white font-medium transition-all duration-200 hover:bg-enabler-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4 mr-2" />
                  送信する
                </button>
              </div>
            </form>
          </MotionBox>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
