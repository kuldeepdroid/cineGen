import Image from "next/image";
import React, { useState } from "react";

const SelectStyle = ({
  onUserSelect,
}: {
  onUserSelect: (a: string, b: string) => void;
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const styleOption = [
    {
      label: "Realistic",
      name: "Realistic",
      image: "/realistic.jpg",
    },
    {
      label: "Cartoon",
      name: "Cartoon",
      image: "/cartoon.jpg",
    },
    {
      label: "Sketch",
      name: "Comic",
      image: "/comic.jpg",
    },
    {
      label: "WaterColor",
      name: "WaterColor",
      image: "/watercolor.jpg",
    },
    {
      label: "GTA",
      name: "GTA",
      image: "/gta.jpg",
    },
    {
      label: "Storytelling",
      name: "AI Storytelling Video",
      image: "/storytelling.webp",
    },
  ];
  return (
    <div>
      <h2 className="font-bold text-2xl mt-5 text-primary">Style</h2>
      <p>Setect your vide style</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 rounded-lg">
        {styleOption.map((item, index) => (
          <div
            onClick={() => {
              setSelectedOption(item.name);
              onUserSelect("style", item.name);
            }}
            className={`relative hover:scale-105  mt-3 cursor-pointer transition-all rounded-xl ${
              selectedOption === item.name ? "border-primary border-3" : ""
            }`}
            key={index}
          >
            <Image
              className="!h-48 object-cover rounded-lg w-full"
              src={item.image}
              alt={item.name}
              height={100}
              width={100}
            />
            <p className="absolute p-1 bg-black bottom-0 w-full text-white text-center rounded-b-lg">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectStyle;
