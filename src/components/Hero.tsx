'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Hero组件 - Nike官网风格的首页大型轮播图
 * 展示主要促销活动和新品发布
 */
const Hero = () => {
  // 轮播图数据
  const slides = [
    {
      id: 1,
      image: '/placeholder-hero-1.jpg', // 实际项目中需替换为真实图片
      title: '新品上市：AIR JORDAN',
      subtitle: '突破界限，展现自我',
      ctaText: '立即购买',
      ctaLink: '/products/air-jordan',
      bgColor: 'bg-gray-100',
    },
    {
      id: 2,
      image: '/placeholder-hero-2.jpg', // 实际项目中需替换为真实图片
      title: '夏季系列',
      subtitle: '轻盈透气，为夏日而生',
      ctaText: '探索系列',
      ctaLink: '/collections/summer',
      bgColor: 'bg-blue-50',
    },
    {
      id: 3,
      image: '/placeholder-hero-3.jpg', // 实际项目中需替换为真实图片
      title: '跑步精选',
      subtitle: '专为速度设计',
      ctaText: '浏览全部',
      ctaLink: '/running',
      bgColor: 'bg-gray-200',
    },
  ];

  // 当前显示的轮播图索引
  const [currentSlide, setCurrentSlide] = useState(0);

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // 切换到指定轮播图
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // 当前显示的轮播图数据
  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative overflow-hidden">
      {/* 轮播图内容 */}
      <div 
        className={`w-full h-[70vh] flex items-center justify-center ${currentSlideData.bgColor} transition-all duration-500`}
      >
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
          {/* 文字内容区 */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{currentSlideData.title}</h1>
            <p className="text-xl md:text-2xl mb-6">{currentSlideData.subtitle}</p>
            <Link 
              href={currentSlideData.ctaLink}
              className="inline-block bg-nike-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              {currentSlideData.ctaText}
            </Link>
          </div>
          
          {/* 图片区域 - 实际项目中需要替换为真实图片 */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full h-[300px] md:h-[400px]">
              {/* 由于没有实际图片，这里使用占位符 */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg">
                <span className="text-gray-500 text-lg">产品图片展示区</span>
                {/* 实际项目中使用Image组件加载图片 */}
                {/* <Image
                  src={currentSlideData.image}
                  alt={currentSlideData.title}
                  fill
                  className="object-contain"
                  priority
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 轮播图指示器 */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-nike-red' : 'bg-gray-300'}`}
            aria-label={`转到轮播图 ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;