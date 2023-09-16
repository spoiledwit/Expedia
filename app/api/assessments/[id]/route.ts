import { errorResponse, successResponse } from "@/lib/api";
import getDb from "@/lib/db";
import { ObjectId } from "mongodb";
import { NextRequest } from "next/server";

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const db = await getDb();
    const resp = await db
      .collection("assessments")
      .deleteOne({ _id: new ObjectId(params.id) });

    return successResponse(resp);
  } catch (error) {
    return errorResponse(error);
  }
}
