import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { emailReg } from "@/utils/constant";

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const email = data.get("email")?.toString().trim();
    const password = data.get("password")?.toString();

    if (!email || !password) {
      return NextResponse.json({
        message: "Inputs can't be empty",
        status: 400,
      });
    }
    if (!emailReg.test(email)) {
      return NextResponse.json({
        message: "Invalid email address",
        status: 400,
      });
    }
    if (password.length < 8) {
      return NextResponse.json({
        message: "Password is too short",
        status: 400,
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json({
        message: "No user found. Please check credentials",
        status: 404,
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({
        message: "Incorrect password",
        status: 401,
      });
    }

    return NextResponse.json({
      username: user.username,
      message: "Logged in",
      status: 200,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      message: "Something went wrong",
      status: 500,
    });
  }
}
