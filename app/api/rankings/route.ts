import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const games = await prisma.game.findMany({
      where: {
        reviews: {
          some: {},
        },
      },
      select: {
        id: true,
        title: true,
        slug: true,
        image: true,
        genres: true,
        platforms: true,
        releaseDate: true,
        reviews: {
          select: {
            rating: true,
          },
        },
      },
    });

    const mappedGames = games.map((game) => {
      const totalRating = game.reviews.reduce((sum, review) => sum + review.rating, 0);

      return {
        ...game,
        rating: Number((totalRating / game.reviews.length).toFixed(2)),
      };
    });

    return NextResponse.json(mappedGames);
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Failed to fetch games" }, { status: 500 });
  }
}
