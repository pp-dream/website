import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, 
  Users, 
  Target, 
  Clock, 
  Star, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Container from '../components/Container';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "品質可靠又安全",
      description: "教練至指定場地授課，無場地可協助安排，【免接送】【下課即到家】家長也可陪同上課，安全有保障"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "量身訂做課程",
      description: "根據學員程度和需求，設計專屬的訓練計畫"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "彈性上課時間",
      description: "【上課】、【陪打】皆配合您的時間安排，提供靈活的時段選擇"
    },
    {
      icon: <Trophy className="w-8 h-8 text-blue-600" />,
      title: "價值保證",
      description: "優質的教學及陪打品質，讓您感受到物超所值"
    }
      ];

  const testimonials = [
    {
      name: "張○國",
      rating: 5,
      comment: "教練非常專業，教學方式生動有趣，我的球技進步很多！",
      course: "一對一初級課程"
    },
    {
      name: "黃○志",
      rating: 5,
      comment: "孩子第一次接觸就愛上桌球，老師很有耐心也很專業！",
      course: "一對一初級課程"
    },
    {
      name: "李○雅",
      rating: 5,
      comment: "上了中階課之後，孩子的動作越來越扎實，看得出進步!",
      course: "一對一中級課程"
    },
    {
      name: "陳○淑",
      rating: 5,
      comment: "孩子說上課很有趣又不會太難，學得開心也進步快!",
      course: "一對一中級課程"
    },
    {
      name: "吳○惠",
      rating: 5,
      comment: "課程安排很棒，教練很有耐心，推薦給想學桌球的朋友！",
      course: "一對一高級課程"
    },
    {
      name: "林○宏",
      rating: 5,
      comment: "專業的指導讓我在比賽中獲得好成績，非常感謝教練！",
      course: "競賽訓練課程"
    }
  ];

  const achievements = [
    { number: "3年+", label: "教學平均年資" },
    { number: "300+", label: "滿意學員" },
    { number: "95%", label: "整體滿意度" },
    { number: "97%", label: "學員推薦率" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
  <Container>
    <div className="flex flex-col items-center justify-center text-center min-h-[400px]">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        成為
        <span className="text-orange-400 animate-pulse">桌球高手</span>
        第一步
      </h1>
      <p className="text-xl mb-8 text-blue-100">
        我們不是傳統球館，
而是一個「把教練帶到你身邊」的行動桌球品牌。
玩童乒乓擁有一支充滿熱情、活力與溫度的專業教練團隊，
<p className="text-xl mb-0.1 text-blue-100"></p>
可到府、到社區、或您熟悉的場地授課。
【若您沒有場地，我們也能協助安排合適的地點】。
        <p className="text-xl mb-8 text-blue-100"></p>
         我們為每位學員量身打造專屬訓練計畫與陪打課程。
不論年齡、不論程度——只要您有興趣或者想進步，我們都在你身邊！
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/booking"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
        >
          <span>立即預約試課</span>
          <ArrowRight size={20} className="animate-bounce-light" />
        </Link>
      </div>
    </div>
  </Container>
</section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              為什麼選擇我們？
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我們提供最專業及最好的品質，讓每位學員都能以快樂的心用最少的時間感受差異
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-blue-900 text-white">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-blue-200">{achievement.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              學員真實回饋
            </h2>
            <p className="text-xl text-gray-600">
              聽聽我們學員的心聲
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.course}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            準備好開始您的桌球之旅了嗎？
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto w-full">
            立即預約課程體驗，讓我們專業的教練為您評估並規劃最適合的學習路徑
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <CheckCircle size={20} />
              <span>課程體驗預約</span>
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              認識我們的教練
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
