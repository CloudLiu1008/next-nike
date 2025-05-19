/**
 * 品牌页面
 */
export default function BrandsPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">品牌</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 品牌分类卡片 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">品牌图片</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Jordan</h2>
              <p className="text-gray-600 mb-4">探索Jordan系列产品</p>
              <a 
                href="/brands/jordan" 
                className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                查看详情
              </a>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">品牌图片</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Nike SB</h2>
              <p className="text-gray-600 mb-4">探索Nike SB滑板系列产品</p>
              <a 
                href="/brands/nike-sb" 
                className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                查看详情
              </a>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">品牌图片</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">ACG</h2>
              <p className="text-gray-600 mb-4">探索Nike ACG全地形系列产品</p>
              <a 
                href="/brands/acg" 
                className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                查看详情
              </a>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">品牌图片</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">NikeLab</h2>
              <p className="text-gray-600 mb-4">探索NikeLab创新系列产品</p>
              <a 
                href="/brands/nikelab" 
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