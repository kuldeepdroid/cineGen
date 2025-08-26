"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import logoImage from "../../public/cineGen.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Appbar = () => {
  const router = useRouter();
  const session = useSession();
  return (
    <div className="bg-zinc-200 p-2 items-center w-full flex justify-between">
      <div>
        <Image src={logoImage} height={50} width={150} alt="CineGen Logo" />
      </div>
      <div className="flex">
        {!session.data?.user ? (
          <button
            onClick={() => router.push("/api/auth/signin")}
            className="bg-zinc-400 text-lg text-black cursor-pointer hover:bg-zinc-700 hover:text-white px-4 py-1 rounded-md"
          >
            Sign In
          </button>
        ) : (
          <button
            onClick={() => signOut()}
            className="bg-zinc-400 text-lg text-black cursor-pointer hover:bg-zinc-700 hover:text-white px-4 py-1 rounded-md"
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Appbar;
