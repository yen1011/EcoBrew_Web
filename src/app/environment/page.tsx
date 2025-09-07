export default function Environment() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              환경 이야기
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              지구를 생각하는 지속가능한 대체커피 생산과 환경 보호를 위한 우리의 노력
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                지속가능한 원료 조달
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                우리는 환경을 보호하면서도 최고 품질의 대체커피 원료를 조달할 수 있는 지속가능한 방법을 추구합니다. 
                화학 농약 사용을 최소화하고, 자연 친화적인 재배 방식을 통해 생태계의 건강을 유지합니다.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  유기농 식물성 원료 사용
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  지역 농가와의 공정한 거래
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  생태계 친화적 재배 방식
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  물과 토양 자원 보호
                </li>
              </ul>
            </div>
            <div className="bg-green-100 rounded-lg p-8 text-center">
              <span className="text-8xl">🌱</span>
              <h3 className="text-2xl font-bold text-green-800 mt-4">친환경 재배</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-blue-100 rounded-lg p-8 text-center lg:order-1">
              <span className="text-8xl">🌍</span>
              <h3 className="text-2xl font-bold text-blue-800 mt-4">탄소 중립</h3>
            </div>
            <div className="lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                친환경 생산 과정
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                기후 변화에 대응하기 위해 대체커피 생산부터 유통까지 전 과정에서 환경 영향을 최소화하고 있습니다.
                재생 에너지 사용과 효율적인 생산 시스템을 통해 지속가능한 미래를 만들어갑니다.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">✓</span>
                  100% 재생 에너지 사용
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">✓</span>
                  친환경 가공 공정
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">✓</span>
                  생분해성 포장재 사용
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">✓</span>
                  탄소 중립 달성
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              우리의 환경 성과
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              지속가능한 대체커피 생산을 통한 환경 보호 성과를 확인해보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <p className="text-gray-600">재생 에너지 사용률</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">50%</div>
              <p className="text-gray-600">탄소 배출 감소</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-yellow-600 mb-2">1000+</div>
              <p className="text-gray-600">지원하는 농가 수</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <p className="text-gray-600">재활용 가능 포장재</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            함께 지구를 지켜요
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            지속가능한 대체커피를 선택하는 것은 환경을 보호하는 첫걸음입니다
          </p>
          <button className="bg-white hover:bg-gray-100 text-green-800 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200">
            환경 보호에 참여하기
          </button>
        </div>
      </section>
    </div>
  );
}
