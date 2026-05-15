import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const games = await prisma.game.findMany({
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
    });

    const mappedGames = games.map((game) => {
      const rating =
        game.reviews.length > 0
          ? game.reviews.reduce((acc, review) => acc + review.rating, 0) / game.reviews.length
          : null;

      return {
        id: game.id,
        title: game.title,
        slug: game.slug,
        image: game.image,
        genres: game.genres,
        platforms: game.platforms,
        rating,
      };
    });

    return NextResponse.json(mappedGames);
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Failed to fetch games" }, { status: 500 });
  }
}
