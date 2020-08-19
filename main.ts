import { PrismaClient } from '@prisma/client';

async function main() {
  const prisma = new PrismaClient();
  const result = await prisma.buyer.findMany({
    select: {
      sales: {
        where: {
          OR: [
            {
              date: '2020-08-19T10:02:43.353Z',
            },
          ],
        },
      },
    },
  });
  console.log(result);
  prisma.disconnect();
}

main();
