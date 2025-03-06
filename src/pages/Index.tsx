
import React, { useEffect } from 'react';
import { logActivity } from '@/lib/logger';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    logActivity('pageView', { path: '/' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl text-gray-900">ENABLER</div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-900 hover:text-gray-600">Home</Link>
              <Link to="/services" className="text-gray-900 hover:text-gray-600">Services</Link>
              <Link to="/about" className="text-gray-900 hover:text-gray-600">About</Link>
              <Link to="/contact" className="text-gray-900 hover:text-gray-600">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-600 mb-3">株式会社イネブラ | Enabler, Inc.</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              「あったらいいな」を超えて、「なくてはならない」へ。
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              テクノロジーの力で、あなたの毎日をちょっと感動的に。
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">ENABLER サービス一覧</h2>

          {/* STAY & TRAVEL Category */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="mr-2">🌴</span> STAY & TRAVEL
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* StayFlow */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">StayFlow（ステイフロー）</h4>
                <p className="text-gray-700 mb-4 italic">「ホストの悩みは、もう過去のもの。」</p>
                <p className="text-gray-600 mb-4">
                  予約管理から清掃、ゲスト対応までをまとめてスマート化。忙しい日々をもっと自由に。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">📅</span>
                    <span>予約をスムーズに一元化</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🧹</span>
                    <span>クリーンアップもラクラク管理</span>
                  </li>
                </ul>
              </div>

              {/* TravelMate */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">TravelMate（トラベルメイト）</h4>
                <p className="text-gray-700 mb-4 italic">「あなたの旅に、最適な相棒を。」</p>
                <p className="text-gray-600">
                  AIがあなたの旅の好みを完全に理解し、ぴったりな旅行プランを提案。
                </p>
              </div>

              {/* TimeDrop */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">TimeDrop（タイムドロップ）</h4>
                <p className="text-gray-700 mb-4 italic">「お得に泊まる喜びを、もっと手軽に。」</p>
                <p className="text-gray-600">
                  急な宿泊でも、手頃な価格で良質な滞在を実現。
                </p>
              </div>
            </div>
          </div>

          {/* LIFE & COMMUNITY Category */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="mr-2">🏡</span> LIFE & COMMUNITY
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* PetPals */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">PetPals（ペットパルズ）</h4>
                <p className="text-gray-700 mb-4 italic">「信頼できる仲間と、ペットライフをもっと楽しく。」</p>
                <p className="text-gray-600">
                  大切なペットを預かったり預かってもらったり、自宅での滞在から散歩代行まで。信頼関係に基づいたペットケアをサポート。
                </p>
              </div>

              {/* Kireasy */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">Kireasy（キリージー）</h4>
                <p className="text-gray-700 mb-4 italic">「面倒な清掃業務は、AIにお任せ。」</p>
                <p className="text-gray-600">
                  AIマッチングで清掃スタッフとリアルタイムに連携。清掃がぐっとラクになる。
                </p>
              </div>

              {/* MatchSense */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">MatchSense（マッチセンス）</h4>
                <p className="text-gray-700 mb-4 italic">「AIが導く、運命の出会い。」</p>
                <p className="text-gray-600">
                  あなたの価値観や理想をAIが分析し、運命の人との出会いをサポート。
                </p>
              </div>
            </div>
          </div>

          {/* WORK & PRODUCTIVITY Category */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="mr-2">💼</span> WORK & PRODUCTIVITY
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* TaskTrust */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">TaskTrust（タスクトラスト）</h4>
                <p className="text-gray-700 mb-4 italic">「あなたの『困った』を『よかった』に変える。」</p>
                <p className="text-gray-600">
                  日常のちょっとした困りごとから専門的な仕事まで、信頼できる便利屋さんに気軽に依頼できるプラットフォーム。
                </p>
              </div>

              {/* Skillity */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">Skillity（スキリティ）</h4>
                <p className="text-gray-700 mb-4 italic">「あなたのスキルが、次の可能性を生み出す。」</p>
                <p className="text-gray-600">
                  得意を共有し、スキルでつながるマーケットプレイス。
                </p>
              </div>

              {/* AIcademy */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">AIcademy（AIカデミー）</h4>
                <p className="text-gray-700 mb-4 italic">「学びがもっと楽しく、深く。」</p>
                <p className="text-gray-600">
                  AIが最適な教材を提供し、あなた専用の教育プログラムを構築。
                </p>
              </div>
            </div>
          </div>

          {/* HEALTH & WELLNESS Category */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="mr-2">🌱</span> HEALTH & WELLNESS
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AIFit */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">AIFit（AIフィット）</h4>
                <p className="text-gray-700 mb-4 italic">「理想の体をAIがサポート。」</p>
                <p className="text-gray-600">
                  AIと共に、あなただけのトレーニングと健康的な毎日を。
                </p>
              </div>

              {/* EmotionSeed */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">EmotionSeed（エモーションシード）</h4>
                <p className="text-gray-700 mb-4 italic">「あなたの心に寄り添う、居心地のいい場所。」</p>
                <p className="text-gray-600">
                  気持ちや悩みを共有し、共感できるオンラインコミュニティ。
                </p>
              </div>
            </div>
          </div>

          {/* Additional LIFE & COMMUNITY Category */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="mr-2">🌍</span> LIFE & COMMUNITY
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* FoodSaver */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">FoodSaver（フードセーバー）</h4>
                <p className="text-gray-700 mb-4 italic">「食べて、つながって、未来を救う。」</p>
                <p className="text-gray-600">
                  食品ロスを防ぎ、美味しい節約体験を提供。
                </p>
              </div>

              {/* SeniorKnowledge */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">SeniorKnowledge（シニアナレッジ）</h4>
                <p className="text-gray-700 mb-4 italic">「経験を未来への贈り物に。」</p>
                <p className="text-gray-600">
                  世代を超えた知恵と交流が楽しめるコミュニティ。
                </p>
              </div>
            </div>
          </div>

          {/* SPECIALIZED SERVICES Category */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="mr-2">🥋</span> SPECIALIZED SERVICES
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* DojoFlow */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">DojoFlow（道場フロー）</h4>
                <p className="text-gray-700 mb-4 italic">「道場運営をもっとスマートに。」</p>
                <p className="text-gray-600">
                  柔術・武道道場のための予約管理や進捗管理を簡単に一元化。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            テクノロジーを通じて、あなたがワクワクする未来を一緒に作りませんか？
          </p>
          <p className="text-xl font-medium mb-8">
            あなたの「あったらいいな」は、もうここにあります。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Enabler, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
