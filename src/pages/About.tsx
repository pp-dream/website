import React from 'react';
import { 
   Calendar, 
  Star, 
  Trophy, 
  GraduationCap,
  Users,
  } from 'lucide-react';
import Container from '../components/Container';

const About: React.FC = () => {
  const coaches = [
    {
      id: 1,
      name: "羅教練",
      title: "鯰魚教練",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      experience: "5年教學經驗",
      specialties: ["基礎教學","兒少啟蒙培訓","心理素質與臨場應變","戰術強化與比賽模擬"],
      achievements: [
        "我相信，每位學員都有獨特的學習節奏與風格，因此我主打「量身打造」的居家教學方案，讓學員在熟悉舒適的環境中，專注提升球技、享受學習的樂趣。",
             ],
      description: "具備豐富的比賽經驗及實戰背景，專精一對一個別指導。課程依照學員程度與目標量身打造，無論初學或進階，都能在家中舒適空間中，穩健提升技巧與戰術能力。",
       },
    {
      id: 2,
      name: "顏教練",
      title: "大熊教練",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      experience: "2年教學經驗",
      specialties: ["基礎教學","初中高階技術指導","比賽戰術指導"],
      
      achievements: [
        "我希望每位學員在訓練時都能享受到打球的樂趣，在課程中我會去理解每位學員的個性，來加以調整訓練計畫，期望大家都能在快樂中學習！"
      ],
      description: "注重動作型態，教學時擁有耐心及同理心，能透過溝通討論來了解學員不明白的部分，並加以修正，深受廣大家長喜愛。",
          },
    {
      id: 3,
      name: "大黑教練",
      title: "陳教練",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      experience: "3年教學經驗",
      specialties: ["基礎教學","競賽訓練","戰術分析","體能訓練"],
      achievements: [
        "在練習過程中，我想陪著孩子在輕鬆歡樂的氛圍中學習，從遊戲中找到成就感，也一點一滴累積屬於自己的技巧與自信!"
      ],
      description: "擁有豐富比賽實戰經驗，專精一對一客製化指導。課程融合娛樂與專業，依學員程度量身設計，在家也能輕鬆學、自在打，享受技巧與戰術的穩健成長。",
         },
         {
      id: 4,
      name: "小柯教練",
      title: "柯教練",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      experience: "2年教學經驗",
      specialties: ["基礎教學","親子桌球","身體協調","體能訓練","趣味桌球"],
      achievements: [
        "我希望用我的熱情，陪著孩子一起在快樂中進步，不只學會桌球技巧，更享受每一次練習的成就與笑容!"
      ],
      description: "年輕活力滿滿，熱愛與學生互動，用熱情點燃孩子對桌球的興趣。一對一教學結合遊戲與專項訓練，讓學習更有趣，也幫助孩子一步步累積信心與技巧。",
         }
  ];

  const teamStats = [
    { icon: <Calendar className="w-8 h-8 text-yellow-500" />, label: "教學平均年資", value: "3年+" },
    { icon: <Users className="w-8 h-8 text-blue-500" />, label: "滿意學員", value: "300+" },
    { icon: <GraduationCap className="w-8 h-8 text-green-500" />, label: "整體滿意度", value: "95%" },
    { icon: <GraduationCap className="w-8 h-8 text-purple-500" />, label: "學員推薦率", value: "97%" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              專業教練團隊
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              擁有豐富的競賽經驗和教學資歷，
              致力於為每位學員提供最符合需求的桌球指導
            </p>
          </div>
        </Container>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Coaches Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              認識我們的教練
            </h2>
            <p className="text-xl text-gray-600">
              每位教練都有豐富的教學經驗和專業認證
            </p>
          </div>

          <div></div>
  <div className="space-y-12">
  {Array.from({ length: Math.ceil(coaches.length / 2) }).map((_, rowIdx) => (
    <div key={rowIdx} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {[0, 1].map(colIdx => {
        const coach = coaches[rowIdx * 2 + colIdx];
        if (!coach) return null;
        return (
          <div key={coach.id} className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{coach.name}</h3>
                <p className="text-lg text-blue-600 font-semibold">{coach.title}</p>
              </div>
              <div className="ml-auto flex items-center text-yellow-500">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{coach.experience}</span>
            </div>
            <p className="text-gray-700 mb-6">{coach.description}</p>
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">專長領域</h4>
              <div className="flex flex-wrap gap-2">
                {coach.specialties.map((specialty, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">教練想要送給學員的一段話：</h4>
              <ul className="space-y-2">
                {coach.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  ))}
</div>
        </Container>
      </section>

      {/* Teaching Philosophy Section */}
      <section className="py-20 bg-blue-900 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              我們的教學理念
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">因材施教</h3>
                <p className="text-blue-100">
                  根據每位學員的特點和需求，量身打造個人化的教學計畫
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">循序漸進</h3>
                <p className="text-blue-100">
                  從基礎技術開始，逐步提升技能水平，確保每個階段都紮實穩固
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">追求卓越</h3>
                <p className="text-blue-100">
                  教授技術同時，培養學員運動家精神和競爭力及不放棄的堅持
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
