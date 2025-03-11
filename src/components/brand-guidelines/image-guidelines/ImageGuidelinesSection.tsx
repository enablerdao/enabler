import React from 'react';
import { motion } from 'framer-motion';

const ImageGuidelinesSection: React.FC = () => {
  return (
    <section className="mb-12">
      <div className="flex items-center mb-4 md:mb-6">
        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 5h16v14H4V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 14l4-4 4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
        </svg>
        <h2 className="text-2xl font-bold">5. 写真・イラスト</h2>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-3 border-b pb-2">写真の選び方</h3>
          <p className="mb-4">
            Enablerのブランドイメージを表現する写真は、「可能性」「成長」「創造」の3つの価値観を反映したものを選びましょう。
            人々の生き生きとした表情や、自然の美しさ、テクノロジーと人間の調和を感じさせる写真が適しています。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="aspect-video bg-gray-200 mb-3 flex items-center justify-center text-gray-500">
                写真例: 人々の笑顔
              </div>
              <h4 className="font-medium mb-1">人々の可能性</h4>
              <p className="text-sm text-gray-600">
                多様な人々が協力し合い、新しいことに挑戦している様子を捉えた写真
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="aspect-video bg-gray-200 mb-3 flex items-center justify-center text-gray-500">
                写真例: 成長する植物
              </div>
              <h4 className="font-medium mb-1">成長の象徴</h4>
              <p className="text-sm text-gray-600">
                成長や変化を象徴する自然の風景や、学びの場面を捉えた写真
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="aspect-video bg-gray-200 mb-3 flex items-center justify-center text-gray-500">
                写真例: テクノロジーと人間
              </div>
              <h4 className="font-medium mb-1">創造的な瞬間</h4>
              <p className="text-sm text-gray-600">
                新しいアイデアが生まれる瞬間や、テクノロジーと人間の調和を表現した写真
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="font-medium mb-2 text-blue-700">写真選びのポイント</h4>
            <ul className="list-disc pl-5 space-y-1 text-blue-800">
              <li>自然光を活かした明るい写真を選ぶ</li>
              <li>多様性を意識し、様々な年齢・性別・文化背景の人々を含める</li>
              <li>ポジティブで前向きな雰囲気を大切にする</li>
              <li>過度に加工された不自然な写真は避ける</li>
              <li>ブランドカラーと調和する色調の写真を選ぶ</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-3 border-b pb-2">イラストのスタイル</h3>
          <p className="mb-4">
            Enablerのイラストは、シンプルでありながらも温かみのあるスタイルを採用しています。
            直線と曲線をバランスよく使い、ブランドカラーを基調としたカラーパレットで統一感を出しましょう。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="aspect-square bg-gray-200 mb-3 flex items-center justify-center text-gray-500">
                イラスト例: フラットデザイン
              </div>
              <h4 className="font-medium mb-1">推奨スタイル</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                <li>フラットデザインを基本とする</li>
                <li>必要に応じて微妙な影や立体感を加える</li>
                <li>ブランドカラーを中心に、アクセントカラーを効果的に使用</li>
                <li>シンプルな線と形で構成し、複雑すぎないデザイン</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="aspect-square bg-gray-200 mb-3 flex items-center justify-center text-gray-500">
                イラスト例: 避けるべきスタイル
              </div>
              <h4 className="font-medium mb-1">避けるべきスタイル</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                <li>過度にリアルな描写や写実的なイラスト</li>
                <li>複雑すぎる装飾や細部</li>
                <li>ブランドカラーと調和しない派手な色使い</li>
                <li>古臭い印象を与えるクリップアートスタイル</li>
                <li>重たい印象の濃い影や複雑なグラデーション</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-3 border-b pb-2">アイコンデザイン</h3>
          <p className="mb-4">
            アイコンは情報を視覚的に伝える重要な要素です。一貫性のあるスタイルで、シンプルかつ直感的に理解できるデザインを心がけましょう。
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="aspect-square bg-gray-200 mb-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center text-gray-500">
                  アイコン{i}
                </div>
                <p className="text-sm text-gray-600">サンプルアイコン {i}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2 text-blue-700">アイコン作成のガイドライン</h4>
            <ul className="list-disc pl-5 space-y-1 text-blue-800">
              <li>2pxのストロークを基本とし、一貫した線の太さを維持する</li>
              <li>角丸処理は4pxの半径で統一する</li>
              <li>必要最小限の要素だけを使い、シンプルに保つ</li>
              <li>視認性を確保するため、小さいサイズでもはっきり見えるようにデザインする</li>
              <li>ブランドカラーを基本とし、必要に応じてアクセントカラーを使用する</li>
            </ul>
          </div>
        </div>

        <motion.div 
          className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold mb-3">写真・イラスト使用時の注意点</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2 text-blue-700">著作権と使用許諾</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>すべての写真・イラストは適切な使用権を取得していることを確認</li>
                <li>社内用と商用利用の区別を明確に</li>
                <li>クレジット表記が必要な場合は必ず記載</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2 text-blue-700">画像の品質</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Webでは最適化された画像を使用（遅延読み込みの実装推奨）</li>
                <li>印刷物では300dpi以上の高解像度画像を使用</li>
                <li>過度な圧縮で画質を落とさないよう注意</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageGuidelinesSection;
