import { PrismaClient } from '@prisma/client';

async function main() {
  const prisma = new PrismaClient();
  const result = await prisma.buyer.findMany({
    where: {
      name: { not: null },
    },
  });
  console.log(result);
  prisma.$disconnect();
}

main();
