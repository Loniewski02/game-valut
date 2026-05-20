import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { emailReg } from "@/app/lib/constant";
import profile from "@/public/assets/profile.png";

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const username = data.get("username")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const password = data.get("password")?.toString();
    const password2 = data.get("password2")?.toString();

    if (!username || !email || !password || !password2) {
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
    if (password !== password2) {
      return NextResponse.json({
        message: "Passwords don't match",
        status: 400,
      });
    }

    const [existingEmail, existingUsername] = await Promise.all([
      prisma.user.findUnique({
        where: {
          email,
        },
      }),
      prisma.user.findUnique({
        where: {
          username,
        },
      }),
    ]);

    if (existingEmail) {
      return NextResponse.json({
        message: "Email already exists",
        status: 409,
      });
    }

    if (existingUsername) {
      return NextResponse.json({
        message: "Username already exists",
        status: 409,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        image: profile.src,
      },
    });

    return NextResponse.json({
      message: "Account created successfully",
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
