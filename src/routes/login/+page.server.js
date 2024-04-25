import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

/** @type {import('./$types').Actions} */
export const actions = {
  login: async ({ request }) => {
    const data = await request.formData();

    const username = data.get("username");
    const password = data.get("password");

    const prisma = new PrismaClient();

    const user = await prisma.customer.findUnique({
      where: {
        email: username,
      },
    });

    if (!user) {
      return {
        status: false,
        error: "Niepoprawny email lub hasło",
      };
    }

    if (!bcrypt.compare(password, user.password)) {
      return {
        status: false,
        error: "Niepoprawny email lub hasło",
      };
    }

    // TODO: generate token
    // TODO: set cookie
    // TODO: redirect

    await prisma.$disconnect();

    console.log(username, password);
  },
};
