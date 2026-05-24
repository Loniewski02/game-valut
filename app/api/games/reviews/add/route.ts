import { authOptions } from "@/lib/next-auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        {
          message: "You must be logged in",
        },
        {
          status: 401,
        },
      );
    }

    const data = await req.formData();

    const review = data.get("review")?.toString().trim();
    const gameId = data.get("gameId")?.toString();
    const rating = Number(data.get("rating"));

    if (!review || !gameId || Number.isNaN(rating)) {
      return NextResponse.json(
        {
          message: "Inputs can't be empty",
        },
        {
          status: 400,
        },
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        {
          message: "Please select a rating",
        },
        {
          status: 400,
        },
      );
    }

    if (review.length < 12) {
      return NextResponse.json(
        {
          message: "Review is too short",
        },
        {
          status: 400,
        },
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
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

    const game = await prisma.game.findUnique({
      where: {
        id: gameId,
      },
    });

    if (!game) {
      return NextResponse.json(
        {
          message: "Game not found",
        },
        {
          status: 404,
        },
      );
    }

    const existingReview = await prisma.review.findFirst({
      where: {
        userId: user.id,
        gameId,
      },
    });

    if (existingReview) {
      return NextResponse.json(
        {
          message: "You already reviewed this game",
        },
        {
          status: 409,
        },
      );
    }

    const newReview = await prisma.review.create({
      data: {
        rating,
        content: review,
        userId: user.id,
        gameId,
      },
    });

    return NextResponse.json(
      {
        data: { ...newReview, user: { username: user.username } },
        message: "Review added successfully",
      },
      {
        status: 201,
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
