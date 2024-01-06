import dbConnect from "@/lib/db/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/lib/db/models/user";
import { hash } from "bcrypt";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const { name, email, password, countries } = await request.json();
  await dbConnect();
  try {
    // checkling if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        {
          status: 400,
        }
      );
    }

    // hash password
    const hashedPassword = await hash(password, 10);
    // creating new user
    const newUser = new User({
      name,
      email,
      countries,
      isAdmin: false,
      password: hashedPassword,
    });
    await newUser.save();

    // sending an email to the user
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "tbcgulfmarketing@gmail.com",
    //     pass: "gyqj dwxp nrmo qobv",
    //   },
    // });

    // const mailOptions = {
    //   from: "tbcgulfmarketing@gmail.com",
    //   to: newUser.email,
    //   subject: "Welcome to Centennial Migration!",
    //   text: `Dear, ${newUser.name}

    //   Warm Greetings!
    //   Thank you for signing up with Centennial Migration and availing our services!

    //   We will make sure that you will be guided along the process of your application with quality service and
    //   assistance.

    //   In the process, it is necessary to have proper coordination in both ways for the smooth flow of your application.
    //   We will be mostly communicating through email or application for records and calls will be made for urgent
    //   issues and clarifications respectively. If not, please consider writing us an email.
    //   You will be receiving an email soon for the Requirements needed for your selected program.

    //   To start with your application, please visit: https://centennialmigration.com/dashboard
    //   Thank you once again!`,
    // };

    // try {
    //   await transporter.sendMail(mailOptions);
    // } catch (error) {
    //   console.error("Error sending email:", error);
    // }

    // const mailOptions2 = {
    //   from: "tbcgulfmarketing@gmail.com",
    //   to: newUser.email,
    //   subject: "Notice from Centennial Migration",
    //   text: `Just to inform you sir/ma'am,

    //   Our main point of communication will be through email - as we are system based and
    //   all purely online applications. Please be informed also that we don't have any access to WhatsApp. Any urgent
    //   matters, we will be the one to call you directly on your Mobile Number.

    //   After you receive the call, we will be sharing with you the Required Documents needed to start on your
    //   application.`,
    // };

    // try {
    //   await transporter.sendMail(mailOptions2);
    // } catch (error) {
    //   console.error("Error sending email:", error);
    // }

    return NextResponse.json(
      {
        success: true,
        message: "User created successfully",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
        error: error,
      },
      {
        status: 500,
      }
    );
  }
}
