import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const scriptUrl = process.env.NEXT_PUBLIC_SCRIPT_URL;
  if (!scriptUrl) {
    console.error("[register] NEXT_PUBLIC_SCRIPT_URL is not set");
    return NextResponse.json({ ok: true }); // keep UX unbroken
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    console.error("[register] Failed to parse request body");
    return NextResponse.json({ ok: true });
  }

  const { fullName, businessName, email, phone, teamSize } = body;

  const payload = {
    name: fullName ?? "",
    email: email ?? "",
    phone: phone ?? "",
    company: businessName ?? "",
    role: teamSize ?? "",
    q1: "",
    q2: teamSize ?? "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    timezone: "Asia/Kolkata",
  };

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      redirect: "follow",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });

    const text = await response.text();
    console.log("[register] Apps Script response:", response.status, text);
  } catch (err) {
    console.error("[register] Fetch to Apps Script failed:", err);
  }

  return NextResponse.json({ ok: true });
}
