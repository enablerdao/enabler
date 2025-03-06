
import React from 'react';
import { ServiceCategory, ServiceItem } from './ServiceCategory';

const ServicesSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">ENABLER サービス一覧</h2>

        {/* STAY & TRAVEL Category */}
        <ServiceCategory title="STAY & TRAVEL" icon="🌴">
          <ServiceItem
            title="StayFlow（ステイフロー）"
            tagline="「ホストの悩みは、もう過去のもの。」"
            description="予約管理から清掃、ゲスト対応までをまとめてスマート化。忙しい日々をもっと自由に。"
            bullets={[
              { icon: '📅', text: '予約をスムーズに一元化' },
              { icon: '🧹', text: 'クリーンアップもラクラク管理' },
            ]}
          />
          <ServiceItem
            title="TravelMate（トラベルメイト）"
            tagline="「あなたの旅に、最適な相棒を。」"
            description="AIがあなたの旅の好みを完全に理解し、ぴったりな旅行プランを提案。"
          />
          <ServiceItem
            title="TimeDrop（タイムドロップ）"
            tagline="「お得に泊まる喜びを、もっと手軽に。」"
            description="急な宿泊でも、手頃な価格で良質な滞在を実現。"
          />
        </ServiceCategory>

        {/* LIFE & COMMUNITY Category */}
        <ServiceCategory title="LIFE & COMMUNITY" icon="🏡">
          <ServiceItem
            title="PetPals（ペットパルズ）"
            tagline="「信頼できる仲間と、ペットライフをもっと楽しく。」"
            description="大切なペットを預かったり預かってもらったり、自宅での滞在から散歩代行まで。信頼関係に基づいたペットケアをサポート。"
          />
          <ServiceItem
            title="Kireasy（キリージー）"
            tagline="「面倒な清掃業務は、AIにお任せ。」"
            description="AIマッチングで清掃スタッフとリアルタイムに連携。清掃がぐっとラクになる。"
          />
          <ServiceItem
            title="MatchSense（マッチセンス）"
            tagline="「AIが導く、運命の出会い。」"
            description="あなたの価値観や理想をAIが分析し、運命の人との出会いをサポート。"
          />
        </ServiceCategory>

        {/* WORK & PRODUCTIVITY Category */}
        <ServiceCategory title="WORK & PRODUCTIVITY" icon="💼">
          <ServiceItem
            title="TaskTrust（タスクトラスト）"
            tagline="「あなたの『困った』を『よかった』に変える。」"
            description="日常のちょっとした困りごとから専門的な仕事まで、信頼できる便利屋さんに気軽に依頼できるプラットフォーム。"
          />
          <ServiceItem
            title="Skillity（スキリティ）"
            tagline="「あなたのスキルが、次の可能性を生み出す。」"
            description="得意を共有し、スキルでつながるマーケットプレイス。"
          />
          <ServiceItem
            title="AIcademy（AIカデミー）"
            tagline="「学びがもっと楽しく、深く。」"
            description="AIが最適な教材を提供し、あなた専用の教育プログラムを構築。"
          />
        </ServiceCategory>

        {/* HEALTH & WELLNESS Category */}
        <ServiceCategory title="HEALTH & WELLNESS" icon="🌱">
          <ServiceItem
            title="AIFit（AIフィット）"
            tagline="「理想の体をAIがサポート。」"
            description="AIと共に、あなただけのトレーニングと健康的な毎日を。"
          />
          <ServiceItem
            title="EmotionSeed（エモーションシード）"
            tagline="「あなたの心に寄り添う、居心地のいい場所。」"
            description="気持ちや悩みを共有し、共感できるオンラインコミュニティ。"
          />
        </ServiceCategory>

        {/* Additional LIFE & COMMUNITY Category */}
        <ServiceCategory title="LIFE & COMMUNITY" icon="🌍">
          <ServiceItem
            title="FoodSaver（フードセーバー）"
            tagline="「食べて、つながって、未来を救う。」"
            description="食品ロスを防ぎ、美味しい節約体験を提供。"
          />
          <ServiceItem
            title="SeniorKnowledge（シニアナレッジ）"
            tagline="「経験を未来への贈り物に。」"
            description="世代を超えた知恵と交流が楽しめるコミュニティ。"
          />
        </ServiceCategory>

        {/* SPECIALIZED SERVICES Category */}
        <ServiceCategory title="SPECIALIZED SERVICES" icon="🥋">
          <ServiceItem
            title="DojoFlow（道場フロー）"
            tagline="「道場運営をもっとスマートに。」"
            description="柔術・武道道場のための予約管理や進捗管理を簡単に一元化。"
          />
        </ServiceCategory>
      </div>
    </section>
  );
};

export default ServicesSection;
