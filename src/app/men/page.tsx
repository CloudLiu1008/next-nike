/**
 * 男子产品页面
 */
export default function MenPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">男子</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 男子产品分类卡片 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">产品图片</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">鞋类</h2>
              <p className="text-gray-600 mb-4">探索男子Nike鞋类产品</p>
              <a 
                href="/men/shoes" 
                className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                查看详情
              </a>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">产品图片</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">服装</h2>
              <p className="text-gray-600 mb-4">探索男子Nike服装系列</p>
              <a 
                href="/men/clothing" 
                className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                查看详情
              </a>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">产品图片</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">配件</h2>
              <p className="text-gray-600 mb-4">探索男子Nike配件系列</p>
              <a 
                href="/men/accessories" 
                className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                查看详情
              </a>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">产品图片</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">运动系列</h2>
              <p className="text-gray-600 mb-4">专为各种运动设计的男子Nike产品</p>
              <a 
                href="/men/sports" 
                className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                查看详情
              </a>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">产品图片</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">畅销单品</h2>
              <p className="text-gray-600 mb-4">最受欢迎的男子Nike产品</p>
              <a 
                href="/men/best-sellers" 
                className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                查看详情
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}