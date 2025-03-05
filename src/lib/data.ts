
export interface Service {
  id: number;
  rank: 'S' | 'A' | 'B' | 'C';
  nameEn: string;
  nameJp: string;
  marketSize: string;
  domain: string;
  goal: string;
  description?: string;
}

export const services: Service[] = [
  {
    id: 1,
    rank: 'S',
    nameEn: 'TimeDrop',
    nameJp: 'タイムドロップ - 当日割引宿泊予約',
    marketSize: '約110兆円',
    domain: 'timedrop.io',
    goal: 'ベータ版アプリ公開と初期ユーザー500名獲得',
    description: '当日空室となったホテルや宿泊施設の特別割引を提供するプラットフォーム。最大70%オフで高級ホテルも予約可能。'
  },
  {
    id: 2,
    rank: 'S',
    nameEn: 'StayFlow',
    nameJp: 'ステイフロー - 民泊運営管理',
    marketSize: '数兆円規模',
    domain: 'stayflow.io',
    goal: '管理物件数を10件増やし、口コミ50件獲得',
    description: '民泊オーナーのための包括的な運営管理ツール。予約管理、清掃スケジュール、ゲスト対応を自動化。'
  },
  {
    id: 3,
    rank: 'S',
    nameEn: 'HealthGenius',
    nameJp: 'ヘルスジーニアス - AI健康管理コーチ',
    marketSize: '数兆円規模',
    domain: 'healthgenius.ai',
    goal: 'ユーザー登録数1,000人突破と月間アクティブ率30％',
    description: 'AIがパーソナライズした健康アドバイスと運動計画を提案。食事、睡眠、運動データを分析し最適な健康習慣を構築。'
  },
  {
    id: 4,
    rank: 'A',
    nameEn: 'Skillity',
    nameJp: 'スキリティ - スキルシェア',
    marketSize: '約4兆円',
    domain: 'skillity.io',
    goal: '登録スキル数500件、ユーザー数300名突破',
    description: '個人のスキルやノウハウを売買できるマーケットプレイス。ビジネス、クリエイティブ、テクノロジーなど多様なカテゴリーを提供。'
  },
  {
    id: 5,
    rank: 'A',
    nameEn: 'Unused',
    nameJp: 'アンユーズド - 空間再利用',
    marketSize: '数千億円規模',
    domain: 'unused.io',
    goal: 'リストアップ空間数50件達成、初成約10件',
    description: '使われていない空きスペースを一時利用できるプラットフォーム。イベント、撮影、ポップアップストアなどに活用可能。'
  },
  {
    id: 6,
    rank: 'A',
    nameEn: 'MatchSense',
    nameJp: 'マッチセンス - AI婚活マッチング',
    marketSize: '約1兆円規模',
    domain: 'matchsense.io',
    goal: 'マッチング成功事例を20件以上獲得',
    description: 'AIが価値観や生活スタイルを分析し、最適なパートナー候補を紹介。従来のマッチングよりも高い成婚率を実現。'
  },
  {
    id: 7,
    rank: 'A',
    nameEn: 'TravelMate',
    nameJp: 'トラベルAI - 旅行コンシェルジュ',
    marketSize: '約110兆円',
    domain: 'travelai.io',
    goal: 'AIレコメンド精度向上、初期フィードバック100件収集',
    description: 'AIが旅行者の好みや予算に合わせたオーダーメイドの旅行プランを提案。地元の穴場スポットや体験も紹介。'
  },
  {
    id: 8,
    rank: 'A',
    nameEn: 'Aicademy',
    nameJp: 'アイカデミー - AIパーソナライズ教育',
    marketSize: '約30兆円',
    domain: 'aicademy.ai',
    goal: '教育プログラム10件完成、無料体験者500人',
    description: '学習者一人ひとりの理解度や学習スタイルに合わせた教育コンテンツを提供。AIが弱点を分析し効率的な学習をサポート。'
  },
  {
    id: 9,
    rank: 'B',
    nameEn: 'AIFit',
    nameJp: 'AIフィット - パーソナルジム',
    marketSize: '約10兆円',
    domain: 'aifit.ai',
    goal: '初回体験トレーニング100件提供',
    description: 'AIが身体データを分析し、最適なトレーニングプランと栄養アドバイスを提供。リアルタイムでフォームチェックも可能。'
  },
  {
    id: 10,
    rank: 'B',
    nameEn: 'TaskTrust',
    nameJp: 'タスクトラスト - お手伝いマッチング',
    marketSize: '約75兆円（世界）',
    domain: 'tasktrust.io',
    goal: '新規マッチング件数100件突破',
    description: '日常の家事や雑用を依頼できるシェアリングサービス。信頼性の高いヘルパーと安全に取引可能。'
  },
  {
    id: 11,
    rank: 'B',
    nameEn: 'FoodSaver',
    nameJp: 'フードセーバー - 食品ロスマーケット',
    marketSize: '約6000億円',
    domain: 'foodsaver.ai',
    goal: 'パートナー店舗20件と契約完了',
    description: '飲食店や小売店の余剰食品を特別価格で提供するプラットフォーム。食品ロス削減と消費者の節約を同時に実現。'
  },
  {
    id: 12,
    rank: 'B',
    nameEn: 'PetPals',
    nameJp: 'ペットパルズ - ペット預かりサービス',
    marketSize: '数千億円規模',
    domain: 'petpals.io',
    goal: '預かりサービス利用実績50件達成',
    description: '信頼できるペットシッターとペットオーナーをマッチング。安心して愛犬・愛猫を預けられるサービス。'
  },
  {
    id: 13,
    rank: 'B',
    nameEn: 'SeniorKnowledge',
    nameJp: 'シニアナレッジ - 高齢者知識共有',
    marketSize: '数百億円規模',
    domain: 'seniorknowledge.ai',
    goal: 'コンテンツ投稿数100件、登録ユーザー数200人達成',
    description: 'シニア世代の経験や知識を次世代に伝えるプラットフォーム。オンラインで相談や知恵を共有できるコミュニティ。'
  },
  {
    id: 14,
    rank: 'B',
    nameEn: 'EmotionSeed',
    nameJp: 'エモーションシード - 感情共有コミュニティ',
    marketSize: '数百億円規模',
    domain: 'emotionseed.ai',
    goal: 'コミュニティメンバー500人突破、投稿数200件',
    description: '日々の感情や気持ちを共有し、共感しあえるオンラインコミュニティ。メンタルヘルスケアにも貢献。'
  },
  {
    id: 15,
    rank: 'B',
    nameEn: 'TaskTrust',
    nameJp: 'タスクトラスト - 何でも屋マッチング',
    marketSize: '世界約5000億ドル規模',
    domain: 'tasktrust.io',
    goal: '新規登録者200名、依頼成立50件',
    description: 'あらゆる仕事やタスクを依頼できるマッチングプラットフォーム。専門家から一般の人まで多様なスキルを活用可能。'
  },
  {
    id: 16,
    rank: 'C',
    nameEn: 'DojoFlow',
    nameJp: '道場フロー - 道場管理',
    marketSize: '約500億円規模',
    domain: 'dojoflow.io',
    goal: '新規道場導入数5件',
    description: '武道道場のための予約・会員・請求管理システム。トレーニングの進捗管理や大会スケジュールも管理可能。'
  },
  {
    id: 17,
    rank: 'C',
    nameEn: 'TasteFund',
    nameJp: 'テイストファンド - 食品クラファン',
    marketSize: '数百億円規模',
    domain: 'tastefund.io',
    goal: '初期クラファン成功プロジェクト3件達成',
    description: '食品特化型のクラウドファンディングプラットフォーム。革新的な食品やレストランのプロジェクトを応援できる。'
  },
  {
    id: 18,
    rank: 'C',
    nameEn: 'MatMatch',
    nameJp: 'マットマッチ - 柔術大会運営',
    marketSize: '数十億円規模',
    domain: 'matmatch.io',
    goal: '大会1件成功開催、参加者100名以上',
    description: '柔術大会の運営を効率化するプラットフォーム。参加者登録、組み合わせ作成、リアルタイム結果管理が可能。'
  },
  {
    id: 19,
    rank: 'C',
    nameEn: 'JiuTrack',
    nameJp: 'ジュートラック - 柔術トレーニング管理',
    marketSize: '数億円規模',
    domain: 'jiutrack.io',
    goal: 'ユーザー数100名突破、トレーニング記録件数500件以上',
    description: '柔術練習者のためのトレーニング管理アプリ。技術の上達度追跡、トレーニング記録、試合戦績管理が可能。'
  }
];

export const companyInfo = {
  name: "株式会社イネブラ",
  nameEn: "Enabler, Inc.",
  description: "株式会社イネブラは革新的なデジタルサービスの開発と運営に特化した企業です。AIテクノロジーと人間の創造性を融合させ、人々の生活を豊かにする次世代のサービスを提供しています。",
  mission: "テクノロジーの力で、人々の可能性を広げ、より良い未来を創造する",
  vision: "あらゆる産業でイノベーションを起こし、社会課題を解決するサービスを世界中に展開する",
  founded: "2020年",
  address: "〒106-0032 東京都港区六本木5-16-52",
  email: "contact@enabler.co.jp",
  phone: "03-XXXX-XXXX",
};
