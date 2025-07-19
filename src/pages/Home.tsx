import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, 
  Users, 
  Target, 
  Clock, 
  Star, 
  PlayCircle,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "專業教練團隊",
      description: "擁有豐富教學經驗的專業教練，提供個人化指導"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "量身訂做課程",
      description: "根據學員程度和需求，設計專屬的訓練計畫"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "彈性上課時間",
      description: "配合您的時間安排，提供靈活的課程時段"
    },
    {
      icon: <Trophy className="w-8 h-8 text-blue-600" />,
      title: "競賽指導",
      description: "專業比賽訓練，助您在競賽中脫穎而出"
    }
  ];

  const testimonials = [
    {
      name: "王小明",
      rating: 5,
      comment: "教練非常專業，教學方式生動有趣，我的球技進步很多！",
      course: "一對一初級課程"
    },
    {
      name: "李美華",
      rating: 5,
      comment: "課程安排很棒，教練很有耐心，推薦給想學桌球的朋友！",
      course: "團體進階課程"
    },
    {
      name: "張志偉",
      rating: 5,
      comment: "專業的指導讓我在比賽中獲得好成績，非常感謝教練！",
      course: "競賽訓練課程"
    }
  ];

  const achievements = [
    { number: "500+", label: "滿意學員" },
    { number: "3年+", label: "教學經驗" },
    { number: "98%", label: "學員推薦率" },
    { number: "50+", label: "競賽獲獎" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                成為
                <span className="text-orange-400 animate-pulse">桌球高手</span>
                的第一步
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                專業桌球教練團隊，提供個人化教學服務。
                無論您是初學者或進階選手，我們都能助您達成桌球夢想！
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>立即預約試課</span>
                  <ArrowRight size={20} className="animate-bounce-light" />
                </Link>
                <Link
                  to="/more"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <PlayCircle size={20} />
                  <span>觀看教學影片</span>
                </Link>
              </div>
            </div>
            <div className="relative animate-slide-in">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-video bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center group cursor-pointer">
                  <PlayCircle size={64} className="text-white group-hover:scale-110 transition-transform duration-200" />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-lg font-semibold">專業教學示範</p>
                  <p className="text-blue-200">觀看我們的教學方法</p>
                </div>
              </div>
              {/* 浮動元素 */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                免費試課！
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              為什麼選擇我們？
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我們提供最專業的桌球教學服務，讓每位學員都能在最短時間內看到明顯進步
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
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            準備好開始您的桌球之旅了嗎？
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            立即預約免費試課，讓我們專業的教練為您評估並規劃最適合的學習路徑
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <CheckCircle size={20} />
              <span>免費試課預約</span>
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              認識我們的教練
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
