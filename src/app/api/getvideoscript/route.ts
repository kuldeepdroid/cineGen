import { chatSession } from "@/configs/aiModel";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const result = await chatSession(prompt);

    return NextResponse.json({
      result,
    });
  } catch (e) {
    return NextResponse.json({ error: e });
  }
}
