"use client";
import { useUser } from "@clerk/nextjs";
import { getServerSession } from "next-auth";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const [isWaiting, setIsWaiting] = useState(false);
  const { user } = useUser();

  const isNewUser = async () => {
    setIsWaiting(true);
    const response = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user?.username,
        id: user?.id,
      }),
    });
    if (response.status === 202) {
      toast.success("User Created Successfully");
    }
    setIsWaiting(false);
  };

  useEffect(() => {
    user && isNewUser();
  }, [user]);
  return (
    <div className="flex text-center justify-center flex-col gap-4 items-center ">
      {isWaiting && <h4>Loading...</h4>}
      <p>{user && <>Hello {user.username}</>}</p>
    </div>
  );
};

export default page;
