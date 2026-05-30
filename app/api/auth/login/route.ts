import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const identifier = data.get("identifier")?.toString().trim().toLowerCase();
    const password = data.get("password")?.toString();

    if (!identifier || !password) {
      return NextResponse.json(
        {
          message: "Inputs can't be empty",
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

    const user = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: identifier,
          },
          {
            usernameLower: identifier,
          },
        ],
      },
    });

    if (!user || user.isDeleted) {
      return NextResponse.json(
        {
          message: "No user found. Please check credentials",
        },
        {
          status: 404,
        },
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        {
          message: "Incorrect password",
        },
        {
          status: 401,
        },
      );
    }

    return NextResponse.json(
      {
        username: user.username,
        message: "Logged in",
      },
      {
        status: 200,
      },
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
