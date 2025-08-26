import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "username",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter password",
        },
      },
      async authorize(credentials: any) {
        console.log("credential", credentials);
        const username = credentials.username;
        const password = credentials.password;
        const isExistingUser = await prisma.user.findFirst({
          where: {
            username,
            password,
          },
        });
        if (isExistingUser) {
          return { id: "1", username: isExistingUser || "Nothing" };
        }
        console.log(isExistingUser, "isExistingUser");

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: ({ session, token, user }: any) => {
      if (session && session.user) {
        session.user.id = token.id;
      }
      console.log(session);
      return session;
    },
  },
};
