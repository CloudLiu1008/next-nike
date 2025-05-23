import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    // 清理现有数据
    await prisma.menu.deleteMany();
    await prisma.productCategory.deleteMany(); // 先删除关联表数据
    await prisma.orderItem.deleteMany();
    await prisma.order.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();

    console.log('🧹 数据库清理完成');

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

    console.log('👤 用户创建完成');

    // 创建主分类
    const mainCategories = await Promise.all([
      prisma.category.create({
        data: {
          name: '男子',
          description: 'Nike男子产品系列',
          order: 1,
          isActive: true,
        },
      }),
      prisma.category.create({
        data: {
          name: '女子',
          description: 'Nike女子产品系列',
          order: 2,
          isActive: true,
        },
      }),
      prisma.category.create({
        data: {
          name: '儿童',
          description: 'Nike儿童产品系列',
          order: 3,
          isActive: true,
        },
      }),
    ]);

    // 创建子分类
    const subCategories = await Promise.all([
      // 男子子分类
      prisma.category.create({
        data: {
          name: '男子跑步鞋',
          description: 'Nike男子专业跑步鞋系列',
          parentId: mainCategories[0].id,
          order: 1,
          isActive: true,
        },
      }),
      prisma.category.create({
        data: {
          name: '男子篮球鞋',
          description: 'Nike男子篮球鞋系列',
          parentId: mainCategories[0].id,
          order: 2,
          isActive: true,
        },
      }),
      prisma.category.create({
        data: {
          name: '男子运动服装',
          description: 'Nike男子运动服装系列',
          parentId: mainCategories[0].id,
          order: 3,
          isActive: true,
        },
      }),
      
      // 女子子分类
      prisma.category.create({
        data: {
          name: '女子跑步鞋',
          description: 'Nike女子专业跑步鞋系列',
          parentId: mainCategories[1].id,
          order: 1,
          isActive: true,
        },
      }),
      prisma.category.create({
        data: {
          name: '女子训练鞋',
          description: 'Nike女子训练鞋系列',
          parentId: mainCategories[1].id,
          order: 2,
          isActive: true,
        },
      }),
      prisma.category.create({
        data: {
          name: '女子运动服装',
          description: 'Nike女子运动服装系列',
          parentId: mainCategories[1].id,
          order: 3,
          isActive: true,
        },
      }),
      
      // 儿童子分类
      prisma.category.create({
        data: {
          name: '儿童运动鞋',
          description: 'Nike儿童运动鞋系列',
          parentId: mainCategories[2].id,
          order: 1,
          isActive: true,
        },
      }),
      prisma.category.create({
        data: {
          name: '儿童运动服装',
          description: 'Nike儿童运动服装系列',
          parentId: mainCategories[2].id,
          order: 2,
          isActive: true,
        },
      }),
    ]);

    console.log('📋 分类创建完成');

    // 创建产品 - 男子跑步鞋
    const menRunningShoes = await Promise.all([
      prisma.product.create({
        data: {
          name: 'Nike Air Zoom Pegasus 38',
          description: '男子专业跑步鞋，提供出色的缓震和支撑，适合日常训练和长距离跑步。',
          price: 899.00,
          images: [
            'https://static.nike.com/pegasus-38-1.jpg',
            'https://static.nike.com/pegasus-38-2.jpg',
          ],
          sizes: ['39', '40', '41', '42', '43', '44', '45'],
          colors: ['黑色', '白色', '蓝色'],
          stock: 100,
          categories: {
            create: [
              {
                category: {
                  connect: {
                    id: subCategories[0].id
                  }
                }
              }
            ]
          }
        },
      }),
      prisma.product.create({
        data: {
          name: 'Nike ZoomX Vaporfly NEXT% 2',
          description: '男子高性能竞速跑鞋，专为马拉松比赛设计，提供卓越的能量回弹。',
          price: 1999.00,
          images: [
            'https://static.nike.com/vaporfly-next-1.jpg',
            'https://static.nike.com/vaporfly-next-2.jpg',
          ],
          sizes: ['40', '41', '42', '43', '44'],
          colors: ['荧光绿', '黑红', '白蓝'],
          stock: 50,
          categories: {
            create: [
              {
                category: {
                  connect: {
                    id: subCategories[0].id
                  }
                }
              }
            ]
          }
        },
      }),
      prisma.product.create({
        data: {
          name: 'Nike React Infinity Run Flyknit 3',
          description: '男子日常跑步鞋，提供稳定支撑和舒适体验，减少受伤风险。',
          price: 1299.00,
          images: [
            'https://static.nike.com/infinity-run-3-1.jpg',
            'https://static.nike.com/infinity-run-3-2.jpg',
          ],
          sizes: ['39', '40', '41', '42', '43', '44'],
          colors: ['黑色', '灰色', '蓝色'],
          stock: 80,
          categories: {
            create: [
              {
                category: {
                  connect: {
                    id: subCategories[0].id
                  }
                }
              }
            ]
          }
        },
      }),
    ]);

    // 创建产品 - 男子篮球鞋
    const menBasketballShoes = await Promise.all([
      prisma.product.create({
        data: {
          name: 'Nike LeBron 19',
          description: '詹姆斯签名篮球鞋，专为场上表现设计，提供出色的缓震和稳定性。',
          price: 1499.00,
          images: [
            'https://static.nike.com/lebron-19-1.jpg',
            'https://static.nike.com/lebron-19-2.jpg',
          ],
          sizes: ['40', '41', '42', '43', '44', '45', '46'],
          colors: ['黑金', '白蓝', '红色'],
          stock: 60,
          categories: {
            create: [
              {
                category: {
                  connect: {
                    id: subCategories[1].id
                  }
                }
              }
            ]
          }
        },
      }),
      prisma.product.create({
        data: {
          name: 'Nike Kyrie 8',
          description: '欧文签名篮球鞋，提供出色的抓地力和灵活性，适合快速变向。',
          price: 1299.00,
          images: [
            'https://static.nike.com/kyrie-8-1.jpg',
            'https://static.nike.com/kyrie-8-2.jpg',
          ],
          sizes: ['40', '41', '42', '43', '44', '45'],
          colors: ['黑白', '多彩', '灰色'],
          stock: 70,
          categories: {
            create: [
              {
                category: {
                  connect: {
                    id: subCategories[1].id
                  }
                }
              }
            ]
          }
        },
      }),
      prisma.product.create({
        data: {
          name: 'Nike KD 15',
          description: '杜兰特签名篮球鞋，轻量化设计，提供出色的支撑和舒适性。',
          price: 1399.00,
          images: [
            'https://static.nike.com/kd-15-1.jpg',
            'https://static.nike.com/kd-15-2.jpg',
          ],
          sizes: ['41', '42', '43', '44', '45', '46'],
          colors: ['黑色', '蓝色', '红色'],
          stock: 65,
          categories: {
            create: [
              {
                category: {
                  connect: {
                    id: subCategories[1].id
                  }
                }
              }
            ]
          }
        },
      }),
    ]);

    // 创建产品 - 男子运动服装
    const menSportswear = await Promise.all([
      prisma.product.create({
        data: {
          name: 'Nike Dri-FIT 男子运动T恤',
          description: '采用速干面料，让运动更加舒适，排汗透气。',
          price: 199.00,
          images: [
            'https://static.nike.com/dri-fit-1.jpg',
            'https://static.nike.com/dri-fit-2.jpg',
          ],
          sizes: ['S', 'M', 'L', 'XL', 'XXL'],
          colors: ['黑色', '白色', '灰色', '蓝色'],
          stock: 200,
          categories: {
            create: [
              {
                category: {
                  connect: {
                    id: subCategories[2].id
                  }
                }
              }
            ]
          }
        },
      }),
      prisma.product.create({
        data: {
          name: 'Nike Therma-FIT 男子运动夹克',
          description: '保暖科技面料，适合寒冷天气训练和日常穿着。',
          price: 599.00,
          images: [
            'https://static.nike.com/therma-fit-1.jpg',
            'https://static.nike.com/therma-fit-2.jpg',
          ],
          sizes: ['M', 'L', 'XL', 'XXL'],
          colors: ['黑色', '深蓝', '橄榄绿'],
          stock: 120,
          categories: {
            create: [
              {
                category: {
                  connect: {
                    id: subCategories[2].id
                  }
                }
              }
            ]
          }
        },
      }),
      prisma.product.create({
        data: {
          name: 'Nike Sportswear Tech Fleece 男子运动裤',
          description: '轻量保暖的科技面料，舒适贴合，适合日常穿着和运动。',
          price: 699.00,
          images: [
            'https://static.nike.com/tech-fleece-1.jpg',
            'https://static.nike.com/tech-fleece-2.jpg',
          ],
          sizes: ['S', 'M', 'L', 'XL'],
          colors: ['黑色', '灰色', '深蓝'],
          stock: 150,
          categories: {
            create: [
              {
                category: {
                  connect: {
                    id: subCategories[2].id
                  }
                }
              }
            ]
          }
        },
      }),
    ]);

    // 创建产品 - 女子跑步鞋
    const womenRunningShoes = await Promise.all([
      prisma.product.create({
        data: {
          name: 'Nike Air Zoom Pegasus 38 女子版',
          description: '女子专业跑步鞋，提供出色的缓震和支撑，适合日常训练。',
          price: 899.00,
          images: [
            'https://static.nike.com/women-pegasus-38-1.jpg',
            'https://static.nike.com/women-pegasus-38-2.jpg',
          ],
          sizes: ['36', '37', '38', '39', '40', '41'],
          colors: ['粉色', '紫色', '白色'],
          stock: 90,
          categories: {
            create: [
              {
                category: {
                  connect: {
                    id: subCategories[3].id
                  }
                }
              }
            ]
          }
        },
      }),
      prisma.product.create({
        data: {
          name: 'Nike React Infinity Run Flyknit 3 女子版',
          description: '女子日常跑步鞋，提供稳定支撑和舒适体验，减少受伤风险。',
          price: 1299.00,
          images: [
            'https://static.nike.com/women-infinity-run-3-1.jpg',
            'https://static.nike.com/women-infinity-run-3-2.jpg',
          ],
          sizes: ['36', '37', '38', '39', '40'],
          colors: ['粉色', '白色', '浅蓝'],
          stock: 75,
          categories: {
            create: [
              {
                category: {
                  connect: {
                    id: subCategories[3].id
                  }
                }
              }
            ]
          }
        },
      }),
    ]);

    // 创建产品 - 女子训练鞋
    const womenTrainingShoes = await Promise.all([
      prisma.product.create({
        data: {
          name: 'Nike Free Metcon 4',
          description: '女子训练鞋，结合灵活性和稳定性，适合各种健身训练。',
          price: 899.00,
          images: [
            'https://static.nike.com/metcon-4-1.jpg',
            'https://static.nike.com/metcon-4-2.jpg',
          ],
          sizes: ['36', '37', '38', '39', '40'],
          colors: ['黑色', '白色', '粉色'],
          stock: 85,
          categories: {
            create: [
              {
                category: {
                  connect: {
                    id: subCategories[4].id
                  }
                }
              }
            ]
          }
        },
      }),
      prisma.product.create({
        data: {
          name: 'Nike SuperRep Go 3',
          description: '女子综合训练鞋，适合高强度间歇训练和有氧运动。',
          price: 799.00,
          images: [
            'https://static.nike.com/superrep-go-3-1.jpg',
            'https://static.nike.com/superrep-go-3-2.jpg',
          ],
          sizes: ['36', '37', '38', '39', '40', '41'],
          colors: ['白色', '粉色', '薄荷绿'],
          stock: 70,
          categories: {
            create: [
              {
                category: {
                  connect: {
                    id: subCategories[4].id
                  }
                }
              }
            ]
          }
        },
      }),
    ]);

    // 创建产品 - 女子运动服装
    const womenSportswear = await Promise.all([
      prisma.product.create({
        data: {
          name: 'Nike Dri-FIT 女子运动T恤',
          description: '采用速干面料，让运动更加舒适，排汗透气。',
          price: 199.00,
          images: [
            'https://static.nike.com/women-dri-fit-1.jpg',
            'https://static.nike.com/women-dri-fit-2.jpg',
          ],
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          colors: ['粉色', '白色', '黑色', '紫色'],
          stock: 180,
          categories: {
            create: [
              {
                category: {
                  connect: {
                    id: subCategories[5].id
                  }
                }
              }
            ]
          }
        },
      }),
      prisma.product.create({
        data: {
          name: 'Nike One 女子紧身裤',
          description: '舒适贴合，高弹力面料，适合各种运动和日常穿着。',
          price: 399.00,
          images: [
            'https://static.nike.com/women-one-tights-1.jpg',
            'https://static.nike.com/women-one-tights-2.jpg',
          ],
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          colors: ['黑色', '深蓝', '灰色'],
          stock: 150,
          categories: {
            create: [
              {
                category: {
                  connect: {
                    id: subCategories[5].id
                  }
                }
              }
            ]
          }
        },
      }),
      prisma.product.create({
        data: {
          name: 'Nike Sportswear 女子运动夹克',
          description: '时尚设计，舒适面料，适合日常穿着和轻度运动。',
          price: 599.00,
          images: [
            'https://static.nike.com/women-sportswear-jacket-1.jpg',
            'https://static.nike.com/women-sportswear-jacket-2.jpg',
          ],
          sizes: ['S', 'M', 'L', 'XL'],
          colors: ['粉色', '白色', '黑色'],
          stock: 100,
          categories: {
            create: [
              {
                category: {
                  connect: {
                    id: subCategories[5].id
                  }
                }
              }
            ]
          }
        },
      }),
    ]);

    // 创建产品 - 儿童运动鞋
    const kidsShoes = await Promise.all([
      prisma.product.create({
        data: {
          name: 'Nike Air Force 1 儿童版',
          description: '经典款儿童运动鞋，耐穿舒适，适合日常穿着。',
          price: 599.00,
          images: [
            'https://static.nike.com/kids-air-force-1-1.jpg',
            'https://static.nike.com/kids-air-force-1-2.jpg',
          ],
          sizes: ['28', '29', '30', '31', '32', '33', '34', '35'],
          colors: ['白色', '黑色', '粉色'],
          stock: 120,
          categories: {
            create: [
              {
                category: {
                  connect: {
                    id: subCategories[6].id
                  }
                }
              }
            ]
          }
        },
      }),
      prisma.product.create({
        data: {
          name: 'Nike Revolution 6 儿童跑步鞋',
          description: '轻量舒适的儿童跑步鞋，易于穿脱，适合日常活动。',
          price: 399.00,
          images: [
            'https://static.nike.com/kids-revolution-6-1.jpg',
            'https://static.nike.com/kids-revolution-6-2.jpg',
          ],
          sizes: ['28', '29', '30', '31', '32', '33', '34', '35'],
          colors: ['蓝色', '黑色', '红色'],
          stock: 150,
          categories: {
            create: [
              {
                category: {
                  connect: {
                    id: subCategories[6].id
                  }
                }
              }
            ]
          }
        },
      }),
    ]);

    // 创建产品 - 儿童运动服装
    const kidsClothing = await Promise.all([
      prisma.product.create({
        data: {
          name: 'Nike Sportswear 儿童套装',
          description: '舒适面料，活力设计，适合儿童日常穿着和运动。',
          price: 499.00,
          images: [
            'https://static.nike.com/kids-sportswear-set-1.jpg',
            'https://static.nike.com/kids-sportswear-set-2.jpg',
          ],
          sizes: ['3-4Y', '4-5Y', '5-6Y', '6-7Y', '7-8Y'],
          colors: ['蓝色', '红色', '黑色'],
          stock: 100,
          categories: {
            create: [
              {
                category: {
                  connect: {
                    id: subCategories[7].id
                  }
                }
              }
            ]
          }
        },
      }),
      prisma.product.create({
        data: {
          name: 'Nike Dri-FIT 儿童T恤',
          description: '速干面料，舒适透气，适合儿童运动和日常穿着。',
          price: 149.00,
          images: [
            'https://static.nike.com/kids-dri-fit-1.jpg',
            'https://static.nike.com/kids-dri-fit-2.jpg',
          ],
          sizes: ['3-4Y', '4-5Y', '5-6Y', '6-7Y', '7-8Y', '8-9Y', '9-10Y'],
          colors: ['蓝色', '红色', '绿色', '黄色'],
          stock: 200,
          categories: {
            create: [
              {
                category: {
                  connect: {
                    id: subCategories[7].id
                  }
                }
              }
            ]
          }
        },
      }),
    ]);

    console.log('👟 产品创建完成');

    // 创建菜单
    const menus = await Promise.all([
      prisma.menu.create({
        data: {
          name: '首页',
          path: '/',
          order: 1,
          isActive: true,
        },
      }),
      prisma.menu.create({
        data: {
          name: '男子',
          path: '/men',
          order: 2,
          isActive: true,
          categoryId: mainCategories[0].id,
          children: {
            create: [
              {
                name: '跑步鞋',
                path: '/men/running',
                order: 1,
                isActive: true,
                categoryId: subCategories[0].id,
              },
              {
                name: '篮球鞋',
                path: '/men/basketball',
                order: 2,
                isActive: true,
                categoryId: subCategories[1].id,
              },
              {
                name: '运动服装',
                path: '/men/clothing',
                order: 3,
                isActive: true,
                categoryId: subCategories[2].id,
              },
            ],
          },
        },
      }),
      prisma.menu.create({
        data: {
          name: '女子',
          path: '/women',
          order: 3,
          isActive: true,
          categoryId: mainCategories[1].id,
          children: {
            create: [
              {
                name: '跑步鞋',
                path: '/women/running',
                order: 1,
                isActive: true,
                categoryId: subCategories[3].id,
              },
              {
                name: '训练鞋',
                path: '/women/training',
                order: 2,
                isActive: true,
                categoryId: subCategories[4].id,
              },
              {
                name: '运动服装',
                path: '/women/clothing',
                order: 3,
                isActive: true,
                categoryId: subCategories[5].id,
              },
            ],
          },
        },
      }),
      prisma.menu.create({
        data: {
          name: '儿童',
          path: '/kids',
          order: 4,
          isActive: true,
          categoryId: mainCategories[2].id,
          children: {
            create: [
              {
                name: '运动鞋',
                path: '/kids/shoes',
                order: 1,
                isActive: true,
                categoryId: subCategories[6].id,
              },
              {
                name: '运动服装',
                path: '/kids/clothing',
                order: 2,
                isActive: true,
                categoryId: subCategories[7].id,
              },
            ],
          },
        },
      }),
      prisma.menu.create({
        data: {
          name: '新品上市',
          path: '/new-releases',
          order: 5,
          isActive: true,
        },
      }),
    ]);

    console.log('📑 菜单创建完成');

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
                productId: menRunningShoes[0].id,
                quantity: 1,
                price: menRunningShoes[0].price,
                size: '42',
                color: '黑色',
              },
              {
                productId: menSportswear[0].id,
                quantity: 1,
                price: menSportswear[0].price,
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
          totalAmount: 1499.00,
          status: '待发货',
          items: {
            create: [
              {
                productId: menBasketballShoes[0].id,
                quantity: 1,
                price: menBasketballShoes[0].price,
                size: '43',
                color: '黑金',
              },
            ],
          },
        },
      }),
      prisma.order.create({
        data: {
          userId: users[0].id,
          totalAmount: 1098.00,
          status: '已发货',
          items: {
            create: [
              {
                productId: womenRunningShoes[0].id,
                quantity: 1,
                price: womenRunningShoes[0].price,
                size: '38',
                color: '粉色',
              },
              {
                productId: womenSportswear[0].id,
                quantity: 1,
                price: womenSportswear[0].price,
                size: 'M',
                color: '白色',
              },
            ],
          },
        },
      }),
    ]);

    console.log('🛒 订单创建完成');
    console.log('✅ 测试数据已成功生成');
  } catch (error) {
    console.error('❌ 生成测试数据时出错:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main();