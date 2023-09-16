import { errorResponse, successResponse } from "@/lib/api";
import getDb from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, email, phone, jobTitle, country, text } = await req.json();
    if (!name || !email || !phone || !jobTitle || !country || !text) {
      return new Response("missing required fields", { status: 400 });
    }

    const db = await getDb();

    const resp = await db
      .collection("contacts")
      .insertOne({ name, email, phone, jobTitle, country, text });

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
    const contacts = db.collection("contacts").find().toArray();

    return successResponse(contacts);
  } catch (error) {
    return errorResponse(error);
  }
}
