import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/helpers";
import { emailReg } from "@/utils/constant";

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json(
        {
          message: "You must be logged in",
        },
        {
          status: 401,
        },
      );
    }

    const formData = await req.formData();

    const username = formData.get("username")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const oldPassword = formData.get("old-password")?.toString() || "";
    const newPassword = formData.get("new-password")?.toString() || "";

    if (username.length < 3 || username.length > 14) {
      return NextResponse.json(
        {
          message: "Username must be between 3 and 14 characters",
        },
        {
          status: 400,
        },
      );
    }

    if (!emailReg.test(email)) {
      return NextResponse.json(
        {
          message: "Invalid email address",
        },
        {
          status: 400,
        },
      );
    }

    if ((oldPassword && !newPassword) || (!oldPassword && newPassword)) {
      return NextResponse.json(
        {
          message: "Provide both old and new password",
        },
        {
          status: 400,
        },
      );
    }

    if (newPassword && newPassword.length < 8) {
      return NextResponse.json(
        {
          message: "New password must be at least 8 characters",
        },
        {
          status: 400,
        },
      );
    }

    if (username === currentUser.username && email === currentUser.email && !newPassword) {
      return NextResponse.json(
        {
          message: "No changes detected",
        },
        {
          status: 400,
        },
      );
    }

    if (username !== currentUser.username) {
      const existingUser = await prisma.user.findUnique({
        where: {
          usernameLower: username.toLowerCase(),
        },
      });

      if (existingUser) {
        return NextResponse.json(
          {
            message: "Username already exists",
          },
          {
            status: 409,
          },
        );
      }
    }

    if (email !== currentUser.email) {
      const existingEmail = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (existingEmail) {
        return NextResponse.json(
          {
            message: "Email already exists",
          },
          {
            status: 409,
          },
        );
      }
    }

    const updateData: {
      username?: string;
      usernameLower?: string;
      email?: string;
      password?: string;
    } = {};

    if (username !== currentUser.username) {
      updateData.username = username;

      updateData.usernameLower = username.toLowerCase();
    }

    if (email !== currentUser.email) {
      updateData.email = email;
    }

    if (oldPassword && newPassword) {
      const validPassword = await bcrypt.compare(oldPassword, currentUser.password);

      if (!validPassword) {
        return NextResponse.json(
          {
            message: "Old password is incorrect",
          },
          {
            status: 400,
          },
        );
      }

      updateData.password = await bcrypt.hash(newPassword, 10);
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: updateData,
    });

    return NextResponse.json(
      {
        message: "Profile updated successfully",
        user: {
          username: updatedUser.username,
          email: updatedUser.email,
        },
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
      {
        status: 500,
      },
    );
  }
}
