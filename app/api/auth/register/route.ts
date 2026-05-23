import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { emailReg } from "@/utils/constant";

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const username = data.get("username")?.toString().trim() as string;
    const email = data.get("email")?.toString().trim().toLowerCase();
    const password = data.get("password")?.toString();
    const password2 = data.get("password2")?.toString();

    const usernameLower = username.toLowerCase();

    const cuidPattern = /^c[a-z0-9]{24}$/;

    if (cuidPattern.test(usernameLower)) {
      return NextResponse.json(
        {
          message: "Username unavailable",
        },
        { status: 400 },
      );
    }

    if (!username || !email || !password || !password2) {
      return NextResponse.json(
        {
          message: "Inputs can't be empty",
        },
        { status: 400 },
      );
    }

    if (username.length < 3 || username.length > 14) {
      return NextResponse.json(
        {
          message: "Username must be between 3 and 14 characters",
        },
        { status: 400 },
      );
    }

    if (!emailReg.test(email)) {
      return NextResponse.json(
        {
          message: "Invalid email address",
        },
        { status: 400 },
      );
    }
    if (password.length < 8) {
      return NextResponse.json(
        {
          message: "Password is too short",
        },
        { status: 400 },
      );
    }
    if (password !== password2) {
      return NextResponse.json(
        {
          message: "Passwords don't match",
        },
        { status: 400 },
      );
    }

    const [existingEmail, existingUsername] = await Promise.all([
      prisma.user.findUnique({
        where: {
          email,
        },
      }),
      prisma.user.findUnique({
        where: {
          usernameLower,
        },
      }),
    ]);

    if (existingEmail) {
      return NextResponse.json(
        {
          message: "Email already exists",
        },
        { status: 409 },
      );
    }

    if (existingUsername) {
      return NextResponse.json(
        {
          message: "Username already exists",
        },
        { status: 409 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        username,
        usernameLower,
        email,
        password: hashedPassword,
        image: "/assets/profile.png",
      },
    });

    return NextResponse.json(
      {
        message: "Account created successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      { status: 500 },
    );
  }
}
