import { PrismaClient } from '@prisma/client/index.js';

const prisma = new PrismaClient();

async function main() {
  try {
    // 清理现有数据
    await prisma.orderItem.deleteMany();
    await prisma.order.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();

    // 创建用户
    const users = await Promise.all([
      prisma.user.create({
        data: {
          name: '张三',
          email: 'zhangsan@example.com',
        },
      }),
      prisma.user.create({
        data: {
          name: '李四',
          email: 'lisi@example.com',
        },
      }),
    ]);

    // 创建产品分类
    const categories = await Promise.all([
      prisma.category.create({
        data: {
          name: '跑步鞋',
          description: 'Nike专业跑步鞋系列',
        },
      }),
      prisma.category.create({
        data: {
          name: '篮球鞋',
          description: 'Nike篮球鞋系列',
        },
      }),
      prisma.category.create({
        data: {
          name: '运动服装',
          description: 'Nike运动服装系列',
        },
      }),
    ]);

    // 创建产品
    const products = await Promise.all([
      prisma.product.create({
        data: {
          name: 'Nike Air Zoom Pegasus 38',
          description: '专业跑步鞋，提供出色的缓震和支撑',
          price: 899.00,
          images: [
            'https://static.nike.com/pegasus-38-1.jpg',
            'https://static.nike.com/pegasus-38-2.jpg',
          ],
          sizes: ['39', '40', '41', '42', '43'],
          colors: ['黑色', '白色', '蓝色'],
          stock: 100,
          categoryId: categories[0].id,
        },
      }),
      prisma.product.create({
        data: {
          name: 'Nike LeBron 19',
          description: '詹姆斯签名篮球鞋，专为场上表现设计',
          price: 1299.00,
          images: [
            'https://static.nike.com/lebron-19-1.jpg',
            'https://static.nike.com/lebron-19-2.jpg',
          ],
          sizes: ['40', '41', '42', '43', '44'],
          colors: ['黑金', '白蓝', '红色'],
          stock: 80,
          categoryId: categories[1].id,
        },
      }),
      prisma.product.create({
        data: {
          name: 'Nike Dri-FIT 运动T恤',
          description: '采用速干面料，让运动更加舒适',
          price: 199.00,
          images: [
            'https://static.nike.com/dri-fit-1.jpg',
            'https://static.nike.com/dri-fit-2.jpg',
          ],
          sizes: ['S', 'M', 'L', 'XL'],
          colors: ['黑色', '白色', '灰色'],
          stock: 200,
          categoryId: categories[2].id,
        },
      }),
    ]);

    // 创建订单和订单项
    await Promise.all([
      prisma.order.create({
        data: {
          userId: users[0].id,
          totalAmount: 1098.00,
          status: '已完成',
          items: {
            create: [
              {
                productId: products[0].id,
                quantity: 1,
                price: products[0].price,
                size: '42',
                color: '黑色',
              },
              {
                productId: products[2].id,
                quantity: 1,
                price: products[2].price,
                size: 'L',
                color: '白色',
              },
            ],
          },
        },
      }),
      prisma.order.create({
        data: {
          userId: users[1].id,
          totalAmount: 1299.00,
          status: '待发货',
          items: {
            create: [
              {
                productId: products[1].id,
                quantity: 1,
                price: products[1].price,
                size: '43',
                color: '黑金',
              },
            ],
          },
        },
      }),
    ]);

    console.log('✅ 测试数据已成功生成');
  } catch (error) {
    console.error('❌ 生成测试数据时出错:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main();