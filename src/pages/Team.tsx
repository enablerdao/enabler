
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users } from 'lucide-react';
import { MotionBox } from '@/components/ui/motion-box';
import { companyInfo } from '@/lib/data';

const teamMembers = [
  {
    id: 1,
    name: '濱田 優貴',
    role: 'CEO / 創業者',
    bio: '東京理科大学在学中に起業し、2014年にサイブリッジを共同経営者へ売却。その後、メルカリの創業期から参画し、取締役として5つのプロダクト責任者および研究開発部門を担当。特にAI技術に注力し、ブロックチェーンや富の再配分にも強い関心を持つ。人々の可能性を広げるテクノロジーの力を信じ、イネブラを創業。',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80'
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
                  {companyInfo.nameJp}は、人々を豊かにするサービスやリアルな場所を創造する企業です。
                  テクノロジーの力を信じ、それによって人々がより幸せで、平和で、安全で、充実した日々を過ごせると確信しています。
                  私たちはそのお手伝いをする存在でありたいと考えています。
                </p>
              </div>
            </MotionBox>

            <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
              {teamMembers.map((member, index) => (
                <MotionBox key={member.id} delay={index * 100}>
                  <div className="bg-white rounded-xl shadow-subtle overflow-hidden hover:shadow-hover transition-all duration-300">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="aspect-square overflow-hidden">
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-6 md:w-2/3">
                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                        <p className="text-enabler-600 font-medium mb-3">{member.role}</p>
                        <p className="text-gray-600">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                </MotionBox>
              ))}
            </div>

            <MotionBox delay={300}>
              <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold mb-6">イネブラの創業理念</h2>
                <div className="bg-white rounded-lg shadow-subtle p-8 max-w-3xl mx-auto">
                  <p className="text-gray-700 mb-4">
                    「富が一局に集中する社会は、本当の意味で良い社会とは言えない」という信念からイネブラは生まれました。
                    テクノロジーの力を活用し、より公平で持続可能な社会の実現を目指しています。
                  </p>
                  <p className="text-gray-700 mb-4">
                    AI時代の今だからこそ、テクノロジーの恩恵を特定の人々だけでなく、より多くの人々が享受できる仕組みづくりが必要です。
                    イネブラを通じて、富の再配分という社会課題に挑戦し、一人ひとりが自分らしく活躍できる社会の実現に貢献したいと考えています。
                  </p>
                  <p className="text-gray-700">
                    この理念を実現できたとき、創業者自身も大きな幸せを感じられるはずです。私たちは常にこの信念を胸に、
                    革新的なサービスと空間を創造し続けます。
                  </p>
                </div>
              </div>
            </MotionBox>

            <MotionBox delay={400}>
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
