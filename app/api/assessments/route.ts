import { errorResponse, successResponse } from "@/lib/api";
import getDb from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, email, phone, jobTitle, education, country, visaType } =
      await req.json();

    if (
      !name ||
      !email ||
      !phone ||
      !jobTitle ||
      !country ||
      !education ||
      !visaType
    ) {
      return new Response("missing required fields", { status: 400 });
    }

    const db = await getDb();

    const resp = await db
      .collection("assessments")
      .insertOne({
        name,
        email,
        phone,
        jobTitle,
        country,
        visaType,
        education,
      });

    if (resp.acknowledged) {
      return new Response("contact created", { status: 201 });
    }
    return errorResponse("bad request", 400);
  } catch (error) {
    return errorResponse(error, 500);
  }
}

export async function GET() {
  try {
    const db = await getDb();
    const assessments = db.collection("assessments").find().toArray();

    return successResponse(assessments);
  } catch (error) {
    return errorResponse(error);
  }
}
