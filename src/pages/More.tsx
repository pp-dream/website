import React from 'react';
import { 
  Clock, 
  MapPin, 
  Target,
  CheckCircle,
   Award,
  Star,
 } from 'lucide-react';
import Container from '../components/Container';

const More: React.FC = () => {
  const courses = [
    {
      title: "初階課程",
      duration: "4.8.16週",
        sessions: "4.8.16堂課",
      features: [
        "基本握拍姿勢",
        "發球技巧",
        "正手攻球",
        "反手推擋",
        "基本步法"
      ],
      suitable: "完全沒有接觸過桌球的初學者",
      color: "bg-green-500"
    },
    {
      title: "中階課程",
      duration: "4.8.16週",
      sessions: "4.8.16堂課",
      features: [
        "旋轉球技巧",
        "搓球與切球",
        "扣殺技術",
        "戰術應用",
        "比賽規則"
      ],
      suitable: "已具備基本技巧的學員",
      color: "bg-blue-500"
    },
    {
      title: "高階課程",
      duration: "4.8.16週",
      sessions: "4.8.16堂課",
      features: [
        "高階技術訓練",
        "戰術分析",
        "心理建設",
        "體能訓練",
        "模擬比賽"
      ],
      suitable: "掌握初中階技巧想學習更高階技術或有志參加比賽的學員",
      color: "bg-purple-500"
    },
    {
      title: "團體課程",
      duration: "彈性安排",
      sessions: "客製化",
      features: [
        "歡迎社區包班",
        "靈活時間安排",
        "針對性指導",
        "團體生活學習",
        "有趣不孤單"
      ],
      suitable: "喜歡與同儕朋友一同練習及玩樂的孩童",
      color: "bg-orange-500"
    }
  ];

  const facilities = [
    {
      title: "專業教學",
      description: "經驗豐富的教練團，提供最佳練習方式",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "品質保證",
      description: "教練團隊篩選嚴謹，不定時進修考察",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "滿分服務",
      description: "確保學員得到一致的完善服務及教學",
      icon: <Star className="w-8 h-8" />
    },
    {
      title: "反饋回應",
      description: "教練與學員直接雙向溝通討論解決",
      icon: <MapPin className="w-8 h-8" />
    }
  ];


  const faq = [
    {
      question: "我完全沒有桌球基礎，可以參加課程嗎？",
      answer: "當然可以！我們的初學者課程就是專為零基礎學員設計的，教練會從最基本的握拍開始教起，讓您循序漸進地學習。"
    },
    {
      question: "課程是否提供球拍？",
      answer: "是的，課程期間我們會提供練習用的球拍。但正式課程開始後，建議購買個人專屬球拍，我們也會根據您的程度和打法給予建議。"
    },
    {
      question: "如果臨時有事無法上課怎麼辦？",
      answer: "請提前24小時通知我們，我們可以為您安排補課。我們理解每個人都有突發狀況，會盡力協助您不錯過任何學習機會。"
    },
    {
      question: "一個班級會有多少學員？",
      answer: "為了確保教學品質，個人課每堂至多2人，團體課程每班至多4人。這樣教練可以給予每位學員充分的個別指導。"
    },
    {
      question: "課程結束後是否有進階選擇？",
      answer: "有的！完成基礎課程後，您可以選擇進階課程、競賽訓練來持續提升技術水平,且課程價格上並不會有所變動，但建議與教練討論程度後再做定奪。"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              了解更多
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              詳細的課程方案、課程內容，以及常見問題解答
            </p>
          </div>
        </Container>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              課程方案
            </h2>
            <p className="text-xl text-gray-600">
              多元化的課程選擇，滿足不同程度學員的需求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`${course.color} text-white p-6`}>
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                                    <div className="text-sm opacity-90">{course.sessions}</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">課程內容</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600 mb-4">
                      <strong>適合對象：</strong>{course.suitable}
                    </p>
                    <button className="">
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              教學內容
            </h2>
            <p className="text-xl text-gray-600">
              以專業的技術搭配學員適合的學習方式讓您有效學習
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>


      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              常見問題
            </h2>
            <p className="text-xl text-gray-600">
              為您解答最關心的問題
            </p>
          </div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                    {index + 1}
                  </div>
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed ml-9">{item.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
        </div>
  );
};

export default More;
