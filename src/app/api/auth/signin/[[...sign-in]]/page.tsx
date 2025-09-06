import AboutCinegen from "@/app/components/AboutCinegen";
import { SignIn } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center bg-zinc-200 h-screen items-center p-6">
      <div className="md:flex justify-center hidden">
        <AboutCinegen />
      </div>
      <div className="flex justify-center">
        <SignIn />
      </div>
    </div>
  );
};

export default page;
