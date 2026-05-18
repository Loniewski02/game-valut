import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [totalGames, totalReviews, games] = await Promise.all([
      prisma.game.count(),
      prisma.review.count(),
      prisma.game.findMany({
        select: {
          releaseDate: true,
          reviews: {
            select: {
              rating: true,
            },
          },
        },
      }),
    ]);

    const ratings = games.flatMap((game) => game.reviews.map((review) => review.rating));
    const averageRating =
      ratings.length > 0 ? Number((ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length).toFixed(2)) : 0;
    const years = games.map((game) => game.releaseDate.getFullYear());
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);

    return NextResponse.json({
      totalGames,
      averageRating,
      totalReviews,
      yearsCovered: `${minYear}-${maxYear}`,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to fetch statistics",
      },
      { status: 500 },
    );
  }
}
