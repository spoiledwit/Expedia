import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/services/auth";
import NewzealandForm from "@/lib/db/models/newzealand";

export const POST = async (req: NextRequest): Promise<NextResponse> => {
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
  
    const { id } = session.user;

    // checking if there's already an application
    const existingApplication = await NewzealandForm.findOne({ userId: id });
    if (existingApplication) {
      return NextResponse.json(
        {
          status: "error",
          message: "You have already submitted an application",
        },
        {
          status: 403,
        }
      );
    }

    const data = await req.json();
    const application = await NewzealandForm.create({
      ...data,
      userId: id,
      status: "Pending",
    });

    return NextResponse.json({
      status: "success",
      message: "Application Submitted Successfully",
      data: application,
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
  
    const { id } = session.user;

    const applications = await NewzealandForm.find({ userId: id });

    if (!applications) {
      return NextResponse.json(
        {
          status: "error",
          message: "You have not submitted an application",
        },
        {
          status: 403,
        }
      );
    }

    return NextResponse.json({
      status: "success",
      message: "Application Fetched Successfully",
      applications,
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