'use client';

import { useState } from 'react';

export default function News() {
  const [activeTab, setActiveTab] = useState('news');

  const newsItems = [
    {
      id: 1,
      title: "새로운 에티오피아 싱글 오리진 출시",
      date: "2024-01-15",
      category: "제품 출시",
      excerpt: "에티오피아 시다모 지역의 특별한 커피를 새롭게 선보입니다. 독특한 플로럴 향과 밝은 산미가 특징입니다.",
      image: "🆕"
    },
    {
      id: 2,
      title: "지속가능성 보고서 2023 발표",
      date: "2024-01-10",
      category: "지속가능성",
      excerpt: "2023년 한 해 동안의 환경 보호와 농부 지원 성과를 담은 보고서를 발표했습니다.",
      image: "📊"
    },
    {
      id: 3,
      title: "Fair Trade 인증 갱신",
      date: "2024-01-05",
      category: "인증",
      excerpt: "공정 무역 인증을 성공적으로 갱신하여 농부들과의 공정한 거래를 지속합니다.",
      image: "🏆"
    }
  ];

  const events = [
    {
      id: 1,
      title: "커피 테이스팅 워크숍",
      date: "2024-02-20",
      time: "14:00 - 16:00",
      location: "서울 강남구 커피센터",
      description: "전문 바리스타와 함께하는 커피 테이스팅 체험",
      price: "무료",
      status: "모집중"
    },
    {
      id: 2,
      title: "지속가능한 커피 세미나",
      date: "2024-03-15",
      time: "10:00 - 12:00",
      location: "온라인 (Zoom)",
      description: "환경을 생각하는 커피 소비에 대한 세미나",
      price: "무료",
      status: "예정"
    },
    {
      id: 3,
      title: "농장 방문 투어",
      date: "2024-04-10",
      time: "08:00 - 18:00",
      location: "콜롬비아 농장",
      description: "커피 농장을 직접 방문하는 특별한 경험",
      price: "₩500,000",
      status: "대기중"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              소식 & 이벤트
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              최신 커피 소식과 다양한 이벤트 정보를 확인해보세요
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('news')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                activeTab === 'news'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              최신 소식
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                activeTab === 'events'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              이벤트
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'news' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">최신 소식</h2>
                <p className="text-lg text-gray-600">우리의 최신 소식을 확인해보세요</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.map((item) => (
                  <article key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="p-6">
                      <div className="text-6xl mb-4 text-center">{item.image}</div>
                      <div className="mb-3">
                        <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                        <span className="text-gray-500 text-sm ml-2">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.excerpt}</p>
                      <button className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200">
                        자세히 보기 →
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">이벤트</h2>
                <p className="text-lg text-gray-600">다양한 커피 관련 이벤트에 참여해보세요</p>
              </div>
              
              <div className="space-y-6">
                {events.map((event) => (
                  <div key={event.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                          <span className={`ml-4 px-3 py-1 rounded-full text-sm font-medium ${
                            event.status === '모집중' ? 'bg-green-100 text-green-800' :
                            event.status === '예정' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {event.status}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <span className="mr-2">📅</span>
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <span className="mr-2">⏰</span>
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <span className="mr-2">📍</span>
                            {event.location}
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 lg:mt-0 lg:ml-8 flex flex-col items-end">
                        <div className="text-2xl font-bold text-indigo-600 mb-2">{event.price}</div>
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200">
                          참가 신청
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              뉴스레터 구독
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              최신 커피 소식과 이벤트 정보를 이메일로 받아보세요
            </p>
            <div className="max-w-md mx-auto flex space-x-4">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200">
                구독하기
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
