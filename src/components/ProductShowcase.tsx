'use client';

import React from 'react';
import Link from 'next/link';

/**
 * ProductShowcase组件 - Nike官网风格的产品展示区
 * 展示热门产品、系列和促销活动
 */
const ProductShowcase = () => {
  // 产品数据
  const products = [
    {
      id: 1,
      name: 'Nike Air Force 1',
      category: '男子运动鞋',
      price: '¥899',
      image: '/placeholder-product-1.jpg', // 实际项目中需替换为真实图片
      link: '/products/nike-air-force-1',
    },
    {
      id: 2,
      name: 'Nike Dunk Low',
      category: '女子运动鞋',
      price: '¥799',
      image: '/placeholder-product-2.jpg', // 实际项目中需替换为真实图片
      link: '/products/nike-dunk-low',
    },
    {
      id: 3,
      name: 'Nike Air Max 90',
      category: '男子运动鞋',
      price: '¥999',
      image: '/placeholder-product-3.jpg', // 实际项目中需替换为真实图片
      link: '/products/nike-air-max-90',
    },
    {
      id: 4,
      name: 'Nike Blazer Mid',
      category: '女子运动鞋',
      price: '¥749',
      image: '/placeholder-product-4.jpg', // 实际项目中需替换为真实图片
      link: '/products/nike-blazer-mid',
    },
  ];

  // 产品系列
  const collections = [
    {
      id: 1,
      title: '男子新品',
      description: '探索男子最新系列',
      image: '/placeholder-collection-1.jpg', // 实际项目中需替换为真实图片
      link: '/men/new',
      bgColor: 'bg-gray-100',
    },
    {
      id: 2,
      title: '女子新品',
      description: '探索女子最新系列',
      image: '/placeholder-collection-2.jpg', // 实际项目中需替换为真实图片
      link: '/women/new',
      bgColor: 'bg-gray-200',
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      {/* 热门产品区域 */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">热门单品</h2>
          <p className="text-gray-600">探索Nike最受欢迎的产品</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={product.link} className="group">
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square mb-3 relative">
                {/* 实际项目中这里应该是产品图片 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500">产品图片</span>
                </div>
              </div>
              <h3 className="font-medium text-lg group-hover:text-nike-red transition-colors">{product.name}</h3>
              <p className="text-gray-600 mb-1">{product.category}</p>
              <p className="font-medium">{product.price}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/products" 
            className="inline-block border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors"
          >
            查看更多
          </Link>
        </div>
      </section>

      {/* 产品系列区域 */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">精选系列</h2>
          <p className="text-gray-600">探索Nike最新系列</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((collection) => (
            <Link 
              key={collection.id} 
              href={collection.link}
              className={`${collection.bgColor} rounded-lg p-8 flex flex-col items-center md:items-start text-center md:text-left hover:shadow-lg transition-shadow`}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                <p className="text-gray-700">{collection.description}</p>
              </div>
              <button className="mt-4 bg-nike-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                立即探索
              </button>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductShowcase;