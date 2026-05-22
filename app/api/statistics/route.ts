export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const period = searchParams.get("period");

    let dateFilter: Date | null = null;

    switch (period) {
      case "Weekly": {
        const date = new Date();

        date.setDate(date.getDate() - 7);
        dateFilter = date;
        break;
      }
      case "Monthly": {
        const date = new Date();

        date.setMonth(date.getMonth() - 1);
        dateFilter = date;
        break;
      }
      case "Yearly": {
        const date = new Date();

        date.setFullYear(date.getFullYear() - 1);
        dateFilter = date;
        break;
      }
      default:
        dateFilter = null;
    }

    const [totalGames, totalReviews, games] = await Promise.all([
      prisma.game.count(),
      prisma.review.count({
        where: {
          ...(dateFilter && {
            createdAt: {
              gte: dateFilter,
            },
          }),
        },
      }),
      prisma.game.findMany({
        where: {
          ...(dateFilter && {
            reviews: {
              some: {
                createdAt: {
                  gte: dateFilter,
                },
              },
            },
          }),
        },
        select: {
          releaseDate: true,
          reviews: {
            where: {
              ...(dateFilter && {
                createdAt: {
                  gte: dateFilter,
                },
              }),
            },
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
    const minYear = years.length > 0 ? Math.min(...years) : 0;
    const maxYear = years.length > 0 ? Math.max(...years) : 0;

    return NextResponse.json({
      totalGames,
      averageRating,
      totalReviews,
      yearsCovered: years.length > 0 ? `${minYear}-${maxYear}` : "-",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to fetch statistics",
      },
      {
        status: 500,
      },
    );
  }
}
