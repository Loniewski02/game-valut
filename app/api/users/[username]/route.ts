import { authOptions } from "@/lib/next-auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
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
        email: true,
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
        _count: {
          select: {
            addedGames: true,
            lists: {
              where: { status: "PLAYED" },
            },
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

    return NextResponse.json({
      ...user,
      averageRating,
      reviewsCount: reviews.length,
      addedGamesCount: user._count.addedGames,
      listCount: user._count.lists,
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
