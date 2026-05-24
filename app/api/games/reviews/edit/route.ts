import { authOptions } from "@/lib/next-auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { reviewId, editedContent, editedRating } = await req.json();

    console.log(editedContent);
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

    if (!reviewId || !editedContent || !editedRating) {
      return NextResponse.json(
        {
          message: "Inputs can't be empty",
        },
        {
          status: 400,
        },
      );
    }

    if (editedRating < 1 || editedRating > 5) {
      return NextResponse.json(
        {
          message: "Invalid rating",
        },
        {
          status: 400,
        },
      );
    }

    if (editedContent.trim().length < 12) {
      return NextResponse.json(
        {
          message: "Review is too short",
        },
        {
          status: 400,
        },
      );
    }

    const review = await prisma.review.findUnique({
      where: {
        id: reviewId,
      },
    });

    if (!review) {
      return NextResponse.json(
        {
          message: "Review not found",
        },
        {
          status: 404,
        },
      );
    }

    if (review.userId !== session.user.id) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 403,
        },
      );
    }

    await prisma.review.update({
      where: {
        id: reviewId,
      },

      data: {
        content: editedContent,
        rating: editedRating,
      },
    });

    return NextResponse.json(
      {
        message: "Review updated successfully",
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
