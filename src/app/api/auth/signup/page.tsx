import { Signup } from "@/components/Signup";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-center h-full">
        <div></div>
        <div>
          <Signup />
        </div>
      </div>
    </>
  );
};

export default page;
