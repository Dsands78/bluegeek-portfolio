import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, ping: "contact" });
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, company, phone, workType } = (await req.json()) as {
      name?: string; email?: string; message?: string; company?: string;
      phone?: string; workType?: string;
    };

    // Honeypot
    if (company) return NextResponse.json({ ok: true });

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // For now, just log it (swap with email/DB later)
    console.log("📩 Contact message:", { name, email, phone, workType, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
