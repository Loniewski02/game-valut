import { getCurrentUser } from "@/lib/helpers";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { reviewId } = await req.json();

    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        {
          message: "You must be logged in",
        },
        {
          status: 401,
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

    await prisma.review.delete({
      where: {
        id: reviewId,
      },
    });

    return NextResponse.json(
      {
        message: "Review deleted successfully",
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
