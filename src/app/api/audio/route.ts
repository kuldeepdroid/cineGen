import { NextResponse } from "next/server";
const gtts = require("gtts");

export async function POST(req: Request) {
  try {
    const { text, id } = await req.json();

    if (!text || text.trim() === "") {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const speech = new gtts(text, "en");

    await new Promise<void>((resolve, reject) => {
      speech.save(`./public/audio/output-${id}.mp3`, (err: any) => {
        if (err) reject(err);
        else resolve();
      });
    });

    return NextResponse.json({
      message: "Audio generated",
      audioUrl: `/audio/output-${id}.mp3`,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
