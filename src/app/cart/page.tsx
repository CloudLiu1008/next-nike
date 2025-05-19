/**
 * 购物车页面
 */
export default function CartPage() {
  // 模拟购物车数据
  const cartItems = [
    {
      id: 1,
      name: 'Nike Air Force 1',
      category: '男子运动鞋',
      price: '¥899',
      quantity: 1,
      image: '/placeholder-product-1.jpg',
    },
    {
      id: 2,
      name: 'Nike Sportswear Club Fleece',
      category: '男子卫衣',
      price: '¥399',
      quantity: 2,
      image: '/placeholder-product-2.jpg',
    },
  ];

  // 计算总价
  const subtotal = '¥1697';
  const shipping = '¥0';
  const total = '¥1697';

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">购物车</h1>
        
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 购物车商品列表 */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center">
                      {/* 商品图片 */}
                      <div className="w-full sm:w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center mb-4 sm:mb-0 sm:mr-6">
                        <span className="text-gray-500 text-sm">商品图片</span>
                      </div>
                      
                      {/* 商品信息 */}
                      <div className="flex-1">
                        <h3 className="text-lg font-medium">{item.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{item.category}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <button className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
                              -
                            </button>
                            <span className="mx-3">{item.quantity}</span>
                            <button className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
                              +
                            </button>
                          </div>
                          <div className="font-medium">{item.price}</div>
                        </div>
                      </div>
                      
                      {/* 删除按钮 */}
                      <button className="mt-4 sm:mt-0 sm:ml-4 text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* 订单摘要 */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm p-6">
                <h2 className="text-lg font-bold mb-4">订单摘要</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">小计</span>
                    <span>{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">运费</span>
                    <span>{shipping}</span>
                  </div>
                  <div className="border-t pt-3 mt-3 border-gray-200 flex justify-between font-bold">
                    <span>总计</span>
                    <span>{total}</span>
                  </div>
                </div>
                
                <button className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                  结算
                </button>
                
                <div className="mt-4 text-center">
                  <a href="/" className="text-gray-600 hover:text-black text-sm">
                    继续购物
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl mb-6">您的购物车是空的</p>
            <a 
              href="/" 
              className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              继续购物
            </a>
          </div>
        )}
      </div>
    </div>
  );
}