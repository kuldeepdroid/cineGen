"use client";
import React, { useEffect, useState } from "react";
import logoImage from "../../../public/cineGen.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import { Avatar, LinearProgress } from "@mui/material";

const Header = () => {
  const router = useRouter();
  const { user, isSignedIn, isLoaded } = useUser();
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    setIsWaiting(!isLoaded);
  }, [isLoaded]);
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
        <div className="flex gap-4">
          {!isSignedIn && (
            <div
              onClick={() => {
                setIsWaiting(true);
              }}
              className="bg-gradient-to-br from-[#4a4b52] tracking-wide via-[#656a87] to-[#777a87] text-white md:text-lg text-base  cursor-pointer  hover:text-zinc-200 md:px-4 px-2 py-1 rounded-md"
            >
              <SignOutButton />
            </div>
          )}
          <UserButton />
        </div>
      </div>
      {isWaiting && <LinearProgress />}
    </>
  );
};

export default Header;
