
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { HelpCircle } from 'lucide-react';

const FAQContact = () => {
  return (
    <MotionBox delay={1000}>
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <HelpCircle className="text-enabler-600 mr-3" size={24} />
          <h2 className="text-2xl font-bold text-gray-900">9. FAQ・お問い合わせ</h2>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-subtle">
          <p className="text-lg mb-4">
            ブランドやロゴに関するご質問・利用申請は、以下までご連絡ください。
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>メール：<a href="mailto:brand@enabler.jp" className="text-enabler-600 hover:underline">brand@enabler.jp</a></li>
            <li>専用フォーム（<a href="#" className="text-enabler-600 hover:underline">Webページ</a>）</li>
          </ul>
        </div>
      </section>
    </MotionBox>
  );
};

export default FAQContact;
