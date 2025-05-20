import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// 定义 Product 类型
interface Product {
    id: number;
    name: string;
    price: number;
    discount: boolean;
    colors: string[];
    images: string[];
    createdAt: Date;
    category: {
      name: string;
    };
  }

export async function GET(request: Request) {
  try {
    // 获取查询参数
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const gender = searchParams.get('gender');
    const priceRange = searchParams.get('priceRange');
    const size = searchParams.get('size');
    const color = searchParams.get('color');
    const sort = searchParams.get('sort');

    // 构建查询条件
    const where: any = {};
    
    if (category) {
      where.category = {
        name: category
      };
    }

    // 价格范围过滤
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      where.price = {};
      if (min) where.price.gte = min;
      if (max) where.price.lte = max;
    }

    // 排序条件
    let orderBy = {};
    if (sort) {
      switch (sort) {
        case 'price-asc':
          orderBy = { price: 'asc' };
          break;
        case 'price-desc':
          orderBy = { price: 'desc' };
          break;
        case 'newest':
          orderBy = { createdAt: 'desc' };
          break;
        default:
          orderBy = { id: 'asc' };
      }
    }

    // 查询数据库
    const products = await prisma.product.findMany({
      where,
      orderBy,
      include: {
        category: true
      }
    } ) as Product[];

    // 格式化返回数据
    const formattedProducts = products.map((product:Product) => ({
      id: product.id,
      name: product.name,
      category: product.category.name,
      price: `¥${product.price}`,
      originalPrice: product.discount ? `¥${Math.floor(product.price * 1.2)}` : null,
      discount: Boolean(product.discount),
      colors: product.colors.length,
      image: product.images[0] || '',
      isNew: new Date().getTime() - new Date(product.createdAt).getTime() < 7 * 24 * 60 * 60 * 1000 // 7天内为新品
    }));

    return NextResponse.json(formattedProducts);
  } catch (error) {
    console.error('获取产品列表失败:', error);
    return NextResponse.json(
      { error: '获取产品列表失败' },
      { status: 500 }
    );
  }
}