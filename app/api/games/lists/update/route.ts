import { getCurrentUser } from "@/lib/helpers";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        {
          message: "You must be logged in",
        },
        {
          status: 401,
        },
      );
    }

    const { gameId, status } = await req.json();

    const existing = await prisma.gameList.findUnique({
      where: {
        userId_gameId: {
          userId: user.id,
          gameId,
        },
      },
    });

    if (!existing) {
      return NextResponse.json(
        {
          message: "Not found",
        },
        {
          status: 404,
        },
      );
    }

    if (status === null) {
      await prisma.gameList.delete({
        where: {
          userId_gameId: {
            userId: user.id,
            gameId,
          },
        },
      });

      return NextResponse.json({
        message: "Removed from list",
      });
    }

    await prisma.gameList.update({
      where: {
        userId_gameId: {
          userId: user.id,
          gameId,
        },
      },
      data: {
        status,
      },
    });

    return NextResponse.json(
      {
        message: `Updated to: ${status}`,
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
