/**
 * 运动产品页面
 */
export default function SportsPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">运动</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 运动分类卡片 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">产品图片</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">跑步</h2>
              <p className="text-gray-600 mb-4">专为跑步运动设计的Nike产品</p>
              <a 
                href="/sports/running" 
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
              <h2 className="text-2xl font-bold mb-2">篮球</h2>
              <p className="text-gray-600 mb-4">专为篮球运动设计的Nike产品</p>
              <a 
                href="/sports/basketball" 
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
              <h2 className="text-2xl font-bold mb-2">足球</h2>
              <p className="text-gray-600 mb-4">专为足球运动设计的Nike产品</p>
              <a 
                href="/sports/football" 
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
              <h2 className="text-2xl font-bold mb-2">训练</h2>
              <p className="text-gray-600 mb-4">专为训练设计的Nike产品</p>
              <a 
                href="/sports/training" 
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
              <h2 className="text-2xl font-bold mb-2">瑜伽</h2>
              <p className="text-gray-600 mb-4">专为瑜伽运动设计的Nike产品</p>
              <a 
                href="/sports/yoga" 
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