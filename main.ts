import { PrismaClient } from '@prisma/client';

async function main() {
  const prisma = new PrismaClient({ log: ['query', 'info'] });
  const buyer = await prisma.buyer.create({
    data: {
      name: 'ahmed',
      products: {
        create: [
          {
            name: 'product 1',
          },
          { name: 'product 2' },
        ],
      },
      sales: {
        create: [
          {
            date: new Date(),
          },
          {
            date: new Date(),
          },
        ],
      },
    },
    include: {
      sales: true,
      products: true,
    },
  });

  for (const sale of buyer.sales) {
    await prisma.sale.update({
      where: { id: sale.id },
      data: {
        products: {
          connect: buyer.products.map((product) => ({ id: product.id })),
        },
      },
    });
  }

  const result = await prisma.buyer.findMany({
    select: {
      id: true,
      products: {
        select: {
          id: true,
        },
      },
      sales: {
        select: {
          id: true,
          // issue happen when we select product here and we already get it in top level
          products: {
            select: {
              id: true,
            },
          },
        },
      },
    },
  });
  console.dir(result, { depth: null });
  prisma.$disconnect();
}

main();
