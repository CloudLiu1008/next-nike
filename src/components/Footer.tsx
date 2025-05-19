'use client';

import React from 'react';
import Link from 'next/link';

/**
 * Footer组件 - Nike官网风格的页脚
 * 包含导航链接、版权信息和社交媒体链接
 */
const Footer = () => {
  // 页脚导航链接分组
  const footerLinks = [
    {
      title: '热门鞋类',
      links: [
        { name: 'Air Force 1', href: '/shoes/air-force-1' },
        { name: 'Air Jordan 1', href: '/shoes/air-jordan-1' },
        { name: 'Air Max', href: '/shoes/air-max' },
        { name: 'Dunk', href: '/shoes/dunk' },
        { name: 'Blazer', href: '/shoes/blazer' },
      ],
    },
    {
      title: '热门服饰',
      links: [
        { name: '卫衣', href: '/clothing/hoodies' },
        { name: '运动裤', href: '/clothing/pants' },
        { name: 'T恤', href: '/clothing/t-shirts' },
        { name: '夹克', href: '/clothing/jackets' },
        { name: '袜子', href: '/clothing/socks' },
      ],
    },
    {
      title: '关于Nike',
      links: [
        { name: '新闻', href: '/about/news' },
        { name: '招聘', href: '/about/careers' },
        { name: '投资者', href: '/about/investors' },
        { name: '可持续发展', href: '/about/sustainability' },
      ],
    },
    {
      title: '帮助',
      links: [
        { name: '订单状态', href: '/help/order-status' },
        { name: '配送', href: '/help/shipping' },
        { name: '退货', href: '/help/returns' },
        { name: '支付选项', href: '/help/payment-options' },
        { name: '联系我们', href: '/help/contact' },
      ],
    },
  ];

  // 社交媒体链接
  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/nike', icon: 'twitter' },
    { name: 'Facebook', href: 'https://facebook.com/nike', icon: 'facebook' },
    { name: 'Instagram', href: 'https://instagram.com/nike', icon: 'instagram' },
    { name: 'YouTube', href: 'https://youtube.com/nike', icon: 'youtube' },
  ];

  // 社交媒体图标渲染函数
  const renderSocialIcon = (icon: string) => {
    // 简化的社交媒体图标
    return (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
          clipRule="evenodd"
        />
      </svg>
    );
  };

  return (
    <footer className="bg-nike-black text-white">
      {/* 主要页脚内容 */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-bold mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 社交媒体链接 */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex space-x-6 justify-center md:justify-start">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{link.name}</span>
                {renderSocialIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>

        {/* 版权信息 */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
          <div className="mb-4 md:mb-0">
            <p>© 2023 Nike, Inc. 保留所有权利</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/policy/terms" className="hover:text-white">
              条款
            </Link>
            <Link href="/policy/privacy" className="hover:text-white">
              隐私政策
            </Link>
            <Link href="/policy/cookies" className="hover:text-white">
              Cookie 设置
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;