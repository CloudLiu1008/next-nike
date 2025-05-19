import { PrismaClient } from '@generated/prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    // 连接数据库
    await prisma.$connect();
    console.log('✅ 数据库连接成功');

    // 可选：执行简单查询（例如 PostgreSQL 版本）
    const result = await prisma.$queryRawUnsafe<any>(`SELECT version();`);
    console.log('PostgreSQL 版本:', result[0]?.version);
  } catch (error) {
    console.error('❌ 数据库连接失败:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
