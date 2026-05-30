import { getCurrentUser } from "@/lib/helpers";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
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

    const { gameId } = await req.json();

    await prisma.gameList.create({
      data: {
        gameId,
        userId: user.id,
        status: "WANT_TO_PLAY",
      },
    });

    return NextResponse.json(
      {
        message: "Added to list",
      },
      { status: 200 },
    );
  } catch {
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
