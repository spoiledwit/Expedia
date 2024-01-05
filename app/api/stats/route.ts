import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/services/auth";
import NewzealandForm from "@/lib/db/models/newzealand";
import User from "@/lib/db/models/user";
import Contact from "@/lib/db/models/contact";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await dbConnect();
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        {
          status: "error",
          message:
            "You must be signed in to view the protected content on this page.",
        },
        {
          status: 403,
        }
      );
    }

    const {id} = session.user;
    const user = await User.findById(id);
    if (!user.isAdmin) {
        return NextResponse.json(
            {
            status: "error",
            message: "You are not authorized to view this page",
            },
            {
            status: 403,
            }
        );
    }
    

    const applications = await NewzealandForm.find({}).countDocuments();
    const users = await User.find({}).countDocuments();
    const contacts = await Contact.find({}).countDocuments();
    // those are pending which dont have status completed
    const pendingApplications = await NewzealandForm.find({
      status: { $ne: "Completed" },
    }).countDocuments();

    return NextResponse.json({
      status: "success",
      message: "Application Fetched Successfully",
      stats: {
        applications,
        users,
        contacts,
        pendingApplications,
      },
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
