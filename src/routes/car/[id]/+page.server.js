import { PrismaClient } from "@prisma/client";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const prisma = new PrismaClient();

  const car = await prisma.car.findUnique({
    where: {
      id: +params.id,
    },
    include: {
      model: {
        include: {
          brand: true,
        },
      },
    },
  });

  await prisma.$disconnect();

  return {
    id: params.id,
    car,
  };
}
