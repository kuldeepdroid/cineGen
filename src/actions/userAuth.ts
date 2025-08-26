"use server";
import prisma from "@/app/lib/prisma";

interface ReqBody {
  username: string;
  password: string;
  name: string;
}

export const authSignup = async (req: ReqBody) => {
  const { username, password, name } = req;
  try {
    const isExistingUser = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    if (isExistingUser) {
      return { error: "User already exists" };
    }
    const user = await prisma.user.create({
      data: {
        username,
        name,
        password,
      },
    });
    if (!user) {
      return { error: "Something went wrong while registation" };
    }
    return { message: "User created successfully", id: user.id };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
