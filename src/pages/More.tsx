import React from 'react';
import { 
  Clock, 
  MapPin, 
  Target,
  CheckCircle,
  PlayCircle,
  Calendar,
  Award,
  Star,
  TrendingUp
} from 'lucide-react';
import Container from '../components/Container';

const More: React.FC = () => {
  const courses = [
    {
      title: "初學者課程",
      duration: "4週",
      price: "NT$ 3,200",
      sessions: "8堂課",
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
      title: "進階課程",
      duration: "6週",
      price: "NT$ 5,400",
      sessions: "12堂課",
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
      title: "競賽訓練",
      duration: "8週",
      price: "NT$ 8,000",
      sessions: "16堂課",
      features: [
        "高階技術訓練",
        "戰術分析",
        "心理建設",
        "體能訓練",
        "模擬比賽"
      ],
      suitable: "有志參加比賽的學員",
      color: "bg-purple-500"
    },
    {
      title: "一對一指導",
      duration: "彈性安排",
      price: "NT$ 800/堂",
      sessions: "客製化",
      features: [
        "個人化教學",
        "靈活時間安排",
        "針對性指導",
        "快速進步",
        "專屬訓練計畫"
      ],
      suitable: "希望快速提升或有特定需求的學員",
      color: "bg-orange-500"
    }
  ];

  const facilities = [
    {
      title: "專業球桌",
      description: "國際標準比賽用桌，提供最佳練習環境",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "完善設備",
      description: "專業球拍、練習球、球網等齊全設備",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "舒適環境",
      description: "空調完善、光線充足的練習場地",
      icon: <Star className="w-8 h-8" />
    },
    {
      title: "停車便利",
      description: "場館附設停車場，交通便利",
      icon: <MapPin className="w-8 h-8" />
    }
  ];

  const schedule = [
    { day: "週一", time: "18:00-21:00", type: "進階課程" },
    { day: "週二", time: "19:00-21:00", type: "初學者課程" },
    { day: "週三", time: "18:00-21:00", type: "一對一指導" },
    { day: "週四", time: "19:00-21:00", type: "競賽訓練" },
    { day: "週五", time: "18:00-21:00", type: "進階課程" },
    { day: "週六", time: "09:00-17:00", type: "全日開放" },
    { day: "週日", time: "09:00-17:00", type: "全日開放" }
  ];

  const faq = [
    {
      question: "我完全沒有桌球基礎，可以參加課程嗎？",
      answer: "當然可以！我們的初學者課程就是專為零基礎學員設計的，教練會從最基本的握拍開始教起，讓您循序漸進地學習。"
    },
    {
      question: "課程是否提供球拍和球？",
      answer: "是的，課程期間我們會提供練習用的球拍和球。如果您想要購買個人專屬球拍，我們也會根據您的程度和打法給予建議。"
    },
    {
      question: "如果臨時有事無法上課怎麼辦？",
      answer: "請提前24小時通知我們，我們可以為您安排補課。我們理解每個人都有突發狀況，會盡力協助您不錯過任何學習機會。"
    },
    {
      question: "一個班級會有多少學員？",
      answer: "為了確保教學品質，我們的團體課程每班最多6人。這樣教練可以給予每位學員充分的個別指導。"
    },
    {
      question: "課程結束後是否有進階選擇？",
      answer: "有的！完成基礎課程後，您可以選擇進階課程、競賽訓練，或是一對一指導來持續提升技術水平。"
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
              詳細的課程資訊、設施介紹，以及常見問題解答
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
                  <div className="text-3xl font-bold mb-1">{course.price}</div>
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
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                      選擇此方案
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
              場地設施
            </h2>
            <p className="text-xl text-gray-600">
              專業的設備與舒適的環境，讓您專心學習
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

      {/* Schedule Section */}
      <section className="py-20 bg-blue-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              上課時間表
            </h2>
            <p className="text-xl text-gray-600">
              彈性的時間安排，配合您的生活作息
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">星期</th>
                    <th className="px-6 py-4 text-left font-semibold">時間</th>
                    <th className="px-6 py-4 text-left font-semibold">課程類型</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{item.day}</td>
                      <td className="px-6 py-4 text-gray-700 flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                        {item.time}
                      </td>
                      <td className="px-6 py-4 text-gray-700">{item.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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

      {/* Video Section */}
      <section className="py-20 bg-blue-900 text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              教學影片
            </h2>
            <p className="text-xl text-blue-100">
              觀看我們的教學示範影片
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "基本握拍教學", duration: "5:30" },
              { title: "正手攻球技巧", duration: "8:15" },
              { title: "發球技術詳解", duration: "12:20" },
              { title: "步法訓練", duration: "6:45" },
              { title: "實戰對練", duration: "15:30" },
              { title: "比賽戰術", duration: "10:10" }
            ].map((video, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-200 cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <PlayCircle size={48} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                <div className="flex items-center justify-between text-blue-200">
                  <span className="text-sm">時長: {video.duration}</span>
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default More;
