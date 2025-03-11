import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  category: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqItems: FAQItem[] = [
    {
      question: 'ロゴの色を変更することはできますか？',
      answer: (
        <>
          <p>基本的には、ブランドガイドラインで定められた色を使用してください。ただし、以下の例外があります：</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>モノクロ印刷の場合は、モノクロバージョンのロゴを使用できます</li>
            <li>背景色との対比が不十分な場合は、視認性を確保するために調整が可能です</li>
            <li>特別なイベントや限定的なキャンペーンでは、マーケティングチームの承認を得た上で変更可能です</li>
          </ul>
          <p className="mt-2">変更を検討する場合は、必ず事前に <a href="mailto:brand@enabler.example.com" className="text-blue-600 underline">brand@enabler.example.com</a> までご相談ください。</p>
        </>
      ),
      category: 'logo'
    },
    {
      question: 'ロゴの周りに必要な余白はどれくらいですか？',
      answer: (
        <>
          <p>ロゴの周囲には、ロゴの高さの少なくとも25%に相当する余白（クリアスペース）を確保してください。これにより、ロゴの視認性と効果が最大限に発揮されます。</p>
          <p className="mt-2">例えば、ロゴの高さが100pxの場合、周囲に少なくとも25pxの余白を設けてください。</p>
        </>
      ),
      category: 'logo'
    },
    {
      question: 'ブランドフォントを商用プロジェクトで使用できますか？',
      answer: (
        <>
          <p>Enablerのブランドフォントは以下のライセンスに基づいています：</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Noto Sans JP: SILオープンフォントライセンス（OFL）に基づき商用利用可能</li>
            <li>Montserrat: SILオープンフォントライセンス（OFL）に基づき商用利用可能</li>
          </ul>
          <p className="mt-2">ただし、フォントを再配布したり、大幅に改変したりする場合は、それぞれのライセンス条項を確認してください。</p>
        </>
      ),
      category: 'typography'
    },
    {
      question: 'ブランドカラーのRGB値とCMYK値はどこで確認できますか？',
      answer: (
        <>
          <p>ブランドカラーの詳細な色指定は、ダウンロード可能なカラーパレットパッケージに含まれています。このパッケージには、以下の形式での色指定が含まれています：</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>RGB値（デジタル用）</li>
            <li>CMYK値（印刷用）</li>
            <li>HEX値（ウェブ用）</li>
            <li>Pantone値（特色印刷用）</li>
          </ul>
          <p className="mt-2">カラーパレットパッケージは、「ダウンロード可能なリソース」セクションからダウンロードできます。</p>
        </>
      ),
      category: 'colors'
    },
    {
      question: 'ソーシャルメディアでブランドの声調をどのように維持すればよいですか？',
      answer: (
        <>
          <p>ソーシャルメディアでのコミュニケーションでは、以下のポイントを意識してください：</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>親しみやすく、でも専門性を感じさせる言葉遣いを心がける</li>
            <li>短く簡潔な文章を使用し、専門用語は必要最小限に抑える</li>
            <li>ポジティブで前向きなトーンを維持する</li>
            <li>質問には迅速かつ丁寧に回答する</li>
            <li>ユーモアを適度に取り入れるが、論争的な話題は避ける</li>
          </ul>
          <p className="mt-2">詳細なソーシャルメディアガイドラインは、マーケティングチームから入手できます。</p>
        </>
      ),
      category: 'voice'
    },
    {
      question: 'ブランドアセットを第三者と共有することはできますか？',
      answer: (
        <>
          <p>Enablerのブランドアセットを第三者（パートナー、メディア、外部デザイナーなど）と共有する場合は、以下のガイドラインに従ってください：</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>共有前に、利用目的と範囲を明確にする</li>
            <li>ブランドガイドラインへのリンクも一緒に提供する</li>
            <li>商用利用の場合は、事前に書面での許可を取得する</li>
            <li>アセットの改変が必要な場合は、変更内容を事前に承認を得る</li>
          </ul>
          <p className="mt-2">不明な点がある場合は、<a href="mailto:brand@enabler.example.com" className="text-blue-600 underline">brand@enabler.example.com</a> までお問い合わせください。</p>
        </>
      ),
      category: 'general'
    },
    {
      question: 'ブランドガイドラインはどのくらいの頻度で更新されますか？',
      answer: (
        <>
          <p>Enablerのブランドガイドラインは、以下のタイミングで更新されます：</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>定期更新：年に1回（通常は年初）</li>
            <li>マイナーアップデート：必要に応じて四半期ごと</li>
            <li>メジャーリブランディング：数年に一度（必要に応じて）</li>
          </ul>
          <p className="mt-2">更新があった場合は、登録ユーザーにメールで通知されます。最新のガイドラインは常にこのウェブサイトで確認できます。</p>
        </>
      ),
      category: 'general'
    },
    {
      question: 'ブランドに関する質問がある場合、誰に連絡すればよいですか？',
      answer: (
        <>
          <p>ブランドに関する質問や相談は、以下の連絡先にお問い合わせください：</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>一般的なブランド質問：<a href="mailto:brand@enabler.example.com" className="text-blue-600 underline">brand@enabler.example.com</a></li>
            <li>メディア関連の問い合わせ：<a href="mailto:media@enabler.example.com" className="text-blue-600 underline">media@enabler.example.com</a></li>
            <li>パートナーシップ：<a href="mailto:partners@enabler.example.com" className="text-blue-600 underline">partners@enabler.example.com</a></li>
          </ul>
          <p className="mt-2">通常、営業日内に24時間以内に返信いたします。</p>
        </>
      ),
      category: 'general'
    }
  ];

  const categories = [
    { id: 'all', name: 'すべて' },
    { id: 'logo', name: 'ロゴ' },
    { id: 'colors', name: 'カラー' },
    { id: 'typography', name: 'タイポグラフィ' },
    { id: 'voice', name: '声調と言葉遣い' },
    { id: 'general', name: '一般' }
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-12">
      <div className="flex items-center mb-4 md:mb-6">
        <HelpCircle className="w-6 h-6 mr-2" />
        <h2 className="text-2xl font-bold">8. よくある質問（FAQ）</h2>
      </div>

      <p className="mb-6 text-gray-700">
        ブランドガイドラインに関するよくある質問とその回答をまとめました。
        カテゴリーで絞り込むことも可能です。
      </p>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFAQs.map((faq, index) => (
          <motion.div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 bg-gray-50 text-gray-700">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {filteredFAQs.length === 0 && (
        <div className="p-8 text-center bg-gray-50 rounded-lg">
          <p className="text-gray-500">このカテゴリーの質問はまだありません。</p>
        </div>
      )}

      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">質問が見つからない場合</h3>
        <p className="text-sm text-blue-700">
          ここに記載されていない質問がある場合は、<a href="mailto:brand@enabler.example.com" className="underline hover:text-blue-900">brand@enabler.example.com</a> までお問い合わせください。
          また、定期的に新しい質問と回答を追加していきます。
        </p>
      </div>
    </section>
  );
};

export default FAQSection;