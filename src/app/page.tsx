import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-6">
              지속가능한 대체커피
            </h1>
            <p className="text-xl md:text-2xl text-green-800 mb-8 max-w-3xl mx-auto">
              환경을 생각하는 건강한 대체커피로 새로운 음료 경험을 시작하세요
            </p>
            <button className="bg-green-800 hover:bg-green-900 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200">
              제품 둘러보기
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              왜 ECO BREW 대체커피를 선택해야 할까요?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              우리는 환경을 보호하면서도 맛있고 건강한 대체커피를 제공하며, 지속가능한 미래를 만들어갑니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% 식물성</h3>
              <p className="text-gray-600">
                천연 식물성 원료로만 만든 건강하고 맛있는 대체커피입니다.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">친환경</h3>
              <p className="text-gray-600">
                환경에 미치는 영향을 최소화하며 지속가능한 방식으로 생산됩니다.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">건강한 선택</h3>
              <p className="text-gray-600">
                카페인 조절이 가능하며 몸에 좋은 영양소가 풍부한 건강한 음료입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            지속가능한 미래를 시작해보세요
          </h2>
          <p className="text-xl text-green-100 mb-8">
            ECO BREW 대체커피로 건강하고 친환경적인 하루를 만들어보세요
          </p>
          <button className="bg-white hover:bg-gray-100 text-green-800 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200">
            문의하기
          </button>
        </div>
      </section>
    </div>
  );
}
