import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const platform = searchParams.get("platform");
    const genre = searchParams.get("genre");
    const period = searchParams.get("period");

    const now = new Date();
    let reviewDateFilter = {};

    if (period === "Weekly") {
      const date = new Date();
      date.setDate(now.getDate() - 7);

      reviewDateFilter = {
        gte: date,
      };
    }

    if (period === "Monthly") {
      const date = new Date();
      date.setMonth(now.getMonth() - 1);

      reviewDateFilter = {
        gte: date,
      };
    }

    if (period === "Yearly") {
      const date = new Date();
      date.setFullYear(now.getFullYear() - 1);

      reviewDateFilter = {
        gte: date,
      };
    }

    const reviewFilter =
      period && period !== "All time"
        ? {
            createdAt: reviewDateFilter,
          }
        : {};

    const gameFilters = {
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
      reviews: {
        some: reviewFilter,
      },
    };

    const games = await prisma.game.findMany({
      where: gameFilters,
      select: {
        id: true,
        title: true,
        slug: true,
        image: true,
        genres: true,
        platforms: true,
        releaseDate: true,
        reviews: {
          where: reviewFilter,
          select: {
            rating: true,
          },
        },
      },
    });

    const mappedGames = games.map(({ reviews, ...game }) => {
      const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);

      return {
        ...game,
        rating: Number((totalRating / reviews.length).toFixed(2)),
      };
    });

    const sortedGames = mappedGames.sort((a, b) => b.rating - a.rating);

    return NextResponse.json(sortedGames);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to fetch rankings",
      },
      { status: 500 },
    );
  }
}
