import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    console.error("[survey] GOOGLE_SCRIPT_URL is not set");
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      redirect: "follow",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...body, type: "survey" }),
    });

    const text = await response.text();
    console.log("[survey] Google Script response:", response.status, text);

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to submit survey" }, { status: 502 });
    }

    return NextResponse.json({ status: "success" });
  } catch (err) {
    console.error("[survey] Fetch to Google Script failed:", err);
    return NextResponse.json({ error: "Survey submission failed" }, { status: 500 });
  }
}
