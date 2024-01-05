import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongodb";
import Contact from "@/lib/db/models/contact";
import { checkAdmin } from "@/lib/middlewares/checkAdmin";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
    try {
      await dbConnect();
      await checkAdmin(req);
      const queries = await Contact.find().sort({ createdAt: -1 });
      return NextResponse.json({
        queries,
        status: "success",
      });
    } catch (error) {
      return NextResponse.json(
        {
          status: "Error",
          message: "Something Went Wrong",
          error: error,
        },
        {
          status: 500,
        }
      );
    }
  };