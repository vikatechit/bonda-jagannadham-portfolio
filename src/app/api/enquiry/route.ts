import { NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, stored: false, code: "INVALID" }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, stored: false, code: "INVALID" }, { status: 400 });
  }

  if (parsed.data.company) {
    return NextResponse.json({ ok: false, stored: false, delivered: false, code: "NO_INBOX" });
  }

  return NextResponse.json({
    ok: true,
    stored: false,
    delivered: false,
    code: "NO_INBOX",
  });
}
