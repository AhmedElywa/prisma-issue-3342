import { PrismaClient } from '@prisma/client';

async function main() {
  const prisma = new PrismaClient();
  const result = await prisma.sale.findMany({
    where: {
      OR: [
        {
          date: { not: null },
        },
      ],
    },
  });
  console.log(result);
  prisma.$disconnect();
}

main();
