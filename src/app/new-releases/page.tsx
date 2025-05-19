/**
 * 新品上市页面
 */
export default function NewReleasesPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">新品上市</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 新品分类卡片 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">产品图片</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">最新上架</h2>
              <p className="text-gray-600 mb-4">探索刚刚发布的最新Nike产品</p>
              <a 
                href="/new-releases/latest" 
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
              <h2 className="text-2xl font-bold mb-2">本季新品</h2>
              <p className="text-gray-600 mb-4">本季度最热门的Nike新品系列</p>
              <a 
                href="/new-releases/season" 
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
              <h2 className="text-2xl font-bold mb-2">限量发售</h2>
              <p className="text-gray-600 mb-4">限量版Nike产品，独特设计与风格</p>
              <a 
                href="/new-releases/limited" 
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
              <h2 className="text-2xl font-bold mb-2">即将发售</h2>
              <p className="text-gray-600 mb-4">抢先了解即将发布的Nike产品</p>
              <a 
                href="/new-releases/upcoming" 
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