"use client";
import React, { useState } from "react";
import SelectTopic from "./_components/SelectTopic";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from "./_components/SelectDuration";
import axios from "axios";

const Page = () => {
  const [formData, setFormData] = useState<{
    topic?: string;
    style?: string;
    duration?: string;
  }>({});

  const onHandleInputChange = (fieldname: string, fieldValue: string) => {
    console.log(fieldname, fieldValue);
    setFormData((prev) => ({ ...prev, [fieldname]: fieldValue }));
  };

  const onCreateClickHandler = () => {
    GetVideoScript();
  };

  const GetVideoScript = async () => {
    const prompt = `Write a script to generate ${formData.duration} video on topic: ${formData.topic} along with AI image prompt in ${formData.style} format for each scene and give me result in JSON format with imagePrompt and ContentText as field, No plain text`;
    const result = await axios.post("/api/getvideoscript", {
      prompt,
    });
    console.log("result", result);
    console.log(prompt);
  };
  return (
    <div className="md:px-20">
      {/* <CreateNew /> */}
      <h1 className="text-2xl text-primary font-bold text-center">
        Create New Video
      </h1>
      <div className=" p-10 shadow-lg rounded-md bg-white w-full">
        <SelectTopic onUserSelect={onHandleInputChange} />
        <SelectStyle onUserSelect={onHandleInputChange} />
        <SelectDuration onUserSelect={onHandleInputChange} />
        <button
          onClick={onCreateClickHandler}
          className="bg-primary p-4 hover:scale-105 cursor-pointer transition-all text-white font-bold rounded mt-5"
        >
          Create Short Video
        </button>
      </div>
    </div>
  );
};

export default Page;
