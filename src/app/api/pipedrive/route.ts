import { NextRequest, NextResponse } from "next/server";

const PIPEDRIVE_API_TOKEN = process.env.PIPEDRIVE_API_TOKEN;
const PIPEDRIVE_BASE_URL = "https://api.pipedrive.com/v1";

type FormSource = "sponsors" | "patients" | "investors" | "waitlist" | "contact" | "newsletter";

interface FormSubmission {
  name?: string;
  email: string;
  phone?: string;
  comment?: string;
  newsletter?: boolean;
  source: FormSource;
}

const SOURCE_TAGS: Record<FormSource, string> = {
  sponsors: "TrialCliniq Sponsors",
  patients: "TrialCliniq Patients",
  investors: "TrialCliniq Investors",
  waitlist: "TrialCliniq Waitlist",
  contact: "TrialCliniq Contact",
  newsletter: "TrialCliniq Newsletter",
};

export async function POST(request: NextRequest) {
  try {
    if (!PIPEDRIVE_API_TOKEN) {
      console.error("PIPEDRIVE_API_TOKEN is not configured");
      return NextResponse.json(
        { error: "Pipedrive integration not configured" },
        { status: 500 }
      );
    }

    const body: FormSubmission = await request.json();
    const { name, email, phone, comment, newsletter, source } = body;

    // Validate required fields
    if (!email || !source) {
      return NextResponse.json(
        { error: "Missing required fields: email, source" },
        { status: 400 }
      );
    }

    // Validate source
    if (!["sponsors", "patients", "investors", "waitlist", "contact", "newsletter"].includes(source)) {
      return NextResponse.json(
        { error: "Invalid source. Must be: sponsors, patients, investors, waitlist, contact, or newsletter" },
        { status: 400 }
      );
    }

    // Step 1: Create person in Pipedrive
    const personData: Record<string, unknown> = {
      name: name || email.split('@')[0], // Use email prefix if name not provided
      email: [{ value: email, primary: true, label: "work" }],
    };

    if (phone) {
      personData.phone = [{ value: phone, primary: true, label: "mobile" }];
    }

    console.log("Creating person in Pipedrive:", personData);

    const personResponse = await fetch(
      `${PIPEDRIVE_BASE_URL}/persons?api_token=${PIPEDRIVE_API_TOKEN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(personData),
      }
    );

    const personResult = await personResponse.json();
    console.log("Person response:", JSON.stringify(personResult, null, 2));

    if (!personResult.success) {
      console.error("Failed to create person in Pipedrive:", personResult);
      return NextResponse.json(
        { error: personResult.error || "Failed to create contact in CRM" },
        { status: 500 }
      );
    }

    const personId = personResult.data.id;

    // Step 2: Create Lead linked to person
    const tag = SOURCE_TAGS[source];
    const leadTitle = `${tag} - ${name || email}`;

    const leadData: Record<string, unknown> = {
      title: leadTitle,
      person_id: personId,
    };

    console.log("Creating lead in Pipedrive:", leadData);

    const leadResponse = await fetch(
      `${PIPEDRIVE_BASE_URL}/leads?api_token=${PIPEDRIVE_API_TOKEN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
      }
    );

    const leadResult = await leadResponse.json();
    console.log("Lead response:", JSON.stringify(leadResult, null, 2));

    if (!leadResult.success) {
      console.error("Failed to create lead in Pipedrive:", leadResult);
      return NextResponse.json(
        { error: leadResult.error || "Failed to create lead in CRM" },
        { status: 500 }
      );
    }

    const leadId = leadResult.data.id;

    // Step 3: Add note with additional details
    let noteContent = "";
    if (comment) {
      noteContent += `Comment: ${comment}\n`;
    }
    if (newsletter) {
      noteContent += `Newsletter: Subscribed\n`;
    }
    noteContent += `Submitted: ${new Date().toISOString()}`;

    if (leadId && noteContent) {
      await fetch(
        `${PIPEDRIVE_BASE_URL}/notes?api_token=${PIPEDRIVE_API_TOKEN}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: noteContent,
            lead_id: leadId,
            pinned_to_lead_flag: true,
          }),
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Lead created successfully",
      leadId,
      personId,
    });
  } catch (error) {
    console.error("Pipedrive API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
