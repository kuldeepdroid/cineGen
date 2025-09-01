import { CreateNew } from "@/app/components/CreateNew";
import React from "react";
import SelectTopic from "./_components/SelectTopic";

const page = () => {
  return (
    <div className="md:px-20">
      {/* <CreateNew /> */}
      <h1 className="text-2xl text-primary font-bold text-center">Create </h1>
      <div className="mt-10 p-10 shadow-lg rounded-md bg-white w-full">
        <SelectTopic />
      </div>
    </div>
  );
};

export default page;
