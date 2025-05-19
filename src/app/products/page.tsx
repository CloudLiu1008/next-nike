/**
 * 商品选购页面
 */
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProductsPage() {
  // 筛选状态
  const [filters, setFilters] = useState({
    category: '',
    gender: '',
    priceRange: '',
    size: '',
    color: '',
    sort: ''
  });

  // 模拟产品数据
  const products = [
    {
      id: 1,
      name: 'Nike Air Force 1 07',
      category: '男子运动鞋',
      price: '¥899',
      originalPrice: '¥999',
      discount: true,
      colors: 3,
      image: '/placeholder-product-1.jpg',
      isNew: true,
    },
    {
      id: 2,
      name: 'Nike Dunk Low',
      category: '女子运动鞋',
      price: '¥799',
      originalPrice: '',
      discount: false,
      colors: 5,
      image: '/placeholder-product-2.jpg',
      isNew: true,
    },
    {
      id: 3,
      name: 'Nike Air Max 90',
      category: '男子运动鞋',
      price: '¥999',
      originalPrice: '¥1299',
      discount: true,
      colors: 2,
      image: '/placeholder-product-3.jpg',
      isNew: false,
    },
    {
      id: 4,
      name: 'Nike Blazer Mid 77',
      category: '女子运动鞋',
      price: '¥749',
      originalPrice: '',
      discount: false,
      colors: 4,
      image: '/placeholder-product-4.jpg',
      isNew: false,
    },
    {
      id: 5,
      name: 'Nike Air Zoom Pegasus 39',
      category: '跑步鞋',
      price: '¥899',
      originalPrice: '¥1099',
      discount: true,
      colors: 6,
      image: '/placeholder-product-5.jpg',
      isNew: true,
    },
    {
      id: 6,
      name: 'Nike Sportswear Club Fleece',
      category: '男子卫衣',
      price: '¥399',
      originalPrice: '',
      discount: false,
      colors: 3,
      image: '/placeholder-product-6.jpg',
      isNew: false,
    },
    {
      id: 7,
      name: 'Nike Dri-FIT ADV Run Division',
      category: '女子上衣',
      price: '¥499',
      originalPrice: '¥599',
      discount: true,
      colors: 2,
      image: '/placeholder-product-7.jpg',
      isNew: true,
    },
    {
      id: 8,
      name: 'Nike Air Jordan 1 Mid',
      category: '男子运动鞋',
      price: '¥999',
      originalPrice: '',
      discount: false,
      colors: 4,
      image: '/placeholder-product-8.jpg',
      isNew: false,
    },
    {
      id: 9,
      name: 'Nike Therma-FIT Repel',
      category: '男子夹克',
      price: '¥799',
      originalPrice: '¥999',
      discount: true,
      colors: 1,
      image: '/placeholder-product-9.jpg',
      isNew: false,
    },
  ];

  // 处理筛选器变化
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Nike 产品</h1>
          <p className="text-gray-600">共 {products.length} 件商品</p>
        </div>
        
        {/* 筛选器和排序区域 */}
        <div className="mb-8 sticky top-0 bg-white z-10 py-4 border-b border-gray-200">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              <select 
                className="border border-gray-300 rounded-full px-4 py-2 bg-white text-sm"
                value={filters.gender}
                onChange={(e) => handleFilterChange('gender', e.target.value)}
              >
                <option value="">性别</option>
                <option value="men">男子</option>
                <option value="women">女子</option>
                <option value="kids">儿童</option>
              </select>
              
              <select 
                className="border border-gray-300 rounded-full px-4 py-2 bg-white text-sm"
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
              >
                <option value="">类别</option>
                <option value="shoes">鞋类</option>
                <option value="clothing">服装</option>
                <option value="accessories">配件</option>
              </select>
              
              <select 
                className="border border-gray-300 rounded-full px-4 py-2 bg-white text-sm"
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              >
                <option value="">价格</option>
                <option value="0-500">¥500以下</option>
                <option value="500-1000">¥500 - ¥1000</option>
                <option value="1000+">¥1000以上</option>
              </select>
              
              <select 
                className="border border-gray-300 rounded-full px-4 py-2 bg-white text-sm"
                value={filters.size}
                onChange={(e) => handleFilterChange('size', e.target.value)}
              >
                <option value="">尺码</option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
              </select>
              
              <select 
                className="border border-gray-300 rounded-full px-4 py-2 bg-white text-sm"
                value={filters.color}
                onChange={(e) => handleFilterChange('color', e.target.value)}
              >
                <option value="">颜色</option>
                <option value="black">黑色</option>
                <option value="white">白色</option>
                <option value="red">红色</option>
                <option value="blue">蓝色</option>
                <option value="green">绿色</option>
              </select>
            </div>
            
            <div>
              <select 
                className="border border-gray-300 rounded-full px-4 py-2 bg-white text-sm"
                value={filters.sort}
                onChange={(e) => handleFilterChange('sort', e.target.value)}
              >
                <option value="">排序方式</option>
                <option value="featured">精选</option>
                <option value="newest">最新</option>
                <option value="price-asc">价格: 从低到高</option>
                <option value="price-desc">价格: 从高到低</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* 产品网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square mb-3 relative">
                {/* 实际项目中这里应该是产品图片 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500">产品图片</span>
                </div>
                
                {/* 新品标签 */}
                {product.isNew && (
                  <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                    新品
                  </div>
                )}
                
                {/* 收藏按钮 */}
                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </button>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium text-base group-hover:text-nike-red transition-colors">{product.name}</h3>
                  {product.colors > 0 && <span className="text-xs text-gray-500">{product.colors} 种颜色</span>}
                </div>
                <p className="text-gray-600 text-sm mb-1">{product.category}</p>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{product.price}</span>
                  {product.discount && (
                    <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 分页控制 */}
        <div className="flex justify-center items-center gap-2 py-8">
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
            1
          </button>
          
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors">
            2
          </button>
          
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors">
            3
          </button>
          
          <span className="px-2">...</span>
          
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors">
            8
          </button>
          
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}