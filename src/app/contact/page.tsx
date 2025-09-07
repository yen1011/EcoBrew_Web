'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 폼 제출 로직을 추가할 수 있습니다
    alert('문의가 성공적으로 전송되었습니다!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              문의
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto">
              궁금한 점이나 문의사항이 있으시면 언제든지 연락주세요
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">문의하기</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                  placeholder="이름을 입력하세요"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  이메일 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                  placeholder="이메일을 입력하세요"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  전화번호
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                  placeholder="전화번호를 입력하세요"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  문의 유형 *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                >
                  <option value="">문의 유형을 선택하세요</option>
                  <option value="product">제품 문의</option>
                  <option value="order">주문 문의</option>
                  <option value="partnership">파트너십 문의</option>
                  <option value="wholesale">도매 문의</option>
                  <option value="other">기타 문의</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  메시지 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                  placeholder="문의 내용을 자세히 입력해주세요"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                문의 보내기
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">연락처 정보</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">주소</h3>
                    <p className="text-gray-600">
                      서울특별시 강남구 테헤란로 123<br />
                      커피빌딩 10층
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">전화번호</h3>
                    <p className="text-gray-600">02-1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">이메일</h3>
                    <p className="text-gray-600">info@premiumcoffee.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">⏰</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">운영시간</h3>
                    <p className="text-gray-600">
                      평일: 09:00 - 18:00<br />
                      토요일: 09:00 - 15:00<br />
                      일요일: 휴무
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">자주 묻는 질문</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Q. 배송은 얼마나 걸리나요?</h3>
                  <p className="text-gray-600">일반적으로 주문 후 2-3일 내에 배송됩니다.</p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Q. 도매 주문이 가능한가요?</h3>
                  <p className="text-gray-600">네, 도매 주문 문의는 별도 연락 부탁드립니다.</p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Q. 원두 보관 방법은?</h3>
                  <p className="text-gray-600">직사광선을 피하고 서늘하고 건조한 곳에 보관해주세요.</p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Q. 반품/교환이 가능한가요?</h3>
                  <p className="text-gray-600">제품 수령 후 7일 이내 미개봉 상품에 한해 가능합니다.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">소셜 미디어</h2>
              <p className="mb-6">우리의 소셜 미디어에서 더 많은 정보를 확인하세요!</p>
              
              <div className="flex space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors duration-200">
                  📘 Facebook
                </button>
                <button className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-lg transition-colors duration-200">
                  📷 Instagram
                </button>
                <button className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-lg transition-colors duration-200">
                  🐦 Twitter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section (Placeholder) */}
      <section className="bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">찾아오시는 길</h2>
            <p className="text-lg text-gray-600">서울 강남구에 위치한 저희 사무실로 언제든 방문해주세요</p>
          </div>
          
          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-xl text-gray-600">지도가 여기에 표시됩니다</p>
              <p className="text-sm text-gray-500 mt-2">실제 서비스에서는 Google Maps나 네이버 지도 API를 연동할 수 있습니다</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
