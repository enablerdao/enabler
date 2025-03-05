export interface Service {
  id: number;
  rank: 'S' | 'A' | 'B' | 'C';
  nameEn: string;
  nameJp: string;
  marketSize: string;
  domain: string;
  goal: string;
  description?: string;
  features?: { title: string; description: string }[];
  color?: string;
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
    description: '当日空室となったホテルや宿泊施設の特別割引を提供するプラットフォーム。最大70%オフで高級ホテルも予約可能。',
    features: [
      { 
        title: 'リアルタイム空室検索',
        description: 'GPS位置情報を活用し、ユーザーの現在地から近い空室を即座に検索できます。高度なフィルタリング機能で希望条件にマッチする宿泊施設を素早く見つけられます。'
      },
      { 
        title: 'フラッシュディール',
        description: '時間限定の特別割引。残り時間がカウントダウン表示され、早い者勝ちでお得に予約できます。最大70%オフの掘り出し物も。'
      },
      { 
        title: '即時予約確定',
        description: 'クレジットカード情報を事前登録しておくことで、ワンタップで予約が完了。予約確認メールと電子チケットがすぐに届きます。'
      },
      { 
        title: 'ホテル写真AI評価',
        description: 'AIが投稿写真を分析し、実際の宿泊施設の状態を評価。美しく見せるための加工写真に惑わされることなく、現実的な期待値を設定できます。'
      }
    ],
    color: '#2563eb'
  },
  {
    id: 2,
    rank: 'S',
    nameEn: 'StayFlow',
    nameJp: 'ステイフロー - 民泊運営管理',
    marketSize: '数兆円規模',
    domain: 'stayflow.io',
    goal: '管理物件数を10件増やし、口コミ50件獲得',
    description: '民泊オーナーのための包括的な運営管理ツール。予約管理、清掃スケジュール、ゲスト対応を自動化。',
    features: [
      { 
        title: '予約一元管理',
        description: 'Airbnb、Booking.com、Expediaなど主要サイトからの予約を一つのダッシュボードで管理。ダブルブッキングを防止し、空室状況をリアルタイムで把握できます。'
      },
      { 
        title: 'スマートキー連携',
        description: '予約者専用のデジタルキーをアプリで発行。セキュリティコードは予約期間中のみ有効で、チェックイン・チェックアウト時間に連動します。'
      },
      { 
        title: '清掃管理システム',
        description: '清掃スタッフへの自動タスク割り当て。チェックアウト後すぐに通知が飛び、完了報告と写真確認ができます。品質評価システム付き。'
      },
      { 
        title: 'ゲストコミュニケーション',
        description: 'AIを活用した多言語対応チャットボット。よくある質問に自動返信し、近隣のおすすめスポットなど地域情報も提供します。'
      }
    ],
    color: '#0891b2'
  },
  {
    id: 3,
    rank: 'S',
    nameEn: 'HealthGenius',
    nameJp: 'ヘルスジーニアス - AI健康管理コーチ',
    marketSize: '数兆円規模',
    domain: 'healthgenius.ai',
    goal: 'ユーザー登録数1,000人突破と月間アクティブ率30％',
    description: 'AIがパーソナライズした健康アドバイスと運動計画を提案。食事、睡眠、運動データを分析し最適な健康習慣を構築。',
    features: [
      { 
        title: 'AI栄養分析',
        description: '食事の写真を撮影するだけで、AIが食品を認識し、栄養素とカロリーを自動計算。摂取パターンを分析し、バランスの良い食事を提案します。'
      },
      { 
        title: 'バイオリズム最適化',
        description: '睡眠データ、活動量、心拍数から個人のバイオリズムを分析。最も効果的な運動時間帯や集中できる時間帯を特定し、日々のスケジュールを最適化します。'
      },
      { 
        title: 'パーソナライズド・エクササイズ',
        description: '身体データと目標に基づいたカスタムワークアウトプラン。進捗に応じて自動調整され、ビデオガイダンスでフォームの修正もリアルタイムで行います。'
      },
      { 
        title: '健康予測エンジン',
        description: '現在の生活習慣が将来の健康状態に与える影響をシミュレーション。生活習慣病リスクの低減効果を数値化し、モチベーション維持をサポートします。'
      }
    ],
    color: '#16a34a'
  },
  {
    id: 4,
    rank: 'A',
    nameEn: 'Skillity',
    nameJp: 'スキリティ - スキルシェア',
    marketSize: '約4兆円',
    domain: 'skillity.io',
    goal: '登録スキル数500件、ユーザー数300名突破',
    description: '個人のスキルやノウハウを売買できるマーケットプレイス。ビジネス、クリエイティブ、テクノロジーなど多様なカテゴリーを提供。',
    features: [
      { 
        title: 'スキル一覧',
        description: 'スキルをカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: 'スキル検索',
        description: 'キーワードでスキルを検索し、最適なスキルを見つけることができます。'
      },
      { 
        title: 'スキル販売',
        description: 'スキルを売買するための機能。購入者と販売者双方で価値を共有できます。'
      },
      { 
        title: 'スキル評価',
        description: 'スキルの評価機能。スキルの品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#ff6347'
  },
  {
    id: 5,
    rank: 'A',
    nameEn: 'Unused',
    nameJp: 'アンユーズド - 空間再利用',
    marketSize: '数千億円規模',
    domain: 'unused.io',
    goal: 'リストアップ空間数50件達成、初成約10件',
    description: '使われていない空きスペースを一時利用できるプラットフォーム。イベント、撮影、ポップアップストアなどに活用可能。',
    features: [
      { 
        title: 'スペース一覧',
        description: '空きスペースをカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: 'スペース検索',
        description: 'キーワードで空きスペースを検索し、最適な空きスペースを見つけることができます。'
      },
      { 
        title: 'スペース利用',
        description: '空きスペースを利用するための機能。利用者と空きスペースの所有者双方で価値を共有できます。'
      },
      { 
        title: 'スペース評価',
        description: '空きスペースの評価機能。空きスペースの品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#36a2eb'
  },
  {
    id: 6,
    rank: 'A',
    nameEn: 'MatchSense',
    nameJp: 'マッチセンス - AI婚活マッチング',
    marketSize: '約1兆円規模',
    domain: 'matchsense.io',
    goal: 'マッチング成功事例を20件以上獲得',
    description: 'AIが価値観や生活スタイルを分析し、最適なパートナー候補を紹介。従来のマッチングよりも高い成婚率を実現。',
    features: [
      { 
        title: 'マッチング一覧',
        description: 'マッチング候補をカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: 'マッチング検索',
        description: 'キーワードでマッチング候補を検索し、最適なマッチング候補を見つけることができます。'
      },
      { 
        title: 'マッチング紹介',
        description: 'マッチング候補を紹介するための機能。紹介者とマッチング候補双方で価値を共有できます。'
      },
      { 
        title: 'マッチング評価',
        description: 'マッチング候補の評価機能。マッチング候補の品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#ffce56'
  },
  {
    id: 7,
    rank: 'A',
    nameEn: 'TravelMate',
    nameJp: 'トラベルAI - 旅行コンシェルジュ',
    marketSize: '約110兆円',
    domain: 'travelai.io',
    goal: 'AIレコメンド精度向上、初期フィードバック100件収集',
    description: 'AIが旅行者の好みや予算に合わせたオーダーメイドの旅行プランを提案。地元の穴場スポットや体験も紹介。',
    features: [
      { 
        title: 'プラン一覧',
        description: '旅行プランをカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: 'プラン検索',
        description: 'キーワードで旅行プランを検索し、最適な旅行プランを見つけることができます。'
      },
      { 
        title: 'プラン提案',
        description: '旅行プランを提案するための機能。提案者と旅行プランの購入者双方で価値を共有できます。'
      },
      { 
        title: 'プラン評価',
        description: '旅行プランの評価機能。旅行プランの品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#4caf50'
  },
  {
    id: 8,
    rank: 'A',
    nameEn: 'Aicademy',
    nameJp: 'アイカデミー - AIパーソナライズ教育',
    marketSize: '約30兆円',
    domain: 'aicademy.ai',
    goal: '教育プログラム10件完成、無料体験者500人',
    description: '学習者一人ひとりの理解度や学習スタイルに合わせた教育コンテンツを提供。AIが弱点を分析し効率的な学習をサポート。',
    features: [
      { 
        title: '教材一覧',
        description: '教育教材をカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: '教材検索',
        description: 'キーワードで教育教材を検索し、最適な教育教材を見つけることができます。'
      },
      { 
        title: '教材販売',
        description: '教育教材を販売するための機能。購入者と教育教材の所有者双方で価値を共有できます。'
      },
      { 
        title: '教材評価',
        description: '教育教材の評価機能。教育教材の品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#ff9800'
  },
  {
    id: 9,
    rank: 'B',
    nameEn: 'AIFit',
    nameJp: 'AIフィット - パーソナルジム',
    marketSize: '約10兆円',
    domain: 'aifit.ai',
    goal: '初回体験トレーニング100件提供',
    description: 'AIが身体データを分析し、最適なトレーニングプランと栄養アドバイスを提供。リアルタイムでフォームチェックも可能。',
    features: [
      { 
        title: 'トレーニング一覧',
        description: 'トレーニングをカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: 'トレーニング検索',
        description: 'キーワードでトレーニングを検索し、最適なトレーニングを見つけることができます。'
      },
      { 
        title: 'トレーニング提案',
        description: 'トレーニングを提案するための機能。提案者とトレーニングの購入者双方で価値を共有できます。'
      },
      { 
        title: 'トレーニング評価',
        description: 'トレーニングの評価機能。トレーニングの品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#9c27b0'
  },
  {
    id: 10,
    rank: 'B',
    nameEn: 'TaskTrust',
    nameJp: 'タスクトラスト - お手伝いマッチング',
    marketSize: '約75兆円（世界）',
    domain: 'tasktrust.io',
    goal: '新規マッチング件数100件突破',
    description: '日常の家事や雑用を依頼できるシェアリングサービス。信頼性の高いヘルパーと安全に取引可能。',
    features: [
      { 
        title: 'タスク一覧',
        description: 'タスクをカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: 'タスク検索',
        description: 'キーワードでタスクを検索し、最適なタスクを見つけることができます。'
      },
      { 
        title: 'タスク依頼',
        description: 'タスクを依頼するための機能。依頼者とタスクの購入者双方で価値を共有できます。'
      },
      { 
        title: 'タスク評価',
        description: 'タスクの評価機能。タスクの品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#673ab7'
  },
  {
    id: 11,
    rank: 'B',
    nameEn: 'FoodSaver',
    nameJp: 'フードセーバー - 食品ロスマーケット',
    marketSize: '約6000億円',
    domain: 'foodsaver.ai',
    goal: 'パートナー店舗20件と契約完了',
    description: '飲食店や小売店の余剰食品を特別価格で提供するプラットフォーム。食品ロス削減と消費者の節約を同時に実現。',
    features: [
      { 
        title: '店舗一覧',
        description: '店舗をカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: '店舗検索',
        description: 'キーワードで店舗を検索し、最適な店舗を見つけることができます。'
      },
      { 
        title: '店舗契約',
        description: '店舗を契約するための機能。契約者と店舗の所有者双方で価値を共有できます。'
      },
      { 
        title: '店舗評価',
        description: '店舗の評価機能。店舗の品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#3f51b5'
  },
  {
    id: 12,
    rank: 'B',
    nameEn: 'PetPals',
    nameJp: 'ペットパルズ - ペット預かりサービス',
    marketSize: '数千億円規模',
    domain: 'petpals.io',
    goal: '預かりサービス利用実績50件達成',
    description: '信頼できるペットシッターとペットオーナーをマッチング。安心して愛犬・愛猫を預けられるサービス。',
    features: [
      { 
        title: 'ペット一覧',
        description: 'ペットをカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: 'ペット検索',
        description: 'キーワードでペットを検索し、最適なペットを見つけることができます。'
      },
      { 
        title: 'ペット預かり',
        description: 'ペットを預かりするための機能。預かり者とペットオーナー双方で価値を共有できます。'
      },
      { 
        title: 'ペット評価',
        description: 'ペットの評価機能。ペットの品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#2196f3'
  },
  {
    id: 13,
    rank: 'B',
    nameEn: 'SeniorKnowledge',
    nameJp: 'シニアナレッジ - 高齢者知識共有',
    marketSize: '数百億円規模',
    domain: 'seniorknowledge.ai',
    goal: 'コンテンツ投稿数100件、登録ユーザー数200人達成',
    description: 'シニア世代の経験や知識を次世代に伝えるプラットフォーム。オンラインで相談や知恵を共有できるコミュニティ。',
    features: [
      { 
        title: 'コンテンツ一覧',
        description: 'コンテンツをカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: 'コンテンツ検索',
        description: 'キーワードでコンテンツを検索し、最適なコンテンツを見つけることができます。'
      },
      { 
        title: 'コンテンツ投稿',
        description: 'コンテンツを投稿するための機能。投稿者とコンテンツの所有者双方で価値を共有できます。'
      },
      { 
        title: 'コンテンツ評価',
        description: 'コンテンツの評価機能。コンテンツの品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#757575'
  },
  {
    id: 14,
    rank: 'B',
    nameEn: 'EmotionSeed',
    nameJp: 'エモーションシード - 感情共有コミュニティ',
    marketSize: '数百億円規模',
    domain: 'emotionseed.ai',
    goal: 'コミュニティメンバー500人突破、投稿数200件',
    description: '日々の感情や気持ちを共有し、共感しあえるオンラインコミュニティ。メンタルヘルスケアにも貢献。',
    features: [
      { 
        title: '投稿一覧',
        description: '投稿をカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: '投稿検索',
        description: 'キーワードで投稿を検索し、最適な投稿を見つけることができます。'
      },
      { 
        title: '投稿共有',
        description: '投稿を共有するための機能。共有者と投稿の所有者双方で価値を共有できます。'
      },
      { 
        title: '投稿評価',
        description: '投稿の評価機能。投稿の品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#000000'
  },
  {
    id: 15,
    rank: 'B',
    nameEn: 'TaskTrust',
    nameJp: 'タスクトラスト - 何でも屋マッチング',
    marketSize: '世界約5000億ドル規模',
    domain: 'tasktrust.io',
    goal: '新規登録者200名、依頼成立50件',
    description: 'あらゆる仕事やタスクを依頼できるマッチングプラットフォーム。専門家から一般の人まで多様なスキルを活用可能。',
    features: [
      { 
        title: 'スキル一覧',
        description: 'スキルをカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: 'スキル検索',
        description: 'キーワードでスキルを検索し、最適なスキルを見つけることができます。'
      },
      { 
        title: 'スキル依頼',
        description: 'スキルを依頼するための機能。依頼者とスキルの購入者双方で価値を共有できます。'
      },
      { 
        title: 'スキル評価',
        description: 'スキルの評価機能。スキルの品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#000000'
  },
  {
    id: 16,
    rank: 'C',
    nameEn: 'DojoFlow',
    nameJp: '道場フロー - 道場管理',
    marketSize: '約500億円規模',
    domain: 'dojoflow.io',
    goal: '新規道場導入数5件',
    description: '武道道場のための予約・会員・請求管理システム。トレーニングの進捗管理や大会スケジュールも管理可能。',
    features: [
      { 
        title: '道場一覧',
        description: '道場をカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: '道場検索',
        description: 'キーワードで道場を検索し、最適な道場を見つけることができます。'
      },
      { 
        title: '道場管理',
        description: '道場を管理するための機能。管理者と道場の所有者双方で価値を共有できます。'
      },
      { 
        title: '道場評価',
        description: '道場の評価機能。道場の品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#000000'
  },
  {
    id: 17,
    rank: 'C',
    nameEn: 'TasteFund',
    nameJp: 'テイストファンド - 食品クラファン',
    marketSize: '数百億円規模',
    domain: 'tastefund.io',
    goal: '初期クラファン成功プロジェクト3件達成',
    description: '食品特化型のクラウドファンディングプラットフォーム。革新的な食品やレストランのプロジェクトを応援できる。',
    features: [
      { 
        title: 'プロジェクト一覧',
        description: 'プロジェクトをカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: 'プロジェクト検索',
        description: 'キーワードでプロジェクトを検索し、最適なプロジェクトを見つけることができます。'
      },
      { 
        title: 'プロジェクト支援',
        description: 'プロジェクトを支援するための機能。支援者とプロジェクトの所有者双方で価値を共有できます。'
      },
      { 
        title: 'プロジェクト評価',
        description: 'プロジェクトの評価機能。プロジェクトの品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#000000'
  },
  {
    id: 18,
    rank: 'C',
    nameEn: 'MatMatch',
    nameJp: 'マットマッチ - 柔術大会運営',
    marketSize: '数十億円規模',
    domain: 'matmatch.io',
    goal: '大会1件成功開催、参加者100名以上',
    description: '柔術大会の運営を効率化するプラットフォーム。参加者登録、組み合わせ作成、リアルタイム結果管理が可能。',
    features: [
      { 
        title: '大会一覧',
        description: '大会をカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: '大会検索',
        description: 'キーワードで大会を検索し、最適な大会を見つけることができます。'
      },
      { 
        title: '大会運営',
        description: '大会を運営するための機能。運営者と大会の所有者双方で価値を共有できます。'
      },
      { 
        title: '大会評価',
        description: '大会の評価機能。大会の品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#000000'
  },
  {
    id: 19,
    rank: 'C',
    nameEn: 'JiuTrack',
    nameJp: 'ジュートラック - 柔術トレーニング管理',
    marketSize: '数億円規模',
    domain: 'jiutrack.io',
    goal: 'ユーザー数100名突破、トレーニング記録件数500件以上',
    description: '柔術練習者のためのトレーニング管理アプリ。技術の上達度追跡、トレーニング記録、試合戦績管理が可能。',
    features: [
      { 
        title: 'トレーニング一覧',
        description: 'トレーニングをカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: 'トレーニング検索',
        description: 'キーワードでトレーニングを検索し、最適なトレーニングを見つけることができます。'
      },
      { 
        title: 'トレーニング管理',
        description: 'トレーニングを管理するための機能。管理者とトレーニングの所有者双方で価値を共有できます。'
      },
      { 
        title: 'トレーニング評価',
        description: 'トレーニングの評価機能。トレーニングの品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#000000'
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
