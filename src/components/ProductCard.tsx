/**
 * 商品卡片组件
 */
'use client';

import Link from 'next/link';

type ProductProps = {
  product: {
    id: number;
    name: string;
    category: string;
    price: string;
    originalPrice?: string;
    discount: boolean;
    colors: number;
    image: string;
    isNew: boolean;
  };
};

export default function ProductCard({ product }: ProductProps) {
  return (
    <div className="group">
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
          {product.discount && product.originalPrice && (
            <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}