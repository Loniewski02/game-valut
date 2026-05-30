import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/helpers";

export async function DELETE(req: Request) {
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

    const username = formData.get("confirm")?.toString().trim() || "";

    if (username !== currentUser.username) {
      return NextResponse.json(
        {
          message: "Username does not match",
        },
        {
          status: 400,
        },
      );
    }
    await prisma.$transaction(async (tx) => {
      await tx.gameList.deleteMany({
        where: {
          userId: currentUser.id,
        },
      });
      await tx.user.update({
        where: {
          id: currentUser.id,
        },
        data: {
          isDeleted: true,
          username: `${currentUser.id}`,
          usernameLower: `${currentUser.id}`,
          email: `${currentUser.id}@deleted.local`,
          password: "",
          image: "/assets/profile.png",
          backgroundImage: "/assets/default.png",
          description: "",
          favoriteGameId: null,
        },
      });
    });

    return NextResponse.json(
      {
        message: "Account deleted successfully",
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
