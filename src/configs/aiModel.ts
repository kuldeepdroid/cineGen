import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
});
const config = {
  responseMimeType: "application/json",
  responseModalities: ["IMAGE", "TEXT"],
};
const model = "gemini-2.5-flash-image-preview";

export const chatSession = async (prompt: string) => {
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `${prompt}`,
        },
      ],
    },
  ];
  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  for await (const chunk of response) {
    if (
      !chunk.candidates ||
      !chunk.candidates[0].content ||
      !chunk.candidates[0].content.parts
    ) {
      continue;
    }
    console.log(chunk.text);
  }
};
