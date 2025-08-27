// components/CineGenSidebar.tsx
"use client";

import { Box, Typography, Stack } from "@mui/material";
import { Movie, FlashOn, Security, Palette } from "@mui/icons-material";

export default function AboutCinegen() {
  const features = [
    {
      icon: <FlashOn className="!text-purple-400" fontSize="small" />,
      title: "AI-Powered Creation",
      desc: "Generate professional videos in minutes using advanced AI models.",
    },
    {
      icon: <Movie className="!text-purple-400" fontSize="small" />,
      title: "Cinematic Quality",
      desc: "Enjoy high-definition outputs with smooth transitions and effects.",
    },
    {
      icon: <Security className="!text-purple-400" fontSize="small" />,
      title: "Secure & Reliable",
      desc: "Keep your content safe with built-in encryption and cloud storage.",
    },
    {
      icon: <FlashOn className="!text-purple-400" fontSize="small" />,
      title: "Instant Rendering",
      desc: "No long waits — preview and export your videos in real time.",
    },
  ];

  return (
    <div className=" text-gray-700 p-6 w-80  min-h-full flex flex-col gap-4">
      <Stack spacing={4}>
        {features.map((item, idx) => (
          <Stack key={idx} direction="row" spacing={2} alignItems="flex-start">
            <div className="mt-1">{item.icon}</div>
            <Box>
              <Typography variant="subtitle1" fontWeight="600">
                {item.title}
              </Typography>
              <Typography variant="body2" className="text-gray-400">
                {item.desc}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </div>
  );
}
