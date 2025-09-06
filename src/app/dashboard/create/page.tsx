"use client";
import React, { useState } from "react";
import SelectTopic from "./_components/SelectTopic";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from "./_components/SelectDuration";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { CircularProgress } from "@mui/material";

type VideoScene = {
  imagePrompt: string;
  ContentText: string;
};

type VideoScriptResponse = {
  result?: VideoScene[];
  error?: string;
};

const Page = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [, setVideoScripts] = useState<VideoScene[] | null>(null);
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
    setIsLoading(true);

    const prompt = `Write a script to generate ${formData.duration} video on topic: ${formData.topic} along with AI image prompt in ${formData.style} format. For each scene, include an AI image prompt in ${formData.style} format and the corresponding content text. Provide the just result in JSON format with 'imagePrompt' and 'ContentText' as fields. Do not include any plain text outside of the JSON structure. json format: result:[{
    imagePrompt: string;
    ContentText: string;
    }]`;

    try {
      const res = await axios.post<VideoScriptResponse>("/api/getvideoscript", {
        prompt,
      });

      console.log(res);

      if (res.status == 200) {
        const ResponseScripts = res.data?.result;

        console.log("ResponseScripts", ResponseScripts);
        setVideoScripts(ResponseScripts || null);
        console.log("response", ResponseScripts);
        GenerateAudio(ResponseScripts || []);
      } else {
        console.log("error", res.data?.error);
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Request failed:", err);
      setIsLoading(false);
    }
  };

  const GenerateAudio = async (scripts: VideoScene[]) => {
    let script = "";
    scripts?.forEach((item) => (script += item.ContentText + " "));

    const id = uuid();

    console.log("TEXT", script);

    const file = await axios.post("/api/audio", {
      text: script,
      id,
    });
    console.log("file", file);
    setIsLoading(false);
  };
  return (
    <div className="md:px-20">
      <h1 className="text-2xl text-primary font-bold text-center">
        Create New Video
      </h1>
      <div className=" p-10 shadow-lg rounded-md bg-white w-full">
        <SelectTopic onUserSelect={onHandleInputChange} />
        <SelectStyle onUserSelect={onHandleInputChange} />
        <SelectDuration onUserSelect={onHandleInputChange} />
        <button
          onClick={onCreateClickHandler}
          className="bg-primary p-4 hover:scale-105 cursor-pointer transition-all w-full  items-center justify-center flex text-white font-bold rounded mt-5 "
        >
          {isLoading ? (
            <CircularProgress size={28} color="inherit" />
          ) : (
            "Create Short Video"
          )}
        </button>
      </div>
    </div>
  );
};

export default Page;
