/**
 * 儿童产品页面
 */
export default function KidsPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">儿童</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 儿童产品分类卡片 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">产品图片</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">婴幼儿 (0-3岁)</h2>
              <p className="text-gray-600 mb-4">为最小的运动员设计的Nike产品</p>
              <a 
                href="/kids/baby" 
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
              <h2 className="text-2xl font-bold mb-2">幼童 (3-7岁)</h2>
              <p className="text-gray-600 mb-4">为幼童设计的Nike产品</p>
              <a 
                href="/kids/little-kids" 
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
              <h2 className="text-2xl font-bold mb-2">大童 (8-16岁)</h2>
              <p className="text-gray-600 mb-4">为大童设计的Nike产品</p>
              <a 
                href="/kids/older-kids" 
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
              <h2 className="text-2xl font-bold mb-2">鞋类</h2>
              <p className="text-gray-600 mb-4">儿童Nike鞋类产品</p>
              <a 
                href="/kids/shoes" 
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
              <p className="text-gray-600 mb-4">儿童Nike服装系列</p>
              <a 
                href="/kids/clothing" 
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