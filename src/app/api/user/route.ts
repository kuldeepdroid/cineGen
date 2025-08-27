import prisma from "@/app/lib/prisma";

export async function POST(req: Request) {
  const { username, id } = await req.json();
  console.log("hii");
  const isExisting = await prisma.user.findFirst({
    where: {
      username,
    },
  });
  console.log("isExisting", isExisting);
  if (!isExisting) {
    const user = await prisma.user.create({
      data: {
        username,
        id,
      },
    });
    console.log(user, "user");
    return new Response("User created successfully", { status: 202 });
  }
  return new Response("User already exists", { status: 200 });
}
