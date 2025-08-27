"use client";
import { useUser } from "@clerk/nextjs";
import { getServerSession } from "next-auth";
import React from "react";

const page = () => {
  const session = useUser();
  return <div>{session && <>Hello {session.user?.username}</>}</div>;
};

export default page;
