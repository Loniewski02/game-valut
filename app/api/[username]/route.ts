import { authOptions } from "@/lib/next-auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { username: string } }) {
  try {
    const session = await getServerSession(authOptions);

    const sessionUser = session?.user.username.toLowerCase();
    const username = params.username.toLowerCase();

    const isCurrentUser = Boolean(sessionUser === username);

    const user = await prisma.user.findUnique({
      where: {
        usernameLower: params.username.toLowerCase(),
      },
      select: {
        id: true,
        username: true,
        usernameLower: true,
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

    const reviews = await prisma.review.findMany({
      where: {
        user: {
          usernameLower: params.username.toLowerCase(),
        },
      },
      select: {
        rating: true,
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

    const averageRating = reviews.length
      ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(2)
      : 0;

    return NextResponse.json(
      {
        ...user,
        averageRating,
        isCurrentUser,
        reviewsCount: reviews.length,
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
