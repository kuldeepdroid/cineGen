"use server";
import prisma from "@/app/lib/prisma";

export const usePrisma = async () => {
  try {
    const user = await prisma.user.create({
      data: {
        username: "dummyUser",
        id: "12345678",
      },
    });
    return { message: "connected" };
  } catch (e) {
    return null;
  }
};
