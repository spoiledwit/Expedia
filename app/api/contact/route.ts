import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongodb";
import Contact from "@/lib/db/models/contact";
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await dbConnect();
    const { name, phone, email, job, education, nationality, message } =
      await req.json();

    const result = await Contact.create({
      name,
      phone,
      email,
      job,
      education,
      nationality,
      message,
    });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tbcgulfmarketing@gmail.com",
        pass: "gyqj dwxp nrmo qobv",
      },
    });

    const mailOptions = {
      from: "tbcgulfmarketing@gmail.com",
      to: "spoiledwit@gmail.com",
      subject: "New Enquiry Received from Website",
      text: `You have a new enquiry from the website:
                 
          Name: ${name}
          Phone: ${phone}
          Email: ${email}
          Job: ${job}
          Education: ${education}
          Nationality: ${nationality}
          Message: ${message ? message : "No Message Provided"}
          `,
    };
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      result,
      message: "Message Sent",
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
