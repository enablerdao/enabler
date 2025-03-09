
import { CompanyInfo } from '../types/service';

export const companyInfo: CompanyInfo = {
  nameJp: "株式会社イネブラ",
  nameEn: "Enabler, Inc.",
  description: "テクノロジーと空間づくりで、一人ひとりの可能性を広げる企業です。デジタルとリアルの両面から、毎日をもっと豊かに、もっと便利にするサービスを提供しています。",
  slogan: "デジタルでも、リアルでも。テクノロジーと空間づくりで毎日をもっと豊かに。",
  mission: "テクノロジーで、一人ひとりが自然に可能性を広げられる社会をつくる。",
  vision: "誰もが自分らしく活躍し、ワクワクする未来を共に叶える。",
  address: "東京都渋谷区",
  email: "contact@enablerhq.com",
  phone: "",
  established: "2022年",
  ceo: "濱田 優貴",
  employees: "58名（2023年12月現在）",
  businessActivities: "デジタルサービスの開発・運営、滞在型施設（別荘など）の開発",
  openSource: "すべてのプロジェクトはオープンソースで公開中。誰でも参加して、共に未来を創造できます。",
  brandStory: "「Enabler（イネブラ）」は、人々が持つ可能性をテクノロジーの力で優しく引き出し、実現するために2022年に誕生しました。誰もが持っている可能性の種を育て、未来をともに創るパートナーとして、あたたかな視点で寄り添い続けています。",
  logoDescription: "ロゴは鮮やかなブルーを基調とし、毎年少しずつ色調が明るく変化するように設計されています。色の変化は創業年（2022年）を起点とし、数学的な関数で表現されます。",
  gradientMeaning: "ロゴのグラデーションは、「可能性の広がり」と「未来へ向かう進化」を象徴しています。",
  colorFormula: {
    r: "round(34 + 190 × (1 - 0.95^(y - 2022)))",
    g: "round(182 + 63 × (1 - 0.95^(y - 2022)))",
    b: "255"
  },
  currentColor: "#2BBCFF", // 2025年のカラー（更新）
  accentColor: "#2BBCFF", // ブルー：成長、可能性、安心感
  supportingColors: {
    white: "#FFFFFF", // 透明性、誠実さ
    silver: "#C0C0C0"  // 調和、公平さ、技術的洗練
  },
  logoUsageGuidelines: "ロゴの高さの1/3程度を空け、他の要素との重なりを避ける。ロゴの変形や色の自由な変更は厳禁。",
  fibonacci: "フィボナッチ数（1, 2, 3, 5, 8, 13, 21, 34, 55, 89…）の周年には、ブランドカラーの色相を自然界において最も美しいとされる黄金角（約137.5度）を用いて特別なカラーを数学的に導き出します。",
  fibonacciGoldenAngle: {
    formula: "H（色相）= (f × 137.5) mod 360\nS（彩度）= 0.75（固定）\nV（明度）= 1（固定）",
    description: "ここで`f`はフィボナッチ数の順序（1,2,3…）です。この計算で得られる色は、自然界にも見られる美しい調和のとれた色となり、特別な周年を強調します。"
  },
  socialLinks: {
    twitter: "https://twitter.com/enablerhq",
    facebook: "https://facebook.com/enablerhq",
    instagram: "https://instagram.com/enablerhq",
    linkedin: "https://linkedin.com/company/enablerhq"
  }
};
