import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, businessName, email, phone, teamSize } = body;

    if (!fullName || !businessName || !email || !phone || !teamSize) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, businessName, email, phone, teamSize }),
    });

    if (!response.ok) {
      throw new Error("Failed to write to Google Sheets");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Registration error:", err);
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}
