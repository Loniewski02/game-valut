import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { username: string } }) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        usernameLower: params.username.toLowerCase(),
      },

      select: {
        id: true,
        username: true,
        image: true,
        backgroundImage: true,
        description: true,
        createdAt: true,
        favoriteGame: {
          select: {
            title: true,
            slug: true,
            image: true,
          },
        },
        reviews: {
          select: {
            id: true,
            rating: true,
            content: true,
            createdAt: true,
            game: {
              select: {
                title: true,
              },
            },
          },
        },
        addedGames: {
          select: {
            id: true,
          },
        },
        lists: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!user || user.username === user.id) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(
      {
        ...user,
        reviewsCount: user.reviews.length,
        addedGamesCount: user.addedGames.length,
        listCount: user.lists.length,
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
