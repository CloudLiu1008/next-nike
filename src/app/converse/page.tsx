/**
 * Converse品牌页面
 */
export default function ConversePage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Converse</h1>
          <p className="text-lg text-gray-600">探索Converse系列产品，经典帆布鞋与现代风格的完美结合</p>
        </div>
        
        {/* 特色系列 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">特色系列</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">产品图片</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Chuck Taylor All Star</h3>
                <p className="text-gray-600 mb-4">经典帆布鞋，百搭风格</p>
                <a 
                  href="/converse/chuck-taylor" 
                  className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  查看系列
                </a>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">产品图片</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">One Star</h3>
                <p className="text-gray-600 mb-4">复古街头风格</p>
                <a 
                  href="/converse/one-star" 
                  className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  查看系列
                </a>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">产品图片</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Jack Purcell</h3>
                <p className="text-gray-600 mb-4">简约优雅，经典设计</p>
                <a 
                  href="/converse/jack-purcell" 
                  className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  查看系列
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* 产品分类 */}
        <section>
          <h2 className="text-2xl font-bold mb-6">浏览分类</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a 
              href="/converse/shoes" 
              className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition-colors"
            >
              <h3 className="font-bold mb-1">鞋类</h3>
              <p className="text-gray-600">查看全部</p>
            </a>
            
            <a 
              href="/converse/clothing" 
              className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition-colors"
            >
              <h3 className="font-bold mb-1">服装</h3>
              <p className="text-gray-600">查看全部</p>
            </a>
            
            <a 
              href="/converse/accessories" 
              className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition-colors"
            >
              <h3 className="font-bold mb-1">配件</h3>
              <p className="text-gray-600">查看全部</p>
            </a>
            
            <a 
              href="/converse/new" 
              className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition-colors"
            >
              <h3 className="font-bold mb-1">新品上市</h3>
              <p className="text-gray-600">查看全部</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}