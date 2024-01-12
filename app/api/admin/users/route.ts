import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongodb";
import { checkAdmin } from "@/lib/middlewares/checkAdmin";
import User from "@/lib/db/models/user";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
    try {
      await dbConnect();
      await checkAdmin(req);
  
      const users = await User.find({}).sort({ createdAt: -1 });
      if (!users || users.length === 0) {
        return NextResponse.json(
          { status: "error", message: "No Users Found" },
          { status: 403 }
        );
      }

      return NextResponse.json({
        status: "success",
        message: "Application Fetched Successfully",
        users
      });
    } catch (error) {
      return NextResponse.json(
        { status: "Error", message: "Something Went Wrong", error: error },
        { status: 500 }
      );
    }
  };
  



export const revalidate = 0;