
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users } from 'lucide-react';
import { MotionBox } from '@/components/ui/motion-box';

const teamMembers = [
  {
    id: 1,
    name: '山田 太郎',
    role: 'CEO / 創業者',
    bio: 'テクノロジーと持続可能なビジネスの融合を目指し、2018年に当社を創業。以前はグローバルITコンサルティング企業で10年以上の経験を持つ。',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80'
  },
  {
    id: 2,
    name: '佐藤 花子',
    role: 'CTO',
    bio: 'AIとブロックチェーン技術の専門家。シリコンバレーでの勤務経験を活かし、当社の技術戦略を主導。',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80'
  },
  {
    id: 3,
    name: '鈴木 一郎',
    role: 'COO',
    bio: '大手製造業での経営経験を持ち、効率的な運営体制の構築と持続可能なビジネスモデルの開発に従事。',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80'
  },
  {
    id: 4,
    name: '田中 真理',
    role: 'マーケティングディレクター',
    bio: 'デジタルマーケティングの専門家。データ分析とクリエイティブ戦略の両面からブランド価値の向上に貢献。',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80'
  },
  {
    id: 5, 
    name: '高橋 和也',
    role: 'プロダクトマネージャー',
    bio: 'ユーザー中心設計の信念のもと、革新的な製品開発を主導。多様なステークホルダーとの協働経験が豊富。',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80'
  },
  {
    id: 6,
    name: '伊藤 さくら',
    role: 'UXデザイナー',
    bio: '美術大学卒業後、複数のスタートアップでデザイン経験を積む。人間中心設計とアクセシビリティに情熱を持つ。',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80'
  }
];

const Team = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <MotionBox>
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">チーム紹介</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  私たちは多様な背景と専門知識を持つ情熱的なプロフェッショナルで構成されています。
                  革新的なソリューションを提供し、お客様のビジネスを成功に導くために日々努力しています。
                </p>
              </div>
            </MotionBox>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <MotionBox key={member.id} delay={index * 100}>
                  <div className="bg-white rounded-xl shadow-subtle overflow-hidden hover:shadow-hover transition-all duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-enabler-600 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </div>
                  </div>
                </MotionBox>
              ))}
            </div>

            <MotionBox delay={300}>
              <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold mb-6">一緒に働きませんか？</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                  私たちは常に才能あるチームメンバーを探しています。あなたのスキルと情熱を活かせる場所です。
                </p>
                <a 
                  href="#careers" 
                  className="inline-flex items-center bg-enabler-600 hover:bg-enabler-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  <Users className="mr-2" size={18} />
                  採用情報を見る
                </a>
              </div>
            </MotionBox>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Team;
