import { NextRequest, NextResponse } from "next/server";

interface WaitlistEntry {
  name: string;
  organization: string;
  email: string;
  role?: string;
  message?: string;
  type: "chc" | "sponsor" | "cro";
}

export async function POST(request: NextRequest) {
  try {
    const body: WaitlistEntry = await request.json();

    // Validate required fields
    if (!body.name || !body.organization || !body.email || !body.type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate type
    if (!["chc", "sponsor", "cro"].includes(body.type)) {
      return NextResponse.json(
        { error: "Invalid organization type" },
        { status: 400 }
      );
    }

    // TODO: Store in database
    // For now, log the submission
    console.log("Waitlist submission:", {
      ...body,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Successfully joined the waitlist" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
