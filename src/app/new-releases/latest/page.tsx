/**
 * 最新上架页面
 */
export default function LatestReleasesPage() {
  // 模拟最新上架产品数据
  const latestProducts = [
    {
      id: 1,
      name: 'Nike Air Max 2023',
      category: '男子运动鞋',
      price: '¥1299',
      image: '/placeholder-product-1.jpg',
    },
    {
      id: 2,
      name: 'Nike Dri-FIT ADV',
      category: '女子运动上衣',
      price: '¥499',
      image: '/placeholder-product-2.jpg',
    },
    {
      id: 3,
      name: 'Nike ZoomX Invincible',
      category: '跑步鞋',
      price: '¥1499',
      image: '/placeholder-product-3.jpg',
    },
    {
      id: 4,
      name: 'Nike Sportswear Tech Fleece',
      category: '男子夹克',
      price: '¥899',
      image: '/placeholder-product-4.jpg',
    },
    {
      id: 5,
      name: 'Nike Air Force 1 Shadow',
      category: '女子运动鞋',
      price: '¥999',
      image: '/placeholder-product-5.jpg',
    },
    {
      id: 6,
      name: 'Nike Therma-FIT',
      category: '儿童外套',
      price: '¥599',
      image: '/placeholder-product-6.jpg',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">最新上架</h1>
          <p className="text-lg text-gray-600">探索刚刚发布的最新Nike产品</p>
        </div>
        
        {/* 筛选器 */}
        <div className="mb-8 flex flex-wrap gap-4">
          <select className="border border-gray-300 rounded-full px-4 py-2 bg-white">
            <option>按类别筛选</option>
            <option>鞋类</option>
            <option>服装</option>
            <option>配件</option>
          </select>
          
          <select className="border border-gray-300 rounded-full px-4 py-2 bg-white">
            <option>按价格排序</option>
            <option>价格: 从低到高</option>
            <option>价格: 从高到低</option>
          </select>
        </div>
        
        {/* 产品网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square mb-3 relative">
                {/* 实际项目中这里应该是产品图片 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500">产品图片</span>
                </div>
              </div>
              <h3 className="font-medium text-lg group-hover:text-nike-red transition-colors">{product.name}</h3>
              <p className="text-gray-600 mb-1">{product.category}</p>
              <p className="font-medium">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}