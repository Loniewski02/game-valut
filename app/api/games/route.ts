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
        platforms: true,
      },
    });

    return NextResponse.json(games);
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Failed to fetch games" }, { status: 500 });
  }
}
