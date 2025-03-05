
import React, { useState } from 'react';
import { MotionBox } from './ui/motion-box';
import { motion } from 'framer-motion';
import { QuoteIcon } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "「TimeDrop」のおかげで、出張先での急な宿泊も全く心配なくなりました。いつも手頃な価格で素晴らしいホテルを見つけることができます。",
    author: "佐藤 拓也",
    title: "IT企業 営業部長",
    image: "https://placehold.co/60x60/374151/FFFFFF.png?text=ST"
  },
  {
    id: 2,
    quote: "「StayFlow」を導入してから、民泊の運営が格段に楽になりました。特に深夜のチェックインや外国人ゲスト対応が自動化されたのは大きな変化です。",
    author: "田中 美咲",
    title: "民泊オーナー",
    image: "https://placehold.co/60x60/374151/FFFFFF.png?text=TM"
  },
  {
    id: 3,
    quote: "「HealthGenius」の食事アドバイスに従うようになってから、体重が10kg減少し、健康診断の数値も改善しました。無理なくライフスタイルを変えられたのが良かったです。",
    author: "鈴木 健太",
    title: "会社員",
    image: "https://placehold.co/60x60/374151/FFFFFF.png?text=SK"
  }
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  
  return (
    <section className="py-20 bg-enabler-50">
      <div className="container mx-auto px-6">
        <MotionBox>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            お客様の声
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            私たちのサービスを活用されているお客様からいただいた声をご紹介します。
          </p>
        </MotionBox>
        
        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: active === index ? 1 : 0,
                y: active === index ? 0 : 20,
                display: active === index ? 'block' : 'none'
              }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-subtle mb-6"
            >
              <div className="flex items-start">
                <QuoteIcon size={42} className="text-enabler-300 mr-4 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray-700 mb-6 italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  active === index ? 'bg-enabler-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
