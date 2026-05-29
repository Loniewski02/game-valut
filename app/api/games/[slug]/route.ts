import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "@/lib/next-auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  try {
    const session = await getServerSession(authOptions);

    const rawGame = await prisma.game.findUnique({
      where: {
        slug: params.slug,
      },
      include: {
        userLists: {
          where: {
            userId: session?.user.id,
          },
          select: {
            status: true,
          },
        },
        reviews: {
          select: {
            rating: true,
          },
        },
        addedBy: {
          select: {
            username: true,
            usernameLower: true,
            id: true,
            favoriteGameId: true,
          },
        },
      },
    });

    if (!rawGame) {
      return NextResponse.json(
        {
          message: "Game not found",
        },
        {
          status: 404,
        },
      );
    }

    const similarGames = await prisma.game.findMany({
      where: {
        id: {
          not: rawGame.id,
        },
        genres: {
          hasSome: rawGame.genres,
        },
      },
      select: {
        id: true,
        title: true,
        slug: true,
        image: true,
        platforms: true,
        genres: true,

        reviews: {
          select: {
            rating: true,
          },
        },
      },
    });

    const minSimilarity = rawGame.genres.length === 1 ? 1 : 2;

    const mappedSimilarGames = similarGames
      .map((item) => {
        const similarity = item.genres.filter((genre) => rawGame.genres.includes(genre)).length;
        const totalRating = item.reviews.reduce((sum, review) => sum + review.rating, 0);

        return {
          id: item.id,
          title: item.title,
          slug: item.slug,
          image: item.image,
          platforms: item.platforms,
          genres: item.genres,
          rating: item.reviews.length > 0 ? Number((totalRating / item.reviews.length).toFixed(2)) : 0,
          similarity,
        };
      })
      .filter((item) => item.similarity >= minSimilarity)
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 6);

    const { userLists, reviews, addedBy, ...gameData } = rawGame;
    const totalReviews = reviews.length;

    const average =
      totalReviews > 0 ? Number(reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews).toFixed(2) : 0;

    const distribution = [5, 4, 3, 2, 1].map((rating) => ({
      rating,

      count: reviews.filter((review) => review.rating === rating).length,
    }));

    const listStatus = session ? rawGame.userLists[0]?.status ?? null : null;

    return NextResponse.json({
      game: {
        ...gameData,
        listStatus,
      },
      addedBy,
      rating: {
        average,
        count: totalReviews,
        distribution,
      },
      similarGames: mappedSimilarGames,
    });
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
