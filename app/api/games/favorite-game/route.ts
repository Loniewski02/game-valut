import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/helpers";

export async function POST(req: Request) {
  try {
    const { gameId } = await req.json();

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

    if (!gameId) {
      return NextResponse.json(
        {
          message: "Game ID not found",
        },
        {
          status: 400,
        },
      );
    }

    const game = await prisma.game.findUnique({
      where: {
        id: gameId,
      },
    });

    if (!game) {
      return NextResponse.json(
        {
          message: "Game not found",
        },
        {
          status: 404,
        },
      );
    }

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        favoriteGameId: user.favoriteGameId === gameId ? null : gameId,
      },
    });

    return NextResponse.json(
      {
        message: user.favoriteGameId === gameId ? "Game removed from favourites" : "Game added to favourites",
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
