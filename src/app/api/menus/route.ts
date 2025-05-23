import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // 从数据库获取菜单数据
    const menus = await prisma.menu.findMany({
      where: {
        isActive: true,
        parentId: null // 只获取顶级菜单
      },
      orderBy: {
        order: 'asc'
      },
      include: {
        children: {
          where: {
            isActive: true
          },
          orderBy: {
            order: 'asc'
          },
          include: {
            category: true
          }
        },
        category: true
      }
    });

    // 构建菜单结构
    const menuItems = menus.map(menu => {
      const subMenus = menu.children.map(subMenu => ({
        name: subMenu.name,
        href: subMenu.path,
        id: subMenu.id,
        categoryId: subMenu.categoryId
      }));
      
      return {
        name: menu.name,
        href: menu.path,
        id: menu.id,
        categoryId: menu.categoryId,
        subMenus: subMenus.length > 0 ? subMenus : null
      };
    });

    return NextResponse.json(menuItems);
  } catch (error) {
    console.error('获取菜单数据失败:', error);
    return NextResponse.json(
      { error: '获取菜单数据失败' },
      { status: 500 }
    );
  }
}