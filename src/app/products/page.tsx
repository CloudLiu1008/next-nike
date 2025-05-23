/**
 * 商品选购页面
 */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductFilter from '@/components/ProductFilter';
import { useSearchParams } from 'next/navigation';

// 产品类型定义
interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  originalPrice: string;
  discount: boolean;
  colors: number;
  image: string;
  isNew: boolean;
}

export default function ProductsPage() {
  const searchParams = useSearchParams();
  
  // 筛选状态
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    gender: searchParams.get('gender') || '',
    priceRange: searchParams.get('priceRange') || '',
    size: searchParams.get('size') || '',
    color: searchParams.get('color') || '',
    sort: searchParams.get('sort') || ''
  });

  // 产品状态
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 获取产品数据
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // 构建查询参数
        const queryParams = new URLSearchParams();
        Object.entries(filters).forEach(([key, value]) => {
          if (value) queryParams.append(key, value);
        });

        // 发起API请求
        const response = await fetch(`/api/products?${queryParams}`);
        if (!response.ok) {
          throw new Error('获取产品数据失败');
        }
        const data = await response.json();
        console.log(111,data);
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : '发生未知错误');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters]);

  // 处理筛选器变化
  const handleFilterChange = (filterType: keyof typeof filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  // 加载状态
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-black" />
      </div>
    );
  }

  // 错误状态
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Nike 产品</h1>
          <p className="text-gray-600">共 {products.length} 件商品</p>
        </div>
        
        <ProductFilter 
          filters={filters}
          onFilterChange={handleFilterChange}
          productCount={products.length}
        />
        
        {/* 产品网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group block">
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
            </Link>
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