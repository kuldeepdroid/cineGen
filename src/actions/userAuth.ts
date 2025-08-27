"use server";
import prisma from "@/app/lib/prisma";

interface ReqBody {
  username: string;
  ImageUrl: string;
  userId: string;
}

export const registerUser = async (req: ReqBody) => {
  const { username, ImageUrl, userId } = req;
  try {
    const isExistingUser = await prisma.user.findUnique({
      where: { username: username },
    });
    if (isExistingUser) throw new Error("User already exists");
    const user = await prisma.user.create({
      data: {
        username: username as string,
        imageUrl: ImageUrl as string,
        id: userId as string,
      },
    });
    if (user) {
      return user;
    } else {
      return { message: "Failed to create user" };
    }
  } catch (e) {
    return { message: "Some error occurred" };
  }
};
