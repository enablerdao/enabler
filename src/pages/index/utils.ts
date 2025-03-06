
export const getServiceTagline = (serviceName: string): string => {
  switch (serviceName) {
    case 'StayFlow':
      return 'ホストの悩みは、もう過去のもの。';
    case 'TravelMate':
      return 'あなたの旅に、最適な相棒を。';
    case 'TimeDrop':
      return 'お得に泊まる喜びを、もっと手軽に。';
    case 'PetPals':
      return '信頼できる仲間と、ペットライフをもっと楽しく。';
    case 'Kireasy':
      return '面倒な清掃業務は、AIにお任せ。';
    case 'MatchSense':
      return 'AIが導く、運命の出会い。';
    case 'TaskTrust':
      return 'あなたの『困った』を『よかった』に変える。';
    case 'Skillity':
      return 'あなたのスキルが、次の可能性を生み出す。';
    case 'Aicademy':
      return '学びがもっと楽しく、深く。';
    case 'AIFit':
      return '理想の体をAIがサポート。';
    case 'EmotionSeed':
      return 'あなたの心に寄り添う、居心地のいい場所。';
    case 'FoodSaver':
      return '食べて、つながって、未来を救う。';
    case 'SeniorKnowledge':
      return '経験を未来への贈り物に。';
    case 'DojoFlow':
      return '道場運営をもっとスマートに。';
    default:
      return 'テクノロジーの力で、新しい体験を。';
  }
};

export const getServiceShortDescription = (serviceName: string, fullDescription: string): string => {
  switch (serviceName) {
    case 'StayFlow':
      return '予約管理から清掃、ゲスト対応までをまとめてスマート化。忙しい日々をもっと自由に。';
    case 'TravelMate':
      return 'AIがあなたの旅の好みを完全に理解し、ぴったりな旅行プランを提案。';
    case 'TimeDrop':
      return '急な宿泊でも、手頃な価格で良質な滞在を実現。';
    case 'PetPals':
      return '大切なペットを預かったり預かってもらったり、自宅での滞在から散歩代行まで。信頼関係に基づいたペットケアをサポート。';
    case 'Kireasy':
      return 'AIマッチングで清掃スタッフとリアルタイムに連携。清掃がぐっとラクになる。';
    case 'MatchSense':
      return 'あなたの価値観や理想をAIが分析し、運命の人との出会いをサポート。';
    case 'TaskTrust':
      return '日常のちょっとした困りごとから専門的な仕事まで、信頼できる便利屋さんに気軽に依頼できるプラットフォーム。';
    case 'Skillity':
      return '得意を共有し、スキルでつながるマーケットプレイス。';
    case 'Aicademy':
      return 'AIが最適な教材を提供し、あなた専用の教育プログラムを構築。';
    case 'AIFit':
      return 'AIと共に、あなただけのトレーニングと健康的な毎日を。';
    case 'EmotionSeed':
      return '気持ちや悩みを共有し、共感できるオンラインコミュニティ。';
    case 'FoodSaver':
      return '食品ロスを防ぎ、美味しい節約体験を提供。';
    case 'SeniorKnowledge':
      return '世代を超えた知恵と交流が楽しめるコミュニティ。';
    case 'DojoFlow':
      return '柔術・武道道場のための予約管理や進捗管理を簡単に一元化。';
    default:
      return fullDescription ? fullDescription.substring(0, 100) + '...' : '';
  }
};

export const getServiceBullets = (serviceName: string): { icon: string; text: string }[] => {
  switch (serviceName) {
    case 'StayFlow':
      return [
        { icon: '📅', text: '予約をスムーズに一元化' },
        { icon: '🧹', text: 'クリーンアップもラクラク管理' }
      ];
    case 'DojoFlow':
      return [
        { icon: '🥋', text: '会員管理と月謝収納の一元化' },
        { icon: '📈', text: '生徒の成長を可視化' }
      ];
    case 'Skillity':
      return [
        { icon: '💼', text: 'スキルの売買を簡単に' },
        { icon: '🔍', text: '必要なスキルをすぐに見つける' }
      ];
    case 'PetPals':
      return [
        { icon: '🐾', text: '信頼できるペットシッターを探せる' },
        { icon: '🏠', text: 'お出かけ中も安心のケア' }
      ];
    case 'TaskTrust':
      return [
        { icon: '✅', text: '多様なヘルパーからピッタリの人材を' },
        { icon: '🔒', text: '安心の保証システム' }
      ];
    case 'Kireasy':
      return [
        { icon: '💫', text: 'プロの清掃スタッフをAIでマッチング' },
        { icon: '📱', text: 'スケジュール管理も簡単に' }
      ];
    default:
      return [];
  }
};
