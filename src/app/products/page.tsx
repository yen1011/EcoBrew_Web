export default function Products() {
  const products = [
    {
      id: 1,
      name: "치커리 블렌드",
      description: "치커리 뿌리로 만든 카페인 프리 대체커피, 부드럽고 고소한 맛",
      price: "18,000원",
      origin: "유럽산 치커리",
      type: "카페인 프리",
      image: "🌿"
    },
    {
      id: 2,
      name: "민들레 루트 커피",
      description: "민들레 뿌리로 만든 건강한 대체커피, 간 건강에 도움",
      price: "22,000원",
      origin: "유기농 민들레",
      type: "허브 블렌드",
      image: "🌼"
    },
    {
      id: 3,
      name: "도토리 커피",
      description: "국산 도토리로 만든 전통 대체커피, 구수하고 깊은 맛",
      price: "20,000원",
      origin: "국산 도토리",
      type: "전통 블렌드",
      image: "🌰"
    },
    {
      id: 4,
      name: "현미 커피",
      description: "볶은 현미로 만든 고소한 대체커피, 영양소가 풍부",
      price: "16,000원",
      origin: "국산 현미",
      type: "곡물 블렌드",
      image: "🌾"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              대체커피 제품 소개
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              자연에서 얻은 건강한 식물성 원료로 만든 ECO BREW의 특별한 대체커피를 만나보세요
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="text-6xl mb-4 text-center">{product.image}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">원료:</span>
                      <span className="text-gray-600">{product.origin}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">타입:</span>
                      <span className="text-gray-600">{product.type}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-green-800">{product.price}</span>
                    <button className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200">
                      주문하기
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              대체커피 선택 가이드
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              당신의 라이프스타일에 맞는 완벽한 대체커피를 찾아보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">카페인 프리</h3>
              <p className="text-gray-600">
                카페인에 민감하거나 임산부, 수유부에게 안전한 선택
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">건강 중심</h3>
              <p className="text-gray-600">
                몸에 좋은 영양소가 풍부하고 소화에 부담이 적은 건강한 선택
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌾</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">전통 맛</h3>
              <p className="text-gray-600">
                우리나라 전통 곡물의 구수하고 친숙한 맛을 선호하는 분께 추천
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
