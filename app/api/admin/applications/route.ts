import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongodb";
import NewzealandForm from "@/lib/db/models/newzealand";
import { checkAdmin } from "@/lib/middlewares/checkAdmin";
import User from "@/lib/db/models/user";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
    try {
      await dbConnect();
      await checkAdmin(req);
  
      const applications = await NewzealandForm.find({}).lean(); // Use lean() to get plain JavaScript objects
      if (!applications || applications.length === 0) {
        return NextResponse.json(
          { status: "error", message: "No Applications Found" },
          { status: 403 }
        );
      }
  
      for (let i = 0; i < applications.length; i++) {
        if (applications[i].userId) {
          const user = await User.findById(applications[i].userId).lean();
          if (user) {
            applications[i].user = user;
          } else {
            applications[i].user = null; // or handle this case as needed
          }
        }
      }
  
      return NextResponse.json({
        status: "success",
        message: "Application Fetched Successfully",
        applications,
      });
    } catch (error) {
      return NextResponse.json(
        { status: "Error", message: "Something Went Wrong", error: error },
        { status: 500 }
      );
    }
  };
  
