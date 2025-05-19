/**
 * 商品筛选组件
 */
'use client';

import { useState } from 'react';

type FilterProps = {
  filters: {
    category: string;
    gender: string;
    priceRange: string;
    size: string;
    color: string;
    sort: string;
  };
  onFilterChange: (filterType: string, value: string) => void;
  productCount: number;
};

export default function ProductFilter({ filters, onFilterChange, productCount }: FilterProps) {
  return (
    <div className="mb-8 sticky top-0 bg-white z-10 py-4 border-b border-gray-200">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-3">
          <select 
            className="border border-gray-300 rounded-full px-4 py-2 bg-white text-sm"
            value={filters.gender}
            onChange={(e) => onFilterChange('gender', e.target.value)}
          >
            <option value="">性别</option>
            <option value="men">男子</option>
            <option value="women">女子</option>
            <option value="kids">儿童</option>
          </select>
          
          <select 
            className="border border-gray-300 rounded-full px-4 py-2 bg-white text-sm"
            value={filters.category}
            onChange={(e) => onFilterChange('category', e.target.value)}
          >
            <option value="">类别</option>
            <option value="shoes">鞋类</option>
            <option value="clothing">服装</option>
            <option value="accessories">配件</option>
          </select>
          
          <select 
            className="border border-gray-300 rounded-full px-4 py-2 bg-white text-sm"
            value={filters.priceRange}
            onChange={(e) => onFilterChange('priceRange', e.target.value)}
          >
            <option value="">价格</option>
            <option value="0-500">¥500以下</option>
            <option value="500-1000">¥500 - ¥1000</option>
            <option value="1000+">¥1000以上</option>
          </select>
          
          <select 
            className="border border-gray-300 rounded-full px-4 py-2 bg-white text-sm"
            value={filters.size}
            onChange={(e) => onFilterChange('size', e.target.value)}
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
            onChange={(e) => onFilterChange('color', e.target.value)}
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
            onChange={(e) => onFilterChange('sort', e.target.value)}
          >
            <option value="">排序方式</option>
            <option value="featured">精选</option>
            <option value="newest">最新</option>
            <option value="price-asc">价格: 从低到高</option>
            <option value="price-desc">价格: 从高到低</option>
          </select>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        共 {productCount} 件商品
      </div>
    </div>
  );
}