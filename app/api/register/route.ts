import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    console.error("[register] GOOGLE_SCRIPT_URL is not set");
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    console.error("[register] Failed to parse request body");
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { fullName, businessName, email, phone, teamSize } = body;
  if (!fullName || !businessName || !email || !phone || !teamSize) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      redirect: "follow",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ fullName, businessName, email, phone, teamSize }),
    });

    const text = await response.text();
    console.log("[register] Google Script response:", response.status, text);

    if (!response.ok) {
      console.error("[register] Google Script returned non-OK status:", response.status);
      return NextResponse.json({ error: "Failed to submit registration" }, { status: 502 });
    }

    return NextResponse.json({ status: "success" });
  } catch (err) {
    console.error("[register] Fetch to Google Script failed:", err);
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}
