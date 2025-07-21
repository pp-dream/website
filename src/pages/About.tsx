import React from 'react';
import { 
  Award, 
  Calendar, 
  Star, 
  Trophy, 
  GraduationCap,
  Users,
  Mail,
  Phone
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
        "大家好我是顏教練我很胖 但我深受家長喜歡 不要找羅教練 他很爛 我愛你們 謝謝"
      ],
      description: "注重動作型態，教學時擁有耐心及同理心，能透過溝通討論來了解學員不明白的部分，並加以修正，深受廣大家長喜愛。",
      email: "lee@dreamtt.com",
      phone: "0923-456-789"
    },
    {
      id: 3,
      name: "大黑教練",
      title: "陳教練",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      experience: "8年教學經驗",
      specialties: ["競賽訓練", "戰術分析", "體能訓練"],
      achievements: [
        "亞洲盃桌球賽參賽選手",
        "全國大專盃雙打冠軍",
        "運動科學碩士",
        "體能訓練師認證"
      ],
      description: "專精於競賽訓練和戰術分析，運用科學化訓練方法提升學員競技水平。對於有志參加比賽的學員提供專業指導。",
      email: "wang@dreamtt.com",
      phone: "0934-567-890"
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

          <div className="space-y-16">
            {coaches.map((coach, index) => (
              <div 
                key={coach.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Coach Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 rounded-full">
                      <Award size={32} />
                    </div>
                  </div>
                </div>

                {/* Coach Info */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
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

                    {/* Specialties */}
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

                    {/* Achievements */}
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

                    {/* Contact */}
                    <div className="border-t pt-6">
                       <div className="space-y-2">
                        <div className="flex items-center text-gray-600">
                          
                       </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                  不僅教授技術，更培養學員的運動精神和競爭力
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
