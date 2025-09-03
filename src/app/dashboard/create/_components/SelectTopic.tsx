"use client";
import { MenuItem, TextareaAutosize, TextField } from "@mui/material";
import React, { useState } from "react";

const SelectTopic = ({
  onUserSelect,
}: {
  onUserSelect: (a: string, b: string) => void;
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const options = [
    "Custom Prompt",
    "Random AI Story",
    "Scary Story",
    "Historical facts",
    "Romantic story",
    "Fantasy story",
    "Sci-Fi story",
    "Horror story",
    "Comedy story",
    "Drama story",
  ];
  return (
    <div>
      <h2 className="font-bold text-2xl text-secondary">Content</h2>
      <p className="text-gray-500">What is the topic of your video?</p>
      <div className="py-2 flex flex-col gap-2">
        <TextField
          id="content-type"
          name="content-type"
          onChange={(e) => {
            setSelectedOption(e.target.value);
            e.target.value !== "Custon Promt" &&
              onUserSelect("topic", e.target.value);
          }}
          select
          label="Content Type"
          className="w-full"
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        {selectedOption === "Custom Prompt" && (
          <TextareaAutosize
            id="custom-prompt"
            name="custom-prompt"
            onChange={(e) => onUserSelect("topic", e.target.value)}
            placeholder="Enter your prompt"
            className="w-full border-2 p-3 border-gray-300"
          />
        )}
      </div>
    </div>
  );
};

export default SelectTopic;
