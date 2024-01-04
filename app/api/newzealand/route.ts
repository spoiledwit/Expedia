import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/services/auth";

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


    return NextResponse.json({
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
