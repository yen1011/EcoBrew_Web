export default function Sustainability() {
  const certifications = [
    {
      name: "Fair Trade",
      description: "공정 무역 인증으로 농부들의 정당한 대가를 보장합니다",
      icon: "🤝"
    },
    {
      name: "Organic",
      description: "유기농 인증으로 화학 농약 없이 재배된 커피입니다",
      icon: "🌿"
    },
    {
      name: "Rainforest Alliance",
      description: "열대우림 보호와 지속가능한 농업을 지원합니다",
      icon: "🌳"
    },
    {
      name: "UTZ Certified",
      description: "지속가능한 농업과 더 나은 미래를 위한 인증입니다",
      icon: "🏆"
    }
  ];

  const initiatives = [
    {
      title: "농부 지원 프로그램",
      description: "커피 농부들의 생활 개선과 교육을 지원하여 지속가능한 농업을 실현합니다",
      impact: "1,200+ 농가 지원",
      icon: "👨‍🌾"
    },
    {
      title: "교육 프로그램",
      description: "현지 농부들에게 지속가능한 농업 기술과 경영 노하우를 교육합니다",
      impact: "500+ 교육 이수자",
      icon: "📚"
    },
    {
      title: "커뮤니티 개발",
      description: "커피 재배 지역의 인프라와 교육 시설 개선을 지원합니다",
      impact: "50+ 프로젝트 완료",
      icon: "🏘️"
    },
    {
      title: "여성 권익 보호",
      description: "여성 농부들의 권익 보호와 경제적 자립을 지원합니다",
      impact: "300+ 여성 농부 지원",
      icon: "👩‍🌾"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              인증 & 지속가능성
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              국제 인증을 통해 검증된 품질과 지속가능한 미래를 위한 우리의 약속
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              국제 인증
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              우리의 커피는 다양한 국제 인증을 받아 품질과 지속가능성을 보장합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-6xl mb-4">{cert.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              지속가능성 이니셔티브
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              더 나은 미래를 위한 우리의 지속적인 노력과 성과를 확인해보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{initiative.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{initiative.title}</h3>
                    <p className="text-gray-600 mb-4">{initiative.description}</p>
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                      {initiative.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              우리의 임팩트
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              지속가능한 커피 생산을 통해 만들어낸 긍정적인 변화
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">2,000+</div>
              <p className="text-gray-600">지원받는 농부 수</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">15개국</div>
              <p className="text-gray-600">파트너십 국가</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <div className="text-4xl font-bold text-yellow-600 mb-2">₩50억</div>
              <p className="text-gray-600">농부 지원 금액</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">10년</div>
              <p className="text-gray-600">지속가능성 경험</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              지속가능성 여정
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              우리의 지속가능성 노력이 어떻게 발전해왔는지 확인해보세요
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-purple-600 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900">2015</h3>
                  <p className="text-gray-600">Fair Trade 인증 획득</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-purple-600 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900">2017</h3>
                  <p className="text-gray-600">첫 번째 농부 지원 프로그램 시작</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-purple-600 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900">2019</h3>
                  <p className="text-gray-600">Rainforest Alliance 인증 획득</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-purple-600 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900">2021</h3>
                  <p className="text-gray-600">탄소 중립 달성</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-purple-600 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900">2024</h3>
                  <p className="text-gray-600">2,000+ 농가 파트너십 달성</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            지속가능한 미래에 동참하세요
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            인증받은 지속가능한 커피를 선택하여 더 나은 세상을 만들어가세요
          </p>
          <button className="bg-white hover:bg-gray-100 text-purple-800 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200">
            지속가능한 커피 주문하기
          </button>
        </div>
      </section>
    </div>
  );
}
