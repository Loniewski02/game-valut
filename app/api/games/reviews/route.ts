import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { gameId } = await req.json();

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

    const reviews = await prisma.review.findMany({
      where: {
        gameId,
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            usernameLower: true,
            image: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(reviews);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to fetch reviews",
      },
      {
        status: 500,
      },
    );
  }
}
