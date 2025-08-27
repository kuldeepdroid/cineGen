"use client";
import React, { useEffect } from "react";
// import { signIn, signOut, useSession } from "next-auth/react";
import logoImage from "../../../public/cineGen.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { Avatar, LinearProgress } from "@mui/material";

const Appbar = () => {
  const router = useRouter();
  const user = useUser();
  const [isWaiting, setIsWaiting] = React.useState(true);

  useEffect(() => {
    user && setIsWaiting(false);
  }, [user]);
  return (
    <>
      <div className=" p-2 shadow-lg bg-zinc-300 h-full items-center w-full flex justify-between">
        <div>
          <Image
            onClick={() => router.push("/")}
            src={logoImage}
            height={50}
            width={120}
            alt="CineGen Logo"
          />
        </div>
        <div className="flex gap-2">
          {!user.isSignedIn ? (
            <button
              onClick={() => {
                setIsWaiting(true);
                router.push("/api/auth/signin");
              }}
              className="bg-gradient-to-br from-[#4a4b52] tracking-wide via-[#7c7f8b] to-[#1f2024] text-white md:text-base text-base  cursor-pointer  hover:text-zinc-200 md:px-4 px-2 py-1 rounded-md"
            >
              Sign In
            </button>
          ) : (
            <div
              onClick={() => {
                setIsWaiting(true);
              }}
              className="bg-gradient-to-br from-[#4a4b52] tracking-wide via-[#656a87] to-[#777a87] text-white md:text-lg text-base  cursor-pointer  hover:text-zinc-200 md:px-4 px-2 py-1 rounded-md"
            >
              <SignOutButton />
            </div>
          )}
          <Avatar className="uppercase">
            {user.user?.username?.charAt(0)}
          </Avatar>
        </div>
      </div>
      {isWaiting && <LinearProgress />}
    </>
  );
};

export default Appbar;
