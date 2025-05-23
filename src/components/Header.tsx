'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Header组件 - Nike官网风格的导航栏
 * 包含品牌Logo、主导航菜单、搜索框和用户操作区
 */
const Header = () => {
  // 控制移动端菜单显示状态
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // 控制当前悬停的菜单项（桌面端）
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  // 用于存储定时器ID
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);
  // 控制移动端展开的子菜单
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  // 菜单数据状态
  const [navItems, setNavItems] = useState<any[]>([]);
  // 加载状态
  const [loading, setLoading] = useState(true);

  // 获取菜单数据
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch('/api/menus');
        if (!response.ok) {
          throw new Error('获取菜单数据失败');
        }
        const data = await response.json();
        setNavItems(data);
      } catch (error) {
        console.error('获取菜单失败:', error);
        // 使用默认菜单作为备用
        setNavItems([
          { 
            name: '新品上市', 
            href: '/new-releases',
            subCategories: [
              { name: '最新上架', href: '/products?category=最新上架' },
              { name: '本季新品', href: '/products?category=本季新品' },
              { name: '限量发售', href: '/products?category=限量发售' },
              { name: '即将发售', href: '/products?category=即将发售' }
            ] 
          },
          // ... 其他默认菜单项
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchMenus();
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* 顶部小导航 */}
      <div className="bg-nike-gray py-2 px-4 text-xs flex justify-end space-x-4">
        <Link href="/jordan" className="hover:underline">Jordan</Link>
        <Link href="/converse" className="hover:underline">Converse</Link>
        <Link href="/membership" className="hover:underline">会员</Link>
        <Link href="/cart" className="hover:underline">购物车</Link>
        <Link href="/help" className="hover:underline">帮助</Link>
      </div>
      
      {/* 主导航 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* 品牌Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              {/* 使用Nike Logo - 实际项目中需要替换为真实的Nike Logo */}
              <div className="w-16 h-6 relative">
                <div className="font-bold text-2xl">NIKE</div>
                {/* 后续可替换为真实Logo图片 */}
                {/* <Image 
                  src="/nike-logo.svg" 
                  alt="Nike" 
                  fill 
                  className="object-contain"
                /> */}
              </div>
            </Link>
          </div>
          
          {/* 桌面端导航菜单 */}
          <nav className="hidden md:flex space-x-8">
            {loading ? (
              // 加载状态显示
              <div className="flex space-x-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            ) : (
              // 渲染菜单
              navItems.map((item) => (
                <div 
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => {
                    if (hoverTimer) clearTimeout(hoverTimer);
                    setHoveredItem(item.name);
                  }}
                  onMouseLeave={() => {
                    const timer = setTimeout(() => setHoveredItem(null), 200);
                    setHoverTimer(timer);
                  }}
                >
                  <Link
                    href={item.href}
                    className="text-black hover:text-nike-red px-3 py-2 text-sm font-medium flex items-center"
                  >
                    {item.name}
                    {item.subCategories && (
                      <svg 
                        className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </Link>
                  
                  {/* 下拉菜单 */}
                  {item.subCategories && hoveredItem === item.name && (
                    <div 
                      className="absolute left-0 mt-1 w-56 bg-white shadow-lg rounded-md py-2 z-50 transition-all duration-300 ease-in-out transform opacity-100 scale-100"
                      onMouseEnter={() => {
                        if (hoverTimer) clearTimeout(hoverTimer);
                        setHoveredItem(item.name);
                      }}
                      onMouseLeave={() => {
                        const timer = setTimeout(() => setHoveredItem(null), 200);
                        setHoverTimer(timer);
                      }}
                    >
                      {item.subCategories.map((subItem: any) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-nike-red"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </nav>
          
          {/* 用户操作区 */}
          <div className="flex items-center space-x-4">
            {/* 搜索框 */}
            <div className="hidden md:block">
              <div className="relative rounded-full bg-nike-gray px-3 py-1 flex items-center">
                <span className="sr-only">搜索</span>
                <input
                  type="text"
                  placeholder="搜索"
                  className="bg-transparent border-none focus:outline-none text-sm w-40"
                />
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            
            {/* 收藏夹图标 */}
            <button className="text-black hover:text-nike-red">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            
            {/* 购物袋图标 */}
            <button className="text-black hover:text-nike-red">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
            
            {/* 移动端菜单按钮 */}
            <button
              className="md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* 移动端菜单 */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {loading ? (
              // 移动端加载状态
              <div className="space-y-2 p-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-6 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            ) : (
              // 渲染移动端菜单
              navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                  <div className="flex justify-between items-center">
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-black hover:bg-nike-gray w-full"
                      onClick={() => !item.subCategories && setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.subCategories && (
                      <button 
                        className="px-3 py-2 text-gray-500"
                        onClick={() => setExpandedMobileItem(expandedMobileItem === item.name ? null : item.name)}
                      >
                        <svg 
                          className={`h-5 w-5 transition-transform duration-200 ${expandedMobileItem === item.name ? 'rotate-180' : ''}`}
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    )}
                  </div>
                  
                  {/* 移动端子菜单 */}
                  {item.subCategories && expandedMobileItem === item.name && (
                    <div className="pl-4 pb-2 bg-gray-50">
                      {item.subCategories.map((subItem: any) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-nike-red"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;