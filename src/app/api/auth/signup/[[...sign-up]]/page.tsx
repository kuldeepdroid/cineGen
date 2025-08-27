import AboutCinegen from "@/app/components/AboutCinegen";
import { SignUp } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center p-6">
      <div className="hidden md:flex justify-center">
        <AboutCinegen />
      </div>
      <div className="flex justify-center items-center">
        <SignUp />
      </div>
    </div>
  );
};

export default Page;
