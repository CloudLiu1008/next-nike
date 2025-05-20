'use client';

import { use } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  originalPrice: string;
  discount: boolean;
  colors: string[];
  image: string;
  isNew: boolean;
  sizes?: string[];
}

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;
  
  // 模拟产品数据 - 实际项目中应从API获取
  const products: Product[] = [
    {
      id: 1,
      name: 'Nike Air Force 1 07',
      category: '男子运动鞋',
      price: '¥899',
      originalPrice: '¥999',
      discount: true,
      colors: ['#FFFFFF', '#000000', '#808080'],
      image: '/placeholder-product-1.jpg',
      isNew: true,
      sizes: ['39', '40', '41', '42', '43', '44', '45']
    },
    // 其他产品...
  ];

  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div className="text-center py-16">产品未找到</div>;
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link href="/products" className="text-gray-600 hover:text-black inline-flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            返回产品列表
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 产品图片 */}
          <div className="bg-gray-100 rounded-xl overflow-hidden aspect-square">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          {/* 产品信息 */}
          <div>
            <div className="mb-4">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-gray-600">{product.category}</p>
            </div>
            
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold">{product.price}</span>
              {product.discount && (
                <span className="text-gray-500 line-through text-lg">{product.originalPrice}</span>
              )}
              {product.discount && (
                <span className="text-red-500 ml-2">节省 ¥{(parseInt(product.originalPrice.replace('¥', '')) - parseInt(product.price.replace('¥', ''))).toFixed(2)}</span>
              )}
            </div>
            
            {/* 颜色选择 */}
            <div className="mb-6">
              <h2 className="font-medium mb-2">选择颜色</h2>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-black transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            
            {/* 尺码选择 */}
            {product.sizes && (
              <div className="mb-6">
                <h2 className="font-medium mb-2">选择尺码</h2>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="py-3 border border-gray-300 rounded hover:border-black transition-colors text-center"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* 数量选择 */}
            <div className="mb-6">
              <h2 className="font-medium mb-2">选择数量</h2>
              <div className="flex w-32">
                <button className="w-10 h-10 border border-gray-300 flex items-center justify-center">-</button>
                <input type="number" value="1" min="1" className="w-12 h-10 border-t border-b border-gray-300 text-center" />
                <button className="w-10 h-10 border border-gray-300 flex items-center justify-center">+</button>
              </div>
            </div>
            
            {/* 操作按钮 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-black text-white py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                加入购物车
              </button>
              <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:border-black transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </button>
            </div>
            
            {/* 产品描述 */}
            <div className="mt-8">
              <h2 className="font-medium mb-2">产品描述</h2>
              <p className="text-gray-600">
                经典的空军一号设计，结合现代科技与复古风格。这款鞋子采用高品质材料制作，提供卓越的舒适性和耐久性。
                无论是日常穿着还是运动场合，都是您的理想选择。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}