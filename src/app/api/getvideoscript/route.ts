import { chatSession } from "@/configs/aiModel";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    console.log("prompt", prompt);

    const result = await chatSession(prompt);

    return NextResponse.json({
      result: JSON.parse(result as unknown as string),
    });
  } catch (e) {
    return NextResponse.json({ error: e });
  }
}
