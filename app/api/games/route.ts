import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const platform = searchParams.get("platform");
    const genre = searchParams.get("genre");
    const title = searchParams.get("title");

    const games = await prisma.game.findMany({
      where: {
        ...(platform && {
          platforms: {
            has: platform,
          },
        }),
        ...(genre && {
          genres: {
            has: genre,
          },
        }),
        ...(title && {
          title: {
            contains: title,
            mode: "insensitive",
          },
        }),
      },

      select: {
        id: true,
        title: true,
        slug: true,
        image: true,
        genres: true,
        platforms: true,
        reviews: {
          select: {
            rating: true,
          },
        },
      },

      orderBy: {
        createdAt: "desc",
      },
    });

    const mappedGames = games.map(({ reviews, ...game }) => {
      const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);

      return {
        ...game,
        rating: reviews.length > 0 ? Number((totalRating / reviews.length).toFixed(2)) : 0,
      };
    });

    return NextResponse.json(mappedGames);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to fetch games",
      },
      { status: 500 },
    );
  }
}
