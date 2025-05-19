'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * 产品详情页组件
 * 展示单个产品的详细信息、尺码选择和购买选项
 */
export default function ProductDetail({ params }: { params: { id: string } }) {
  // 产品ID
  const { id } = params;
  
  // 模拟产品数据 - 实际项目中应从API获取
  const product = {
    id,
    name: 'Nike Air Force 1 \'07',
    category: '男子运动鞋',
    price: '¥899',
    originalPrice: '¥999',
    discount: '9折',
    colors: ['白色', '黑色', '红色'],
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    description: 'Air Force 1 \'07是原始篮球鞋的翻版，延续经典设计，带来全新的细节变化。耐穿的缝线叠层和干净利落的皮革，让这款经典鞋款焕发新生，带来耀眼光芒。',
    features: [
      '皮革和合成材料的鞋面，提供耐用性和支撑力',
      'Nike Air缓震，提供轻盈舒适的脚感',
      '泡沫中底，带来轻盈缓震效果',
      '橡胶外底，提供耐用的抓地力和牵引力',
      '传统系带设计，带来安全贴合感'
    ],
    images: [
      '/placeholder-product-1.jpg', // 实际项目中需替换为真实图片
      '/placeholder-product-2.jpg',
      '/placeholder-product-3.jpg',
    ]
  };
  
  // 状态管理
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 添加到购物车
  const addToCart = () => {
    if (!selectedSize) {
      alert('请选择尺码');
      return;
    }
    
    alert(`已添加到购物车: ${product.name}, 颜色: ${selectedColor}, 尺码: ${selectedSize}, 数量: ${quantity}`);
    // 实际项目中应调用购物车API
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* 面包屑导航 */}
      <nav className="mb-8">
        <ol className="flex text-sm">
          <li className="mr-2">
            <Link href="/" className="text-gray-500 hover:text-nike-red">首页</Link>
            <span className="mx-2 text-gray-400">/</span>
          </li>
          <li className="mr-2">
            <Link href="/products" className="text-gray-500 hover:text-nike-red">所有产品</Link>
            <span className="mx-2 text-gray-400">/</span>
          </li>
          <li className="font-medium">{product.name}</li>
        </ol>
      </nav>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 产品图片区 */}
        <div>
          {/* 主图 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4 relative">
            {/* 实际项目中这里应该是产品图片 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-500 text-lg">产品图片 {currentImageIndex + 1}</span>
            </div>
          </div>
          
          {/* 缩略图 */}
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((_, index) => (
              <button
                key={index}
                className={`bg-gray-100 rounded-md overflow-hidden aspect-square ${index === currentImageIndex ? 'ring-2 ring-nike-red' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <div className="flex items-center justify-center h-full">
                  <span className="text-gray-500 text-xs">图{index + 1}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* 产品信息区 */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.category}</p>
          
          {/* 价格信息 */}
          <div className="mb-6">
            <span className="text-2xl font-bold mr-3">{product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-500 line-through mr-2">{product.originalPrice}</span>
            )}
            {product.discount && (
              <span className="text-nike-red">{product.discount}</span>
            )}
          </div>
          
          {/* 颜色选择 */}
          <div className="mb-6">
            <h2 className="text-sm font-medium mb-3">颜色: {selectedColor}</h2>
            <div className="flex space-x-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`w-10 h-10 rounded-full border ${selectedColor === color ? 'ring-2 ring-nike-red ring-offset-2' : 'border-gray-300'}`}
                  style={{ backgroundColor: color === '白色' ? 'white' : color === '黑色' ? 'black' : 'red' }}
                  onClick={() => setSelectedColor(color)}
                  aria-label={`选择颜色: ${color}`}
                />
              ))}
            </div>
          </div>
          
          {/* 尺码选择 */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-sm font-medium">选择尺码</h2>
              <button className="text-sm text-gray-600 underline">尺码指南</button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`py-3 border rounded-md ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-300 hover:border-gray-400'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* 数量选择 */}
          <div className="mb-6">
            <h2 className="text-sm font-medium mb-3">数量</h2>
            <div className="flex items-center border border-gray-300 rounded-md w-32">
              <button
                className="px-3 py-2 text-gray-500"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="flex-1 text-center">{quantity}</span>
              <button
                className="px-3 py-2 text-gray-500"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          
          {/* 操作按钮 */}
          <div className="flex flex-col space-y-3 mb-8">
            <button
              className="w-full bg-nike-black text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
              onClick={addToCart}
            >
              添加到购物车
            </button>
            <button className="w-full border border-gray-300 py-4 rounded-full font-medium hover:border-gray-400 transition-colors">
              收藏
            </button>
          </div>
          
          {/* 产品描述 */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-lg font-medium mb-4">产品详情</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* 推荐产品 */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">你可能还喜欢</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* 这里可以循环渲染推荐产品 */}
          {[1, 2, 3, 4].map((item) => (
            <Link key={item} href={`/products/${item}`} className="group">
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square mb-3 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500">推荐产品 {item}</span>
                </div>
              </div>
              <h3 className="font-medium group-hover:text-nike-red transition-colors">Nike 推荐产品 {item}</h3>
              <p className="text-gray-600 mb-1">运动鞋</p>
              <p className="font-medium">¥{799 + item * 100}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}