import { PrismaClient } from '@prisma/client';

async function main() {
  const prisma = new PrismaClient();
  const result = await prisma.buyer.findMany({
    select: {
      sales: {
        where: {
          OR: [
            {
              date: '2020-08-19T10:02:43.353Z', // not working
              // date: { equals: '2020-08-19T10:02:43.353Z' }, working
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
