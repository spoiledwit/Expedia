import { errorResponse, successResponse } from "@/lib/api";
import getDb from "@/lib/db";
import { ObjectId } from "mongodb";
import { NextRequest } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const db = await getDb();
    const resp = await db
      .collection("contacts")
      .deleteOne({ _id: new ObjectId(params.id) });

    return successResponse(resp);
  } catch (error) {
    return errorResponse(error);
  }
}
