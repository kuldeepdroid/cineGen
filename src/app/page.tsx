"use client";

import { registerUser } from "@/actions/userAuth";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function Home() {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    isSignedIn &&
      registerUser({
        userId: user.id,
        username: user.username as string,
        ImageUrl: user.imageUrl as string,
      }).then((res) => {
        console.log(res);
        toast.success(res.toString());
      });
  }, [user]);

  return (
    <div className="text-3xl font-bold  w-full h-full flex flex-col justify-center items-center">
      <p>Hello {user?.username ?? "user"}</p>
    </div>
  );
}
