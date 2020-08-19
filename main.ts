import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();
  const result = await prisma.sale.findMany({
    where: {
      buyers: {
        some: {
          name: {
            contains: "smith",
          },
        },
      },
    },
  });
  console.log(result);
  prisma.disconnect();
}

main();
