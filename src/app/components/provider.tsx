"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Provider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const { user } = useUser();

  const isNewUser = async () => {
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
  };

  useEffect(() => {
    if (user) isNewUser();
  }, [user]);

  return <>{children}</>;
};

export default Provider;
