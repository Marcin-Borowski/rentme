import { PrismaClient } from "@prisma/client";
import slugify from "slugify";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const prisma = new PrismaClient();

  const cars = await prisma.car.findMany({
    select: {
      model: {
        select: {
          name: true,
          slug: true,
          brand: {
            select: {
              name: true,
              slug: true,
            },
          },
        },
      },
      id: true,
      price: true,
      image: true,
      year: true,
    },
    where: {
      featured: true,
    },
  });

  //   const models = await prisma.model.findMany({
  //     select: {
  //       id: true,
  //       name: true,
  //     },
  //   });

  //   for await (const model of models) {
  //     console.log(model);
  //     const b = await prisma.model.update({
  //       data: {
  //         name: model.name,
  //         slug: slugify(model.name, { lower: true }),
  //       },
  //       where: {
  //         id: model.id,
  //       },
  //     });
  //   }

  console.log(cars);

  await prisma.$disconnect();

  return {
    cars,
  };
}
